// 生产地址
// const url = 'https://qmyx.coli688.com/zhwx-api'

// 测试地址
// const url = 'http://47.104.134.167:8083'
const url = 'http://47.104.134.167:8082'


let $httpServer = function(opts, data) {
  // console.log(getApp().globalData.token)
  let token = getApp().globalData.token
  let promise = new Promise(function(resolve, reject) {
    return wx.request({
      url: url + opts.url,
      data: data,
      header: {
        'content-type': 'application/json',
        // 'vx-zhwx-token': token
        'X-Litemall-Admin-Token': '82caa0cc-7f78-4e32-a009-7639d5c21e87'
      },
      method: opts.method,
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
  return promise
}

export default $httpServer