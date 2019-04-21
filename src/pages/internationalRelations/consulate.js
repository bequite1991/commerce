import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './consulate.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { defaultStore} = this.props;
    const activitysList = defaultStore.getConsulateList();
    return (
      <View className='consulate'>
        <View className="activitysList">
          {activitysList.map((item,index)=>{
            return <View key={index} className='activitysItem'><View className="itemLeft"><Image src={item.photo} /></View><View className='itemRight'><View className="name">{item.name}</View><View className="descript">{item.descript}</View></View></View>
          })}
        </View>

      </View>
    )
  }
}

export default Index 
