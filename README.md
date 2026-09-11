# Portfolio Personal — Alejandro Viñola
  
## 🌐 Sobre este proyecto

Este portfolio personal es una vitrina digital que reúne mi experiencia profesional, mis tecnologías y los proyectos en los que voy trabajando. Está construido para mostrar de forma moderna, accesible y profesional quién soy como Full Stack Developer, con un foco creciente en **IA aplicada al desarrollo software**.

Es la **segunda iteración** del portfolio: la versión anterior estaba en Next.js + React; esta la migré a Angular para alinearlo con mi stack del día a día y para aprovechar las novedades modernas del framework (signals, control flow nuevo, SSR/prerender estático).

## 🎯 Motivación

Decidí rehacer este portfolio como oportunidad para:

- Migrar de **Next.js / React** a **Angular 21** y empujar el framework a sus capacidades modernas.
- Trabajar con un **modelo de contenido tipado** (todo el contenido vive en `core/data/`) y un sistema **i18n** propio basado en signals — sin depender de librerías pesadas.
- Practicar **arquitectura limpia y código mantenible**: componentes pequeños, separación clara entre data, modelos, servicios, layout y secciones.
- Disponer de un espacio profesional propio que pueda escalar y evolucionar conmigo.

## 🛠️ Tecnologías utilizadas

| Herramienta | Versión | Descripción |
|---|---|---|
| **Angular** | 21.2 | Framework con SSR/prerender, standalone components, signals y nuevo control flow (`@if`, `@for`). |
| **TypeScript** | 5.9 | Tipado estático en todo el proyecto: data, modelos, pipes, servicios. |
| **Tailwind CSS** | 4.1 | Framework utility-first sobre PostCSS, con tokens propios en `@theme` (OKLCH). |
| **Angular SSR** | 21.2 | Pre-render estático de la página para SEO, social sharing y first paint rápido. |
| **Express** | 5.1 | Servidor Node opcional para renderizado SSR dinámico. |
| **Vitest** | 4.0 | Test runner moderno integrado con Angular CLI. |
| **Cloudflare Web Analytics** | — | Métricas privacy-first sin cookies ni banners de consentimiento. |
| **GitHub + Cloudflare Pages** | — | CI/CD automatizado, hosting estático y deploys de preview por rama. |
| **AWS**                | -            | Despliegue, hosting y manejo de variables de entorno seguro.               |

### Decisiones técnicas destacables

- **Sin librerías de animación, iconos ni i18n externas.** Animaciones con `IntersectionObserver` propio, iconos en SVG inline + algunos vía [Simple Icons](https://simpleicons.org) y [Devicon](https://devicon.dev), i18n con `signal` + un pipe propio (`| loc`).
- **Color tokens en OKLCH** con tema dark/light que el usuario puede alternar (con persistencia en `localStorage`).
- **Scroll-spy** propio que sincroniza la URL con la sección visible (`/` → `/#about` → `/#contact`...) usando `IntersectionObserver` + `history.replaceState`.
- **Tipografías Space Grotesk + JetBrains Mono** para una estética técnica/brutalist controlada.

## 📈 Aprendizajes y mejoras clave

- ✅ **Angular moderno con signals**: estado reactivo declarativo (i18n, scroll-spy, theme, expand/collapse) sin `Subject` ni `BehaviorSubject`.
- ✅ **Modelo de contenido tipado y traducible**: cada campo es `string | { es; en }` y se resuelve en runtime con un único pipe `| loc`. Detección automática del idioma del navegador con fallback a inglés.
- ✅ **SEO y accesibilidad**:
  - Metadatos `og:` y `twitter:`, `canonical`, `lang` sincronizado con el idioma activo.
  - Estructura semántica (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`).
  - Skip-link, `prefers-reduced-motion`, contraste WCAG AAA en el tema oscuro suavizado.
- ✅ **Optimización del rendimiento**:
  - Pre-render estático de la ruta principal → first paint instantáneo.
  - SVGs locales para los logos clave (Microsoft, Amazon, OpenAI…), evitando dependencias de CDNs externos que cambian licencias.
  - Bundle inicial ~85 kB transferidos.
- ✅ **Código modular y escalable**: separación clara `core/` (data, modelos, servicios, pipes), `shared/ui/`, `layout/`, `sections/`, `pages/`.
- ✅ **Despliegue profesional con Cloudflare**:
  - CI/CD automatizado desde GitHub.
  - Deploys de preview por rama.
  - CDN global y hosting estático.
  - Web Analytics integradas y privacy-first.

## 🚀 Cómo ejecutarlo en local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4200)
npm start

# Build de producción + pre-render
npm run build

# Servir el bundle SSR construido
npm run serve:ssr:portfolio_ng
```

## Proyectos y galerías

Los proyectos se editan en `src/app/core/data/projects.data.ts`. El orden del array
es el orden de las tarjetas. Todas abren un modal: `summary` es el resumen opcional
de la tarjeta; `description`, `highlights` y `details` forman el contenido ampliado.
Los textos admiten `{ es: '…', en: '…' }`.

Para añadir capturas a **cualquier proyecto**:

1. Guarda las imágenes en `public/projects/<proyecto>/` (por ejemplo,
   `public/projects/harmonia/helpdesk.webp`).
2. Añade a su objeto una propiedad `gallery` con las imágenes en el orden deseado:

```typescript
gallery: [
  {
    src: '/projects/harmonia/helpdesk.webp',
    alt: {
      es: 'Listado de peticiones de soporte en Harmonia',
      en: 'Support request list in Harmonia',
    },
    caption: { es: 'Helpdesk: prioridad y asignación.', en: 'Helpdesk: priority and assignment.' },
  },
],
```

La URL empieza en `/projects/`, sin `public`. Usa capturas reales y rutas únicas;
`alt` es obligatorio y `caption` opcional. Se recomienda WebP para reducir el peso.
La galería permite navegar con miniaturas, botones y flechas del teclado cuando
el foco está en ella, y abrir la captura a tamaño completo. Con una sola imagen
se ocultan los controles; si `gallery` está vacío o no existe, no se muestra el bloque.
Harmonia incluye 15 capturas en `public/projects/harmonia/`. Su orden, textos
alternativos y pies en español e inglés se editan en
`src/app/core/data/harmonia.gallery.ts`, enlazado desde `projects.data.ts`.

`sourcePrivate: true` muestra «Código privado» y oculta el enlace al repositorio.
Los enlaces `github`, `demo` y `article` son opcionales. `authorship` y `status`
permiten indicar la autoría y el estado real de cada proyecto.

## 📫 ¡Gracias por visitar mi portfolio!

Si tienes cualquier pregunta, idea o colaboración en mente, escríbeme directamente a **hello@alexvinola.com** o desde el formulario de contacto del sitio.

— [alexvinola.com](https://alexvinola.com)
