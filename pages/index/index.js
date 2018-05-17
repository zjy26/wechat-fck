//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  onLoad: function () {
    this.setData({
      test:'01',
    })
  },
  toInfo:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../course/info'
    })
  },
  toLearn: function () {
    wx.navigateTo({
      url: '../course/learn'
    })
  },
  toTheory: function (e) {
    wx.navigateTo({
      url: '../course/theory'
    })
  },
  toPratice: function () {
    wx.navigateTo({
      url: '../course/pratice'
    })
  },
  toRefer: function (e) {
    wx.navigateTo({
      url: '../course/refer'
    })
  },
  toTest: function () {
    wx.navigateTo({
      url: '../course/test'
    })
  },
  toHomework: function (e) {
    wx.navigateTo({
      url: '../course/homework'
    })
  }
})
