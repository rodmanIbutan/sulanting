<template>
    <div class="header">
        <div class="Img" ref="Img"></div>
        <div class="userName"></div>
        <div class="number">
            <div class="C">
                <span>粉丝</span>
                <span>{{numberF}}</span>
            </div>
            <div class="C">
                <span>关注</span>
                <span>{{numberG}}</span>
            </div>
            <div class="C">
                <span>发布</span>
                <span>{{numberB}}</span>
            </div>       
        </div>
    </div>
</template>

<script>
export default {
    name: 'PersonHeader',
    props:{
        img:{
            type:String
        }
    },

    data() {
        return {
            numberF:1231,
            numberG:10,
            numberB:12
        };
    },

    mounted() {
        this.$refs.Img.style.backgroundImage = "url('" + this.Img + "')"
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .Img{
        margin: auto;
        margin-top: 10px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    span{
        margin-left: 10px;
        margin-right: 10px;
    }
    .header{
        width: 100%;
        height: 150px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .number{
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .C > span{
        display: block;
    }
    .btn{
        width: 80%;
        margin: auto;
        border-style: none;
        /* margin-top: 20px ; */
        height: 30px;
        background-color:rgb(123, 123, 232);
    }
</style>