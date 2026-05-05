import { ChangeDetectionStrategy, Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { I18nService } from '../../core/services/i18n.service';
import { ThemeService } from '../../core/services/theme.service';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';

interface NavItem { id: string; href: string; key: string; }

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    nav.site-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 clamp(1.5rem, 5vw, 4rem);
      height: 64px;
      background: color-mix(in oklch, var(--bg) 85%, transparent);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
    }
    .logo {
      font-family: var(--font-mono);
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent);
      text-decoration: none;
      display: inline-flex; align-items: baseline;
    }
    .logo .blink {
      display: inline-block;
      width: 0.5ch; height: 1em;
      margin-left: 1px;
      background: var(--accent);
      vertical-align: text-bottom;
      animation: blink 1.1s step-end infinite;
    }
    .nav-links {
      display: none;
      gap: 1.85rem;
      list-style: none;
      padding: 0; margin: 0;
    }
    @media (min-width: 880px) {
      .nav-links { display: flex; align-items: center; }
    }
    .nav-links a {
      position: relative;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text2);
      text-decoration: none;
      transition: color .2s;
      padding-block: 4px;
    }
    .nav-links a:hover { color: var(--accent); }
    .nav-links a.active {
      color: var(--accent);
    }
    .nav-links a.active::after {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: -2px;
      height: 1px;
      background: var(--accent);
    }

    .nav-actions { display: flex; align-items: center; gap: 0.4rem; }

    .icon-btn {
      width: 36px; height: 36px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--text2);
      cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
      transition: border-color .2s, color .2s;
      padding: 0;
    }
    .icon-btn:hover { border-color: var(--accent); color: var(--accent); }

    .lang-toggle {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0 0.65rem;
      height: 36px;
      border: 1px solid var(--border);
      background: transparent;
      cursor: pointer;
      transition: border-color .2s, color .2s;
      color: var(--text2);
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .lang-toggle:hover { border-color: var(--accent); color: var(--accent); }
    .lang-toggle .flag { font-size: 1rem; line-height: 1; }
    .lang-toggle .code { font-weight: 600; }

    .mobile-menu {
      position: fixed; top: 64px; left: 0; right: 0;
      background: color-mix(in oklch, var(--bg) 95%, transparent);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      padding: 0.5rem clamp(1.5rem, 5vw, 4rem);
      display: flex; flex-direction: column;
      z-index: 99;
    }
    .mobile-menu a {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text2);
      text-decoration: none;
      padding: 0.85rem 0;
      border-bottom: 1px solid var(--border);
    }
    .mobile-menu a:last-child { border-bottom: 0; }
    .mobile-menu a:hover { color: var(--accent); }
    .mobile-menu a.active { color: var(--accent); }

    @media (min-width: 880px) {
      .icon-btn.menu { display: none; }
      .mobile-menu { display: none; }
    }
  `],
  template: `
    <nav class="site-nav">
      <a href="#" class="logo" (click)="onLogoClick($event)" aria-label="Inicio">
        av_
      </a>

      <ul class="nav-links">
        @for (item of nav; track item.id) {
          <li>
            <a [href]="item.href" [class.active]="spy.active() === item.id">{{ item.key | t }}</a>
          </li>
        }
      </ul>

      <div class="nav-actions">
        <button
          type="button"
          class="lang-toggle"
          (click)="i18n.toggle()"
          [attr.aria-label]="'Cambiar idioma. Actual: ' + (i18n.lang() === 'es' ? 'Español' : 'English')"
          [title]="i18n.lang() === 'es' ? 'Switch to English' : 'Cambiar a Español'"
        >
          @if (i18n.lang() === 'es') {
            <span class="code">ES</span>
          } @else {
            <span class="code">EN</span>
          }
        </button>

        <button
          type="button"
          class="icon-btn"
          (click)="theme.toggle()"
          [attr.aria-label]="theme.mode() === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'"
          [title]="theme.mode() === 'dark' ? 'Light theme' : 'Dark theme'"
        >
          @if (theme.mode() === 'dark') {
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2"/><path d="M12 20v2"/>
              <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
              <path d="M2 12h2"/><path d="M20 12h2"/>
              <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
            </svg>
          } @else {
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
            </svg>
          }
        </button>

        <button
          type="button"
          class="icon-btn menu"
          (click)="menuOpen.set(!menuOpen())"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Menú"
        >
          @if (menuOpen()) {
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          } @else {
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
          }
        </button>
      </div>
    </nav>

    @if (menuOpen()) {
      <div class="mobile-menu" role="dialog" aria-label="Menú móvil">
        @for (item of nav; track item.id) {
          <a
            [href]="item.href"
            [class.active]="spy.active() === item.id"
            (click)="menuOpen.set(false)"
          >{{ item.key | t }}</a>
        }
      </div>
    }
  `,
})
export class Header {
  protected i18n = inject(I18nService);
  protected theme = inject(ThemeService);
  protected spy = inject(ScrollSpyService);
  private platformId = inject(PLATFORM_ID);
  protected readonly menuOpen = signal(false);

  protected nav: NavItem[] = [
    { id: 'about',      href: '#about',      key: 'nav.about' },
    { id: 'experience', href: '#experience', key: 'nav.experience' },
    { id: 'skills',     href: '#skills',     key: 'nav.skills' },
    { id: 'projects',   href: '#projects',   key: 'nav.projects' },
    { id: 'focus',      href: '#focus',      key: 'nav.focus' },
    { id: 'contact',    href: '#contact',    key: 'nav.contact' },
  ];

  onLogoClick(event: Event): void {
    if (!isPlatformBrowser(this.platformId)) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.spy.resetToHome();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
  }
}
