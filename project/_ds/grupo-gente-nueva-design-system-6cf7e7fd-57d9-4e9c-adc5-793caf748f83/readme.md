# Alcohólicos Anónimos · Grupo Gente Nueva — Design System

A design system for the public website of **Grupo Gente Nueva**, a local group of Alcohólicos Anónimos (Alcoholics Anonymous). The system serves an informational, bilingual (Spanish / English) site whose whole job is to tell someone where and when they can walk into a meeting, and to do it without ever compromising a member's anonymity.

## Sources given

| Source | What it contained |
|---|---|
| `uploads/Captura de pantalla 2026-08-12 a la(s) 2.56.42 p. m..png` (also uploaded as `uploads/logo_asset-…png`) | A single site-header image: the A.A. circle-and-triangle mark twice, flanking two lines of bold caps — "ALCOHOLICOS ANÓNIMOS / GRUPO GENTE NUEVA". Cropped into `assets/logo-mark.png` and `assets/logo-lockup.png`. |
| Pasted brand notes | A **Coinbase** brand analysis. Confirmed with the user: used only as a *structural* reference (white canvas, three-band page rhythm, pill actions, card-on-card depth, 96px section spacing). None of its colors, typefaces or naming are used here. |

No codebase, Figma file, live site URL or slide deck was provided. Everything below the structural level was derived from the group's own header artwork and from A.A.'s own conventions (anonymity, open vs closed meetings, service structure). **All schedule data, addresses, phone numbers and dates in this system are placeholders.**

## Index

| Path | What it is |
|---|---|
| `styles.css` | The one stylesheet consumers link. `@import` list only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `base.css`. |
| `assets/` | `logo-mark.png` (circle-and-triangle), `logo-lockup.png` (mark + group name). |
| `components/core/` | Button, IconButton, Card, Badge, Tag, Logo, Icon |
| `components/forms/` | Input, Select, Checkbox, Radio, Switch |
| `components/navigation/` | TopNav, Tabs, Footer |
| `components/feedback/` | Callout, Dialog, Tooltip, Toast |
| `ui_kits/website/` | Four-screen bilingual site recreation — see its own README. |
| `guidelines/*.card.html` | Foundation specimen cards shown in the Design System tab. |
| `SKILL.md` | Agent-skill entry point. |

**Intentional additions** (no source defined a component inventory, so a standard set was authored):
- `Logo` — wraps the supplied header artwork so no page hand-codes a path or, worse, redraws the mark.
- `Icon` — thin wrapper over Lucide, since the source contained no icon set.

## Content fundamentals

Tone: **formal and institutional**, in the register A.A. literature uses in Spanish — plain, unhurried, never promotional. The site is a public notice board, not a campaign.

- **Person.** Spanish uses *tú* for the reader in direct instructions ("Llega unos minutos antes"), and *nosotros* for the group ("No publicamos nombres completos"). Never *usted* mixed with *tú* on the same page. English mirrors this with plain second person.
- **No selling.** No "join us today", no urgency, no exclamation marks. Sentences state facts: what time, what room, whether the meeting is open or closed, what it costs (nothing).
- **Anonymity is a copy rule, not just a photo rule.** First names only; "un miembro del grupo" rather than a named person; no signed testimonials; no surnames anywhere, including in sample data.
- **Disclaim, once, plainly.** Where an outsider might assume more than the group offers: "La línea la atiende un miembro del grupo, no un profesional." / "El grupo no ofrece tratamiento médico."
- **Casing.** Sentence case for headings and body. The mark's artwork is caps; new type is not set in caps except the 12px overline role. Spanish accents are always written, including on caps (ANÓNIMOS).
- **Numbers read as data.** Times as `19:00` (24-hour), durations as `90 min`, dates written out ("5 de septiembre") — all in the mono type role.
- **Bilingual parity.** Every string exists in both languages; English is a translation, not a shorter summary. Group and meeting proper names ("Gente Nueva", "Doce Pasos") stay in Spanish in both.
- **No emoji.** Ever. It breaks the register completely.

Examples in use: *"No hace falta cita, inscripción ni pago."* · *"Reservada a quienes tienen un problema con la bebida y desean dejar de beber."* · *"Lo que se dice en la reunión queda en la reunión."*

## Visual foundations

**Color.** One brand voltage: the navy sampled straight from the mark, `--navy-700 #232268`, plus a darker `--navy-900 #0f1233` that serves as both ink and the dark band floor. Everything else is white canvas, two gray bands, and hairlines. Status green `#1f7a4d` and red `#a32020` mark open vs closed meetings **as outlined pills or text only — never as a fill**. A single restrained gold `#a97f2b` on a `#f7f0e0` tint carries schedule-change notices; it is the only warm color in the system and appears at most once per page. Do not introduce a second brand color.

**Type.** Display is **Source Serif 4 at weight 400** — a quiet serif, dignified rather than corporate, and closer to A.A.'s own printed literature than a grotesque would be. Text, UI and labels are **Public Sans** (400/500/600/700). Numbers, times and dates are **JetBrains Mono 500** with tabular figures. Display copy is never bolded and never set in caps; negative tracking (−0.02em) belongs to display only. Scale: 76 / 58 / 44 / 34 / 27px display, 22 / 18 / 16 titles, 18 / 16 / 14 / 13 text, 12px uppercase overline. Measure caps around 68 characters — Spanish runs ~20% longer than English, so every block is sized for the Spanish string.

**Spacing and layout.** 4px base unit; 96px between major bands (64px on list-heavy pages); 24px between cards; 32px inside them. Container caps at 1180px, centered, with 32px gutters. The header is the only fixed-position candidate; everything else scrolls.

**Backgrounds.** No photography of people (anonymity), no illustration, no gradients, no textures, no patterns. Page rhythm is a three-band rotation: white canvas → soft gray `#f6f7fa` → full-bleed navy `#0f1233`. Dark bands carry the hero and the closing call to action, and hold `--navy-800` cards inside them; that card-on-card layering is where depth comes from. Any future photograph should be of an empty room, cool and low-contrast, never a face.

**Borders, shadows and depth.** Hairlines first: 1px `#dcdee6` on white, `#eceef3` for softer internal dividers. Exactly one shadow tier, `0 4px 14px rgba(15,18,51,.07)`, used only for a hovered or floating card; a heavier `0 10px 30px rgba(15,18,51,.12)` exists solely for the modal. No inner shadows, no glow, no stacked elevation tiers. Modals sit on a navy scrim `rgba(15,18,51,.45)`; no blur, no glass, no translucency anywhere else — the system is opaque by design, since legibility on a help page outranks effect.

**Corners.** Pill (100px) for every action and filter chip; 24px for cards and dialogs; 16px for callouts; 12px for inputs; 8px for calendar cells; full circle for the mark and radio controls. The 4px checkbox is the only near-square shape.

**Cards** are white with a hairline and 24px radius, flat by default. Inside a gray band a card may drop the border; inside a dark band it becomes `--navy-800` with a 10%-white hairline.

**States.** Hover darkens the fill toward `--navy-900` and thickens link underlines to 2px — no opacity fades, no lightening. Press uses the same darker navy with no scale change. Focus is a 2px `--navy-600` outline at 2px offset. Disabled primary buttons take a desaturated `#b6b8d3`; disabled text goes `#a3a7b5`.

**Motion.** Restrained to color and opacity: 120ms hover, 200ms toggles and tab underline, 320ms dialog fade, all on `cubic-bezier(.2,0,.2,1)`. No bounce, no spring, no parallax, no scroll-triggered reveals — a page someone opens in distress should not move.

## Iconography

The source artwork contained no icon set, so **Lucide** (CDN, `unpkg.com/lucide@0.454.0`) is used as a flagged substitution — geometric, single-stroke, no fills, which matches the mark's line construction. Stroke width **1.75**, sizes 16 / 18 / 20 / 22px, always `currentColor`, always decorative (`aria-hidden`) with the meaning carried by adjacent text. In practice the whole site needs about eight glyphs: `map-pin`, `clock`, `phone`, `message-circle`, `video`, `search`, `chevron-right`, `accessibility`.

No icon font, no PNG icons, no sprite sheet. **No emoji, and no Unicode characters used as icons** (the `‹ ›` in the calendar pager are typographic, not iconographic). The circle-and-triangle mark is never used as an icon, never recolored, never redrawn — it is placed only as the supplied bitmap via the `Logo` component.

## Known gaps

- **Fonts are substitutions.** The header image used a generic bold grotesque (Arial/Helvetica). Source Serif 4 + Public Sans are a deliberate direction, not a match to anything supplied. If the group has a real typeface, send it.
- **Logo is a low-resolution crop** from a screenshot (270px square). An SVG or high-resolution PNG would replace it directly at `assets/logo-mark.png`.
- **All data is placeholder** — schedule, address, phone, event dates.
- No mobile screens, no print or flier templates, no slide template (none were requested).
- Responsive behavior is specified in tokens but the UI kit is built at desktop width only.
