<template>
    <section>
        <div class="card-back-top mr-2 p-2 mb-2" :class="categoryData.category">
                <div class="ml-1 card-heading mr-3">
                    <h4 class="mb-0"><i class="fas fa-tasks mr-2"></i>{{categoryData.title}}</h4>
                </div>
        </div> 
        <KanbanCard 
        v-for="kanban in kanbanCategory" 
        :key="kanban.id" 
        :kanbanDetail="kanban"
        @deleteKanbanCard="deleteKanban"
        @editFormIconCard="editFormIcon"></KanbanCard>
    </section>
</template>

<script>
import KanbanCard from './KanbanCard'
export default {
    props: ['categoryData','kanbanData'],
    components:{
        KanbanCard
    },
    methods:{
        deleteKanban(payload){
            this.$emit('deleteKanbanData',payload)
        },
        editFormIcon(payload){
            this.$emit('editFormIcon',payload)
        }
    },
    computed:{
        kanbanCategory(){
            let result = []
            this.kanbanData.forEach(kanban => {
                if(kanban.category == this.categoryData.category){
                   result.push(kanban) 
                }
            });
            return result
        }
    }
}
</script>

<style>
    .card-back-top{
        border-radius: 7px 7px 0 0;
        /* background-color: red; */
        min-width: 185px;
    }
    .card-heading{
        display: flex;
        justify-content: center;
    }
</style>