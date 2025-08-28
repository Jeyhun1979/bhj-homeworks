const reveals = document.querySelectorAll('.reveal');

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  return bottom > 0 && top < window.innerHeight;
}

function checkReveal() {
  reveals.forEach(reveal => {
    if (isVisible(reveal)) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal();