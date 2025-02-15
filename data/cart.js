

export let cart =
JSON.parse(localStorage.getItem('cart'));


export function addToCart(productId) {
  let matchingItem;
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  console.log(quantitySelector.value);
  

    cart.forEach((item) => {
        if(item.productId === productId) {
            matchingItem = item

        }
    })

    if(matchingItem) {
        matchingItem.quantity += Number(quantitySelector.value)
        
    }else {
        cart.push({
          productId,
            quantity: Number(quantitySelector.value)
        })

    }

    saveToStorage();

}

export function removeFromCart (productId) {
    const newcart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) {
            newcart.push(cartItem)
        }
    })

    cart = newcart;
    saveToStorage();

}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}