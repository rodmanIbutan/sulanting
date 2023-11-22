<template>
    <div class="dynamic">
        <div class="dyn-avatur">
            <img :src="img" alt="" class="h">
        </div>
        <div class="dyn-header">
            <div class="dyn-title">
                <span class="dyn-title_text">这是一个昵称</span>
            </div>
            <div class="dyn-time">11.04.投稿了视频</div>
            <div class="dyn-more">
                <i class="el-icon-more" @click="iconShow= !iconShow"></i>
                <div class="popover" v-if="iconShow">
                    <div class="popover_menu">
                        <div class="popover_menu_item">取消关注</div>
                        <div class="popover_menu_item">举报</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <p>这是一段文字</p>
            <p>这是另一段文字</p>
            <p>这是另另一段文字</p>
            <div><DynVideo :img="img"></DynVideo></div>
            
        </div>
        <div class="foot">
            <span class="f">
                <i class="el-icon-share"></i>
                <span>{{share}}</span>
            </span>
            <span class="f" @click="isShowComment = !isShowComment">
                <i class="el-icon-chat-round"></i>
                <span>{{comment}}</span>
            </span>
            <span class="f">
                <i class="el-icon-thumb"></i>
                <span>{{good}}</span>
            </span>
        </div>
        <div v-if="isShowComment" class="comment">
            <Comment></Comment>
        </div>
    </div>
</template>

<script>
import Comment from '../../components/Comment/Comment.vue'
import DynVideo from '../../components/Person/dynVideo.vue'
export default {
    name: 'Dynamic',
    props:{
        img:{
            type:String,
        },
        share:{
            type:Number,
            default:0
        },
        comment:{
            type:Number,
            default:0
        },
        good:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            iconShow:false,
            isShowComment:false,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        Comment,
        DynVideo
    }
};
</script>

<style>
.s{
    min-width: 0;
    margin-right: 0px;
}
</style>

<style scoped>
    .dynamic{
        display: inline-block;
        height: auto;
        position: relative;
        width: 100%;
        border: solid;
        border-width: 1px;
        border-color: #9e9e9e;
        font-family: Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
        letter-spacing: 0;
        background-color: #fff;
        border-radius: 4px;
        min-width: 632px;
        position: relative;
        padding: 0 12px 0 90px;
    }
    .dyn-avatur{
        height: 55px;
        left: 24px;
        position: absolute;
        top: 15px;
        width: 55px;
    }
    .dyn-header{
        height: 60px;
        padding-top: 20px;
    }
    .dyn-title{
        align-items: center;
        display: flex;
        height: 24px;
        width: max-content;
    }
    .dyn-title_text{
        color: rgb(251, 114, 153);
        cursor: pointer;
        font-size: 16px;
    }
    .dyn-time{
        color: #99a2aa;
        cursor: pointer;
        font-size: 12px;
        height: 22px;
        line-height: 18px;
        padding-top: 4px;
        transition: color .3s ease;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
    }
    .dyn-more{
        position: absolute;
        right: 16px;
        top: 30px;
    }
    .popover{
        background-color: #fff;
        position: absolute;
        left: -69px;
        top: 16px;
        width: 94px;
        z-index: 2004;
        border-radius: 8px;
        box-shadow: rgb(106 115 133 / 12%) 0px 11px 12px 0px;
        cursor: default;
    }
    .popover_menu{
        padding: 16px 0px;
        color: rgb(34, 34, 34);
    }
    .popover_menu_item{
        height: 25px;
        padding: 2px 0px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 14px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 100%;
    }
    .h{
        height: 100%;
        width: 100%;
        float: left;
        border-radius: 50%;
        margin-left: 2.5%;
    }

    .content{
        margin-top: 10px;
        text-align: start;
    }
    .foot{
        display: flex;
        height: 48px;
    }
    .f{
        align-items: center;
        color: #99a2aa;
        cursor: pointer;
        display: flex;
        font-size: 20px;
        height: 100%;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 92px;
    }
    .f > i{
        font-size: 20px;
    }
    .f>span{
        width: 20px;
    }
    .comment{
        width: 100%;
        margin: auto;
    }
</style>