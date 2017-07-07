<template>
	<!-- Swiper 引导页 -->
	<div class="GuidePage">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="http://lxking.xyz/img/12.png" alt="" /></div>
				<div class="swiper-slide"><img src="http://lxking.xyz/img/2.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="http://lxking.xyz/img/2.jpg" alt="" /></div>
				<div class="swiper-slide">
					<img src="http://lxking.xyz/img/12.png" alt="" />
				</div>
			</div>
		<a href="#" class="index" v-show="showStartCloseType" @click="setFirstUseApp">进入首页</a>
		<a href="#" class="close" v-show="showStartCloseType" @click="setFirstUseApp">关闭</a>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'guidePage',
		data() {
			return {
				slideCount: 0,
			}
		},
		methods: {
			showStartClose() {
				this.$store.dispatch('showStartClose');
			},
			hideStartClose() {
				this.$store.dispatch('hideStartClose');
			},
			//设置首次使用标识，关闭引导页并跳转
			setFirstUseApp: function(){				
				localStorage.setItem("isFirstUseApp", 1);
				this.$store.dispatch('hideGuidePage');
				
			}
		},
		mounted: function() {
			//判断是否首次使用
			//localStorage.setItem("isFirstUseApp", 1);
			var isFirstUseApp = localStorage.getItem("isFirstUseApp");
			if(!isFirstUseApp) {
				this.$store.dispatch('showGuidePage');
			} else {
				this.$store.dispatch('hideGuidePage');
			}
			var _this = this;

			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: false,
				loop: false,
				resistanceRatio: 0,
				onInit: function(swiper) {
					_this.showStartCloseType = false;
					_this.slideCount = swiper.slides.length - 1;
				},
				onSlideChangeEnd: function(swiper) {
					if(swiper.activeIndex === _this.slideCount) {
						_this.$store.dispatch('showStartClose');
					} else {
						_this.$store.dispatch('hideStartClose');
					}
				}
				//				onClick: function(swiper) {
				//					alert('你点了Swiper');
				//				},
				//				onTap: function(swiper) {
				//					alert('你tap了Swiper');
				//				},
			});
		},
		computed: mapGetters([

			'showStartCloseType'
		]),
	}
</script>

<style scoped>
	a {
		text-decoration: none;
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
		position: fixed;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 100%;
	}
	
	.index {
		z-index: 9990;
		display: inline-block;
		width: 40%;
		height: 40px;
		background: #E09136;
		line-height: 40px;
		text-decoration: none;
		position: absolute;
		bottom: 40px;
		left: 30%;
	}
	
	.close {
		z-index: 999;
		color: #fff;
		position: absolute;
		top: 18px;
		right: 20px;
	}
</style>