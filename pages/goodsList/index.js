// pages/goodsList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIdx: 2,
    // 轮播图配置
    swiperConfig: {
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    },
    imgList: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2255995795,3233541672&fm=26&gp=0.jpg'],
    // 是否选择默认
    isDefault: true,
    // 是否升序排列
    isUpOrder: true,
    // 商品类型: 1-全部/2-客房/3-餐饮/4-娱乐
    goodsType: 1, 
    // 搜索弹窗
    searchModelVisible: false
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
   * 搜索弹窗滑动
   */
  searchModelTouchMove: function(){
    return
  },
  /**
   * 显示搜索框
   */
  handleShowSearch: function(){
    this.setData({'searchModelVisible': true})
  },
  /**
   * 关闭搜索框
   */
  handleCloseSearch: function(){
    this.setData({'searchModelVisible': false})
  },
  /**
   * 默认/热卖切换
   */
  handleSort: function(e){
    let that = this;
    if(e.currentTarget.dataset.type === 1){
      that.setData({'isDefault': true})
    }else if(e.currentTarget.dataset.type === 2){
      that.setData({'isDefault': false})
    }
  },
  /**
   * 价格排序
   */
  handlePrice: function(){
    let that = this;
    that.setData({'isUpOrder': !that.data.isUpOrder})
  },
  /**
   * 商品类型切换
   */
  handleTypeChange: function(e){
    let that = this
    that.setData({'goodsType': e.currentTarget.dataset.type})
  },
  /**
   * 详情页
   */
  toDetail: function(){
    console.log('详情页')
    wx.navigateTo({
      url: '/pages/goodsDetail/index',
    })
  }
})