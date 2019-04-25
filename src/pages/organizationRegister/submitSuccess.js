import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtButton,AtIcon } from 'taro-ui';

import 'taro-ui/dist/style/index.scss'

import './submitSuccess.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '申请加入组织',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      current: 0,
      value:""
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
    debugger
  }


  render () {
    return (
      <View className='register'>
        <View className="info">
          <View className="at-icon at-icon-check-circle icon"></View>
          <View class="words">请求发送成功，等待管理员审</View>
        </View>
        <AtButton onClick={this.submit.bind(this)} className="submit" type='primary' size='normal'>返回</AtButton>
      </View>
    )
  }
}

export default Index 
