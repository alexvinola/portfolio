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
      'Full Stack Developer especializado en <strong>.NET y Angular</strong>, microservicios y Clean Architecture. Construyo APIs, integro sistemas y exploro IA aplicada al desarrollo: LLMs, agentes y automatización.',

    'about.label': '01 — About',
    'about.title.line1': 'Construyo sistemas,',
    'about.title.line2': 'no solo código.',
    'about.p1':
      'Full Stack Developer especializado en .NET y Angular. Trabajo con multiples arquitecturas como microservicios, Clean Architecture y principios SOLID. Desarrollo APIs REST, integro sistemas externos y proceso datos en tiempo real.',
    'about.p2':
      'En paralelo investigo IA aplicada al desarrollo: LLMs, agentes y evaluación de modelos. También exploro Go, Python y stacks modernos para no quedarme nunca quieto.',
    'about.lang.es': 'Español — Nativo',
    'about.lang.en': 'Inglés — B2 Avanzado',

    'about.term.status': 'empleado &amp; <strong>abierto a proyectos interesantes</strong>',

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

    'focus.label': '05 — Focus',
    'focus.title': 'En lo que estoy ahora.',
    'focus.subtitle': 'Áreas en las que estoy invirtiendo tiempo en aprender y donde más aporto.',

    'contact.label': '06 — Contact',
    'contact.title.line1': 'Construyamos',
    'contact.title.line2': 'algo juntos.',

    'footer.location': 'Zaragoza, España — Open to remote / relocation',
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
      'Full Stack Developer specialized in <strong>.NET and Angular</strong>, microservices and Clean Architecture. I build APIs, integrate systems and explore AI applied to development: LLMs, agents and automation.',

    'about.label': '01 — About',
    'about.title.line1': 'Crafting systems,',
    'about.title.line2': 'not just code.',
    'about.p1':
      'Full Stack Developer specialized in .NET and Angular. I work with microservices architectures, Clean Architecture and SOLID principles. I build REST APIs, integrate external systems and process real-time data.',
    'about.p2':
      'On the side I research applied AI: LLMs, agents and model evaluation. I also explore Go, Python and modern stacks to keep growing.',
    'about.lang.es': 'Spanish — Native',
    'about.lang.en': 'English — B2 Advanced',

    'about.term.status': 'employed &amp; <strong>open to interesting projects</strong>',

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

    'focus.label': '05 — Focus',
    'focus.title': "What I'm into.",
    'focus.subtitle': "Areas where I'm investing time and where I add the most value.",

    'contact.label': '06 — Contact',
    'contact.title.line1': "Let's build",
    'contact.title.line2': 'something together.',

    'footer.location': 'Zaragoza, Spain — Open to remote / relocation',
  },
};
