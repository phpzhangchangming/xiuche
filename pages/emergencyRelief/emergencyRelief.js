Page({
	data: {
		changeTypeHeight: 0,
		isShowOverlay: true,
		isShowMoreVip:true
	},
	onLoad: function (options) {

	},
	bindChangeType: function () {
		this.setData({
			changeTypeHeight:600,
			isShowOverlay: false
		});
	},
	showOld: function () {
		let that = this;
		if (!this.data.isShowMoreVip){
			that.setData({ isShowOverlay: true, isShowMoreVip: true});
		}else{
			setTimeout(function () {
				that.setData({isShowOverlay: true});
			}, 500);
			that.setData({changeTypeHeight: 0});
		}
	},
	bindClose:function(){
		this.setData({ isShowMoreVip: true, isShowOverlay: true });
	},
	bindShowMoreVip:function(){
		this.setData({ isShowMoreVip: false, isShowOverlay: false });
	}
})