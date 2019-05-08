import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Facc from "./facc.js";
import Member from "./member.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar,AtTabs, AtTabsPane} from 'taro-ui';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '人脉',
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

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  search(e){
    const query = Taro.createSelectorQuery().select('#member');
    // 刷新页面
    if(this.state.current === 0){
      query._selectorQuery._defaultComponent.$component.$$refs[0].target.refresh();
    }else{
      query._selectorQuery._defaultComponent.$component.$$refs[1].target.refresh();
    }
  }
  onChange(val) {
    this.setState({
      searchKey: val
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const { defaultStore: { counter } } = this.props
    const tabList = [{ title: '会员' }, { title: '专家委员会' }];
    return (
      <View className='internationalRelations'>
        <AtSearchBar
          className="search"
          placeholder="搜索组织、俱乐部"
          value={this.state.searchKey}
          onChange={this.onChange.bind(this)}
          onActionClick={this.search.bind(this)}
        />
        <View className={this.state.current == 0?"tabButton activity":"tabButton"} onClick={this.handleClick.bind(this,0)}>会员</View>
        <View className={this.state.current == 1?"tabButton activity":"tabButton"} onClick={this.handleClick.bind(this,1)}>专家委员会</View>
        <View className={this.state.current == 0?"":"displayNone"}>
          <Member ref="member" id="member" keywords={this.state.searchKey} />
        </View>
        <View className={this.state.current == 1?"":"displayNone"}>
          <Facc ref="facc" keywords={this.state.searchKey} />
        </View>

        <BottomBar active={2}/>
      </View>
    )
  }
}

export default Index
