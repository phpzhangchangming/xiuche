var Car = require('../../utils/city.js');
var app = getApp()
Page({
    data: {
        searchLetter: [],
        showLetter: "",
        winHeight: 0,
        showRightWidth: -66,
        isShowOverlay:true,
        // showRightWidth: 0,
        // tHeight: 0,
        // bHeight: 0,
        CarList: [],
        isShowLetter: false,
        scrollTop: 0,//置顶高度
        scrollTopId: '',//置顶id
        hotCarList: [{ CarCode: 110000, Car: '北京市' }, { CarCode: 310000, Car: '上海市' }, { CarCode: 440100, Car: '广州市' }, { CarCode: 440300, Car: '深圳市' }, { CarCode: 330100, Car: '杭州市' }, { CarCode: 320100, Car: '南京市' }]
    },
    onLoad: function () {
        // 生命周期函数--监听页面加载
        var searchLetter = Car.searchLetter;
        var CarList = Car.CarList();
        var sysInfo = wx.getSystemInfoSync();
        var winHeight = sysInfo.windowHeight;
        var itemH = winHeight / searchLetter.length;
        var tempObj = [];
        for (var i = 0; i < searchLetter.length; i++) {
            var temp = {};
            temp.name = searchLetter[i];
            temp.tHeight = i * itemH;
            temp.bHeight = (i + 1) * itemH;
            tempObj.push(temp)
        }
        this.setData({
            winHeight: winHeight,
            itemH: itemH,
            searchLetter: tempObj,
            CarList: CarList
        })

    },
    clickLetter: function (e) {
        console.log(e.currentTarget.dataset.letter)
        var showLetter = e.currentTarget.dataset.letter;
        this.setData({
            showLetter: showLetter,
            isShowLetter: true,
            scrollTopId: showLetter,
        })
        var that = this;
        setTimeout(function () {
            that.setData({
                isShowLetter: false
            })
        }, 1000)
    },
    //选择汽车品牌
    bindCar: function (e) {
        console.log("bindCar");
        this.setData({
            showRightWidth: '0',
            isShowOverlay:false
        });
    },
    //点击热门城市回到顶部
    hotCar: function () {
        this.setData({
            scrollTop: 0,
        })
    },
    showOld:function(){
        let that = this;
        setTimeout(function(){
            that.setData({
                isShowOverlay: true
            });
        },500);
        that.setData({
            showRightWidth:-66,
        });
    },
    selectCar:function(){
        wx.navigateTo({
            url: '/pages/selectYear/selectYear',
        })
    }
})