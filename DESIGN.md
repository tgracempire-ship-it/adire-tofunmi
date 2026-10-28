---
name: Oriki in Motion
description: A processional digital atelier where Yoruba praise rhythm, narrow-loom cloth, and real commissions lead visitors toward a bespoke enquiry.
colors:
  chalk: "#f7f4ef"
  paper: "#fffdf9"
  ink: "#17201f"
  muted-ink: "#626964"
  cobalt: "#07358c"
  deep-cobalt: "#052664"
  coral: "#ef5a45"
  saffron: "#f2aa1c"
  cool-wash: "#eef1f7"
  warm-divider: "rgba(23, 32, 31, 0.18)"
typography:
  display:
    fontFamily: "Antonio, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 5.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  section-heading:
    fontFamily: "Antonio, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 7vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.11em"
rounded:
  square: "0"
  compact: "0.25rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "1rem 1.15rem"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.chalk}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "1rem 1.15rem"
    height: "58px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.compact}"
    padding: "0.625rem 1rem"
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "1.6rem"
---

# Design System: Oriki in Motion

## Overview

**Creative North Star: "Oriki in Motion"**

Oriki in Motion translates the rhythm of an Oríkì performance and the narrow bands of Yoruba loom weaving into a conversion-first digital atelier. The experience is ceremonial without becoming ornamental: chalk-white breathing room, saturated processional strips, authentic textile grain, and real commission photography make the craft—not a generic idea of luxury—the source of prestige.

The system moves in square-edged bands. Condensed uppercase declarations in Antonio create public, processional moments; Albert Sans keeps product detail, configuration, and commissioning guidance warm and exact. Cobalt carries authority, coral marks proof and cadence, saffron concentrates action, and palm-dark ink anchors every decision. Visitors should encounter people and cloth before marketing claims, then move clearly from inspiration to configuration and a human WhatsApp enquiry.

**Key Characteristics:**

- Processional strips and adjacent color fields modeled on narrow-loom construction.
- Authentic textile raster material and real commission photography used as evidence, not decoration.
- Condensed uppercase display hierarchy paired with calm, readable humanist body copy.
- Square silhouettes, fine structural rules, and flat surfaces with interaction-led lift.
- Conversion-first actions that move from browse to build to a qualified artisan enquiry.
- A responsive vertical score on mobile, with the primary action preceding secondary content.
- Purposeful textile drift and image scale motion with a complete reduced-motion fallback.

## Colors

The palette combines chalk and paper neutrals with palm-dark ink, saturated cobalt authority, kola-coral cadence, and saffron action energy.

### Primary

- **Atelier Cobalt:** The field for major declarations, mobile navigation, and authoritative actions; use it in substantial blocks so it reads as material, not as a small decorative accent.
- **Deep Cobalt:** The pressed and hover depth for cobalt actions and the atmospheric base for modal backdrops.

### Secondary

- **Kola Coral:** The proof-band beat, focus indicator, and occasional semantic emphasis. It should punctuate the score rather than flood every section.

### Tertiary

- **Loom Saffron:** The decisive action field, atelier summary surface, selection color, and warm conversion cue. Place the strongest next step on or near saffron.

### Neutral

- **Chalk Ground:** The primary page canvas and the default breathing space around images and tools.
- **Paper White:** The brighter working surface for controls, product tiles, and information containers.
- **Palm Ink:** The default text, primary button, grid seam, and high-contrast structural color.
- **Quiet Palm:** Secondary text for explanation and metadata; never use it for critical actions.
- **Cool Wash:** The alternate section field that changes tempo without introducing another brand color.
- **Warm Divider:** The fine rule used to articulate the weave-like grid and component boundaries.

**The Processional Color Rule.** Use cobalt, coral, and saffron as contiguous fields with a clear job—authority, cadence, or action—not as scattered luxury accents.

**The Cloth Before Chrome Rule.** When a surface needs richness, introduce authentic textile grain or commission imagery before adding gradients, metallic effects, or ornamental color.

## Typography

**Display Font:** Antonio (with Arial Narrow and sans-serif fallbacks)
**Body Font:** Albert Sans (with system-ui and sans-serif fallbacks)

**Character:** Antonio is compressed, declarative, and processional; it lets large headlines behave like woven bands. Albert Sans is open and human, keeping practical commissioning information legible and contemporary.

### Hierarchy

- **Display** (600, fluid 3.6–6rem, 0.88 line-height): Hero declarations with a short measure, uppercase treatment, and balanced wrapping.
- **Section Heading** (600, fluid 4–7rem, 0.86 line-height): Major editorial transitions, left-aligned and usually limited to roughly ten characters per line.
- **Title** (600, fluid 1.8–2.8rem, 0.95 line-height): Product names and atelier steps; uppercase where the title acts as a structural marker.
- **Body** (400, 0.95rem, 1.65 line-height): Product explanation, craft context, and practical guidance; keep long passages to about 45 characters per line in editorial headers.
- **Label** (700–800, 0.65–0.75rem, 0.10–0.18em letter-spacing): Navigation, controls, captions, proof statements, and action copy in uppercase.

**The Condensed Declaration Rule.** Antonio owns headlines, product titles, and ceremonial markers; it does not replace Albert Sans in dense instructions, specifications, or form content.

**The Uppercase With Purpose Rule.** Uppercase is for orientation and action. Sentence case remains the default for explanatory copy so premium does not become performatively loud.

## Layout

The spatial model is a processional score: adjacent strips, one-pixel seams, oversized image plates, and clear shifts between viewing, choosing, and acting. The opening desktop grid uses five unequal columns and a minimum height of 640px; its intro rail, paired commission portraits, cobalt statement, and saffron action field read as one composed textile. Content sections sit inside containers up to 1400px, while the atelier path may extend to 1600px.

Spacing follows a direct 0.5rem / 1rem / 1.5rem / 2rem rhythm, with fluid `clamp()` values for large strip padding and headings. Editorial headers align their copy to the lower edge and close with a fine divider. Product grids use 1px ink seams instead of card gutters; selected image-led tiles may span two columns on wide screens.

At 1100px and below, the hero drops the intro rail and the atelier path moves from six to three columns. At 760px and below, the composition becomes a deliberate vertical score: intro first, cobalt statement second, saffron action third, then paired photographs; proof points stack; the atelier path becomes two columns; and featured product spans normalize. Sticky summaries become static and split workbenches lose their vertical divider. At 640px and below, secondary header controls recede to protect brand and menu access.

**The Action Before Detail Rule.** In narrow viewports, preserve the vertical narrative order so the primary build action arrives before secondary photography and browsing content.

## Elevation & Depth

The system is flat by default. Depth comes from saturated adjacent fields, textile grain, photography, fine ink seams, sticky positioning, and tonal alternation—not from a stack of floating cards. A restrained cobalt-tinted shadow appears only where interaction benefits from lift: standard cobalt buttons have a compact ambient shadow, product or feature cards may rise on hover, and dialogs use a deep-cobalt translucent backdrop with blur.

### Shadow Vocabulary

- **Action Lift** (`0 10px 28px rgba(7,53,140,.18)`): Supports primary cobalt conversion buttons without turning them glossy.
- **Card Hover** (`0 18px 45px rgba(7,53,140,.12)`): Appears only with a small upward translation on interactive feature cards.
- **Modal Veil** (`rgba(5,38,100,.78)` with `8px` backdrop blur): Separates focused dialog work from the underlying processional page.

**The Flat Until Touched Rule.** Containers remain flat at rest; lift is a brief response to hover or a necessary focus layer.

## Shapes

The dominant form language is square and architectural. Hero strips, buttons, navigation panels, workbench columns, product tiles, imagery, and proof bands meet edge to edge with no rounding. Compact controls inherited inside dense tools may use a restrained 0.25rem corner, but they must still feel cut and precise rather than soft or pill-like. One-pixel borders carry most separation. Circular geometry is reserved for genuinely circular affordances or small status markers, not for general brand styling.

**The Cut-Cloth Rule.** Default to square edges; use the compact corner only when it improves the handling of dense controls, never to make the interface generically friendly.

## Components

### Buttons

Buttons are direct, high-contrast, and typographically assertive.

- **Shape:** Square-edged, full-width when placed in an action strip, with a minimum 58px hero height.
- **Primary:** Palm Ink on Loom Saffron or Chalk contexts, using a dense uppercase label and `1rem 1.15rem` padding; hover moves to Atelier Cobalt.
- **Cobalt Action:** Atelier Cobalt with Chalk text and restrained Action Lift; hover deepens to Deep Cobalt and rises 2px.
- **Secondary:** Transparent with a 1px Palm Ink or Atelier Cobalt border; hover fills with the corresponding high-contrast color.
- **Hover / Focus:** Use 160–220ms state transitions and the global 3px Kola Coral focus outline with a 3px offset. Do not remove focus visibility.
- **Text Link:** A compact cobalt uppercase label with a current-color underline and directional arrow; use for lower-commitment exploration.

### Chips

Filter chips are compact controls, not decorative badges. They use Paper or warm-neutral fills, a fine divider, 0.25rem corners, and Albert Sans labels. The selected state switches to Loom Saffron with Palm Ink text; unselected chips retain clear borders and muted text. Horizontal overflow is acceptable on narrow screens so category labels remain intact.

### Cards / Containers

Product tiles are image-first editorial panels separated by 1px Palm Ink seams. They use Paper White, square corners, generous 1.6rem copy padding, uppercase Antonio titles, and a ruled footer. Feature containers may use a fine Warm Divider border and a restrained hover rise, but repeated rounded “luxury cards” are not part of this world.

### Inputs / Fields

Fields use Paper White, Palm Ink text, Warm Divider borders, and at most a compact 0.25rem corner. Placeholder copy uses a medium neutral distinct from active text. The global Kola Coral outline provides focus visibility; selection controls may also shift their border toward Atelier Cobalt. Keep labels explicit and practical inside the loom customizer.

### Navigation

The header is a 72px sticky Chalk strip with a square cobalt monogram, condensed uppercase wordmark, and compact Albert Sans metadata. Desktop emphasizes the Begin action and inquiry count. Mobile opens a full-height Atelier Cobalt panel whose oversized Antonio links are divided by fine light rules; the Loom Saffron build action closes the sequence.

### Processional Hero

The hero is the signature component: real commission portraits, a cobalt textile statement, a saffron action field, a coral proof band, and an alternating atelier path. Its textile rasters drift subtly across the field, while portraits scale only slightly on hover. Preserve this evidence-first ordering and never replace the photographs with abstract luxury imagery.

### Loom Workbench

The customizer is a split, square-edged work surface bounded by Palm Ink rules. Controls sit on Paper White; the commission summary sits on a textured Loom Saffron field and remains sticky on larger screens. On mobile, the columns stack, the summary becomes static, and the dividing rule moves from the side to the bottom.

## Do's and Don'ts

### Do:

- **Do** build hierarchy with adjacent processional strips, fine seams, and shifts between Chalk, Cobalt, Coral, and Saffron.
- **Do** use authentic commission photography and textile raster material as the principal evidence of quality and provenance.
- **Do** keep the primary build or enquiry action visually early, especially in the mobile vertical score.
- **Do** pair short Antonio declarations with calm Albert Sans explanation and practical labels.
- **Do** preserve keyboard focus, readable contrast, semantic controls, and the reduced-motion override that collapses animation and transition duration.
- **Do** let product grids and workbenches feel assembled like cut cloth: square, aligned, and structurally ruled.

### Don't:

- **Don't** return to black-and-gold luxury styling, metallic gradients, heraldic motifs, or imitation-European royal clichés.
- **Don't** turn every module into a rounded, shadowed card or scatter pill shapes across the page.
- **Don't** substitute stock-style aspirational imagery for real people, real commissions, loom process, or fabric detail.
- **Don't** use coral and saffron as arbitrary accents; coral marks cadence and focus, while saffron concentrates action.
- **Don't** run decorative motion when `prefers-reduced-motion` is enabled or make hover transformations necessary to understand content.
- **Don't** let uppercase display typography consume dense specifications, instructions, or long-form body copy.
