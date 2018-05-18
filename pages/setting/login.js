// pages/setting/login.js
Page({
  data: {
    array: ['学生', '教师', '游客']
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  login: function() {
    
  }
 
})