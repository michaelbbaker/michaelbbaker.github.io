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
      'about-p1': 'Je suis directeur audio chez Daily Tous Les Jours depuis près de 10 ans. Je suis chargé de la composition, de la conception des logiciels et des systèmes audio en temps réel, de la conception des interactions, ainsi que de nombreuses tâches insolites et spécifiques qui surgissent dans le cadre de ces processus interdisciplinaires et collaboratifs. J\'ai conçu et mis en place de nombreux projets dans divers endroits en Amérique du Nord, en Europe, en Australie et au Moyen-Orient.',
      'about-p2': 'Les projets dont je rêve sont ceux où la musique, les logiciels, l\'interaction et l\'interface ne font qu\'un, avec un processus de conception tout aussi interdépendant. Des projets où le lien entre le geste et la musique semble à la fois surprenant et intuitif. C\'est ainsi que je me considère de plus en plus comme une sorte de fabricant d\'instruments insolites.',      
      'about-p3': 'Ces derniers temps, dans le cadre de ma pratique personnelle, je m\'intéresse à la conception axée sur l\'accessibilité et l\'évolution des capacités, avec des barrières d\'accès physiques et cognitives minimales, mais qui n\'en permettent pas moins de répondre à des niveaux d\'interaction plus profonds et plus subtils.',

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
