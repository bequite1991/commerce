import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Portal from "./portal.js";
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtActionSheet, AtActionSheetItem,AtRadio  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '政企直通',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {};
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

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
    });
  }

  render () {
    return (
      <View className='directTrain'>
        <Banner />
        <View className="content">
          <View className="title">政/企/直/通</View>
          <View className="subTitle">全国企业家与地方政府的一站式链接平台，促进政企的 投资合作，推动区域经济发展！</View>
          <Portal />
        </View>
       
      </View>
    )
  }
}

export default Index 