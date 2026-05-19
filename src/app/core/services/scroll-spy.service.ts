import { Injectable, NgZone, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Mantiene cuál es la sección visible en pantalla y refleja la URL
 * en consecuencia. La sección "hero" se mapea a la URL raíz (sin hash).
 *
 * El IntersectionObserver corre FUERA de la zona de Angular para no
 * disparar change detection en cada frame de scroll, y el replaceState
 * se difiere a requestAnimationFrame para no cortar el momentum scroll
 * en móvil (iOS).
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private current = 'hero';
  private rafId = 0;
  private suppressUntil = 0;

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

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length === 0) return;

          visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          const topMost =
            visible.find(
              (e) =>
                e.boundingClientRect.top >= -e.boundingClientRect.height / 2,
            ) ?? visible[0];

          const id = (topMost.target as HTMLElement).id;
          if (!id || id === this.current) return;
          this.current = id;

          // El signal sólo cambia en transiciones reales (poco frecuentes):
          // entramos a la zona aquí, no en cada frame.
          this.zone.run(() => this.active.set(id));
          this.scheduleUrlSync(id);
        },
        { threshold: 0, rootMargin: '-25% 0px -55% 0px' },
      );

      elements.forEach((el) => this.observer!.observe(el));
    });
  }

  /**
   * Silencia la sincronización de URL durante un scroll programático
   * (clic en un enlace del nav o en el logo), para que replaceState no
   * pelee con el smooth scroll ni corte el momentum.
   */
  suppressSync(ms = 900): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.suppressUntil = Date.now() + ms;
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
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
    this.observer?.disconnect();
    this.observer = undefined;
  }

  private scheduleUrlSync(id: string): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      this.rafId = 0;
      if (Date.now() < this.suppressUntil) return;
      const base = window.location.pathname + window.location.search;
      const url = id === 'hero' ? base || '/' : `${base}#${id}`;
      history.replaceState(null, '', url);
    });
  }
}
