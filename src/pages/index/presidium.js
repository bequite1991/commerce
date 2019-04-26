import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './presidium.scss';

@inject ('defaultStore')
@observer
class Presidium extends Component {
  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {
    const {defaultStore} = this.props;
    defaultStore.getPresidiumList();
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }

  render () {
    const {defaultStore:{home_presidiumList}} = this.props;
    const list = home_presidiumList.$mobx.values;
    return (
      <View className='presidium'>
        <View className='title' onClick={this.goPage.bind(this,'wisdom')}>主席团成员</View>
        <View className="presidiumList">
          {list.map((item,index)=>{
            return <View key={index} className='presidiumItem' onClick={this.goPage.bind(this,'wisdomMemberDetail')}><View className="photo"><Image src={item.photo} /></View><View className="name">{item.name}</View><View className="post">{item.post}</View><View className="company">{item.company}</View></View>
          })}
        </View>

      </View>
    );
  }
}

export default Presidium;
