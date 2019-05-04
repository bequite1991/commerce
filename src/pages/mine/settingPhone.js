import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtButton } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './settingPhone.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '更改手机号码',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {};
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;
    // defaultStore.getSettingPhone();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mine/${url}`
    });
  }

  render () {
    const { defaultStore:{mine_userinfo} } = this.props;

    return (
      <View className='settingPhone'>
        <AtList>
          <AtListItem
            title='手机号码'
            extraText={mine_userinfo.phone}
          />
        </AtList>
        <AtButton onClick={this.goPage.bind(this,"settingPhoneChange")} className="submit" type='primary' size='normal'>更改手机号</AtButton>
      </View>
    )
  }
}

export default Index 