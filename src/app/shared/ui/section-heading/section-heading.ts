import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../../core/directives/reveal.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header [appReveal]="0" class="mb-10 md:mb-14">
      @if (label) {
        <p class="section-label mb-4">{{ label }}</p>
      }
      <h2 class="section-title">
        @if (titleLine2) {
          {{ titleLine1 }}<br />{{ titleLine2 }}
        } @else {
          {{ titleLine1 }}
        }
      </h2>
      @if (subtitle) {
        <p class="mt-4 max-w-2xl text-[var(--text2)] leading-relaxed">{{ subtitle }}</p>
      }
    </header>
  `,
})
export class SectionHeading {
  @Input({ required: true }) titleLine1!: string;
  @Input() titleLine2?: string;
  @Input() label?: string;
  @Input() subtitle?: string;
}
