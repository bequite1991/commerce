import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './consulate.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () {    
  }

  componentWillReact () {

  }

  componentDidMount () {
    const {defaultStore} = this.props;
    defaultStore.getConsulateList();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { defaultStore} = this.props;
    const consulateList = defaultStore['internation_consulate'].$mobx.values;
    return (
      <View className='consulate'>
        <View className="activitysList">
          {consulateList.map((item,index)=>{
            return <View key={index} className='activitysItem'>
              <View className="itemLeft">
                <Image src={item.logo} lazyLoad={true}/>
              </View>
              <View className='itemRight'>
                <View className="name">{item.title}</View>
                <View className="descript">{item.description}</View>
              </View>
            </View>
          })}
        </View>

      </View>
    )
  }
}

export default Index
