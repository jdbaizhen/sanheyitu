import indexData from '../../data/index.js'
Page({
  data: {
    swiperImages: [],
    recommendImages: [],
    windowWidth: 0,
  },
  commodDetails: function (params) {
    var data = JSON.stringify(params.currentTarget.dataset.details)
    wx.setStorage({
      key: 'commodDetails',
      data: data,
    })
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  onLoad: function() {
    this.setData({
      swiperImages: indexData.swiperImages,
      recommendImages: indexData.recommendImages
    })
  },
  onReady: function () {
    var windowWidth = wx.getSystemInfoSync().windowWidth
    this.setData({
      windowWidth: windowWidth
    })
    wx.setStorage({
      key: 'windowWidth',
      data: windowWidth,
    })
  }
})
