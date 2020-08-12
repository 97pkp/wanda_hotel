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
    isUpOrder: null,
    // 商品类型: 1-全部/2-客房/3-餐饮/4-娱乐
    goodsType: 1, 
    // 搜索弹窗
    searchModelVisible: false,
    // 搜索框值
    inputValue: '',
    // 搜索历史
    searchGoodsHistory: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({'searchGoodsHistory': wx.getStorageSync('searchGoods' || [] )})
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
    this.setData({'searchGoodsHistory': wx.getStorageSync('searchGoods' || [] )})
    this.setData({'searchModelVisible': true})
  },
  /**
   * 输入文本
   */
  valueChange: function(e){
    this.setData({
      inputValue:e.detail.value
    })    
  },
  /**
   * 关闭搜索框
   */
  handleCloseSearch: function(){
    let searchGoods = wx.getStorageSync('searchGoods') || []
    if(this.data.inputValue === '') {
      this.setData({'searchModelVisible': false})
      return
    }
    if(searchGoods.indexOf(this.data.inputValue) === -1){
      searchGoods.unshift(this.data.inputValue)
    }else{
      searchGoods.splice(searchGoods.indexOf(this.data.inputValue), 1); 
      searchGoods.unshift(this.data.inputValue)
    }
    if(searchGoods.length>=6){
      searchGoods.length = 6;
    }
    wx.setStorage({
      key:"searchGoods",
      data: searchGoods
    })
    this.setData({'searchModelVisible': false})
  },
  /**
   * 清空历史搜索
   */
  clearHistorySearch: function(){
    let that = this;
    wx.removeStorage({
      key: 'searchGoods',
      success: function(res) {
        that.setData({'searchGoodsHistory': []})
      },
    })
  },
  /**
   * 点击历史
   */
  useHistorySearch: function(e){
    this.setData({'inputValue': e.currentTarget.dataset.text})
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
    if(that.data.isUpOrder === null){
      that.setData({'isUpOrder': true})
    }else if(that.data.isUpOrder === true){
      that.setData({'isUpOrder': false})
    }else if(that.data.isUpOrder === false){
      that.setData({'isUpOrder': null})
    }
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
    wx.navigateTo({
      url: '/pages/goodsDetail/index',
    })
  }
})