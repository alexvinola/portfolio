import { ProjectItem } from '../models/project.model';
import { harmoniaGallery } from './harmonia.gallery';

export const projects: ProjectItem[] = [
  {
    name: 'Stemma CLI',
    summary: {
      es: 'Escribe el contexto de tu repositorio una vez y compílalo al formato nativo de cada agente de código. Un compilador determinista, local y sin dependencias, con artefactos verificados en CI.',
      en: 'Write your repository context once and compile it into each coding agent’s native format. A deterministic, local compiler with zero dependencies and CI-verified artifacts.',
    },
    tagline: {
      es: 'Un contexto. Todos los agentes de código.',
      en: 'One context. Every coding agent.',
    },
    description: {
      es: 'Compilador determinista y local-first para el contexto de los agentes de código. Escribes la guía del repositorio una sola vez en un proyecto canónico y Stemma la compila al formato nativo de cada agente, así que CLAUDE.md, .github/copilot-instructions.md, AGENTS.md o .kiro/steering/ dejan de ser copias que divergen y pasan a ser artefactos generados y verificados en CI. No es una herramienta de IA: no hay modelo de lenguaje, ni llamadas de red, ni telemetría; cada decisión sale de una gramática explícita.',
      en: 'A deterministic, local-first compiler for coding-agent context. You write your repository guidance once in a canonical project and Stemma compiles it into every agent\'s native format, so CLAUDE.md, .github/copilot-instructions.md, AGENTS.md or .kiro/steering/ stop being copies that drift and become build artifacts, generated and verified in CI. It is not an AI tool: no language model, no network calls, no telemetry — every decision comes from an explicit grammar.',
    },
    technologies: ['Go', 'CLI', 'Compiler', 'AI Agents', 'CI/CD'],
    category: 'tooling',
    highlights: [
      {
        es: 'Determinista y explicable: mismo input, mismos bytes, y cada entidad recibe un resultado trazable por target (exact, adapted, lossy, blocked o skipped)',
        en: 'Deterministic and explainable: same input, same bytes, and every entity gets one traceable outcome per target (exact, adapted, lossy, blocked or skipped)',
      },
      {
        es: 'Importa y exporta GitHub Copilot, Claude Code, Codex (AGENTS.md) y Kiro, con una matriz de compatibilidad trazada a la documentación oficial de cada proveedor',
        en: 'Imports and exports GitHub Copilot, Claude Code, Codex (AGENTS.md) and Kiro, with a capability matrix traced to each provider\'s official documentation',
      },
      {
        es: '~12.000 líneas de Go sin dependencias, ~230 tests, fixtures golden por proveedor, fuzzing y CI multiplataforma en Linux, macOS y Windows',
        en: '~12,000 lines of Go with zero dependencies, ~230 tests, golden fixtures per provider, fuzz targets and cross-platform CI on Linux, macOS and Windows',
      },
    ],
    links: {
      github: 'https://github.com/alexvinola/stemma-cli',
      demo: 'https://stemmacli.alexvinola.com',
    },
    featured: true,
    year: '2026',
  },
  {
    name: 'Harmonia',
    tagline: {
      es: 'Soporte e ingeniería, conectados.',
      en: 'Support and engineering, connected.',
    },
    summary: {
      es: 'Plataforma multi-tenant de Helpdesk y gestión de incidentes. Conecta las peticiones de clientes con el trabajo de ingeniería, con workflows configurables mediante un editor visual.',
      en: 'A multi-tenant Helpdesk and incident management platform. It connects customer requests with engineering work, with configurable workflows built in a visual editor.',
    },
    description: {
      es: 'Harmonia reúne el soporte al cliente y la gestión de incidentes técnicos en una misma aplicación. Una petición de Helpdesk puede escalarse a un incidente que ingeniería acepta o devuelve, manteniendo el contexto y la trazabilidad en ambos lados. Cada organización trabaja con sus propios datos, roles y flujos configurables.',
      en: 'Harmonia brings customer support and technical incident management into one application. A Helpdesk request can be escalated to an incident that engineering accepts or returns, preserving context and traceability on both sides. Each organization has its own isolated data, roles and configurable workflows.',
    },
    status: { es: 'Funcional · En evolución', en: 'Functional · Evolving' },
    authorship: {
      es: 'Proyecto personal de Alejandro Viñola · Desarrollo full stack',
      en: 'A personal project by Alejandro Viñola · Full stack development',
    },
    sourcePrivate: true,
    technologies: ['Java', 'Spring Boot', 'Spring Modulith', 'Angular', 'PostgreSQL', 'OpenAPI', 'Docker'],
    category: 'web',
    highlights: [
      {
        es: 'Helpdesk con integración de email, escalado a incidentes y postmortems con acciones de seguimiento.',
        en: 'Helpdesk with email integration, escalation to incidents and postmortems with follow-up actions.',
      },
      {
        es: 'Editor visual de workflows en SVG, con borradores y versiones publicadas inmutables.',
        en: 'An SVG visual workflow editor with drafts and immutable published versions.',
      },
      {
        es: 'Monolito modular con arquitectura hexagonal y pruebas de integración sobre PostgreSQL real.',
        en: 'A modular monolith with hexagonal architecture and integration tests against real PostgreSQL.',
      },
    ],
    details: [
      {
        title: { es: 'Por qué lo construí', en: 'Why I built it' },
        body: {
          es: 'Quería que mi portfolio reflejara también lo que hago en mi día a día: desarrollar aplicaciones de negocio completas. Harmonia nació para dar espacio a ese trabajo junto a mis proyectos de investigación en IA, llevando una idea desde el dominio y la API hasta la interfaz y el despliegue. La aplicación ya es funcional y continúo mejorándola.',
          en: 'I wanted my portfolio to also reflect my day-to-day work: building complete business applications. Harmonia grew out of that goal alongside my AI research projects, taking an idea from the domain and API through to the interface and deployment. The application is already functional and I continue to improve it.',
        },
      },
      {
        title: { es: 'Del correo al incidente', en: 'From email to incident' },
        body: {
          es: 'Los correos entrantes se convierten en peticiones y las respuestas mantienen el mismo hilo. Soporte gestiona prioridad, asignación y conversación; ingeniería trabaja con severidades, participantes, evidencias y postmortems. El escalado conecta ambos dominios sin perder su independencia.',
          en: 'Incoming emails become requests and replies stay in the same thread. Support manages priority, assignment and conversation; engineering works with severity levels, participants, evidence and postmortems. Escalation connects both domains while keeping them independent.',
        },
      },
      {
        title: { es: 'Flujos propios para cada organización', en: 'Workflows for each organization' },
        body: {
          es: 'El editor visual permite definir estados, transiciones, roles y campos obligatorios sobre un canvas SVG propio. Los flujos se editan como borradores y se publican como versiones inmutables: cambiar un flujo no altera las peticiones creadas con una versión anterior.',
          en: 'The visual editor defines states, transitions, roles and required fields on a custom SVG canvas. Workflows are edited as drafts and published as immutable versions: changing a workflow does not alter requests created with an earlier version.',
        },
      },
      {
        title: { es: 'Arquitectura y fiabilidad', en: 'Architecture and reliability' },
        body: {
          es: 'Backend en Java y Spring Boot, organizado por capacidades de negocio con Spring Modulith y arquitectura hexagonal. API contract-first con OpenAPI, frontend en Angular con Signals y PostgreSQL con Liquibase. Las decisiones de fiabilidad incluyen idempotencia, concurrencia optimista y sesiones con cookie HttpOnly y protección CSRF. Tests con Testcontainers y Vitest, CI con GitHub Actions y despliegue con Docker.',
          en: 'A Java and Spring Boot backend organized by business capability with Spring Modulith and hexagonal architecture. A contract-first OpenAPI API, an Angular frontend with Signals and PostgreSQL with Liquibase. Reliability decisions include idempotency, optimistic concurrency and HttpOnly cookie sessions with CSRF protection. Tests use Testcontainers and Vitest, with GitHub Actions CI and Docker deployment.',
        },
      },
    ],
    gallery: harmoniaGallery,
    featured: true,
    year: '2026',
  },
  {
    name: 'AI Playground',
    tagline: {
      es: 'Experimentos rápidos con modelos generativos',
      en: 'Quick experiments with generative models',
    },
    description: {
      es: 'Espacio de exploración con modelos generativos, RAG, embeddings y evaluación. Pensado para iterar deprisa sobre ideas antes de llevarlas a un workflow estable.',
      en: 'A space to explore generative models, RAG, embeddings and evaluation. Built to iterate fast on ideas before promoting them to a stable workflow.',
    },
    technologies: ['Python', 'Jupyter', 'LLMs', 'Embeddings', 'RAG', 'Hugging Face', 'Transformers', 'Finetuning'],
    category: 'ai',
    links: { github: 'https://github.com/alexvinola/AI_Playground' },
    featured: true,
    year: '2026',
  },
  {
    name: 'AI Workflows',
    tagline: {
      es: 'Workflows reutilizables sobre LLMs',
      en: 'Reusable workflows on top of LLMs',
    },
    description: {
      es: 'Colección de notebooks y experimentos centrados en orquestación de agentes, evaluación de modelos y automatización de tareas con LLMs. Es el laboratorio donde pruebo arquitecturas, prompts y métricas para llevar la IA al desarrollo de software de forma fiable.',
      en: 'A collection of notebooks and experiments focused on agent orchestration, model evaluation and task automation with LLMs. The lab where I test architectures, prompts and metrics to bring AI into software development reliably.',
    },
    technologies: ['Python', 'Jupyter', 'LLMs', 'Hugging Face', 'Transformers', 'AI Agents'],
    category: 'ai',
    highlights: [
      {
        es: 'Orquestación de agentes y workflows multi-paso',
        en: 'Agent orchestration and multi-step workflows',
      },
      {
        es: 'Frameworks de evaluación para medir calidad y fiabilidad',
        en: 'Evaluation frameworks to measure quality and reliability',
      },
      {
        es: 'Prompt engineering aplicado a casos reales',
        en: 'Prompt engineering applied to real-world cases',
      },
    ],
    links: { github: 'https://github.com/alexvinola/AI_Workflows' },
    featured: true,
    year: '2026',
  },
  {
    name: 'Portfolio',
    tagline: {
      es: 'Web personal en Angular + Tailwind',
      en: 'Personal site in Angular + Tailwind',
    },
    description: {
      es: 'Este mismo portfolio, construido con Angular moderno, Tailwind v4, SSR/prerender y un modelo de contenido tipado para mantenerlo fácil de editar. Migrado desde una versión anterior en React Next.js.',
      en: 'This very portfolio, built with modern Angular, Tailwind v4, SSR/prerender and a typed content model that keeps it easy to edit. Migrated from a previous version in React Next.js.',
    },
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'SSR', 'AWS'],
    category: 'web',
    links: { github: 'https://github.com/alexvinola/portfolio', demo: 'https://alexvinola.com' },
    featured: true,
    year: '2026',
  },
];
