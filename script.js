window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
gsap.from(".hero h1", {x:-100, opacity:0, duration:1});
gsap.from(".hero p", {x:100, opacity:0, duration:1, delay:0.5});
gsap.from(".btn", {scale:0, opacity:0, duration:0.5, delay:1});
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger:{ trigger: section, start:"top 80%" },
    y:50,
    opacity:0,
    duration:1
  });
});
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', x + 'px');
    card.style.setProperty('--mouse-y', y + 'px');
  });
});
