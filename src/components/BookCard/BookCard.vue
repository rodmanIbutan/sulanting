<template>
	<el-popover 
	placement="right" 
	:title=title
	:content=content
	width="200"
	trigger="hover"
	close-delay='100'>
	<div id="bookcard" slot="reference">
		<div class="cover" ref="bookImg"></div>
		<div class="title">
			{{title}}
		</div>
		<div class="author">
			{{author}}
		</div>
	</div>
	</el-popover>
</template>

<script>
	export default {
		name: "Book",
		props:{
			
			Img:{
				type:String,
			},
			title:{
				type:String,
				default:"芝士标题"
			},
			content:{
				type:String,
				default:"芝士内容芝士内容芝士内容芝士内容芝士内容芝士内容"
			},
			author:{
				type:String,
				default:"作者"
			}
		},
		mounted() {
			this.$refs.bookImg.style.backgroundImage = "url('" + this.Img + "')"
		},
	}
</script>

<style scoped>
	#bookcard{
		cursor: pointer;
		height: 100%;
		width: 100%;
		border: 1px #ebeef5 solid;
		border-radius: 5px;
		background-color: #fff;
		transition: 0.3s;
		/* box-shadow: 0px 0px 2px 2px  #ebeef5; */
	}
	#bookcard:hover{
		box-shadow: 0px 0px 20px 5px  #ebeef5;
		transition: 0.3s;
	}
	.cover{
		height: 80%;
		width: 90%;
		margin: 3% auto;
		background: url("../../../public/img/test2.png");
		background-size: cover;
	}
	.title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-left: 20px;
		font-weight: 700;
	}
	.author{
		margin-top: 5px;
		margin-left: 20px;
	}
</style>