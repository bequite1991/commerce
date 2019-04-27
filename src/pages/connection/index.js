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


  render () {
    const { defaultStore: { counter } } = this.props
    const tabList = [{ title: '会员' }, { title: '专家委员会' }];
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
            <Member />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <Facc />
          </AtTabsPane>
        </AtTabs>
        <BottomBar active={1}/>
      </View>
    )
  }
}

export default Index 
