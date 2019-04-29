import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtFab,AtButton,AtTextarea } from 'taro-ui';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '申请加入组织',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      current: 0,
      value:""
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

  search(keys){

  }

  handleChange (value) {
    this.setState({
      value: value.detail.value
    })
  }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  submit(){
    const reason = this.state.value;
    if(!reason){
      wx.showToast({
        title: '请输入申请理由...',
        icon: 'none'
      });
      return ;
    }
    const { defaultStore } = this.props;
    const id = this.$router.params.id;
    defaultStore.orgRegister(id, reason).then(res => {
      if(res.data.ok){
        Taro.navigateTo({
          url: `/pages/organizationRegister/submitSuccess`
        })
      }else{
        wx.showToast({
          title: `加入失败,${res.data.message}`,
          icon: 'none'
        });
      }
    });
  }

  render () {
    return (
      <View className='register'>
        <AtTextarea
          className="textarea"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={100}
          placeholder='请填写您想加入该组织的理由！'
        />
        <AtButton onClick={this.submit.bind(this)} className="submit" type='primary' size='normal'>按钮文案</AtButton>
      </View>
    )
  }
}

export default Index
