<template>
	<div id="body">
		<div id="left">
			<div class="list">
				<el-row class="tac">
					<el-col :span="22">
						<el-menu active-text-color="#68945c" :default-openeds="openeds" default-active="/creativecenter/release"
							class="el-menu-vertical-demo" router >
							<el-menu-item class="text" index="/creativecenter/release">
								<i class="el-icon-menu"></i>
								<span slot="title">投稿</span>
							</el-menu-item>
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item class="text" index="1-1">内容管理</el-menu-item>
									<el-menu-item class="text" index="1-2">收益数据</el-menu-item>
									<el-menu-item class="text" index="1-3">一周小结</el-menu-item>
								</el-menu-item-group>
							</el-submenu>

							<el-submenu index="3">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>数据</span>
								</template>
								<el-menu-item-group>
									<el-menu-item class="text" index="3-1">作品数据</el-menu-item>
									<el-menu-item class="text" index="3-2">评论管理</el-menu-item>
									<el-menu-item class="text" index="3-3">专栏管理</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="4">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>创作活动</span>
								</template>
								<el-menu-item-group>
									<el-menu-item class="text" index="4-1">活动列表</el-menu-item>
									<el-menu-item class="text" index="4-2">投稿管理</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-col>
				</el-row>
			</div>
		</div>
		<div id="fakeleft"></div>
		<div class="right">

			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			openeds: ['1', '3', '4']
		}
	},
}
</script>

<style scoped>
#body {
	margin-top: 80px;
}

#left {
	width: 20%;
	position: fixed;
}


span {
	font-size: 20px;
}

.text {
	font-size: 18px;
}


.right {
	width: 75%;
	height: 100%;
	margin-left: 20%;
}
</style>
