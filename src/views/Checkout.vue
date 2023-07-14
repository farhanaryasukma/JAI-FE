<template>
  <div>
    <h1>Checkout</h1>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>Price: ${{ product.price }}</p>
      <label>Quantity: </label>
      <input type="number" v-model="quantities[product.id]" min="0">
    </div>
    <button @click="submitOrder">Submit Order</button>
    <p v-if="orderSuccess" class="success-message">Order submitted successfully!</p>
    <p v-if="orderError" class="error-message">Error submitting order. Please try again later.</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      quantities: {},
      orderSuccess: false,
      orderError: false
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/product');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async submitOrder() {
      try {
        const orderItems = [];
        for (const productId in this.quantities) {
          const quantity = this.quantities[productId];
          if (quantity > 0) {
            orderItems.push({ productId, quantity });
          }
        }

        if (orderItems.length === 0) {
          return; // No items selected for order
        }

        const response = await axios.post('https://your-api-endpoint/orders', {
          userId: 1, // Replace with the actual user ID
          orderItems
        });

        if (response.status === 201) {
          this.orderSuccess = true;
          this.orderError = false;
        } else {
          this.orderSuccess = false;
          this.orderError = true;
        }
      } catch (error) {
        console.error('Error submitting order:', error);
        this.orderSuccess = false;
        this.orderError = true;
      }
    }
  }
};
</script>

<style>
.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>
