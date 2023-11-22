<template>
	<div id="mian">
		<div class="showcase"></div>
		<div class="Season">

			<SeasonHeader :img="img"></SeasonHeader>
			<Sift></Sift>
			<div class="videoBox">
				<div class="video"><Video :backGround="img" title="芝士"></Video></div>
				<div class="video"><Video :backGround="img" title="芝士标题芝士标题芝士标题芝士标题"></Video></div>
				<div class="video"><Video :backGround="img" title="芝士标题芝士标题芝士标题芝士标题"></Video></div>
				<div class="video"><Video :backGround="img" title="芝士标题芝士标题芝士标题芝士标题"></Video></div>
				<div class="video"><Video :backGround="img" title="芝士标题芝士标题芝士标题芝士标题"></Video></div>
				<div class="video"><Video :backGround="img" title="芝士标题芝士标题芝士标题芝士标题"></Video></div>
			</div>
		</div>
	</div>

</template>

<script>
	import Sift from '../../components/Sift/Sift.vue'
	import SeasonHeader from '../../components/Season/Header.vue'
	import Video from '../../components/Video/Video.vue'
	export default {
		name: '',
		components: {
			Sift,
			SeasonHeader,
			Video
		},
		data() {
			return {
				img: require('../../../public/img/test1.png')
			}
		}
	}
</script>

<style>
	.imageHeader {
		width: 100%;
		height: 100px;
	}

	.showcase {
		width: 100%;
		height: 200px;
		background-color: #39424f;
	}

	.Season {
		width: 70%;
		position: relative;
		left: 15%;
	}

	.videoBox{
		float: left;	
		/* width: 100%; */
		margin-left: 100px;
	}
	.videoBox>.video{
		float: left;
		width: 300px;
		height: 250px;
		margin-top:20px;
		margin-left: 20px;
	}
</style>
