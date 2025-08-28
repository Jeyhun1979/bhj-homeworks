function startRotator(rotator) {
  const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
  let activeIndex = rotatorCases.findIndex(el => el.classList.contains('rotator__case_active'));
  
  function showNextRotator() {
    rotatorCases[activeIndex].classList.remove('rotator__case_active');
    rotatorCases[activeIndex].style.color = '';
    
    activeIndex = (activeIndex + 1) % rotatorCases.length;
    let current = rotatorCases[activeIndex];
    current.classList.add('rotator__case_active');
    
    if(current.dataset.color) {
      current.style.color = current.dataset.color;
    } else {
      current.style.color = '';
    }
    
    const speed = Number(current.dataset.speed) || 1000;
    setInterval(showNextRotator, speed);
  }
  
  let current = rotatorCases[activeIndex];
  
  if(current.dataset.color) {
      current.style.color = current.dataset.color;
    }
    
    const speed = Number(current.dataset.speed) || 1000;
    setInterval(showNextRotator, speed);
}

document.querySelectorAll('.rotator').forEach(startRotator);