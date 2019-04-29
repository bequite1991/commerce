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

  componentWillMount () {
    const { defaultStore } = this.props;
    const id = this.$router.params.id;
    defaultStore.getOrganizationDetail(id);
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    const t = this;
    Taro.navigateTo({
      url: `/pages/organizationRegister/index?id=${t.$router.params.id}`
    });
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const { defaultStore } = this.props;
    const organizationDetail = defaultStore.org_detail;

    console.log('organizationDetail:', organizationDetail);

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
