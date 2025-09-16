document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('subscribe-modal');
  const closeBtn = document.querySelector('.modal__close');

  if (!document.cookie.includes('modal=closed')) {
    modal.classList.add('modal_active');
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=closed';
  });
});
