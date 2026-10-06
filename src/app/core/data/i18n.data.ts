export type Lang = 'es' | 'en';

export const supportedLangs: Lang[] = ['es', 'en'];
export const defaultLang: Lang = 'en';

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.focus': 'Enfoque',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',

    'hero.eyebrow': 'Disponible para nuevos proyectos',
    'hero.scroll': 'Scroll para explorar',
    'hero.cta.contact': 'Contactar',
    'hero.cta.cv': 'CV',
    'hero.desc.html':
      'Centrado en <strong>GenAI</strong> y desarrollo full stack con <strong>Java, .NET y Angular</strong>. Diseño agentes de IA (tool calling, MCP, evals) y construyo sistemas con microservicios y Clean Architecture.',

    'about.label': '01 — About',
    'about.title.line1': 'Construyo sistemas,',
    'about.title.line2': 'no solo código.',
    'about.p1':
      'Senior Software Engineer con base full stack en Java, .NET y Angular. Trabajo con microservicios, Clean Architecture, arquitectura hexagonal y principios SOLID. He construido APIs REST, integraciones con sistemas externos y plataformas de datos en tiempo real.',
    'about.p2':
      'Hoy me centro en GenAI: diseño agentes de IA con tool calling y MCP, defino evals y métricas para medirlos e impulso el desarrollo asistido por IA en la empresa. También exploro Go y stacks modernos para no quedarme nunca quieto.',
    'about.lang.es': 'Español — Nativo',
    'about.lang.en': 'Inglés — B2 Avanzado',

    // 'about.term.status': 'empleado &amp; <strong>abierto a proyectos interesantes</strong>',
    'about.term.status': 'empleado',

    'experience.label': '02 — Experience',
    'experience.title': 'Dónde he trabajado.',
    'experience.current': 'Current',
    'experience.cta.more': 'Mostrar más',
    'experience.cta.less': 'Mostrar menos',
    'experience.cta.linkedin': 'Más en LinkedIn',

    'skills.label': '03 — Skills',
    'skills.title': 'Stack tecnológico.',
    'skills.subtitle': 'Lo que uso en el día a día y aquello con lo que me siento cómodo.',
    'skills.concepts': 'Aproximación',

    'projects.label': '04 — Projects',
    'projects.title': 'Selección de proyectos.',
    'projects.subtitle':
      'Trabajo profesional, exploración técnica y experimentos con IA. Hay más en GitHub.',
    'projects.cta.demo': 'Demo',
    'projects.cta.code': 'Code',
    'projects.cta.all': 'Más en GitHub',
    'projects.cta.details': 'Ver proyecto',
    'projects.cta.article': 'Artículo',
    'projects.detail.close': 'Cerrar proyecto',
    'projects.detail.highlights': 'Lo más destacado',
    'projects.detail.stack': 'Tecnologías',
    'projects.detail.private': 'Código privado',
    'projects.gallery.title': 'Galería',
    'projects.gallery.previous': 'Imagen anterior',
    'projects.gallery.next': 'Imagen siguiente',
    'projects.gallery.image': 'Imagen',
    'projects.gallery.full': 'Abrir imagen completa',
    'projects.gallery.error': 'No se ha podido cargar esta imagen.',


    'focus.label': '05 — Focus',
    'focus.title': 'En lo que estoy ahora.',
    'focus.subtitle': 'Áreas en las que estoy invirtiendo tiempo en aprender y donde más aporto.',

    'contact.label': '06 — Contact',
    'contact.title.line1': 'Construyamos',
    'contact.title.line2': 'algo juntos.',

    'footer.location': 'Zaragoza, España',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.focus': 'Focus',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',

    'hero.eyebrow': 'Available for new projects',
    'hero.scroll': 'Scroll to explore',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.cv': 'CV',
    'hero.desc.html':
      'Focused on <strong>GenAI</strong> and full stack development with <strong>Java, .NET and Angular</strong>. I design AI agents (tool calling, MCP, evals) and build systems with microservices and Clean Architecture.',

    'about.label': '01 — About',
    'about.title.line1': 'Crafting systems,',
    'about.title.line2': 'not just code.',
    'about.p1':
      'Senior Software Engineer with a full stack background in Java, .NET and Angular. I work with microservices, Clean Architecture, hexagonal architecture and SOLID principles. I\'ve built REST APIs, external system integrations and real-time data platforms.',
    'about.p2':
      'Today I focus on GenAI: I design AI agents with tool calling and MCP, define evals and metrics to measure them, and drive AI-assisted development across the company. I also explore Go and modern stacks to keep growing.',
    'about.lang.es': 'Spanish — Native',
    'about.lang.en': 'English — B2 Advanced',

    // 'about.term.status': 'employed &amp; <strong>open to interesting projects</strong>',
    'about.term.status': 'employed',

    'experience.label': '02 — Experience',
    'experience.title': "Where I've worked.",
    'experience.current': 'Current',
    'experience.cta.more': 'Show more',
    'experience.cta.less': 'Show less',
    'experience.cta.linkedin': 'More on LinkedIn',

    'skills.label': '03 — Skills',
    'skills.title': 'Technology stack.',
    'skills.subtitle': "What I use day to day and what I'm comfortable with.",
    'skills.concepts': 'Approach',

    'projects.label': '04 — Projects',
    'projects.title': 'Selected projects.',
    'projects.subtitle':
      'Professional work, technical exploration and AI experiments. More on GitHub.',
    'projects.cta.demo': 'Demo',
    'projects.cta.code': 'Code',
    'projects.cta.all': 'More on GitHub',
    'projects.cta.details': 'View project',
    'projects.cta.article': 'Article',
    'projects.detail.close': 'Close project',
    'projects.detail.highlights': 'Highlights',
    'projects.detail.stack': 'Technologies',
    'projects.detail.private': 'Private source',
    'projects.gallery.title': 'Gallery',
    'projects.gallery.previous': 'Previous image',
    'projects.gallery.next': 'Next image',
    'projects.gallery.image': 'Image',
    'projects.gallery.full': 'Open full image',
    'projects.gallery.error': 'This image could not be loaded.',


    'focus.label': '05 — Focus',
    'focus.title': "What I'm into.",
    'focus.subtitle': "Areas where I'm investing time and where I add the most value.",

    'contact.label': '06 — Contact',
    'contact.title.line1': "Let's build",
    'contact.title.line2': 'something together.',

    'footer.location': 'Zaragoza, Spain',
  },
};
