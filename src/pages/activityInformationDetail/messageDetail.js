import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './messageDetail.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '留言详情',
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    const { defaultStore} = this.props;
    defaultStore.getMessageDetail();
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
    const { defaultStore:{activity_messageDetail}} = this.props;
    const replys = activity_messageDetail.replys?activity_messageDetail.replys.$mobx.values:[];
    return (
      <View className="replyList">
        <View className="detailInfo">
          <View className="reply" key={index}>
            <View className="userInfo">
              <View className="photo">
                <Image src={activity_messageDetail.photo} />
              </View>
              <View className="info">
                <View className="name">{activity_messageDetail.name}</View>
                <View className="post">{activity_messageDetail.company} {" "} {activity_messageDetail.post}</View>
              </View>
            </View>
            <View className="words">{activity_messageDetail.words}</View>
            <View className="time">
              <View className="date">{activity_messageDetail.time}</View>
            </View>
          </View>
        </View>
        <View className="replys">
          <View className=""title>
            <View className="icon"></View>
            <View className="words">全部回复</View>
          </View>
          {replys.map((item,index)=>{
            return (<View className="reply" key={index}>
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
            <View className="time">
              <View className="date">{item.time}</View>
            </View>
          </View>)
          })}
        </View>
      </View>
    )
  }
}

export default Index 