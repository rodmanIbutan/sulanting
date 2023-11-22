<template>
	<div id="index">
		<div class="carouselChart">
			<Chart :UrlList="urllist"></Chart>
		</div>
		<div class="season W">
			<div class="title">
				时令种菜
			</div>
			<div class="more">——></div>
			<div class="cardBox">
				<div class="card">
					<Card></Card>
				</div>
				<div class="card">
					<Card></Card>
				</div>
				<div class="card">
					<Card></Card>
				</div>
			</div>
		</div>
		<div class="diary W">
			<div class="title">
				种菜日记
			</div>
			<div class="more">——></div>
			<div class="videoBox">
					<div class="video" v-for="item in videolist">
						<Video @click="goTo(item.articleId)" :backGround="item.coverImg" :title="item.title"
							:author="item.userName"></Video>
					</div>
			</div>
		</div>
		<div class="bookReference W">
			<div class="title">
				书籍查阅
			</div>
			<div class="more">——></div>
			<div class="bookBox">
				<div class="book" v-for="item in articleList">
					<Book :Img="item.coverImg" :title="item.title" :content="item.overView"></Book>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
import utils from '../../utils'
import Card from '../../components/Card/Card.vue'
import Chart from '../../components/Chart/Chart.vue'
import Video from '../../components/Video/Video.vue'
import Book from '../../components/Book/Book.vue'
export default {
	name: '',
	components: {
		Card,
		Chart,
		Video,
		Book
	},
	data() {
		return {
			img: require('../../../public/img/test9.png'),
			img1: require('../../../public/img/test7.png'),
			urllist: [],
			videolist: [],
			articleList:[]
		}
	},
	created() {
		utils.requestGet("/slideshow/getSlideshowListByTime?page=0&pageItem=5").then(res => {
			this.urllist = res.result;
			console.log("🚀 ~ file: index.vue:77 ~ utils.requestGet ~ this.urllist:", this.urllist)
		}).catch(error => {
			console.log("🚀 ~ file: index.vue:95 ~ utils.requestGet ~ error:", error)
		});
		utils.requestGet("/video/videoListByTime?page=0&pageItem=6").then(res => {
			this.videolist = res.result;
		});
		utils.requestGet("/article/articleListByTime?page=0&pageItem=6").then(res=>{
			this.articleList = res.result;
			console.log("🚀 ~ file: index.vue:100 ~ utils.requestGet ~ this.articleList:", this.articleList)
		})
	},
}
</script>

<style scoped>
.W {
	width: 1200px;
	margin: 0 auto;
}

.carouselChart {
	width: 100%;
	height: 700px;
	margin-top: 0px;

}

.season {
	margin-top: 100px;
	height: 500px;

}

.title {
	float: left;
	font-size: 20px;
}

.more {
	float: right;
}

.cardBox {
	float: left;
}

.cardBox>.card {
	float: left;
	width: 350px;
	height: 500px;
	margin: 20px;
}

.diary {
	margin-top: 50px;
	height: 600px;
}

.videoBox {
	float: left;
	/* width: 100%; */
	margin-left: 100px;
}

.videoBox>.video {
	float: left;
	width: 300px;
	height: 250px;
	margin-top: 20px;
	margin-left: 20px;
}

.bookReference {
	height: 700px;
	margin-top: 50px;
	;
}

.bookBox {
	float: left;
}

.book {
	float: left;
	margin-top: 20px;
	height: 250px;
	width: 400px;
}
</style>
