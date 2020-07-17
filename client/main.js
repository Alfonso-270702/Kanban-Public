var app = new Vue({
    el: '#app',
    data: {
      pageName: 'login',
      user: {
          name: '',
          email: '',
          password: '',
      },
      url: 'http://localhost:3000',
      categories: [
        {
            title: 'Backlog',
            colorClass: 'backlog'
        },
        {
            title: 'Todo',
            colorClass: 'todo'
        },
        {
            title: 'Doing',
            colorClass: 'done'
        },
        {
            title: 'Complete',
            colorClass: 'complete'
        }
    ],
    tasks: [],
    property:{
        title:'',
        category: '',
        author: ''
    }
    },
    methods: {
        login(){
            axios({
                url: `${this.url}/login`,
                method: 'POST',
                data:{
                    email: this.user.email,
                    password: this.user.password
                }
            })
            .then(data=>{
                localStorage.setItem('token',data.data.token)
                this.user.email = ''
                this.user.password = ''
                this.homePage()
            })
            .catch(err=>{
                console.log(err)
            })
        },
        register(){
            axios({
                url: `${this.url}/register`,
                method: 'POST',
                data:{
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password
                }
            })
            .then(data=>{
                this.user.name = ''
                this.user.email = ''
                this.user.password = ''
                this.pageName = 'login'
            })
            .catch(err=>{
                console.log(err)
            })
        },
        logout(){
            localStorage.clear()
            this.pageName = 'login'
        },
        homePage(){
            this.pageName = 'home'
            // console.log(this.tasks)
        },
        filter(category){
            let val = this.tasks.filter((temp)=>{ 
                return temp.category === category
               
            })
            return val
        },
        list(){
            axios({
                url: `${this.url}/kanban`,
                method: 'GET',
                headers:{
                    token: localStorage.token
                }
            })
            .then(({data})=>{
                this.tasks = data.data
                // this.tasks.push(data.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        add(){
            axios({
                url: `${this.url}/kanban`,
                method: 'POST',
                data:{
                    title: this.property.title,
                    category: this.property.category,
                    author: this.property.author
                },
                headers:{
                    token: localStorage.token
                }
            }) 
            .then(data=>{
                // console.log(data.data)
                // this.tasks.push(data.data)
                // console.log(this.tasks)
                this.property.title = ''
                this.property.categories = ''
                this.property.author = ''
            })
            .catch(err=>{
                console.log(err)
            })
            // console.log(this.property)  
        }
    },
    created(){
        if(localStorage.token){
            this.pageName = 'home'
            this.list()
        } 
        else{
            this.pageName = 'login'
        } 
    },
  })