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
      plan:"+ 上传文件（需小于500M）",
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
  uploader(){

    wx.chooseFile()


    // wx.uploadFile({
    //   url: url,
    //   filePath: filePath,
    //   name: name,
    //   header: {
    //     'content-type': 'multipart/form-data'
    //   },
    //   formData:formData,    //请求额外的form data
    //   success:function(res) {
    //     console.log(res);
    //     if(res.statusCode ==200){
    //      typeof success == "function" && success(res.data);
    //     }else{
    //     typeof fail == "function" && fail(res.data);
    //     }
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //     typeof fail == "function" && fail(res.data);
    //   }
    // })
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
                value={this.state.scope}
                onChange={this.handleChange.bind(this,"scope")}
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

          <View className="formItem">
            <View className="title required">合作意向说明</View>
            <View className="subtitle">请填写您企业的简介，合作需求说明包括期望与政府的 投资合作内容，投资金额，希望政府给予的支持，字数 150以上</View>
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
            <View className="title required">项目投资计划书</View>
            <View className="subtitle">或可发送至138888888@163.com，格式 （Word,PDF,PPT）</View>
            <View className="input">
              <AtInput
                className="inputEditor"
                type='text'
                value={this.state.plan}
                onChange={this.handleChange.bind(this,"position")}
                disabled
              />
            </View>
          </View>

          <View className="formItem">
            <View className="title required">企业营业执照证明</View>
            <View className="subtitle">支持jpg，png，gif，bmp，tiff等图片格式</View>
            <View className="input" onClick={this.uploader.bind(this)}>
              <AtImagePicker
                files={this.state.files}
                onChange={this.onChange.bind(this)}
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