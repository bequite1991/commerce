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
    navigationBarTitleText: '留言',
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
    const { messages} = this.props;
    return (
        <View className="messageList">
          <View className="formItem">
            <View className="userInfo">
              <View className="photo">
              </View>
              <View className="name">
              </View>
              <View className="post">
              </View>
            </View>
            <View className="words"></View>
            <View className="value">{activityDetail.status}</View>
            <View className="button"><View className='at-icon at-icon-eye icon'></View><View className="text">查看</View></View>
          </View>
        </View>
    )
  }
}

export default Index 