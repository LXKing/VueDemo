<template>
	<!-- Swiper 引导页 -->
	<div class="GuidePage">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="http://lxking.xyz/img/12.png" alt="" /></div>
				<div class="swiper-slide"><img src="http://lxking.xyz/img/2.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="http://lxking.xyz/img/2.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="http://lxking.xyz/img/12.png" alt="" /></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		<mt-button plain class="start" v-show="showStartCloseType" @click.native="setFirstUseApp">进入首页</mt-button>
		<mt-button plain class="close" v-show="showStartCloseType" @click.native="setFirstUseApp">关闭</mt-button>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Toast } from 'mint-ui';

	export default {
		name: 'guidePage',
		data() {
			return {
				slideCount: 0,
				arrList: []
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
			setFirstUseApp() {
				localStorage.setItem("isFirstUseApp", 1);
				this.$store.dispatch('hideGuidePage');
				this.$router.push({
					path: '/home'
				})
			},
			fetchData() {
				var _this = this;
				_this.$http.get('').then(function(res) {
					_this.arrList = [];
					for(var i = 0; i < res.row.length; i++) {
						//容错机制-防止api返回null值
						if(res.row[i]) {
							_this.arrList.push(res.row[i]);
						}
					}
				}).catch(function(err) {
					Toast('获取失败！');
				})
			}
		},
		mounted: function() {
			//判断是否首次使用
			//localStorage.setItem("isFirstUseApp", 1);
			var isFirstUseApp = localStorage.getItem("isFirstUseApp");
			var _this = this;
			if(isFirstUseApp) {
				_this.$store.dispatch('hideGuidePage');
			} else {
				//获取引导页数据
				_this.fetchData();
				_this.$store.dispatch('showGuidePage');
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
				});
			}

		},
		computed: mapGetters([
			'showStartCloseType'
		]),
	}
</script>

<style scoped>
	.swiper-container {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
	}
	
	.swiper-slide {
		width: 100%;
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
	
	.start {
		width: 40%;
		height: 50px;
		z-index: 999;
		position: fixed;
		bottom: 15%;
		left: 30%;
	}
	
	.close {
		z-index: 999;
		position: fixed;
		top: 40px;
		right: 40px;
	}
</style>