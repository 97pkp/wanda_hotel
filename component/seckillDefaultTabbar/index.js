// component/seckillDefaultTabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start: {
      type: Number,
      value: 1
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 酒店
     */
    handleHotel: function(){
      this.triggerEvent('handlehotel')
    },
    /**
     * 订单
     */
    handleOrder: function(){
      this.triggerEvent('handleorder')
    },
    /**
     * 购物车
     */
    handleBuyCar: function(){
      this.triggerEvent('handlebuycar')
    },
    /**
     * 立即购买
     */
    toBuy: function(){
      if(this.data.start === 0) return
      this.triggerEvent('tobuy')
    }
  }
})
