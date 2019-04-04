import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtIcon } from 'taro-ui'


import Home from '../../public/images/tabsIcon/home@2x.png';
import Zuzhi from '../../public/images/tabsIcon/zuzhi@2x.png';
import Peoples from '../../public/images/tabsIcon/peoples@2x.png';
import Me from '../../public/images/tabsIcon/me@2x.png';

import './index.scss';



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
      <View className='bottomBar'>
        <View className='bottomBarItem activeBar'>
          <View className='tips'></View>
          <View className='Home'><Image src={Home} /></View>
          {/*<View><icon type="success" size="50" /></View>*/}
          <text>首页</text>
        </View>
        <View className='bottomBarItem'>
          <View className='tips'></View>
          <View className='Zuzhi'><Image src={Zuzhi} /></View>
          <text>组织</text>
        </View>
        <View className='bottomBarItem'>
          <View className='tips'></View>
          <View className='Peoples'><Image src={Peoples} /></View>
          <text>人脉</text>
        </View>
        <View className='bottomBarItem'>
          <View className='tips'></View>
          <View className='Me'><Image src={Me} /></View>
          <text>我</text>
        </View>
      </View>
    )
  }
}

export default Index 
