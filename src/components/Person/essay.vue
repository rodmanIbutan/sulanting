<template>
    <div class="essay">
        <div class="e">
            <img :src="img" alt="">
            <p class="title">{{title}}</p>
            <p class="content">{{content}}</p>
            <span>阅读量：{{read}}</span>
            <span>点赞量：{{good}}</span>
            <span>评论量：{{comment}}</span>
            <span>发布日期：{{date}}</span>
        </div>
        <hr>
    </div>
</template>

<script>
import internal from 'assert';

export default {
    name: 'Essay',
    props:{
        img:{
            type:String,
            default:require('../../../public/img/test1.png')
        },
        title:{
            type:String,
            default:"这是文章标题"
        },
        content:{
            type:String,
            default:"这是文章简介"
        },
        read:{
            type:Number,
            default:0
        },
        good:{
            type:Number,
            default:0
        },
        comment:{
            type:Number,
            default:0
        },
        date:{
            type:String,
            default:'2022-11-9'
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .essay{
        height: 140px;
        width: 100%;
        margin-bottom: 10px;
    }
    img{
        height: 100%;
        float: right;
        border-radius: 5%;
        margin-top: 5px;
    }
    .e{
        text-align: left;
        margin-left: 2.5%;
        height: 100%;
        margin-bottom: 10px;
    }
    .title{
        font-size: 25px;
        height: 30px;
        width: 50%;
        overflow : hidden; 
        white-space : nowrap; 
        text-overflow : ellipsis; 
        -o-text-overflow : ellipsis;
        margin-top: 5px;
        padding-top: 10px;
    }
    .content{
        overflow : hidden; 
        white-space : nowrap; 
        text-overflow : ellipsis; 
        -o-text-overflow : ellipsis;
        width: 60%;
        font-size: 15px;
        line-height: 30px;
    }
    span{
        margin-right: 10px;
    }
    hr{
        width: 95%;
        margin: auto;
    }
</style>