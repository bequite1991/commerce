import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Memebers from "./members.js";

import { AtFab,AtSearchBar } from 'taro-ui';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商道智慧',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentWillMount () {

  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    wx.showShareMenu();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  search(keys){

  }


  render () {
    const { defaultStore: { counter } } = this.props
    return (
      <View className='wisdom'>
        <View className="header">
          <View className="title">
            <View>主席团成员</View>
            <View>MEMBERS</View>
          </View>
          <View className="line"></View>
          <View className="subtitle">新沪商联合会凝聚了长三角乃至全球在中国改革开放进程中最有活力最能创造商业价值的精英企业家，能共同乘风破浪于商海，带领会员驶向远方。</View>
        </View>
        <Memebers />
      </View>
    )
  }
}

export default Index
