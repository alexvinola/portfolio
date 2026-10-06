import { ConceptualSkillGroup, SkillGroup } from '../models/skill.model';

/**
 * Logos:
 *  - `customIcon` → ruta local en /public; no se depende de CDNs externos.
 *  - Los SVGs de Simple Icons están en /public/logos/simple-icons, con el color en el propio SVG.
 */
export const skills: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'Angular', customIcon: '/logos/simple-icons/angular.svg', level: 'core' },
      { name: 'TypeScript', customIcon: '/logos/simple-icons/typescript.svg', level: 'core' },
      { name: 'JavaScript', customIcon: '/logos/simple-icons/javascript.svg', level: 'core' },
      { name: 'HTML5', customIcon: '/logos/simple-icons/html5.svg', level: 'advanced' },
      { name: 'Sass / SCSS', customIcon: '/logos/simple-icons/sass.svg', level: 'advanced' },
      { name: 'Tailwind', customIcon: '/logos/simple-icons/tailwindcss.svg', level: 'advanced' },
      { name: 'React', customIcon: '/logos/simple-icons/react.svg', level: 'advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: [
      { name: '.NET', customIcon: '/logos/dotnet.svg', level: 'core' },
      { name: 'C#', customIcon: '/logos/csharp.svg', level: 'core' },
      { name: 'JAVA', customIcon: '/logos/java.svg', level: 'core' },
      { name: 'Python', customIcon: '/logos/simple-icons/python.svg', level: 'advanced' },
      { name: 'Node.js', customIcon: '/logos/simple-icons/nodedotjs.svg', level: 'familiar' },
      { name: 'GraphQL', customIcon: '/logos/simple-icons/graphql.svg', level: 'familiar' },
      { name: 'Go', customIcon: '/logos/simple-icons/go.svg', level: 'familiar' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: [
      { name: 'SQL Server', customIcon: '/logos/sqlserver.svg', level: 'core' },
      { name: 'PostgreSQL', customIcon: '/logos/simple-icons/postgresql.svg', level: 'core' },
      { name: 'MongoDB', customIcon: '/logos/simple-icons/mongodb.svg', level: 'familiar' },
      { name: 'RabbitMQ', customIcon: '/logos/simple-icons/rabbitmq.svg', level: 'familiar' },
    ],
  },
  {
    id: 'cloud',
    title: 'DevOps · Cloud',
    items: [
      { name: 'Azure', customIcon: '/logos/azure.svg', level: 'advanced' },
      { name: 'AWS', customIcon: '/logos/aws.svg', level: 'advanced' },
      { name: 'Docker', customIcon: '/logos/simple-icons/docker.svg', level: 'advanced' },
      { name: 'Kubernetes', customIcon: '/logos/simple-icons/kubernetes.svg', level: 'advanced' },
      { name: 'GitLab CI/CD', customIcon: '/logos/simple-icons/gitlab.svg', level: 'advanced' },
      { name: 'Terraform', customIcon: '/logos/simple-icons/terraform.svg', level: 'familiar' },
      { name: 'Portainer', customIcon: '/logos/simple-icons/portainer.svg', level: 'advanced' },
      { name: 'ArgoCD', customIcon: '/logos/simple-icons/argo.svg', level: 'familiar' },
    ],
  },
  {
    id: 'ai',
    title: {
      es: 'IA · Automatización',
      en: 'AI · Automation',
    },
    items: [
      { name: 'Hugging Face', customIcon: '/hf-logo.svg', level: 'familiar' },
      { name: 'OpenAI', customIcon: '/logos/openai.svg', level: 'core' },
      { name: 'Anthropic', customIcon: '/logos/anthropic.svg', level: 'core' },
      { name: 'LangChain', customIcon: '/logos/langchain.svg', level: 'familiar' },
      { name: 'Jupyter', customIcon: '/logos/simple-icons/jupyter.svg', level: 'advanced' },
      { name: 'Pandas', customIcon: '/logos/simple-icons/pandas.svg', level: 'familiar' },
      { name: 'NumPy', customIcon: '/logos/simple-icons/numpy.svg', level: 'familiar' },
      { name: 'MLflow', customIcon: '/logos/simple-icons/mlflow.svg', level: 'familiar' },
    ],
  },
  {
    id: 'tools',
    title: {
      es: 'Herramientas',
      en: 'Tools',
    },
    items: [
      { name: 'Git', customIcon: '/logos/simple-icons/git.svg', level: 'core' },
      { name: 'GitHub', customIcon: '/logos/simple-icons/github.svg', level: 'core' },
      { name: 'GitLab', customIcon: '/logos/simple-icons/gitlab.svg', level: 'core' },
      { name: 'VS Code', customIcon: '/logos/vscode.svg', level: 'core' },
      { name: 'Visual Studio', customIcon: '/logos/visualstudio.svg', level: 'core' },
      { name: 'JetBrains', customIcon: '/logos/simple-icons/jetbrains.svg', level: 'core' },
      { name: 'Postman', customIcon: '/logos/simple-icons/postman.svg', level: 'advanced' },
      { name: 'Jira', customIcon: '/logos/simple-icons/jira.svg', level: 'advanced' },
    ],
  },
];

export const conceptualSkills: ConceptualSkillGroup[] = [
  {
    title: { es: 'Arquitectura', en: 'Architecture' },
    items: ['Clean Architecture', 'Hexagonal', 'Microservices', 'SOLID', 'DDD'],
  },
  {
    title: { es: 'Prácticas', en: 'Practices' },
    items: ['SCRUM / Agile', 'Code Review', 'Testing', 'CI/CD', 'Spec-Driven Development', 'Design Patterns', 'Test-Driven Development'],
  },
  {
    title: { es: 'IA aplicada', en: 'Applied AI' },
    items: ['LLM Agents', 'Prompt Engineering', 'Evaluation Frameworks', 'RAG', 'Workflow Automation', 'MCP'],
  },
];
