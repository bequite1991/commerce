import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss';



@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    const { href } = this.props;
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: href
    });
  }

  render () {
    const { title,subTitle } = this.props;
    return (
      <View className='card'>
        <View className='cardHeader'>
          <View className='cardIcon'></View>
          <View className='title'>{title}</View>
          <View onClick={this.goPage} className='subTitle'>{subTitle || ""}</View>
        </View>
        <View className='cardContent'>{this.props.children}</View>
      </View>
    )
  }
}
export default Index 
