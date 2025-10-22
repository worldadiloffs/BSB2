const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const langBtn = document.getElementById('lang');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile menu when navigating
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const i18n = {
  en: {
    study: 'Study Hub', life: 'Life Feed', work: 'Workspace', relation: 'Relation Hub', chill: 'Chill Zone', admin: 'Admin',
    heroH: 'Building the Future of University Life',
    heroP: 'One smart app for studying, working, socializing, and wellbeing — with privacy-first insights for universities.',
  },
  uz: {
    study: 'O‘qish markazi', life: 'Hayot lentalari', work: 'Ishlar markazi', relation: 'Aloqalar', chill: 'Dam olish', admin: 'Admin',
    heroH: 'Universitet hayotining kelajagini quramiz',
    heroP: 'Bitta aqlli ilova: o‘qish, ish, ijtimoiy hayot va farovonlik — universitetlar uchun maxfiylikka asoslangan tushunchalar bilan.',
  },
  ru: {
    study: 'Учебный центр', life: 'Лента кампуса', work: 'Работа', relation: 'Поддержка', chill: 'Отдых', admin: 'Админ',
    heroH: 'Создаём будущее студенческой жизни',
    heroP: 'Одно умное приложение для учёбы, работы, общения и благополучия — с конфиденциальной аналитикой для университетов.',
  }
};

function setLang(code) {
  const t = i18n[code] || i18n.en;
  document.querySelectorAll('nav a')[0].textContent = t.study;
  document.querySelectorAll('nav a')[1].textContent = t.life;
  document.querySelectorAll('nav a')[2].textContent = t.work;
  document.querySelectorAll('nav a')[3].textContent = t.relation;
  document.querySelectorAll('nav a')[4].textContent = t.chill;
  document.querySelectorAll('nav a')[5].textContent = t.admin;
  document.querySelector('.hero-content h1').textContent = t.heroH;
  document.querySelector('.hero-content p').textContent = t.heroP;
  langBtn.textContent = code.toUpperCase();
  localStorage.setItem('cv-lang', code);
}

langBtn.addEventListener('click', () => {
  const order = ['en', 'uz', 'ru'];
  const cur = localStorage.getItem('cv-lang') || 'en';
  const next = order[(order.indexOf(cur) + 1) % order.length];
  setLang(next);
});

const saved = localStorage.getItem('cv-lang') || (navigator.language || 'en').slice(0,2);
setLang(['en','uz','ru'].includes(saved) ? saved : 'en');
