<template>
	<div id="body">
		<!-- v-show="this.$route.path !== '/login'" -->
		<Header  id="header" ref="cont"></Header>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<!-- <Foot id="foot"></Foot> -->
	</div>
</template>

<script>
	import Header from './components/Header/header.vue'
	import Card from './components/Card/Card.vue'
	import Chart from './components/Chart/Chart.vue'
	import Book from './components/Book/Book.vue'
	import Foot from './components/Foot/Foot.vue'
	export default {
		name: '',
		components: {
			Header,
			Foot,
			Card,
			Chart,
			Book
		},	
		data() {
			return{
			}
		},
		
		
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}

	#body {
		margin: 0;
		padding: 0;
		overflow: hidden;
		width: 100%;
		min-width: 1500px;
		height: 100%;
	}

	#header {
		position: fixed;
		z-index: 15;
		top: 0;
		left: 0;
		/* background: #fcfcfc; */
		width: 100%;
		/* height: 100px; */
	}

	.fade-enter-active,
	.fade-leave-avtive {
		transition: opacity 0.5s
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
</style>
