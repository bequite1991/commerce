import request from './request';
import Taro from '@tarojs/taro'

// 显示toast弹窗
const showToast = (content = '登录失败，请稍后再试') => {
  wx.showToast({
    title: content,
    icon: 'none'
  })
}
let t = undefined;
const login = (self, callback, error) => {
  t= self;
  console.log('this.$router:', t.$router.path);

  wx.showLoading()

  request('/config/ty_c_auth_check',{
    method: 'POST'
  }).then((res) => {
    const data = res.data;
    if(!data.ok && data.code === -420){
      // 没有session 重新登录授权
      wx.login({
        success (res) {
          if (res.code) {
            // 登录成功，获取用户信息
            getUserInfo(res.code, callback, error)
          } else {
            // 否则弹窗显示，showToast需要封装
            showToast()
          }
        },
        fail () {
          showToast()
        }
      })
    }else{
      callback && callback();
      wx.hideLoading();
    }
  })

}

// 获取用户信息
const getUserInfo = (code, callback, error) => {
  wx.getUserInfo({
    // 获取成功，全局存储用户信息，开发者服务器登录
    success (res) {
      // 全局存储用户信息
      // store.commit('storeUpdateWxUser', res.userInfo)
      // wx.setStorageSync("_TY_userinfo", res.userInfo);
      console.log(res.userInfo);
      postLogin(code, res.iv, res.encryptedData, res.userInfo, callback)
    },
    // 获取失败，弹窗提示一键登录
    fail () {
      console.log('get userinfo fial ...');
      wx.hideLoading()
      // 获取用户信息失败，清楚全局存储的登录状态，弹窗提示一键登录
      // 使用token管理登录态的，清楚存储全局的token
      // 使用cookie管理登录态的，可以清楚全局登录状态管理的变量
      // store.commit('storeUpdateToken', '')
      // wx.setStorageSync("_TY_userinfo", '');
      // 获取不到用户信息，说明用户没有授权或者取消授权。弹窗提示一键登录，后续会讲
      // showLoginModal()
      error && error();//打开登录授权页
    }
  })
}

// 开发者服务端登录
const postLogin = (code, iv, encryptedData, userinfo, callback) => {
  let params = {
    code: code,
    iv: iv,
    encryptedData: encryptedData
  }
  request('/config/commerce_wx_auth',{
    data: params,
    method: 'POST',
  }).then((res) => {
    console.log('res:', res);
    let data = res.data;
    if (data.ok) {
      wx.hideLoading()
      // 登录成功，
      // 使用token管理登录态的，存储全局token，用于当做登录态判断，
      // 使用cookie管理登录态的，可以存任意变量当做已登录状态
      // store.commit('storeUpdateToken', res.data.token)
      const _openId = data.data.openId;
      wx._TY_opendid = _openId;//设置全局变量
      const u = data.data.data;
      wx.setStorageSync("_TY_U", u);// 用户信息存储在缓存中
      // TODO 判断openId是否在数据库中，或者直接后台判断返回用户信息
      let sessionId = data.data.si;
      if(sessionId){
        //设置到全局变量中,后面每次请求都cookie都带上sessionId
        wx.setStorageSync("_TY_S", sessionId);
      }
      initSession(_openId, u, userinfo, callback);
      // callback && callback()
    } else {
      showToast()
    }
  }).catch((err) => {
    showToast()
  })
}

const initSession = (openId, u, userinfo, callback) => {
  let path = t.$router.path;
  const params = t.$router.params;
  if(params && Object.keys(params) && Object.keys(params).length) {
    Object.keys(params).forEach((item, index) => {
      if(index == 0){
        path = path + '?' + item + '=' + params[item];
      }else{
        path = path + '&' + item + '=' + params[item];
      }
    })
  }
  const back = encodeURIComponent(path);

  if(u && u.telphone){
    //已绑定，继续流程
    request('/config/commerce_init_session',{
      method: 'GET',
      data: {
        weixin_id: openId,
      }
    }).then((res) => {
      callback && callback();
    })
  }else if(!u || !u.id){
    // 没有用户记录 新增一条后 跳转到绑定手机页面
    wx.setStorageSync("_TY_CurrentInfo", {
      name: userinfo.nickName,
      photo: userinfo.avatarUrl,
      gender: userinfo.gender,
      weixin_id: openId,
    });
    Taro.navigateTo({
      url: `/pages/bindPhone/index?_r=true&back=${back}`
    });



  }else{
    //初始化session
    request('/config/commerce_init_session',{
      method: 'GET',
      data: {
        weixin_id: openId,
      }
    }).then((res) => {
      const data = res.data;
      if(data.ok){
        //初始化session后，跳转到手机授权页面
        Taro.navigateTo({
          url: `/pages/bindPhone/index?back=${back}`
        })
      }
    })
  }
}


export default login;
