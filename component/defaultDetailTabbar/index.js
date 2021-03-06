// component/defaultDetailTabbar/index.js
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
     * 加入购物车
     */
    addCar: function(){
      this.triggerEvent('addcar')
    },
    /**
     * 立即购买
     */
    toBuy: function(){
      this.triggerEvent('tobuy')
    }
  },
  
})
