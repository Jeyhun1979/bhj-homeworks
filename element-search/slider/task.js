const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('slider__item_active');
  });
  
  dots.forEach(dot => {
    dot.classList.remove('slider__dot_active');
  });
  
  slides[index].classList.add('slider__item_active');
  
  if (dots[index]) {
    dots[index].classList.add('slider__dot_active');
  }
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

left.addEventListener('click', goToPrevSlide);
right.addEventListener('click', goToNextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

showSlide(currentIndex);