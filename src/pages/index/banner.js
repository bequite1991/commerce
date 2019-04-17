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
    const { defaultStore } = this.props;
    let swiperItems = null;
    const bannerLsit = defaultStore.getBannerList();
    return (
        <Swiper
          className='banner'
          indicatorColor='rgba(232,232,232,1)'
          indicatorActiveColor='rgba(72,128,255,1)'
          indicatorDots
          autoplay>
          {bannerLsit.map((item,index)=>{
            return <SwiperItem key={item.name} className='bannerItem'><View><Image src={item.url} /></View></SwiperItem>
          })}
        </Swiper>
    )
  }
}

export default Index 
