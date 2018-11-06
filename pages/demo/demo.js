var app = getApp()
Page({
    data: {
        // 图片地址
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        //是否显示面板指示点
        indicatorDots: true,
        //自动播放
        autoplay: true,
        //切换时间间隔
        interval: 2000,
        //滑动时长
        duration: 1000,
        //存放滑动视图的current
        current: 0,
        //分页标签class条件判断的值
        tabArr: {
            tabCurrentIndex: 0
        }
    },
    //事件处理函数
    //触摸分页标签触发事件
    veHandle: function (e) {
        //每个分页标签都设置了data-index,触摸触发事件获取此数值
        //用此数值替换滑动视图的current
        //用此数值替换分页标签class判断的值
        console.log(e.target.dataset.index)
        var currentIndex = e.target.dataset.index
        this.setData({
            current: currentIndex,
            "tabArr.tabCurrentIndex": currentIndex
        })
    },
    //通过滑块视图的current改变触发事件
    swiperChange: function (e) {
        //获取视图滑块当前的current
        //用此数值替换分页标签的current的值
        console.log(e.detail.current)
        var swiperCurrent = e.detail.current;
        this.setData({
            'tabArr.tabCurrentIndex': swiperCurrent
        })
    },
    onLoad: function () {
        console.log('onLoad')
    }
})