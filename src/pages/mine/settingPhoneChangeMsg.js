import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtForm, AtInput, AtList, AtListItem, AtButton } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './settingPhoneChangeMsg.scss';


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
      value:null,
      sec:60,
      phone:null
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    this.getMsg();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    const { defaultStore } = this.props;
    defaultStore.confirmCommerceSendVc(this.state.value,this.state.phone);
    // Taro.navigateTo({
    //   // url: '/pages/joinUs/index'
    //   url: `/pages/mine/${url}`
    // });
  }
  handleChange(e){
    this.setState({
      value:e,
    });
  }
  getMsg(){
    const t = this;
    const pages = getCurrentPages();
    const nowPage = pages[pages.length - 1];
    const phone = nowPage.options.phone;
    t.interval = setInterval(()=>{
      if(t.state.sec != 0){
        t.setState({
          sec:t.state.sec - 1,
          phone:phone
        });
      }else{
        clearInterval(t.interval);
        t.setState({
          sec:60
        });
      }
    },1000);


  }

  render () {
    return (
      <View className='settingPhone'>
        <AtForm>
          <AtInput
            clear
            type='text'
            maxLength='4'
            placeholder='请输入验证码'
            onChange={this.handleChange.bind(this)}
          >
            <View className={this.state.sec == 60?"getMsg":"displayNo"} onClick={this.getMsg.bind(this)}>获取验证码</View>
            <View className={this.state.sec == 60?"displayNo":"sec"}>{this.state.sec}s</View>
          </AtInput>
        </AtForm>
        <View className="info">请查看<View className="phone">+86{this.state.phone || ""}</View>接收到的短信</View>
        <AtButton disabled={!this.state.newPhone} onClick={this.goPage.bind(this,"changePhone")} className="submit" type='primary' size='normal'>确认</AtButton>
      </View>
    )
  }
}

export default Index 