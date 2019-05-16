import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtSearchBar  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './messageComment.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '收到的留言',
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
    const messageData = defaultStore.getMessageComment();
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
    const { defaultStore:{mine_messageComment} } = this.props;
    const list = mine_messageComment.$mobx.values;
    return (
      <View className="messageComment">
        <View className="commentList">
          {list.map((item,index)=>{
            return <View key={index} className='comment'>
              <View className="userInfo">
                <View className="photo"><Image src={item.photo} /></View>
                <View className="info">
                  <View className="title">{item.title}</View>
                  <View className="time">{item.time}</View>
                </View>
              </View>
              <View className="as" onClick={this.taggleInput.bind(this,true)}>回复</View>
              <View className="content">{item.content}</View>
              <View className="project">
                <Image src={item.projectPhoto} />
                <Text>{item.projectTitle}</Text>
              </View>
            </View>
          })}
        </View>
        <View className={this.state.showInput?"replayInput":"displayNone"}>
          <AtSearchBar
            placeholder="说点什么呗~"
            actionName='提交'
            focus={true}
            onBlur={this.taggleInput.bind(this,false)}
            onActionClick={this.onActionClick.bind(this)}
          />
        </View>
      </View>
    )
  }
}

export default Index 