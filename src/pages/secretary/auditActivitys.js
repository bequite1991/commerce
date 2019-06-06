import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtCalendar  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './auditActivitys.scss';


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
    const introduce = defaultStore.getSecretaryActivitysList();
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  activityDetailAudit(id){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/activityInformationDetail/index?id=${id}&isAudit=true`
    });
  }

  render () {
    const { defaultStore:{ secretary_organization_custom_activitys_audit} } = this.props;
    const list =  secretary_organization_custom_activitys_audit.$mobx.values;

    return (
      <View className='auditActivitys'>
        <View className="activitys">
          <View className="activitysList">
            {list.map((item,index)=>{
              return (<View key={index} className='activitysItem' onClick={this.activityDetailAudit.bind(this,item.id)}>
                  <View className="itemLeft"><Image src={item.picture} /></View>
                  <View className='itemRight'><View className="title">{item.title}</View><View className="apply">申请人：{item.userName}</View>

                  </View>
                  <View className="button">去审核</View>
                </View>)
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index 