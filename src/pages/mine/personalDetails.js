import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomList from "../../components/customList/index.js";
import { AtImagePicker } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './personalDetails.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '个人信息',
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
    debugger
    this.setState({
      userPhoto:value[0].url
    })
  }

  render () {
    const {defaultStore} = this.props;
    const enterpriseData = defaultStore.getPersonalData();
    return (
      <View className='personalData'>
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
        <CustomList list={enterpriseData} />
      </View>
    )
  }
}

export default Index 