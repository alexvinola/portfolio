"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiHome, FiUser, FiFolder, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import Loading from "@/app/loading";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "About", href: "/about", icon: FiUser },
  { label: "Projects", href: "/projects", icon: FiFolder },
  { label: "Contact", href: "/contact", icon: FiMail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    if (!showLoading) setMenuOpen((open) => !open);
  };

  const handleNavigation = (href: string) => {
    if (showLoading) return;

    setMenuOpen(false);
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      router.push(href);
    }, 1000);
  };

  if (showLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <nav
      className="
        fixed top-6 left-1/2 transform -translate-x-1/2 z-50
        rounded-2xl
        backdrop-blur-md
        bg-black/60
        border border-[#232323]
        shadow-lg
        px-6 py-2
        max-w-4xl w-[95%]
      "
      style={{ backgroundColor: "rgba(20,20,20,0.75)" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold tracking-widest text-lg">
          Av.
        </Link>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6 text-gray-200 text-sm items-center">
          {navItems.map(({ label, href, icon: Icon }) => {
            // Determina si es la ruta actual para marcar activo
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(href);
                  }}
                  className={`
                    flex items-center gap-2
                    px-3 py-1 rounded-md
                    text-gray-300
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                    cursor-pointer select-none
                    hover:text-white hover:bg-white/10
                    ${isActive ? "text-white bg-white/10" : ""}
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="block md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          type="button"
          disabled={showLoading}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="mt-4 flex flex-col gap-3 text-gray-200 text-base md:hidden">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(href);
                  }}
                  className={`
                    flex items-center justify-between gap-3
                    px-3 py-2 rounded-md
                    text-gray-300
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                    cursor-pointer select-none
                    hover:text-white hover:bg-white/10
                    ${isActive ? "text-white bg-white/10" : ""}
                  `}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} aria-hidden="true" />
                    <span>{label}</span>
                  </span>
                  {isActive && (
                    <FaRegCheckCircle
                      size={20}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
