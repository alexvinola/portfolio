# Simple Icons locales

SVGs obtenidos de [Simple Icons 16.0.0](https://github.com/simple-icons/simple-icons/tree/16.0.0/icons).
Se ha añadido a cada SVG el atributo `fill` con el color que ya usaba el portfolio.
La licencia del proyecto original se incluye en `LICENSE.md`.

Se sirven desde el propio portfolio para evitar la dependencia de disponibilidad
de `cdn.simpleicons.org`. No se realizan descargas durante el build ni en el navegador.

Para añadir o actualizar un icono, guarda el SVG de una versión concreta del
repositorio oficial en esta carpeta, ajusta su `fill` y referencia la ruta
`/logos/simple-icons/<nombre>.svg` en `src/app/core/data/skills.data.ts`.
