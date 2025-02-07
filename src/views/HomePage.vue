<template>
    <div class="home-container">
      <!-- Header Section -->
      <header class="header">
        <div class="logo-container">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Shop Logo" class="logo" />
          <h1 class="brand-name">ShopEase</h1>
        </div>
        <router-link to="/cart" class="cart-button">🛒 Cart</router-link>
      </header>
  
      <h1 class="page-title">Explore Our Best Products</h1>
      <ProductList :products="products" />
      <router-link to="/cart" class="cart-link">Go to Cart</router-link>
    </div>
  </template>
  
  <script setup>
  import ProductList from '../components/ProductList.vue'
  
  const products = [
  { id: 1, name: 'Wireless Headphones', description: 'High-quality sound, noise-canceling technology', price: 8199, image: 'https://picsum.photos/320/180?random=1' },
  { id: 2, name: 'Smartphone', description: 'Latest model with an ultra-high-definition camera', price: 57999, image: 'https://picsum.photos/320/180?random=2' },
  { id: 3, name: 'Laptop', description: 'Powerful laptop with the latest chipset', price: 107999, image: 'https://picsum.photos/320/180?random=3' },
  { id: 4, name: 'Smartwatch', description: 'Track your fitness and health metrics with ease', price: 16499, image: 'https://picsum.photos/320/180?random=4' },
  { id: 5, name: 'Tablet', description: 'Sleek tablet for work and play', price: 41499, image: 'https://picsum.photos/320/180?random=5' },
  { id: 6, name: 'Bluetooth Speaker', description: 'Portable speaker with powerful bass', price: 7399, image: 'https://picsum.photos/320/180?random=6' },
  { id: 7, name: 'Camera', description: 'Capture stunning photos with the latest camera technology', price: 66299, image: 'https://picsum.photos/320/180?random=7' },
  { id: 8, name: 'Gaming Console', description: 'Next-gen gaming experience with high-resolution graphics', price: 41499, image: 'https://picsum.photos/320/180?random=8' },
  { id: 9, name: 'Electric Scooter', description: 'Eco-friendly and fast personal transport', price: 74799, image: 'https://picsum.photos/320/180?random=9' },
  { id: 10, name: '4K TV', description: 'Ultra high definition TV for an immersive experience', price: 124999, image: 'https://picsum.photos/320/180?random=10' },
  { id: 11, name: 'Smart Glasses', description: 'Wearable glasses with augmented reality features', price: 24999, image: 'https://picsum.photos/320/180?random=11' },
  { id: 12, name: 'Drone', description: 'Capture aerial shots with this high-tech drone', price: 32999, image: 'https://picsum.photos/320/180?random=12' }
];
  </script>
  
  <style scoped>
  /* Home Container */
  .home-container {
    background-color: #f4f7fa;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    max-width: 1300px;
    margin: 40px auto;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
  
  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa; /* Subtle soft gray-blue */
    padding: 0px 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  /* Logo and Brand */
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  
  .brand-name {
    font-size: 1.6rem;
    font-weight: 700;
    color: #3a506b; /* Dark Blue-gray */
  }
  
  /* Cart Button */
  .cart-button {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: white;
    background-color: #3a506b; /* Soft Blue */
    text-decoration: none;
    font-weight: 500;
    padding: 10px 18px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }
  
  .cart-button:hover {
    background-color: #2c3e50; /* Slightly darker blue */
    transform: scale(1.05);
  }
  
  /* Page Title */
  .page-title {
    font-size: 2.3rem;
    font-weight: 700;
    color: #2b2d42;
    margin-bottom: 25px;
  }
  
  /* Cart Link */
  .cart-link {
    display: inline-block;
    font-size: 1.2rem;
    color: white;
    background-color: #3a506b;
    text-decoration: none;
    font-weight: 500;
    padding: 14px 24px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    margin-top: 20px;
  }
  
  .cart-link:hover {
    background-color: #2c3e50;
    transform: scale(1.05);
  }
  </style>
  