const tooltips = document.querySelectorAll('.has-tooltip');

let activeTooltip = null; // текущая активная подсказка

tooltips.forEach((anchor) => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Удаляем предыдущую активную подсказку, если есть
    if (activeTooltip && activeTooltip !== anchor) {
      document.querySelector('.tooltip_active')?.classList.remove('tooltip_active');
    }

    let tooltip = anchor.nextElementSibling;

    // Если подсказка уже есть рядом — используем её, иначе создаём
    if (!tooltip || !tooltip.classList.contains('tooltip')) {
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = anchor.title;
      anchor.after(tooltip);
    }

    // Переключаем активность (если уже открыта — закрываем)
    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
      activeTooltip = null;
      return;
    }

    tooltip.classList.add('tooltip_active');
    activeTooltip = anchor;

    // Получаем позицию якоря
    const rect = anchor.getBoundingClientRect();

    // Поскольку .tooltip имеет position: fixed,
    // используем координаты из getBoundingClientRect (viewport-relative)
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
  });
});
