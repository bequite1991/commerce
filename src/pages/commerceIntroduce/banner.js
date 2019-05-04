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
    let swiperItems = null;
    const bannerLsit = [{src:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/4332309ca696289d725eab37f8751870.png",name:"banner"}]
    return (
        <Swiper
          className='banner'
          indicatorColor='rgba(232,232,232,1)'
          indicatorActiveColor='rgba(72,128,255,1)'
          indicatorDots = {false}
          displayMultipleItems = '1'
          autoplay = {false}>
          {bannerLsit.map((item,index)=>{
            return <SwiperItem key={item.name} className='bannerItem'><View><Image src={item.src} /></View></SwiperItem>
          })}
        </Swiper>
    )
  }
}

export default Index 
