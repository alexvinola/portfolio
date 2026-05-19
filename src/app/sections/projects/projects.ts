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
    #projects-wrap { max-width: 1100px; margin: 0 auto; }
    .pg {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.1rem;
    }
    @media (min-width: 800px) { .pg { grid-template-columns: 1fr 1fr; } }

    .pc {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--border);
      background:
        radial-gradient(120% 120% at 100% 0%, color-mix(in oklch, var(--accent) 7%, transparent), transparent 55%),
        var(--bg2);
      padding: 1.9rem;
      display: flex;
      flex-direction: column;
      transition: border-color .3s ease, transform .3s ease, background .3s ease;
    }
    .pc.feat { grid-column: 1 / -1; }
    .pc::after {
      content: '';
      position: absolute; inset: -1px;
      background: radial-gradient(60% 80% at 100% 0%, color-mix(in oklch, var(--accent) 22%, transparent), transparent 60%);
      opacity: 0; transition: opacity .35s ease; pointer-events: none;
    }
    .pc:hover {
      border-color: var(--accent);
      transform: translateY(-3px);
    }
    .pc:hover::after { opacity: 1; }
    .pc > * { position: relative; z-index: 1; }

    .pc-idx {
      display: block; margin-bottom: 1.1rem;
      font-family: var(--font-mono); font-size: 3rem; font-weight: 700;
      line-height: 0.8; color: var(--text); opacity: 0.13;
      letter-spacing: -0.04em;
      transition: opacity .3s ease, color .3s ease;
    }
    .pc:hover .pc-idx { opacity: 0.26; color: var(--accent); }

    .pc-head {
      display: flex; align-items: flex-start;
      justify-content: space-between; gap: 1rem;
    }
    .pc-cat {
      flex-shrink: 0; margin-top: 0.25rem;
      display: inline-flex; align-items: center; gap: 0.45rem;
      font-family: var(--font-mono); font-size: 0.625rem;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--accent); padding: 0.24rem 0.6rem;
      border: 1px solid color-mix(in oklch, var(--accent) 32%, transparent);
      background: color-mix(in oklch, var(--accent) 8%, transparent);
    }
    .pc-cat .d { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }

    .pc-name {
      font-family: var(--font-display); font-size: 1.5rem; font-weight: 700;
      color: var(--text); letter-spacing: -0.02em; line-height: 1.1;
    }
    .pc.feat .pc-name { font-size: 1.85rem; }
    .pc-tagline {
      margin-top: 0.35rem; font-family: var(--font-mono);
      font-size: 0.74rem; color: var(--accent); letter-spacing: 0.02em;
    }
    .pc-desc {
      margin-top: 1rem; font-size: 0.875rem;
      color: var(--text2); line-height: 1.7; max-width: 62ch;
    }
    .pc-highlights {
      margin-top: 1rem; list-style: none; padding: 0;
      display: flex; flex-direction: column; gap: 0.4rem;
    }
    .pc-highlights li {
      font-size: 0.8125rem; color: var(--text2);
      display: flex; gap: 0.55rem; line-height: 1.5;
    }
    .pc-highlights li::before { content: '▸'; color: var(--accent); flex-shrink: 0; }

    .pc-tags {
      margin-top: 1.3rem; display: flex; flex-wrap: wrap; gap: 0.4rem;
    }
    .pc-tag {
      font-family: var(--font-mono); font-size: 0.6875rem;
      padding: 0.22rem 0.55rem; color: var(--text3);
      border: 1px solid var(--border); letter-spacing: 0.03em;
      transition: color .25s ease, border-color .25s ease;
    }
    .pc:hover .pc-tag {
      color: var(--text2);
      border-color: color-mix(in oklch, var(--accent) 25%, var(--border));
    }

    .pc-links {
      margin-top: auto; padding-top: 1.6rem;
      display: flex; gap: 0.5rem; flex-wrap: wrap;
    }
    .pc-link {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono); font-size: 0.7rem;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--text2); text-decoration: none;
      padding: 0.5rem 0.85rem; border: 1px solid var(--border);
      transition: color .2s ease, border-color .2s ease, background .2s ease;
    }
    .pc-link:hover {
      color: var(--accent); border-color: var(--accent);
      background: color-mix(in oklch, var(--accent) 10%, transparent);
    }

    .more-link {
      margin-top: 2rem; display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--text2); text-decoration: none;
      padding-bottom: 0.25rem; border-bottom: 1px solid var(--border);
      transition: color .2s ease, border-color .2s ease;
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

        <div [appReveal]="0" class="pg">
          @for (p of items; track p.name; let i = $index) {
            <article class="pc" [class.feat]="p.featured && i === 0">
              <span class="pc-idx" aria-hidden="true">{{ idx(i) }}</span>

              <div class="pc-head">
                <div>
                  <h3 class="pc-name">{{ p.name }}</h3>
                  <p class="pc-tagline">{{ p.tagline | loc }}</p>
                </div>
                <span class="pc-cat"><span class="d"></span>{{ catLabel(p.category) }}@if (p.year) { · {{ p.year }} }</span>
              </div>
              <p class="pc-desc">{{ p.description | loc }}</p>

              @if (p.highlights?.length) {
                <ul class="pc-highlights">
                  @for (h of p.highlights; track $index) {
                    <li>{{ h | loc }}</li>
                  }
                </ul>
              }

              <div class="pc-tags">
                @for (t of p.technologies; track t) {
                  <span class="pc-tag">{{ t }}</span>
                }
              </div>

              <div class="pc-links">
                @if (p.links?.github) {
                  <a [href]="p.links!.github" target="_blank" rel="noopener" class="pc-link" [attr.aria-label]="p.name + ' — GitHub'">
                    <app-social-icon name="github" size="14" />{{ 'projects.cta.code' | t }}
                  </a>
                }
                @if (p.links?.demo) {
                  <a [href]="p.links!.demo" target="_blank" rel="noopener" class="pc-link" [attr.aria-label]="p.name + ' — demo'">
                    <app-social-icon name="globe" size="14" />{{ 'projects.cta.demo' | t }}
                  </a>
                }
                @if (p.links?.article) {
                  <a [href]="p.links!.article" target="_blank" rel="noopener" class="pc-link" [attr.aria-label]="p.name + ' — article'">
                    <app-social-icon name="external" size="14" />{{ 'projects.cta.article' | t }}
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

  private categoryLabels: Record<string, string> = {
    ai: 'AI',
    web: 'Web',
    mobile: 'Mobile',
    tooling: 'Tooling',
    learning: 'Learning',
  };

  protected idx(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  protected catLabel(c: string): string {
    return this.categoryLabels[c] ?? c;
  }
}
