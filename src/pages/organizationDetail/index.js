import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Members from "./members.js";
import Activitys from "./activitys.js";
import Card from "../../components/card/index.js";
import { AtButton,AtTabs,AtTabsPane } from 'taro-ui'

import './index.scss';


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
      current: 0
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

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
    });
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const { defaultStore } = this.props;
    const organizationDetail = defaultStore.getOrganizationDetail();
    const tabList = [{ title: '成员' }, { title: '活动' }];
    return (
      <View className='detail'>
        <Banner header={organizationDetail.header} />
        <AtTabs className="tabs" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #ffffff;' ><Members members={organizationDetail.members} /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #ffffff;'><Activitys activitys={organizationDetail.activitys} /></View>
          </AtTabsPane>
        </AtTabs>
        <AtButton className="apply" type='primary' onClick={this.goPage}>申请</AtButton>
      </View>
    )
  }
}

export default Index 