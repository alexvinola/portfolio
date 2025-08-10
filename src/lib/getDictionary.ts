import type { Dictionary } from "@/components/TranslationsProvider";

export async function getDictionary(locale: string): Promise<Dictionary> {
  switch (locale) {
    case "es":
      return (await import("@/dictionaries/es.json")).default as Dictionary;
    case "en":
    default:
      return (await import("@/dictionaries/en.json")).default as Dictionary;
  }
}
