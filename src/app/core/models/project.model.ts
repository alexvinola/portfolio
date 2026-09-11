import { Localized } from './localized.model';

export type ProjectCategory = 'ai' | 'web' | 'mobile' | 'tooling' | 'learning';

export interface ProjectImage {
  /** Public URL, e.g. /projects/harmonia/helpdesk.webp (without /public). */
  src: string;
  alt: Localized;
  caption?: Localized;
}

export interface ProjectDetailSection {
  title: Localized;
  body: Localized;
}

export interface ProjectItem {
  name: string;
  tagline: Localized;
  description: Localized;
  summary?: Localized;
  status?: Localized;
  authorship?: Localized;
  sourcePrivate?: boolean;
  details?: ProjectDetailSection[];
  gallery?: ProjectImage[];
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
