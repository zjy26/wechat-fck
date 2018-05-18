// pages/setting/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['学生', '教师', '游客']
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  register: function() {
    
  }
})