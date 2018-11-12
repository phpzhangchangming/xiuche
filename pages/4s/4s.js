Page({
    data: {
        list : [1,2,3,4,5,6,7,8]
    },
    onLoad: function (options) {

    },
    bindShowDelete:function(e){
        let id = e.currentTarget.dataset.id
        console.log(id);
        wx.navigateTo({
            url: '/pages/4sDetail/4sDetail',
        })
    },
    bindMap:function(){
        wx.navigateTo({
            url: '/pages/map/map',
        })
    }
})