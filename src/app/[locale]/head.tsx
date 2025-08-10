import { headDict } from "@/lib/headDictionary";

interface Props {
  params: { locale: "en" | "es" };
}

export default function Head({ params }: Props) {
  const { locale } = params;
  const dict = headDict[locale] || headDict.en;
  console.log(dict)

  return (
    <>
      {/* Ajustes básicos y responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Título y descripción */}
      <title>{dict.title}</title>
      <meta name="description" content={dict.description} />
      <meta name="author" content="Alejandro Viñola" />

      {/* Keywords relevantes */}
      <meta name="keywords" content={dict.keywords} />

      {/* Robots para motores de búsqueda */}
      <meta name="robots" content="index, follow" />

      {/* hreflang para SEO internacional */}
      <link rel="alternate" hrefLang="es" href="https://alexvinola.com/es" />
      <link rel="alternate" hrefLang="en" href="https://alexvinola.com/en" />
      <link rel="alternate" hrefLang="x-default" href="https://alexvinola.com" />

      {/* Canonical URL */}
      <link rel="canonical" href={dict.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={dict.title} />
      <meta property="og:description" content={dict.ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={dict.canonical} />
      <meta property="og:image" content="https://alexvinola.com/og-image.png" />
      <meta property="og:site_name" content="Alejandro Viñola Portfolio" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Mobile and theme color */}
      <meta name="theme-color" content="#27496d" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  );
}
