import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtActionSheet, AtActionSheetItem,AtRadio,AtButton  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './building.scss';
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
        birth_day:"1950-01-01"
      },
      sexOpen:false,
      selectorChecked:"男性",
      isChange:0,
      commerce_job:"会员",
      positionsArr:["名誉会长","会长","轮值主席","常务副会长","副会长","理事","会员"],
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
  selectSex(sex){
    let {formData} = this.state;
    formData.gender = sex;
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
    this.state.formData.weixin_id = wx._TY_opendid;
    defaultStore.submitJoinUs(this.state.formData);
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
      <View className='building'>
        <View className='at-icon at-icon-blocked icon'></View>
        页面建设中,敬请期待......
      </View>
    )
  }
}

export default Index
