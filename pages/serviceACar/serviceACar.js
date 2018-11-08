const App = getApp();
Page({
	data: {
		scrollViewHeight: 321,
		winHeight: 0,
		showRightWidth: -66,
		navChooseYc: 'choose',
		navChooseGj: '',
		isShowChoose: true,
		isShowOverlay: true,
		dataList: []
	},
	onLoad: function () {
		let height = App.globalData.height;
		this.setData({
			scrollViewHeight: height - 192,
			winHeight: height,
			dataList: [{ "imageRed": "imageRed", "a": 1 }, { "a": 2 }, { "a": 3 }, { "a": 4 }, { "a": 5 }, { "a": 6 }, { "a": 7 }, { "a": 8 }, { "a": 9 }, { "a": 10 }, { "a": 11 }]
		});
	},
	selectNav: function () {
		console.log('选择国际大牌配件、原厂配件');
		let data = {};
		if (this.data.navChooseYc == 'choose') {
			data = {
				navChooseYc: '',
				navChooseGj: 'choose',
				isShowChoose: false,
			}
		} else {
			data = {
				navChooseYc: 'choose',
				navChooseGj: '',
				isShowChoose: true
			}
		}
		this.setData(data);
	},
	bindMoreDiscounts: function () {
		console.log('更多优惠');
	},
	bind4S: function () {
		console.log('选择4S店');
	},
	bindImageRed: function (e) {
		let index = e.currentTarget.dataset.index;
		let dataList = this.data.dataList;
		dataList[index].imageRed = dataList[index].imageRed == 'imageRed' ? '' : 'imageRed';
		this.setData({
			dataList: dataList
		});
	},
	bindChangePart: function () {
		this.setData({
			showRightWidth: '0',
			isShowOverlay: false
		});
	},
	showOld: function () {
		let that = this;
		setTimeout(function () {
			that.setData({
				isShowOverlay: true
			});
		}, 500);
		that.setData({
			showRightWidth: -66,
		});
	},
})