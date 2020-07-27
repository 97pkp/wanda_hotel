// pages/buyNow/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagesType: 1,
    diaLogValue: 'coupon',
    goodsList: [{
      name: '库尔勒万达锦华酒店',
      collectInfo: null,
      discounts: [{
        name: '通用券 | 全场通用',
        startTime: '2020.05.01',
        endTime: '2020.09.30',
        moneny: 100,
        discounts: 400,
        num: 'ASDFGSSFFSSFDS'
      }, {
        name: '同用券 | 全场通用',
        startTime: '2020.05.01',
        endTime: '2020.09.30',
        moneny: 80,
        discounts: 300,
        num: 'ASDFGSSVVDDFDS'
      }],
      children: [{
        src: '../../images/meishi.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 80,
        count: 1,
        id: 101,
        num: 'ASDFGSSFFSSFDS'
      }, {
        src: '../../images/shopcar.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 180,
        count: 1,
        id: 102,
        num: 'ASDFGSSFFSSFDS'
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //type[ 0:优惠， 1：详情，购物车 ]
    console.log(options.type)
    this.initData(options)
  },
  // 页面初始化
  initData(data) {
    this.setData({
      pagesType: data.type || 1
    })
  },
  // 显示弹窗
  showDialog(e) {
    this.setData({
      diaLogValue: e.currentTarget.dataset.value
    })
  },
  // 隐藏弹窗
  hideDialog() {
    this.setData({
      diaLogValue: null
    })
  },
  // 弹窗tab切换
  tabSelect(e){
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
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

  }
})