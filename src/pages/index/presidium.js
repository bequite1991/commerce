import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

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

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  render () {
    const { defaultStore } = this.props
    const presidiumList = defaultStore.getPresidiumList();

    return (
      <View className='presidium'>
        <View className='title' onClick={this.goPage.bind(this,'wisdom')}>主席团成员</View>
        <View className="presidiumList">
          {presidiumList.map((item,index)=>{
            return <View key={index} className='presidiumItem' onClick={this.goPage.bind(this,'wisdomMemberDetail')}><View className="photo"><Image src={item.photo} /></View><View className="name">{item.name}</View><View className="post">{item.post}</View><View className="company">{item.company}</View></View>
          })}
        </View>

      </View>
    )
  }
}

export default Index 
