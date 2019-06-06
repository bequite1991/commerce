import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtCalendar  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './auditOrgs.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '我的活动',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentWillMount () {
    const { defaultStore } = this.props;
    let {formData,sexOpen,positionsArr} = this.state;
    const introduce = defaultStore.getSecretaryOrganizationList();
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url,id){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/secretary/${url}?id=${id}`
    });
  }

  render () {
    const { defaultStore:{secretary_organization_custom_audit} } = this.props;
    const list = secretary_organization_custom_audit.$mobx.values;

    return (
      <View className='auditOrgs'>
        <View className="activitys">
          <View className="activitysList">
            {list.map((item,index)=>{
              return (
                <View key={index} className='org' onClick={this.goPage.bind(this,'auditDetail',item.id)}>
                  <View className="itemLeft"><Image src={item.logo} /></View>
                  <View className='itemRight'><View className="title">{item.name}</View><View className="apply">申请人：{item.userName}</View>

                  </View>
                  <View className="button">去审核</View>
                </View>
                )
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index 