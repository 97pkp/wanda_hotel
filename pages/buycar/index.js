// pages/buycar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsTotal: 0,
    goodsTotalPrice: 0,
    goodsDiscountsPrice:0,
    activeIdx: 3,
    isDiscounts: false,
    isTypeShow: false,
    discountsList:[],
    shopCarList:[{
      name:'库尔勒万达锦华酒店',
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
      children:[{
        src: '../../images/meishi.jpg',
        info:'豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny:80,
        count:1,
        id: 101,
        num: 'ASDFGSSFFSSFDS'
      }, {
        src:'../../images/shopcar.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 180,
        count: 1,
        id: 102,
        num: 'ASDFGSSFFSSFDS'
      }, {
        src: '../../images/meishi.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园双人门票',
        moneny: 100,
        count: 1,
        id: 103,
        num: 'ASDFGSSVVDDFDS'
      }]
    }, {
        name: '北京万达文华酒店',
        collectInfo: '5.5-5.7满一百减10',
        discounts: null,
        children: [{
          src: '../../images/shopcar.jpg',
          info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
          moneny: 980,
          count: 1,
          id: 201
        }, {
          src: '../../images/shopcar.jpg',
          info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
          moneny: 980,
          count: 1,
          id: 202
        }]
      }],
    typeList:[{
      name:'豪华大床房'
    },{
      name:'情侣套房'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    this.disShow(this.data.shopCarList)
  },
  // 优惠券按钮显示逻辑
  disShow(data){
    let arr = data.map(item => {
      if (item.discounts && item.discounts.length>0){
        let list = item.discounts.map(items =>{
          let goodList = []
          let totalPrice = 0
          item.children.forEach(a =>{
            if(items.num == a.num){
              goodList.push(a)
            }
          })
          for (var i = 0, len = goodList.length; i < len; i++) {
            totalPrice += goodList[i].moneny*goodList[i].count
          }
          return { ...items, goodList, totalPrice}
        })
        return { ...item, discounts:list}
      }else{
        return item
      }
      
    })
    console.log(arr)
    this.setData({ shopCarList: arr})
  },
  // 设置选中状态
  // setSelectedStatus(data){
  //   let arr = this.data.shopCarList.map(item => {
  //     let selectList
  //     if(data){

  //     }else{

  //     }
  //   })
  // },
  // 商品列表选项状态发生改变
  checkboxChange(e){
    console.log(e)
  },
  // 数量减
  cut(e){
    let id = e.currentTarget.dataset.id
    let arr = this.data.shopCarList.map(item => {
      let list = []
      if (item.children) {
        list = item.children.map(items => {
          let num = null
          if (id == items.id && items.count >1) {
            num = items.count - 1
          } else {
            num = items.count
          }
          return { ...items, count: num }
        })
      }
      return { ...item, children: list }
    })
    this.disShow(arr)
  },
  // 数量加
  add(e){
    let id = e.currentTarget.dataset.id
    let arr = this.data.shopCarList.map(item => {
      let list = []
      if (item.children) {
        list = item.children.map(items => {
          let num = null
          if (id==items.id && items.count < 2) {
           num =items.count + 1
          }else{
            num = items.count
          }
          return { ...items, count:num}
        })
      }
      return { ...item, children:list }
    })
    this.disShow(arr)
    // this.setData({ shopCarList: arr})
  },
  // 类型选择弹窗显示
  showTypeChange(e){
    this.setData({
      isTypeShow:true
    })
  },
  // 关闭弹窗
  hideModal(){
    this.setData({
      isTypeShow: false
    })
  },
  showDiscounts(e) {
    this.setData({
      isDiscounts: true,
      discountsList: e.currentTarget.dataset.discounts
    })
  },
  hideDiscounts(e) {
    this.setData({
      isDiscounts: false
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