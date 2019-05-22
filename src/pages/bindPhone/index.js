import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text, Swiper, SwiperItem} from '@tarojs/components';
import { AtInput, AtForm, AtButton, AtActionSheet, AtActionSheetItem,AtRadio  } from 'taro-ui';
import {observer, inject} from '@tarojs/mobx';
import Logo from '../../public/images/logo@3x.png';

import request from '../../utils/request';

import './index.scss';

@inject ('defaultStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: 'black',
  };

  constructor(props) {
    super(props);
    this.state={
      sending: false,
      count: 60,
      formData: {
        telphone:'',
        vc:''
      }
    }
  }

  componentWillMount () {
    console.log(this.$router.params)
    this._r = this.$router.params._r || '';
    this.back = this.$router.params.back || '';
  }

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  //表单改变
  handleChange(type,data) {
    let {formData} = this.state;
    formData[type] = data;
    this.setState({
      formData: formData
    });
  }

  sendSms() {
    // 发送验证码
    const t=this;
    const { sending, formData } = this.state;
    console.log(`sending:${sending}...formData: ${formData}`);
    if(sending){
      return;
    }
    if(!formData.telphone){
      wx.showToast({
        title: '请先填写正确的手机号',
        icon: 'none'
      })
      return;
    }
    this.setState({
      sending: true,
      count: 60
    });
    const time = setInterval(()=>{
      const { count: tmpCount } = t.state;
      if(tmpCount<=0){
        t.setState({
          sending: false
        })
        clearInterval(time);
      }
      t.setState({
        count: tmpCount - 1
      })
    },1000);

    // 发送短信
    request('/config/commerce_send_vc',{
      method: 'POST',
      data: {
        telphone: formData.telphone
      }
    }).then((res) => {
      // const data = res.data;
      // if(data.ok && data.data && data.data['vc_code']){
      //
      // }
    })
  }

  // 提交
  handleCommit() {
    const t=this;
    const { formData } = this.state;
    if(this._r){
      request('/config/commerce_check_binded_wx', {
        method: 'GET',
        data: {
          telphone: formData.telphone
        }
      }).then((res) => {
        const data = res.data;
        if(data.ok){
          const cacheUser = wx.getStorageSync("_TY_CurrentInfo");
          if(data.data.data && data.data.data.id){
            // 有 这个人只是没有绑定微信
            request('/config/commerce_bind_phone_init_session',{
              method: 'POST',
              data: {
                id: data.data.data.id,
                telphone: formData.telphone,
                vc_code: formData.vc,
                weixin_id: cacheUser.weixin_id,
              }
            }).then((res) => {
              const data = res.data;
              if(data.ok){
                //初始化session后，跳转到手机授权页面
                if(t.back){
                  Taro.navigateTo({
                    url: decodeURIComponent(t.back)
                  })
                }else{
                  Taro.navigateTo({
                    url: `/pages/index/index`
                  })
                }
              }
            }).catch((err)=>{
              wx.showToast({
                title: err.message,
                icon: 'none'
              })
            })
          }else{
            // 注册 手机验证码一起
            request('/config/commerce_register_user',{
              method: 'POST',
              data: {
                name: cacheUser.name,
                photo: cacheUser.photo,
                gender: cacheUser.gender,
                weixin_id: cacheUser.weixin_id,
                telphone: formData.telphone,
                vc_code: formData.vc,
              }
            }).then((res) => {
              const data = res.data;
              if(data.ok){
                if(t.back){
                  Taro.navigateTo({
                    url: decodeURIComponent(t.back)
                  })
                }else{
                  Taro.navigateTo({
                    url: `/pages/index/index`
                  })
                }
              }
            }).catch((err)=>{
              wx.showToast({
                title: err.message,
                icon: 'none'
              })
            })
          }
        }
      }).catch((err)=>{
        wx.showToast({
          title: err.message,
          icon: 'none'
        })
      });
    }else{
      // 发送短信
      request('/config/commerce_update_telphone',{
        method: 'POST',
        data: {
          telphone: formData.telphone,
          vc_code: formData.vc,
        }
      }).then((res) => {
        const data = res.data;
        if(data.ok){
          // 绑定成功 跳转到首页
          if(t.back){
            Taro.navigateTo({
              url: decodeURIComponent(t.back)
            })
          }else{
            Taro.navigateTo({
              url: `/pages/index/index`
            })
          }
        }
      }).catch((err)=>{
        wx.showToast({
          title: err.message,
          icon: 'none'
        })
      });
    }
  }

  render () {
    return (
      <View className="bindPhonePage">
        <Image src={Logo} className="logo" />
        <AtForm className="form">
          <AtInput
            name='telphone'
            title='手机号'
            type='text'
            placeholder='请填写手机号'
            value={formData.telphone}
            onChange={(e)=> {this.handleChange('telphone',e)}}
          >
          </AtInput>
          <AtButton type='primary' className="send_sms_btn" onClick={()=>this.sendSms()} size='small'>{this.sending?`${this.state.count}后重试`:'发送验证码'}</AtButton>
          <AtInput
            name='vc'
            title='验证码'
            type='number'
            placeholder='请输入验证码'
            value={formData.vc}
            onChange={(e)=> {this.handleChange('vc',e)}}
          />
          <AtButton type='primary' onClick={()=>this.handleCommit()}>确定</AtButton>
        </AtForm>
      </View>
    );
  }
}

export default Index;
