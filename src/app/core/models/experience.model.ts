import { Localized } from './localized.model';

export interface ExperienceItem {
  company: Localized;
  role: Localized;
  location?: Localized;
  period: Localized;
  current?: boolean;
  description: Localized[];
  technologies: string[];
  link?: string;
}
