Page({
    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    selectColor:function(){
        wx.reLaunch({
            url: '/pages/addCar/addCar',
        })
    }
})