<template >
    <div class="main">
        <div class="title">{{ title }}</div>
        <div class="overview">{{ overview }}}</div>
        <div class="inf">发布日期:{{ }} 评论量:{{ Data.collection }} 阅读量:{{ Data.heat }} 点赞量:{{ Data.like }}</div>
        <div class="coverImg" ref="coverImg"></div>
    </div>
</template>
<script>
export default {
    props: {
        articleId: {
            type: String
        },
        Img: {
            type: String,
        },
        title: {
            type: String,
            default: "芝士标题"
        },
        overview: {
            type: String,
            default: "芝士内容芝士内容芝士内容芝士内容芝士内容芝士内容"
        },
    },
    data() {
        return {
            Id: this.articleId,
            Data: {}
        }
    },
    mounted() {
        this.$refs.coverImg.style.backgroundImage = "url('" + this.Img + "')"
        utils.getData(this.Id, "article").then(res => {
            this.Data = res.result;
            console.log("🚀 ~ file: index.vue:50 ~ utils.requestGet ~ this.data:", this.Data)
        })
    },
}
</script>
<style scoped>
.overview {
    width: 75%;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #687a81;
    margin-top: 5px;
}

.title {
    font-size: 16px;
    margin-top: 20px;
}

.inf {
    font-size: 14px;
    color: #687a81;
    margin-top: 5px;
}

.coverImg {
    position: absolute;
    background-size: cover;
    width: 20%;
    height: 70%;
    top: 0px;
    right: 0;

}

.main {
    position: relative;
    height: 100%;
    width: 100%;
}</style>