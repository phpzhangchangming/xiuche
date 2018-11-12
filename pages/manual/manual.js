var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({
    data: {
        active:0,
        detailTopWidth:15*100,
        scrollTrue:true,
        toView: 'red',
        scrollTop: 100
    },
    onLoad: function (options) {

    },
    bindChange:function(e){
        let active = e.currentTarget.dataset.index;
        this.setData({ active:active });
    },
    upper: function (e) {
        console.log(e)
    },
    lower: function (e) {
        console.log(e)
    },
    scroll: function (e) {
        console.log(e)
    },
    tap: function (e) {
        for (var i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1]
                })
                break
            }
        }
    },
    tapMove: function (e) {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        })
    }

})