import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import defaultStore from './store/default.js'

import './app.scss'

import { AtFab } from 'taro-ui';

import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  defaultStore
}

class App extends Component {

  config = {
    pages: [
      'pages/activityInformationDetail/appliedFail',
      'pages/activityInformationDetail/appliedSuccess',
      'pages/activityInformationDetail/appliedConfirm',
      'pages/activityInformationDetail/messageDetail',
      'pages/index/index',
      'pages/activityInformationDetail/applied',
      'pages/activityInformationDetail/index',
      'pages/activityInformationDetail/message',
      'pages/mine/contact',
      'pages/mine/message',
      'pages/mine/assistant',
      'pages/mine/personalDetails',
      'pages/mine/enterpriseData',
      'pages/mine/index',
      'pages/mine/activitys',
      'pages/mine/score',
      'pages/mine/setting',
      'pages/wisdomMemberDetail/index',
      'pages/organizationRegister/index',
      'pages/organizationRegister/submitSuccess',
      'pages/organization/index',
      'pages/organizationDetail/index',
      'pages/connection/index',
      'pages/wisdom/index',
      'pages/connectionSearch/index',
      'pages/internationalRelations/index',
      'pages/activityInformation/index',
      'pages/governmentCounsel/index',
      'pages/governmentDocking/index',
      'pages/directTrain/index',
      'pages/directTrainDetail/index',
      'pages/commerceIntroduce/index',
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
