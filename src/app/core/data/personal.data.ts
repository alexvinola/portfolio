import { Localized } from '../models/localized.model';

export interface PersonalStat {
  num: string;
  label: Localized;
}

export const personal = {
  name: 'Alejandro Viñola',
  shortName: 'Alex Viñola',
  role: 'Senior Software Engineer',
  tagline: 'Java · C# · TypeScript · Angular · Spring Boot · IA',
  location: {
    es: 'Zaragoza, Aragón, España',
    en: 'Zaragoza, Aragón, Spain',
  } satisfies Localized,
  email: 'hello@alexvinola.com',
  emailAlt: 'avr5098@gmail.com',
  cvFile: '/cv-alejandro-vinola.pdf',
  social: {
    github: 'https://github.com/alexvinola',
    githubHandle: '@alexvinola',
    linkedin: 'https://www.linkedin.com/in/alejandrovinola/',
    linkedinHandle: '/in/alejandrovinola',
    huggingface: 'https://huggingface.co/alexvinola',
    huggingfaceHandle: '@alexvinola',
  },
  stats: [
    { num: '3+',  label: { es: 'años exp.',     en: 'years exp.' } },
    { num: '2',   label: { es: 'empresas',      en: 'companies' } },
    { num: 'B2',  label: { es: 'inglés',        en: 'english' } },
    { num: '∞',   label: { es: 'aprendiendo',   en: 'learning' } },
  ] as PersonalStat[],
  typedRoles: [
    'Senior Software Engineer',
    'GenAI Engineer',
    'AI Agents Builder',
    'Full Stack Developer',
    'Java Engineer',
    'Angular Specialist',
    '.NET Engineer',
    'Aspiring Architect & Tech Lead',
  ],
};