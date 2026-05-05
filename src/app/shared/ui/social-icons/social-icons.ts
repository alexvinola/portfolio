import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Iconos sociales en SVG inline usando currentColor (neutros, sin colores de marca).
 * Heredan el color del texto: var(--text), var(--text2), etc.
 */
@Component({
  selector: 'app-social-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @switch (name) {
      @case ('github') {
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" [attr.width]="size" [attr.height]="size">
          <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3"/>
        </svg>
      }
      @case ('linkedin') {
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" [attr.width]="size" [attr.height]="size">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25ZM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0Z"/>
        </svg>
      }
      @case ('huggingface') {
        <img
          src="/hf-logo-pirate.svg"
          alt=""
          aria-hidden="true"
          [attr.width]="size"
          [attr.height]="size"
          loading="lazy"
          decoding="async"
          style="display:block;object-fit:contain;"
        />
      }
      @case ('email') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" [attr.width]="size" [attr.height]="size">
          <rect x="3" y="5" width="18" height="14" rx="1"/>
          <path d="m3 7 9 6 9-6"/>
        </svg>
      }
      @case ('phone') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" [attr.width]="size" [attr.height]="size">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
        </svg>
      }
      @case ('globe') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" [attr.width]="size" [attr.height]="size">
          <circle cx="12" cy="12" r="9"/>
          <path d="M3 12h18"/>
          <path d="M12 3a14 14 0 0 1 0 18"/>
          <path d="M12 3a14 14 0 0 0 0 18"/>
        </svg>
      }
      @case ('external') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" [attr.width]="size" [attr.height]="size">
          <path d="M15 3h6v6"/>
          <path d="M10 14 21 3"/>
          <path d="M21 14v7H3V3h7"/>
        </svg>
      }
    }
  `,
})
export class SocialIcon {
  @Input({ required: true }) name!: 'github' | 'linkedin' | 'huggingface' | 'email' | 'phone' | 'globe' | 'external';
  @Input() size: number | string = 16;
}
