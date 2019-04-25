import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text, Swiper, SwiperItem} from '@tarojs/components';
import {observer, inject} from '@tarojs/mobx';
import Banner from './banner.js';
import Logo from '../../public/images/logo@3x.png';
import Entrance from './entrance.js';
import Presidium from './presidium.js';
import Activitys from './activitys.js';
import BottomBar from '../../components/bottomBar/index.js';

import {AtFab} from 'taro-ui';

import 'taro-ui/dist/style/index.scss';

import './index.scss';

@inject ('defaultStore')
@observer
class Index extends Component {
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

  render () {
    return (
      <View className="homePage">
        <Image src={Logo} className="logo" />
        <Banner />
        <Entrance />
        <Presidium />
        <Activitys />
        <BottomBar active={0}/>
      </View>
    );
  }
}

export default Index;
