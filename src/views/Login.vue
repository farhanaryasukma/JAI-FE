<template>
    <main>
        <h1>Login</h1>
        <form>
            <div class="form-outline mb-4">
                <input type="email" id="email" class="form-control" v-model="email" />
                <label class="form-label" for="email">Email address</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="password" class="form-control" v-model="password" />
                <label class="form-label" for="password">Password</label>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4" @click="login">login</button>
        </form>
    </main>
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
        async login() {
            try {
                // Make API request to the login endpoint
                const response = await fetch('https://your-api-endpoint/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password
                    })
                });

                // Process the response
                const data = await response.json();

                // Handle the response data based on your requirements
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
