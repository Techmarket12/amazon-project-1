
import { cart, addToCart} from "../data/cart.js";
import { products } from "../data/products.js";
products.forEach((product) => {

  
    const html = `
            <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">$${product.priceCents / 100}
          </div>

          <div class="product-quantity-container">
            <select value = 1 class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/cSheckmark.png">
            Added
          </div>

          <button data-product-name="${product.name}" data-product-id="${product.id}" data-product-quantity="" class="add-to-cart-button button-primary js-add-to-cart">
            Add to Cart
          </button>
        </div>
    
    `;
    
document.querySelector('.products-grid').innerHTML += html


})
function updateQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  })
  
  
  document.querySelector('.cart-quantity').textContent = cartQuantity
  console.log(cart);
}



document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      
      const productId = button.dataset.productId
      addToCart(productId)
      updateQuantity()
        
    })
})

