import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './presidium.scss';


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

  increment = () => {
    const { defaultStore } = this.props
    defaultStore.increment()
  }

  decrement = () => {
    const { defaultStore } = this.props
    defaultStore.decrement()
  }

  incrementAsync = () => {
    const { defaultStore } = this.props
    defaultStore.incrementAsync()
  }

  render () {
    const { defaultStore } = this.props
    const presidiumList = defaultStore.getPresidiumList();

    return (
      <View className='presidium'>
        <View className='title'>主席团成员</View>
        <View className="presidiumList">
          {presidiumList.map((item,index)=>{
            return <View key={index} className='presidiumItem'><View className="photo"><Image src={item.photo} /></View><View className="name">{item.name}</View><View className="post">{item.post}</View><View className="company">{item.company}</View></View>
          })}
        </View>

      </View>
    )
  }
}

export default Index 
