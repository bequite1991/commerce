import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './appliedSuccess.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: "报名成功",
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

  goPage(path){
    const pages = getCurrentPages();
    const activityId = pages[pages.length - 1].options.id;
    Taro.navigateTo({
      url: `/pages/activityInformationDetail/index?id=${activityId}`
    });

  }

  render () {
    const { messages} = this.props;
    const { defaultStore:{activity_appliedConfirm}} = this.props;
    return (
        <View className="appliedSuccess">
          <View className="logo">
            <View className="at-icon at-icon-check"></View>
          </View>
          <View className="title">报名成功</View>
          <View className="subtitle">感谢您的报名，稍后活动详情将会以短 信的方式发送至您的手机。</View>
          <AtButton className="apply" type='primary' onClick={this.goPage.bind(this)}>返回活动详情</AtButton>
        </View>
    )
  }
}

export default Index 