// Sticky Navigation

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false)
      document.querySelector('.header').classList.add('sticky');

    if (ent.isIntersecting)
      document.querySelector('.header').classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '450px',
  }
);

obs.observe(sectionHeroEl);
