Page({
  data: {
    des: {},
    flexed: false
  },
  onLoad: function (param) {
    var that = this;
   var title = param.title;
   var id=param.id;
    wx.request({
      url: 'http://140.143.209.130:9999/api/moviesDetail?title=' + param.title,
      data: {},
      success: function (res) {
        that.setData({
          des: res.data.data
        })
      }
    })
  },
  flex: function () {
    var that = this
    this.setData({
      flexed: !that.data.flexed
    })
  }
})