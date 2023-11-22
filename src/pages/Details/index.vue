<template>
    <div class="article">
        <div class="titles">
            <p class="title">{{ detail.title }}</p>
            <p class="introduce">作者:{{ author.userName }} 发布日期:{{  }} 评论量:{{ Data.collection }} 阅读量:{{ Data.heat }} 点赞量:{{ Data.like }}</p>
        </div>
        <div class="content" >
            <p v-html="detail.content"></p>
        </div>
        <hr>

        <div style="width:90%;margin-left:5%">
            <h3 style="margin-bottom:10px">评论区</h3>
            <Comment></Comment>
        </div>

    </div>
</template>

<script>
import utils from '../../utils';
import Comment from '../../components/Comment/Comment.vue'
export default {
    name: '',
    components: {
        Comment
    },

    data() {
        return {
            detail: {},
            author: {},
            Data: {}
        };
    },

    created() {
        let url = "/article/getArticleContent?articleId=" + this.$route.params.id
        let DataUrl = "/articleData/selectArticleData?articleId="+this.$route.params.id
        utils.requestGet(url).then(res => {
            this.detail = res.result;
            console.log("🚀 ~ file: index.vue:62 ~ utils.requestGet ~ this.detail:", this.detail)
            utils.requestGet("/article/getUserPartInfo?userId=" + res.result.userId).then(res => {
                this.author = res.result
                console.log("🚀 ~ file: index.vue:66 ~ utils.requestGet ~ this.author:", this.author)
                // this.$refs.hd.style.backgroundImage = "url('" + res.result.profilePhoto + "')"
            })
        })
        utils.getData(this.$route.params.id,"article").then(res => {
            this.Data = res.result;
            console.log("🚀 ~ file: index.vue:50 ~ utils.requestGet ~ this.data:",this.Data )
        })
    },

    methods: {

    },
};
</script>

<style scoped>
.article {
    width: 70%;
    position: relative;
    left: 15%;
    margin-top: 120px;
}

.title {
    font-size: 40px;
}

.titles {
    text-align: center;
}

.introduce {
    font-size: 5px;
    color: gray;
}

.content {
    width: 90%;
    margin-left: 5%;
    margin-top: 25px;
}

hr {
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 5%;
    width: 90%;
}</style>