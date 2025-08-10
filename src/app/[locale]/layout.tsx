import { getDictionary } from "@/lib/getDictionary";
import { TranslationsProvider } from "@/components/TranslationsProvider";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Alex Viñola",
  description: "Developed by Alex Viñola",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.locale);

  return (
    <TranslationsProvider locale={resolvedParams.locale} dictionary={dictionary}>
      {children}
    </TranslationsProvider>
  );
}

