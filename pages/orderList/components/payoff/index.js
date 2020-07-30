// pages/orderList/compents/payoff/index.js
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
    showDel: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    del(e) {
      this.setData({
        showDel: true
      })
    },
    hideDel(e) {
      this.setData({
        showDel: false
      })
    },
    toDetails(e){
      wx.navigateTo({
        url: '/pages/orderList/details/index',
      })
    }
  }
})
