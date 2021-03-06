import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text, Swiper, SwiperItem} from '@tarojs/components';
import { AtActionSheet, AtActionSheetItem,AtIcon } from "taro-ui"
import {observer, inject} from '@tarojs/mobx';
import Banner from './banner.js';
import Logo from '../../public/images/logo@3x.png';
import Entrance from './entrance.js';
import Presidium from './presidium.js';
import Activitys from './activitys.js';
import BottomBar from '../../components/bottomBar/index.js';
import login from '../../utils/authLogin';

// import {AtFab} from 'taro-ui';

import './index.scss';

@inject ('defaultStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: 'black',
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  componentWillMount () {
    const {defaultStore} = this.props;
    defaultStore.getMailCount();
  }

  componentDidMount () {
    wx.showShareMenu();
    wx.showTabBar();    
  }

  componentWillReact () {
    console.log ('componentWillReact');

  }

  componentDidMount () {
    this.checkAuth();
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  checkAuth() {
    const t=this;
    login(t, ()=>{

    }, () => {
      //error 需要跳转登录授权
      t.setState({
        isOpened: true
      });
    });
  }

  // 授权
  handleAuth(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setState({
      isOpened: false
    });
    this.checkAuth();
  }
  goPage(url){
    // this.checkUserType();
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  render () {
    return (
      <View className="homePage">
        <Image src={Logo} className="logo" />
        <Banner />
        <Entrance />
        <Presidium />
        <Activitys />
        <AtActionSheet isOpened={this.state.isOpened} cancelText='取消' title='获取你的昵称、头像、地区及性别'>
          <AtActionSheetItem>
            <Button openType="getUserInfo" lang="zh_CN" onGetUserInfo={this.handleAuth} type='primary'>
              确认
            </Button>
          </AtActionSheetItem>
        </AtActionSheet>

        {/*<BottomBar active={0} />*/}
      </View>
    );
  }
}

export default Index;
