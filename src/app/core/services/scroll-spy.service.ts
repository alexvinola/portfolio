import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Mantiene cuál es la sección visible en pantalla y refleja la URL
 * en consecuencia. La sección "hero" se mapea a la URL raíz (sin hash).
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private current = 'hero';

  readonly active = signal<string>('hero');

  /** Instala el IntersectionObserver sobre todas las secciones con id pasadas. */
  init(sectionIds: readonly string[], rootSelector = 'main'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.dispose();

    const root = document.querySelector(rootSelector) ?? document;
    const elements = sectionIds
      .map((id) => root.querySelector<HTMLElement>(`#${id}`))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    // Si la URL inicial trae un hash conocido, lo usamos como activo.
    const initial = window.location.hash.replace('#', '');
    if (initial && sectionIds.includes(initial)) {
      this.current = initial;
      this.active.set(initial);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        // De las visibles, la que está más cerca de la parte superior
        // del viewport se considera "activa".
        visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );
        const topMost = visible.find(
          (e) => e.boundingClientRect.top >= -e.boundingClientRect.height / 2,
        ) ?? visible[0];

        const id = (topMost.target as HTMLElement).id;
        if (id && id !== this.current) {
          this.current = id;
          this.active.set(id);
          this.syncUrl(id);
        }
      },
      {
        threshold: 0,
        rootMargin: '-25% 0px -55% 0px',
      },
    );

    elements.forEach((el) => this.observer!.observe(el));
  }

  /** Limpia la URL llevándola al raíz (útil al hacer click en el logo). */
  resetToHome(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.current = 'hero';
    this.active.set('hero');
    const url = window.location.pathname + window.location.search;
    history.replaceState(null, '', url || '/');
  }

  dispose(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  private syncUrl(id: string): void {
    const base = window.location.pathname + window.location.search;
    const url = id === 'hero' ? base || '/' : `${base}#${id}`;
    history.replaceState(null, '', url);
  }
}
