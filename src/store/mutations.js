import * as types from './types'
import getters from './getters'

const state = {

	startAnimationIndex: 0,
	showStartAnimationType: true,
	showStartCloseType: true,
	showHeaderType: true
}

const mutations = {

	[types.STARTANIMATIONCHANGECHANGE](state, index) {
		state.startAnimationIndex = index;
	},

	[types.SHOWSTARTANIMATION](state) {
		state.showStartAnimationType = true;
	},
	[types.HIDESTARTANIMATION](state) {
		state.showStartAnimationType = false;
	},
	[types.SHOWSTARTCLOSE](state) {
		state.showStartCloseType = true;
	},
	[types.HIDESTARTCLOSE](state) {
		state.showStartCloseType = false;
	},
	[types.SHOWHEADER](state) {
		state.showHeaderType = true;
	},
	[types.HIDEHEADER](state) {
		state.showHeaderType = false;
	}
}

export default {
	state,
	mutations,
	getters
}