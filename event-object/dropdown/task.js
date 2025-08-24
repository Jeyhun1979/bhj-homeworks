document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        valueElement.addEventListener('click', function() {
            listElement.classList.toggle('dropdown__list_active');
        });

        items.forEach(function(item) {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                valueElement.textContent = item.querySelector('.dropdown__link').textContent;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
});