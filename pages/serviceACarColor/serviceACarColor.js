const App = getApp();
Page({
	data: {
		currentTab: 0,
		vertical:false,
		scrollViewHeight: 300
	},
	onLoad: function (options) {
		this.setData({
			scrollViewHeight: App.globalData.height - 200 - 75
		});
	},
	//点击切换
	clickTab: function (e) {
		var that = this;
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.target.dataset.current
			})
		}
	},
	bindPart:function(){
		console.log('绑定选择的零件。');
	}
})