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

/*
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
 */
