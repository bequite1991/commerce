import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './message.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '消息',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      formData: {
        birthday:"1950-01-01"
      },
      sexOpen:false,
      selectorChecked:"男性",
      isChange:0,
      position:"会员",
      positionsArr:["名誉会长","会长","轮值主席","常务副会长","副会长","理事","会员"]
    };
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
            <View><text class="icon iconfont iconxitongxiaoxi"></text></View>
            <text>系统消息</text>
          </View>
          <View className='entrance' onClick={this.goPage.bind(this,'activityInformation')}>
            <View className='tips'></View>
            <View><text class="icon iconfont iconxinzenghuifu"></text></View>
            <text>新增回复</text>
          </View>
          <View className='entrance' onClick={this.goPage.bind(this,'directTrain')}>
            <View className='tips'></View>
            <View><text class="icon iconfont iconxinzengliuyan"></text></View>
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