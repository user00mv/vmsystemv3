/* ==========================================================================
   VM SYSTEM — Interactions, animations, i18n
   ========================================================================== */

/* ============ I18n DICTIONARY ============ */
const translations = {
    cs: {
        // Nav
        'nav.tagline': 'Logistics & Transport',
        'nav.services': 'Služby',
        'nav.about': 'O nás',
        'nav.fleet': 'Vozový park',
        'nav.career': 'Kariéra',
        'nav.documents': 'Dokumenty',
        'nav.contact': 'Kontakt',
        'nav.cta': 'Objednat přepravu',

        // Hero
        'hero.eyebrow': 'Mezinárodní přeprava · Evropa',
        'hero.title': 'Jezdíme pro vás.<br><span class="hero-title-accent">Po celé Evropě.</span>',
        'hero.lead': 'Profesionální a spolehlivá nákladní doprava s individuálním přístupem. Náš vozový park značky Mercedes-Benz doručí vaši zásilku včas a bezpečně.',
        'hero.ctaPrimary': 'Objednat přepravu',
        'hero.ctaSecondary': 'Naše služby',
        'hero.stat1': 'let na trhu',
        'hero.stat2': 'kapacita nákladu',
        'hero.stat3': 'zemí EU',
        'hero.card1.label': 'Aktuální trasa',
        'hero.card2.label': 'Doručeno včas',
        'hero.card3.label': 'Sledování v reálném čase',

        // Services
        'services.tag': 'Naše služby',
        'services.title': 'Kdykoli, kamkoli,<br><span class="title-accent">bez problémů.</span>',
        'services.lead': 'Tři pilíře naší přepravy — od jedné palety až po plný kamion. Vždy s individuálním přístupem a maximální spolehlivostí.',
        'services.s1.badge': 'Nejžádanější',
        'services.s1.title': 'Mezinárodní',
        'services.s1.text': 'Zajišťujeme transportní služby do celé Evropy. K dispozici máme vozidla různých velikostí pro náklady jakéhokoli rozsahu.',
        'services.s1.f1': '27 zemí EU',
        'services.s1.f2': 'Pojištění CMR',
        'services.s1.f3': 'Individuální přístup',
        'services.s1.cta': 'Nezávazná poptávka',
        'services.s2.title': 'Vnitrostátní',
        'services.s2.text': 'Pokrýváme celou Českou republiku. Převezeme pro vás vše až po náklad o hmotnosti 24 tuny — rychle, spolehlivě a šetrně.',
        'services.s2.f1': '100 % pokrytí ČR',
        'services.s2.f2': 'Náklad do 24 tun',
        'services.s2.f3': 'Pojištění CMR',
        'services.s2.cta': 'Nezávazná poptávka',
        'services.s3.title': 'Expresní',
        'services.s3.text': 'Garantujeme dodávky podle přesně dohodnutého času a podmínek. Pro nejnaléhavější zásilky jsme tu 24/7.',
        'services.s3.f1': 'Doručení 24/7',
        'services.s3.f2': 'Tracking v reálném čase',
        'services.s3.f3': 'Přímé doručení',
        'services.s3.cta': 'Nezávazná poptávka',

        // Stats
        'stats.s1': 'let zkušeností',
        'stats.s2': 'vozidel ve flotile',
        'stats.s3': 'zemí EU',
        'stats.s4': 'spokojených klientů',

        // About
        'about.tag': 'O nás',
        'about.title': 'Mladá energie.<br><span class="title-accent">Léty prověřená spolehlivost.</span>',
        'about.p1': 'Jsme mladá a perspektivní firma se sídlem v Brně. Naše společnost působí na trhu již 5 let a za tu dobu si vybudovala pověst spolehlivého partnera, který vždy dodrží své závazky.',
        'about.p2': 'Rozšiřujeme naše působení a s potěšením oznamujeme zahájení mezinárodní přepravy po celé Evropě. Náš tým profesionálů je připraven nabídnout vám individuální přístup ke každé zakázce a zajistit bezpečnou a včasnou přepravu vašeho nákladu.',
        'about.badge.title': 'Spolehlivý partner',
        'about.badge.sub': 'od roku 2019',
        'about.quote': 'Kdykoli, kamkoli, bez problémů.',
        'about.f1.title': 'Plně pojištěno',
        'about.f1.text': 'CMR pojištění pro mezinárodní přepravu',
        'about.f2.title': 'EURO 6 flotila',
        'about.f2.text': 'Nejmodernější Mercedes-Benz Actros',
        'about.f3.title': 'Osobní přístup',
        'about.f3.text': 'Specialista, ne automatický bot',
        'about.f4.title': 'Sídlo v Brně',
        'about.f4.text': 'Strategická pozice v srdci Evropy',

        // Fleet
        'fleet.tag': 'Vozový park',
        'fleet.title': 'Moderní flotila <span class="title-accent">Mercedes-Benz</span>',
        'fleet.lead': 'Naše vozidla splňují nejpřísnější standardy bezpečnosti, ekologie i pohodlí.',
        'fleet.c1.tag': 'Tahač',
        'fleet.c1.text': 'Vlajková loď naší flotily. EURO 6, prostorná kabina GigaSpace.',
        'fleet.c2.tag': 'Návěs',
        'fleet.c2.text': 'Plachtové návěsy MEGA s kapacitou až 24 tun.',
        'fleet.c3.tag': 'Dodávky',
        'fleet.c3.text': 'Plachtové dodávky pro menší a expresní zásilky.',

        // Career
        'career.tag': 'Kariéra',
        'career.title': 'Hledáme parťáka<br><span class="title-accent-light">do našeho týmu.</span>',
        'career.text': 'Stabilní zaměstnání, moderní vozidla, atraktivní mzdové podmínky a možnost osobního růstu. U nás si dokážete ovlivnit svůj výdělek sami.',
        'career.position.title': 'Řidič — Evropa',
        'career.position.sub': 'Skupina B, C, C+E',
        'career.position.status': 'Otevřeno',
        'career.position.type': 'Plný úvazek',
        'career.position.salary': 'Atraktivní mzda',
        'career.cta': 'Mám zájem',

        // Documents
        'docs.tag': 'Dokumenty',
        'docs.title': 'Ke stažení <span class="title-accent">jedním klikem</span>',
        'docs.d1.title': 'Pojištění',
        'docs.d1.text': 'Doklad o pojištění odpovědnosti přepravce',
        'docs.d2.title': 'Eurolicence',
        'docs.d2.text': 'Licence pro mezinárodní silniční dopravu',

        // Contact
        'contact.tag': 'Kontakt',
        'contact.title': 'Pojďme se <span class="title-accent">domluvit</span>',
        'contact.lead': 'Ozvěte se nám pro nezávaznou kalkulaci. Odpovídáme do 24 hodin.',
        'contact.info.title': 'VM SYSTEM s.r.o.',
        'contact.info.addressLabel': 'Adresa',
        'contact.info.emailLabel': 'E-mail',
        'contact.info.idLabel': 'IČO / DIČ',
        'contact.info.hoursLabel': 'Provozní doba',
        'contact.info.hours': 'Po — Pá  ·  08:00 — 18:00',
        'contact.form.title': 'Pošlete nám zprávu',
        'contact.form.fname': 'Jméno',
        'contact.form.lname': 'Příjmení',
        'contact.form.email': 'E-mail',
        'contact.form.phone': 'Telefon',
        'contact.form.service': 'Typ přepravy',
        'contact.form.service.opt1': 'Mezinárodní přeprava',
        'contact.form.service.opt2': 'Vnitrostátní přeprava',
        'contact.form.service.opt3': 'Expresní přeprava',
        'contact.form.service.opt4': 'Jiné',
        'contact.form.message': 'Vaše zpráva',
        'contact.form.submit': 'Odeslat zprávu',
        'contact.form.success': 'Děkujeme! Brzy se vám ozveme.',

        // Footer
        'footer.tagline': 'Logistics & Transport',
        'footer.about': 'Profesionální a spolehlivý partner v mezinárodní i vnitrostátní silniční přepravě. Sídlem v Brně, působením po celé Evropě.',
        'footer.col1.title': 'Služby',
        'footer.col1.l1': 'Mezinárodní přeprava',
        'footer.col1.l2': 'Vnitrostátní přeprava',
        'footer.col1.l3': 'Expresní doručení',
        'footer.col2.title': 'Společnost',
        'footer.col2.l1': 'O nás',
        'footer.col2.l2': 'Kariéra',
        'footer.col2.l3': 'Dokumenty',
        'footer.col2.l4': 'Kontakt',
        'footer.col3.title': 'Kontakt',
        'footer.rights': 'Všechna práva vyhrazena.',
        'footer.privacy': 'Ochrana osobních údajů',
        'footer.cookies': 'Cookies',
    },

    en: {
        // Nav
        'nav.tagline': 'Logistics & Transport',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.fleet': 'Fleet',
        'nav.career': 'Careers',
        'nav.documents': 'Documents',
        'nav.contact': 'Contact',
        'nav.cta': 'Request transport',

        // Hero
        'hero.eyebrow': 'International transport · Europe',
        'hero.title': 'We drive for you.<br><span class="hero-title-accent">Across Europe.</span>',
        'hero.lead': 'Professional and reliable freight transport with a personal touch. Our Mercedes-Benz fleet delivers your cargo on time and safely.',
        'hero.ctaPrimary': 'Request transport',
        'hero.ctaSecondary': 'Our services',
        'hero.stat1': 'years on the market',
        'hero.stat2': 'cargo capacity',
        'hero.stat3': 'EU countries',
        'hero.card1.label': 'Current route',
        'hero.card2.label': 'On-time delivery',
        'hero.card3.label': 'Real-time tracking',

        // Services
        'services.tag': 'Our Services',
        'services.title': 'Anytime, anywhere,<br><span class="title-accent">without problems.</span>',
        'services.lead': 'Three pillars of our transport — from a single pallet to a full truck. Always with a personal approach and maximum reliability.',
        'services.s1.badge': 'Most requested',
        'services.s1.title': 'International',
        'services.s1.text': 'We provide transport services across all of Europe. We have vehicles of various sizes available for cargo of any scale.',
        'services.s1.f1': '27 EU countries',
        'services.s1.f2': 'CMR insurance',
        'services.s1.f3': 'Personal approach',
        'services.s1.cta': 'Get a free quote',
        'services.s2.title': 'Domestic',
        'services.s2.text': 'We cover the entire Czech Republic. We will transport everything up to a 24-ton cargo — fast, reliably, and with care.',
        'services.s2.f1': '100% Czech Rep. coverage',
        'services.s2.f2': 'Cargo up to 24 tonnes',
        'services.s2.f3': 'CMR insurance',
        'services.s2.cta': 'Get a free quote',
        'services.s3.title': 'Express',
        'services.s3.text': 'We guarantee deliveries according to precisely agreed times and conditions. We are here 24/7 for the most urgent shipments.',
        'services.s3.f1': '24/7 delivery',
        'services.s3.f2': 'Real-time tracking',
        'services.s3.f3': 'Direct delivery',
        'services.s3.cta': 'Get a free quote',

        // Stats
        'stats.s1': 'years of experience',
        'stats.s2': 'vehicles in fleet',
        'stats.s3': 'EU countries',
        'stats.s4': 'satisfied clients',

        // About
        'about.tag': 'About us',
        'about.title': 'Young energy.<br><span class="title-accent">Proven reliability.</span>',
        'about.p1': 'We are a young and forward-looking company based in Brno. Our company has been operating in the market for 5 years and during that time has built a reputation as a reliable partner that always keeps its commitments.',
        'about.p2': 'We are expanding our reach and are pleased to announce the launch of international transport across Europe. Our team of professionals is ready to offer you an individual approach to every order and ensure safe and on-time transport of your cargo.',
        'about.badge.title': 'Reliable partner',
        'about.badge.sub': 'since 2019',
        'about.quote': 'Anytime, anywhere, without problems.',
        'about.f1.title': 'Fully insured',
        'about.f1.text': 'CMR insurance for international transport',
        'about.f2.title': 'EURO 6 fleet',
        'about.f2.text': 'State-of-the-art Mercedes-Benz Actros',
        'about.f3.title': 'Personal approach',
        'about.f3.text': 'A specialist, not an automated bot',
        'about.f4.title': 'Based in Brno',
        'about.f4.text': 'Strategic position in the heart of Europe',

        // Fleet
        'fleet.tag': 'Fleet',
        'fleet.title': 'Modern <span class="title-accent">Mercedes-Benz</span> fleet',
        'fleet.lead': 'Our vehicles meet the strictest standards of safety, ecology, and comfort.',
        'fleet.c1.tag': 'Tractor unit',
        'fleet.c1.text': 'The flagship of our fleet. EURO 6, spacious GigaSpace cab.',
        'fleet.c2.tag': 'Trailer',
        'fleet.c2.text': 'MEGA curtain-side trailers with capacity up to 24 tonnes.',
        'fleet.c3.tag': 'Vans',
        'fleet.c3.text': 'Curtain-side vans for smaller and express shipments.',

        // Career
        'career.tag': 'Careers',
        'career.title': 'Looking for a partner<br><span class="title-accent-light">to join our team.</span>',
        'career.text': 'Stable employment, modern vehicles, attractive salary conditions, and opportunities for personal growth. With us, you can influence your own earnings.',
        'career.position.title': 'Driver — Europe',
        'career.position.sub': 'Categories B, C, C+E',
        'career.position.status': 'Open',
        'career.position.type': 'Full time',
        'career.position.salary': 'Attractive salary',
        'career.cta': 'I am interested',

        // Documents
        'docs.tag': 'Documents',
        'docs.title': 'Download with <span class="title-accent">one click</span>',
        'docs.d1.title': 'Insurance',
        'docs.d1.text': 'Carrier liability insurance certificate',
        'docs.d2.title': 'Eurolicence',
        'docs.d2.text': 'Licence for international road transport',

        // Contact
        'contact.tag': 'Contact',
        'contact.title': "Let's <span class=\"title-accent\">talk</span>",
        'contact.lead': 'Get in touch for a free quote. We respond within 24 hours.',
        'contact.info.title': 'VM SYSTEM s.r.o.',
        'contact.info.addressLabel': 'Address',
        'contact.info.emailLabel': 'E-mail',
        'contact.info.idLabel': 'Reg. No. / VAT',
        'contact.info.hoursLabel': 'Office hours',
        'contact.info.hours': 'Mon — Fri  ·  08:00 — 18:00',
        'contact.form.title': 'Send us a message',
        'contact.form.fname': 'First name',
        'contact.form.lname': 'Last name',
        'contact.form.email': 'E-mail',
        'contact.form.phone': 'Phone',
        'contact.form.service': 'Type of transport',
        'contact.form.service.opt1': 'International transport',
        'contact.form.service.opt2': 'Domestic transport',
        'contact.form.service.opt3': 'Express transport',
        'contact.form.service.opt4': 'Other',
        'contact.form.message': 'Your message',
        'contact.form.submit': 'Send message',
        'contact.form.success': 'Thank you! We will get back to you soon.',

        // Footer
        'footer.tagline': 'Logistics & Transport',
        'footer.about': 'Professional and reliable partner in international and domestic road transport. Based in Brno, operating across all of Europe.',
        'footer.col1.title': 'Services',
        'footer.col1.l1': 'International transport',
        'footer.col1.l2': 'Domestic transport',
        'footer.col1.l3': 'Express delivery',
        'footer.col2.title': 'Company',
        'footer.col2.l1': 'About us',
        'footer.col2.l2': 'Careers',
        'footer.col2.l3': 'Documents',
        'footer.col2.l4': 'Contact',
        'footer.col3.title': 'Contact',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.cookies': 'Cookies',
    }
};

/* ============ LANGUAGE SWITCHING ============ */
function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    // Update text nodes and innerHTML where the value contains markup
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            // Use innerHTML when source contains tags, else textContent for safety
            if (/<[a-z][\s\S]*>/i.test(dict[key])) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Switcher state
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    // Title
    document.title = lang === 'cs'
        ? 'VM System | Nákladní automobilová doprava po celé Evropě'
        : 'VM System | Road freight transport across Europe';

    localStorage.setItem('vm-lang', lang);
}

/* ============ DOMContentLoaded ============ */
document.addEventListener('DOMContentLoaded', () => {

    // ----- Page loader -----
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('pageLoader').classList.add('hidden');
        }, 400);
    });

    // ----- Language init -----
    const savedLang = localStorage.getItem('vm-lang') || 'cs';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // ----- Custom cursor -----
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    if (cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover state on interactive elements
        const hoverables = 'a, button, .service-card, .doc-card, .fleet-card, input, textarea, select, .lang-btn';
        document.querySelectorAll(hoverables).forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }

    // ----- Sticky nav -----
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
    });

    // ----- Mobile menu -----
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // ----- Reveal on scroll -----
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ----- Animated counters -----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const duration = 1800;
                const startTime = performance.now();

                function update(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) requestAnimationFrame(update);
                    else el.textContent = target;
                }
                requestAnimationFrame(update);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

    // ----- Back to top -----
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ----- Parallax effect on hero image -----
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 800) {
                heroImage.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0002})`;
            }
        }, { passive: true });
    }

    // ----- Contact form -----
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ...';
        submitBtn.disabled = true;

        setTimeout(() => {
            form.reset();
            formSuccess.classList.add('show');
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
            setTimeout(() => formSuccess.classList.remove('show'), 5000);
        }, 1000);
    });

    // ----- Smooth scroll for anchor links -----
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    // ----- Magnetic effect on primary buttons -----
    document.querySelectorAll('.btn-primary, .btn-white').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
});
