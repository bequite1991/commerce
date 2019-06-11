import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './introduce.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商会介绍',
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;
    defaultStore.getCommerceList();
    // defaultStore.getActivitysBrands();
    wx.showShareMenu();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
    });
  }

  render () {
    return (
      <View className='introdeuce'>
         新沪商联合会成立于2008年，属非营利民间商会。新沪商联合会凝聚了长三角乃至全球在中国改革开放进程中最有活力最能创造商业价值的精英企业家，是知名民营企业家相互信任、学习互助的交流平台。 长期以来，我们以全心服务会员为基石，以激发会员企业创新活力、推动企业家社会责任为方向，以合力聚变、引领中国商业新趋势为核心价值，朝着成为全球最有影响力的中国商会的愿景不断迈进！
      </View>
    )
  }
}

export default Index 