// const city = require('./apis/city')
import city from './apis/city'
import apiTest from './apis/test'

console.log(city)
const serviceModule = {
  ...apiTest, // 测试
  ...city, // 城市
  

}

const ApiSetting = { ...serviceModule
}

export default ApiSetting