import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './appliedFail.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: "报名失败",
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    const pages = getCurrentPages();
    const activityId = pages[pages.length - 1].options.id;
    Taro.navigateTo({
      url: `/pages/activityInformationDetail/index?id=${activityId}`
    });
  }
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: "021-32013610"
    })
  }

  render () {
    const { messages} = this.props;
    const { defaultStore:{activity_appliedConfirm}} = this.props;
    return (
        <View className="appliedFail">
          <View className="logo">
            <View className="at-icon at-icon-check"></View>
          </View>
          <View className="title">报名失败</View>
          <View className="subtitle">很抱歉，由于您的积分不足无法成功报 名，请点击下方联系客服充值积分。 </View>
          <AtButton className="service" type='primary' onClick={this.callPhone}>联系客服充值积分</AtButton>
          <AtButton className="apply" type='primary' onClick={this.goPage}>返回活动详情</AtButton>
        </View>
    )
  }
}

export default Index 