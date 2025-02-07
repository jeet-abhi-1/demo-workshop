import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []  // Array to hold the items in the cart
  }),
  actions: {
    addItem(product, qty) {
      // Check if the product already exists in the cart
      const existingItem = this.items.find(item => item.id === product.id);
    
      if (existingItem) {
        // Update the quantity (increment by the new qty)
        existingItem.quantity += qty;
      } else {
        // Add the product with the given quantity
        this.items.push({ ...product, quantity: qty });
      }

    },
    removeItem(productId) {
      // Remove a product from the cart by its ID
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    clearCart() {
      // Clear all items from the cart
      this.items = []
    }
  },
  getters: {
    cartTotal() {
      // Calculate the total price of the cart
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }
})
