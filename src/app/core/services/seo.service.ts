import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoOptions {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  apply(opts: SeoOptions): void {
    this.title.setTitle(opts.title);
    this.meta.updateTag({ name: 'description', content: opts.description });
    this.meta.updateTag({ property: 'og:title', content: opts.title });
    this.meta.updateTag({ property: 'og:description', content: opts.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    if (opts.url) this.meta.updateTag({ property: 'og:url', content: opts.url });
    if (opts.image) this.meta.updateTag({ property: 'og:image', content: opts.image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: opts.title });
    this.meta.updateTag({ name: 'twitter:description', content: opts.description });
  }
}
