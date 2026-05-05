import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang, defaultLang, supportedLangs, translations } from '../data/i18n.data';

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);
  private readonly _lang = signal<Lang>(this.detectInitial());

  readonly lang = this._lang.asReadonly();
  readonly dict = computed(() => translations[this._lang()]);
  readonly supported = supportedLangs;

  constructor() {
    // Sincroniza <html lang> y persiste en localStorage cuando cambia el idioma.
    effect(() => {
      const lang = this._lang();
      if (!isPlatformBrowser(this.platformId)) return;
      document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
    });
  }

  setLang(lang: Lang): void {
    if (!supportedLangs.includes(lang)) return;
    this._lang.set(lang);
  }

  toggle(): void {
    this.setLang(this._lang() === 'es' ? 'en' : 'es');
  }

  t(key: string): string {
    return this.dict()[key] ?? key;
  }

  private detectInitial(): Lang {
    if (!isPlatformBrowser(this.platformId)) return defaultLang;
    // 1) Preferencia previa del usuario en este navegador
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && supportedLangs.includes(stored)) return stored;
    } catch {}
    // 2) Idioma del navegador, si está soportado
    const nav = navigator?.language?.slice(0, 2).toLowerCase() as Lang;
    if (nav && supportedLangs.includes(nav)) return nav;
    // 3) Fallback al default
    return defaultLang;
  }
}
