<template>
    <div class="card-background mr-2" :class="kanbanDetail.category">
        <div class="card  ml-1 mr-1 " >
            <div class="card-body" >
                <h5 class="card-title">{{kanbanDetail.title}}</h5>
                <p class="card-text"><small class="text-muted">Author: <i>{{kanbanDetail.author}}</i></small></p>
            <div class="option-button">
                <i @click="editIcon" class="far fa-edit edit-btn"></i>
                <i @click="deleteKanbanCard" class="far fa-trash-alt delete-btn"></i>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KanbanCard',
    props: ['kanbanDetail'],
    methods:{
        deleteKanbanCard(){
            let payload = {
                id: this.kanbanDetail.id
            }
            this.$emit('deleteKanbanCard',payload)
        },
        editIcon(){
            let payload = {
                data: this.kanbanDetail,
                pageName: 'editForm'
            }
            this.$emit('editFormIconCard',payload)
        }
    }
}
</script>

<style>
    .option-button{
        cursor: pointer;
    }
    .edit-btn:hover{
        color: green;
    }
    .delete-btn:hover{
        color: red;
    }
</style>