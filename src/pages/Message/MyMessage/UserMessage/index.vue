<template>
	<div id="userMessage">
		<div class="title">
			用户名{{$route.params.id}}
		</div>
		<div class="chatBox">
			
		</div>
		<div class="inputMessage">
			<form action="">
				<textarea name="" id="" cols="100" rows="10"></textarea>
				<input type="submit" value="发送">
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				id:0,
				props:['id']
			}
		},
	}
</script>

<style scoped>
	#userMessage{
		height: 100%;
		width: 100%;
	}
	form{
		position: relative;
		height: 100%;
	}
	textarea{
		margin-top: 50px;
		margin-left: 20px;
		border: none;
		resize: none;
		outline: none;
		font-size: 18px;
		background-color: antiquewhite;
		height: 130px;
		width: 90%;
	}
	input{
		cursor: pointer;
		position: absolute;
		right: 20px;
		bottom: 10px;
		width: 60px;
		height: 30px;
		background:#fff;
		border: #e7e7e7 solid 1px;
	}
	.title{
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		border-left: #ecedef 1px solid;
		border-bottom: #ecedef 1px solid;
	}
	.chatBox{
		width: 100%;
		height: 65%;
		border-left: #ecedef 1px solid;
		border-bottom: #ecedef 1px solid;
	}
	.inputMessage{
		width: 100%;
		height: calc(35% - 50px);
		border-left: #ecedef 1px solid;
	}
</style>