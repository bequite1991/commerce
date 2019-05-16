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
    this.state = {
      formData:{

      }
    };
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
  handleChange(key,value){
    const { defaultStore,defaultStore:{mine_settingPrivacy}  } = this.props;
    const formData = mine_settingPrivacy;
    formData[key] = value.detail.value;
    defaultStore.settingPrivacy(formData);
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
            switchIsCheck={mine_settingPrivacy.hide_phone}
            onSwitchChange={this.handleChange.bind(this,"hide_phone")}
          />
          <AtListItem
            title='展示个人简介'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.hide_personal_introduce}
            onSwitchChange={this.handleChange.bind(this,"hide_personal_introduce")}
          />
          <AtListItem
            title='展示个人荣誉'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.hide_honor}
            onSwitchChange={this.handleChange.bind(this,"hide_honor")}
          />
          <AtListItem
            title='展示公司介绍'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.hide_company_introduce}
            onSwitchChange={this.handleChange.bind(this,"hide_company_introduce")}
          />
          <AtListItem
            title='展示公司信息'
            isSwitch
            switchColor="#003A80"
            switchIsCheck={mine_settingPrivacy.hide_company}
            onSwitchChange={this.handleChange.bind(this,"hide_company")}
          />
        </AtList>
      </View>
    )
  }
}

export default Index 