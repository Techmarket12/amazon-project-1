

export let cart =
// JSON.parse(localStorage.getItem('cart'));
    [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];

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
            quantity: Number(quantitySelector.value),
            deliveryOptionId: '1'
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