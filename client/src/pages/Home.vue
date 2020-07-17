<template>
  <section id="home-page">
    <div class="home-form" style="min-width: 400px">
        <Login v-if="pageName === 'Login'" @registerPage="registerPage" @loginForm="loginForm" @OnGoogleAuthSuccess="OnGoogleAuthSuccess"></Login>
        <Register v-else-if="pageName === 'Register'" @loginPage="loginPage" @registerForm="registerForm"></Register>
    </div>
  </section>
</template>

<script>
import Register from '../components/Register'
import Login from '../components/Login'
import axios from '../config/axios'
export default {
    name: 'Home',
    data(){
      return {
        pageName:'Login'
      }
    },
    methods:{
        registerPage(){
          this.pageName = 'Register'
        },
        loginPage(){
          this.pageName = 'Login'
        },
        registerForm(payload){
          axios({
            url: `/register`,
            method: 'POST',
            data:{
              name: payload.name,
              email: payload.email,
              password: payload.password
            }
          })
          .then(data=>{
            this.pageName = 'Login'
          })
        },
        loginForm(payload){
          axios({
            url: '/login',
            method: 'POST',
            data:{
              email: payload.email,
              password: payload.password
            }
          })
          .then(({data})=>{
            console.log(data)
            localStorage.setItem('token',data.token)
            let login = this.isLogin
            login = true
            this.$emit('token',login)
          })
        },
         OnGoogleAuthSuccess(idToken){
          axios({
            url:'/googleLogin',
            method:'POST',
            data:{
              id_token: idToken
            }
          })
          .then(({data})=>{
            // console.log(data.data)
            localStorage.setItem('token',data.token)
            let googleLogin = this.isLogin
            googleLogin = true
            this.$emit('OnGoogleAuthSuccess',googleLogin)
          })
        }

        
       
    },
    components:{
      Register,Login
    },
    props: ['isLogin']
}
</script>

<style>
</style>