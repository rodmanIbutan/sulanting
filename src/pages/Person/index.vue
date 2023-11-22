<template>
    <div id="app">
        <div class="main">
            <div class="left">
                <div class="userInf">
                    <PersonHeader ></PersonHeader>
                </div>
                <div class="notice">
                    <h1>公告</h1>
                    <div class="text">
                        这是一则公告
                    </div>
                </div>
            </div>
            <div class="right">
                <ul class="meun">
                    <li @click="goTo('')">主页</li>
                    <li @click="goTo('dynamic')">动态</li>
                    <li>投稿</li>
                    <li>合集</li>
                    <li>收藏</li>
                </ul>
                <div class="routeBox">
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import PersonHeader from '../../components/Person/personHeader.vue'
export default {
    components: {
        PersonHeader
    },
    created() {
        
    },
    methods: {
        goTo(e){
          let path = "/person"+this.$route.params.id+"/"+e
          if (this.$route.path != path) {
				this.$router.push(path)
			}

        }
    },

}
</script>
<style scoped>
#app {
    margin-top: 100px;
    height: 100%;
    width: 100%;

}

.main {
    width: 90%;
    height: 1500px;
    margin: auto;
}

.left {
    float: left;
    width: 20%;

}

.userInf {
    height: 200px;
    background-color: #fff;
    border-radius: 15px;
}

.notice {
    margin-top: 40px;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 15px;
}

.text {
    margin-top: 20px;
    height: 150px;

}
.right{
    float: left;
    width: 60%;
    margin-left: 5%;

}
.meun{
   height: 50px;
   width: 100%; 
}
.meun>li{
    cursor: pointer;
}
.meun>li:hover{
    color: #00aeec;
}
.meun>li{
    float: left;
    margin-right: 20px;
    line-height: 50px;
}
</style>