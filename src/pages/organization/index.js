import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import List from "./list.js";
import Consulate from "./consulate.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar,AtTabs, AtTabsPane } from 'taro-ui';

import './index.scss';


/**
 * 郊游：outing
 * 高尔夫：golf
 * 健身：body_building
 * 品茶：tea
 * 公益：commonweal
 */

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

  componentDidMount () {
    wx.showShareMenu();
    wx.showTabBar();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  search(keys){
    console.log('searchKey:', this.state.searchKey);
    const { defaultStore} = this.props;
    defaultStore.getOrganizationList('', this.state.searchKey);
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
          onChange={(val)=> this.setState({searchKey: val})}
          onActionClick={this.search.bind(this)}
        />
        {/*<AtTabs className="tabs" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>*/}
          {/*<AtTabsPane current={this.state.current} index={0} >*/}
            {/*<View style='background-color: #ffffff;' ><List type="outing"/></View>*/}
          {/*</AtTabsPane>*/}
          {/*<AtTabsPane current={this.state.current} index={1}>*/}
            {/*<View style='background-color: #ffffff;'><List type="golf"/></View>*/}
          {/*</AtTabsPane>*/}
          {/*<AtTabsPane current={this.state.current} index={2}>*/}
            {/*<View style='background-color: #ffffff;'><List type="body_building"/></View>*/}
          {/*</AtTabsPane>*/}
          {/*<AtTabsPane current={this.state.current} index={3}>*/}
            {/*<View style='background-color: #ffffff;'><List type="tea"/></View>*/}
          {/*</AtTabsPane>*/}
          {/*<AtTabsPane current={this.state.current} index={4}>*/}
            {/*<View style='background-color: #ffffff;'><List type="commonweal"/></View>*/}
          {/*</AtTabsPane>*/}
        {/*</AtTabs>*/}
        <List type=""/>
        <AtFab style="display:none;" onClick={this.goPage.bind(this,'organizationRegister')}>
          <Text className='at-fab__icon at-icon at-icon-add'></Text>
        </AtFab>
        {/*<BottomBar active={1} />*/}
      </View>
    )
  }
}

export default Index
