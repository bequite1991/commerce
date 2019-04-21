import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtIcon } from 'taro-ui'


import Logo from '../../public/images/logo@3x.png';

import './entrance.scss';



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

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  render () {
    const { defaultStore } = this.props;
    return (
      <View>
        <View className='entrance' onClick={this.goPage.bind(this,'commerceIntroduce')} key="商道智慧">
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'commerceIntroduce')}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'directTrain')}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'commerceIntroduce')}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'commerceIntroduce')}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'commerceIntroduce')}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
        </View>
      </View>
    )
  }
}

export default Index 
