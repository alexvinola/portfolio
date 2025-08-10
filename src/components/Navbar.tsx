"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiHome, FiUser, FiFolder, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import Loading from "@/app/[locale]/loading";
import Link from "next/link";
import LanguageSelect from "@/components/LanguageSelect";

// Importar solo los diccionarios pequeños del navbar
import en from "../dictionaries/navbar/en.json";
import es from "../dictionaries/navbar/es.json";

const validLocales = ["en", "es"] as const;
type Locale = typeof validLocales[number];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Detectar locale desde el primer segmento de la URL
  const segment = pathname?.split("/")[1] || "en";
  const locale: Locale = validLocales.includes(segment as Locale) ? (segment as Locale) : "en";

  // Elegir diccionario según idioma
  const dictionary = locale === "es" ? es : en;

  // Redirección si el idioma no es válido
  useEffect(() => {
    if (!validLocales.includes(segment as Locale)) {
      router.replace(`/en${pathname === "/" ? "" : pathname}`);
    }
  }, [segment, pathname, router]);

  const toggleMenu = () => {
    if (!showLoading) setMenuOpen((open) => !open);
  };

  const handleNavigation = (href: string) => {
    if (showLoading) return;
    setMenuOpen(false);
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      router.push(`/${locale}${href}`);
    }, 500);
  };

  if (showLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const navItems = [
    { label: dictionary.home, href: "/", icon: FiHome },
    { label: dictionary.about, href: "/about", icon: FiUser },
    { label: dictionary.projects, href: "/projects", icon: FiFolder },
    { label: dictionary.contact, href: "/contact", icon: FiMail },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl backdrop-blur-md bg-black/60 border border-[#232323] shadow-lg px-6 py-2 max-w-4xl w-[95%]">
      <div className="flex items-center justify-between">
        <Link href={`/${locale}`} className="text-white font-bold tracking-widest text-lg">
          Av.
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-gray-200 text-sm items-center">
          {navItems.map(({ label, href, icon: Icon }) => {
            const fullHref = `/${locale}${href}`;
            const isActive =
                  (href === "/" && pathname === `/${locale}`) ||
                  pathname === fullHref;

            return (
              <li key={href}>
                <Link
                  href={fullHref}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(href);
                  }}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md text-gray-300 transition-colors duration-200 hover:text-white hover:bg-white/10 ${
                    isActive ? "text-white bg-white/10" : ""
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <LanguageSelect />
          </li>
        </ul>

        {/* Botón mobile */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="block md:hidden text-gray-300 hover:text-white"
          type="button"
          disabled={showLoading}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <ul className="mt-4 flex flex-col gap-3 text-gray-200 text-base md:hidden">
            {navItems.map(({ label, href, icon: Icon }) => {
              const fullHref = `/${locale}${href}`;
              const isActive =
                  (href === "/" && pathname === `/${locale}`) ||
                  pathname === fullHref;
              return (
                <li key={href}>
                  <Link
                    href={fullHref}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(href);
                    }}
                    className={`flex items-center justify-between gap-3 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 ${
                      isActive ? "text-white bg-white/10" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={20} />
                      <span>{label}</span>
                    </span>
                    {isActive && (
                      <FaRegCheckCircle size={20} className="text-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex justify-center md:hidden">
            <LanguageSelect onChange={() => setMenuOpen(false)}/>
          </div>
        </>
      )}
    </nav>
  );
}
