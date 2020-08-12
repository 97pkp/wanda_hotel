// pages/orderList/details/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowQRCode: false,
    payStatus: 0, // 0待付款   1：待使用    -1： 已取消
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
        src: '/images/meishi.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 80,
        count: 1,
        id: 101,
        num: 'ASDFGSSFFSSFDS'
      }, {
        src: '/images/shopcar.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 180,
        count: 1,
        id: 102,
        num: 'ASDFGSSFFSSFDS'
      }]
    },
    {
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
        src: '/images/meishi.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 80,
        count: 1,
        id: 101,
        num: 'ASDFGSSFFSSFDS'
      }]
    },
    ],
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
  returnMove: function(){
    return
  },
  /**
   * 复制文本
   */
  copyTxt: function(e){
    let text= e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text.toString(),
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  /**
   * 客服电话
   */
  tallKF: function(e){
    let phone = e.currentTarget.dataset.phonenum;
    console.log(phone)
    wx.makePhoneCall({
      phoneNumber: phone.toString() //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 关闭二维码
   */
  closeQR: function(e){
    this.setData({'isShowQRCode': false})
  },
  stopProp: function(){
    return
  },
  /**
   * 显示二维码
   */
  showQRCode: function(e){
    let that = this;
    that.setData({'isShowQRCode': true})
  },
  /**
   * 转赠
   */
  givePerson: function(){
    wx.navigateTo({
      url: '/pages/present/index',
    })
  },
})