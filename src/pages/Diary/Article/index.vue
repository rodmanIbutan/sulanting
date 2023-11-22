<template>
	<div class="body">
		<div class="videoBox">
			<div class="video" @click="goTo(item.articleId)" v-for="item in articleList">
					<Video :backGround="item.coverImg" :title="item.title" :content="item.overView"></Video>
				</div>
		</div>
		<div class="rankingList">
			<RankingList Type="article" :hot="hotList" v-if="hotList.length >0"></RankingList>
		</div>
	</div>
</template>

<script>
import utils from '../../../utils';
import Video from '../../../components/Video/Video.vue';
import RankingList from '../../../components/RankingList/RankingList.vue';
import Book from '../../../components/Book/Book.vue';
export default {
	name: '',
	components: {
		Video,
		RankingList,
		Book
	},
	data() {
		return {
			articleList:[],
			hotList:[],
			img: require('../../../../public/img/test7.png')
		}
	},
	created() {
		utils.requestGet("/article/articleListByTime?page=0&pageItem=15").then(res=>{
			this.articleList = res.result;
			console.log("🚀 ~ file: index.vue:100 ~ utils.requestGet ~ this.articleList:", this.articleList)
		})
		utils.requestGet("/article/articleListByPageView?page=0&pageItem=10").then(res=>{
			this.hotList = res.result;
		})
	},
	methods: {
		goTo(e){
			let routeUrl = this.$router.resolve({
				path: `/detail/${e}`,
			});
			window.open(routeUrl.href, '_blank');
		}
	},

}
</script>

<style scoped>
.videoBox {
	float: left;
	width: 1000px;
	margin-left: 100px;
}

.videoBox>.video {
	float: left;
	width: 250px;
	height: 500px;
	margin-top: 20px;
	margin-left: 20px;
}

.rankingList {
	float: left;
	margin-left: 20px;
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