const app = getApp();
Page({
  data: {
    activeIdx: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    // 文本框值
    inputValue: ''
  },
  onLoad() {
    let list = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i)
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
  },
  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id],
    })
  },

  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 14);
      this.setData({
        listCur: that.data.list[num]
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  },
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 13
        })
        return false
      }
    }
  },
  /**
   * 搜索
   */
  handleSearch: function(){
    console.log('搜索');
    let searchArr = JSON.parse(wx.getStorageSync('searchArr')) || []
    console.log(searchArr)
    if(this.data.inputValue === '') return
    if(searchArr.indexOf(this.data.inputValue) === -1){
      searchArr.unshift(this.data.inputValue)
    }else{
      searchArr.splice(searchArr.indexOf(this.data.inputValue), 1); 
      searchArr.unshift(this.data.inputValue)
    }
    wx.setStorage({
      key:"searchArr",
      data: JSON.stringify(searchArr)
    })
  },
  /**
   * 查看酒店
   */
  toHotel: function(){
    wx.navigateTo({
      url: '/pages/hotel/index',
    })
  },
  /**
   * 输入文本
   */
  valueChange: function(e){
    this.setData({
      inputValue:e.detail.value
    })    
  }

});