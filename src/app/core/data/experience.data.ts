import { ExperienceItem } from '../models/experience.model';

export const experience: ExperienceItem[] = [
    {
    company: {
      es: 'Hiberus · Zaragoza, España',
      en: 'Hiberus · Zaragoza, Spain',
    },
    role: 'Software Engineer — AI Development',
    period: {
      es: 'Jul 2026 — Actualidad',
      en: 'Jul 2026 — Present',
    },
    current: true,
    description: [
      {
        es: 'Desarrollo de aplicaciones en Java (Spring Boot) y Angular, participando en la definición de la arquitectura del sistema desde su fase inicial.',
        en: 'Development of applications in Java (Spring Boot) and Angular, participating in defining the system architecture from its initial phase.',
      },
      {
        es: 'Integro desarrollo asistido por IA en el flujo de trabajo, orquestando agentes de IA para tareas de análisis, generación de código y documentación técnica.',
        en: 'I integrate AI-assisted development into the workflow, orchestrating AI agents for analysis, code generation, and technical documentation tasks.',
      },
    ],
    technologies: [
      'Java',
      'Angular',
      { es: 'Arquitectura', en: 'Architecture' },
      { es: 'Arquitectura Hexagonal', en: 'Hexagonal Architecture' },
      'TypeScript',
      { es: 'Análisis Técnico', en: 'Technical Analysis' },
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
    role: 'Full Stack Developer — Sportium',
    period: {
      es: 'Ene 2025 — Jul 2026',
      en: 'Jan 2025 — Jul 2026',
    },
    current: false,
    description: [
      {
        es: 'Parte del equipo de desarrollo de Sportium. Construyo nuevos microservicios para habilitar funcionalidades del producto, mejorando escalabilidad y rendimiento.',
        en: 'Part of the Sportium development team. I build new microservices to enable product features, improving scalability and performance.',
      },
      {
        es: 'Trabajo frontend con Angular dentro de una arquitectura Full Stack .NET + Angular.',
        en: 'Frontend work with Angular inside a Full Stack .NET + Angular architecture.',
      },
    ],
    technologies: [
      'Angular',
      '.NET',
      'C#',
      { es: 'Microservicios', en: 'Microservices' },
      'TypeScript',
      { es: 'Análisis Técnico', en: 'Technical Analysis' },
      { es: 'Arquitectura', en: 'Architecture' },
      'SignalR',
      'SCRUM',
    ],
  },
  {
    company: {
      es: 'Hiberus · Zaragoza, España',
      en: 'Hiberus · Zaragoza, Spain',
    },
    role: 'AI Research Collaborator',
    period: {
      es: 'Abr 2026 — Actualidad',
      en: 'Apr 2026 — Present',
    },
    current: true,
    description: [
      {
        es: 'Colaboración interna en iniciativas de I+D en IA: diseño e implementación de herramientas basadas en GenAI en Python.',
        en: 'Internal collaboration on AI R&D initiatives: design and implementation of GenAI-based tools in Python.',
      },
      {
        es: 'Orquestación de agentes, skills reutilizables y automatización de flujos para mejorar productividad interna.',
        en: 'Agent orchestration, reusable skills and workflow automation to improve internal productivity.',
      },
    ],
    technologies: [
      'Python',
      'GenAI',
      { es: 'Agentes LLM', en: 'LLM Agents' },
      { es: 'Automatización de Flujos', en: 'Workflow Automation' },
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
        es: 'Apps móviles con .NET MAUI y web con .NET MVC sobre arquitecturas backend en .NET 7.',
        en: 'Mobile apps with .NET MAUI and web with .NET MVC on top of .NET 7 backend architectures.',
      },
      {
        es: 'Interfaces dinámicas con Angular, Azure Functions y gestión de despliegues en App Store y Play Store.',
        en: 'Dynamic UIs with Angular, Azure Functions and managing deployments to App Store and Play Store.',
      },
      {
        es: 'Code reviews, prácticas de calidad y comunicación en tiempo real con SignalR.',
        en: 'Code reviews, quality practices and real-time communication with SignalR.',
      },
    ],
    technologies: [
      '.NET MAUI',
      '.NET MVC',
      'Angular',
      'Azure Functions',
      { es: 'Análisis Técnico', en: 'Technical Analysis' },
      { es: 'Relación con Clientes', en: 'Client Relations' },
      'React Native',
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
        es: 'App web empresarial para gestión de actividades.',
        en: 'Enterprise web app for activity management.',
      },
      {
        es: 'Importación/exportación de archivos, envío SMTP y gestión de tokens / refresh tokens.',
        en: 'File import/export, SMTP email sending and token / refresh-token management.',
      },
    ],
    technologies: ['Angular', 'PrimeNG', 'Bootstrap', '.NET', 'JWT'],
  },
];
