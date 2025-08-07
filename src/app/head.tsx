export default function Head() {
  return (
    <>
      {/* Ajustes básicos y responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Título y descripción */}
      <title>Alejandro Viñola - Full Stack Developer Portfolio</title>
      <meta 
        name="description" 
        content="Alejandro Viñola's portfolio showcasing full stack development skills with Angular, .NET, and more. Explore projects, professional journey and contact information." 
      />
      <meta name="author" content="Alejandro Viñola" />

      {/* Keywords relevantes */}
      <meta 
        name="keywords" 
        content="Full Stack Developer, Angular, .NET, Portfolio, Software Engineer, Alejandro Viñola, Projects, Contact" 
      />

      {/* Robots para motores de búsqueda */}
      <meta name="robots" content="index, follow" />

      {/* Canonical URL para evitar contenido duplicado */}
      <link rel="canonical" href="https://alexvinola.com/" />

      {/* Open Graph para compartir en redes sociales */}

      <meta property="og:title" content="Alejandro Viñola - Full Stack Developer Portfolio" />
      <meta property="og:description" content="Showcasing skills and projects with Angular, .NET, and more. Explore the professional journey and get in touch." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tu-dominio.com/" />
      <meta property="og:image" content="https://tu-dominio.com/og-image.png" />
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
