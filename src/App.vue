<template>
	<div id="app">
		<div class="page-swipe" id="startAnimation">
			<mt-swipe :auto="0" :continuous="false" @change="handleChange">
				<mt-swipe-item class="slide">1</mt-swipe-item>
				<mt-swipe-item class="slide">2</mt-swipe-item>
				<mt-swipe-item class="slide">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {

		},
		data() {
			return {
				startAnimationCount: ''
			}
		},
		beforeCreate: function() {
//			console.group('beforeCreate 创建前状态===============》');
//			console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
//			console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
//			console.log("%c%s", "color:red", "message: " + this.message)
		},
		created: function() {
//			console.group('created 创建完毕状态===============》');
//			console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
//			console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
//			console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
		},
		beforeMount: function() {
//			console.group('beforeMount 挂载前状态===============》');
//			console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
//			console.log(this.$el);
//			console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
//			console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
		},
		mounted: function() {
			//this.startAnimationCount = this.getstartAnimationCount();			
			var aaa = $("#startAnimation");
			console.log(aaa);			
			var count = $("#startAnimation").find('mt-swipe-item').length;
			this.startAnimationCount = count;
			alert(this.startAnimationCount);
		},
		beforeUpdate: function() {
//			console.group('beforeUpdate 更新前状态===============》');
//			console.log("%c%s", "color:red", "el     : " + this.$el);
//			console.log(this.$el);
//			console.log("%c%s", "color:red", "data   : " + this.$data);
//			console.log("%c%s", "color:red", "message: " + this.message);
		},
		updated: function() {
//			console.group('updated 更新完成状态===============》');
//			console.log("%c%s", "color:red", "el     : " + this.$el);
//			console.log(this.$el);
//			console.log("%c%s", "color:red", "data   : " + this.$data);
//			console.log("%c%s", "color:red", "message: " + this.message);
		},
		beforeDestroy: function() {
//			console.group('beforeDestroy 销毁前状态===============》');
//			console.log("%c%s", "color:red", "el     : " + this.$el);
//			console.log(this.$el);
//			console.log("%c%s", "color:red", "data   : " + this.$data);
//			console.log("%c%s", "color:red", "message: " + this.message);
		},
		destroyed: function() {
//			console.group('destroyed 销毁完成状态===============》');
//			console.log("%c%s", "color:red", "el     : " + this.$el);
//			console.log(this.$el);
//			console.log("%c%s", "color:red", "data   : " + this.$data);
//			console.log("%c%s", "color:red", "message: " + this.message)
		},
		methods: {
			getstartAnimationCount() {
				var count = $("#startAnimation").find('mt-swipe-item').length;
				alert(count);
				return count;
			},
			handleChange(index) {
				alert(index);
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
		color: #FFFFFF;
		position: absolute;
		overflow: hidden;
	}
</style>
<style scoped>
	.page-swipe {
		position: absolute;
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
</style>