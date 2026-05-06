import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { TypedText } from '../../shared/ui/typed-text/typed-text';
import { SocialIcon } from '../../shared/ui/social-icons/social-icons';
import { personal } from '../../core/data/personal.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe, TypedText, SocialIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    #hero {
      min-height: 100vh;
      display: flex; flex-direction: column; justify-content: center;
      padding-top: 64px;
      position: relative;
      overflow: hidden;
    }
    .hero-grid-bg {
      position: absolute; inset: 0; z-index: 0;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 48px 48px;
      opacity: 0.35;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
      pointer-events: none;
    }
    .hero-content { position: relative; z-index: 1; max-width: 900px; }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
      border: 1px solid color-mix(in oklch, var(--accent) 40%, transparent);
      padding: 0.35rem 0.75rem;
      margin-bottom: 2rem;
      letter-spacing: 0.1em;
    }
    .hero-badge::before {
      content: '';
      width: 6px; height: 6px;
      background: var(--accent);
      border-radius: 50%;
      animation: pulse-dot 2s ease-in-out infinite;
    }
    .hero-name {
      font-family: var(--font-display);
      font-size: clamp(3.5rem, 9vw, 8rem);
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: -0.03em;
      color: var(--text);
      text-wrap: balance;
    }
    .hero-name .accent { color: var(--accent); }
    .hero-title {
      margin-top: 1.5rem;
      font-size: clamp(1rem, 2.5vw, 1.375rem);
      font-weight: 300;
      color: var(--text2);
      letter-spacing: 0.01em;
    }
    .hero-desc {
      margin-top: 1.5rem;
      max-width: 560px;
      font-size: 1rem;
      color: var(--text2);
      line-height: 1.7;
    }
    .hero-desc strong { color: var(--text); font-weight: 500; }
    .hero-cta {
      margin-top: 2.5rem;
      display: flex; gap: 0.75rem; flex-wrap: wrap;
      align-items: center;
    }
    .hero-socials {
      margin-top: 2rem;
      display: flex; gap: 0.75rem; align-items: center;
    }
    .social-link {
      width: 40px; height: 40px;
      display: inline-flex; align-items: center; justify-content: center;
      border: 1px solid var(--border);
      color: var(--text2);
      transition: color .2s, border-color .2s, transform .2s;
    }
    .social-link:hover {
      color: var(--accent);
      border-color: var(--accent);
      transform: translateY(-1px);
    }
    .hero-scroll {
      position: absolute; bottom: 2.5rem; left: clamp(1.5rem, 5vw, 4rem);
      display: flex; align-items: center; gap: 0.75rem;
      font-family: var(--font-mono); font-size: 0.6875rem;
      color: var(--text3); letter-spacing: 0.12em; text-transform: uppercase;
      z-index: 1;
    }
    .hero-scroll::before {
      content: '';
      width: 40px; height: 1px; background: var(--border);
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .anim-fadeup { opacity: 0; animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.45s; }
    .delay-5 { animation-delay: 0.6s; }
    .delay-6 { animation-delay: 0.75s; }
    @media (prefers-reduced-motion: reduce) {
      .anim-fadeup { opacity: 1; animation: none; }
    }
  `],
  template: `
    <section id="hero">
      <div class="hero-grid-bg" aria-hidden="true"></div>
      <div class="container-page hero-content">
        <!-- <div class="hero-badge anim-fadeup delay-1">{{ 'hero.eyebrow' | t }}</div> -->

        <h1 class="hero-name anim-fadeup delay-2">
          Alejandro<br /><span class="accent">Vi&ntilde;ola</span>
        </h1>

        <p class="hero-title anim-fadeup delay-3">
          <app-typed-text [words]="words"></app-typed-text>
        </p>

        <p class="hero-desc anim-fadeup delay-4" [innerHTML]="'hero.desc.html' | t"></p>

        <div class="hero-cta anim-fadeup delay-5">
          <a href="#contact" class="btn-primary">{{ 'hero.cta.contact' | t }} →</a>
          <a [href]="cv" download class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
            {{ 'hero.cta.cv' | t }}
          </a>
        </div>

        <div class="hero-socials anim-fadeup delay-6">
          <a [href]="linkedin" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <app-social-icon name="linkedin" size="16" />
          </a>
          <a [href]="github" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <app-social-icon name="github" size="16" />
          </a>
          <a [href]="huggingface" target="_blank" rel="noopener" class="social-link" aria-label="Hugging Face">
            <app-social-icon name="huggingface" size="18" />
          </a>
          <a [href]="'mailto:' + email" class="social-link" aria-label="Email">
            <app-social-icon name="email" size="16" />
          </a>
        </div>
      </div>
      <div class="hero-scroll" aria-hidden="true">{{ 'hero.scroll' | t }}</div>
    </section>
  `,
})
export class Hero {
  protected words = personal.typedRoles;
  protected cv = personal.cvFile;
  protected linkedin = personal.social.linkedin;
  protected github = personal.social.github;
  protected huggingface = personal.social.huggingface;
  protected email = personal.email;
}
