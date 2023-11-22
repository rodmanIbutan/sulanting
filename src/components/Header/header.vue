<template>
	<div :class=(picClass) ref="header" id="header">
		<div class="frameLeft">
			<div class="icon">图标占位</div>
			<ul class="nav">
				<li @click="goTo('index')">
					<div class="navTitle" :class="{ 'pic': ispick == '/index' }">首页</div>
				</li>
				<li @click="goTo('diary')">
					<div class="navTitle" :class="{ 'pic': ispick == '/diary' }">种菜日记</div>
				</li>
				<li @click="goTo('season')">
					<div class="navTitle" :class="{ 'pic': ispick == '/season' }">时令种菜</div>
				</li>
				<li @click="goTo('book')">
					<div class="navTitle" :class="{ 'pic': ispick == '/book' }">书籍查阅</div>
				</li>
			</ul>
		</div>
		<div class="frame">
			<form class="serch" action="" @mouseenter="mouseEnter" @mouseleave="mouseLeave" :style="active">
				<input type="text" :style="active_btn">
				<button :style="active"><i class="iconfont icon-sousuo"></i></button>
			</form>
		</div>
		<div class="frameRight">
			<ul class="userAction">
				<li @click="goToN(`creativecenter${userId}/release`)">教程发布</li>
				<li @click="goToN('message')">消息中心</li>
				<!-- 字体图标 -->
			</ul>
			<div class="userInformation" @mouseleave="leave()" @mouseenter="enter()">
				<div class="Hp">
					<div v-if="!this.$store.state.userInf.userId" ref="Hp" class="HeadPortrait" @click="show">登录</div>
					<div v-if="this.$store.state.userInf.userId" ref="Hp" class="HeadPortrait" @click="" :style="hd"></div>
					<transition>
						<div ref="userInf" v-if="isShow">
							<div class="userInf" v-if="this.$store.state.userInf.userId">
								<div class="userName">
									{{ this.$store.state.userInf.userName }}
								</div>
								<ul class="meun">
									<li @click="goToN(`person${userId}`)">个人中心</li>
									<li @click="goToN('concern')">动态中心</li>
									<li>我的收藏</li>
									<li>历史记录</li>
									<li @click="logout()">退出登录</li>
								</ul>
							</div>
							<div class="logout" v-else>
								<div>登录后你可以：</div>
								<div class="textbox">
									<div class="text">免费看高清视频</div>
									<div class="text">同步观看记录</div>
									<div class="text">发表评论</div>
									<div class="text">热门视频</div>
								</div>
								<div class="-login" @click="show()">立即登录</div>
							</div>
						</div>
					</transition>

				</div>
			</div>
		</div>
		<Login v-if="this.$store.state.isShow"></Login>
	</div>
</template>

<script>
import Login from '@/components/Login/Login'
export default {
	components: {
		Login
	},
	name: "",
	data() {
		return {
			hd: '',
			picClass: 'header2',
			ispick: '',
			active: '',
			active_btn: '',
			isShow: false,
			userId:this.$store.state.userInf.userId
		}
	},
	created() {
		this.ispick = this.$route.path;
		if (this.ispick == "/index") {
			this.picClass = "header"
			window.addEventListener('scroll', this.scrollBottom);
		} else if (this.ispick == "/diary" || this.ispick == "/book" || this.ispick == "/season") {
			this.picClass = "header1"
			window.removeEventListener('scroll', this.scrollBottom)
		} else {
			this.picClass = "header2"
			window.removeEventListener('scroll', this.scrollBottom)
			window.removeEventListener('scroll', this.scrollBottom1)
		}
		if (this.$store.state.isLogin) {
			this.hd = "background:" + this.$store.state.profilePhoto + ";"
		}
	},

	watch: {
		'$route': 'getPath'
	},

	destroyed() {
		window.removeEventListener('scroll', this.scrollBottom);
		window.removeEventListener('scroll', this.scrollBottom1)//页面离开后销毁监听事件
	},

	methods: {
		getPath() {
			if (this.ispick == "/index") {
				this.picClass = "header"
				window.removeEventListener('scroll', this.scrollBottom1)
				window.addEventListener('scroll', this.scrollBottom);
			} else if (this.ispick == "/diary" || this.ispick == "/book" || this.ispick == "/season") {
				this.picClass = "header"
				window.removeEventListener('scroll', this.scrollBottom)
				window.addEventListener('scroll', this.scrollBottom1);
			} else {
				this.ispick = "2"
				window.removeEventListener('scroll', this.scrollBottom1)
				window.removeEventListener('scroll', this.scrollBottom)
			}
		},
		goTo(e) {
			let liPath = '/' + e
			if (this.$route.path != liPath) {
				this.$router.push(liPath)
				this.ispick = liPath
			}
		},
		goToN(e) {
			let liPath = '/' + e
			let routeUrl = this.$router.resolve({
				path: liPath,
			});
			window.open(routeUrl.href, '_blank');
		},
		mouseEnter() {
			this.active = "background-color: #e7e7e7;"
			this.active_btn = "background-color: #e1e1e1;"
		},
		mouseLeave() {
			this.active = ""
			this.active_btn = ""
		},
		Focus() {
			this.active_btn = "background-color: #e1e1e1;"
		},
		scrollBottom() {
			let scrollTop = document.documentElement.scrollTop;
			if (scrollTop >= 500) {

				this.picClass = "header2"
			}
			if (scrollTop < 500) {
				this.picClass = "header"
			}
		},
		scrollBottom1() {
			let scrollTop = document.documentElement.scrollTop;
			if (scrollTop >= 100) {

				this.picClass = "header2"
			}
			if (scrollTop < 100) {
				this.picClass = "header1"
			}
		},
		show() {
			this.$store.commit("setShow", true)
		},
		enter() {
			this.isShow = true;
			if (this.$store.state.userInf.userId) {
				this.$refs.Hp.classList.add("hpAn")
			}


		},
		leave() {
			this.isShow = false;
			if (this.$store.state.userInf.userId) {
				this.$refs.Hp.classList.add("hpAnN")
				setTimeout(() => {
					this.$refs.Hp.classList.remove("hpAn")
					this.$refs.Hp.classList.remove("hpAnN")
				}, 300);
			}

			// 

		},
		logout() {
			localStorage.clear();
			setTimeout(() => {
				location.reload()
			}, 500);
			
		}
	}
}
</script>

<style scoped>
#header {
	width: 100%;
}

.header {
	width: 100%;
	height: 80px;
	min-width: 1500px;
	/* border-bottom: 3px solid #f7f7f7; */
	/* 	background: rgba(57, 66, 79, 0.5); */
	/* border: solid 1px transparent; */
	line-height: 70px;
	transition: 0.3s;
	background: linear-gradient(to bottom, #39424f, transparent);
	color: #FFF;
}

.header1 {
	width: 100%;
	height: 80px;
	min-width: 1500px;
	line-height: 70px;
	transition: 0.3s;
	background: #39424f;
	color: #fff;
}

.header2 {
	width: 100%;
	height: 80px;
	min-width: 1500px;
	line-height: 70px;
	transition: 0.3s;
	background: #fcfcfc;
	box-shadow: 0px 0px 20px 5px #ebeef5;
	color: black;
}

.icon {
	margin-top: 10px;
	float: left;
	cursor: pointer;

}

.nav {
	float: left;
	/* margin-left: 3%; */
	width: 80%;
}

.nav>li {
	float: left;
	cursor: pointer;
	width: 75px;
	padding: 0px 2%;
	text-align: center;
	transition: 0.1s;
}

.navTitle {
	/* float: left; */
	cursor: pointer;
	/* width: 80%; */
	height: 100%;
	text-align: center;
	transition: 0.4s;
	font-size: 16px;
}

.pic {
	color: #68945c;
	border-bottom: 2px #68945c solid;
	font-size: 18px;
}

.nav>li:hover .navTitle {
	color: #68945c;
	border-bottom: 2px #68945c solid;
	font-size: 18px;
	transition: 0.3s;
}

.frameLeft {
	float: left;
	width: 35%;
}

.frame {
	float: left;
	height: 100%;
	width: 30%;
}

.frameRight {
	float: right;
	width: 35%;
}

.serch {
	width: 350px;
	height: 40px;
	margin: auto;
	/* margin-left: 10%; */
	margin-top: 15px;
	background-color: #e1e1e1;
	border-radius: 10px;
}

.serch input {
	float: left;
	margin-top: 5px;
	margin-left: 5px;
	height: 30px;
	width: 300px;
	border-radius: 10px;
	border: none;
	background-color: #e1e1e1;
	outline: none;
}

.serch button {
	float: left;
	border: none;
	margin-top: 5px;
	margin-left: 5px;
	background-color: #e1e1e1;
	width: 35px;
	height: 30px;
}

.serch button:hover {
	cursor: pointer;
}

.user {
	float: right;
}

.userAction {
	float: right;
}

.userAction>li {
	float: right;
	width: 80px;
	cursor: pointer;
	/* padding: 0px 10px; */
	text-align: center;
	transition: 0.3s;
	margin-right: 20px;
}

.userAction>li:hover {
	color: #b1d0d5;
	font-size: 20px;
}

.userInformation {
	position: absolute;
	top: 10%;
	right: 15%;
	height: 100px;
	width: 100px;
	margin-top: 10px;
	line-height: 50px;
	text-align: center;
}

.Hp {
	margin: auto;
	height: 60px;
	width: 60px;
}

.hpAn {
	animation: hp 0.3s ease normal forwards;
}

.hpAnN {
	animation: hpN 0.3s ease normal forwards;
}

.HeadPortrait {
	position: relative;
	cursor: pointer;
	margin: auto;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: #68945c solid 1px;
	overflow: hidden;
	transition: 0.3s;
	z-index: 10;
}

/* .HeadPortrait:hover{
	transform: scale(1.5);
} */


.userInf {
	position: relative;
	left: -120px;
	top: 10px;
	width: 300px;
	height: 400px;
	background-color: #FFF;
	color: #000;
	border-radius: 10px;
	border: 1px solid #e3e5e7;

}

.userInf>ul {
	margin-top: 50px;
}

.meun>li {
	cursor: pointer;
	display: block;
	width: 70%;
	height: 50px;
	margin: auto;
	line-height: 50px;
	border-radius: 20px;
	transition: 0.3s;
}

.meun>li:hover {
	background-color: #e3e5e7;
	transition: 0.2s;
}

.userName {
	margin-top: 30px;
	height: 50px;
	width: 100%;
	text-align: center;
	overflow: hidden;
	line-height: 50px;
	font-size: 20px;
}


@keyframes show {
	0% {
		opacity: 0;
		top: 5px;
	}

	100% {
		opacity: 1;
		top: 20px;
	}
}

.v-enter-active,
.v-leave-active {
	transition: all 0.3s ease;
}

.v-enter,
.v-leave-to {
	opacity: 0;
	top: 0;
}

/* .v-enter-to,.v-leave{
	opacity: 1;
	top: 20px;
} */
@keyframes hp {
	0% {
		transform: scale(1);
		top: 0px;
	}

	100% {
		transform: scale(1.5);
		top: 20px;
	}
}

@keyframes hpN {
	100% {
		transform: scale(1);
		top: 0px;
	}

	0% {
		transform: scale(1.5);
		top: 20px;
	}
}

.logout {
	position: relative;
	left: -120px;
	top: 5px;
	width: 300px;
	height: 250px;
	background-color: #FFF;
	color: #000;
	border-radius: 10px;
	border: 1px solid #e3e5e7;

}
.textbox{
	height: 100px;
}
.text{
	float: left;
	width: 120px;
	margin-left: 20px;

}
.-login{
	cursor: pointer;
	width: 80%;
	height: 40px;
	margin: auto;
	margin-top: 10px;
	border-radius: 5px;
	background-color: #00aeec;
	color: #fff;
	text-align: center;
	line-height: 40px;
}
</style>
