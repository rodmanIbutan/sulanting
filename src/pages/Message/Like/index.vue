<template>
	<div id="reply">
		<div class="list">
			<div class="avatarBox">
				<div class="avatar">头像</div>
			</div>
			<div class="content">
				<div class="userName">
					用户名
				</div>
				<div class="title">
					赞了我的弹幕
				</div>
				<div class="date">
					2022年11月10日 10:25
				</div>
				<div class="source">
					弹幕弹幕弹幕弹幕弹幕
				</div>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
	.list {
		margin: 20px auto;
		background-color: #fff;
		width: 95%;
		height: 200px;
		border-radius: 10px;

	}

	.avatarBox {
		position: relative;
		float: left;
		height: 100px;
		width: 10%;
	}

	.avatar {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 70px;
		height: 70px;
		border-radius: 35px;
		background-color: azure;
		line-height: 70px;
	}

	.content {
		position: relative;
		float: right;
		width: 90%;
		height: 100px;
		border-bottom: #eff2f5 1px solid;
	}

	.userName {
		float: left;
		margin: 20px;
		font-weight: 700;
	}

	.title {
		float: left;
		margin:20px 0px 0px 20px ;
		color: #505050;
		
	}
	.date{
		position: absolute;
		left: 20px;
		bottom: 20px;
		color: #bebebe;
		font-size: 16px;
	}
	.source{
		float: right;
		margin-top: 10px;
		margin-right:10px ;
		height: 80%;
		width: 100px;
		overflow: hidden;
	}
	
</style>
