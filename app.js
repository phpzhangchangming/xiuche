// "pages": [
// 	"pages/serviceACarColor/serviceACarColor",//钣金喷漆
// 	"pages/serviceACar/serviceACar",//维修汽车
// 	"pages/upkeep/upkeep",			//保养汽车
// 	"pages/index/index",			//首页展示
// 	"pages/garage/garage",			//车库列表
// 	"pages/addCar/addCar",			//添加爱车
// 	"pages/selectColor/selectColor",//选择爱车的颜色
// 	"pages/selectYear/selectYear",	//选择爱车的年月款式
// 	"pages/switchCar/switchCar",	//选择汽车品牌
// 	"pages/login/login",			//登录页面
// 	"pages/user/user",				//用户详情页面
// 	"pages/repair/repair",			//tabbar维修页面
// 	"pages/stores/stores",			//4s店
// 	"pages/demo/demo"
// ],
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

	wx.getSystemInfo({
		success: res => {
			this.globalData.height = res.windowHeight;
		},
		fail(err) {
			console.log(err);
		}
	});
  },
	globalData: {
		userInfo: [],
		apiPrefix: "http://localhost:8080/api",
		height: 0,
		share: false,
		openid: 0,
		wx_url_1: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxdc4a9ab4c9365676&secret=4f520844fbbc3d132a80fa5ea4ffe79b&js_code=',
		wx_url_2: '&grant_type=authorization_code',
		url: 'http://test.api.tsingyutech.com:8088/uav/api',
		verifyCode: ''
	}
})