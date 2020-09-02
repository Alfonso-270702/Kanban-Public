<template>
  <section>
    <div class="register-form my-5">
      <form v-on:submit.prevent="registerForm">
        <div>
          <h1 title-header text-center>Register</h1>
        </div>
        <div class="form-group my-3">
          <label for="name">Full Name</label>
          <input
            type="text"
            class="form-control w-75"
            name="name"
            placeholder="input your full name"
            v-model="name"
          />
        </div>

        <div class="form-group">
          <label for="emai">Email</label>
          <input
            type="email"
            class="form-control w-75"
            name="email"
            placeholder="input your email"
            v-model="email"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control w-75"
            name="password"
            placeholder="input your password"
            v-model="password"
          />
        </div>

        <div class="d-flex justify-content-flex-start">
          <p v-on:click="loginPage">
            Already have account?
            <span class="button-user">Login here</span>
          </p>
        </div>
        <div>
          <button class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    loginPage() {
      this.$emit("loginPage");
    },
    registerForm() {
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$emit("registerForm", payload);
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>