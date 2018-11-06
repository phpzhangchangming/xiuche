// pages/login/login.js
Page({
  data: {
      showTime:false,
      time: 60,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
    getVerifyCode: function () {
        this.countDown();
        this.setData({ showTime: true });
        let phone = this.data.phone;
        let that = this;
        // wx.request({
        //     url: getApp().globalData.url + 'user/getVerifyCode',
        //     data: {
        //         phone: phone
        //     },
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     success: function (res) {
        //         if (res.data.result == 0) {
        //             wx.showModal({
        //                 title: '通知',
        //                 content: '获取验证码失败',
        //                 showCancel: false,
        //                 confirmText: '确定',
        //             })
        //         }
        //     }
        // })
    },
    countDown: function () {
        if (this.data.time == 0) {
            this.setData({
                time: 60,
                showTime: false
            })
        } else {
            let that = this;
            setTimeout(function () {
                that.setData({ time: that.data.time - 1 })
                that.countDown();
            }, 1000);
        }
    },
    formSubmit: function (e) {
        let phone = e.detail.value.phone;
        let verifyCode = e.detail.value.verify;
        let that = this;
        if (!verifyCode || !phone) {
            wx.showModal({
                title: '通知',
                content: '手机与验证码不匹配',
                showCancel: false,
                confirmText: '确定',
            })
            return;
        }
        wx.showLoading({
            title: '登录中...',
            mask: true
        });
        
        wx.hideLoading();

        console.log(phone);
        console.log(verifyCode);
        // wx.request({
        //     url: getApp().globalData.url + 'user/getVerifyCode',
        //     data: {
        //         phone: phone
        //     },
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     success: function (res) {
        //         if (res.data.result == 0) {
        //             wx.showModal({
        //                 title: '通知',
        //                 content: '获取验证码失败',
        //                 showCancel: false,
        //                 confirmText: '确定',
        //             })
        //         }
        //     }
        // })
    },
    bindgetphonenumber:function(e){
        console.log(e);
    }
})