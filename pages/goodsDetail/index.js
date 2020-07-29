// pages/goodsDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

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
  }
})