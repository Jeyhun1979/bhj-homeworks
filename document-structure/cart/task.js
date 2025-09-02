const productAdds = document.querySelectorAll('.product__add');
const productControls = document.querySelectorAll('.product__quantity-control');
const cart = document.querySelector('.cart');
const cartProducts = cart.querySelector('.cart__products');
const cartTitle = cart.querySelector('.cart__title');

productControls.forEach(control => {
    control.addEventListener('click', () => {
        const product = control.closest('.product');
        const quantityDisplay = product.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityDisplay.textContent);
    
        if (control.classList.contains('product__quantity-control_dec')) {
            if (quantity > 1) {
                quantity--;
            }
        } else if (control.classList.contains('product__quantity-control_inc')) {
            quantity++;
        }
        quantityDisplay.textContent = quantity;
    });
});

productAdds.forEach(addButton => {
    addButton.addEventListener('click', () => {
        const product = addButton.closest('.product');
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
    
        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        if (cartProduct) {
            const cartProductQuantity = cartProduct.querySelector('.cart__product-count');
            let currentQuantity = parseInt(cartProductQuantity.textContent);
            cartProductQuantity.textContent = currentQuantity + quantity;
        } else {
            cartTitle.style.display = 'block';
            cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImageSrc}">
                <div class="cart__product-count">${quantity}</div>
                <div class="cart__product-remove" style="cursor:pointer; margin-left: 10px; color: red;">&times</div>
            `;
            cartProducts.appendChild(cartProduct);

            const removeButton = cartProduct.querySelector('.cart__product-remove');
            removeButton.addEventListener('click', () => {
                cartProducts.removeChild(cartProduct);
                if (cartProducts.children.length === 0) {
                    cartTitle.style.display = 'none';
                }
            });
        }
        product.querySelector('.product__quantity-value').textContent = '1';
    });    
});        