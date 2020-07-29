// pages/payOk/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  /**
   * 返回首页
   */
  backHome: function(){
    wx.navigateTo({
      url: '/pages/bloc/index',
    })
  },
  /**
   * 查看订单
   */
  lookOrder: function(){
    wx.navigateTo({
      url: '/pages/orderList/index',
    })
  }
})