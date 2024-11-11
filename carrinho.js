function addToCart(productName) {
    const cartItems = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cartItems.appendChild(listItem);
}
