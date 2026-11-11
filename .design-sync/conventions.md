## Building with Van Portfolio

A dark, single-column personal-portfolio look: navy and charcoal bands, light text, yellow accents. The components are thin React wrappers around the live site's markup; all styling comes from the site's own stylesheet (`styles.css` → `_ds_bundle.css`, compiled from `style.scss`). There are **no CSS custom properties**, no theme provider and no utility classes. Colours are fixed in the stylesheet.

### Page setup
- Put page content inside `<PageMain>` (renders `<main>`). The stylesheet sets Roboto on `main`, not `body`; anything outside it renders in a serif fallback. `SiteHeader` and `HeroBanner` sit **above** `PageMain`, as on the live site.
- `styles.css` gives `body` the page background `#1a1b1e` and light text `#f2f5fb`. Don't add white or light backgrounds: all text is light.
- Global resets you inherit: `ul` has no bullets or padding; `a` is light with no underline, turns yellow on hover, and `a.active` is yellow with a yellow underline.

### Gotchas
- At ≥768px the stylesheet gives **every `<section>`** `grid-column: 2/6; grid-row: 2/3; font-size: 20px`. Never make a `<section>` a direct child of a CSS grid you write (it gets squeezed and overlaps). Use `<div>` for your own layout wrappers.
- `ExperienceCard` alternates automatically through `:nth-child(2n)`: every 2nd card gets a slate background with the logo on the right. Render cards as consecutive siblings in one plain `<div>`.
- `SkillBar` percentage labels fade in about 1.8s after mount. That's intended.
- `ProjectSlider` shows one slide at a time with arrows only at ≥768px; below that, all slides stack.

### Palette (hard-coded; reuse these hex values in your own glue)
| Role | Value |
|---|---|
| Page background | `#1a1b1e` |
| Text | `#f2f5fb` |
| Accent (active link, name, bar fill) | `#F2CA50` / `#f2ca4e` |
| Navy band (header, skills, contact) | `#2b364f` |
| Slate panel | `#474c57` |
| Charcoal panel | `#2c2d31` |
| Bar outline | `#cdbd8e` |

Type: **Holtwood One SC** for the site title (`h1`) only; **Roboto** for body, nav and `h2`; **Sanchez** for the hero greeting. `h3` and `h4` are uppercase (`h4` is also centered). Helper classes: `.section-title` (centered heading), `.hide` (display:none). Breakpoints: 425 / 768 / 992 / 1400px. Desktop layouts (side-by-side skill panels, two-column experience cards) start at 992px.

### Where the truth lives
`_ds_bundle.css` is the complete stylesheet; read it before styling anything custom. Each component's props and examples are in `components/general/<Name>/<Name>.prompt.md`.

### Example
```jsx
const { SiteHeader, PageMain, SkillsPanel, ExtraSkills, ToolList, HighlightList, ContactBar } = window.VanPortfolioDS;

<>
  <SiteHeader links={[{ label: 'Home', href: 'index.html', active: true }, { label: 'Projects', href: 'projects.html' }]} />
  <PageMain>
    <h3 className="section-title">Skills</h3>
    <SkillsPanel skills={[{ name: 'Java', percent: 60 }, { name: 'SQL', percent: 65 }]} />
    <ExtraSkills>
      <ToolList items={['Tableau', 'Git/GitHub']} />
      <HighlightList items={[{ label: 'Collaboration', text: 'Leading teams and reporting status.' }]} />
    </ExtraSkills>
    <ContactBar email="name@example.com" linkedin="https://www.linkedin.com/in/example" />
  </PageMain>
</>
```
