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
    duration: 1000,
    proList: [
      {
        logo:'/images/logo.png',
        title: 'text1',
        desc:'aaaaaaaa',
      },{
        logo: '/images/logo.png',
        title: 'text2',
        desc: 'bbbbbbb',
      }, {
        logo: '/images/logo.png',
        title: 'text3',
        desc: 'ccccccc',
      }

    ]
  },
  onLoad: function () {
    this.setData({
      test:'01',
    })
  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
  }
})
