import { Localized } from './localized.model';

export interface SkillItem {
  name: string;
  /** Ruta a un SVG/imagen local en public. */
  customIcon?: string;
  level?: 'core' | 'advanced' | 'familiar';
}

export interface SkillGroup {
  id: string;
  title: Localized;
  items: SkillItem[];
}

export interface ConceptualSkillGroup {
  title: Localized;
  items: string[];
}
