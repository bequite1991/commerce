import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtFab,AtButton,AtTextarea } from 'taro-ui';

import 'taro-ui/dist/style/index.scss'

import './index.scss';


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
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/organizationRegister/submitSuccess`
    })
  }


  render () {
    return (
      <View className='register'>
        <AtTextarea
          className="textarea"
          value={this.state.value}
          onBlur={this.handleChange.bind(this)}
          maxLength={100}
          placeholder='请填写您想加入该组织的理由！'
        />
        <AtButton onClick={this.submit.bind(this)} className="submit" type='primary' size='normal'>按钮文案</AtButton>
      </View>
    )
  }
}

export default Index 
