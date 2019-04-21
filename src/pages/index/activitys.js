import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import './activitys.scss';

@inject ('defaultStore')
@observer
class Activitys extends Component {

  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {}

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
    const {defaultStore} = this.props;
    const activitysList = defaultStore.getActivitysList ();
    return (
      <View className='activitys'>
        <View className='title' onClick={this.goPage.bind(this,'activityInformation')}>全部活动</View>
        <View className="activitysList">
          {activitysList.map((item,index)=>{
            return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,'activityInformationDetail')}><View className='itemLeft'><View className="name">{item.name}</View><View className="descript">{item.descript}</View><View className="status">{item.status}</View><View className="tags">{item.tags}</View></View><View className="itemRight"><Image src={item.photo} /></View></View>
          })}
        </View>
      </View>
    );
  }
}

export default Activitys;
