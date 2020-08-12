// pages/city/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUse: false,
    showDialog: false,
    title: '券名',
    num: 'xxxxxxxxxxxx',
    discountslist: [{
      name:'通用券 | 全场通用',
      startTime:'2020.05.01',
      endTime:'2020.09.30',
      moneny:80,
      discounts: 300,
      num: 'ASDFGSSFFSSFDS',
      isUse: true
    },{
        name: '同用券 | 全场通用',
        startTime: '2020.05.01',
        endTime: '2020.09.30',
        moneny: 80,
        discounts: 300,
        num: 'ASDFGSSFFSSFDS',
        isUse: true
    },{
      name: '店铺券 | 北京万达文华酒店',
      startTime: '2020.05.01',
      endTime: '2020.09.30',
      moneny: 80,
      discounts: 300,
      num: 'ASDFGSSFFSSFDS',
      isUse: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  isUse(e){
    this.setData({
      isUse: e.currentTarget.dataset.value
    })
  },
  showDialog(e) {
      this.setData({
        showDialog: true,
        title: e.currentTarget.dataset.title,
        num: e.currentTarget.dataset.num
      })
  },
  hideModal() {
    this.setData({
      showDialog:false
    })
  },
  receive(){
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 2000//持续的时间
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