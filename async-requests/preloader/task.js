document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const itemsContainer = document.getElementById('items');

  function loadExchangeRates() {
    const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        loader.classList.remove('loader_active');

        const currencies = data.response.Valute;

        let itemsHTML = '';
        for (const [currency, details] of Object.entries(currencies)) {
          itemsHTML += `
            <div class="item">
              <div class="item__code">${details.CharCode}</div>
              <div class="item__value">${details.Value}</div>
              <div class="item__currency">руб.</div>
            </div>
          `;
        }

        itemsContainer.innerHTML = itemsHTML;
      } else {
        loader.classList.remove('loader_active');
        itemsContainer.innerHTML = '<p>Ошибка загрузки данных.</p>';
      }
    };

    xhr.onerror = function() {
      loader.classList.remove('loader_active');
      itemsContainer.innerHTML = '<p>Ошибка загрузки данных.</p>';
    };

    xhr.send();
  }

  loadExchangeRates();
});
