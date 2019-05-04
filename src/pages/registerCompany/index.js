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
      pre_company_name:null,
      range:null,
      industry:null,
      nature:null,
      register_capital:null,
      name:null,
      card_no:null,
      job_title:null,
      phone:null,
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
    const { defaultStore,defaultStore: { userinfo} } = this.props;
    const pages = getCurrentPages();
    const options = pages[pages.length - 1].options;
    const formData = this.state;
    formData.government_id = options.id;
    formData.user_id = userinfo.id;
    let warring = false;
    const t = this;
    const formName = {
      pre_company_name:"预核准公司名称",
      range:"经营范围",
      industry:"所属行业",
      nature:"公司性质",
      register_capital:"注册资本",
      name:"姓名",
      card_no:"身份证",
      job_title:"职位",
      phone:"手机"
    }
    Object.keys(this.state).forEach((item,key)=>{
      if(!t.state[item] && !warring && formName[item]){
        warring = true;
        Taro.showToast({
          'title': "请填写" + formName[item] + "!",
          'icon':"none",
        })
      }
      if(key ==  Object.keys(this.state).length - 1 && !warring){
        defaultStore.submitRegisterCompany(formData);
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
                value={this.state.pre_company_name}
                onChange={this.handleChange.bind(this,"pre_company_name")}
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
                value={this.state.range}
                onChange={this.handleChange.bind(this,"range")}
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
                value={this.state.industry}
                onChange={this.handleChange.bind(this,"industry")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">公司性质</View>
            <View className="subtitle"></View>
            <View className="input">
              <Picker className="inputEditor" mode='selector' range={this.state.selector} onChange={this.handleChange.bind(this,"nature")}>
                <View className='picker'>
                  {this.state.nature||""}
                  <AtIcon className="chevron-down" value='chevron-down' size='30' color='#606060'></AtIcon>
                </View>
              </Picker>
            </View>
          </View>

          <View className="formItem">
            <View className="title required">注册资本</View>
            <View className="subtitle"></View>
            <View className="input">
              <Picker className="inputEditor" mode='selector' range={this.state.selector} onChange={this.handleChange.bind(this,"register_capital")}>
                  <View className='picker'>
                    {this.state.register_capital||""}
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
                value={this.state.name}
                onChange={this.handleChange.bind(this,"name")}
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
                value={this.state.card_no}
                onChange={this.handleChange.bind(this,"card_no")}
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
                value={this.state.job_title}
                onChange={this.handleChange.bind(this,"job_title")}
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

        </View>

        <View className="submitButton"><AtButton onClick={this.submit.bind(this)} className="button" type='primary'>确认提交</AtButton></View>
      </View>
    )
  }
}

export default Index 