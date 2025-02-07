<template>
  <div v-if="cartStore.items.length > 0" class="cart-list">
    <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
      <div class="cart-item-header">
        <img :src="item.image" alt="product image" class="cart-item-image" />
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p>₹{{ item.price * item.quantity }}</p>
        </div>
      </div>
      <button @click="removeFromCart(item.id)" class="remove-btn">Remove</button>
    </div>
    <div class="cart-total">
      <p>Total: ₹{{ cartStore.cartTotal }}</p>
      <button @click="clearCart" class="clear-btn">Clear Cart</button>
    </div>
  </div>
  
  <!-- Empty Cart Message -->
  <div v-else class="empty-cart">
    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="empty cart" class="empty-cart-image">
    <p class="empty-cart-text">Your cart is empty. Start adding items now!</p>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore.js'

const cartStore = useCartStore() 

const removeFromCart = (productId) => {
  cartStore.removeItem(productId)
}

const clearCart = () => {
  cartStore.clearCart()
}
</script>

<style scoped>
.cart-list {
  background-color: #f4f7f6;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Ensure consistent spacing between items */
}

/* Styling for each cart item */
.cart-item {
  background-color: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.cart-item:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.cart-item-header {
  display: flex;
  align-items: center;
}

.cart-item-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

.cart-item-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cart-item h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.cart-item p {
  color: #666;
  margin: 5px 0;
}

/* Remove button */
.remove-btn {
  background-color: #ff4d4d;
  color: white;
  padding: 8px 16px;
  font-size: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start; /* Align to the left */
}

.remove-btn:hover {
  background-color: #e60000;
  transform: translateY(-3px);
}

.remove-btn:active {
  transform: translateY(1px);
}

/* Cart total section */
.cart-total {
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-top: 30px;
}

.cart-total p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.clear-btn {
  background-color: #2b9c71;
  color: white;
  padding: 10px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.clear-btn:hover {
  background-color: #217a55;
  transform: translateY(-3px);
}

.clear-btn:active {
  transform: translateY(1px);
}

/* Empty cart message styling */
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  color: #555;
  font-size: 1.2rem;
  font-weight: bold;
}

.empty-cart-image {
  width: 150px;
  height: auto;
  margin-bottom: 15px;
  opacity: 0.8;
}

.empty-cart-text {
  font-size: 1.3rem;
  color: #333;
}
</style>
