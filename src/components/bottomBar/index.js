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

  constructor (props) {
    super (props);
    this.state = {};
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
      <View className='bottomBar'>
        <View className={this.props.active == 0?'bottomBarItem activeBar':"bottomBarItem activeBar"} onClick={this.goPage.bind(this,'index')}>
          <View className='tips'></View>
          <View className='Home'><Image src={Home} /></View>
          <text>首页</text>
        </View>
        <View className={this.props.active == 1?'bottomBarItem':"bottomBarItem"} onClick={this.goPage.bind(this,'organization')}>
          <View className='tips'></View>
          <View className='Zuzhi'><Image src={Zuzhi} /></View>
          <text>组织</text>
        </View>
        <View className={this.props.active == 2?'bottomBarItem':"bottomBarItem"} onClick={this.goPage.bind(this,'connection')}>
          <View className='tips'></View>
          <View className='Peoples'><Image src={Peoples} /></View>
          <text>人脉</text>
        </View>
        <View className={this.props.active == 3?'bottomBarItem':"bottomBarItem"} onClick={this.goPage.bind(this,'mine')}>
          <View className='tips'></View>
          <View className='Me'><Image src={Me} /></View>
          <text>我</text>
        </View>
      </View>
    )
  }
}

export default Index 
