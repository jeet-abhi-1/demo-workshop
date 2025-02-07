<template>
  <div class="cart-page">
    <!-- Back to Products Button positioned at the top left -->
    <div class="back-link">
      <router-link to="/" class="back-btn">Back to Products</router-link>
    </div>

    <h1 class="cart-title">Your Cart</h1>
    <CartComponent />
  </div>
</template>

<script setup>
import CartComponent from '../components/CartComponent.vue'
</script>

<style scoped>
/* Cart Page Container */
.cart-page {
  position: relative; /* Allows absolute positioning of child elements */
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

/* Back Link Container positioned in the top left corner */
.back-link {
  position: absolute;
  top: 20px;
  left: 20px;
}

/* Back Button Styling */
.back-btn {
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #2b9c71;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-btn:hover {
  background-color: #217a55;
  transform: translateY(-3px);
}

.back-btn:active {
  transform: translateY(1px);
}

/* Cart Title Styling */
.cart-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
}

/* Wrapper for the Cart Component (if needed for further styling) */
.cart-component-wrapper {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}
</style>
