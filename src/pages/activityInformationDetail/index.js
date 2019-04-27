import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '活动详情',
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    const { defaultStore} = this.props;
    defaultStore.getActivityDetail();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
    });
  }

  render () {
    const { defaultStore:{activityDetail} } = this.props;

    const datas = {
      photo:"https://taro-ui.aotu.io/img/logo-taro.png",
      name:"玩转地球天河汇123健康俱乐部",
      time:"2019-04-15 13:00",
      address:"北京市朝阳区高碑店乡高碑店村一区33号",
      rate:"1000积分",
      origin:"王铁柱",
      phone:"13888888888",
      status:"10人",
      comment:[],
      detailPhotos:"https://taro-ui.aotu.io/img/logo-taro.png"
    };



    return (
      <View className='activityDetail'>
        <Banner />
        <View className="title">{activityDetail.name}</View>
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
            <View className="button"><View className='at-icon at-icon-eye icon'></View><View className="text">查看</View></View>
          </View>
        </View>
        <Card title="留言" subTitle="查看全部" href="pages/joinUs/index">
          <View className="messageList">
            <View className="formItem">
              <View className="label">已报名</View>
              <View className="value">{activityDetail.status}</View>
              <View className="button"><View className='at-icon at-icon-eye icon'></View><View className="text">查看</View></View>
            </View>
          </View>
        </Card>
        <Card title="活动详情" href="pages/joinUs/index">

        </Card>
        
        <AtButton className="apply" type='primary' onClick={this.goPage}>申请</AtButton>
      </View>
    )
  }
}

export default Index 