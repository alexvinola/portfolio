import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Experience } from '../../sections/experience/experience';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Focus } from '../../sections/focus/focus';
import { Contact } from '../../sections/contact/contact';
import { SeoService } from '../../core/services/seo.service';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'focus', 'contact'] as const;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, Hero, About, Experience, Skills, Projects, Focus, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="#about" class="skip-link">Saltar al contenido</a>
    <app-header />
    <main id="main">
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-focus />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    .skip-link {
      position: absolute;
      left: -9999px;
      top: auto;
      width: 1px; height: 1px;
      overflow: hidden;
    }
    .skip-link:focus {
      position: fixed;
      left: 1rem; top: 1rem;
      width: auto; height: auto;
      padding: 0.6rem 1rem;
      background: var(--bg);
      color: var(--accent);
      border: 1px solid var(--accent);
      z-index: 200;
      font-family: var(--font-mono);
      font-size: 0.8rem;
    }
  `],
})
export class Home implements AfterViewInit, OnDestroy {
  private spy = inject(ScrollSpyService);

  constructor() {
    inject(SeoService).apply({
      title: 'Alejandro Viñola — Full Stack Developer · IA · Arquitectura',
      description:
        'Portfolio de Alejandro Viñola. Full Stack Developer (.NET · Angular · TypeScript) con foco en IA aplicada al desarrollo, arquitectura software y calidad.',
      url: 'https://alexvinola.com',
    });
  }

  ngAfterViewInit(): void {
    this.spy.init(SECTION_IDS);
  }

  ngOnDestroy(): void {
    this.spy.dispose();
  }
}
