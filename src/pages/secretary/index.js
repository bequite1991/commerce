import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem,  AtActionSheet, AtActionSheetItem,AtIcon   } from 'taro-ui';
import Tags from "../../components/tags/index.js";
import BottomBar from '../../components/bottomBar/index.js';
import login from '../../utils/authLogin';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '我',
    navigationBarTextStyle: "black",
    enablePullDownRefresh: true
  }

  constructor (props) {
    super (props);
    this.state = {
      formData: {
        birthday:"1950-01-01"
      },
      sexOpen:false,
      selectorChecked:"男性",
      isChange:0,
      position:"会员",
      positionsArr:["名誉会长","会长","轮值主席","常务副会长","副会长","理事","会员"],
      authOpened: false,
      update:0,
      reLaunch:true
    };

  }

  componentWillMount () {
    wx.showShareMenu();
    wx.showTabBar();
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const t = this;
    const { defaultStore,defaultStore:{mine_userinfo} } = this.props;
    if(t.state.reLaunch){
      setTimeout(()=>{

        // t.setState({reLaunch:false})
        defaultStore.getMineDetail();
      },2000);
    }


    setTimeout(()=>{
      t.setState({
        update: t.state.update+1
      });
    },500);
    // const u = wx.getStorageSync("_TY_U");
    this.checkAuth();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/secretary/${url}`
    });
  }
  goUrl(url){
    Taro.navigateTo({
      url: url
    });
  }

  checkAuth() {
    const t=this;
    login(t, ()=>{
      // Taro.startPullDownRefresh({});
      // Taro.navigateTo({
      //   url: `/pages/mineShare/index`
      // });
      const { defaultStore } = this.props;
      defaultStore.getMineDetail();
      setTimeout(()=>{
        t.setState({
          update: t.state.update+1
        });
      },500);

    }, () => {
      //error 需要跳转登录授权
      t.setState({
        authOpened: true
      });
    });
  }

  // 授权
  handleAuth(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setState({
      authOpened: false
    });
    this.checkAuth();
  }

  render () {
    const { defaultStore:{mine_userinfo} } = this.props;
    let {formData,sexOpen,positionsArr,update} = this.state;
    return (
      <View className='memberDetail'>
        <AtList className="list">
          <AtListItem
            title='发起活动'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={this.goPage.bind(this,"createOrEdit")}
          />
          <AtListItem
            title='自组织审核'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"auditOrgs")}
          />
          <AtListItem
            title='自组织活动审核'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"auditActivitys")}
          />
        </AtList>

      </View>
    )
  }
}

export default Index
