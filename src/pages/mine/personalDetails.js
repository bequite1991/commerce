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

  componentWillMount () {}

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const {defaultStore} = this.props;
    defaultStore.getPersonalData();
  }

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
    const {defaultStore,defaultStore:{mine_userinfo,mine_userinfo_array}} = this.props;
    const userPhoto = [];
    // const userPhoto = [{url:mine_userinfo.photo}];
    const enterpriseData = mine_userinfo_array.$mobx.values;
    return (
      <View className='personalData'>
        <View className="photo">
          <View className="label">头像</View>
          <View className="value">
            <Image src={this.state.userPhoto} />
          </View>
            <AtImagePicker
              files={userPhoto}
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