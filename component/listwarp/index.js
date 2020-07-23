// component/listwarp/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleImgUrl: {
      type: String,
      value: ''
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
     * 查看更多
     */
     toMore: function(){
       console.log(2345)
       this.triggerEvent('toMore')
     },
     /**
      * 点击商品
      */
     handleGoods: function(){
       this.triggerEvent('toDetail')
     },
  }
})
