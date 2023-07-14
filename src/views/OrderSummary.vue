<template>
    <div>
      <h1>Order Summary</h1>
      <div v-for="order in orders" :key="order.id">
        <h2>Order ID: {{ order.id }}</h2>
        <p>Date: {{ order.createdAt }}</p>
        <ul>
          <li v-for="item in order.orderItems" :key="item.id">
            {{ item.product.name }} (Quantity: {{ item.quantity }})
          </li>
        </ul>
      </div>
      <p v-if="!orders.length">No orders found.</p>
    <router-link to="/checkout">Go to Order checkout</router-link>

    </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3000/orders/1');
        this.orders = response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
  },
};
</script>
  