import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import List from "./list.js";
import Consulate from "./consulate.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar,AtTabs, AtTabsPane } from 'taro-ui';

import 'taro-ui/dist/style/index.scss'

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '组织',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      searchKey:"",
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

  search(keys){

  }

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


  render () {
    const { defaultStore: { counter } } = this.props
    const tabList = [{ title: '郊游' }, { title: '高尔夫' }, { title: '健身' }, { title: '品茶' }, { title: '公益' }];
    return (
      <View className='internationalRelations'>
        <AtSearchBar
          className="search"
          placeholder="搜索组织、俱乐部"
          value={this.state.searchKey}
          onActionClick={this.search.bind(this)}
        />
        <AtTabs className="tabs" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #ffffff;' ><List /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #ffffff;'><List /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='background-color: #ffffff;'><List /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='background-color: #ffffff;'><List /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='background-color: #ffffff;'><List /></View>
          </AtTabsPane>
        </AtTabs>
        <AtFab onClick={this.goPage.bind(this,'organizationRegister')}>
          <Text className='at-fab__icon at-icon at-icon-add'></Text>
        </AtFab>
        <BottomBar active={2} />
      </View>
    )
  }
}

export default Index 
