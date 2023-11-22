<template>
	<div id="body">
		<div id="message">
			<div class="main">
				
				<ul class="classification">
					<div class="mesTit">
						消息中心
					</div>
					<li @click="goTo('')" :class="{'pic':ispick == '/message'}">回复我的</li>
					<li @click="goTo('/like')" :class="{'pic':ispick == '/message/like'}">收到的赞</li>
					<li @click="goTo('/myMessage')" :class="{'pic':ispick == '/message/myMessage'}">消息</li>
				</ul>
				<div class="message">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ispick: ''
			}
		},
		created() {
			this.ispick = this.$route.path;
			console.log(this.ispick)
		},
		methods: {
			goTo(e) {
				let liPath = "/message" + e
				if (this.$route.path != liPath) {
					this.$router.push(liPath)
					this.ispick = liPath
				}
			}
		}

	}
</script>

<style scoped>
	#body{
		height: 100vh;
		background: url('../../../public/img/bilibiliBackGround.jpg') top/cover no-repeat fixed;
	}
	#message {
		margin-top: 80px;
		height: 100vh;
	}

	.main {
		width: 1200px;
		height: 100%;
		margin: 0px auto;
	}

	.classification {
		float: left;
		width: 200px;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		overflow: hidden;
		font-family:"Microsoft YaHei"
	}
	.mesTit{
		height: 50px;
		width: 100%;
		text-align: center;
		line-height: 50px;
		margin-top: 20px;
		font-size:20px ;
		font-weight: 700;
	}
	.classification>li {
		height: 50px;
		width: 100%;
		cursor: pointer;
		text-align: center;
		line-height: 50px;
		margin-top: 20px;
		font-size:18px ;
	}

	.message {
		float: left;
		width: 900px;
		height: 100%;
		margin-left: 20px;
		background-color: rgba(255, 255, 255, 0.7);
	}

	.pic {
		color: #2faee3;
		font-size: 16px;
	}
	
</style>
