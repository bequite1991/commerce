import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtButton,AtMessage,AtIcon,AtImagePicker } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '重大投资对接',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      investment:"+ 上传文件（需小于500M）",
      scope:null,
      industry:null,
      intent_desc:null,
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
    const { defaultStore,defaultStore: { userinfo} } = this.props;
    const pages = getCurrentPages();
    const options = pages[pages.length - 1].options;
    const formData = this.state;
    formData.government_id = options.id;
    let warring = false;
    const t = this;
    const formName = {
      company_name:"预核准公司名称",
      name:"姓名",
      phone:"电话",
      intent_desc:"合作意向说明 ",
      investment:"项目投资计划书",
      business_license:"企业营业执照证明",
    }
    Object.keys(this.state).forEach((item,key)=>{
      if(!t.state[item] && !warring){
        warring = true;
        Taro.showToast({
          'title': "请填写" + formName[item] + "!",
          'icon':"none",
        })
      }
      if(key ==  Object.keys(this.state).length - 1 && !warring){
        defaultStore.submitLargeProjects(formData);
      }
    });
  }
  uploader(url,filePath,name){
    const { defaultStore } = this.props;
    defaultStore.uploaderFile(filePath[0].url,name)
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
                value={this.state.company_name}
                onChange={this.handleChange.bind(this,"company_name")}
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
            <View className="title required">合作意向说明</View>
            <View className="subtitle">请填写您企业的简介，合作需求说明包括期望与政府的 投资合作内容，投资金额，希望政府给予的支持，字数 150以上</View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.intent_desc}
                onChange={this.handleChange.bind(this,"intent_desc")}
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">项目投资计划书</View>
            <View className="subtitle">或可发送至138888888@163.com，格式 （Word,PDF,PPT）</View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.investment}
                onChange={this.handleChange.bind(this,"investment")}
                disabled
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">企业营业执照证明</View>
            <View className="subtitle">支持jpg，png，gif，bmp，tiff等图片格式</View>
            <View className="input">
              <AtImagePicker
                files={this.state.business_license}
                onChange={this.uploader.bind(this,"business_license")}
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