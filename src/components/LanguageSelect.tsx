"use client";

import Select, { components, OptionProps, SingleValueProps, GroupBase } from "react-select";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const FLAG_RADIUS = 9;

interface LanguageOption {
  value: string;
  label: string;
  countryCode: string;
}

const languages: LanguageOption[] = [
  { value: "en", label: "English", countryCode: "gb" },
  { value: "es", label: "Español", countryCode: "es" },
];

const Option = (props: OptionProps<LanguageOption, false, GroupBase<LanguageOption>>) => (
  <components.Option {...props}>
    <span style={{ display: "flex", alignItems: "center", gap: 8, padding: 0 }}>
      <span className={`fi fi-${props.data.countryCode}`} aria-label={`Flag of ${props.data.label}`}></span>
      <span className="text-gray-300">{props.data.label}</span>
    </span>
  </components.Option>
);

const SingleValue = (props: SingleValueProps<LanguageOption, false, GroupBase<LanguageOption>>) => (
  <components.SingleValue {...props}>
    <span style={{ display: "flex", alignItems: "center", gap: 8, padding: 0 }}>
      <span className={`fi fi-${props.data.countryCode}`} aria-label={`Flag of ${props.data.label}`}></span>
    </span>
  </components.SingleValue>
);

export default function LanguageSelect({ onChange }: { onChange?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Idioma actual desde la URL, ej: /en/... o /es/...
  const currentLocale = pathname.split("/")[1];
  const selectedLang = languages.find(l => l.value === currentLocale) ?? languages[0];

  // 🛡️ Redirección si el idioma no es válido
  useEffect(() => {
    if (mounted) {
      const isValidLocale = languages.some(lang => lang.value === currentLocale);
      if (!isValidLocale) {
        const segments = pathname.split("/");
        segments[1] = "en"; // Idioma por defecto
        const newPath = segments.join("/") || "/en";
        router.replace(newPath);
      }
    }
  }, [mounted, currentLocale, pathname, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (selectedOption: LanguageOption | null) => {
    if (selectedOption && selectedOption.value !== currentLocale) {
      const segments = pathname.split("/");
      segments[1] = selectedOption.value;
      const newPath = segments.join("/") || "/";
      router.push(newPath);

      if (onChange) onChange();
    }
  };

  if (!mounted) return null;

  return (
    <Select
      options={languages}
      value={selectedLang}
      onChange={handleChange}
      isSearchable={false}
      components={{ Option, SingleValue }}
      menuPlacement="auto"
      styles={{
        control: (base) => ({
          ...base,
          background: "transparent",
          borderColor: "transparent",
          minHeight: 28,
          minWidth: 72,
          cursor: "pointer",
          padding: "0 2px",
          transition: "border 0.15s",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "0 2px",
          minHeight: 0,
          justifyContent: "center",
        }),
        singleValue: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }),
        menu: (base) => ({
          ...base,
          background: "#232323",
          borderRadius: `${FLAG_RADIUS + 3}px`,
          overflow: "hidden",
          boxShadow: "0 4px 18px #0d0d0e55",
          minWidth: 110,
          padding: 0,
          zIndex: 2000,
        }),
        option: (base, state) => ({
          ...base,
          background: state.isSelected || state.isFocused ? "#33343a" : "#232323",
          color: "#eee",
          display: "flex",
          alignItems: "center",
          padding: "6px 12px",
          cursor: "pointer",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "#bdbdbd",
          padding: 2,
        }),
        indicatorSeparator: () => ({ display: "none" }),
        input: (base) => ({
          ...base,
          color: "transparent",
          margin: 0,
          padding: 0,
        }),
      }}
      aria-label="Selector de idioma"
    />
  );
}
