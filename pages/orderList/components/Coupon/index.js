// pages/orderList/components/Coupon/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    couponList: [{
      name: '库尔勒万达锦华酒店',
      src: '/images/shopcar.jpg',
      info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
      collectInfo: '5.5-5.7满一百减10',
      moneny: 80,
      count: 1,
      id: 101,
      num: '2561 8956',
      person: '小妹',
      couponType: 1, // 1 已转赠 0 已使用
      couponTypeStr: '正在等待'
    }, {
        name: '库尔勒万达锦华酒店',
        src: '/images/shopcar.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 80,
        count: 1,
        id: 101,
        num: '2561 8956',
        person: '小妹',
        couponType: 1, // 1 已转赠 0 已使用
        couponTypeStr: ''
      }, {
        name: '北京万达锦华酒店',
        src: '/images/shopcar.jpg',
        info: '豪华河景单卧别墅2晚+双早+主题乐园/雪世界双人门票',
        collectInfo: '5.5-5.7满一百减10',
        moneny: 180,
        count: 1,
        id: 102,
        num: '2561 8957',
        person: '小妹',
        couponType: 0, // 1 已转赠 0 已使用
        couponTypeStr: '正在等待'
      }],
      changeValue: 'all',
      isShowQRCode: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    couponChange(e){
      this.setData({
        changeValue: e.currentTarget.dataset.value
      })
    },
    // 关闭二维码
    closeQR (e) {
      this.setData({ isShowQRCode: false })
    },
    stopProp() {
      return
    },
    //  显示二维码
    showQRCode(e) {
      this.setData({ isShowQRCode: true })
    },
    // 转赠
    givePerson() {
      wx.navigateTo({
        url: '/pages/present/index',
      })
    },
  }
})
