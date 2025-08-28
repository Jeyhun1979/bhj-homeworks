const book = document.querySelector('.book');
const fontSizes = document.querySelectorAll('.font-size');
const textColors = document.querySelectorAll('.color[data-text-color]');
const bgColors = document.querySelectorAll('.color[data-bg-color]');

fontSizes.forEach((fontSize) => {
  fontSize.addEventListener('click', (event) => {
    event.preventDefault();
    fontSizes.forEach((fontSize) => {
      fontSize.classList.remove('font-size_active');
    });

    fontSize.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');
    
    if(fontSize.classList.contains('font-size_small')) {
       book.classList.add('book_fs-small');
    } else if(fontSize.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big');
    }
  }); 
});

textColors.forEach(color => {
  color.addEventListener('click', (event) => {
    event.preventDefault();
    textColors.forEach(c => c.classList.remove('color_active'));
    color.classList.add('color_active');
    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    const colorValue = color.dataset.textColor;
    book.classList.add(`book_color-${colorValue}`);
  });
});

bgColors.forEach(color => {
  color.addEventListener('click', (event) => {
    event.preventDefault();
    bgColors.forEach(c => c.classList.remove('color_active'));
    color.classList.add('color_active');
    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    const colorValue = color.dataset.bgColor;
    book.classList.add(`book_bg-${colorValue}`);
  });
});