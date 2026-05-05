import { Localized } from './localized.model';

export type ProjectCategory = 'ai' | 'web' | 'mobile' | 'tooling' | 'learning';

export interface ProjectItem {
  name: string;
  tagline: Localized;
  description: Localized;
  technologies: string[];
  category: ProjectCategory;
  highlights?: Localized[];
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
  featured?: boolean;
  year?: string;
}
