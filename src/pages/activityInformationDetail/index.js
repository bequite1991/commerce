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
    defaultStore.getMessageList();
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
            <View className="button" onClick={this.goPage.bind(this,"applied")}><View className='at-icon at-icon-eye icon'></View><View className="text">查看</View></View>
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
          <Image className="detailPhotos" src={activityDetail.detailPhotos} />
          <AtButton className="apply" type='primary' onClick={this.goPage.bind(this,'appliedConfirm')}>确认报名</AtButton>
        </Card>
      </View>
    )
  }
}

export default Index 