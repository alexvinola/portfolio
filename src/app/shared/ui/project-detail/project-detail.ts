import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, inject, signal, viewChild } from '@angular/core';
import { ProjectItem } from '../../../core/models/project.model';
import { LocalizedPipe } from '../../../core/pipes/localized.pipe';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';
import { ProjectGallery } from '../project-gallery/project-gallery';

@Component({
  selector: 'app-project-detail',
  imports: [LocalizedPipe, TranslatePipe, ProjectGallery],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './project-detail.css',
  template: `
    <dialog #dialog aria-labelledby="project-detail-title" (close)="onClosed()"
      (click)="onBackdropClick($event)" (pointerdown)="backdropPress = $event.target === $event.currentTarget">
      @if (project(); as p) {
        <div class="detail-shell">
          <header class="detail-header">
            <div>
              <p class="eyebrow">{{ p.year }}@if (p.sourcePrivate) { · {{ 'projects.detail.private' | t }} }</p>
              <h2 id="project-detail-title">{{ p.name }}</h2>
              <p class="tagline">{{ p.tagline | loc }}</p>
            </div>
            <button type="button" class="close" autofocus (click)="close()" [attr.aria-label]="'projects.detail.close' | t">×</button>
          </header>
          <div class="detail-content">
            @if (p.authorship || p.status) {
              <div class="meta">
                @if (p.authorship) { <p>{{ p.authorship | loc }}</p> }
                @if (p.status) { <p class="status">{{ p.status | loc }}</p> }
              </div>
            }
            <p class="description">{{ p.description | loc }}</p>
            @if (p.gallery?.length) { <app-project-gallery [images]="p.gallery!" /> }
            @if (p.highlights?.length) {
              <section>
                <h3>{{ 'projects.detail.highlights' | t }}</h3>
                <ul class="highlights">
                  @for (highlight of p.highlights; track $index) { <li>{{ highlight | loc }}</li> }
                </ul>
              </section>
            }
            @for (section of p.details; track $index) {
              <section>
                <h3>{{ section.title | loc }}</h3>
                <p>{{ section.body | loc }}</p>
              </section>
            }
            <section>
              <h3>{{ 'projects.detail.stack' | t }}</h3>
              <ul class="tags">
                @for (technology of p.technologies; track technology) { <li>{{ technology }}</li> }
              </ul>
            </section>
            @if ((!p.sourcePrivate && p.links?.github) || p.links?.demo || p.links?.article) {
              <div class="links">
                @if (!p.sourcePrivate && p.links?.github) {
                  <a [href]="p.links!.github" target="_blank" rel="noopener">{{ 'projects.cta.code' | t }} ↗</a>
                }
                @if (p.links?.demo) {
                  <a [href]="p.links!.demo" target="_blank" rel="noopener">{{ 'projects.cta.demo' | t }} ↗</a>
                }
                @if (p.links?.article) {
                  <a [href]="p.links!.article" target="_blank" rel="noopener">{{ 'projects.cta.article' | t }} ↗</a>
                }
              </div>
            }
          </div>
        </div>
      }
    </dialog>
  `,
})
export class ProjectDetail implements OnDestroy {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly document = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);
  private opener?: HTMLElement;
  private previousOverflow: string | undefined;
  protected readonly project = signal<ProjectItem | null>(null);
  protected backdropPress = false;

  open(project: ProjectItem, opener: HTMLElement): void {
    this.opener = opener;
    this.project.set(project);
    this.cdr.detectChanges();
    const dialog = this.dialog().nativeElement;
    dialog.showModal();
    dialog.scrollTop = 0;
    this.previousOverflow ??= this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (this.backdropPress && event.target === event.currentTarget) this.close();
    this.backdropPress = false;
  }

  protected onClosed(): void {
    this.restoreScroll();
    this.project.set(null);
    this.opener?.focus({ preventScroll: true });
    this.opener = undefined;
  }

  private restoreScroll(): void {
    if (this.previousOverflow === undefined) return;
    this.document.body.style.overflow = this.previousOverflow;
    this.previousOverflow = undefined;
  }

  ngOnDestroy(): void {
    this.restoreScroll();
  }
}
