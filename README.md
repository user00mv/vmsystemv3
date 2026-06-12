# VM System — Web

Moderní bilingvní (CZ / EN) jednostránkový web české přepravní společnosti **VM System s.r.o.** (Brno). Vanilla HTML + CSS + JavaScript — žádný build krok, žádné frameworky.

🚛 Mezinárodní · vnitrostátní · expresní přeprava · flotila Mercedes-Benz Actros L

## Spuštění

Žádný build. Stačí statický server:

```bash
python3 -m http.server 8000   # nebo: npx serve
```

Otevři `http://localhost:8000`.

## Struktura

```
.
├── index.html                  # HTML s data-i18n atributy pro překlady
├── styles.css                  # CSS (proměnné, glass efekty, responsivita)
├── script.js                   # Překlady CS/EN, animace, přepínač jazyka, formulář
├── images/
│   ├── logo.svg / logo-white.svg
│   ├── hero-trucks.jpg         # Hero (dva Actros L)
│   ├── about-truck.jpg         # Sekce O nás
│   ├── service-international.jpg# Služby — náklad / rampa (paletové zboží)
│   ├── service-domestic.jpg    # Služby — náklad / rampa (role papíru)
│   ├── service-express.jpg     # Služby — dodávka
│   ├── fleet-actros.jpg        # Vozový park — tahač
│   ├── fleet-trailer.jpg       # Vozový park — návěs MEGA
│   ├── fleet-van.jpg           # Vozový park — dodávka
│   └── career-trucks.jpg       # Kariéra (pozadí)
├── README.md
├── LICENSE
└── .github/workflows/deploy.yml  # Auto-deploy na GitHub Pages
```

## Bilingvní obsah

Přepínač CZ/EN v navbaru, volba se ukládá do `localStorage`. Texty se v HTML značí `data-i18n="klic"`; hodnoty jsou v `script.js` v objektech `cs` a `en`.

## Customizace

**Brand barva** — v `styles.css`:
```css
:root { --brand:#00009C; --brand-dark:#00006E; --brand-light:#4F4FE3; --brand-tint:#EEEEFF; }
```

**Texty** — `script.js`, objekty `translations.cs` / `translations.en`.

**Kontaktní údaje** — v `index.html` v sekci `#contact` (adresa, e-mail `info@luxpartner.cz`, IČO/DIČ) a v patičce.

> ⚠️ IČO a DIČ jsou zatím vyplněné placeholderem (`00000000`) — nahraď je skutečnými hodnotami v `index.html` (sekce kontakt) před nasazením.

## Deploy na GitHub Pages

1. Vytvoř repozitář na GitHubu a pushni obsah:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<jmeno>/<repo>.git
   git push -u origin main
   ```
2. **Settings → Pages → Source → GitHub Actions** — workflow se postará o nasazení automaticky.

## Licence

Zdrojový kód: © VM System s.r.o. Fotografie: vlastní vozidla a náklad společnosti. Font Awesome (Free), Manrope (OFL).
