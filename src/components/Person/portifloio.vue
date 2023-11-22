<template>
    <div id="video">
		<div class="main">
			<div ref="video1" id="cover">
				<!-- <div class="btm">
					<span>
						{{playVolume}}
					</span>
				</div> -->
				<div class="video-num">
					<span>{{num}}</span>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="Title">合集:{{Title}}</div>
			<div class="author">{{author}}</div>
		</div>

	</div>
</template>

<script>
export default {
    name: 'Portifloio',

    props: {
			playVolume: {
				type: String,
				default: "播放量"
			},
			backGround: {
				type: String
			},
			title: {
				type: String,
				default: "合集名称"
			},
			author: {
				type: String,
				default: "雪豹"
			},
			num:{
				type:String,
				default:'合集数'
			}
		},
		data() {
			return {
				BackGround: this.backGround,
				Title: this.title,
				Color: this.color,
				isShow: false
			}
		},
		mounted() {
			this.$refs.video1.style.backgroundImage = "url('" + this.BackGround + "')"
			// this.$refs.Title.style.color = this.Color
			// this.$refs.video1.style.backgroundColor="blue"

			// this.bck = "background:url('"+this.BackGround+"')"
		},
		methods: {}
};
</script>

<style scoped>
	.video-num{
		position: absolute;
		top: 0;
		right: 0;
		width: 40%;
		height: 100%;
		color: #e5e9ef;
		text-align: center;
		font-size: 12px;
		box-sizing: border-box;
		background-color: rgba(0,0,0,.5);
	}
	.video-num>span{
		margin-top: 38px;
		display: block;
		line-height: 20px;
		font-size: 18px;
		color: #fff;
		font-weight: 400;
		font-family: Arial;
	}
    #video {
		cursor: pointer;
		/* position: relative; */
		width: 100%;
		height: 100%;
        text-align: left;
		/* background-size: cover; */
		/* box-shadow: #2c3e50 0px 0px;
		transform: scale(0.9);
		transition: 0.5s; */

	}

	.main {
		width: 100%;
		height: 70%;

		margin: 5% auto;
		overflow: hidden;
		border-radius: 5px;
		transition: 0.3s;
	}

	#cover {
		position: relative;
		width: 100%;
		height: 100%;
		background-size: cover;

		transform: scale(1);
		transition: 0.5s;
	}

	/* #cover:hover {
		box-shadow: #2c3e50 7px 7px 7px;
		transform: scale(1.1);
		transition: 0.5s;

	} */

	/* #cover:hover .btm {
		opacity: 0;
		transition: 0.5s;
	} */

	.btm {
		/* visibility: hidden; */
		opacity: 1;
		position: absolute;
		bottom: 0%;
		background: linear-gradient(to top, #151d29, transparent);
		height: 40%;
		width: 100%;
		transition: 0.5s;

	}

	.btm>span {
		position: absolute;
		width: 70%;
		bottom: 2%;
		left: 5%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #fff;
	}

	.Title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 42px;
		transition: 0.3s;
		line-height: 21px;
	}

	.Title:hover {
		color: #00aeec;
		cursor: pointer;
		transition: 0.2s;
	}

	.author {
		margin-top: 2px;
		color: #9da3aa;
		transition: 0.3s;
	}

	.author:hover {
		color: #00aeec;
		cursor: pointer;
		transition: 0.2s;
	}
</style>