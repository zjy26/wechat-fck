// pages/mine/mine.js
const app = getApp()

Page({
  data: {
    balance: 0,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0
  },
  onLoad() {

  },
  onShow() {
    this.getUserInfo();
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  },
  aboutUs: function () {
    wx.showModal({
      title: '关于我们',
      content: '哈哈哈哈哈哈啊哈',
      showCancel: false
    })
  },
  
  login: function() {
      wx.navigateTo({
        url: '../setting/login'
      })
  },
  register: function () {
    wx.navigateTo({
      url: '../setting/register'
    })
  }

})