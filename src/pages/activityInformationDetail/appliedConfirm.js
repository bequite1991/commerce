import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './appliedConfirm.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: "报名信息确认",
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    const { defaultStore} = this.props;
    defaultStore.getAppliedConfirm();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(path){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/activityInformationDetail/${path}`
    });
  }

  render () {
    const { messages} = this.props;
    const { defaultStore:{activity_appliedConfirm}} = this.props;
    return (
        <View className="appliedConfirm">
          <View className="title">{activity_appliedConfirm.name}</View>
          <View className="form">
            <View className="formItem">
              <View className="label">时间</View>
              <View className="value">{activity_appliedConfirm.time}</View>
            </View>
            <View className="formItem">
              <View className="label">地址</View>
              <View className="value">{activity_appliedConfirm.address}</View>
            </View>
            <View className="formItem">
              <View className="label">积分</View>
              <View className="value">{activity_appliedConfirm.rate}</View>
            </View>
            <View className="formItem">
              <View className="label">发起人</View>
              <View className="value main">{activity_appliedConfirm.origin}</View>
            </View>
            <View className="formItem">
              <View className="label">联系方式</View>
              <View className="value main">{activity_appliedConfirm.phone}</View>
            </View>
          </View>
          <AtButton className="apply" type='primary' onClick={this.goPage.bind(this,'appliedSuccess')}>确认报名</AtButton>
        </View>
    )
  }
}

export default Index 