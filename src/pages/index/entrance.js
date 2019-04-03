import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtIcon } from 'taro-ui'


import Logo from '../../public/images/logo@3x.png';

import './entrance.less';



@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { defaultStore } = this.props
    defaultStore.increment()
  }

  decrement = () => {
    const { defaultStore } = this.props
    defaultStore.decrement()
  }

  incrementAsync = () => {
    const { defaultStore } = this.props
    defaultStore.incrementAsync()
  }

  render () {
    const { defaultStore } = this.props;
    return (
      <View>
        <View className='entrance'>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>商道智慧</text>
        </View>
        <View className='entrance'>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>活动资讯</text>
        </View>
        <View className='entrance'>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>政企直通</text>
        </View>
        <View className='entrance'>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>国际关系</text>
        </View>
      </View>
    )
  }
}

export default Index 
