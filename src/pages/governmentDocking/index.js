import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Portal from "./portal.js";
import Entance from "./entrance.js";
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtActionSheet, AtActionSheetItem,AtRadio  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '政府对接',
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
    const { defaultStore } = this.props;
    return (
      <View className='governmentDocking'>
        <Banner />
        <View className="content">
          <View className="title"><View className="line"></View>上海市政府对接<View className="line"></View></View>
          <View className="subTitle">对符合支持条件的企业上交税收的区属税收实得部分（包 括企业所得税、增值税、营业税，不包括个人所得税）实 行两免三减半的扶持政策</View>
          <Entance />
          <Portal />
        </View>
      </View>
    )
  }
}

export default Index 