import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { LocalizedPipe } from '../../core/pipes/localized.pipe';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { SocialIcon } from '../../shared/ui/social-icons/social-icons';
import { projects } from '../../core/data/projects.data';
import { personal } from '../../core/data/personal.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, LocalizedPipe, RevealDirective, SectionHeading, SocialIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    #projects-wrap { max-width: 1200px; margin: 0 auto; }
    .proj-grid {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
    }
    @media (min-width: 800px) {
      .proj-grid { grid-template-columns: repeat(2, 1fr); }
    }
    .proj-card {
      background: var(--bg2);
      padding: 1.85rem;
      transition: background .25s;
      position: relative;
      display: flex; flex-direction: column;
    }
    .proj-card:hover { background: var(--bg3); }
    .proj-card.featured { grid-column: 1 / -1; }
    .proj-head {
      display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;
    }
    .proj-name {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--text);
      letter-spacing: -0.01em;
    }
    .proj-tag {
      margin-top: 0.2rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text3);
      letter-spacing: 0.05em;
    }
    .proj-meta {
      font-family: var(--font-mono);
      font-size: 0.625rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.2rem 0.55rem;
      color: var(--accent);
      border: 1px solid color-mix(in oklch, var(--accent) 30%, transparent);
      background: color-mix(in oklch, var(--accent) 8%, transparent);
      white-space: nowrap;
    }
    .proj-desc {
      margin-top: 1rem;
      font-size: 0.875rem;
      color: var(--text2);
      line-height: 1.7;
    }
    .proj-highlights {
      margin-top: 0.9rem;
      list-style: none;
      padding: 0;
      display: flex; flex-direction: column; gap: 0.4rem;
    }
    .proj-highlights li {
      font-size: 0.8125rem;
      color: var(--text2);
      display: flex; gap: 0.5rem;
    }
    .proj-highlights li::before {
      content: '▸';
      color: var(--accent);
    }
    .proj-tags {
      margin-top: 1.1rem;
      display: flex; flex-wrap: wrap; gap: 0.4rem;
    }
    .proj-tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      padding: 0.22rem 0.55rem;
      background: var(--bg3);
      color: var(--text3);
      border: 1px solid var(--border);
      letter-spacing: 0.03em;
    }
    .proj-links {
      margin-top: auto;
      padding-top: 1.5rem;
      display: flex; gap: 0.6rem;
      align-items: center;
    }
    .proj-icon-link {
      width: 38px; height: 38px;
      display: inline-flex; align-items: center; justify-content: center;
      border: 1px solid var(--border);
      color: var(--text2);
      transition: color .2s, border-color .2s, transform .2s;
      text-decoration: none;
    }
    .proj-icon-link:hover {
      color: var(--accent);
      border-color: var(--accent);
      transform: translateY(-1px);
    }
    .proj-icon-link .label {
      display: none;
    }

    .more-link {
      margin-top: 2rem;
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text2);
      text-decoration: none;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid var(--border);
      transition: color .2s, border-color .2s;
    }
    .more-link:hover { color: var(--accent); border-color: var(--accent); }
  `],
  template: `
    <section id="projects" class="container-page section-pad">
      <div id="projects-wrap">
        <app-section-heading
          [label]="'projects.label' | t"
          [titleLine1]="'projects.title' | t"
          [subtitle]="'projects.subtitle' | t"
        ></app-section-heading>

        <div [appReveal]="0" class="proj-grid">
          @for (p of items; track p.name; let i = $index) {
            <article class="proj-card" [class.featured]="p.featured && i === 0">
              <div class="proj-head">
                <div>
                  <h3 class="proj-name">{{ p.name }}</h3>
                  <p class="proj-tag">{{ p.tagline | loc }}</p>
                </div>
                <span class="proj-meta">{{ p.category }}@if (p.year) { · {{ p.year }} }</span>
              </div>

              <p class="proj-desc">{{ p.description | loc }}</p>

              @if (p.highlights?.length) {
                <ul class="proj-highlights">
                  @for (h of p.highlights; track $index) {
                    <li>{{ h | loc }}</li>
                  }
                </ul>
              }

              <div class="proj-tags">
                @for (t of p.technologies; track t) {
                  <span class="proj-tag">{{ t }}</span>
                }
              </div>

              <div class="proj-links">
                @if (p.links?.github) {
                  <a [href]="p.links!.github" target="_blank" rel="noopener" class="proj-icon-link" [attr.aria-label]="p.name + ' — código en GitHub'" [title]="'Código en GitHub'">
                    <app-social-icon name="github" size="16" />
                  </a>
                }
                @if (p.links?.demo) {
                  <a [href]="p.links!.demo" target="_blank" rel="noopener" class="proj-icon-link" [attr.aria-label]="p.name + ' — web/demo'" [title]="'Web / demo'">
                    <app-social-icon name="globe" size="16" />
                  </a>
                }
                @if (p.links?.article) {
                  <a [href]="p.links!.article" target="_blank" rel="noopener" class="proj-icon-link" [attr.aria-label]="p.name + ' — artículo'" [title]="'Artículo'">
                    <app-social-icon name="external" size="16" />
                  </a>
                }
              </div>
            </article>
          }
        </div>

        <a [href]="github" target="_blank" rel="noopener" class="more-link">{{ 'projects.cta.all' | t }} ↗</a>
      </div>
    </section>
  `,
})
export class Projects {
  protected items = projects;
  protected github = personal.social.github;
}
