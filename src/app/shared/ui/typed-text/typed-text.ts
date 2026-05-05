import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-typed-text',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span>{{ displayed() }}<span class="cursor-line" aria-hidden="true"></span></span>`,
})
export class TypedText implements OnInit, OnDestroy {
  @Input({ required: true }) words: readonly string[] = [];
  @Input() typeSpeed = 80;
  @Input() deleteSpeed = 45;
  @Input() holdMs = 2000;

  private platformId = inject(PLATFORM_ID);
  protected displayed = signal('');
  private idx = 0;
  private deleting = false;
  private timer?: number;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.displayed.set(this.words[0] ?? '');
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private tick(): void {
    const word = this.words[this.idx];
    if (!word) return;
    const current = this.displayed();

    if (!this.deleting && current.length < word.length) {
      this.timer = window.setTimeout(() => {
        this.displayed.set(word.slice(0, current.length + 1));
        this.tick();
      }, this.typeSpeed);
    } else if (!this.deleting && current.length === word.length) {
      this.timer = window.setTimeout(() => {
        this.deleting = true;
        this.tick();
      }, this.holdMs);
    } else if (this.deleting && current.length > 0) {
      this.timer = window.setTimeout(() => {
        this.displayed.set(current.slice(0, -1));
        this.tick();
      }, this.deleteSpeed);
    } else {
      this.deleting = false;
      this.idx = (this.idx + 1) % this.words.length;
      this.tick();
    }
  }
}
