const app = getApp();
const {filterText} = require('../../utils/check.js')
import apiSetting from '../../http/apiSetting.js'
import $http from '../../http/http.js'
import fileUrl from '../../http/fileServeUrl.js'

Page({
  data: {
    activeIdx: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    // 文本框值
    inputValue: '',
    // 历史查询
    searchHistory: [],
    searchHotelList: [],
    codeArr: [],
    hotelObj: {}
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
    this.setData({'searchHistory': wx.getStorageSync('searchArr' || [] )})
    this.getHotelList()
  },
  onShow() {
    this.setData({
      'inputValue': '',
      'searchHotelList': []
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
      listCur: e.target.id,
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
        listCur: that.data.codeArr[num]
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
    // let searchArr = wx.getStorageSync('searchArr') || []
    // if(this.data.inputValue === '') return
    // if(searchArr.indexOf(this.data.inputValue) === -1){
    //   searchArr.unshift(this.data.inputValue)
    // }else{
    //   searchArr.splice(searchArr.indexOf(this.data.inputValue), 1); 
    //   searchArr.unshift(this.data.inputValue)
    // }
    // if(searchArr.length>=6){
    //   searchArr.length = 6;
    // }
    // wx.setStorage({
    //   key:"searchArr",
    //   data: searchArr
    // })
    // this.setData({'searchHistory': searchArr})
    // this.setData({'searchHotelList': ['aa酒店', 'bb酒店','cc酒店']})
    this.getHotelList('search')
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
      inputValue: filterText(e.detail.value)
    })    
  },
  /**
   * 清空历史搜索
   */
  clearHistorySearch: function(){
    let that = this;
    wx.removeStorage({
      key: 'searchArr',
      success: function(res) {
        that.setData({'searchHistory': []})
      },
    })
  },
  /**
   * 点击历史
   */
  useHistorySearch: function(e){
    // this.setData({'inputValue': e.currentTarget.dataset.text})
    let item =  e.currentTarget.dataset.text
    let searchArr = wx.getStorageSync('searchArr') || []
    for(let i=0;i<searchArr.length;i++) {
      if(searchArr[i].id === item.id){
        searchArr.splice(i, 1);         
        searchArr.unshift(item)
        break
      }else {
        if(i === searchArr.length-1){
          searchArr.unshift(item)
          console.log(searchArr)
          break
        }
      }
    }
    if(searchArr.length>=6){
      searchArr.length = 6;
    }
    wx.setStorage({
      key:"searchArr",
      data: searchArr
    })
    this.setData({'searchHistory': searchArr})
    wx.navigateTo({
      url: '/pages/hotel/index',
    })
  },
  /**
   * 点击搜索酒店
   */
  searchToHotel: function(e) {
    let item = e.currentTarget.dataset.item
    let searchArr = wx.getStorageSync('searchArr') || []
    if(searchArr.length>0){
      for(let i=0;i<searchArr.length;i++) {
        if(searchArr[i].id === item.id){
          searchArr.splice(i, 1);         
          searchArr.unshift(item)
          break
        }else {
          console.log(i,searchArr.length-1)
          if(i === searchArr.length-1){
            searchArr.unshift(item)
            console.log(searchArr)
            break
          }
        }
      }
    }else{
      searchArr.unshift(item)
    }
    if(searchArr.length>=6){
      searchArr.length = 6;
    }
    wx.setStorage({
      key:"searchArr",
      data: searchArr
    })
    this.setData({'searchHistory': searchArr})
    this.setData({'searchHotelList': []})
    wx.navigateTo({
      url: '/pages/hotel/index',
    })
  },
  /**
   * 获取酒店列表
   */
  getHotelList: function(type) {
    let that = this;
    $http(apiSetting.getHotelList, {
      storeName: that.data.inputValue
    }).then((res) => {
      let list = res.data.list
      let obj = {}
      let codeArr = []
      for(let i=0;i<list.length;i++) {
        if(obj[list[i].firstLetter]) {
          obj[list[i].firstLetter].push(list[i])
        }else{
          obj[list[i].firstLetter] = []
          obj[list[i].firstLetter].push(list[i])
        }
        if(codeArr.indexOf(list[i].firstLetter)===-1) {
          codeArr.push(list[i].firstLetter)
        }
      }
      if(type === 'search') {
        this.setData({'searchHotelList': list})
      }else{
        that.setData({
          codeArr: codeArr,
          hotelObj: obj
        })
      }
    }, (error) => {
      console.log(error)
    });
  }
});