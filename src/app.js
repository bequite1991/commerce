import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import defaultStore from './store/default.js'

import './app.scss'

import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  defaultStore
}

// "http://ty-storage.oss-cn-hangzhou.aliyuncs.com/457de538b81666d1e94e43d2e0d4d0cd.png"
//"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/4332309ca696289d725eab37f8751870.png"
//"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/1003e1fd3c24255ce652482f17eff562.png"


class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/commerceIntroduce/index',
      'pages/activityInformationDetail/appliedConfirm',
      'pages/largeProjects/index',
      'pages/registerCompany/index',
      'pages/mine/personalDetails',
      'pages/mine/editor',
      'pages/mine/messageSystem',
      'pages/mine/messageComment',
      'pages/mine/messageReply',
      'pages/activityInformation/index',
      'pages/directTrain/index',
      'pages/directTrainDetail/index',
      'pages/mine/settingPhoneChange',
      'pages/mine/settingPhoneChangeMsg',
      'pages/mine/settingPhone',
      'pages/mine/settingPrivacy',
      'pages/mine/setting',
      'pages/mine/scoreDetail',
      'pages/mine/score',
      'pages/mine/myActivitys',
      'pages/activityInformationDetail/appliedFail',
      'pages/activityInformationDetail/appliedSuccess',
      'pages/activityInformationDetail/messageDetail',
      'pages/activityInformationDetail/applied',
      'pages/activityInformationDetail/index',
      'pages/activityInformationDetail/message',
      'pages/mine/contact',
      'pages/mine/message',
      'pages/mine/assistant',
      'pages/mine/enterpriseData',
      'pages/mine/index',
      'pages/mine/activitys',
      'pages/wisdomMemberDetail/index',
      'pages/organizationRegister/index',
      'pages/organizationRegister/submitSuccess',
      'pages/organization/index',
      'pages/organizationDetail/index',
      'pages/connection/index',
      'pages/wisdom/index',
      'pages/connectionSearch/index',
      'pages/internationalRelations/index',
      'pages/governmentCounsel/index',
      'pages/governmentDocking/index',
      'pages/joinUs/index',
      'pages/bindPhone/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
