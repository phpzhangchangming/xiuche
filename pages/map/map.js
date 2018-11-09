const App = getApp();
Page({
	data: {
		mapHeight:0
	},
	onLoad: function (options) {
		this.setData({ mapHeight: App.globalData.height });
	},

})