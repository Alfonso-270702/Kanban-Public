<template>
    <div>
      <Home v-if="isLogin === false" :isLogin="isLogin" @token="token" @OnGoogleAuthSuccess="OnGoogleAuthSuccess"></Home>
      <Main v-else-if="isLogin === true" :isLogin="isLogin" @logoutWeb="logoutWeb"></Main> 
    </div>
</template>

<script>
import Main from './pages/Main'
import Home from './pages/Home'
export default {
    name: 'App',
    data(){
        return {
            isLogin : false
        }
    },
    methods:{
        token(login){
            this.isLogin = login
        },
        logoutWeb(logout){
            this.isLogin = logout
            localStorage.clear()
        },
        OnGoogleAuthSuccess(googleLogin){
            this.isLogin = googleLogin
        }
    },
    components: {
        Main,Home
    },
    created(){
        if(localStorage.token){
            this.isLogin = true
        }
        else{
            this.isLogin = false
        }
    }
}
</script>

<style>
    
</style>