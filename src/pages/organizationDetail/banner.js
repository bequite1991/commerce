import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './banner.scss';



@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      current: 0
    };
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
    const { header } = this.props;
    return (
      <View className="header">
        <View className="banner">
          <Image src={header.banner}  />
        </View>
        <View className="logo"><Image src={header.logo} /></View>
        <View className="title">{header.title}</View>
        <View className="subtitle">{header.subtitle}</View>
      </View>
    )
  }
}

export default Index 
