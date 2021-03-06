// pages/hotel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIdx: 0,
    // 轮播图配置
    swiperConfig: {
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    },
    imgList: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2255995795,3233541672&fm=26&gp=0.jpg','../../images/img.png'],
    optionBtnImg: [
      {url: '../../images/kfyd.png', name: '客房预订'},
      {url: '../../images/cyyd.png', name: '餐饮预订'},
      {url: '../../images/ktyl.png', name: '康体娱乐'},
      {url: '../../images/xyfw.png', name: '洗衣服务'},
      {url: '../../images/present.png', name: '伴手礼'}
    ],
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
})