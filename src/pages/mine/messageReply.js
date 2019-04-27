import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '收到的回复',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {};
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mine/message/${url}`
    });
  }

  render () {
    const { defaultStore } = this.props;
    const messageData = defaultStore.getMessageData();
    return (
      <View className="message">
        <View className="header">
          <View className='entrance' onClick={this.goPage.bind(this,'commerceIntroduce')} key="商道智慧">
            <View className='tips'></View>
            <View><icon type="success" size="50" /></View>
            <text>系统消息</text>
          </View>
          <View className='entrance' onClick={this.goPage.bind(this,'activityInformation')}>
            <View className='tips'></View>
            <View><icon type="success" size="50" /></View>
            <text>新增回复</text>
          </View>
          <View className='entrance' onClick={this.goPage.bind(this,'directTrain')}>
            <View className='tips'></View>
            <View><icon type="success" size="50" /></View>
            <text>新增留言</text>
          </View>
        </View>
        <View className="messageList">
          {messageData.map((item,index)=>{
            return <View key={index} className='message' onClick={this.goPage.bind(this,'activityInformationDetail')}>
              <View className="photo"><Image src={item.photo} /></View>
              <View className="messageInfo">
                <View className="title">{item.title}</View>
                <View className="subtitle">{item.subtitle}</View>
              </View>
              <View className="time">{item.time}</View>
            </View>
          })}
        </View>

      </View>
    )
  }
}

export default Index 