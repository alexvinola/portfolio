import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';
const STORAGE_KEY = 'portfolio.theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly _mode = signal<ThemeMode>(this.detect());

  readonly mode = this._mode.asReadonly();

  constructor() {
    effect(() => {
      const m = this._mode();
      if (!isPlatformBrowser(this.platformId)) return;
      document.documentElement.setAttribute('data-theme', m);
      try { localStorage.setItem(STORAGE_KEY, m); } catch {}
    });
  }

  toggle(): void {
    this._mode.set(this._mode() === 'dark' ? 'light' : 'dark');
  }

  set(mode: ThemeMode): void {
    this._mode.set(mode);
  }

  private detect(): ThemeMode {
    if (!isPlatformBrowser(this.platformId)) return 'dark';
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {}
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
