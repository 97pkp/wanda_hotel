const serviceModule = {
  getHotelList: {
    url: '/admin/store/storeList',
    method: 'get'
  } 
}

const ApiSetting = { ...serviceModule
}

export default ApiSetting