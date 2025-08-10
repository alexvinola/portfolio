import { redirect } from "next/navigation";
import { headers } from "next/headers";

const SUPPORTED_LOCALES = ["es", "en"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  let locale: Locale = "en"; // valor por defecto tipado correctamente

  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

    if (SUPPORTED_LOCALES.includes(browserLang as Locale)) {
      locale = browserLang as Locale;
    }
  }

  redirect(`/${locale}`);
}
