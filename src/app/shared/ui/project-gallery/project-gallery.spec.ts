import { TestBed } from '@angular/core/testing';
import { ProjectGallery } from './project-gallery';
import { I18nService } from '../../../core/services/i18n.service';
import { ProjectImage } from '../../../core/models/project.model';

const images: ProjectImage[] = [
  { src: '/projects/example/one.webp', alt: { es: 'Primera captura', en: 'First screenshot' } },
  { src: '/projects/example/two.webp', alt: { es: 'Segunda captura', en: 'Second screenshot' } },
];

async function render(value: ProjectImage[]) {
  const fixture = TestBed.createComponent(ProjectGallery);
  TestBed.inject(I18nService).setLang('es');
  fixture.componentRef.setInput('images', value);
  await fixture.whenStable();
  return fixture;
}

describe('ProjectGallery', () => {
  it('omits empty galleries and navigation for single images', async () => {
    const fixture = await render([]);
    expect(fixture.nativeElement.querySelector('section')).toBeNull();
    fixture.componentRef.setInput('images', images.slice(0, 1));
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.stage img').alt).toBe('Primera captura');
    expect(fixture.nativeElement.querySelector('button')).toBeNull();
  });

  it('navigates with buttons, thumbnails and arrow keys, and resets for another gallery', async () => {
    const fixture = await render(images);
    const root: HTMLElement = fixture.nativeElement;
    root.querySelector<HTMLButtonElement>('[aria-label="Imagen anterior"]')!.click();
    await fixture.whenStable();
    expect(root.querySelector<HTMLImageElement>('.stage img')!.alt).toBe('Segunda captura');
    root.querySelector('[role="region"]')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    expect(root.querySelector<HTMLImageElement>('.stage img')!.alt).toBe('Primera captura');
    root.querySelectorAll<HTMLButtonElement>('.thumbnails button')[1].click();
    await fixture.whenStable();
    expect(root.querySelector('.thumbnails button[aria-pressed="true"]')!.getAttribute('aria-label')).toContain('Segunda captura');
    fixture.componentRef.setInput('images', [images[0]]);
    await fixture.whenStable();
    expect(root.querySelector<HTMLImageElement>('.stage img')!.alt).toBe('Primera captura');
  });

  it('handles a failed image and recovers when changing slides', async () => {
    const fixture = await render(images);
    const root: HTMLElement = fixture.nativeElement;
    root.querySelector('.stage img')!.dispatchEvent(new Event('error'));
    await fixture.whenStable();
    expect(root.querySelector('[role="status"]')!.textContent).toContain('No se ha podido cargar');
    root.querySelector<HTMLButtonElement>('[aria-label="Imagen siguiente"]')!.click();
    await fixture.whenStable();
    expect(root.querySelector('[role="status"]')).toBeNull();
    expect(root.querySelector<HTMLImageElement>('.stage img')!.alt).toBe('Segunda captura');
    TestBed.inject(I18nService).setLang('en');
    await fixture.whenStable();
    expect(root.querySelector<HTMLImageElement>('.stage img')!.alt).toBe('Second screenshot');
  });
});
