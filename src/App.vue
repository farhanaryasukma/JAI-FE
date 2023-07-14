<template>
  <div>
    <h1>Welcome to My App</h1>
    <router-link v-if="isAuthenticated" to="/main">Go to Main Page</router-link>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['token']),
    isAuthenticated() {
      return !!this.token;
    }
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>
