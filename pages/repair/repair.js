Page({
  data: {
      awaitAll: 'optFor',
      awaitPayment: '',
      awaitService: '',
      awaitAppraise: '',
  },
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
    bindOrderDetail:function(){
        console.log(1);
    }
})