import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Manage from "./mineActivitysManage.js";
import Join from "./mineActivitysJoin.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar,AtTabs, AtTabsPane,AtButton} from 'taro-ui';

import './mineActivitys.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '我的活动',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      searchKey:"",
      current: 0,
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    wx.showShareMenu();
    wx.showTabBar();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  // <View className={this.state.current == 1?"tabButton activity":"tabButton"} onClick={this.handleClick.bind(this,1)}>专家委员会</View>

  render () {
    const { defaultStore: { counter } } = this.props
    const tabList = [{ title: '管理我的活动' }, { title: '我参加的活动' }];
    return (
      <View className='internationalRelations'>
        <View className={this.state.current == 0?"tabButton activity":"tabButton"} onClick={this.handleClick.bind(this,0)}>管理我的活动</View>
        <View className={this.state.current == 1?"tabButton activity":"tabButton"} onClick={this.handleClick.bind(this,1)}>我参加的活动</View>
        
        <View className={this.state.current == 0 ?"":"displayNone"}>
          <Manage ref="Manage" id="Manage" />
        </View>
        <View className={this.state.current == 1?"":"displayNone"}>
          <Join ref="Join" />
        </View>
      </View>
    )
  }
}

export default Index
