import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { LocalizedPipe } from '../../core/pipes/localized.pipe';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { personal } from '../../core/data/personal.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, LocalizedPipe, RevealDirective, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    #about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: start;
    }
    @media (min-width: 900px) {
      #about-grid { grid-template-columns: 1.1fr 1fr; gap: 4rem; }
    }
    .about-text p {
      margin-top: 1.25rem;
      font-size: 0.9375rem;
      color: var(--text2);
      line-height: 1.75;
    }
    .lang-pills {
      margin-top: 1.5rem;
      display: flex; gap: 0.75rem; flex-wrap: wrap;
    }
    .lang-pill {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      padding: 0.4rem 0.75rem;
      border: 1px solid var(--border);
      color: var(--text2);
      letter-spacing: 0.05em;
    }
    .lang-pill.native { border-color: var(--accent); color: var(--accent); }
    .lang-pill .flag { font-size: 0.95rem; }

    .about-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
    }
    .stat-box {
      background: var(--bg2);
      padding: 1.75rem;
      transition: background .2s;
    }
    .stat-box:hover { background: var(--bg3); }
    .stat-num {
      font-family: var(--font-display);
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--accent);
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .stat-label {
      margin-top: 0.4rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text3);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .terminal {
      margin-top: 1rem;
      background: var(--bg2);
      border: 1px solid var(--border);
      padding: 1.25rem 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      line-height: 1.85;
      color: var(--text3);
    }
    .terminal .prompt { color: var(--accent); }
    .terminal .cmd { color: var(--text2); }
    .terminal .out { color: var(--text3); }
    .terminal .out strong { color: var(--text2); font-weight: 500; }
  `],
  template: `
    <section id="about" class="container-page section-pad">
      <div id="about-grid">
        <div [appReveal]="0" class="about-text">
          <app-section-heading
            [label]="'about.label' | t"
            [titleLine1]="'about.title.line1' | t"
            [titleLine2]="'about.title.line2' | t"
          ></app-section-heading>
          <p>{{ 'about.p1' | t }}</p>
          <p>{{ 'about.p2' | t }}</p>

          <div class="lang-pills">
            <span class="lang-pill native">{{ 'about.lang.es' | t }}</span>
            <span class="lang-pill">{{ 'about.lang.en' | t }}</span>
          </div>
        </div>

        <div [appReveal]="150" style="display:flex;flex-direction:column;gap:1rem;">
          <div class="about-stats">
            @for (s of stats; track $index) {
              <div class="stat-box">
                <div class="stat-num">{{ s.num }}</div>
                <div class="stat-label">{{ s.label | loc }}</div>
              </div>
            }
          </div>

          <div class="terminal" role="presentation">
            <span class="prompt">$ </span><span class="cmd">whoami</span><br />
            <span class="out">→ alejandro vinola</span><br />
            <span class="prompt">$ </span><span class="cmd">cat location.txt</span><br />
            <span class="out">→ {{ location | loc }}</span><br />
            <span class="prompt">$ </span><span class="cmd">echo $STATUS</span><br />
            <span class="out">→ <span [innerHTML]="'about.term.status' | t"></span></span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected stats = personal.stats;
  protected location = personal.location;
}
