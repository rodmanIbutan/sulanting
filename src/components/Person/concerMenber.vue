<template>
    <div class="ConcerMember">
        <div class="header">
            <el-badge :is-dot="has!=0" class="item">
                <img :src="img" alt="">
            </el-badge>
        </div>
        <div class="name">
            <span>{{name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConcerMenber',
    props:{
        img:{
            type:String,
        },
        name:{
            type:String,
            default:'佚名'
        },
        number:{
            type:Number,
            default:0
        }
    },

    data() {
        return {
            
        };
    },
    computed:{
        has(){
            return this.number;
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .ConcerMember{
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
        
    }
    .ConcerMember:hover{
        
        background-color: #f8f4f4;
    }
    .ConcerMember:hover>.name{
        color: #57a8e5;
    }
    img{
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin-left: 10px;
    }
    .name{
        margin-left:10px;        
    }
</style>