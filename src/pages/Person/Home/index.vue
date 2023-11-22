<template>
    <div>
        <div class="representative">
            <h1>代表作</h1>
            <div class="video" v-for="item in videolist">
                <Video @click="goTo(item.articleId)" :backGround="item.coverImg" :title="item.title"
                    :author="item.userName"></Video>
            </div>
        </div>
        <div class="works">
            <h1>TA的视频</h1>
            <div class="worklist">
                <div class="workitem" v-for="item in worklist">
                    <Video @click="goTo(item.articleId)" :backGround="item.coverImg" :title="item.title"
                        :author="item.userName"></Video>
                </div>
            </div>
        </div>
        <div class="article">
            <h1>专栏</h1>
            <div class="articlelist">
                <div class="articleitem" @click="goTo(`/detail/${item.articleId}`)" v-for="item in articleList">
                    <specialColumn :articleId="item.articleId" :Img="item.coverImg" :title="item.title" :overview="item.overView"></specialColumn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Video from "../../../components/Video/Video.vue"
import utils from "../../../utils";
import specialColumn from "../../../components/SpecialColumn/specialColumn.vue";
export default {
    components: {
        Video,
        specialColumn
    },
    data() {
        return {
            videolist: [],
            worklist:[],
            articleList:[]
        }
    },
    created() {
        utils.requestGet("/video/videoListByTime?page=0&pageItem=3").then(res => {
            this.videolist = res.result;
        });
        utils.requestGet("/video/videoListByTime?page=0&pageItem=5").then(res => {
            this.worklist = res.result;
        });
        utils.requestGet("/article/articleListByTime?page=0&pageItem=6").then(res=>{
			this.articleList = res.result;
			console.log("🚀 ~ file: index.vue:100 ~ utils.requestGet ~ this.articleList:", this.articleList)
		})
        
    },
    methods: {
        goTo(e) {
			let liPath = e
			let routeUrl = this.$router.resolve({
				path: liPath,
			});
			window.open(routeUrl.href, '_blank');
		},
    },
}
</script>
<style scoped>
.representative {
    height: 250px;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
}

.representative>h1 {
    margin: 10px 0 0 10px;
    font-size: 20px;
}

.video {
    float: left;
    width: 250px;
    height: 200px;
    margin-top: 20px;
    margin-left: 20px;
}
.works{
    margin-top: 20px;
}
.worklist{
    height: 150px;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;
}
.article{
    margin-top: 20px;
}
.workitem{

    float: left;
    width: 140px;
    height: 120px;
    margin-top: 20px;
    margin-left: 20px;
}
.articleitem{
    cursor: pointer;
    height: 130px;
    width: 100%;
    margin-top: 20px;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
}
.articleitem:hover{
    color: #00c1f3;
}
</style>