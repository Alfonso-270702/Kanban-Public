<template>
<section>
  <div class="login-form my-5">
  <form v-on:submit.prevent="loginForm" >

      <div>
        <h1 class="title-header text-flex-start">Welcome Back</h1>
      </div>
      <div class="form-group my-3">
        <label for="email">Email:</label>
        <input type="email" class="form-control w-75" name="email" placeholder="input your email" v-model="email">
      </div>

      <div class="form-group">
        <label for="password">Passwrod:</label>
        <input type="password" class="form-control w-75" name="password" placeholder="input your password" v-model="password">
      </div>

      <button v-google-signin-button="clientId" class="google-signin-button"><i class="fab fa-google"></i> Google</button>
      <div class="d-flex justify-content-flex-start">
        <p v-on:click="registerPage ">Does not have account yet? Register here</p>
       </div>
      <div>
        <button class="btn btn-primary">Login</button>
      </div>

    </form>
  </div>
</section>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: '',
      clientId: '1042655448078-rj8n72r8ck1n8tmjd6a4auebpncbkbrp.apps.googleusercontent.com'
    }
  },
  methods:{
    registerPage(){
      this.$emit('registerPage')
    },
    loginForm(){
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$emit('loginForm',payload)
      this.email = ''
      this.password = ''
    },
    OnGoogleAuthSuccess (idToken) {
      this.$emit('OnGoogleAuthSuccess',idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>

<style>
</style>