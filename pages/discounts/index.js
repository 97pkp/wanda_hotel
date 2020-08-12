// pages/discounts/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIdx: 1,
    bannerImg: '../../images/img.png',
    switchStatus: true,
    tapStatus: true,
    discountsList: [{
      money: 50,
      moneyNum: 100,
      startTime:'2020.01.01',
      endTime:'2020.06.30'
    },{
        money: 50,
        moneyNum: 100,
        startTime: '2020.01.01',
        endTime: '2020.06.30'
    },{
        money: 50,
        moneyNum: 100,
        startTime: '2020.01.01',
        endTime: '2020.06.30'
    },{
        money: 50,
        moneyNum: 100,
        startTime: '2020.01.01',
        endTime: '2020.06.30'
    }, {
        money: 50,
        moneyNum: 100,
        startTime: '2020.01.01',
        endTime: '2020.06.30'
    }],
    secondKillList:[{
      imgSrc:'../../images/img.png',
      info:'花式早餐承包你一周的幸福胃',
      stock:70,
      money:'1,25',
      failMoney:'1,800',
      time: 1596580200
    }, {
      imgSrc: '../../images/img.png',
      info: '花式早餐承包你一周的幸福胃',
      stock: 65,
      money: '1,25',
      failMoney: '1,800',
      time: 1596580200
    }, {
      imgSrc: '../../images/img.png',
      info: '花式早餐承包你一周的幸福胃',
      stock: 87,
      money: '1,25',
      failMoney: '1,800',
      time: 1596580200
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  switchChange(e){
    this.setData({
      switchStatus: e.currentTarget.dataset.value
    })
  },
  tapChange(event){
    this.setData({
      tapStatus: event.currentTarget.dataset.value
    })
  },
  goList() {
    wx.navigateTo({
      url: 'discountslist/index'
    })
  },
  goShop(e) {
    let type = 1
    if (this.data.tapStatus){
      type = this.data.switchStatus? 0 : 2
    }else{
      type = 1
    }
    wx.navigateTo({
      url: `/pages/buyNow/index?type=${type}`
    })
  },
  goDetails(e) {
    let type = this.data.switchStatus ? 0 : 2
    wx.navigateTo({
      url: `/pages/goodsDetail/index?type=${type}`
    })
  },
  receive() {
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