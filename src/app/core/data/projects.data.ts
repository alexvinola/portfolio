import { ProjectItem } from '../models/project.model';

export const projects: ProjectItem[] = [
  {
    name: 'Stemma CLI',
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
  {
    name: 'Membership Python',
    tagline: {
      es: 'Servicio backend en Python',
      en: 'Backend service in Python',
    },
    description: {
      es: 'Pequeño servicio para gestionar membresías construido como práctica de arquitectura limpia en el ecosistema Python: capas separadas, tipado y tests.',
      en: 'A small membership-management service built as a clean-architecture exercise in the Python ecosystem: separated layers, typing and tests.',
    },
    technologies: ['Python', 'Clean Architecture', 'REST API'],
    category: 'tooling',
    links: { github: 'https://github.com/alexvinola/membership-python' },
    year: '2026',
  },
];
