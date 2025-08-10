"use client";

import React, { createContext, useContext, ReactNode } from "react";

// 🔹 Tipo Dictionary corregido: acepta strings, objetos y arrays
export type Dictionary = {
  [key: string]: string | Dictionary | Dictionary[];
};

interface TranslationsContextValue {
  locale: string;
  dictionary: Dictionary;
  t: (key: string) => string;
}

const TranslationsContext = createContext<TranslationsContextValue | undefined>(undefined);

interface TranslationsProviderProps {
  locale: string;
  dictionary: Dictionary;
  children: ReactNode;
}

export function TranslationsProvider({
  locale,
  dictionary,
  children,
}: TranslationsProviderProps) {
  // Función para obtener la traducción por clave con soporte de "puntos"
  const t = (key: string): string => {
    const keys = key.split(".");
    let current: Dictionary | string = dictionary;

    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k] as Dictionary | string;
      } else {
        return key; // fallback si no encuentra la traducción
      }
    }

    return typeof current === "string" ? current : key;
  };

  return (
    <TranslationsContext.Provider value={{ locale, dictionary, t }}>
      {children}
    </TranslationsContext.Provider>
  );
}

// Hook para traducir textos
export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error("useTranslations debe usarse dentro de un TranslationsProvider");
  }
  return context.t;
}

// Hook para obtener el locale actual
export function useLocale() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error("useLocale debe usarse dentro de un TranslationsProvider");
  }
  return context.locale;
}
