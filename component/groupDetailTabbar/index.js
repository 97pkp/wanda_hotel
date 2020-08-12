// component/groupDetailTabbar/index.js
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
     * 单独购买
     */
    handleBuyOnce: function(){
      if(this.data.start===0) return
      this.triggerEvent('handlebuyonce')
    },
    /**
     * 开团购买
     */
    handleBuyGroup: function(){
      if(this.data.start===0) return
      this.triggerEvent('handlebuygroup')
    }
  },
  
})
