import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Entrance from "./entrance.js";
import Activitys from "./activitys.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar } from 'taro-ui';

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '活动资讯',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      searchKey:""
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

  search(keys){
    const { defaultStore} = this.props;
    defaultStore.getActivityInformList(this.state.searchKey);
  }


  render () {
    const { defaultStore: { counter } } = this.props
    return (
      <View className='activitysInformation'>
        <AtSearchBar
          className="search"
          value={this.state.searchKey}
          onChange={(val)=> this.setState({searchKey: val})}
          onActionClick={this.search.bind(this)}
        />
        <Entrance />
        <Activitys />
      </View>
    )
  }
}

export default Index
