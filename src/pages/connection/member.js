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

  refresh(type) {
    const { defaultStore} = this.props;
    if(type == "clear"){
      defaultStore.getConnectionMemberList(true, '');
    }else{
      defaultStore.getConnectionMemberList(true, this.props.keywords || '');
    }
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
    let isJoined = true;
    if(!Taro.getStorageSync("_TY_U")){
      isJoined = false;
    }
    if(Taro.getStorageSync("_TY_U") && Taro.getStorageSync("_TY_U").commerce_job == "user"){
      isJoined = false;
    }
    if(isJoined){
      this.goPage(item.id);
    }
  }

  render () {
    const { defaultStore} = this.props;
    const memberPage = defaultStore.memberPage.$mobx.values;
    const memberPageStatus = defaultStore.memberPageStatus;
    let isJoined = true;
    if(!Taro.getStorageSync("_TY_U")){
      isJoined = false;
    }
    if(Taro.getStorageSync("_TY_U") && Taro.getStorageSync("_TY_U").commerce_job == "user"){
      isJoined = false;
    }
    return (
        <View style='height:100vh'>
          <CustomAtIndexes
            list={memberPage}
            onClick={this.onClick.bind(this)}
            isJoined={isJoined}
          >
          </CustomAtIndexes>
        </View>
    )
  }
}

export default Index
