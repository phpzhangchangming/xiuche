Page({
    data: {
        saCurrentMax: 2,
        saCurrent: 0,
        saList: [1, 2, 3],
        plantCurrentMax: 2,
        plantCurrent: 0,
        plantList:[1,2,3]
    },
    onLoad: function (options) {

    },
    bindPrev: function (e) {
        if (e.currentTarget.dataset.index == 'sa') {
            let n = this.data.saCurrent == 0 ? 0 : this.data.saCurrent - 1;
            this.setData({ saCurrent: n });
        } else {
            let n = this.data.plantCurrent == 0 ? 0 : this.data.plantCurrent - 1;
            this.setData({ plantCurrent: n })
        }
    },
    bindNext: function (e) {
        if (e.currentTarget.dataset.index == 'sa') {
            let n = this.data.saCurrent == this.data.saCurrentMax ? this.data.saCurrentMax : this.data.saCurrent + 1;
            this.setData({ saCurrent: n });
        } else {
            let n = this.data.plantCurrent == this.data.plantCurrentMax ? this.data.plantCurrentMax : this.data.plantCurrent + 1;
            this.setData({ plantCurrent: n })
        }
    },
    swiperChange: function (e) {
        let current = e.detail.current;
        if(e.currentTarget.dataset.index == 'sa'){
            this.setData({saCurrent: current});
        }else{
            this.setData({plantCurrent: current});
        }
    }
})