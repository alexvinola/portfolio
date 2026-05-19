import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);
  private observer?: IntersectionObserver;

  @Input('appReveal') delayMs = 0;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }
    if (this.delayMs) {
      this.el.nativeElement.style.setProperty('--reveal-delay', `${this.delayMs}ms`);
    }
    // Observer fuera de la zona: revelar es sólo añadir una clase CSS,
    // no necesita change detection y así no penaliza el scroll.
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.el.nativeElement.classList.add('is-visible');
              this.observer?.unobserve(this.el.nativeElement);
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
