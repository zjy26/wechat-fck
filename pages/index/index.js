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
        course: '/images/course.png',
        title: '申报信息'
      },{
        course: '/images/course.png',
        title: '课程首页'
      }, {
        course: '/images/course.png',
        title: '课程导学'
      }, {
        course: '/images/course.png',
        title: '理论教学'
      }, {
        course: '/images/course.png',
        title: '实践教学'
      }, {
        course: '/images/course.png',
        title: '参考资料'
      }, {
        course: '/images/course.png',
        title: '自我测试'
      }, {
        course: '/images/course.png',
        title: '课程作业'
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
