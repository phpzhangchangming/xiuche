// pages/addCar/addCar.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        winHeight: 0,
        isShowAbbreviation:true,	//显示车牌号选项 如京津冀
        abbreviationHeihgt:0,		//显示选择区域滑块
		isShowOverlay: true,		//蒙层
		isShowNewCar: false,		//是否显示新能源汽车选项
		newCarName: '请选择是否',	 //提示语
		newEnergyHeihgt:0,			//新能源高度初始值
        date:'',
        animationAbbreviation:{},
        carNameList: ['京', '沪', '浙', '苏', '粤', '鲁', '晋', '冀', '豫', '川', '渝', '辽', '吉', '黑', '皖', '卾', '湘', '贛', '闽', '陕', '甘', '宁', '蒙', '津', '贵', '云', '贵', '琼', '青', '新', '藏','台'],
        carName:'京'
    },
    onLoad: function () {
        let sysInfo = wx.getSystemInfoSync();
        let winHeight = sysInfo.windowHeight;
        this.setData({
            winHeight:winHeight
        })
    },
    chooseArea:function(){//选择车牌号京津冀
        //保障动画效果，需要一个个更新。
        this.setData({
            isShowAbbreviation: false
        });
        this.setData({
            isShowOverlay:false,
            abbreviationHeihgt:420
        });
    },
    bindDateChange:function(e){//选择购车时间
        let date = e.detail.value;
        this.setData({date:date});
    },
    showOld: function () {//点击蒙版或者选则 京津冀 后隐藏选则区域
        let that = this;
        setTimeout(function () {
            that.setData({
                isShowOverlay: true,
                isShowAbbreviation: true
            });
        }, 500);
        that.setData({
            abbreviationHeihgt:0,
			newEnergyHeihgt: 0
        });
    },
    bindCarName:function(e){//选择京津冀滑块。
		console.log('选择京津冀滑块。');
        let carNameIndex = e.currentTarget.dataset.index
        let carName = this.data.carNameList[carNameIndex];
        console.log(carNameIndex);
        console.log(carName);
        this.setData({
            carName: carName
        });
        this.showOld();
    },
	showNewEnergy: function () {//选择是否是新能源汽车
		console.log('选择是否是新能源汽车');
		this.setData({
			isShowNewCar:false
		});
		this.setData({
			isShowOverlay: false,
			newEnergyHeihgt: 204
		});
	},
	clooseNewEnergy:function(e){//选择新能源
		console.log('选择新能源');
		let carNameIndex = e.currentTarget.dataset.energy
		this.setData({
			newCarName: carNameIndex==1?'是':'否'
		});
		console.log(carNameIndex);
		this.showOld();
	},
	formSubmit: function () {//保存爱车
		console.log('保存爱车');
		wx.navigateTo({
			url: '/pages/garage/garage',
		})
	}
})