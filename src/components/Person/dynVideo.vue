<template>
    <div class="dynVideo">
        <div class="dynVideoMajor">
            <div class="videoHeader">
                <div class="videoBadge">投稿视频</div>
                <div class="videoCover">
                    <img :src="img" alt="">
                </div>
            </div>
            <div class="videoBody">
                <div class="videoTitle">{{videoTitle}}</div>
                <div class="videoDeco ellipsis">{{videoDeco}}</div>
                <div class="videoStat ellipsis">
                    <div class="videoStatItem"><i class="el-icon-s-platform"></i>{{watchNumber}}</div>
                    <div class="videoStatItem"><i class="el-icon-s-order"></i>{{commentNumber}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuLanTin3DynVideo',
    props:{
        img:{
            type:String,
        },
        videoTitle:{
            type:String,
            default:"这是视频标题这是视频标题这是视频标题这是视频标题"
        },
        videoDeco:{
            type:String,
            default:"这是视频简介这是视频简介这是视频简介这是视频简介这是视频简介这是视频简介这是视频简介这是视频简介这是视频简介"
        },
        watchNumber:{
            type:Number,
            default:0
        },
        commentNumber:{
            type:Number,
            default:0
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
    .dynVideoMajor{
        width: 100%;
        border: 1px solid #e5e9ef;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        height: 129px;
        overflow: hidden;
    }
    .videoHeader{
        flex-shrink: 0;
        height: 120px;
        position: relative;
        width: 203px;
    }
    .videoBadge{
        background-color: #fb7299;
        border-radius: 2px;
        color: #fff;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        min-width: 32px;
        padding: 0 5px;
        pointer-events: none;
        position: absolute;
        right: 8px;
        text-align: center;
        top: 8px;
        z-index: 10;
    }
    .videoCover{
        height: 100%;
        position: relative;
        width: 100%;
    }
    .videoCover > img{
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
    }
    .videoBody{
        background-color: #fff;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        padding: 9px 12px 6px 16px;
    }
    .videoTitle{
        -webkit-line-clamp: 2;
        color: #212121;
        font-size: 14px;
        transition: color .2s;
    }
    .videoDeco{
        -webkit-line-clamp: 2;
        color: #666;
        font-size: 12px;
        height: 38px;
        line-height: 19px;
    }
    .ellipsis{
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .videoStat{
        align-items: center;
        color: #999;
        display: flex;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
    }
    .videoStatItem{
        align-items: center;
        display: flex;
        width: 72px;
    }
    .videoStatItem i{
        display: inline-block;
        height: 14px;
        font-size: initial;
        margin-right: 4px;
        width: 14px;
    }
</style>