<template>
	<div id="book">
		<div class="img" ref="bookImg"></div>
		<div class="message">
			<span class="title">
				{{title}}
			</span>
			<span class="content">
				{{content}}
			</span>
		</div>
	</div>
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
			}
		},
		data(){
			return{
				bookImg:this.Img,
			}
		},
		mounted() {
			this.$refs.bookImg.style.backgroundImage = "url('" + this.bookImg + "')"
		},
	}
</script>

<style scoped>
	#book{
		cursor: pointer;
		height: 100%;
		width: 100%;
		margin: 0px;
		padding: 0px;
		border: 1px solid #adb5bd;
		transition: 0.5s;
		transform: scale(0.95);
	}
	#book:hover{
		transition: 0.5s;
		transform: scale(1);

	}
	#book:hover .message{
		color: #fff;
		background-color: #95de64;
		transition: 0.5s;
	}
	.img{
		float: left;
		height: 100%;
		width: 40%;
		background-size: cover;
		margin: 0px;
		padding: 0px;

	}

	.message{
		float: left;
		height: 100%;
		width: 60%;
		margin: 0px;
		padding: 0px;
		transition: 0.5s;

	}
	.title{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-top:10% ;
		margin-left: 5%;
		font-size: 20px;
		font-weight: 700;
		height: 20%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.content{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 7;
		margin-top:20% ;
		margin-left: 5%;
		font-family: "楷体";
		height: 50%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>