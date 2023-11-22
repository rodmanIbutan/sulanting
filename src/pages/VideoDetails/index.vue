<template>
	<div id="body">
		<div class="main">
			<div id="video">
				<h1 class="title">{{ detail.title }}</h1>
				<h2 class="inf"></h2>
					<video v-if="JSON.stringify(this.detail)!='{}'" class="video"  width="320" height="240" controls>
						<source :src="detail.videoAddress" type="video/mp4">
						<source :src="detail.videoAddress" type="video/ogg">
						<source :src="detail.videoAddress" type="video/webm">
						<object :data="detail.videoAddress" width="320" height="240">
							<embed :src="detail.videoAddress" width="320" height="240">
						</object>
					</video>
			</div>
			<div id="comment">
				<div class="author">
					<div class="Hp">
						<div class="HeadPortrait" ref="hd"></div>
					</div>
					<div class="UserName"><span>{{author.userName}}</span></div>
				</div>
				<div class="follow">
					<button>关注</button>
				</div>
				<div class="comment">
					<comment></comment>
				</div>

			</div>
			<div class="details">
				<h3>简介</h3>
				<div class="briefIntroduction">
					{{ detail.overView }}
				</div>
			</div>
			<div class="recommend">

			</div>
		</div>

	</div>
</template>

<script>
import utils from '../../utils'
import comment from '../../components/Comment/Comment.vue'
export default {
	name: '',
	components: {
		comment
	},
	data() {
		return {
			detail: {},
			author:{}
		}
	},
	created() {
		let url = "/video/getVideoContent?videoId=" + this.$route.params.id
		utils.requestGet(url).then(res => {
			this.detail = res.result;
			console.log("🚀 ~ file: index.vue:62 ~ utils.requestGet ~ this.detail:", this.detail)
			utils.requestGet("/article/getUserPartInfo?userId="+res.result.userId).then(res=>{
				this.author = res.result
				console.log("🚀 ~ file: index.vue:66 ~ utils.requestGet ~ this.author:", this.author)
				this.$refs.hd.style.backgroundImage = "url('" + res.result.profilePhoto + "')"
			})
		})
	},
		

}
</script>

<style scoped>
.main {
	width: 1500px;
	margin: 100px auto;
}

h1,
h3 {
	margin-bottom: 20px;
}
.title{
	font-weight: 500;
	font-size: 26px;
	margin-left: 200px;
}

#video {
	float: left;
	height: 500px;
	width: 900px;
}

.video {
	float: right;
	width: 700px;
	height: 400px;
}

#comment {
	float: left;
	margin-left: 50px;
	height: 500px;
	width: 500px;
	border-radius: 10px;

}

.comment {
	height: 350px;
	width: 700px;
	border-radius: 10px;
	border: solid 1px #e2e2e2;
	margin-top: 10px;
}

.details {
	margin-top: 50px;
	margin-left: 200px;
	float: left;
	height: 500px;
	width: 700px;
}

.author {
	height: 60px;
	width: 200px;
	margin-top: 10px;
	line-height: 50px;
	text-align: center;
}

.Hp {
	float: left;
	height: 60px;
	width: 60px;
}

.HeadPortrait {

	cursor: pointer;
	margin: auto;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: #68945c solid 1px;
	overflow: hidden;
	transition: 0.3s;
}

.HeadPortrait:hover {
	border: #68945c solid 3px;
	transition: 0.3s;
}

.UserName {
	float: left;
	height: 50px;
	width: 60%;
	overflow: hidden;
	line-height: 50px;
	text-align: left;
}

.follow {
	width: 300px;
	height: 40px;
	margin-top: 10px;
	margin-left: 50px;
}

.follow button {
	border: none;
	border-radius: 10px;
	height: 100%;
	width: 100%;
	color: #fff;
	background-color: #00aeec;
}
</style>
