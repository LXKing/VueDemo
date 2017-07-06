<template>
	<div id="app">
		<!--
        	作者：849237567@qq.com
        	时间：2017-07-06
        	描述：启动动画
        -->
		<div class="page-swipe" id="startAnimation" v-show="showStartAnimationType">
			<mt-swipe :auto="0" :continuous="false" @change="startAnimationChange">
				<mt-swipe-item class="slide">1</mt-swipe-item>
				<mt-swipe-item class="slide">2</mt-swipe-item>
				<mt-swipe-item class="slide">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--
        	作者：849237567@qq.com
        	时间：2017-07-06
        	描述：关闭按钮
        -->
		<div id="close" v-show="showStartCloseType" @click="hideStartAnimation">
			<span>关闭</span>
		</div>
		<!--
        	作者：849237567@qq.com
        	时间：2017-07-06
        	描述：启动按钮
        -->
		<div id="start" v-show="showStartCloseType" @click="hideStartAnimation">
			<span>启动</span>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'app',
		components: {

		},
		data() {
			return {
				startAnimationCount: ''
			}
		},
		methods: {
			startAnimationChange(index) {
				this.$store.dispatch('startAnimationChange', index);
			},
			showStartAnimation() {
				this.$store.dispatch('showStartAnimation');
			},
			hideStartAnimation() {
				this.$store.dispatch('hideStartAnimation');
			},
			showStartClose() {
				this.$store.dispatch('showStartClose');
			},
			hideStartClose() {
				this.$store.dispatch('hideStartClose');
			}
		},
		mounted: function() {
			//
			this.$store.dispatch('hideStartClose');
		},
		computed: mapGetters([
			
			'startAnimationIndex',
			'showStartAnimationType',
			'showStartCloseType',
			'showHeaderType'
		]),
		watch: {
			// 深度 watcher
			startAnimationIndex: {
				handler: function(val, oldVal) {
					if(val === 2) {
						this.$store.dispatch('showStartClose');
					}else{
						this.$store.dispatch('hideStartClose');
					}
				},
				deep: true
			},
			showStartAnimationType: {
				handler: function(val, oldVal) {
					if(val == false) {
						this.$store.dispatch('hideStartClose');
					}
				},
				deep: true
			}
			
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		text-align: center;
		position: absolute;
		overflow: hidden;
	}
</style>
<style scoped>
	.page-swipe {
		position: relative;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		z-index: 999;
		text-align: center;
	}
	
	.mint-swipe {
		color: #fff;
		font-size: 30px;
		text-align: center;
	}
	
	.mint-swipe-item {
		line-height: 200px;
	}
	
	.slide {
		width: 100%;
		height: 100%;
		background-color: #0089dc;
	}
	
	#close {
		position: fixed;
		text-align: center;
		color: #000000;
		z-index: 9990;
		top: 20px;
		right: 20px;
	}
	
	#start {
		position: fixed;
		background: red;
		z-index: 9990;
		text-align: center;
		width: 40%;
		height: 30px;
		bottom: 15%;
		left: 30%;
	}
	
	span {
		line-height: 20px;
	}
</style>