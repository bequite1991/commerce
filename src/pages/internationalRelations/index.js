import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Commerce from "./commerce.js";
import Consulate from "./consulate.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar,AtTabs, AtTabsPane } from 'taro-ui';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '国际关系',
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

  componentDidMount () {
    wx.showShareMenu();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange(val) {
    this.setState({
      searchKey: val
    })
  }

  search(keys){
    const {defaultStore} = this.props;
    if(this.state.current == 0){
      defaultStore.getConsulateList(this.state.searchKey);
    }else{
      defaultStore.getCommerceList(this.state.searchKey);
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  onClear(){
    this.state.searchKey = null
    this.search();
  }


  render () {
    const { defaultStore: { counter } } = this.props
    const tabList = [{ title: '驻沪领事馆' },{ title: '国际商会' }];
    return (
      <View className='internationalRelations'>
        <AtSearchBar
          className="search"
          placeholder="搜索组织、俱乐部"
          value={this.state.searchKey}
          onActionClick={this.search.bind(this)}
          onChange={this.onChange.bind(this)}
          onClear={this.onClear.bind(this)}
        />
        <AtTabs className="tabs" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #ffffff;' ><Consulate /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #ffffff;'><Commerce /></View>
          </AtTabsPane>
        </AtTabs>

      </View>
    )
  }
}

export default Index 
