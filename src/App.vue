<template>
	<div id="app">
		<GuidePage v-show="showGuidePageType"></GuidePage>

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

			}
		},
		methods: {
			showGuidePage() {
				this.$store.dispatch('showGuidePage');
			},
			hideGuidePage() {
				this.$store.dispatch('hideGuidePage');
			},

			startAnimationChange(index) {
				this.$store.dispatch('startAnimationChange', index);
			},
			showStartAnimation() {
				this.$store.dispatch('showStartAnimation');
			},
			hideStartAnimation() {
				this.$store.dispatch('hideStartAnimation');
			},

		},
		mounted: function() {

		},
		updated: function() {

		},
		computed: mapGetters([
			'showGuidePageType',

			'showHeaderType',
			'startAnimationIndex',
			'showStartAnimationType',
			'showHeaderType'
		]),
		watch: {
			// 深度 watcher
			startAnimationIndex: {
				handler: function(val, oldVal) {
					if(val === 2) {
						this.$store.dispatch('showStartClose');
					} else {
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
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		overflow: hidden;
		/*这是底层  main*/
	}
</style>