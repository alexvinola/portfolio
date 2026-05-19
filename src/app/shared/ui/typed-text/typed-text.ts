import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
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
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);
  protected displayed = signal('');
  private idx = 0;
  private deleting = false;
  private timer?: number;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.displayed.set(this.words[0] ?? '');
      return;
    }
    // Todo el bucle corre FUERA de la zona Angular: el setTimeout perpetuo
    // ya no dispara change detection global cada 45–80 ms (lo que bloqueaba
    // el scroll en móvil). Sólo refrescamos este componente, de forma local.
    this.zone.runOutsideAngular(() => this.tick());
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private render(value: string): void {
    this.displayed.set(value);
    this.cdr.detectChanges(); // O(1): sólo este <span>, no toca el resto de la app
  }

  private tick(): void {
    const word = this.words[this.idx];
    if (!word) return;
    const current = this.displayed();

    if (!this.deleting && current.length < word.length) {
      this.timer = window.setTimeout(() => {
        this.render(word.slice(0, current.length + 1));
        this.tick();
      }, this.typeSpeed);
    } else if (!this.deleting && current.length === word.length) {
      this.timer = window.setTimeout(() => {
        this.deleting = true;
        this.tick();
      }, this.holdMs);
    } else if (this.deleting && current.length > 0) {
      this.timer = window.setTimeout(() => {
        this.render(current.slice(0, -1));
        this.tick();
      }, this.deleteSpeed);
    } else {
      this.deleting = false;
      this.idx = (this.idx + 1) % this.words.length;
      this.tick();
    }
  }
}
