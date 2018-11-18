var event = require('../../utils/event')
var app = getApp()

Page({
  data: {
    head: {
      currentCity: '',
      placestr: '找影院'
    },
    theater: []
  },
  onLoad: function () {
    var that = this;
    this.setData({
      'head.currentCity': app.globalData.currentCity
    })
    wx.request({
      url: 'http://140.143.209.130:9999/data/cityTheater?city=武汉',
      success: function (res) {
        that.setData({
          theater: res.data.data
        })
      }
    })


  },
  onShow: function () {
    var that = this
    app.getpol(function (currentCity) {
      that.setData({
        'head.currentCity': currentCity
      })
    }
    )
  }

})
