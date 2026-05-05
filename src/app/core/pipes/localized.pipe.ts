import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';
import { Localized, resolveLocalized } from '../models/localized.model';

/**
 * Resuelve un valor `Localized` (string | { es, en }) al idioma activo.
 * Uso:  {{ exp.role | loc }}   o   {{ 'Texto plano' | loc }}
 */
@Pipe({ name: 'loc', standalone: true, pure: false })
export class LocalizedPipe implements PipeTransform {
  private i18n = inject(I18nService);
  transform(value: Localized | undefined): string {
    return resolveLocalized(value, this.i18n.lang());
  }
}
