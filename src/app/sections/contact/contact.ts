import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { SocialIcon } from '../../shared/ui/social-icons/social-icons';
import { personal } from '../../core/data/personal.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, RevealDirective, SectionHeading, SocialIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    #contact-wrap {
      max-width: 720px; margin: 0 auto;
      text-align: center;
    }
    #contact-wrap .section-label,
    #contact-wrap .section-title {
      text-align: center;
    }
    .contact-email {
      display: inline-block;
      margin-top: 2rem;
      font-family: var(--font-display);
      font-size: clamp(1.25rem, 3vw, 2rem);
      font-weight: 600;
      color: var(--text);
      text-decoration: none;
      border-bottom: 2px solid var(--accent);
      padding-bottom: 0.25rem;
      transition: color .2s;
      letter-spacing: -0.01em;
    }
    .contact-email:hover { color: var(--accent); }
    .contact-links {
      margin-top: 2.5rem;
      display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap;
    }
    .contact-link {
      display: inline-flex; align-items: center; gap: 0.55rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text2);
      text-decoration: none;
      padding: 0.65rem 1.25rem;
      border: 1px solid var(--border);
      transition: border-color .2s, color .2s, transform .2s;
    }
    .contact-link:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-1px);
    }
  `],
  template: `
    <section id="contact" class="container-page section-pad">
      <div id="contact-wrap">
        <app-section-heading
          [label]="'contact.label' | t"
          [titleLine1]="'contact.title.line1' | t"
          [titleLine2]="'contact.title.line2' | t"
        ></app-section-heading>

        <a [appReveal]="0" [href]="'mailto:' + email" class="contact-email">{{ email }}</a>

        <div [appReveal]="100" class="contact-links">
          <a [href]="linkedin" target="_blank" rel="noopener" class="contact-link" aria-label="LinkedIn">
            <app-social-icon name="linkedin" size="14" />
            LinkedIn ↗
          </a>
          <a [href]="github" target="_blank" rel="noopener" class="contact-link" aria-label="GitHub">
            <app-social-icon name="github" size="14" />
            GitHub ↗
          </a>
          <a [href]="huggingface" target="_blank" rel="noopener" class="contact-link" aria-label="Hugging Face">
            <app-social-icon name="huggingface" size="16" />
            Hugging Face ↗
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  protected email = personal.email;
  protected linkedin = personal.social.linkedin;
  protected github = personal.social.github;
  protected huggingface = personal.social.huggingface;
}
