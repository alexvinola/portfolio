import { Localized } from '../models/localized.model';

export interface PersonalStat {
  num: string;
  label: Localized;
}

export const personal = {
  name: 'Alejandro Viñola',
  shortName: 'Alex Viñola',
  role: 'Full Stack Developer',
  tagline: 'C# · TypeScript · Angular · .NET · IA',
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
    { num: '2',   label: { es: 'roles activos', en: 'current roles' } },
    { num: 'B2',  label: { es: 'inglés',        en: 'english' } },
    { num: '∞',   label: { es: 'aprendiendo',   en: 'learning' } },
  ] as PersonalStat[],
  typedRoles: [
    'Full Stack Developer',
    'Angular Specialist',
    '.NET Engineer',
    'AI Tinkerer',
  ],
};
