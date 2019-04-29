import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { AtLoadMore } from 'taro-ui'

import './portal.scss';



@inject('defaultStore')
@observer
class Portal extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;
    const portalData = defaultStore.getPortalData();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/governmentDocking/index`
    })
  }
  handleClick(){
    const { defaultStore } = this.props;
    defaultStore.getPortalData();
  }

  render () {
    const { defaultStore:{directTrain,directTrainStatus} } = this.props;
    const list = directTrain.$mobx.valus;
    return (
        <View>
          <View className="portalList">
            {list.map((item,index)=>{return <View key={index} className='portalItem' onClick={this.goPage.bind(this,item.href)}><Image className="bg" src={item.src} /><View className="title">{item.title}</View></View>})}
          </View>
          <AtLoadMore
            onClick={this.handleClick.bind(this)}
            status={directTrainStatus}
          />
        </View>
    )
  }
}

export default Portal 
