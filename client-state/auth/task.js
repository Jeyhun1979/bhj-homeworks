document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signin__form');
  const signinBlock = document.getElementById('signin');
  const welcomeBlock = document.getElementById('welcome');
  const userIdSpan = document.getElementById('user_id');

  const logoutBtn = document.createElement('button');
  logoutBtn.classList.add('btn');
  logoutBtn.style.display = 'none';
  logoutBtn.textContent = 'Выйти';
  welcomeBlock.appendChild(logoutBtn);

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('user_id');
    welcomeBlock.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');
    logoutBtn.style.display = 'none';
  });

  const savedUserId = localStorage.getItem('user_id');
  if (savedUserId) {
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    userIdSpan.textContent = savedUserId;
    logoutBtn.style.display = 'block';
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';

    xhr.onload = () => {
      const response = xhr.response;

      if (response.success) {
        localStorage.setItem('user_id', response.user_id);
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = response.user_id;
        logoutBtn.style.display = 'block';
        form.reset();
      } else {
        alert('Неверный логин/пароль');
        form.reset();
      }
    };

    xhr.onerror = () => {
      alert('Ошибка соединения с сервером.');
    };

    xhr.send(formData);
  });
});
