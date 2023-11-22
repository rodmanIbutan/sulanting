<template>
	<div id="app">
		<div class="video">
			<!-- <h1>将文件拖动到此处上传</h1>
			<input type="file" style="display: none;">
			<el-button class="uploadBth" @click="">上传文件</el-button> -->
			<el-upload class="el-upload-dragge" drag action="#" :http-request="upLoad()" multiple>
				<i class="el-icon-upload icon"></i>
				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
			</el-upload>
		</div>
		<div class="release">
			<form action="">
				<table>
					<tr>
						<td>
							封面&简介:
						</td>
						<td>
							<div class="cover">
								<input type="file" name="cover" style="display:none">
								+


							</div>
							<div class="abstract">
								<textarea v-model="abstract" cols="30" rows="10" autocomplete="off"
									placeholder="简介，简单介绍一下你的视频"></textarea>


							</div>
						</td>
					</tr>
					<tr>
						<td>视频标签:</td>
						<td><el-button size="default" @click="" style="margin-left:20px">+添加文章标签</el-button>
						</td>
					</tr>
					<tr>
						<td>视频合集:</td>
						<td><el-button size="default" @click="" style="margin-left:20px">+新建分类专栏</el-button></td>
					</tr>
					<tr>
						<td>视频类型:</td>
						<td><el-radio v-model="type" label="original" @change="" style="margin-left:20px">原创</el-radio>
							<el-radio v-model="type" label="Reprint" @change="">搬运</el-radio>
						</td>
					</tr>
					<tr>
						<td>发布形式:</td>
						<td>
							<el-radio v-model="Rform" label="all" @change="tipChange"
								style="margin-left:20px">所有人可见</el-radio>
							<el-radio v-model="Rform" label="me" @change="tipChange">仅我可见</el-radio>
							<el-radio v-model="Rform" label="fans" @change="tipChange">粉丝可见</el-radio>
							<el-radio v-model="Rform" label="vip" @change="tipChange">VIP可见</el-radio>
							<div class="tip">
								{{ tip }}
							</div>
						</td>
					</tr>
				</table>
				<div class="sub">
					<el-button size="default" @click="" round>保存草稿</el-button>
					<el-button type="primary" size="default" @click="" round>发布专栏</el-button>
				</div>
			</form>
		</div>
		<div class="line"></div>
		<div class="about">
			<div class="link"><el-link :underline="false" href="/index" target="_blank">sulanting</el-link></div>
			<div class="link"><el-link :underline="false" href="" target="_blank">关于我们</el-link></div>
			<div class="link"><el-link :underline="false" href="" target="_blank">帮助中心</el-link></div>
			<div class="link" style="border: none;"><el-link :underline="false" href="" target="_blank">问题反馈</el-link>
			</div>

		</div>
	</div>

</template>
<script>
export default {
	data() {
		return {
			abstract: "",
			count: 0,
			type: "original",
			Rform: "all",
			tip: "所有用户将均可访问和阅读，优质文章将会获得更高的推荐曝光",
			type: ""
		}
	},
	methods: {
		tipChange(val) {
			var tipArray = {
				all: "所有用户将均可访问和阅读，优质文章将会获得更高的推荐曝光",
				me: "仅我可见",
				fans: "粉丝可见",
				vip: "VIP可见"
			}
			this.tip = tipArray[val]
		},
		upLoad(e){
			console.log(e);
		}
	},
}
</script>
<style scoped>
#app {
	height: 100%;
	width: 100%;
}

tr {
	height: 80px;
}

.video {
	width: 800px;
	height: 400px;
	left: 0px;
	right: 0px;
	margin: auto;
	margin-top: 50px;
	border-radius: 10px;
}

h1 {
	font-size: 18px;
	display: block;
	width: 100%;
	text-align: center;
	margin-top: 100px;
	color: #636e72;

}

.uploadBth {
	position: absolute;
	left: 50%;
	margin-top: 60px;
	margin-left: -49px;
}

.el-upload-dragge /deep/ .el-upload-dragger{
	/* width: 100%;
	height: 100%; */
	width: 800px;
	height: 400px;
	
}
.icon{
	margin-top: 130px;
}

.release {
	width: 787px;
	left: 0px;
	right: 0px;
	margin: auto;
	margin-top: 80px;
	height: 550px;

}

.cover {
	cursor: pointer;
	float: left;
	margin-left: 20px;
	height: 120px;
	width: 200px;
	border: #636e72 1px dashed;
	text-align: center;
	line-height: 120px;
	font-size: 48px;
	color: #999999;
}

.abstract {
	position: relative;
	float: left;
	height: 120px;
	margin-left: 30px;
	border: #636e72 1px dashed;
}

.extract {
	position: absolute;
	color: #c1c4cd;
	right: 10px;
}

textarea {
	padding: 20px;
	resize: none;
	border: none;
	outline: none;
	height: 40px;
	width: 400px;
}

textarea::-webkit-input-placeholder {
	color: #c1c4cd;
	font-size: 16px;
}

tr:nth-child(1)>td:nth-child(2) {
	width: 700px;
}

.tip {
	margin-top: 10px;
	margin-left: 20px;
	background-color: #f5f6f7;
	width: 100%;
	height: 35px;
	line-height: 35px;
	padding-left: 10px;
}

.sub {
	height: 100px;
	float: right;
	margin-top: 20px;
}

.about {
	width: 90%;
	left: 0px;
	right: 0px;
	margin: auto;
	border-top: 1px solid #e5e9ef;
	height: 80px;
	padding: 10px;
}

.link {
	float: left;
	padding-right: 10px;
	margin-right: 10px;
	border-right: #a5adb4 1px solid;

}
</style>
<style>

</style>