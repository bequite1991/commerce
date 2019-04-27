import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtButton,AtList, AtListItem} from 'taro-ui';

import './contact.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '联系我们',
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

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  search(keys){

  }

  handleChange (value) {
    this.setState({
      value: value.detail.value
    })
  }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  submit(){
    wx.makePhoneCall({
      phoneNumber: "021-32013610"
    })
  }


  render () {
    return (
      <View className='contact'>
        <View className="contactList">

          <View className="item"><View className="at-icon at-icon-phone icon"></View><View className="text">公司电话：021-32013610</View></View>

          <View className="item"><View className="at-icon at-icon-mail icon"></View><View className="text">公司邮箱：xxxxxxxx@163.com</View></View>

          <View className="item"><View className="at-icon at-icon-message icon"></View><View className="text">微信公众号：xhslhhfw</View></View>
        </View>
        <AtButton onClick={this.submit.bind(this)} className="submit" type='primary' size='normal'>联系客服</AtButton>
      </View>
    )
  }
}

export default Index 
