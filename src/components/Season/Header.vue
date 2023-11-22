<template>
    <div class="headerBox">
        <div class="headerLeft">
            <div class="leftTop">
                <div class="leftTopLeft">这是一段文字介绍</div>
                <img class="leftTopRight" :src="img">
            </div>
            <div class="leftBottom">
                冬至收萝卜，小雪收白菜。
            </div>
        </div>
        <div class="headerRight">
            <div class="headerTop">
                <div class="title1">立秋</div>
                <div class="title2">文章的标题</div>
                <div class="content">文章介绍</div>
            </div>
            <div class="headerBottom" @click="goTo()"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props:{
        img:String,
        require:true,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        goTo(){
			this.$router.push("/detail")
		}
    },
};
</script>

<style scoped>
    .headerBox{
        margin-top: 90px;
        position: relative;
        height: 500px;
        display: flex;
    }
    .headerLeft{
        background-color: #2895FA;
        width: 45%;
        height: 95%;
        position: relative;
        top: 2.5%;
        left: 2.5%;

    }
    .headerRight{
        width: 45%;
        height: 95%;
        position: relative;
        top: 2.5%;
        left: 5%;
    }
    .headerTop{
        height: 35%;
        width: 90%;
        position: relative;
        left: 5%;
        top: 2%;
    }
    .headerBottom{
		cursor: pointer;
        background-color: cadetblue;
        height: 55%;
        width: 90%;
        position: relative;
        left: 5%;
        top: 10%;
    }
    .leftTop{
        height: 60%;
        width: 90%;
        position: relative;
        top: 1%;
        left: 5%;
        display: flex;
        box-shadow:2px 2px 5px;
    }
    .leftTopLeft{
        width: 40%;
        height: 100%;
        padding-top: 20%;
        color: azure;
        text-align: center;
        justify-self: center;
    }
    .leftTopRight{
        width: 60%;
    }
    .leftBottom{
        height: 35%;
        width: 90%;
        position: relative;
        top: 1%;
        left: 5%;
        padding: 5%;
        color: white;
        font-size: larger;
        text-align: center;
    }
    .title1{
        font-size: 55px;
        font-family: cursive;
        margin-left: 5%;
        color: darkorange;
    }
    .title2{
        font-size: 30px;
        font-family: cursive;
        margin-left: 5%;
        margin-top: 2%;
    }
    .content{
        font-family: cursive;
        margin-left: 5%;
        margin-top: 2%;
    }


</style>