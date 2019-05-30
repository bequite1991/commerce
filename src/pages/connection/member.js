import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIndexes,AtFloatLayout, AtLoadMore  } from 'taro-ui'

import CustomAtIndexes from "../../components/indexes/index.js";

import './member.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      isOpened:false,
      currentItem:null,
    };
  }

  componentWillMount () {
    console.log('init...');
    const { defaultStore} = this.props;
    defaultStore.getConnectionMemberList(true, '');
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClose(){
    this.setState({
      isOpened:false
    })
  }

  refresh() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionMemberList(true, this.props.keywords || '');
  }

  handleClick() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionMemberList(false, this.props.keywords || '');
  }

  goPage(id){
    Taro.navigateTo({
      url: `/pages/wisdomMemberDetail/index?id=${id}`
    })
  }

  onClick(item){ 
    this.goPage(item.id);
  }

  render () {
    const { defaultStore} = this.props;
    const memberPage = defaultStore.memberPage.$mobx.values;
    const memberPageStatus = defaultStore.memberPageStatus;

    return (
        <View style='height:100vh'>
          <CustomAtIndexes
            list={memberPage}
            onClick={this.onClick.bind(this)}
          >
          </CustomAtIndexes>
        </View>
    )
  }
}

export default Index
