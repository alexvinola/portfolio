import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { ProjectImage } from '../../../core/models/project.model';
import { LocalizedPipe } from '../../../core/pipes/localized.pipe';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-project-gallery',
  imports: [LocalizedPipe, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './project-gallery.css',
  template: `
    @if (current(); as image) {
      <section class="gallery" role="region" [attr.aria-label]="'projects.gallery.title' | t"
        (keydown.arrowleft)="onArrow($event, -1)" (keydown.arrowright)="onArrow($event, 1)">
        <div class="gallery-heading">
          <h3>{{ 'projects.gallery.title' | t }}</h3>
          @if (images().length > 1) {
            <div class="controls">
              <button type="button" (click)="move(-1)" [attr.aria-label]="'projects.gallery.previous' | t">←</button>
              <span aria-live="polite" aria-atomic="true">{{ index() + 1 }} / {{ images().length }}</span>
              <button type="button" (click)="move(1)" [attr.aria-label]="'projects.gallery.next' | t">→</button>
            </div>
          }
        </div>
        <figure>
          <div class="stage">
            @if (failed()) {
              <p role="status">{{ 'projects.gallery.error' | t }}</p>
            } @else {
              @for (item of [image]; track item.src) {
                <img [src]="item.src" [alt]="item.alt | loc" (error)="failed.set(true)" decoding="async" />
              }
            }
          </div>
          <figcaption>
            <span>{{ (image.caption || image.alt) | loc }}</span>
            <a [href]="image.src" target="_blank" rel="noopener">{{ 'projects.gallery.full' | t }} ↗</a>
          </figcaption>
        </figure>
        @if (images().length > 1) {
          <div class="thumbnails">
            @for (item of images(); track item.src; let i = $index) {
              <button type="button" (click)="select(i)" [class.selected]="i === index()"
                [attr.aria-pressed]="i === index()"
                [attr.aria-label]="('projects.gallery.image' | t) + ' ' + (i + 1) + ': ' + (item.alt | loc)">
                <img [src]="item.src" alt="" loading="lazy" decoding="async" />
              </button>
            }
          </div>
        }
      </section>
    }
  `,
})
export class ProjectGallery {
  readonly images = input.required<ProjectImage[]>();
  protected readonly index = signal(0);
  protected readonly failed = signal(false);
  protected readonly current = computed(() => this.images()[this.index()]);

  constructor() {
    effect(() => {
      this.images();
      this.index.set(0);
      this.failed.set(false);
    });
  }

  protected select(index: number): void {
    this.index.set(index);
    this.failed.set(false);
  }

  protected move(direction: number): void {
    const count = this.images().length;
    if (count > 1) this.select((this.index() + direction + count) % count);
  }

  protected onArrow(event: Event, direction: number): void {
    if (this.images().length < 2) return;
    event.preventDefault();
    this.move(direction);
  }
}
