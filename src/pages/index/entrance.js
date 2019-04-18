import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text, Swiper, SwiperItem} from '@tarojs/components';
import {observer, inject} from '@tarojs/mobx';

import {AtIcon} from 'taro-ui';

import Logo from '../../public/images/logo@3x.png';

import './entrance.scss';

@inject ('defaultStore')
@observer
class Entrance extends Component {
  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: 'black',
  };

  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  goPage () {
    Taro.navigateTo ({
      // url: '/pages/joinUs/index'
      url: '/pages/commerceIntroduce/index',
    });
  }

  render () {
    const {defaultStore} = this.props;
    return (
      <View>
        <View className="entrance" onClick={this.goPage} key="商道智慧">
          <View className="tips" />
          <View><icon type="success" size="50" /></View>
          <text>商道智慧</text>
        </View>
        <View className="entrance">
          <View className="tips" />
          <View><icon type="success" size="50" /></View>
          <text>活动资讯</text>
        </View>
        <View className="entrance">
          <View className="tips" />
          <View><icon type="success" size="50" /></View>
          <text>政企直通</text>
        </View>
        <View className="entrance">
          <View className="tips" />
          <View><icon type="success" size="50" /></View>
          <text>国际关系</text>
        </View>
      </View>
    );
  }
}

export default Index;
