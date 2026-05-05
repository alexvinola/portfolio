import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-chip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border border-[var(--color-border)] bg-white/[0.02] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-accent)]/40 transition-colors"
      [class.!text-]="false"
    >
      <ng-content />
    </span>
  `,
})
export class TagChip {
  @Input() label?: string;
}
