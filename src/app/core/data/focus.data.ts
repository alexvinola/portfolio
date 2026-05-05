import { Localized } from '../models/localized.model';

export interface FocusItem {
  title: Localized;
  description: Localized;
}

export const focus: FocusItem[] = [
  {
    title: 'Spec-Driven Development',
    description: {
      es: 'Diseñar el comportamiento antes que el código: especificaciones claras como contrato vivo entre producto, desarrollo y agentes de IA.',
      en: 'Designing behavior before code: clear specifications as a living contract between product, development and AI agents.',
    },
  },
  {
    title: {
      es: 'IA aplicada al desarrollo',
      en: 'AI applied to development',
    },
    description: {
      es: 'LLMs y agentes integrados en el flujo real de un equipo: generación de código, revisión, evaluación y refactor asistido con criterios medibles. Implementación de AI DevTools y flujos de trabajo que aportan valor real sin añadir fricción.',
      en: 'LLMs and agents integrated into a real team workflow: code generation, review, evaluation and assisted refactor with measurable criteria. Implementing AI DevTools and workflows that add real value without adding friction.',
    },
  },
  {
    title: {
      es: 'Automatización de flujos',
      en: 'Workflow automation',
    },
    description: {
      es: 'Workflows que eliminan fricción del día a día: pipelines, scripts, agentes y herramientas que hacen que las cosas correctas ocurran solas.',
      en: 'Workflows that remove day-to-day friction: pipelines, scripts, agents and tools that make the right things happen on their own.',
    },
  },
  {
    title: {
      es: 'Arquitectura software',
      en: 'Software architecture',
    },
    description: {
      es: 'Clean Architecture, SOLID, hexagonal y microservicios. Software que se entiende, se cambia sin miedo y aguanta a varios equipos trabajando a la vez.',
      en: 'Clean Architecture, SOLID, hexagonal and microservices. Software that is easy to understand, safe to change and holds up with several teams working in parallel.',
    },
  },
  {
    title: {
      es: 'Calidad del software',
      en: 'Software quality',
    },
    description: {
      es: 'Tests con sentido, code reviews, evaluación de IA y métricas que reflejan el comportamiento real del sistema, no solo la cobertura.',
      en: 'Meaningful tests, code reviews, AI evaluation and metrics that reflect the real behavior of the system, not just coverage.',
    },
  },
];
