<template>
	<div id="Index">
		<div class="navBox">
			<ul class="nav">
				<li :class="{ 'pic': ispick == 'video' }" @click="goTo('video')">视频投稿</li>
				<li :class="{ 'pic': ispick == 'article' }" @click="goTo('article')">专栏投稿</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ispick: "video",
			abstract: "",
			count: 0,
			type: "original",
			Rform: "all",
			tip: "所有用户将均可访问和阅读，优质文章将会获得更高的推荐曝光"
		}
	},
	methods: {
		goTo(e){
			this.$router.push({name:e});
			this.ispick=e
			
		},
		tipChange(val) {
			var tipArray = {
				all: "所有用户将均可访问和阅读，优质文章将会获得更高的推荐曝光",
				me: "仅我可见",
				fans: "粉丝可见",
				vip: "VIP可见"
			}
			this.tip = tipArray[val]
		},
		getPath(){
			if(this.$route.path=='/creativecenter/release/article'){
			this.ispick="article"
			}else{
				this.ispick="video"
			}
		}
	},
	created() {
		this.$router.path;
		if(this.$route.path=='/creativecenter/release/article'){
			this.ispick="article"
		}
	},
	watch: {
		  '$route':'getPath'
		},
		
}
</script>

<style scoped>
/* tr,td{
	border: 1px #000 solid;
} */
tr {
	height: 80px;
}

#Index {
	position: relative;
	height: 100%;
	width: 100%;
}

.pic {
	background: #dcedc8;
}

.navBox {
	height: 40px;
	margin-top: 50px;
}

.nav {
	float: left;
	margin-left: 3%;
	width: 25%;
}

.nav>li {
	float: left;
	display: block;
	cursor: pointer;
	width: 70px;
	height: 30px;
	padding: 0px 3%;
	text-align: center;
	border-radius: 10px;
	transition: 0.1s;
	margin-left: 20px;
	line-height: 30px;
}

.article {
	display: none;
	width: 787px;
}

.cover {
	cursor: pointer;
	float: left;
	margin-left: 20px;
	height: 120px;
	width: 200px;
	border: #636e72 1px dashed;
	text-align: center;
	line-height: 120px;
	font-size: 48px;
	color: #999999;
}

.abstract {
	position: relative;
	float: left;
	height: 120px;
	margin-left: 30px;
	border: #636e72 1px dashed;
}

.extract {
	position: absolute;
	color: #c1c4cd;
	right: 10px;
}

textarea {
	padding: 20px;
	resize: none;
	border: none;
	outline: none;
	height: 40px;
	width: 400px;
}

textarea::-webkit-input-placeholder {
	color: #c1c4cd;
	font-size: 16px;
}

tr:nth-child(1)>td:nth-child(2) {
	width: 700px;
}

.tip {
	margin-top: 10px;
	margin-left: 20px;
	background-color: #f5f6f7;
	width: 100%;
	height: 35px;
	line-height: 35px;
	padding-left: 10px;
}
.sub{
	float: right;
	margin-top: 20px;
}

</style>
