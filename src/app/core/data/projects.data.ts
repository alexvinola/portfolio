import { ProjectItem } from '../models/project.model';

export const projects: ProjectItem[] = [
  {
    name: 'NoumourDevs',
    tagline: {
      es: 'Desarrollo de software con IA',
      en: 'Software development with AI',
    },
    description: {
      es: 'Web técnica sobre Spec-Driven Development, Clean Architecture y cómo la IA puede potenciar estas prácticas. Incluye artículos, ejemplos de código y recursos para desarrolladores interesados en mejorar su arquitectura y calidad de código con ayuda de la IA.',
      en: 'Technical site on Spec-Driven Development, Clean Architecture and how AI can boost these practices. Articles, code examples and resources for developers who want to improve their architecture and code quality with the help of AI.',
    },
    technologies: ['Angular', 'AWS', 'IA'],
    category: 'ai',
    highlights: [
      {
        es: 'Aprendizaje sobre orquestación de agentes y workflows multi-paso',
        en: 'Learning resources on agent orchestration and multi-step workflows',
      },
      {
        es: 'Información actualizada sobre modelos de IA y su aplicación práctica en desarrollo de software',
        en: 'Up-to-date insights on AI models and their practical application in software development',
      },
      {
        es: 'Evolución de roles y responsabilidades de un desarrollador en la era de la IA',
        en: "How a developer's roles and responsibilities are evolving in the AI era",
      },
    ],
    links: { demo: 'https://noumordevs.alexvinola.com' },
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
