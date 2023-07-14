<template>
  <div class="login-page">
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Perform authentication or any necessary checks here
      if (this.username === 'jai' && this.password === 'jaihebat') {
        this.$router.push('/checkout'); // Redirect to the ordering page
      } else {
        // Handle invalid login credentials here (e.g., show an error message)
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  padding: 5px;
}
</style>