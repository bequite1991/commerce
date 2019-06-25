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

  goPage(url, id){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index?id=${id}`
    })
  }

  render () {
    // const {activitys} = this.props;
    const { defaultStore:{org_detail} } = this.props;
    const activitys = org_detail.activitys?org_detail.activitys.$mobx.values : [];
    console.log("activitys:",activitys);
    return (
        <View className="activitys">
          {activitys.map((item,index)=>{
            return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,'activityInformationDetail',item.id)}><View className='itemLeft'><View className="name">{item.name}</View><View className="descript">{item.descript}</View><View className="status">{item.status}</View><View className="tags">{item.tags}</View></View><View className="itemRight"><Image src={item.photo} /></View></View>
          })}
        </View>
    );
  }
}

export default Activitys;
