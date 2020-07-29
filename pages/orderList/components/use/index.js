// pages/orderList/components/use/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pagetype: String
  },

  /**
   * 组件的初始数据
   */
  data: {
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
    }],
    tagName:'',
    showDel: false,
    refund: false,
    refundReason: false,
    refundAgain: false,
    reason:''
  },
  attached: function () { 
    console.log(this.data.pagetype)
    this.initData()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 组件初始化
    initData(){
      let str = this.data.pagetype
      this.setData({
        tagName: str == 'use'? '待使用':'已退款'
      })
    },
    // 输入绑定原因
    inputValueChange(e) {
      this.setData({
        reason: e.detail.value
      })
    },
    // 删除
    del(e) {
      this.setData({
        showDel: true
      })
    },
    
    // 退款
    refund(e) {
      this.setData({
        refund: true
      })
    },
    // 退款原因
    refundReason(e) {
      this.setData({
        reason: '',
        refund: false,
        refundReason: true
      })
    },
    refundAgain(e) {
      this.setData({
        refundReason: false,
        refundAgain: true
      })
    },
    // 再次预定
    reserve(e) {
      wx.switchTab({
        url: '/pages/bloc/index',
      })
    },
    hideDel(e) {
      this.setData({
        showDel: false,
        refund: false,
        refundReason: false,
        refundAgain: false,
      })
    },
  }
})
