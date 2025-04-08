
function addToCart(button) {
    const product = button.parentNode;
    const productId = product.getAttribute('data-id');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        ${productName} - $${productPrice.toFixed(2)}
        <button onclick="removeFromCart(this)">Remove</button>
    `;

    
    const cartItems = document.getElementById('cart-items');
    cartItems.appendChild(cartItem);

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseFloat(totalPriceElement.innerText);
    totalPrice += productPrice;
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Function to remove items from the cart
function removeFromCart(button) {
    const itemToRemove = button.parentNode;
    const priceString = itemToRemove.textContent.split('$')[1].trim();
    const price = parseFloat(priceString);

    // Remove item from DOM
    itemToRemove.remove();

    // Update total price
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseFloat(totalPriceElement.innerText);
    totalPrice -= price;
    totalPriceElement.innerText = totalPrice.toFixed(2);
}
