import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';

import './portal.scss';



@inject('defaultStore')
@observer
class Portal extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(param){
     Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: param
    })
  }

  render () {
    const { defaultStore } = this.props;
    const portalData = defaultStore.getPortalData();

    return (
        <View>
          <View className="portalList">
            {portalData.map((item,index)=>{return <View key={index} className='portalItem' onClick={this.goPage.bind(this,item.href)}><Image className="bg" src={item.src} /><View className="title">{item.title}</View></View>})}
          </View>
        </View>
    )
  }
}

export default Portal 
