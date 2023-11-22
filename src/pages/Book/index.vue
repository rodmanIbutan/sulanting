<template>
	<div class="body">
		<div class="showcase"></div>
		<div class="show">
			<!-- 第一个 -->
			<div class="show-book one" @mouseover="move('one')" @mouseout="leave()" ref="one">
				<div class="book">
					<div class="img bkImg1"></div>
					<div class="message">
						<span class="title">
							bookTitle
						</span>
						<span class="content">
							bookContent
						</span>
					</div>
				</div>
			</div>
			<!-- 第二个 -->
			<div class="show-book two" @mouseover="move('two')" @mouseout="leave()" ref="two">
				<div class="book">
					<div class="img bkImg2"></div>
					<div class="message">
						<span class="title">
							bookTitle
						</span>
						<span class="content">
							bookContent
						</span>
					</div>
				</div>
			</div>
			<!-- 第三个 -->
			<div class="show-book three" @mouseover="move('three')" @mouseout="leave()" ref="three">
				<div class="book">
					<div class="img bkImg3"></div>
					<div class="message">
						<span class="title">
							bookTitle
						</span>
						<span class="content">
							bookContent
						</span>
					</div>
				</div>
			</div>
			<!-- 第四个 -->
			<div class="show-book four" @mouseover="move('four')" @mouseout="leave()" ref="four">
				<div class="book">
					<div class="img bkImg4"></div>
					<div class="message">
						<span class="title">
							bookTitle
						</span>
						<span class="content">
							bookContent
						</span>
					</div>
				</div>
			</div>
			<!-- 第五个 -->
			<div class="show-book five" @mouseover="move('five')" @mouseout="leave()" ref="five">
				<div class="book">
					<div class="img bkImg5"></div>
					<div class="message">
						<span class="title">
							bookTitle
						</span>
						<span class="content">
							bookContent
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="bookStorehouse">
			<H2>书库</H2>
			<div class="bookbox" v-for="item in articleList">
				<div class="bookCard"><BookCard :Img="item.coverImg" :title="item.bookName" :content="item.overView" :author="item.auth"></BookCard></div>
			</div>
		</div>
	</div>
	<!-- <div class="book" ><Book :Img="imgUrl"></Book></div> -->

</template>

<script>
	import utils from '../../utils';
	import BookCard from '../../components/BookCard/BookCard.vue'
	export default {
		name: '',
		components: {
			BookCard,
			
		},
		created() {
			utils.requestGet("/book/selectAllBookByPage?page=0&pageItem=20").then(res=>{
			this.articleList = res.result;
			console.log("🚀 ~ file: index.vue:100 ~ utils.requestGet ~ this.articleList:", this.articleList)
		})
		},
		data() {
			return {
				articleList:[],
				imgUrl: require('../../../public/img/test1.png'),
				imgItem: ["background-image:url('../../../public/img/test6.png')",
					"background-image:url('../../../public/img/test3.png')",
					"background-image:url('../../../public/img/test4.png')",
					"background-image:url('../../../public/img/test5.png')",
					"background-image:url('../../../public/img/test2.png')"
				]
			}
		},
		methods: {
			move(e){
				if(e=="one"){
					this.$refs.two.style.left="950px";
					this.$refs.three.style.left="1187.5px";
					this.$refs.four.style.left="1425px";
					this.$refs.five.style.left="1662.5px";
				}
				if(e=="two"){
					this.$refs.two.style.left="237.5px";
					this.$refs.three.style.left="1187.5px";
					this.$refs.four.style.left="1425px";
					this.$refs.five.style.left="1662.5px";
				}
				if(e=="three"){
					this.$refs.two.style.left="237.5px";
					this.$refs.three.style.left="475px";
					this.$refs.four.style.left="1425px";
					this.$refs.five.style.left="1662.5px";
				}
				if(e=="four"){
					this.$refs.two.style.left="237.5px";
					this.$refs.three.style.left="475px";
					this.$refs.four.style.left="712.5px";
					this.$refs.five.style.left="1662.5px";
				}
				if(e=="five"){
					this.$refs.two.style.left="237.5px";
					this.$refs.three.style.left="475px";
					this.$refs.four.style.left="712.5px";
					this.$refs.five.style.left="950px";
				}
			},
			leave(){
				this.$refs.one.style.left="0px"
				this.$refs.two.style.left='380px';
				this.$refs.three.style.left="760px";
				this.$refs.four.style.left="1140px";
				this.$refs.five.style.left="1520px";
				
			}
		}

	}
</script>

<style scoped>
	.showcase {
		width: 100%;
		height: 200px;
		background-color: #39424f;
	}
	.book {
		cursor: pointer;
		height: 100%;
		width: 100%;
		margin: 0px;
		padding: 0px;
		border: 1px solid #adb5bd;
	}

	.img {
		float: left;
		height: 100%;
		width: 40%;
		background-size: cover;
		margin: 0px;
		padding: 0px;
	}

	.bkImg1 {background-image: url('../../../public/img/test2.png')}
	.bkImg2 {background-image: url('../../../public/img/test3.png')}
	.bkImg3 {background-image: url('../../../public/img/test4.png')}
	.bkImg4 {background-image: url('../../../public/img/test5.png')}
	.bkImg5 {background-image: url('../../../public/img/test6.png')}

	.message {
		float: left;
		height: 100%;
		width: 60%;
		margin: 0px;
		padding: 0px;
		transition: 0.5s;
		background-color: antiquewhite;

	}

	.title {
		margin-top: 10%;
		margin-left: 5%;
		display: block;
		font-size: 20px;
		font-weight: 700;

	}

	.content {
		display: block;
		margin-top: 20%;
		margin-left: 5%;
		font-family: "楷体";
		overflow: hidden;
	}

	.show {
		position: relative;
		margin: 0px auto;
		height: 650px;
		width: 1900px;
		overflow: hidden;
	}

	.show-book {
		position: absolute;
		height: 100%;
		width: 950px;
	}

	.one {
		transition: 0.5s;
		z-index: 1;
	}

	.two {
		z-index: 2;
		left: 380px;
		transition: 0.5s;
	}

	.three {
		left: 760px;
		transition: 0.5s;
		z-index: 3;
		/* transform: scaleX(0); */
	}

	.four {
		left: 1140px;
		z-index: 4;
		transition: 0.5s;
	}

	.five {
		left: 1520px;
		transition: 0.5s;
		z-index: 5;
	}
	.bookStorehouse{
		width: 1400px;
		height: 1700px;
		margin: 40px auto;
	}
	.bookCard{
		float: left;
		margin: 20px 0px 0px 20px;
		height: 350px;
		width: 250px;
	}
</style>
