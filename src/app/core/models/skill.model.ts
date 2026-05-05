import { Localized } from './localized.model';

export interface SkillItem {
  name: string;
  /** Slug de simpleicons.org (https://cdn.simpleicons.org/{slug}/{color}). */
  slug?: string;
  /** Color HEX (sin #) para el logo de simpleicons. */
  color?: string;
  /** Ruta a un SVG/imagen local. Si está, sustituye al de simpleicons. */
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
