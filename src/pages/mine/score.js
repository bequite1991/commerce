import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem,AtButton } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './score.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '我的积分',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {};
  }

  componentWillMount () {
    
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;

    defaultStore.getMyScore();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mineShare/${url}`
    });
  }

  submit(){
    wx.makePhoneCall({
      phoneNumber: "021-32013610"
    })
  }

  render () {
    const { defaultStore:{mine_myScore,mine_userinfo} } = this.props;
    const list  = mine_myScore.$mobx.values;
    return (
      <View className='myScore'>
        <View className="header">
          <View className="score">
            {mine_userinfo.integral}
          </View>
          <View className="subtitle">账户余额积分</View>
        </View>
        <View className="content">
          <View className="title">积分账单</View>
          <View className="list">
            {list.map((item,index)=>{
              return <View key={index} className='item'>
                <View className="info">
                  <View className="name">{item.name}</View>
                  <View className="time">{item.time}</View>
                </View>
                <View className="value">{item.value}</View>
              </View>
            })}
            <View key={index} className='item' onClick={this.goPage.bind(this,'scoreDetail')}>
                <View className="info">
                  <View className="name">查看更多账单信息</View>
                </View>
                <View className="value"><View className='at-icon at-icon-chevron-right'></View></View>
              </View>
          </View>
          <AtButton className="apply" type='primary' onClick={this.submit}>联系客服充值积分</AtButton>
        </View>
      </View>
    )
  }
}

export default Index 