import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { LocalizedPipe } from '../../core/pipes/localized.pipe';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { skills, conceptualSkills } from '../../core/data/skills.data';
import { SkillItem } from '../../core/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, LocalizedPipe, RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    #skills-wrap { max-width: 1200px; margin: 0 auto; }

    .skills-grid {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
    }
    .skill-card {
      background: var(--bg2);
      padding: 1.6rem 1.5rem 1.75rem;
      transition: background .25s;
    }
    .skill-card:hover { background: var(--bg3); }
    .skill-cat {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 1.1rem;
      display: flex; align-items: center; gap: 0.5rem;
    }
    .skill-cat::before {
      content: '';
      width: 14px; height: 1px; background: var(--accent);
    }
    .skill-items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
      gap: 0.6rem;
    }
    .skill-item {
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      padding: 0.75rem 0.4rem;
      border: 1px solid transparent;
      transition: border-color .2s, background .2s, transform .2s;
      cursor: default;
    }
    .skill-item:hover {
      border-color: var(--border);
      background: color-mix(in oklch, var(--bg) 60%, transparent);
      transform: translateY(-2px);
    }
    .skill-icon {
      width: 32px; height: 32px;
      display: inline-flex; align-items: center; justify-content: center;
      filter: drop-shadow(0 0 6px rgba(0,0,0,.3));
    }
    .skill-icon img {
      width: 100%; height: 100%;
      object-fit: contain;
    }
    .skill-name {
      font-size: 0.7rem;
      font-weight: 500;
      color: var(--text2);
      text-align: center;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }
    .skill-item.core .skill-name { color: var(--text); }
    .skill-item.core { position: relative; }
    .skill-item.core::after {
      content: '';
      position: absolute;
      top: 4px; right: 4px;
      width: 4px; height: 4px;
      background: var(--accent);
      border-radius: 50%;
    }

    .concepts-grid {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
    }
    @media (min-width: 700px) {
      .concepts-grid { grid-template-columns: repeat(3, 1fr); }
    }
    .concept-card {
      background: var(--bg2);
      padding: 1.4rem;
    }
    .concept-card h4 {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent2);
      margin-bottom: 0.85rem;
    }
    .concept-list {
      display: flex; flex-wrap: wrap; gap: 0.4rem;
    }
    .concept-tag {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      padding: 0.25rem 0.55rem;
      background: var(--bg3);
      color: var(--text2);
      border: 1px solid var(--border);
      letter-spacing: 0.03em;
    }

    .concepts-label {
      margin-top: 3rem; margin-bottom: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text3);
    }
  `],
  template: `
    <section id="skills" class="container-page section-pad">
      <div id="skills-wrap">
        <app-section-heading
          [label]="'skills.label' | t"
          [titleLine1]="'skills.title' | t"
          [subtitle]="'skills.subtitle' | t"
        ></app-section-heading>

        <div [appReveal]="0" class="skills-grid">
          @for (group of groups; track group.id) {
            <div class="skill-card">
              <div class="skill-cat">{{ group.title | loc }}</div>
              <div class="skill-items">
                @for (item of group.items; track item.name) {
                  <div class="skill-item" [class.core]="item.level === 'core'" [title]="item.name">
                    <span class="skill-icon" aria-hidden="true">
                      @if (hasIcon(item)) {
                        <img
                          [src]="iconUrl(item)"
                          [alt]="item.name + ' logo'"
                          loading="lazy"
                          decoding="async"
                          width="32"
                          height="32"
                          (error)="onIconError($event)"
                        />
                      } @else {
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="color: var(--text2)">
                          <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18"/><path d="M9 3v18"/>
                        </svg>
                      }
                    </span>
                    <span class="skill-name">{{ item.name }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <p [appReveal]="50" class="concepts-label">// {{ 'skills.concepts' | t }}</p>
        <div [appReveal]="100" class="concepts-grid">
          @for (group of concepts; track $index) {
            <div class="concept-card">
              <h4>{{ group.title | loc }}</h4>
              <div class="concept-list">
                @for (item of group.items; track item) {
                  <span class="concept-tag">{{ item }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected groups = skills;
  protected concepts = conceptualSkills;

  protected iconUrl(item: SkillItem): string {
    if (item.customIcon) return item.customIcon;
    const color = item.color ? '/' + item.color : '';
    return `https://cdn.simpleicons.org/${item.slug}${color}`;
  }

  protected hasIcon(item: SkillItem): boolean {
    return !!(item.customIcon || item.slug);
  }

  protected onIconError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
