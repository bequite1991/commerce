import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtButton,AtMessage,AtIcon } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '上海市政府咨询',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      company:null,
      name:null,
      position:null,
      phone:null,
      need:null,
      needCustom:null,
      selector: ['美国', '中国', '巴西', '日本'],
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
  //填写表单
  handleChange(param,words){
    this.state[param] = words;
  }
  //校验并 提交表单
  submit(){
    let warring = false;
    const t = this;
    const formName = {
      name:"姓名",
      company:"企业名",
      position:"职位",
      phone:"手机号码",
      need:"希望学习和了解的政策方向",
      needCustom:"希望学习和了解的政策方向"
    }
    Object.keys(this.state).forEach((item,key)=>{
      if(!t.state[item] && !warring){
        warring = true;
        Taro.showToast({
          'title': "请填写" + formName[item] + "!",
          'icon':"none",
        })
      }
    });
  }

  render () {
    const { defaultStore } = this.props;
    return (
      <View className='governmentCounsel'>
        <View className="customForm1">

          <View className="formItem">
            <View className="title required">企业名称</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.company}
                onChange={this.handleChange.bind(this,"company")}
              />
            </View>
          </View>


          <View className="formItem">
            <View className="title required">姓名</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.name}
                onChange={this.handleChange.bind(this,"name")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">职位</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.position}
                onChange={this.handleChange.bind(this,"position")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">手机号码</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.phone}
                onChange={this.handleChange.bind(this,"phone")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">希望学习和了解的政策方向</View>
            <View className="subtitle"></View>
            <View className="input">
              <Picker className="inputEditor" mode='selector' range={this.state.selector} onChange={this.handleChange.bind(this,"need")}>
                <View className='picker'>
                  {this.state.need||""}
                  <AtIcon className="chevron-down" value='chevron-down' size='30' color='#606060'></AtIcon>
                </View>
              </Picker>
            </View>




          </View>

          <View className="formItem">
            <View className="title required">希望学习和了解的政策方向</View>
            <View className="subtitle">请填写您企业的简介，想要咨询的政策细节，字数100字 以上</View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.needCustom}
                onChange={this.handleChange.bind(this,"needCustom")}
              />
            </View>
          </View>

        </View>

        <View className="submitButton"><AtButton onClick={this.submit.bind(this)} className="button" type='primary'>确认提交</AtButton></View>
      </View>
    )
  }
}

export default Index 