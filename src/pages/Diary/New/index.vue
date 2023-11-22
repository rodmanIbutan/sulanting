<template>
	<div class="body">
		<div class="videoBox">
			<div class="video" v-for="item in videolist" @click="goTo(item.articleId)">
				<Video  :backGround="item.coverImg" :title="item.title"
					:author="item.userName"></Video>
			</div>
		</div>
		<div class="rankingList">
			<RankingList Type="video" :hot="hotList" v-if="hotList.length >0"></RankingList>
		</div>
	</div>
</template>

<script>
import utils from '../../../utils';
import Video from '../../../components/Video/Video.vue';
import RankingList from '../../../components/RankingList/RankingList.vue'
export default {
	name: '',
	components: {
		Video,
		RankingList
	},
	data() {
		return {
			videolist: [],
			hotList: [],
			img: require('../../../../public/img/test8.png')
		}
	},
	methods: {
		goTo(e) {
			// this.$router.push("/videoDetails")
			let routeUrl = this.$router.resolve({
				path: `/videoDetails/${e}`,
			});
			window.open(routeUrl.href, '_blank');
		}
	},
	created() {
		utils.requestGet("/video/videoListByTime?page=0&pageItem=15").then(res => {
			this.videolist = res.result;
			console.log("🚀 ~ file: index.vue:44 ~ utils.requestGet ~ this.videolist:", this.videolist)
		});
		utils.requestGet("/video/videoListByPageView?page=0&pageItem=10").then(res => {
			this.hotList = res.result;
		})
	},
}
</script>

<style scoped>
.videoBox {
	float: left;
	width: 1000px;
	height: 1500px;
	margin-left: 100px;
}

.videoBox>.video {
	float: left;
	width: 300px;
	height: 250px;
	margin-top: 20px;
	margin-left: 20px;
}

.rankingList {
	float: left;
	margin-left: 20px;
}
</style>