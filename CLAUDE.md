# Grupo Gente Nueva — sitio público

Sitio informativo de un grupo de Alcohólicos Anónimos en Quito. Implementación
estática ya desplegada en producción: **https://grupogentenueva.org**

Este archivo es para sesiones de Claude Code que retomen el proyecto. Si vienes
de un handoff de Claude Design: **el sitio ya está implementado**. Actualízalo
desde el diseño más reciente en `project/` — no lo rehagas desde cero.

## Stack

HTML/CSS/JS estático. **Sin framework, sin dependencias, sin build step** — no
hay `package.json`. Se edita y se publica tal cual.

## Estructura (deliberada — no moverla)

El sitio vive en la **raíz del repo**, no en `docs/` ni `src/`. GitHub Pages
está configurado para servir desde `/ (root)`; moverlo rompe el deploy.

```
index.html  nosotros.html  autoevaluacion.html  reuniones.html
testimonios.html  preguntas.html  contacto.html
css/style.css      tokens del design system, ya inlineados desde _ds/tokens/
js/nav.js          menú móvil (drawer) — compartido por las 7 páginas
js/reuniones.js  js/contacto.js  js/autoevaluacion.js
assets/            imágenes + autodiagnostico-aa.pdf
project/  chats/   material del handoff de Claude Design (no se publica)
```

## Qué NO publicar

Los `.dc.html`, `support.js` y `_ds/_ds_bundle.js` son el runtime de preview de
Claude Design. No funcionan por sí solos en un navegador: son fuente, no
producto. Quedan en `project/` y `_config.yml` los excluye del sitio.

## Menú móvil — conservar al regenerar páginas

Debajo de **900px** (el breakpoint que ya usaba la hoja de estilos) la
navegación horizontal y el CTA del header se ocultan y aparece un botón
hamburguesa que abre un drawer lateral derecho.

Piezas, presentes en las 7 páginas:

- `js/nav.js` y las reglas `.nav-toggle` / `.nav-overlay` / `.nav-drawer` en
  `css/style.css`
- botón `.nav-toggle` dentro del `<header>`
- `<div class="nav-overlay">` + `<aside id="mobile-drawer">` justo tras `</header>`
- `<script src="js/nav.js"></script>` antes de `</body>`

El drawer se comporta como diálogo modal: atrapa el Tab, cierra con la X, con
tap en el overlay, al elegir destino y con Escape. Bloquea el scroll con
`position:fixed` en vez de `overflow:hidden` — es lo único que aguanta en Safari
móvil — y usa `100dvh` para que el panel no baile cuando se colapsa la barra de
URL. Probado en 375/390/393/430/768px y en desktop.

Si regeneras el HTML desde el diseño, **vuelve a insertar estas piezas**.

## Reglas del design system que el código respeta

- Rutas de assets **siempre relativas** (`css/style.css`, nunca `/css/style.css`)
  o se rompen en el dominio propio.
- Iconos como SVG inline (`viewBox="0 0 24 24"`, `stroke-width="1.75"`,
  `aria-hidden`). Sin iconos Unicode ni emoji.
- Anonimato: sin apellidos ni fotografías de miembros, en ningún contenido.

## Deploy

GitHub Pages, *Deploy from a branch* → `main` → `/ (root)`. No hay workflow
propio en `.github/`: usa el implícito *"pages build and deployment"*.

- `CNAME` = `grupogentenueva.org` (dominio propio, registros A ya configurados).
- `_config.yml` activa Jekyll **solo** para excluir `chats/`, `project/`,
  `README.md` y este archivo del sitio publicado.
- **No crear `.nojekyll`**: desactivaría Jekyll y volvería a publicar los
  transcripts. Está ausente a propósito.
- No tocar DNS ni dominio.

Tras un push, Pages tarda unos minutos y cachea 10 (`max-age=600`). Recarga con
⇧⌘R antes de dar por fallido un cambio.

## Publicar

Las sesiones remotas no traen GitHub vinculado: hace falta un PAT del usuario
para el push. Push normal a `main` — sin force, sin reset, sin reescribir
historial.

## Pendiente conocido

Entre 901px y ~1180px los 6 enlaces del nav de desktop se parten en 2 filas
dentro del header de 76px. Es **preexistente**, no lo introdujo el menú móvil
(verificado contra el CSS anterior). Fuera de alcance hasta ahora; arreglar solo
si se pide, con un ajuste de `gap`/tamaño en ese rango o subiendo el breakpoint.

Detalle menor: el nav dice "Quienes Somos" sin tilde. Se mantuvo el texto
existente por coherencia entre el menú de escritorio y el drawer.
