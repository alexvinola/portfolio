import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { personal } from '../../core/data/personal.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    footer {
      padding: 2rem clamp(1.5rem, 5vw, 4rem);
      border-top: 1px solid var(--border);
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 1rem;
      margin-top: 2rem;
    }
    .footer-text {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: var(--text3);
      letter-spacing: 0.08em;
    }
    .footer-text.accent { color: var(--text2); }
    .footer-text.accent::before { content: '◇'; color: var(--accent); margin-right: 0.4rem; }
  `],
  template: `
    <footer>
      <span class="footer-text">© {{ year }} {{ name }}</span>
      <span class="footer-text accent">{{ 'footer.location' | t }}</span>
    </footer>
  `,
})
export class Footer {
  protected name = personal.name;
  protected year = new Date().getFullYear();
}
