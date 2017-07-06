import * as types from './types'

export default {

	//启动动画改变
	startAnimationChange: ({
		commit
	}, index) => {
		commit(types.STARTANIMATIONCHANGECHANGE, index);
	},

	showStartAnimation: ({
		commit
	}) => {
		commit(types.SHOWSTARTANIMATION);
	},

	hideStartAnimation: ({
		commit
	}) => {
		commit(types.HIDESTARTANIMATION);
	},

	showStartClose: ({
		commit
	}) => {
		commit(types.SHOWSTARTCLOSE);
	},

	hideStartClose: ({
		commit
	}) => {
		commit(types.HIDESTARTCLOSE);
	},

	showHeader: ({
		commit
	}) => {
		commit(types.SHOWHEADER);
	},
	hideHeader: ({
		commit
	}) => {
		commit(types.HIDEHEADER);
	}
}