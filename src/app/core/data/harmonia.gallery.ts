import { ProjectImage } from '../models/project.model';

// Order tells the product story; paths are relative to public/.
export const harmoniaGallery: ProjectImage[] = [
  {
    src: '/projects/harmonia/dashboard_helpdesk.png',
    alt: {
      es: 'Panel de Helpdesk con métricas, peticiones abiertas, cola personal y actividad reciente.',
      en: 'Helpdesk dashboard with metrics, open requests, a personal queue and recent activity.',
    },
    caption: {
      es: 'Una vista general del trabajo de soporte: prioridades, responsables y actividad reciente.',
      en: 'An overview of support work: priorities, assignees and recent activity.',
    },
  },
  {
    src: '/projects/harmonia/project_workflow_editor.png',
    alt: {
      es: 'Editor visual de workflows con estados conectados y panel de configuración de un estado.',
      en: 'Visual workflow editor with connected states and a state settings panel.',
    },
    caption: {
      es: 'Flujos configurables: estados, transiciones y publicación de versiones desde un editor visual propio.',
      en: 'Configurable workflows: states, transitions and version publishing in a custom visual editor.',
    },
  },
  {
    src: '/projects/harmonia/helpdesk_request_detail_1.png',
    alt: {
      es: 'Detalle de una petición de soporte con estado, asignación, prioridad y opción de escalado a incidentes.',
      en: 'Support request details with status, assignment, priority and an option to escalate to incidents.',
    },
    caption: {
      es: 'La petición reúne su contexto, responsables y conversación, con un punto de conexión hacia ingeniería.',
      en: 'The request brings together context, assignees and conversation, with a connection to engineering.',
    },
  },
  {
    src: '/projects/harmonia/helpdesk_request_detail_2.png',
    alt: {
      es: 'Historial de una petición con respuestas al solicitante, notas internas y cambios de estado.',
      en: 'Request history with replies to the requester, internal notes and status changes.',
    },
    caption: {
      es: 'Trazabilidad de la conversación: respuestas por email, notas internas y cambios registrados en un mismo historial.',
      en: 'Conversation traceability: email replies, internal notes and recorded changes in a single history.',
    },
  },
  {
    src: '/projects/harmonia/incident_request_detail_1.png',
    alt: {
      es: 'Detalle de un incidente con impacto, servicio afectado y pestañas de actividad, evidencias, postmortem y relaciones.',
      en: 'Incident details with impact, affected service and tabs for activity, evidence, postmortem and relations.',
    },
    caption: {
      es: 'Gestión de incidentes con severidad, responsable, impacto y contexto del servicio afectado.',
      en: 'Incident management with severity, a commander, impact and context for the affected service.',
    },
  },
  {
    src: '/projects/harmonia/incident_request_detail_2.png',
    alt: {
      es: 'Actualizaciones operativas de un incidente y participantes con roles de coordinación y respuesta.',
      en: 'Incident operational updates and participants with command and response roles.',
    },
    caption: {
      es: 'Coordinación de la respuesta: participantes, roles y actualizaciones con previsión de la próxima comunicación.',
      en: 'Response coordination: participants, roles and updates with the next communication planned.',
    },
  },
  {
    src: '/projects/harmonia/deployment_request_detail.png',
    alt: {
      es: 'Plan de despliegue con ventana, servicios afectados, validación y procedimiento de rollback.',
      en: 'Deployment plan with a time window, affected services, validation and a rollback procedure.',
    },
    caption: {
      es: 'Los despliegues recogen su ventana, estrategia de rollout, validación y plan de reversión.',
      en: 'Deployments include their time window, rollout strategy, validation and rollback plan.',
    },
  },
  {
    src: '/projects/harmonia/workspace_helpdesk.png',
    alt: {
      es: 'Espacio de Helpdesk con filtros por estado, prioridad y responsable y listado de peticiones.',
      en: 'Helpdesk workspace with status, priority and assignee filters and a request list.',
    },
    caption: {
      es: 'La cola de soporte permite filtrar peticiones y consultar el trabajo asignado.',
      en: 'The support queue offers request filtering and a view of assigned work.',
    },
  },
  {
    src: '/projects/harmonia/dashboard_incident.png',
    alt: {
      es: 'Panel de incidentes con registros activos, atención crítica y cambios en producción.',
      en: 'Incident dashboard with active records, critical attention and production changes.',
    },
    caption: {
      es: 'Resumen operativo de incidentes y despliegues del proyecto seleccionado.',
      en: 'An operational overview of incidents and deployments for the selected project.',
    },
  },
  {
    src: '/projects/harmonia/workspace_incident.png',
    alt: {
      es: 'Listado de incidentes y despliegues con búsqueda y filtros por tipo, estado, severidad y servicio.',
      en: 'Incident and deployment list with search and filters for type, status, severity and service.',
    },
    caption: {
      es: 'Un espacio de trabajo para consultar incidentes de producto, incidentes técnicos y despliegues.',
      en: 'A workspace for browsing product incidents, technical incidents and deployments.',
    },
  },
  {
    src: '/projects/harmonia/projects.png',
    alt: {
      es: 'Catálogo de proyectos de la organización con búsqueda, filtros y tarjetas de Helpdesk e Incidentes.',
      en: 'Organization project catalog with search, filters and Helpdesk and Incident cards.',
    },
    caption: {
      es: 'Proyectos organizados por ámbito de trabajo, con acceso a su configuración y workflow.',
      en: 'Projects organized by area of work, with access to their settings and workflow.',
    },
  },
  {
    src: '/projects/harmonia/project_detail.png',
    alt: {
      es: 'Configuración general de un proyecto con pestañas de miembros, workflow, email y enrutamiento de incidentes.',
      en: 'General project settings with tabs for members, workflow, email and incident routing.',
    },
    caption: {
      es: 'Cada proyecto centraliza su configuración, miembros, flujo de trabajo e integraciones.',
      en: 'Each project brings together its settings, members, workflow and integrations.',
    },
  },
  {
    src: '/projects/harmonia/project_emailconfig.png',
    alt: {
      es: 'Configuración del canal de email de un proyecto con selector de Gmail o Resend.',
      en: 'Project email channel settings with a Gmail or Resend selector.',
    },
    caption: {
      es: 'Configuración de Gmail o Resend para conectar un buzón con las peticiones de Helpdesk.',
      en: 'Gmail or Resend configuration to connect a mailbox to Helpdesk requests.',
    },
  },
  {
    src: '/projects/harmonia/organization.png',
    alt: {
      es: 'Administración de miembros de una organización con roles, estados e invitaciones.',
      en: 'Organization member administration with roles, statuses and invitations.',
    },
    caption: {
      es: 'Gestión de acceso por organización: miembros, invitaciones y roles.',
      en: 'Organization access management: members, invitations and roles.',
    },
  },
  {
    src: '/projects/harmonia/login.png',
    alt: {
      es: 'Pantalla de acceso con un código de verificación de seis dígitos enviado por email.',
      en: 'Sign-in screen with a six-digit verification code sent by email.',
    },
    caption: {
      es: 'Acceso sin contraseña mediante un código de verificación por email.',
      en: 'Passwordless sign-in using an email verification code.',
    },
  },
];
