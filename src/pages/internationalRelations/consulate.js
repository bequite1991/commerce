import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './consulate.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () {
    console.log('componentWillReact')

    const {defaultStore} = this.props;
    defaultStore.getConsulateList();
  }

  componentWillReact () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { defaultStore} = this.props;
    const consulateList = defaultStore['internation_consulate'].$mobx.values;
    console.log('consulateList:',consulateList);
    return (
      <View className='consulate'>
        <View className="activitysList">
          {consulateList.map((item,index)=>{
            return <View key={index} className='activitysItem'>
              <View className="itemLeft">
                <Image src={item.logo} />
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
