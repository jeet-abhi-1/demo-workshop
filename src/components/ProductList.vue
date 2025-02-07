<template>
  <div>
    <!-- Banner Message -->
    <transition name="fade" @after-leave="resetBanner">
      <div v-if="showBanner" class="banner">
        <p>Product added to the cart!</p>
      </div>
    </transition>

    <!-- Product List -->
    <div class="product-list">
      <div
        v-for="product in props.products"
        :key="product.id"
        class="product-item"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="product-image"
        />
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">₹{{ product.price }}</p>

        <!-- Quantity Control -->
        <div class="quantity-control">
          <button @click="decrementQuantity(product.id)" class="quantity-btn">-</button>
          <span class="quantity-value">{{ quantities[product.id] || 1 }}</span>
          <button @click="incrementQuantity(product.id)" class="quantity-btn">+</button>
        </div>

        <button @click="addToCart(product)" class="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useCartStore } from '../stores/cartStore.js'

// Receive products from the parent (e.g., Home.vue)
const props = defineProps({
  products: Array
})

const cartStore = useCartStore()

// Control banner visibility
const showBanner = ref(false)

// Reactive object to store quantity for each product (keyed by product id)
const quantities = ref({})

// Function to increment the quantity for a product
const incrementQuantity = (id) => {
  if (!quantities.value[id]) {
    quantities.value[id] = 1;
  }
  quantities.value[id]++;
}

// Function to decrement the quantity for a product (min 1)
const decrementQuantity = (id) => {
  if (!quantities.value[id] || quantities.value[id] <= 1) {
    quantities.value[id] = 1;
  } else {
    quantities.value[id]--;
  }
}

// Function to add item to the cart using the selected quantity and show the banner
const addToCart = (product) => {
  const qty = quantities.value[product.id] || 1;
  cartStore.addItem(product, qty);
  showBanner.value = true;

  // Hide the banner after 2 seconds
  setTimeout(() => {
    showBanner.value = false;
  }, 2000);
}

// Reset banner after fade out (optional safeguard)
const resetBanner = () => {
  showBanner.value = false;
}
</script>

<style scoped>
/* Fade Transition for Banner */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Banner Styling - Thin and Attractive */
.banner {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(to right, #4caf50, #66bb6a);
  color: #fff;
  text-align: center;
  padding: 6px 12px;  /* Reduced padding for a thinner look */
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

/* Product List Grid */
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four products per row on desktop */
  gap: 20px; /* Equal space between cards */
  padding: 30px 20px;
  max-width: 1300px;
  margin: auto;
  justify-items: center;
}

/* Each Product Card */
.product-item {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 280px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  margin: 10px; /* Extra margin between cards */
}
.product-item:hover {
  transform: translateY(-4px);
}

/* Product Image */
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
}

/* Product Title */
.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  text-transform: capitalize;
}

/* Product Description */
.product-description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;
  height: 3em; /* Fixed height to control overflow */
  overflow: hidden;
}

/* Product Price */
.product-price {
  font-size: 1.2rem;
  font-weight: 600;
  color: #d32f2f; /* Soft red */
  margin-bottom: 16px;
}

/* Quantity Control Styling */
.quantity-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.quantity-btn {
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}
.quantity-btn:hover {
  background-color: #ccc;
}
.quantity-value {
  font-size: 1.1rem;
  min-width: 20px;
  text-align: center;
}

/* Add to Cart Button Styling */
.add-to-cart-btn {
  background-color: #ff9800; /* Warm orange */
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.add-to-cart-btn:hover {
  background-color: #fb8c00;
  transform: scale(1.03);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
