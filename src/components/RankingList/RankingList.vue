<template>
	<div id="main">
		<h1>热门</h1>
		<ul class="list">
			<li @click="goTo(hot[0].articleId)">
				<div class="ranking" style="color: #ff4940;">1</div>
				<div class="title">{{ hot[0].title }}</div>
			</li>
			<li @click="goTo(hot[1].articleId)">
				<div class="ranking" style="color: #ff6b2a;">2</div>
				<div class="title">{{ hot[1].title }}</div>
			</li>
			<li @click="goTo(hot[2].articleId)">
				<div class="ranking" style="color: #ff9519;">3</div>
				<div class="title">{{ hot[2].title }}</div>
			</li>
			<li @click="goTo(hot[3].articleId)">
				<div class="ranking">4</div>
				<div class="title">{{ hot[3].title }}</div>
			</li>
			<li @click="goTo(hot[4].articleId)">
				<div class="ranking">5</div>
				<div class="title">{{ hot[4].title }}</div>
			</li>
			<li @click="goTo(hot[5].articleId)">
				<div class="ranking">6</div>
				<div class="title">{{ hot[5].title }}</div>
			</li>
			<li @click="goTo(hot[6].articleId)">
				<div class="ranking">7</div>
				<div class="title">{{ hot[6].title }}</div>
			</li>
			<li @click="goTo(hot[7].articleId)">
				<div class="ranking">8</div>
				<div class="title">{{ hot[7].title }}</div>
			</li>
			<li @click="goTo(hot[8].articleId)">
				<div class="ranking">9</div>
				<div class="title">{{ hot[8].title }}</div>
			</li>
			<li @click="goTo(hot[9].articleId)">
				<div class="ranking">10</div>
				<div class="title">{{ hot[9].title }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "RankingList",
	props: {
		hot: {
			type: Array,
			default: () => ({})
		},
		Type: {
			type: String
		}
	},

	data() {
		return {
		}
	},
	mounted() {
		console.log("🚀 ~ file: RankingList.vue:27 ~ hot:", this.hot)


	},
	methods: {
		goTo(e) {
			if (this.Type == "video") {
				let routeUrl = this.$router.resolve({
					path: `/videoDetails/${e}`,
				});
				window.open(routeUrl.href, '_blank');
			} else {
				let routeUrl = this.$router.resolve({
					path: `/detail/${e}`,
				});
				window.open(routeUrl.href, '_blank');
			}

		}
	},

}
</script>

<style scoped>
ul>li {
	cursor: pointer;
	display: block;
	height: 60px;
	width: 100%;

}

ul li:nth-child(even) {
	background: #f6f7f8;
}

h1 {
	font-weight: 500;
	font-family: "黑体";
	color: #295c71;
}

.list {
	margin-top: 20px;
	border: 1px solid #f4f5f6;
	border-radius: 3px;
	width: 350px;
}

.ranking {
	margin-left: 10px;
	float: left;
	height: 40px;
	margin-top: 15px;
	font-weight: 700;
	font-size: 20px;
	font-style: italic;
	color: #cacdd2;
}

.title {
	float: left;
	height: 40px;
	margin-left: 20px;
	margin-top: 18px;
	font-size: 18px;
	font-weight: 500;
	font-family: "黑体";
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.list li:hover .title {
	color: #00aeec;
}
</style>