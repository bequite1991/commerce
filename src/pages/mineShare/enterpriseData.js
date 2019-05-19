import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomList from "../../components/customList/index.js";
import { AtList, AtListItem  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './enterpriseData.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '公司信息',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {};
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      url: url
    });
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
      t.goPage("/pages/mineShare/editor")
    },500);
  }

  render () {
    const {defaultStore:{mine_enterpriseData}} = this.props;
    const enterpriseData = mine_enterpriseData.$mobx.values;
    return (
      <View className='enterpriseData'>
        <CustomList list={enterpriseData} onClick={this.eventClick.bind(this)} />
      </View>
    )
  }
}

export default Index 