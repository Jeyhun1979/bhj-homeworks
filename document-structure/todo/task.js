const form = document.getElementById('tasks__form');
const input = form.querySelector('.tasks__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const taskText = input.value.trim();
  if(!taskText) return;
  
  const newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`;
  
  tasksList.append(newTask);
  
  const removeButton = newTask.querySelector('.task__remove');
  removeButton.addEventListener('click', (e) => {
    e.preventDefault();
    newTask.remove();
  });
  form.reset();
});
