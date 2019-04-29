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
    navigationBarTitleText: '政府注册公司',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      company:null,
      scope:null,
      industry:null,
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
      company:"预核准公司名称",
      scope:"经营范围",
      industry:"所属行业",
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
            <View className="title required">预核准公司名称</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.company_name}
                onChange={this.handleChange.bind(this,"company_name")}
              />
            </View>
          </View>


          <View className="formItem">
            <View className="title required">经营范围</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.scope}
                onChange={this.handleChange.bind(this,"scope")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">所属行业</View>
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
            <View className="title required">公司性质</View>
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
            <View className="title required">注册资本</View>
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
            <View className="title required">姓名</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.industry}
                onChange={this.handleChange.bind(this,"industry")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">身份证号码</View>
            <View className="subtitle"></View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.industry}
                onChange={this.handleChange.bind(this,"industry")}
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
                value={this.state.industry}
                onChange={this.handleChange.bind(this,"industry")}
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
                value={this.state.industry}
                onChange={this.handleChange.bind(this,"industry")}
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