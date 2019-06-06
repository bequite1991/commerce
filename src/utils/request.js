import Taro from '@tarojs/taro'

// const API_HOST = 'http://118.25.103.49:8000';
const API_HOST = 'https://mokelay.com';

console.log('API_HOST:',API_HOST);
export default function request(url, options) {
  if(!url.startsWith('http')){
    url = API_HOST + url;
  }
  // 获取存储的sessionId
  const cookie = Taro.getStorageSync("_TY_S");
  let newOptions = { ...options };
  newOptions.header = {
    "Content-Type": "application/x-www-form-urlencoded",
    'Cookie': (cookie ? 'JSESSIONID=' + cookie : ''),
    ...newOptions.header
  }

  return Taro.request({url, ...newOptions})

}

