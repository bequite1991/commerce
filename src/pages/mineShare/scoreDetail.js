import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem,AtButton } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './scoreDetail.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '收支明细',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {};
  }

  componentWillMount () {
    const { defaultStore } = this.props;
    defaultStore.getMyScoreDetail();
  }

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
      url: `/pages/mineShare/${url}`
    });
  }

  submit(){
    wx.makePhoneCall({
      phoneNumber: "021-32013610"
    })
  }

  render () {
    const { defaultStore:{mine_myScoreDetail} } = this.props;
    const list  = mine_myScoreDetail.$mobx.values;

    return (
      <View className='myScoreDetail'>
        <View className="content">
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
          </View>
        </View>
      </View>
    )
  }
}

export default Index 