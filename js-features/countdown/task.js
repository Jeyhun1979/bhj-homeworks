const timer = document.getElementById('timer');
let currentSeconds = parseInt(timer.textContent);

const intervalId = setInterval(() => {
    
    currentSeconds--;

    // Повышенный уровень сложности #1: форматируем время в hh:mm:ss
    const hours = Math.floor(currentSeconds / 3600);
    const minutes = Math.floor((currentSeconds % 3600) / 60);
    const seconds = currentSeconds % 60;
    
    const formattedTime = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
    
    timer.textContent = formattedTime;
   
    // По окончании отсчёта выводим сообщение
    if(currentSeconds <= 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');

    // Повышенный уровень сложности #2: запускаем загрузку файла
        const downloadLink = document.getElementById('hello');
        downloadLink.click();
    }
}, 1000);