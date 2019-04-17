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

  componentDidMount () { }

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
    const { defaultStore } = this.props;
    const introduce = defaultStore.getIntroduce();
    const parntersData = introduce.partner;
    const brandsData = introduce.brands;
    return (
      <View className='introdeuce'>
        <Banner />
        <Card title="商会介绍" subTitle="更多" href="pages/joinUs/index">
            {introduce.introduce}
        </Card>
        <Card title="合作伙伴" subTitle="全部" href="pages/joinUs/index">
            {parntersData.map((item,index)=>{
            return <Image key={item.name} src={item.src}  className="logo"/>
          })}
        </Card>
        <Card title="活动品牌" subTitle="更多" href="pages/joinUs/index">
            <View className="brands">
              {brandsData.map((item,index)=>{
                return <View className="brand" key={item.name}><Image src={item.src} className="brandImg"/><Text className="subTitle">{item.title}</Text></View>
              })}
            </View>
        </Card>
        <AtButton className="apply" type='primary' onClick={this.goPage}>申请</AtButton>
      </View>
    )
  }
}

export default Index 