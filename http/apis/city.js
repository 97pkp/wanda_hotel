const apiModule = {
  /**
   * 城市列表
   */
  getHotelList: {
    url: '/admin/store/storeList',
    method: 'get'
  }
}
const apiCity = { ...apiModule }
export default apiCity