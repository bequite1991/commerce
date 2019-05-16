import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtSearchBar  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './messageSystem.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '系统消息',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      showInput:false
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;
    const messageData = defaultStore.getMessageSystem();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mine/message/${url}`
    });
  }
  onActionClick(){

  }
  taggleInput(param){
    debugger
    this.setState({
      showInput:param
    });
  }

  render () {
    const { defaultStore:{mine_messageSystem} } = this.props;
    const list = mine_messageSystem.$mobx.values;
    return (
      <View className="messageSystem">
        <View className="messageList">
          {list.map((item,index)=>{
            return <View key={index} className='message'>
              <View className="time">{item.time}</View>
              <View className="messageInfo">
                <View className="photo"><Image src={item.photo} /></View>
                <View className="words">
                  <View className="title">{item.title}</View>
                  <View className="subtitle">{item.subtitle}</View>
                </View>
              </View>
            </View>
          })}
        </View>
      </View>
    )
  }
}

export default Index 