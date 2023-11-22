<template>
	<div id="foot">
		<div class="feedback">
			<ul>
				<li>联系我们</li>
				<li>联系我们</li>
				<li>联系我们</li>
				<li>联系我们</li>
				<li>联系我们</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				isShow:true
			}
		},
		watch: {
		  '$route':'getPath'
		},
		methods:{
			getPath(){
				if(this.$route.path!="/index"&this.$route.path!="/diary"&this.$route.path!="/book"&this.$route.path!="season"){
					this.isShow=false
				}else{
					this.isShow=true
				}
			}
		}
	}
	
</script>

<style>
	#foot{
		height: 350px;
		background-color: #f5f5f7;
		width: 1903px;
		overflow: hidden;
	}
	.feedback{
		width: 70%;
		margin: 0 auto;
		margin-top: 50px;
	}
	.feedback>ul>li{
		margin: 5px;
	}
	
</style>