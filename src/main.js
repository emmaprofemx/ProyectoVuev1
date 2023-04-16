import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).mount('#app')
//TODO CODIGO DE JS VA AQUI ABAJO
let cartCounter = 0;
const cartCounterEl = document.querySelector('.cart-counter');

function updateCartCounter() {
  cartCounterEl.innerText = cartCounter;
}
function addToCart() {
  cartCounter++;
  updateCartCounter();
}
// Escuchar eventos del usuario
document.querySelector('#add-to-cart-btn').addEventListener('click', addToCart);

