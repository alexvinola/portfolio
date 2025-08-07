"use client";

import Select, { components, OptionProps, SingleValueProps, GroupBase } from "react-select";
import { useState, useEffect } from "react";
import Image from "next/image";

const FLAG_WIDTH = 38;
const FLAG_HEIGHT = 26;
const FLAG_RADIUS = 9;

interface LanguageOption {
  value: string;
  label: string;
  img: string;
}

const languages: LanguageOption[] = [
  { value: "en", label: "English", img: "/flags/gb.svg" },
  { value: "es", label: "Español", img: "/flags/es.svg" },
];

const Option = (props: OptionProps<LanguageOption, false, GroupBase<LanguageOption>>) => (
  <components.Option {...props}>
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: 0,
      }}
    >
      <Image
        src={props.data.img}
        alt={props.data.label}
        width={FLAG_WIDTH}
        height={FLAG_HEIGHT}
        style={{
          borderRadius: `${FLAG_RADIUS}px`,
          objectFit: "cover",
          border: "1.5px solid #232323",
          boxShadow: "0 1px 4px #090a",
          display: "block",
        }}
      />
      <span>{props.data.label}</span>
    </span>
  </components.Option>
);

const SingleValue = (props: SingleValueProps<LanguageOption, false, GroupBase<LanguageOption>>) => (
  <components.SingleValue {...props}>
    <span
      style={{
        display: "flex",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Image
        src={props.data.img}
        alt={props.data.label}
        width={FLAG_WIDTH}
        height={FLAG_HEIGHT}
        style={{
          borderRadius: `${FLAG_RADIUS}px`,
          objectFit: "cover",
          border: "1.5px solid #232323",
          boxShadow: "0 1px 4px #090a",
          display: "block",
        }}
        unoptimized={false} // opcional, si quieres que Next.js optimice la imagen
      />
      <span>{props.data.label}</span>
    </span>
  </components.SingleValue>
);

export default function LanguageSelect() {
  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(languages[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (selectedOption: LanguageOption | null) => {
    if (selectedOption) {
      setSelectedLang(selectedOption);
      // Lógica de cambio de idioma si la necesitas
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
      menuPlacement="bottom"
      styles={{
        control: (base) => ({
          ...base,
          background: "rgba(20,20,20,0.78)",
          borderColor: "#232323",
          minHeight: FLAG_HEIGHT + 8,
          minWidth: FLAG_WIDTH + 22,
          maxWidth: 100,
          borderRadius: `${FLAG_RADIUS + 3}px`,
          boxShadow: "0 1px 6px #0d0d0e22",
          cursor: "pointer",
          padding: "0 4px",
          transition: "border 0.15s",
        }),
        singleValue: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "0 4px",
          minHeight: 0,
          justifyContent: "center",
        }),
        menu: (base) => ({
          ...base,
          background: "#232323",
          borderRadius: `${FLAG_RADIUS + 3}px`,
          overflow: "hidden",
          boxShadow: "0 4px 18px #0d0d0e55",
          minWidth: 84,
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
