var app = getApp()
Page({
  data: {
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ],
    focus: true,
    winWidth: 0,
    winHeight: 0,
     // tab切换  
    currentTab: 0,
   },
  onLoad: function () {
    var that = this;
     /** 
      * 获取系统信息 
      */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
     });
   },
   /** 
      * 滑动切换tab 
      */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });

   },
   /** 
    * 点击tab切换 
    */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
         currentTab: e.target.dataset.current
      })
    }
  }  

 })