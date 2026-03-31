(function () {
  // ─── Translations ─────────────────────────────────────────────────────────────
  var t = {
    en: {
      'nav-about':            'About',
      'nav-cv':               'CV',

      'section-about-heading': 'About',
      'about-p1': 'I have been the audio director at Daily Tous Les Jours for almost 10 years. Responsible for composition, real-time audio software and system design, interaction design and many strange and specific tasks that come up in such interdisciplinary, collaborative processes. I\'ve designed and installed many projects in many different places across North America, Europe, Australia and the Middle East.',
      'about-p2': 'My dream projects are the ones where music, software, interaction and interface are inseparable, with a similarly interdependent design process. Projects where the link between gesture and music feels both surprising and intuitive. As such, I\'ve come to think of myself more and more as a type of strange instrument builder.',
      'about-p3': 'Lately, in my personal practice, I have been interested in designing for accessibility and progressive ability, with low physical and cognitive barriers of entry, that nonetheless respond to deeper/subtler levels of interaction.',

      'cv-heading':           'CV',
      'cv-h-education':       'Education',
      'cv-h-employment':      'Employment',
      'cv-h-production':      'Production Work (Daily Tous Les Jours)',
      'cv-h-events':          'Events and Exhibitions (Daily Tous Les Jours)',
      'cv-h-publications':    'Publications (on behalf of Daily Tous Les Jours)',
      'cv-h-performance':     'Performance',
      'cv-h-workshops':       'Workshops',
      'cv-h-grants':          'Grants, Residencies and Scholarships',
      'cv-h-awards':          'Awards',

      'cv-selected':          '(Selected)',
      'cv-awards-subtitle':   'Daily Tous Les Jours (selected)',

      'cv-employ-1':          '2017\u2013Current \u2014 Audio Director, Daily Tous Les Jours',
      'cv-employ-2':          '2012\u20132017 \u2014 Creative Technologist, Daily Tous les Jours',

      'cv-role-creative':     'Creative Direction',
      'cv-role-audio':        'Audio Direction, Software Development',
      'cv-role-concept':      'Concept Development, Audio Composition, Interaction Design and Software Development',
      'cv-personal-selected': 'Personal (Selected)',
      'cv-personal':          'Personal',
      'cv-dtlj':              'Daily Tous Les Jours',
    },
    fr: {
      'nav-about':            '\u00C0 propos',
      'nav-cv':               'CV',

      'section-about-heading': '\u00C0 propos',
      'about-p1': 'J\'occupe le poste de directeur audio \u00e0 Daily Tous Les Jours depuis presque 10 ans. Je suis responsable de la composition, du d\u00e9veloppement logiciel audio en temps r\u00e9el et de la conception de syst\u00e8mes, de la conception d\'interactions, ainsi que de nombreuses t\u00e2ches \u00e9tranges et sp\u00e9cifiques qui surgissent dans de tels processus interdisciplinaires et collaboratifs. J\'ai con\u00e7u et install\u00e9 de nombreux projets dans de nombreux endroits \u00e0 travers l\'Am\u00e9rique du Nord, l\'Europe, l\'Australie et le Moyen-Orient.',
      'about-p2': 'Mes projets de r\u00eave sont ceux o\u00f9 la musique, le logiciel, l\'interaction et l\'interface sont indissociables, avec un processus de conception de m\u00eame nature. Des projets o\u00f9 le lien entre le geste et la musique semble \u00e0 la fois surprenant et intuitif. C\'est pourquoi j\'en suis venu \u00e0 me voir de plus en plus comme une sorte de constructeur d\'instruments \u00e9tranges.',
      'about-p3': 'Derni\u00e8rement, dans ma pratique personnelle, je m\'int\u00e9resse \u00e0 la conception pour l\'accessibilit\u00e9 et la progression des capacit\u00e9s, avec de faibles barri\u00e8res physiques et cognitives \u00e0 l\'entr\u00e9e, qui r\u00e9pondent n\u00e9anmoins \u00e0 des niveaux d\'interaction plus profonds et subtils.',

      'cv-heading':           'CV',
      'cv-h-education':       '\u00C9ducation',
      'cv-h-employment':      'Emploi',
      'cv-h-production':      'Travaux de production (Daily Tous Les Jours)',
      'cv-h-events':          '\u00C9v\u00e9nements et expositions (Daily Tous Les Jours)',
      'cv-h-publications':    'Publications (au nom de Daily Tous Les Jours)',
      'cv-h-performance':     'Performance',
      'cv-h-workshops':       'Ateliers',
      'cv-h-grants':          'Bourses, r\u00e9sidences et r\u00e9compenses',
      'cv-h-awards':          'Prix',

      'cv-selected':          '(S\u00e9lection)',
      'cv-awards-subtitle':   'Daily Tous Les Jours (s\u00e9lection)',

      'cv-employ-1':          '2017\u2013Pr\u00e9sent \u2014 Directeur audio, Daily Tous Les Jours',
      'cv-employ-2':          '2012\u20132017 \u2014 Technologue cr\u00e9atif, Daily Tous les Jours',

      'cv-role-creative':     'Direction cr\u00e9ative',
      'cv-role-audio':        'Direction audio, d\u00e9veloppement logiciel',
      'cv-role-concept':      'D\u00e9veloppement conceptuel, composition sonore, conception d\'interaction et d\u00e9veloppement logiciel',
      'cv-personal-selected': 'Personnel (s\u00e9lection)',
      'cv-personal':          'Personnel',
      'cv-dtlj':              'Daily Tous Les Jours',
    }
  };

  // ─── Apply translations ────────────────────────────────────────────────────────
  function apply(lang) {
    document.documentElement.lang = lang;
    var entries = t[lang];
    if (!entries) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key in entries) {
        el.textContent = entries[key];
      }
    });

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';

    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  // ─── Inject toggle button + styles ────────────────────────────────────────────
  function injectToggle() {
    var style = document.createElement('style');
    style.textContent = [
      '#lang-toggle {',
      '  background: none;',
      '  border: none;',
      '  cursor: pointer;',
      '  font-family: inherit;',
      '  font-size: 16px;',
      '  text-transform: uppercase;',
      '  letter-spacing: 0.15em;',
      '  color: #222;',
      '  padding: 0;',
      '  opacity: 0.4;',
      '  line-height: 1;',
      '}',
      '#lang-toggle:hover { opacity: 1; }',
    ].join('\n');
    document.head.appendChild(style);

    var btn = document.createElement('button');
    btn.id = 'lang-toggle';
    btn.setAttribute('aria-label', 'Switch language / Changer de langue');
    btn.textContent = 'FR';
    btn.addEventListener('click', function () {
      var next = document.documentElement.lang === 'fr' ? 'en' : 'fr';
      apply(next);
    });

    var nav = document.querySelector('.site-header nav') ||
              document.querySelector('header') ||
              document.body;
    nav.appendChild(btn);
  }

  // ─── Init ──────────────────────────────────────────────────────────────────────
  function init() {
    injectToggle();

    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}

    if (saved === 'en' || saved === 'fr') {
      // Apply stored preference immediately — no flicker, no network request needed
      apply(saved);
      return;
    }

    // No stored preference: apply English now so content is visible, then
    // detect region via IP and switch to French if appropriate.
    apply('en');

    fetch('https://ipapi.co/json/')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var cc     = data.country_code || '';
        var region = data.region       || '';
        if (cc === 'FR' || (cc === 'CA' && region === 'Quebec')) {
          apply('fr');
        }
      })
      .catch(function () { /* silently fall back to English */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
