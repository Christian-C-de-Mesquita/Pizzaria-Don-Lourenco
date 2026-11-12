---
name: Forno Rústico Delivery
colors:
  surface: '#181210'
  surface-dim: '#181210'
  surface-bright: '#3f3835'
  surface-container-lowest: '#130d0b'
  surface-container-low: '#201a18'
  surface-container: '#251e1c'
  surface-container-high: '#2f2826'
  surface-container-highest: '#3b3331'
  on-surface: '#ede0dc'
  on-surface-variant: '#e5bdbb'
  inverse-surface: '#ede0dc'
  inverse-on-surface: '#362f2c'
  outline: '#ac8887'
  outline-variant: '#5c403f'
  surface-tint: '#ffb3b1'
  primary: '#ffb3b1'
  on-primary: '#680011'
  primary-container: '#c8102e'
  on-primary-container: '#ffdad8'
  inverse-primary: '#bf0229'
  secondary: '#ffc72c'
  on-secondary: '#3f2e00'
  secondary-container: '#e0ac00'
  on-secondary-container: '#584200'
  tertiary: '#77da9f'
  on-tertiary: '#00391f'
  tertiary-container: '#007445'
  on-tertiary-container: '#93f7ba'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#ffdf99'
  secondary-fixed-dim: '#f6bf22'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#93f7ba'
  tertiary-fixed-dim: '#77da9f'
  on-tertiary-fixed: '#002110'
  on-tertiary-fixed-variant: '#00522f'
  background: '#181210'
  on-background: '#ede0dc'
  surface-variant: '#3b3331'
typography:
  display-hero:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  display-hero-mobile:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
  headline-lg:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
  price-tag:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system expresses the traditional warmth of artisan wood-fired pizza combined with high-velocity mobile delivery ergonomics. Designed for lovers of authentic, generous pizza and family dinner moments, the aesthetic combines culinary appetite appeal with frictionless conversion architecture.

The design movement blends **Tactile / Modern High-Contrast** with dark-mode food delivery ergonomics. Rich, charcoal-oven and dark ember foundations make food imagery and promotional badges explode off the screen. Vibrant golden-yellows signal deals and call-to-actions, deep artisan red anchors primary branding and culinary accents, while Italian basil green serves as the high-trust confirmation and direct messaging touchpoint. The interface delivers speed, irresistible food presentation, and unmistakable local heritage.

## Colors

The palette directly honors the warmth of wood-fired embers and artisanal ingredients:
- **Primary (`#C8102E`):** Molten tomato and woodsmoke red. Commands primary checkout triggers, favorite indicators, and prominent food category states. A deeper shade (`#9B111E`) provides active pressed states and layered depth.
- **Secondary (`#FFC72C`):** Golden melted cheese and promotion flare. Applied to deal chips, star ratings, dynamic discount callouts ("Apenas R$ 38,99"), and highlight tags.
- **Tertiary (`#198754`):** Fresh basil green and direct ordering/WhatsApp touchpoints. Utilized for status confirmations, live delivery tracking steps, and WhatsApp order handoffs.
- **Neutral Dark Base (`#1A1412`):** Charred slate and oven-stone dark brown. Creates high-contrast isolation for food photography without the sterile coldness of pure black `#000000`.
- **Surface Elevation Cards (`#261D1A` & `#332723`):** Warm tonal layers that structure menu items, floating navigations, and customization sheets with soft distinction.
- **Text & High-Contrast Foreground (`#FFF6F0` & `#D6C5BC`):** Warm cream hues that prevent visual fatigue while preserving legible nutritional and pricing information.

## Typography

The type scale combines **Epilogue** for display, section titles, and bold price callouts with **Plus Jakarta Sans** for functional body copy, ingredient lists, and UI controls. 

- **Display & Promotional Headers:** Epilogue delivers bold geometric weight with distinct Italian-trattoria flair, creating urgency on banners, banner deals, and combo offers.
- **Reading & Form Fields:** Plus Jakarta Sans provides round, highly legible counters that maintain clarity even on compact mobile viewports under varied ambient lighting.
- **Price Hierarchy:** Numbers receive dedicated high-weight formatting (`price-tag`) to ensure total clarity on combo promotions and cart summaries.

## Layout & Spacing

The layout is built around mobile-first fluid consumption with standard 4px and 8px baseline rhythm:
- **Mobile Grid (≤ 640px):** Single column fluid architecture with `1rem` margins and `0.75rem` gutters. Horizontal scrolling overflow containers are standard for category pills and promotional carousels.
- **Tablet Grid (641px - 1024px):** 2-column card grid for pizzas, with sticky bottom cart and elevated sidebar menu anchors.
- **Desktop/Web Order (≥ 1025px):** 3-to-4 column product cards bounded to a maximum container width of `1200px` with persistent right-side checkout canvas.
- **Sticky Elements & Safe Areas:** The floating bottom navigation bar occupies a fixed offset `1rem` above device home indicators, using safe-area insets to avoid tap collisions.

## Elevation & Depth

Visual hierarchy on dark surfaces relies on warm tonal layering complemented by subtle ember ambient glows rather than cold grey drop shadows:

- **Level 0 (Canvas):** Pure base `#1A1412` representing the raw oven hearth background.
- **Level 1 (Default Cards & Surfaces):** Surface `#261D1A` bordered by a 1px ghost stroke of `#3D2E29` to delineate food items without visual clutter.
- **Level 2 (Active Sheets & Modals):** Surface `#332723` with a soft diffused ambient shadow (`0 8px 24px rgba(0, 0, 0, 0.45)`).
- **Level 3 (Floating Bottom Nav & Cart Trigger):** Frosted dark glass container using `background: rgba(38, 29, 26, 0.88)` with `backdrop-filter: blur(12px)` and a subtle top highlight rim (`rgba(255, 255, 255, 0.08)`).
- **Promotional Accent Lift:** High-priority discount cards use a subtle radial glow tinted with primary red or secondary amber (`box-shadow: 0 4px 20px rgba(200, 16, 46, 0.25)`).

## Shapes

The design uses a balanced rounded architecture (Level 2):
- **Base Components (Inputs, Small Badges):** `0.5rem` (8px) corners for crisp, functional alignment.
- **Product & Category Cards:** `1rem` (16px) corners (`rounded-lg`) to soften photography framing and encourage tactile engagement.
- **Interactive Action Triggers:** Buttons, category filter chips, and counter badges use pill boundaries (`9999px` / `rounded-full`) to convey tap friendliness and easy thumb interaction.
- **Image Treatment:** Pizza previews adopt circular masks or full top-bleed cuts within `rounded-lg` containers to emphasize rich crust textures and overflowing toppings.

## Components

### Buttons
- **Primary Add to Cart / Finalize:** Full-width or compact pill button in `#C8102E` with white bold typography, 48px height for effortless thumb interaction, and tactile active press state (`#9B111E`).
- **Promotional CTA:** Vibrant `#FFC72C` fill with `#1A1412` contrast text for flash sale actions and combo builders.
- **WhatsApp Direct Order:** `#198754` background with crisp white icon and phone copy for instantaneous direct messaging checkout.
- **Quantity Adjuster:** Pill shaped dark container `#332723` with circular increment/decrement buttons and prominent center numerals.

### Category Chips & Sliders
- Horizontally sliding carousel with sticky left alignment.
- **Unselected:** Subtle border, `#261D1A` background, warm cream text.
- **Selected:** Solid `#C8102E` or `#FFC72C` background with instant color inversion and subtle bottom indicator bump.

### Pizza Product Cards
- **Structure:** Stacked image top-bleed with 1:1 or 4:3 cropped pizza photograph.
- **Content:** Item title in `headline-sm`, 2-line ingredient description with truncation in muted cream `#D6C5BC`.
- **Badges:** Overlaid top-left ribbon in `#FFC72C` with black lettering ("Apenas R$ 38,99" or "Especial R$ 45,00").
- **Footer:** Prominent price formatted with `price-tag` level alongside an interactive "+" or "Adicionar" button.

### Floating Bottom Navigation Bar
- Anchored floating bar elevated `1rem` from screen bottom with `backdrop-filter: blur(12px)`.
- Four dedicated destinations: **Início**, **Cardápio**, **Pedidos**, **Perfil**.
- Active icons highlighted in `#FFC72C` with an illuminated micro-dot beneath; inactive icons in soft muted tone `#8E7E77`.

### Selection Controls & Checkboxes
- **Crust & Extra Selection (Borda Recheada / Bebidas):** Circular radio pills and rounded-sm check boxes filled with `#C8102E` and checkmark icons in pure white.
- Price additions (e.g., "+ R$ 8,00") displayed flush-right in secondary yellow `#FFC72C`.