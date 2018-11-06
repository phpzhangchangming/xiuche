// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      awaitAll: 'optFor',
      awaitPayment: '',
      awaitService: '',
      awaitAppraise: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //全部
    awaitAll: function () {
        this.setData({
            awaitAll: 'optFor',
            awaitPayment: '',
            awaitService: '',
            awaitAppraise: ''
        });
    },
    //代付款
    awaitPayment: function () {
        this.setData({
            awaitAll: '',
            awaitPayment: 'optFor',
            awaitService: '',
            awaitAppraise: ''
        });
    },
    //服务中
    awaitService: function () {
        this.setData({
            awaitAll: '',
            awaitPayment: '',
            awaitService: 'optFor',
            awaitAppraise: ''
        });
    },
    //待评价
    awaitAppraise: function () {
        this.setData({
            awaitAll: '',
            awaitPayment: '',
            awaitService: '',
            awaitAppraise: 'optFor'
        });
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})