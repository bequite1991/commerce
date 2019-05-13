import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './banner.scss';



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

  render () {
    const { defaultStore:{ activityDetail } } = this.props;
    return (
        <Swiper
          className='banner'
          indicatorColor='rgba(232,232,232,1)'
          indicatorActiveColor='rgba(72,128,255,1)'
          indicatorDots = {false}
          displayMultipleItems = '1'
          autoplay = {false}>
          <SwiperItem key="1" className='bannerItem'><View><Image src={activityDetail.photo} /></View></SwiperItem>
        </Swiper>
    )
  }
}

export default Index 
