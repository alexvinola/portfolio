import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { LocalizedPipe } from '../../core/pipes/localized.pipe';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { experience } from '../../core/data/experience.data';
import { personal } from '../../core/data/personal.data';

const COLLAPSED_COUNT = 3;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe, LocalizedPipe, RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .timeline-wrap { max-width: 860px; margin: 0 auto; }
    .timeline {
      margin-top: 3rem;
      position: relative;
    }
    .timeline::before {
      content: '';
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 1px; background: var(--border);
    }
    .timeline-item {
      padding-left: 2rem;
      padding-bottom: 3rem;
      position: relative;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-dot {
      position: absolute; left: -4px; top: 6px;
      width: 9px; height: 9px;
      border: 2px solid var(--bg);
      background: var(--text3);
      border-radius: 50%;
      transition: background .2s;
    }
    .timeline-item:hover .timeline-dot { background: var(--accent); }
    .timeline-item.current .timeline-dot { background: var(--accent); }
    .tl-meta {
      display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
      margin-bottom: 0.75rem;
    }
    .tl-date {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: var(--text3);
      letter-spacing: 0.1em;
    }
    .tl-badge {
      display: inline-flex; align-items: center; gap: 0.4rem;
      font-family: var(--font-mono);
      font-size: 0.625rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.2rem 0.55rem;
      background: color-mix(in oklch, var(--accent) 15%, transparent);
      color: var(--accent);
      border: 1px solid color-mix(in oklch, var(--accent) 30%, transparent);
    }
    .tl-badge::before {
      content: '';
      width: 5px; height: 5px;
      background: var(--accent);
      border-radius: 50%;
      animation: pulse-dot 2s ease-in-out infinite;
    }
    .tl-role {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text);
      letter-spacing: -0.01em;
    }
    .tl-company {
      margin-top: 0.15rem;
      font-size: 0.875rem;
      color: var(--text2);
    }
    .tl-desc {
      margin-top: 0.85rem;
      font-size: 0.875rem;
      color: var(--text2);
      line-height: 1.7;
    }
    .tl-desc + .tl-desc { margin-top: 0.5rem; }
    .tl-tags {
      margin-top: 1rem;
      display: flex; gap: 0.5rem; flex-wrap: wrap;
    }
    .tl-tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      padding: 0.25rem 0.6rem;
      background: var(--bg3);
      color: var(--text3);
      letter-spacing: 0.05em;
      border: 1px solid var(--border);
    }

    .timeline-actions {
      margin-top: 2.5rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .toggle-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text2);
      background: transparent;
      border: 1px solid var(--border);
      padding: 0.6rem 1rem;
      cursor: pointer;
      transition: border-color .2s, color .2s, transform .2s;
    }
    .toggle-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-1px);
    }
    .toggle-btn .chev {
      transition: transform .25s ease;
    }
    .toggle-btn.expanded .chev {
      transform: rotate(180deg);
    }

    .linkedin-link {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text2);
      text-decoration: none;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid var(--border);
      transition: color .2s, border-color .2s;
    }
    .linkedin-link:hover {
      color: var(--accent);
      border-color: var(--accent);
    }
  `],
  template: `
    <section id="experience" class="container-page section-pad">
      <div class="timeline-wrap">
        <app-section-heading
          [label]="'experience.label' | t"
          [titleLine1]="'experience.title' | t"
        ></app-section-heading>

        <div class="timeline">
          @for (exp of visibleItems(); track $index; let i = $index) {
            <article
              [appReveal]="i * 80"
              class="timeline-item"
              [class.current]="exp.current"
            >
              <span class="timeline-dot" aria-hidden="true"></span>
              <div class="tl-meta">
                <span class="tl-date">{{ exp.period | loc }}</span>
                @if (exp.current) {
                  <span class="tl-badge">{{ 'experience.current' | t }}</span>
                }
              </div>
              <h3 class="tl-role">{{ exp.role | loc }}</h3>
              <p class="tl-company">{{ exp.company | loc }}</p>
              @for (line of exp.description; track $index) {
                <p class="tl-desc">{{ line | loc }}</p>
              }
              <div class="tl-tags">
                @for (t of exp.technologies; track $index) {
                  <span class="tl-tag">{{ t | loc }}</span>
                }
              </div>
            </article>
          }
        </div>

        <div class="timeline-actions">
          @if (canToggle) {
            <button
              type="button"
              class="toggle-btn"
              [class.expanded]="expanded()"
              (click)="toggle()"
              [attr.aria-expanded]="expanded()"
            >
              {{ (expanded() ? 'experience.cta.less' : 'experience.cta.more') | t }}
              @if (!expanded()) {
                <span class="opacity-60">(+{{ hiddenCount }})</span>
              }
              <svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          }

          <a [href]="linkedin" target="_blank" rel="noopener" class="linkedin-link">
            {{ 'experience.cta.linkedin' | t }} ↗
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Experience {
  protected items = experience;
  protected linkedin = personal.social.linkedin;
  protected expanded = signal(false);

  protected canToggle = this.items.length > COLLAPSED_COUNT;
  protected hiddenCount = Math.max(0, this.items.length - COLLAPSED_COUNT);

  protected visibleItems = computed(() =>
    this.expanded() ? this.items : this.items.slice(0, COLLAPSED_COUNT),
  );

  toggle(): void {
    this.expanded.update((v) => !v);
  }
}
