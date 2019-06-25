import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomList from "../../components/customList/index.js";
import { AtImagePicker } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './assistant.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '我的助理',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      files:[],
      userPhoto:""
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

  goPage(url){
    Taro.navigateTo({
      url: url
    });
  }
  imageChange(value){
    this.setState({
      userPhoto:value[0].url
    })
  }

  eventClick(item){
    const t = this;
    const {defaultStore} = this.props;
    const param = {
      url:"/config/commerce_update_userinfo",
      key:item.key,
      value:item.value,
      editorType:item.editorType || "textarea"
    }
    defaultStore.setMineEditor(param);
    setTimeout(()=>{
      t.goPage("/pages/mine/editor")
    },500);
  }

  render () {
    const {defaultStore} = this.props;
    const enterpriseData = defaultStore.getAssistantData();
    return (
      <View className='assistantData'>
        <View className="photo">
          <View className="label">头像</View>
          <View className="value">
            <Image src={this.state.userPhoto} /></View>
            <AtImagePicker
              files={this.state.files}
              onChange={this.imageChange.bind(this)}
              length={1}
              className="photoSelect"
            />
        </View>
        <CustomList list={enterpriseData} onClick={this.eventClick.bind(this)} />
      </View>
    )
  }
}

export default Index 