import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProjectDetail } from './project-detail';
import { projects } from '../../../core/data/projects.data';
import { I18nService } from '../../../core/services/i18n.service';

// jsdom does not implement the native dialog methods. Actual focus trapping and
// Escape dismissal are also checked in the browser.
beforeEach(() => {
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
    configurable: true,
    value: vi.fn(function (this: HTMLDialogElement) { this.open = true; }),
  });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', {
    configurable: true,
    value: vi.fn(function (this: HTMLDialogElement) {
      this.open = false;
      this.dispatchEvent(new Event('close'));
    }),
  });
});
afterEach(() => {
  Reflect.deleteProperty(HTMLDialogElement.prototype, 'showModal');
  Reflect.deleteProperty(HTMLDialogElement.prototype, 'close');
  document.body.style.overflow = '';
});

describe('ProjectDetail', () => {
  it('shows private project content without links or an empty gallery, then restores focus and scroll', async () => {
    const fixture = TestBed.createComponent(ProjectDetail);
    TestBed.inject(I18nService).setLang('es');
    await fixture.whenStable();
    const opener = document.createElement('button');
    document.body.append(opener);
    document.body.style.overflow = 'auto';
    const harmonia = projects.find(project => project.name === 'Harmonia')!;
    fixture.componentInstance.open({ ...harmonia, gallery: [], links: { github: 'https://example.com/private' } }, opener);
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('h2')!.textContent).toBe('Harmonia');
    expect(root.textContent).toContain('Funcional · En evolución');
    expect(root.querySelector('a')).toBeNull();
    expect(root.querySelector('app-project-gallery')).toBeNull();
    expect(document.body.style.overflow).toBe('hidden');
    root.querySelector<HTMLButtonElement>('.close')!.click();
    await fixture.whenStable();
    expect(document.body.style.overflow).toBe('auto');
    expect(document.activeElement).toBe(opener);
    expect(root.querySelector<HTMLDialogElement>('dialog')!.open).toBe(false);
    opener.remove();
  });

  it('only dismisses when both the pointer press and click land on the backdrop', async () => {
    const fixture = TestBed.createComponent(ProjectDetail);
    await fixture.whenStable();
    fixture.componentInstance.open(projects[0], document.createElement('button'));
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    const dialog = root.querySelector('dialog')!;
    root.querySelector('.detail-shell')!.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    dialog.click();
    expect(dialog.open).toBe(true);
    dialog.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    dialog.click();
    expect(dialog.open).toBe(false);
  });
});
