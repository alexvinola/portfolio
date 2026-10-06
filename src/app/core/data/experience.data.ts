import { ExperienceItem } from '../models/experience.model';

export const experience: ExperienceItem[] = [
    {
    company: {
      es: 'Hiberus · Zaragoza, España',
      en: 'Hiberus · Zaragoza, Spain',
    },
    role: 'Senior Software Engineer — GenAI',
    period: {
      es: 'Jul 2026 — Actualidad',
      en: 'Jul 2026 — Present',
    },
    current: true,
    description: [
      {
        es: 'Diseño y desarrollo de agentes de IA con tool calling, MCP y arquitecturas agénticas, en Python y Java.',
        en: 'Design and development of AI agents using tool calling, MCP and agentic architectures, in Python and Java.',
      },
      {
        es: 'Evaluación y observabilidad de agentes: defino baselines, evals y métricas de rendimiento y experimento con MLflow.',
        en: 'Agent evaluation and observability: I define baselines, evals and performance metrics and run experiments with MLflow.',
      },
      {
        es: 'Participo en la arquitectura y el diseño técnico de aplicaciones Java (Spring Boot) y Angular desde su fase inicial, con arquitectura hexagonal.',
        en: 'I take part in the architecture and technical design of Java (Spring Boot) and Angular applications from their initial phase, using hexagonal architecture.',
      },
      {
        es: 'Impulso iniciativas internas de desarrollo asistido por IA: evalúo herramientas e integro agentes en desarrollo, testing, análisis de código y documentación técnica.',
        en: 'I drive internal AI-assisted development initiatives: evaluating tools and integrating agents into development, testing, code analysis and technical documentation.',
      },
    ],
    technologies: [
      'Python',
      'Java',
      'Spring Boot',
      'Angular',
      'GenAI',
      { es: 'Agentes LLM', en: 'LLM Agents' },
      'MCP',
      'MLflow',
      { es: 'Arquitectura Hexagonal', en: 'Hexagonal Architecture' },
      'Claude',
      'Github Copilot',
      'Kubernetes',
      'GIS',
      'SCRUM',
    ],
  },
  {
    company: {
      es: 'Hiberus · Zaragoza, España',
      en: 'Hiberus · Zaragoza, Spain',
    },
    role: 'Full Stack Software Engineer — Sportium',
    period: {
      es: 'Ene 2025 — Jul 2026',
      en: 'Jan 2025 — Jul 2026',
    },
    current: false,
    description: [
      {
        es: 'Desarrollé y evolucioné la plataforma de datos en tiempo real de Sportium, encargada de distribuir información en vivo a sus webs de apuestas.',
        en: 'Built and evolved Sportium\'s real-time data platform, responsible for streaming live information to its betting websites.',
      },
      {
        es: 'Arquitectura distribuida en .NET con SignalR, WebSockets, Cloudflare y varios niveles de caché para lograr baja latencia, escalabilidad y alta disponibilidad.',
        en: 'Distributed .NET architecture with SignalR, WebSockets, Cloudflare and multi-level caching for low latency, scalability and high availability.',
      },
      {
        es: 'Nuevos microservicios y desarrollo frontend en Angular, cubriendo el ciclo completo con CI/CD y soporte de tercer nivel en producción.',
        en: 'New microservices and Angular frontend work, covering the full lifecycle with CI/CD and third-level production support.',
      },
    ],
    technologies: [
      '.NET',
      'C#',
      'Angular',
      'SignalR',
      'WebSockets',
      'Cloudflare',
      { es: 'Microservicios', en: 'Microservices' },
      'CI/CD',
      'TypeScript',
      'SCRUM',
    ],
  },
  {
    company: {
      es: 'Integra Tecnología · Zaragoza, España',
      en: 'Integra Tecnología · Zaragoza, Spain',
    },
    role: 'Full Stack / Mobile Developer',
    period: {
      es: 'Jul 2023 — Dic 2024',
      en: 'Jul 2023 — Dec 2024',
    },
    description: [
      {
        es: 'Desarrollé apps móviles con .NET MAUI y aplicaciones web con .NET MVC y Angular sobre backends en .NET 7.',
        en: 'Built mobile apps with .NET MAUI and web apps with .NET MVC and Angular on top of .NET 7 backends.',
      },
      {
        es: 'Implementé servicios con Azure Functions y comunicación en tiempo real con SignalR.',
        en: 'Implemented services with Azure Functions and real-time communication with SignalR.',
      },
      {
        es: 'Gestioné la publicación de apps en App Store y Play Store y participé en code reviews y prácticas de calidad.',
        en: 'Managed app releases to the App Store and Play Store and took part in code reviews and quality practices.',
      },
    ],
    technologies: [
      '.NET MAUI',
      '.NET MVC',
      'Angular',
      'Azure Functions',
      'SignalR',
      'React Native',
      'jQuery',
      { es: 'Relación con Clientes', en: 'Client Relations' },
    ],
  },
  {
    company: {
      es: 'Integra Tecnología · Zaragoza, España',
      en: 'Integra Tecnología · Zaragoza, Spain',
    },
    role: {
      es: 'Prácticas de Desarrollo Software',
      en: 'Software Development Intern',
    },
    period: {
      es: 'Mar 2023 — Jun 2023',
      en: 'Mar 2023 — Jun 2023',
    },
    description: [
      {
        es: 'App web empresarial de gestión de actividades con Angular, PrimeNG y .NET: importación/exportación de archivos, envío SMTP y autenticación con tokens y refresh tokens.',
        en: 'Enterprise activity-management web app with Angular, PrimeNG and .NET: file import/export, SMTP email sending and token / refresh-token authentication.',
      },
    ],
    technologies: ['Angular', 'PrimeNG', 'Bootstrap', '.NET', 'JWT'],
  },
];
