import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './settingPrivacy.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '隐私',
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
    defaultStore.getSettingPrivacy();
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
  handleChange(){

  }

  render () {
    const { defaultStore:{mine_settingPrivacy} } = this.props;

    return (
      <View className='settingPrivacy'>
        <AtList>
          <AtListItem
            title='公开手机号码'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.phone}
            onSwitchChange={this.handleChange.bind(this,"phone")}
          />
          <AtListItem
            title='展示个人简介'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.abstract}
            onSwitchChange={this.handleChange.bind(this,"abstract")}
          />
          <AtListItem
            title='展示个人荣誉'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.honor}
            onSwitchChange={this.handleChange.bind(this,"honor")}
          />
          <AtListItem
            title='展示公司介绍'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.companyAbstract}
            onSwitchChange={this.handleChange.bind(this,"companyAbstract")}
          />
          <AtListItem
            title='展示公司信息'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.companyInfo}
            onSwitchChange={this.handleChange.bind(this,"companyInfo")}
          />
        </AtList>
      </View>
    )
  }
}

export default Index 