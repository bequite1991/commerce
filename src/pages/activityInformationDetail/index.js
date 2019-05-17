import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton,  AtActionSheet, AtActionSheetItem  } from 'taro-ui';

import './index.scss';
import login from "../../utils/authLogin";


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '活动详情',
    navigationBarTextStyle: "black",
  }

  constructor(props) {
    super(props);
    this.state = {
      activityId: null,
      authOpened: false
    }
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const pages = getCurrentPages();
    const activityId = pages[pages.length - 1].options.id;
    const { defaultStore} = this.props;
    defaultStore.getActivityDetail();
    defaultStore.getMessageList();
    this.state.activityId = activityId;
    wx.showShareMenu();
    this.checkAuth();
  }

  checkAuth() {
    const t=this;
    login(t, ()=>{

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

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(path){
    Taro.navigateTo({
      url: path
    });
  }

  render () {
    const { defaultStore:{activityDetail,activity_messageList} } = this.props;
    const list = activity_messageList.$mobx.values;
    return (
      <View className='activityDetail'>
        <Banner />
        <View className="title">{activityDetail.title}</View>
        <View className="form">
          <View className="formItem">
            <View className="label">时间</View>
            <View className="value">{activityDetail.time}</View>
          </View>
          <View className="formItem">
            <View className="label">地址</View>
            <View className="value">{activityDetail.address}</View>
          </View>
          <View className="formItem">
            <View className="label">积分</View>
            <View className="value">{activityDetail.rate}</View>
          </View>
          <View className="formItem">
            <View className="label">发起人</View>
            <View className="value main">{activityDetail.origin}</View>
          </View>
          <View className="formItem">
            <View className="label">联系方式</View>
            <View className="value main">{activityDetail.phone}</View>
          </View>
          <View className="formItem">
            <View className="label">已报名</View>
            <View className="value">{activityDetail.status}</View>
            <View className="button" onClick={this.goPage.bind(this,`/pages/activityInformationDetail/applied`)}><View className='at-icon at-icon-eye icon'></View><View className="text">查看</View></View>
          </View>
        </View>
        <Card title="留言" subTitle="查看全部" href="message">
          <View className="messageList">
            {list.map((item,index)=>{
              return (<View className="message" key={index}>
              <View className="userInfo">
                <View className="photo">
                  <Image src={item.photo} />
                </View>
                <View className="info">
                  <View className="name">{item.name}</View>
                  <View className="post">{item.company} {" "} {item.post}</View>
                </View>
              </View>
              <View className="words">{item.words}</View>
            </View>)
            })}
          </View>
        </Card>
        <Card title="活动详情">
          <View className="content">
            <rich-text nodes="{{activityDetail.content}}"></rich-text>
            <AtButton className="apply" type='primary' onClick={this.goPage.bind(this,`/pages/activityInformationDetail/appliedConfirm?id=${this.state.activityId}`)}>确认报名</AtButton>
          </View>
        </Card>

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
