# Design System: CleanUp IND

## 1. Visual Theme & Atmosphere

- Overall feeling: Clean, trustworthy, service-oriented, and approachable; the brand reads as a practical home-service business with a fresh, optimistic tone.
- Visual density: Medium. The homepage is content-rich with many service cards, trust blocks, and image galleries, but the visual language remains simple and uncluttered.
- Brand posture: Professional and reassuring, with a strong conversion focus toward WhatsApp consultation and booking.
- Signature motifs: Bright green primary actions, white surfaces, trust badges/icons, service cards, and repeated “Pesan Sekarang” / “Konsultasi Sekarang!” CTAs.

### Key Characteristics

- Light, airy layout with strong white background usage
- Green-forward branding with high emphasis on action buttons
- Trust-first messaging and service reassurance
- Practical service imagery over decorative visuals

## 2. Color Palette & Roles

| Role | Semantic Name | Value | Usage |
| --- | --- | --- | --- |
| Primary action | Brand Green | #61CE70 | Primary CTA buttons, accents, highlighted brand moments |
| Accent | Link Cyan | #61E8FF | Links and interactive emphasis |
| Surface | Pure White | #FFFFFF | Page background and card/surface base |
| Text | Core Black | #000000 | Primary headings and body text |
| Border | Neutral Gray | #69727D | Secondary UI borders, muted labels, supporting text |

### Primary

- #61CE70 as the primary brand action color
- #61CE70 reused for accent moments, indicating a strongly unified brand color system

### Interactive

- Links use a cyan tone: #61E8FF
- Primary hover/focus colors are not explicitly provided; likely derived from brand green and cyan, but this is an inference

### Neutral Scale

- #000000 for strong text emphasis
- #69727D for secondary/neutral supporting text
- #414141 appears in the secondary button background, functioning as a dark neutral in UI

### Surface & Overlay

- Surface token: #FFFFFF
- No explicit overlay or scrim token observed in the provided evidence

### Theme Modes

The brand evidence indicates a light color scheme.

#### Light Mode

- Background: #FFFFFF
- Surface: #FFFFFF
- Text: #000000
- Accent: #61CE70
- Notes: The design is bright, minimal, and conversion-focused; strong contrast is used between white surfaces and dark text.

#### Dark Mode

- Background: Not observed
- Surface: Not observed
- Text: Not observed
- Accent: Not observed
- Notes: No dark mode evidence was provided.

### Shadows & Depth

- Border/ring treatment: Minimal or absent; buttons are flat and clean
- Card shadow stack: ButtonPrimary shadow is none; overall depth appears low
- Focus treatment: Not explicitly observed; likely subtle and restrained based on the flat style

## 3. Typography Rules

### Font Family

- Primary: Nunito
- Monospace: Not observed
- OpenType Features: Not observed; the typography appears straightforward and utility-focused

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Hero headline | Nunito | 16px observed in branding data; page hero appears larger in practice | Inferred bold/semi-bold | Not observed | Not observed | Hero copy is stacked and highly prominent; exact rendered sizes are not fully reliable from the brand JSON |
| Section heading | Nunito | 15px observed in branding data | Inferred bold/semi-bold | Not observed | Not observed | Used for section leads like service categories and feature blocks |
| Body | Nunito / Roboto | 56px value exists in branding JSON but is likely mislabeled; actual body text appears normal-sized | Regular | Not observed | Not observed | Use as observationally “clean sans-serif body copy”; the JSON sizing data appears inconsistent |
| Label / Eyebrow | Nunito | Not observed | Medium/Bold | Not observed | Not observed | Used for short trust labels and service titles |
| Caption / Meta | Nunito | Not observed | Regular/Medium | Not observed | Not observed | Used for supporting notes and step labels |

### Principles

- Headings are compact, readable, and practical rather than editorial.
- Typography supports clarity and conversion over expressive branding.
- The same sans-serif family is used across most hierarchy levels, keeping the system cohesive.

## 4. Component Stylings

### Buttons and Links

- Primary CTA: Green filled button (#61CE70) with white text; rectangular with 3px radius and no shadow
- Secondary CTA: Dark filled button (#414141) with white text; fully pill-shaped with 900px radius
- Text links: Cyan link color (#61E8FF), likely used sparingly for emphasis
- Hover and active feel: Not explicitly observed; the system appears flat and direct rather than heavily animated

### Cards and Containers

- Surface style: White, clean, and minimal
- Radius: 3px for primary button treatment; cards appear subtle and likely low-radius as well
- Border: Not strongly visible in evidence; likely minimal
- Shadow or elevation: Very restrained; brand evidence indicates no button shadow
- Internal spacing: Generous enough to separate service blocks and trust sections, but not spacious to the point of feeling sparse

### Inputs and Interactive Controls

- Input treatment: Not directly observed in the provided evidence
- Focus behavior: Not observed
- Selection states: Not observed
- Practical inference: Any form controls should likely remain simple, flat, and high-contrast to align with the brand’s utilitarian tone

### Navigation

- Structure: Header with logo linking to homepage; likely simple and conversion-focused
- Background treatment: Not explicitly observed, but the overall theme suggests a white or very light header
- Link style: Simple sans-serif links with minimal decoration
- Sticky or scroll behavior: Not observed

### Image Treatment

- Screenshot treatment: Many service and client images appear as direct real-world photography/screenshots without heavy filtering
- Photography or illustration style: Operational, trust-building imagery; service photos and icons dominate over stylized illustration
- Border and radius treatment: Not explicitly observed; imagery appears mostly straightforward and functional

### Distinctive Components

- Service cards with service name, description, and “Pesan Sekarang” CTA
- Trust/benefit icon blocks featuring labels like Terpercaya, Aman & Ramah, Layanan Lengkap, Fast Respon, and Fleksible
- Step-by-step booking flow for ordering services via admin/WhatsApp

## 5. Layout Principles

### Spacing System

- Base unit: 4px
- Repeated spacing values: 4, 8, 12, 16, 20, 24, etc. are the natural implied rhythm from the base unit

### Grid & Container

- Grid logic: Section-based, stacked homepage composition with repeated modules and card groupings
- Max content width: Not explicitly observed
- Section spacing: Moderate-to-generous vertical spacing between promotional blocks, services, trust reasons, FAQ, and gallery sections

### Whitespace Philosophy

- Whitespace philosophy: Whitespace is used to preserve clarity, not to create luxury minimalism
- Alignment tendencies: Left-aligned content with centered promotional sections in some areas
- Content width behavior: Content appears full-width responsive with modular blocks rather than dense multi-column editorial grids

### Border Radius Scale

- Micro: 3px
- Standard: 3px
- Large: Not observed
- Pill: 900px

## 6. Depth & Elevation

| Level | Treatment | Use |
| --- | --- | --- |
| Flat | White background, minimal depth | Core page surfaces, section backgrounds |
| Ring | No explicit ring token observed | Potential focus states or subtle separators |
| Card | Likely flat white card with minimal border or shadow | Service cards, trust blocks, FAQ-like containers |
| Focus | Not observed; should remain subtle and accessible | Interactive controls and links |

### Depth Principles

- Surface hierarchy: Very shallow; the design relies more on spacing and contrast than shadow
- Shadow language: No-shadow CTAs are explicitly observed, suggesting a flat UI preference
- Blur, glass, or overlay behavior: Not observed
- When depth is used versus avoided: Depth is generally avoided unless needed to separate content modules

## 7. Do's and Don'ts

### Do

- Use the brand green #61CE70 for primary conversion actions
- Keep layouts bright, readable, and easy to scan
- Prioritize trust signals, service clarity, and WhatsApp-driven conversion

### Don't

- Don't introduce heavy shadows, gradients, or glossy effects
- Don't use a dark, moody, or luxury aesthetic
- Don't overload sections with decorative motion or complex UI chrome

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
| --- | --- | --- |
| Mobile | <768px | Stack sections vertically; keep CTAs large and thumb-friendly |
| Tablet | 768px–1024px | Allow 2-column service or trust layouts where appropriate |
| Desktop | >1024px | Expand galleries, service grids, and trust blocks into wider multi-column arrangements |

### Touch Targets

- Keep tap targets large enough for quick WhatsApp conversion actions
- Maintain comfortable vertical spacing between stacked service CTAs and inquiry prompts

### Collapsing Strategy

- Desktop behavior: Multi-column cards, wider image galleries, and repeated service/trust sections can remain visible together
- Tablet behavior: Reduce columns before reducing spacing; preserve readability
- Mobile behavior: Collapse to single-column stacks and keep CTA buttons prominent
- Breakpoint-driven component changes: Galleries and card grids should simplify first; text hierarchy should stay intact
- Touch target and spacing adjustments: Increase vertical padding around buttons and step items on smaller screens

## 9. Agent Prompt Guide

### Quick Color Reference

- Primary CTA: #61CE70
- Background: #FFFFFF
- Heading text: #000000
- Body text: #000000
- Border or ring: #69727D
- Accent: #61E8FF

### Quick Summary

CleanUp IND is a light, service-led conversion website for home cleaning in Jabodetabek.
The visual language is simple, trustworthy, and practical, with a strong green primary brand color.
Typography is clean sans-serif, centered on Nunito, with a straightforward hierarchy.
UI is flat, low-shadow, and easy to scan, with white surfaces and minimal visual noise.
Primary actions are WhatsApp-oriented and use a green filled CTA.
The site relies on trust icons, service cards, and process steps to explain the offering quickly.
Photography is real-world and functional, supporting credibility rather than style drama.

### Example Component Prompts

- Hero: Build a white hero section for a home cleaning service with stacked headline copy, trust-focused subtext, a green WhatsApp CTA, and a clean service banner image.
- Card: Create a flat white service card with a small image, bold service title, short description, and a green “Pesan Sekarang” button.
- Navigation: Use a minimal white header with the CleanUp IND logo on the left and simple text links or a conversion CTA on the right.
- Button or badge: Design a rounded green primary button with white text and no shadow; use dark secondary pill buttons when a less prominent action is needed.

### Ready-to-Use Prompt

Design a clean, light, conversion-focused homepage for CleanUp IND using a white background, Nunito-based sans-serif typography, brand green #61CE70 for primary CTAs, and flat low-shadow cards. Prioritize trust signals, WhatsApp booking, simple service cards, and practical real-service imagery.

### Iteration Guide

1. Keep every major action tied to the primary green CTA unless there is a clear secondary path.
2. Preserve the flat, low-elevation look; avoid heavy shadows and decorative effects.
3. Optimize for trust and clarity first, then add visual richness through authentic service photography.

## Optional Appendix: Interaction Patterns

- Scroll behavior: Sectioned scrolling with repeated conversion blocks and informational modules
- Hover behavior: Not explicitly observed; likely subtle color change or none
- Click behavior: Strong CTA-driven click path to WhatsApp
- Animation tone: Not observed; likely minimal and functional

## Optional Appendix: Content & Messaging Patterns

- Headline pattern: Benefit-led, direct, and service-specific
- CTA language: Action-oriented and immediate, especially “Pesan Sekarang” and “Konsultasi Sekarang!”
- Trust signal pattern: Claims of trustworthiness, experience, safety, speed, and flexibility
- Voice and tone: Professional, reassuring, and practical

## Optional Appendix: Observed Pages

- Homepage https://cleanupindonesia.id/: Contributed brand colors, CTA patterns, service categories, trust messaging, FAQ tone, and overall visual style