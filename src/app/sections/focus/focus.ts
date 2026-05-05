import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { LocalizedPipe } from '../../core/pipes/localized.pipe';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { focus } from '../../core/data/focus.data';

@Component({
  selector: 'app-focus',
  standalone: true,
  imports: [TranslatePipe, LocalizedPipe, RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    #focus-wrap { max-width: 1100px; margin: 0 auto; }
    .focus-grid {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
    }
    @media (min-width: 700px) {
      .focus-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1000px) {
      .focus-grid { grid-template-columns: repeat(3, 1fr); }
    }
    .focus-card {
      background: var(--bg2);
      padding: 1.75rem;
      transition: background .2s;
      position: relative;
    }
    .focus-card:hover { background: var(--bg3); }
    .focus-num {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text3);
      letter-spacing: 0.12em;
    }
    .focus-title {
      margin-top: 0.5rem;
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text);
      letter-spacing: -0.01em;
    }
    .focus-desc {
      margin-top: 0.75rem;
      font-size: 0.875rem;
      color: var(--text2);
      line-height: 1.7;
    }
    .focus-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 0; height: 2px;
      background: var(--accent);
      transition: width .35s ease;
    }
    .focus-card:hover::before { width: 100%; }
  `],
  template: `
    <section id="focus" class="container-page section-pad">
      <div id="focus-wrap">
        <app-section-heading
          [label]="'focus.label' | t"
          [titleLine1]="'focus.title' | t"
          [subtitle]="'focus.subtitle' | t"
        ></app-section-heading>

        <div [appReveal]="0" class="focus-grid">
          @for (f of items; track $index; let i = $index) {
            <article class="focus-card">
              <span class="focus-num">0{{ i + 1 }}</span>
              <h3 class="focus-title">{{ f.title | loc }}</h3>
              <p class="focus-desc">{{ f.description | loc }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Focus {
  protected items = focus;
}
