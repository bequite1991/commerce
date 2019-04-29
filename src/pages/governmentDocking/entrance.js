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

  constructor(props) {
    super(props);
    this.state = {
      proviceId:null
    }
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const pages = getCurrentPages();
    const proviceId = pages[pages.length - 1].options.id;
    this.setState({
      proviceId
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: url
    })
  }

  render () {
    const { defaultStore } = this.props;

    return (
      <View>
        <View className='entrance' onClick={this.goPage.bind(this,`/pages/governmentCounsel/index?id=${this.state.proviceId}`)} key="商道智慧">
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>政策咨询</text>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,`/pages/registerCompany/index?id=${this.state.proviceId}`)}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>注册公司</text>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,`/pages/largeProjects/index?id=${this.state.proviceId}`)}>
          <View className='tips'></View>
          <View><icon type="success" size="50" /></View>
          <text>重大投资对接</text>
        </View>
      </View>
    )
  }
}

export default Index 
