<template>
  <section> 
      <div class="content">
        <Navbar :pageName="pageName" @changePage="changePage" :isLogin="isLogin" @logoutWeb="logoutWeb"></Navbar> 
        <div class="display">
            <div class="button-add" @click="changePage('addForm')">
                <div >
                    <i class="far fa-plus-square fa-3x"></i>
                </div>
            </div>
            <div class="main-content">
                <div style="min-width: 300px">
                    <h1 class="title-header text-center my-3">Kanban</h1>       
                    <div class="main-container container my-5 p-3" v-if="pageName == 'home'"> 
                        <Category 
                        v-for="kanban in categories" 
                        :key="kanban.category" 
                        :categoryData="kanban" 
                        :kanbanData="tasks"
                        @deleteKanbanData="deleteKanban"
                        @editFormIcon="editPage">
                        </Category>
                    </div>
                    <AddForm v-else-if="pageName == 'addForm'" @addNewTask="addTask"></AddForm>
                    <EditForm v-else-if="pageName == 'editForm'" :editItem="editItem" @edit="editData"></EditForm>

                </div>
            </div>
        </div>

      </div>
  </section>
</template>

<script>
import Category from '../components/Category'
import AddForm from '../components/AddForm'
import EditForm from '../components/EditForm'
import axios from '../config/axios'
import Navbar from '../components/Navbar'
export default {
    name: 'Main',
    props: ['isLogin'],
    data(){
        return {
            pageName: 'home',
            categories: [
                {
                    title: 'Backlog',
                    color: 'red',
                    category: 'backlog'
                },
                {
                    title: 'Todo',
                    color: '#ffe9ff',
                    category: 'todo'
                },
                {
                    title: 'Doing',
                    color: 'red',
                    category: 'doing'
                },
                {
                    title: 'Complete',
                    color: 'red',
                    category: 'complete'
                }
            ],
            tasks: [],
            editItem: {}
        }
    }, 
    methods: {
        logoutWeb(logout){
            this.$emit('logoutWeb',logout)
        },
        changePage(name){
            this.pageName = name 
        },
        fetchData(){
            axios({
                method: 'GET',
                url: '/kanban',
                headers:{
                    token: localStorage.token
                }
            })
            .then(({data})=>{
                this.tasks = data.data
            })
        },
        addTask(payload){
            axios({
                method: 'POST',
                url: '/kanban',
                data:{
                    title: payload.title,
                    category: payload.category,
                    author: payload.author
                },
                headers:{
                    token: localStorage.token
                }
            })
            .then(({data})=>{
                this.tasks.push(data.data)
                this.changePage('home') 
            })
        },
        deleteKanban(payload){
            axios({
                method: 'DELETE',
                url: `/kanban/${payload.id}`,
                headers:{
                    token: localStorage.token
                }
            })
            .then(_=>{
                // let index = this.tasks.findIndex(element => element.id == payload.id)
                // this.tasks.splice(index,1)
                this.fetchData()
            })
        },
        editPage(payload){
            this.pageName = payload.pageName
            this.editItem = payload.data
        },
        editData(payload){
             axios({
                method: 'PUT',
                url: `/kanban/${payload.id}`,
                data: {
                    title: payload.title,
                    category: payload.category,
                    author: payload.author
                },
                headers:{
                    token: localStorage.token
                }
            })
            .then(({data})=>{
                // let index = this.tasks.findIndex(element => element.id == payload.id)
                // this.tasks.splice(index,1,data)
                this.fetchData()
                this.changePage('home')
            })
        }
    },
    created(){
        this.fetchData()
    },
    components:{
        Category,AddForm,EditForm,Navbar
    }
}
</script>

<style>
    .content{
        display: flex;
        height: 100vh;
        flex-direction: column;
    }
    .display{
        display: flex;
        flex-direction: row-reverse;
        height: 100%;
    }
    .button-add{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100px;
    }
    .main-content{
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>