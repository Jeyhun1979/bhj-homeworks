(() => {
  let hits = 0;
  let misses = 0;

  const getHole = index => document.getElementById(`hole${index}`);

  // Регистрируем обработчики событий для каждой лунки
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
      // Проверяем, есть ли крот в этой лунке
      if (this.className.includes('hole_has-mole')) {
        // Попадание - увеличиваем счетчик попаданий
        hits++;
        document.getElementById('dead').textContent = hits;
        
        // Проверяем условие победы
        if (hits === 10) {
          alert('Вы выиграли!');
          // Обнуляем статистику
          hits = 0;
          misses = 0;
          document.getElementById('dead').textContent = hits;
          document.getElementById('lost').textContent = misses;
        }
      } else {
        // Промах - увеличиваем счетчик промахов
        misses++;
        document.getElementById('lost').textContent = misses;
        
        // Проверяем условие поражения
        if (misses === 5) {
          alert('Вы проиграли!');
          // Обнуляем статистику
          hits = 0;
          misses = 0;
          document.getElementById('dead').textContent = hits;
          document.getElementById('lost').textContent = misses;
        }
      }
    };
  }
})();