import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text, Swiper, SwiperItem} from '@tarojs/components';
import {observer, inject} from '@tarojs/mobx';
import {AtIcon} from 'taro-ui';

import './entrance.scss';

@inject ('defaultStore')
@observer
class Entrance extends Component {

  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  goPage(url){
    this.checkUserType();
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  checkUserType() {
    const userinfo = wx.getStorageSync("_TY_U");// 用户信息
    if(userinfo && userinfo['commerce_job'] && userinfo['commerce_job'] === 'user'){
      //如果是注册用户，需要跳转到加入会员页面
      Taro.navigateTo({
        url: '/pages/commerceIntroduce/index'
      });
    }
  }

  render () {
    const {defaultStore} = this.props;
    return (
      <View>
        <View className='entrance' onClick={this.goPage.bind(this,'wisdom')} key="商道智慧">
          <View className='tips'></View>
          <View><text class="icon iconfont iconshangdaozhihui"></text></View>
          <text>商道智慧</text>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'activityInformation')}>
          <View className='tips'></View>
          <View><text class="icon iconfont iconhuodongzixun"></text></View>
          <text>活动资讯</text>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'directTrain')}>
          <View className='tips'></View>
          <View><text class="icon iconfont iconzhengqizhitong"></text></View>
          <text>政企直通</text>
        </View>
        <View className='entrance' onClick={this.goPage.bind(this,'internationalRelations')}>
          <View className='tips'></View>
          <View><text class="icon iconfont iconguojiguanxi"></text></View>
          <text>国际关系</text>
        </View>
      </View>
    );
  }
}

export default Entrance;
