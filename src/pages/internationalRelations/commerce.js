import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './commerce.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () {
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const {defaultStore} = this.props;
    defaultStore.getCommerceList();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { defaultStore} = this.props;
    const list = defaultStore['internation_commerce'].$mobx.values;
    return (
      <View className='commerce'>
        <View className="activitysList">
          {list.map((item,index)=>{
            return <View key={index} className='activitysItem'>
              <View className="itemLeft"><Image src={item.logo} lazyLoad={true}/></View>
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
