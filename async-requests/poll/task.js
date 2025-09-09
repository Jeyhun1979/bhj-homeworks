const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    pollTitle.textContent = data.data.title;

    pollAnswers.innerHTML = '';

    data.data.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;

      button.addEventListener('click', function() {
        alert('Спасибо, ваш голос засчитан!');
      });

      pollAnswers.appendChild(button);
    });
  } else {
    console.error('Ошибка загрузки данных:', xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error('Ошибка при отправке запроса');
};

xhr.send();