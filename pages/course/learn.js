// pages/course/learn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "title": "教学大纲", "desc": "教学大纲(可下载)" },
      { "title": "教学安排", "desc": "教学安排" },
      { "title": "教学大纲", "desc": "教学大纲" },
      { "title": "教学安排", "desc": "教学安排" },
      { "title": "教学大纲", "desc": "教学大纲" },
      { "title": "教学安排", "desc": "教学安排" }
    ]
  
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
  
  },
  down_file: function() {
    wx.downloadFile({
      url: '', //下载资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
  }

})