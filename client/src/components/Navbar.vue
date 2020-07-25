<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-todo"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-todo">
                    <a class="navbar-brand" @click="changePage('home')"> Home </a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" ></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" ></a>
                        </li>
                    </ul>
                    <div class="my-2  my-lg-0">
                        <button class="btn btn-light my-2 my-sm-0" @click="logoutWeb">Logout</button>
                    </div>
                </div>
            </div>
        </nav>

    </section>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['pageName','isLogin'],
    methods:{
        changePage(name){
            this.$emit('changePage',name)
        },
        logoutWeb(){
            let logout = this.isLogin
            logout = false
            // console.log(logout)
            this.$emit('logoutWeb', logout)
        }
    }
}
</script>

<style>
    .navbar-brand{
        cursor: pointer;
    }
</style>