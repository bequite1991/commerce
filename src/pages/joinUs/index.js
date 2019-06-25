import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtActionSheet, AtActionSheetItem,AtRadio,AtButton  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';
import login from "../../utils/authLogin";


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      formData: {
        birth_day:"1950-01-01",
        gender:"男性",
        commerce_job:"会员"
      },
      sexOpen:false,
      selectorChecked:"男性",
      isChange:0,
      commerce_job:"会员",
      positionsArr:["名誉会长","会长","轮值主席","常务副会长","副会长","理事","会员"],
      sexSelector:["男性","女性"],
      authOpened: false
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    wx.showShareMenu();
    this.checkAuth();
  }

  checkAuth() {
    const t=this;
    login(t, ()=>{

    }, () => {
      //error 需要跳转登录授权
      t.setState({
        authOpened: true
      });
    });
  }

  // 授权
  handleAuth(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setState({
      authOpened: false
    });
    this.checkAuth();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
    });
  }
  showSexAction(){
    this.setState({
      sexOpen:true
    })
  }
  selectSex(e){
    let {formData} = this.state;
    formData.gender = this.state.sexSelector[e.detail.value];
    this.setState({
      sexOpen:false
    })
  }
  onDateChange(date){
    let {formData,isChange} = this.state;
    formData.birth_day = date.detail.value;
    this.setState({
      isChange:isChange + 1
    });
  }
  onTagChange(val){
    let {formData} = this.state;
    this.state.formData.commerce_job = val;
  }
  submit(){
    const { defaultStore, defaultStore:{mine_userInfo} } = this.props;
    this.state.formData.weixin_id = Taro.getStorageSync("_TY_S");


    const keys = Object.keys(this.state.formData);
    keys.forEach((val,key)=>{
      if(!this.state.formData[val]){

      }
    })
    defaultStore.submitJoinUs(this.state.formData);
  }

  //校验并 提交表单
  submit(){
    const { defaultStore, defaultStore:{mine_userInfo} } = this.props;
    this.state.formData.weixin_id = Taro.getStorageSync("_TY_S");
    const t = this;
    let warring = false;
    const formName = {
      name:"姓名",
      gender:"性别",
      job:"职务",
      birth_day:"生日",
      telphone:"联系电话",
      company_name:"企业名称",
      register_capital:"注册资本",
      // social_creit_code:'统一社会信用代码',
      yye:'营业额',
      nse:'纳税额',
      // zgrs:'职工人数',
      // industry:'行业领域',
      // zyyw:'主营业务'
    }
    Object.keys(formName).forEach((item,key)=>{
      if(!t.state.formData[item] && !warring && formName[item]){
        warring = true;
        Taro.showToast({
          'title': "请填写" + formName[item] + "!",
          'icon':"none",
        })
      }
      if(key ==  Object.keys(formName).length - 1 && !warring){
        defaultStore.submitJoinUs(this.state.formData);
      }
    });
  }
  //填写表单
  handleChange(param,words){
    if(words.detail){
      this.state.formData[param] = this.state.selector[words.detail.value];
    }else{
      this.state.formData[param] = words;
    }
  }

  render () {
    const { defaultStore } = this.props;
    let {formData,sexOpen,positionsArr} = this.state;
    const introduce = defaultStore.getIntroduce();
    const parntersData = introduce.partner;
    const brandsData = introduce.brands;
    return (
      <View className='joinUs'>
        <View className="position"><Tags defaultActive={4} tags={positionsArr} onChange={this.onTagChange.bind(this)}/></View>

        <Card title="入会须知" subTitle="查看标准" href="/pages/joinUs/ruler">
            一、 会员入会程序： 1. 认真阅读本会章程，填写入会申请表（需加盖公司公章）； 2. 提供贵企业资料（公司和企业家个人简介、公司和个人电子 照片、公司LOGO、营业执照扫描件（加盖公章）、个人身份证复印件、最近一期财务年报）； 3. 联合会秘书处初审； 4. 提交会长会议审议通过； 5. 缴纳会费并注册； 6. 秘书处颁发会员证。
        </Card>
        <Card title="资料填写" subTitle="" download='http://ty-storage.oss-cn-hangzhou.aliyuncs.com/8aa6af8768df9544a16bf1961ec1b164.pptx'>
            <AtForm className="form">
              <AtInput
                name='name'
                title='姓 名'
                type='text'
                placeholder='请填写姓名'
                value={formData.name}
                onChange={this.handleChange.bind(this,"name")}
              />
              <Picker className="formItem" mode='selector' range={this.state.sexSelector} onChange={this.selectSex.bind(this)}>
                <View className='title'>
                  性别
                </View>
                <View className="content">
                  {formData.gender}
                </View>
              </Picker>
              <AtInput
                name='job'
                title='职 务'
                type='text'
                placeholder='请填写职务'
                value={formData.job}
                onChange={this.handleChange.bind(this,"job")}
              />
              <AtInput
                name='honner'
                title='荣誉'
                type='text'
                placeholder='请填写荣誉'
                value={formData.honner}
                onChange={this.handleChange.bind(this,"honner")}
              />
              <Picker className="formItem" mode='date' onChange={this.onDateChange.bind(this)}>
                <View className='title'>
                  生 日
                </View>
                <View className="content">
                  {formData.birth_day}
                </View>
              </Picker>
              <AtInput
                name='telphone'
                title='联系电话'
                type='telphone'
                placeholder='请填写联系电话'
                value={formData.telphone}
                onChange={this.handleChange.bind(this,"telphone")}
              />
              <AtInput
                name='company_name'
                title='企业名称'
                type='text'
                placeholder='请填写企业名称'
                value={formData.company_name}
                onChange={this.handleChange.bind(this,"company_name")}
              />
              <AtInput
                name='register_capital'
                title='注册资本(万元)'
                type='digit'
                placeholder='请填写注册资本'
                value={formData.register_capital}
                onChange={this.handleChange.bind(this,"register_capital")}
              />
              <AtInput
                name='social_creit_code'
                title='统一社会信用代码'
                type='digit'
                placeholder='请填写统一社会信用代码'
                value={formData.social_creit_code}
                onChange={this.handleChange.bind(this,"social_creit_code")}
              />
              <AtInput
                name='yye'
                title='营业额(万元)'
                type='text'
                placeholder='请填写行营业额'
                value={formData.yye}
                onChange={this.handleChange.bind(this,"yye")}
              />
              <AtInput
                name='nse'
                title='纳税额(万元)'
                type='text'
                placeholder='请填写纳税额' 
                value={formData.nse}
                onChange={this.handleChange.bind(this,"nse")}
              />
              <AtInput
                name='zgrs'
                title='职工人数'
                type='text'
                placeholder='请填写职工人数'
                value={formData.zgrs}
                onChange={this.handleChange.bind(this,"zgrs")}
              />
              <AtInput
                name='industry'
                title='行业领域'
                type='text'
                placeholder='请填写行业领域'
                value={formData.industry}
                onChange={this.handleChange.bind(this,"industry")}
              />
              <AtInput
                name='zyyw'
                title='主营业务'
                type='text'
                placeholder='请填写主营业务'
                value={formData.industry}
                onChange={this.handleChange.bind(this,"zyyw")}
              />
            </AtForm>
        </Card>
        <View className="submitButton"><AtButton onClick={this.submit.bind(this)} className="button" type='primary'>确认提交</AtButton></View>

        <AtActionSheet isOpened={this.state.authOpened} cancelText='取消' title='获取你的昵称、头像、地区及性别'>
          <AtActionSheetItem>
            <Button openType="getUserInfo" lang="zh_CN" onGetUserInfo={this.handleAuth} type='primary'>
              确认
            </Button>
          </AtActionSheetItem>
        </AtActionSheet>

      </View>
    )
  }
}

export default Index
