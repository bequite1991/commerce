import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './activitys.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    this.handleClick()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(item){
    if(item.tags == "已结束"){
      return;
    }
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/activityInformationDetail/index?id=${item.id}`
    })
  }
  handleClick(){
    const { defaultStore } = this.props;
    defaultStore.getActivityInformList();
  }

  render () {
    const { defaultStore:{activity_activitysListStatus,activity_activityInformList}} = this.props;
    const activitysList = activity_activityInformList.$mobx.values;
    return (
      <View className='activitys'>
        <View className='title'>全部活动</View>
        <View className="activitysList">
          {activitysList.map((item,index)=>{
            return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,item)}><View className='itemLeft'><View className="name">{item.name}</View><View className="descript">{item.descript}</View><View className="status">{item.status}</View><View className="tags">{item.tags}</View></View><View className="itemRight"><Image src={item.photo} /></View></View>
          })}
        </View>
        <AtLoadMore
          onClick={this.handleClick.bind(this)}
          status={activity_activitysListStatus}
        />
      </View>
    )
  }
}

export default Index 
