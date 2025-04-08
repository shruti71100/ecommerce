document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.classList.add('cart-items');
    
    const cart = document.createElement('div');
    cart.id = 'cart';
    cart.classList.add('cart');
    cart.innerHTML = '<h2>Shopping Cart<img src="img/grocery-store.png" height="30vh" width="25vw" ></h2>';
    
    const totalPriceContainer = document.createElement('div');
    totalPriceContainer.classList.add('total-price');
    totalPriceContainer.innerHTML = `Total Price: Rs 0
        <button class="buy">Buy</button>`;
    
    cart.appendChild(cartItemsContainer);
    cart.appendChild(totalPriceContainer);
    document.body.appendChild(cart);

    let totalPrice = 0;

    function loadData() {
        const savedCartItems = localStorage.getItem("cartItems");
        const savedTotalPrice = localStorage.getItem("totalPrice");

        if (savedCartItems) {
            cartItemsContainer.innerHTML = savedCartItems;
            cartItemsContainer.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', function () {
                    const productPrice = parseInt(button.closest('.cart-item').querySelector('p:nth-of-type(2)').innerText.replace('Rs ', ''));
                    totalPrice -= productPrice;
                    totalPriceContainer.innerHTML = `Total Price: Rs ${totalPrice}`;
                    button.closest('.cart-item').remove();
                    saveData();
                });
            });
        }

        if (savedTotalPrice) {
            totalPriceContainer.innerHTML = savedTotalPrice;
            totalPrice = parseInt(savedTotalPrice.replace('Total Price: Rs ', ''));
        }
    }

    function addToCart(button) {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h2').innerText;
        const productPrice = parseInt(productItem.querySelector('.price').innerText.replace('Rs ', ''));
        const productSize = productItem.querySelector('select').value;
        const productImage = productItem.querySelector('img').src;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${productImage}" height="50" width="50">
            <p>${productName}</p>
            <p>Rs ${productPrice}</p>
            <p>Size: ${productSize}</p>
            <button class="remove-from-cart">Remove from Cart</button>
        `;

        cartItemsContainer.appendChild(cartItem);
        saveData();

        
        totalPrice += productPrice;
        totalPriceContainer.innerHTML = `Total Price: Rs ${totalPrice}
        <button class="buy">Buy</button>`;
        saveData();

        cartItem.querySelector('.remove-from-cart').addEventListener('click', function () {
            
            totalPrice -= productPrice;
            totalPriceContainer.innerHTML = `Total Price: Rs ${totalPrice}
            <button class="buy">Buy</button>`;
            cartItem.remove();
            saveData();
        });
    }

    window.addToCart = addToCart;

    function saveData() {
        localStorage.setItem("cartItems", cartItemsContainer.innerHTML);
        localStorage.setItem("totalPrice", totalPriceContainer.innerHTML);
    }

    loadData();
});
