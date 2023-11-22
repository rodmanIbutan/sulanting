<template>
	<div id="body">
		<div class="showcase"></div>
		<div class="navBox W">
			<ul class="nav">
				<li :class="{'pic':ispick == '/diary'}" @click="goTo('')">视频教程</li>
				<li :class="{'pic':ispick == '/diary/article'}" @click="goTo('/article')">精选文章</li>
			</ul>
		</div>
		<div class="main W">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:"",
		data(){
			return{
				ispick:""
			}
		},
		created() {
			this.ispick = this.$route.path;

		},
		methods:{
			goTo(e) {
				let liPath = '/diary' + e
				if (this.$route.path !== liPath) {
					this.$router.push(liPath)
					this.ispick = liPath
				}
			
			}
		}
		
	}
</script>

<style scoped>
	#body{
		margin-bottom: 100px;
	}
	.pic{
		background: #dcedc8;
	}
	.W{
		width: 1500px;
		margin: 0 auto;
	}
	.showcase{
		width: 100%;
		height: 200px;
		background-color: #39424f;
	}
	.navBox{
		height: 40px;
		margin-top:50px ;
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
</style>