Page({
	data: {
		scrollViewHeight: 321,
		navChooseYc:'choose',
		navChooseGj:'',
		dataList:[]
	},
	onLoad: function () {
		var sysInfo = wx.getSystemInfoSync();
		var winHeight = sysInfo.windowHeight;
		this.setData({
			scrollViewHeight: winHeight-192,
			dataList: [{ "imageRed": "imageRed","a":1 }, { "a": 2 }, { "a": 3 }, { "a": 4 }, { "a": 5 }, { "a": 6 }, { "a": 7 }, { "a": 8 }, { "a": 9 }, { "a": 10 }, { "a": 11 }]
		});
	},
	selectNav:function(){
		console.log('选择国际大牌配件、原厂配件');
		let data = {};
		if (this.data.navChooseYc == 'choose'){
			data = {
				'navChooseYc': '',
				'navChooseGj': 'choose'
			}
		}else{
			data = {
				'navChooseYc': 'choose',
				'navChooseGj': ''
			}
		}
		this.setData(data);
	},
	bindMoreDiscounts:function(){
		console.log('更多优惠');
	},
	bind4S:function(){
		console.log('选择4S店');
	},
	bindImageRed:function(e){
		let index = e.currentTarget.dataset.index;
		let dataList = this.data.dataList;
		dataList[index].imageRed = dataList[index].imageRed == 'imageRed' ? '' :'imageRed';
		this.setData({
			dataList:dataList
		});
	}
})