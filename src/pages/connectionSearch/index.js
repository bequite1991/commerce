import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Facc from "./facc.js";
import Member from "./member.js";
import BottomBar from "../../components/bottomBar/index.js";
import Tags from "../../components/tags/index.js";

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
        <View className="suggess">
          <View className="suggessGroup">
            <View className="title">
              主席团成员搜索
            </View>
            <Tags tags={["名誉会长","会长","轮值主席","常务副会长","常务副会长","副会长"]} type="tags2" />
          </View>
          <View className="suggessGroup">
            <View className="title">
              行业搜索
            </View>
            <Tags tags={["医疗","金融","教育"]} type="tags2" />
          </View>
        </View>
        
      </View>
    )
  }
}

export default Index 
