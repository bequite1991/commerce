import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './list.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () {
    const { defaultStore} = this.props;
    defaultStore.getOrganizationList(this.props.type);
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }


  render () {
    const { defaultStore} = this.props;
    const list = defaultStore.org_type_list[this.props.type];
    return (
      <View className='commerce'>
        <View className="activitysList">
          {list.map((item,index)=>{
            return <View onClick={this.goPage.bind(this,'organizationDetail')} key={index} className='activitysItem'>
              <View className="itemLeft"><Image src={item.photo} /></View>
              <View className='itemRight'>
                <View className="name">{item.title}</View>
                <View className="descript">{item.subtitle}</View>
                <View className="status">{item.members}位成员参加</View>
              </View>
              <View className="border">
            </View>
              <View className="activitys">
                {item.activitys.map((act,key)=>{
                    return <View key={key} className='activity' onClick={this.goPage.bind(this,'activityInformationDetail')}><View className="activityPhoto"><Image src={act.photo} /></View><View className="activityTitle">{act.title}</View><View className="activityTime">{act.time} {act.address}</View></View>
                  })}
            </View>
            </View>
          })}
        </View>

      </View>
    )
  }
}

export default Index
