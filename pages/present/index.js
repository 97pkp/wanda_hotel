// pages/present/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否显示赠送弹窗
    isGive: false,
    hotelList: [
      {
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        src: '/images/meishi.jpg',
        name: '库尔勒万达锦华酒店',
        startTime: '2020.05.01',
        endTime: '2020.09.30',
        moneny: 100,
        discounts: 400,
        num: 'ASDFGSSFFSSFDS',
        count: 1,
      }
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
   * 送给朋友
   */
  giveFriend: function(e){
    this.setData({'isGive': true})
  },
  /**
   * 取消
   */
  handelCancel: function(){
    this.setData({'isGive': false})
  },
  /**
   * 立即赠送
   */
  handleGive: function(){
    
  }
})