const chatWidget = document.querySelector('.chat-widget');
const chatSide = document.querySelector('.chat-widget__side');
const chatArea = document.querySelector('.chat-widget__area');
const messagesContainer = document.getElementById('chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const robotMessages = [
  'Кто тут?',
  'Мы ничего не продаём!',
  'Где ваша совесть?',
  'Добрый день! До свидания!',
  'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше!',
  'Мы не будем отвечать на ваши вопросы.',
  'Сам такой!',
  'Не пишите сюда больше.',
  'Я робот, мне всё равно.'
];

let idleTimer = null;

// Открытие чата по клику на боковой бэйдж
chatSide.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
  resetIdleTimer();
});

// Отправка сообщения по Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    addMessage(input.value, true);
    input.value = '';
    addRobotMessage();
    resetIdleTimer();
  }
});

// Добавление сообщения (isClient = true — пользователь, иначе робот)
function addMessage(text, isClient = false) {
  const now = new Date();
  const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  messagesContainer.innerHTML += `
    <div class="message${isClient ? ' message_client' : ''}">
      <div class="message__time">${time}</div>
      <div class="message__text">${text}</div>
    </div>
  `;
  scrollToLastMessage();
}

// Ответ робота
function addRobotMessage() {
  const msg = robotMessages[Math.floor(Math.random() * robotMessages.length)];
  addMessage(msg, false);
}

// Автопрокрутка к последнему сообщению
function scrollToLastMessage() {
  messagesContainer.parentElement.scrollTop = messagesContainer.parentElement.scrollHeight;
}

// Таймер простоя (30 секунд)
function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  if (chatWidget.classList.contains('chat-widget_active')) {
    idleTimer = setTimeout(() => {
      addRobotMessage();
      scrollToLastMessage();
      resetIdleTimer();
    }, 30000);
  }
}

// Сброс таймера при любом действии пользователя в чате
chatArea.addEventListener('mousemove', resetIdleTimer);
chatArea.addEventListener('keydown', resetIdleTimer);
chatArea.addEventListener('click', resetIdleTimer);

// Сброс таймера при открытии чата
chatWidget.addEventListener('mouseenter', resetIdleTimer);