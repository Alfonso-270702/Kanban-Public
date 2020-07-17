<template>
  <div class="add-form my-5">
    <form v-on:submit.prevent="add" style="min-width: 100%">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" class="form-control" name="title" placeholder="input your title" v-model="title" >
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <select v-model="selected" class="form-control">
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div class="form-group">
          <label for="author">Author:</label>
          <input type="text" class="form-control" name="author" placeholder="input the author" v-model="author">
        </div>


        <div>
          <button class="btn btn-primary">Add</button>
        </div>

      </form>
    </div>
</template>

<script>
export default {
    name: 'AddForm',
    data(){
        return{
            title: '',
            selected: '',
            author: ''
        }
    },
    methods:{
        add(){
            let payload = {
                title: this.title,
                category: this.selected, 
                author: this.author
            }
            this.$emit('addNewTask',payload)
            this.title = ''
            this.selected = ''
            this.author = ''
        }
    }
}
</script>

<style>

</style>