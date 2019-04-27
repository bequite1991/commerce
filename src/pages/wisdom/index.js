import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Memebers from "./members.js";

import { AtFab,AtSearchBar } from 'taro-ui';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商道智慧',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentWillMount () {

  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  search(keys){

  }


  render () {
    const { defaultStore: { counter } } = this.props
    return (
      <View className='wisdom'>
        <View className="header">
          <View className="title">
            <View>主席团成员</View>
            <View>MEMBERS</View>
          </View>
          <View className="line"></View>
          <View className="subtitle">中国企业家俱乐部理事是中国市场经济的代表人物，他们有着独特的创业经验和管理思想，富有远见和创新见解；他们承载企业家精神并承担社会责任，具有高度的责任心和使命感</View>
        </View>
        <Memebers />
      </View>
    )
  }
}

export default Index
