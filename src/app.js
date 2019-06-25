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
      'pages/activityInformationDetail/appliedConfirm',
      'pages/largeProjects/index',
      'pages/registerCompany/index',
      'pages/activityInformation/index',

      'pages/activityInformation/createOrEdit',
      'pages/activityInformation/editor',
      'pages/activityInformation/mineActivitys',


      'pages/directTrain/index',
      'pages/directTrainDetail/index',
      
      'pages/mineShare/index',
      'pages/mineShare/personalDetails',
      'pages/mineShare/editor',
      'pages/mineShare/messageSystem',
      'pages/mineShare/messageComment',
      'pages/mineShare/messageReply',
      'pages/mineShare/settingPhoneChange',
      'pages/mineShare/settingPhoneChangeMsg',
      'pages/mineShare/settingPhone',
      'pages/mineShare/settingPrivacy',
      'pages/mineShare/setting',
      'pages/mineShare/scoreDetail',
      'pages/mineShare/score',
      'pages/mineShare/myActivitys',
      'pages/mineShare/contact',
      'pages/mineShare/message',
      'pages/mineShare/assistant',
      'pages/mineShare/enterpriseData',
      'pages/mineShare/activitys',
      'pages/bindPhone/index',

      'pages/mine/index',
      'pages/mine/personalDetails',
      'pages/mine/editor',
      'pages/mine/messageSystem',
      'pages/mine/messageComment',
      'pages/mine/messageReply',
      'pages/mine/settingPhoneChange',
      'pages/mine/settingPhoneChangeMsg',
      'pages/mine/settingPhone',
      'pages/mine/settingPrivacy',
      'pages/mine/setting',
      'pages/mine/scoreDetail',
      'pages/mine/score',
      'pages/mine/myActivitys',
      'pages/mine/contact',
      'pages/mine/message',
      'pages/mine/assistant',
      'pages/mine/enterpriseData',
      'pages/mine/activitys',
      'pages/mine/messageAuditJoinOrg',

      'pages/activityInformation/indexTheme',
      'pages/activityInformationDetail/appliedFail',
      'pages/activityInformationDetail/appliedSuccess',
      'pages/activityInformationDetail/messageDetail',
      'pages/activityInformationDetail/applied',
      'pages/activityInformationDetail/index',
      'pages/activityInformationDetail/message',
      'pages/wisdomMemberDetail/index',
      'pages/organizationRegister/index',
      'pages/organizationRegister/submitSuccess',
      'pages/organization/index',
      'pages/organization/createOrEdit',
      'pages/organization/editor',
      'pages/organization/mineOrg',


      'pages/secretary/index',
      'pages/secretary/createOrEdit',
      'pages/secretary/auditActivitys',
      'pages/secretary/auditOrgs',
      'pages/secretary/editor',
      'pages/secretary/auditDetail',




      'pages/organizationDetail/index',
      'pages/connection/index',
      'pages/wisdom/index',
      'pages/connectionSearch/index',
      'pages/internationalRelations/index',
      'pages/governmentCounsel/index',
      'pages/governmentDocking/index',
      'pages/joinUs/index',
      'pages/joinUs/ruler',

      'pages/commerceIntroduce/index',
      'pages/commerceIntroduce/activitys',
      'pages/commerceIntroduce/partner',
      'pages/commerceIntroduce/introduce',



      'pages/error/building',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    },
    tabBar: {    //  
      color: '#2E2E35',
      selectedColor: '#003A80',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/index',
        selectedIconPath: './public/images/tabsIcon/index1.png',
        iconPath: './public/images/tabsIcon/index0.png',
        text: '首页'
      },{
        pagePath: 'pages/organization/index',
        selectedIconPath: './public/images/tabsIcon/zuzhi1.png',
        iconPath: './public/images/tabsIcon/zuzhi0.png',
        text: '组织'
      },{
        pagePath: 'pages/connection/index',
        selectedIconPath: './public/images/tabsIcon/connect1.png',
        iconPath: './public/images/tabsIcon/connect0.png',
        text: '人脉'
      },{
        pagePath: 'pages/mine/index',
        selectedIconPath: './public/images/tabsIcon/me1.png',
        iconPath: './public/images/tabsIcon/me0.png',
        text: '我'
      }]
    }
  }

  componentDidMount () {
    // store.defaultStore.getMailCount();
  }

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
