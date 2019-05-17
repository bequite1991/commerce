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
      authOpened: false
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;
    defaultStore.getMineDetail();
    const u = wx.getStorageSync("_TY_U");
    if(!u){
      this.checkAuth();
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mine/${url}`
    });
  }

  goMineShare(){
    Taro.navigateTo({
      url: `/pages/mineShare/index`
    });
  }

  checkAuth() {
    const t=this;
    login(t, ()=>{
      // Taro.startPullDownRefresh({});
      Taro.navigateTo({
        url: `/pages/mine/index`
      });
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
    let {formData,sexOpen,positionsArr} = this.state;

    return (
      <View className='memberDetail'>
        <View className="memberBase" onClick={this.goPage.bind(this,"personalDetails")}>
          <View className="photo">
            <Image src={mine_userinfo.photo} />
          </View>
          <View className="info">
            <View className="name">{mine_userinfo.name}</View>
            <View className="position">{mine_userinfo.position}</View>
            <View className="company">公司名称：{mine_userinfo.company}</View>
            <View className="phone">联系方式：{mine_userinfo.phone}</View>
          </View>
        </View>
        <AtList className="list">
          <AtListItem
            title='企业资料'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={this.goPage.bind(this,"enterpriseData")}

          />
          {/*<AtListItem*/}
            {/*title='我的助理'*/}
            {/*arrow='right'*/}
            {/*thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'*/}
            {/*onClick={this.goPage.bind(this,"assistant")}*/}
          {/*/>*/}
          <AtListItem
            title='我的消息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"message")}
          />
          <AtListItem
            title='我的积分'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"score")}
          />
          <AtListItem
            title='我的活动'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"myActivitys")}
          />
          <AtListItem
            title='联系我们'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"contact")}
          />
          <AtListItem
            title='设置'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goPage.bind(this,"setting")}
          />

          <AtListItem
            title='我的分享'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            onClick={this.goMineShare.bind(this)}
          />
        </AtList>

        <BottomBar active={3}/>

        <AtActionSheet isOpened={this.state.authOpened} cancelText='取消' title='获取你的昵称、头像、地区及性别'>
          <AtActionSheetItem>
            <Button openType="getUserInfo" lang="zh_CN" onGetUserInfo={this.handleAuth} type='primary'>
              确认
            </Button>
          </AtActionSheetItem>
        </AtActionSheet>

      </View>
    )
  }
}

export default Index
