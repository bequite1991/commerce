import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './message.scss';


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
    defaultStore.getMessageList();
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
    const { defaultStore:{activity_messageList}} = this.props;
    const list = activity_messageList.$mobx.values;
    return (
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
            <View className="time">
              <View className="date">{item.time}</View>
              <View className="button">
                <View className='at-icon at-icon-message icon'></View>
                <View className="text">回复</View>
              </View>
            </View>
          </View>)
          })}
        </View>
    )
  }
}

export default Index 