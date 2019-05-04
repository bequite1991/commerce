import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton,AtSearchBar } from 'taro-ui'

import './message.scss';


@inject('defaultStore')
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item:null,
      showInput:false
    }
  }

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
  //提交回复
  onActionClick(content){
    
    debugger
    const { defaultStore } = this.props;
    const { item,content } = this.state;


    const form = {
      id:item.id,
      user_id:item.user_id,
      parent_id:item.to_user_id,
      content:content,
      to_user_id:item.user_id
    }
    defaultStore.submitComment(form);
    this.hideInput();
  }
  //展示 输入框
  showInput(item){
    debugger
    this.setState({
      item:item,
      showInput:true
    })
  }
  //隐藏 输入框
  hideInput(){
    this.setState({
      showInput:false
    })
  }
  blurInput(words){
    this.setState({
      showInput:false,
      content:words.detail.value
    })
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
                <View className="text" onClick={this.showInput.bind(this,item)}>回复</View>
              </View>
            </View>
          </View>)
          })}
          <View className={this.state.showInput?"replayInput":"displayNone"}>
            <AtSearchBar
              placeholder="说点什么呗~"
              actionName='提交'
              onBlur={this.blurInput.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
          </View>
        </View>
    )
  }
}

export default Index 