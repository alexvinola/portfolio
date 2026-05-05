import { ConceptualSkillGroup, SkillGroup } from '../models/skill.model';

/**
 * Logos:
 *  - `slug` + `color` → cargados desde https://cdn.simpleicons.org/{slug}/{color}
 *  - `customIcon`     → ruta local en /public (tiene prioridad sobre slug). Útil para los logos
 *                       que simpleicons retiró por temas de licencia (Azure, AWS, C#, MS, OpenAI, …).
 */
export const skills: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'Angular', slug: 'angular', color: 'dd0031', level: 'core' },
      { name: 'TypeScript', slug: 'typescript', color: '3178c6', level: 'core' },
      { name: 'JavaScript', slug: 'javascript', color: 'f7df1e', level: 'core' },
      { name: 'HTML5', slug: 'html5', color: 'e34f26', level: 'advanced' },
      { name: 'Sass / SCSS', slug: 'sass', color: 'cc6699', level: 'advanced' },
      { name: 'Tailwind', slug: 'tailwindcss', color: '38bdf8', level: 'advanced' },
      { name: 'React', slug: 'react', color: '61dafb', level: 'advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: [
      { name: '.NET', customIcon: '/logos/dotnet.svg', level: 'core' },
      { name: 'C#', customIcon: '/logos/csharp.svg', level: 'core' },
      { name: 'Python', slug: 'python', color: '3776ab', level: 'advanced' },
      { name: 'Node.js', slug: 'nodedotjs', color: '5fa04e', level: 'familiar' },
      { name: 'GraphQL', slug: 'graphql', color: 'e10098', level: 'familiar' },
      { name: 'Go', slug: 'go', color: '00add8', level: 'familiar' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: [
      { name: 'SQL Server', customIcon: '/logos/sqlserver.svg', level: 'advanced' },
      { name: 'PostgreSQL', slug: 'postgresql', color: '336791', level: 'advanced' },
      { name: 'MongoDB', slug: 'mongodb', color: '47a248', level: 'familiar' },
      { name: 'Redis', slug: 'redis', color: 'ff4438', level: 'familiar' },
    ],
  },
  {
    id: 'cloud',
    title: 'DevOps · Cloud',
    items: [
      { name: 'Azure', customIcon: '/logos/azure.svg', level: 'advanced' },
      { name: 'AWS', customIcon: '/logos/aws.svg', level: 'advanced' },
      { name: 'Docker', slug: 'docker', color: '2496ed', level: 'advanced' },
      { name: 'Kubernetes', slug: 'kubernetes', color: '326ce5', level: 'familiar' },
      { name: 'GitHub Actions', slug: 'githubactions', color: '2088ff', level: 'advanced' },
      { name: 'GitLab CI/CD', slug: 'gitlab', color: 'fc6d26', level: 'advanced' },
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
      { name: 'Jupyter', slug: 'jupyter', color: 'f37626', level: 'advanced' },
      { name: 'Pandas', slug: 'pandas', color: '150458', level: 'familiar' },
      { name: 'NumPy', slug: 'numpy', color: '013243', level: 'familiar' },
    ],
  },
  {
    id: 'tools',
    title: {
      es: 'Herramientas',
      en: 'Tools',
    },
    items: [
      { name: 'Git', slug: 'git', color: 'f05032', level: 'core' },
      { name: 'GitHub', slug: 'github', color: 'f5f5f5', level: 'core' },
      { name: 'GitLab', slug: 'gitlab', color: 'fc6d26', level: 'core' },
      { name: 'VS Code', customIcon: '/logos/vscode.svg', level: 'core' },
      { name: 'Visual Studio', customIcon: '/logos/visualstudio.svg', level: 'core' },
      { name: 'JetBrains', slug: 'jetbrains', color: 'ff318c', level: 'advanced' },
      { name: 'Postman', slug: 'postman', color: 'ff6c37', level: 'advanced' },
      { name: 'Jira', slug: 'jira', color: '0052cc', level: 'advanced' },
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
