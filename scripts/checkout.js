
import { cart, removeFromCart } from "../data/cart.js"
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

console.log(dayjs());

const today = dayjs();
const deviveryDate = today.add(7, 'days')
deviveryDate.format('dddd, MMMM, D')

console.log(deviveryDate.format('dddd, MMMM D'));



document.querySelector('.return-to-home-link').textContent = cart.length + " items"
cart.forEach((cartItem) => {
    const productId = cartItem.productId
    products.forEach((product) => {
        if(product.id === productId) {

            const html = `
            <div class="cart-item-container 
            js-cart-item-container-${product.id}">
              <div class="delivery-date">
                Delivery date: Wednesday, June 15
              </div>
  
              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${product.image}">
  
                <div class="cart-item-details">
                  <div class="product-name">
                    ${product.name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(product.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary" data-product-id="${productId}">
                      Delete    
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
  
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input"
                      name="delivery-option-${product.id}">
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" checked class="delivery-option-input"
                      name="delivery-option-${product.id}">
                    <div>
                      <div class="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input"
                      name="delivery-option-${product.id}">
                    <div>
                      <div class="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      
      `

      document.querySelector('.order-summary').innerHTML += html
      
        }

    })
   


})

 function orderSummary () {
   const infoItem1 = document.querySelector('.payment-summary-money')
   let totalPrice = 0;

   cart.forEach((cartItem) => {
    const productId = cartItem.productId
      products.forEach((product) => {
        if(product.id === productId ) {
          let productPrice = product.priceCents / 100

          totalPrice += productPrice

          infoItem1.textContent = "$"+ totalPrice
          
          
        }
      }
    
    )
   })

   if(cart.length === 0) {
    infoItem1.textContent = 0
   }
   

 }

 orderSummary ()


document.querySelectorAll('.delete-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId
      removeFromCart(productId)
      document.querySelector('.return-to-home-link').textContent = cart.length + " items"
      document.querySelector(
`.js-cart-item-container-${productId}`
        ).remove()
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart)); //
        
        orderSummary ()
    })

})


// button.addEventListener('click', () => {
//     cart.forEach((product) => {
//         if(product.productId === button.dataset.productId) {
//             cart = cart.filter(prod => prod !== product )
            
            
//         }
        
//     })