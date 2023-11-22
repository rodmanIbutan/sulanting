<template>
	<div id="app">
		<div class="left">
			<div class="title">近期消息</div>
			<div class="messageList">
				<ul v-for="count in megLi">
					<li :class="{'pic':isPick==count}" @click="pick(count)">
						<div class="avatarBox">
							<div class="avatar">头像</div>
						</div>
						<div class="user">
							<div class="userName">
								用户名{{count}}
							</div>
							<div class="preview">
								预览消息
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="messageContent">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import router from '../../../router/router'
	export default {
		data() {
			return {
				isPick: 1,
				megLi:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
			}
		},
		methods: {
			pick(e) {
				this.isPick = e
				if (this.$route.path != `/message/myMessage/${e}`) {
					this.$router.push(`/message/myMessage/${e}`)
				}

			}
		},
		mounted() {
			this.$router.push(`/message/myMessage/${this.megLi[0]}`)
		}
	}
</script>

<style scoped>
	#app {
		margin: 20px auto;
		height: calc(100vh - 130px);
		width: 95%;
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
	}

	.left {
		float: left;
		height: 100%;
		width: 30%;
	}

	.messageList {
		height: calc(100% - 50px);
		width: 100%;
		border-right: #ecedef 1px solid;
		overflow: hidden;
	}

	.messageList:hover{
		overflow: auto;
	}

	.messageList>ul>li {
		cursor: pointer;
		height: 100px;
		transition: 0.3s;
	}

	.messageList>ul>li:hover {
		background-color: #e4e5e6;
	}

	.messageContent {
		float: left;
		width: 70%;
		height: 100%;

	}

	.title {
		padding-left: 10px;
		height: 50px;
		/* width: 324px; */
		width: calc(100% - 10px);
		line-height: 50px;
		border-right: #ecedef 1px solid;
		border-bottom: #ecedef 1px solid;
		z-index: 15;
	}

	.avatarBox {
		position: relative;
		float: left;
		height: 100px;
		width: 100px;
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

	.user {
		position: relative;
		float: left;
	}

	.userName {
		margin-top: 20px;
		font-weight: 700;
	}

	.preview {
		margin-top: 10px;
		color: #9ea2a6;
	}

	.messageList::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 10px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 1px;
	}

	.messageList::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 10px;
		box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
		background: #cccccc;
	}

	.messageList::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		border-radius: 10px;
		background: transparent;
	}

	.pic {
		background-color: #e4e5e6;
	}
</style>
