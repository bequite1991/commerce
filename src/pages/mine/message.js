import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtBadge  } from 'taro-ui';
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
      url: `/pages/mine/${url}`
    });
  }

  formatDateTime(inputTime) {
    if(!inputTime){
      return;
    }
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
  }
  render () {
    const { defaultStore,defaultStore:{dot_mine_message_system,dot_mine_message_reply,dot_mine_message_comment,dot_mine_todo} } = this.props;
    const todo = dot_mine_todo.list?dot_mine_todo.list.$mobx.values : [];
    const messageData = defaultStore.getMessageData();
    return (
      <View className="message">
        <View className="header">
          <View className='entrance' onClick={this.goPage.bind(this,'messageSystem')} key="商道智慧">
            <AtBadge dot={dot_mine_message_system}>
              <View className='tips'></View>
              <View><text class="icon iconfont iconxitongxiaoxi"></text></View>
              <text>系统消息</text>
            </AtBadge>
          </View>
          <View className='entrance' onClick={this.goPage.bind(this,'messageReply')}>
            <AtBadge dot={dot_mine_message_reply}>
              <View className='tips'></View>
              <View><text class="icon iconfont iconxinzenghuifu"></text></View>
              <text>新增回复</text>
            </AtBadge>
          </View>
          <View className='entrance' onClick={this.goPage.bind(this,'messageComment')}>
            <AtBadge dot={dot_mine_message_comment}>
              <View className='tips'></View>
              <View><text class="icon iconfont iconxinzengliuyan"></text></View>
              <text>新增留言</text>
            </AtBadge>
          </View>
        </View>
        <View className="messageList">
          {todo.map((item,index)=>{
            return <View key={index} className='message' onClick={this.goPage.bind(this,'activityInformationDetail')}>
              <View className="photo"><AtBadge value={item.todo_count}><Image src={item.logo} /></AtBadge></View>
              <View className="messageInfo">
                <View className="title">{item.name}</View>
                <View className="subtitle">有新的成员请求加入组织</View>
              </View>
              <View className="time">{this.formatDateTime(item.audit_time)}</View>

            </View>
          })}
        </View>

      </View>
    )
  }
}

export default Index 