document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.getElementById('editor');
  
  const savedText = localStorage.getItem('text');
  if(savedText) {
    textArea.value = savedText;
  }
  
  textArea.addEventListener('input', function() {
    localStorage.setItem('text', textArea.value);
  });
  
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Очистить';
  resetBtn.style.marginTop = '10px';
  resetBtn.style.padding = '5px 10px';
  resetBtn.style.display = 'block';
  
  resetBtn.addEventListener('click', function() {
    textArea.value = '';
    localStorage.removeItem('text');
  });
  
  textArea.parentNode.appendChild(resetBtn);
});