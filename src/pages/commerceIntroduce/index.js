import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { defaultStore } = this.props;
    defaultStore.getCommerceList();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
    });
  }

  render () {
    const { defaultStore,defaultStore:{home_activitysList,internation_commerce} } = this.props;
    const introduce = defaultStore.getIntroduce();
    const parntersData = internation_commerce.$mobx.values;
    const brandsData = home_activitysList.$mobx.values;
    parntersData.length = 6;
    return (
      <View className='introdeuce'>
        <Banner />
        <Card title="商会介绍" subTitle="更多" href="pages/joinUs/index">
            {introduce.introduce}
        </Card>
        <Card title="合作伙伴" subTitle="全部" href="pages/joinUs/index">
            {parntersData.map((item,index)=>{
            return <Image key={item.title} src={item.logo}  className="logo"/>
          })}
        </Card>
        <Card title="活动品牌" subTitle="更多" href="pages/joinUs/index">
            <View className="brands">
              {brandsData.map((item,index)=>{
                return <View className="brand" key={item.name}><Image src={item.picture} className="brandImg"/><Text className="subTitle">{item.title}</Text></View>
              })}
            </View>
        </Card>
        <AtButton className="apply" type='primary' onClick={this.goPage}>申请</AtButton>
      </View>
    )
  }
}

export default Index 