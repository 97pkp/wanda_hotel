// pages/goodsDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: 0, //0：普通详情  1：拼团详情   2：秒杀详情
    // 轮播图配置
    swiperConfig: {
      indicatorDots: false,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    },
    imgList: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2255995795,3233541672&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2255995795,3233541672&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2255995795,3233541672&fm=26&gp=0.jpg'],
    // 轮播图当前位置
    current: 0,
    // 规格列表
    specificationList: [
      {name: '豪华大床', typeid: 1},
      {name: '豪华双床', typeid: 2},
      {name: '标准大床', typeid: 3},
      {name: '标准双床', typeid: 4}
    ],
    // 选中规格
    selectId: null,
    // 秒杀时间
    seckillTime: '2020-07-29 18:06:00',
    timeData: {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    },
    // 秒杀倒计时
    timer: null,
    // 购买数量
    buyNum: 1,
    // 限购数量
    maxNum: 2,
    // 订购须知&图文详情选中
    synopsisType: 1, // 1：订购须知   2：图文详情
    // 特色列表
    featureList: [
      {name: '官方直销'},
      {name: '超长有效'},
      {name: '性价比高'},
      {name: '限时抢购'},
      {name: '限时抢购'},
      {name: '限时抢购'},
      {name: '限时抢购'}
    ],
    // 要显示的特色列表
    featureShowList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    if(!that.data.timer){
      console.log(that.data.seckillTime)
      let time = new Date(that.data.seckillTime).getTime()
      that.setData({'timer': setInterval(function(){
        let nowTime = new Date().getTime()
        let times = time - nowTime
        let d = times/(24*60*60*1000)
        let _d = times%(24*60*60*1000)
        let h = _d/(60*60*1000)
        let _h = _d%(60*60*1000)
        let m = _h/(60*1000)
        let _m = _h%(60*1000)
        let s = _m/1000
        if(nowTime>time){
          clearInterval(that.data.timer)
          that.setData({
            'timer': null,
          })
          return
        }
        that.setData({
          'timeData.day': parseInt(d),
          'timeData.hour': parseInt(h),
          'timeData.minute': parseInt(m),
          'timeData.second': parseInt(s)
        })
      },1000)})
    }
    this.setData({'featureShowList': this.data.featureList.slice(0,4)})
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
  /**
   * 切换轮播图
   */
  changeSwiper: function(e){
    let that = this;
    that.setData({'current': e.detail.current})
  },
  /**
   * 更多
   */
  toMore: function(){
    wx.navigateTo({
      url: '/pages/goodsList/index',
    })
  },
  /**
   * 商品详情
   */
  toDetail: function(){
    console.log('详情页')
    wx.navigateTo({
      url: '/pages/goodsDetail/index',
    })
  },
  /**
   * 查看位置
   */
  showMap: function(){
    //打开内置地图
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        // var latitude = res.latitude
        // var longitude = res.longitude
        let latitude = 45
        let longitude = 132
        let name = '测试名称'
        let address = '测试地址'
        
        wx.openLocation({
          latitude: Number(latitude),
          longitude: Number(longitude),
          name: name,
          address: address,
          scale: 5
        })
      },
      fail: (err) => {
        wx.showToast({
          title: '请检查您的设备是否开启定位',
          icon: 'none'
        })
        console.log(err)
      }
    })
  },
  /**
   * 打电话
   */
  toTalk: function(e){
    let phone = e.currentTarget.dataset.phonenum;
    console.log(phone)
    wx.makePhoneCall({
      phoneNumber: phone.toString() //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 减少数量
   */
  cutNum: function(){
    if(this.data.buyNum <= 1){
      return
    }
    this.setData({'buyNum': --this.data.buyNum})
  },
  /**
   * 增加数量
   */
  addNum: function(){
    if(this.data.buyNum>=this.data.maxNum){
      return
    }
    this.setData({'buyNum': ++this.data.buyNum})
  },
  /**
   * 规格选择
   */
  selectSpecification: function(e){
    this.setData({'selectId': e.currentTarget.dataset.typeid})
  },
  /**
   * 订购须知切换
   */
  synopsisChange: function(e){
    this.setData({'synopsisType': e.currentTarget.dataset.type})
  },
  /**
   * 查看更多特色
   */
  showMoreFeature: function(){
    this.setData({'featureShowList': this.data.featureList})
  }
})