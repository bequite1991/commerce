import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIndexes,AtFloatLayout, AtLoadMore  } from 'taro-ui'

import CustomAtIndexes from "../../components/indexes/index.js";

import './facc.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      isOpened1:false,
      currentItem:null
    };
  }

  componentWillMount () {
    const { defaultStore} = this.props;
    defaultStore.getConnectionFaccList(true, this.props.keywords || '');
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
      isOpened1:false
    })
  }

  handleClick() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionFaccList(false, '');
  }

  refresh(type) {
    const { defaultStore} = this.props;
    if(type == "clear"){
      defaultStore.getConnectionMemberList(true, '');
    }else{
      defaultStore.getConnectionMemberList(true, this.props.keywords || '');
    }
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
    const faccPage = defaultStore.faccPage.$mobx.values;
    const faccPageStatus = defaultStore.faccPageStatus;
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
          list={faccPage}
          onClick={this.onClick.bind(this)}
          isJoined={isJoined}
        >
        </CustomAtIndexes>
      </View>
    )
  }
}

export default Index
