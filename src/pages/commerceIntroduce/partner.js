import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Partner from "../internationalRelations/commerce.js";
import { AtButton } from 'taro-ui'

import './partner.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '合作伙伴',
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='partner'>
        <Image className="partnerLogos" src="http://ty-storage.oss-cn-hangzhou.aliyuncs.com/c283499078f837d91a98f20690b8621e.png" />
        {/*<Partner />*/}
      </View>
    )
  }
}

export default Index 