import Taro from '@tarojs/taro'

const API_HOST = 'http://118.25.103.49:8000';

console.log('API_HOST:',API_HOST);
export default function request(url, options) {
  if(!url.startsWith('http')){
    url = API_HOST + url;
  }
  // 获取存储的sessionId
  const cookie = wx.getStorageSync("_TY_S");
  let newOptions = { ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.header = {
      "Content-Type": "application/x-www-form-urlencoded",
      'Cookie': (cookie ? 'JSESSIONID=' + cookie : ''),
      ...newOptions.header
    }
  } else {
    newOptions.header = {
      'Content-Type': 'application/json',  // 这里是特殊处理
      'Cookie': (cookie ? 'JSESSIONID=' + cookie : ''),
      ...newOptions.header
    }
  }

  return Taro.request({url, ...newOptions})

}

