// client/pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/icon/position.png",
      id: 0,
      latitude: 31.247619142358893,
      longitude: 119.8404084584503,
      width: 50,
      height: 50
    }]
  },
  callMe: function (event) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.phone,
    })
  },
  /**
   * 复制网店地址
   */
  clipTaobao: function () {
    wx.setClipboardData({
      data: 'https://shop478301036.taobao.com/'
    })
  },
  clip1688: function () {
    wx.setClipboardData({
      data: 'https://sanheyitu.1688.com/'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})