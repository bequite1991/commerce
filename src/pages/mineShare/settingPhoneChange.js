import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtForm, AtInput, AtList, AtListItem, AtButton } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './settingPhone.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '更改手机号码',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      newPhone:null
    };
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

  goPage(url){
    const t = this;
    const { defaultStore } = this.props;
    const { newPhone } = this.state
    defaultStore.commerceSendVc(newPhone);
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mineShare/${url}?phone=${t.state.newPhone}`
    });
  }
  handleChange(e){
    this.setState({
      newPhone:e
    });
  }



  render () {
    return (
      <View className='settingPhone'>
        <AtList>
          <AtListItem
            title='国家和地区'
            arrow='right'
            extraText="中国大陆"
          />
        </AtList>
        <AtForm>
          <AtInput
            name='newPhone'
            border={false}
            title='+86'
            type='phone'
            placeholder='请输入您的手机号'
            value={this.state.newPhone}
            onBlur={this.handleChange.bind(this)}
          />
        </AtForm>
        <AtButton disabled={!this.state.newPhone} onClick={this.goPage.bind(this,"settingPhoneChangeMsg")} className="submit" type='primary' size='normal'>更改手机号</AtButton>
      </View>
    )
  }
}

export default Index 