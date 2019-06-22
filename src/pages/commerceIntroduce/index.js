import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import Presidium from "../index/presidium.js"

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
    // defaultStore.getActivitysBrands();
    wx.showShareMenu();
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
    let isJoined = true;
    if(!wx.getStorageSync("_TY_U")){
      isJoined = false
    }
    if(wx.getStorageSync("_TY_U") && wx.getStorageSync("_TY_U") == "user"){
      isJoined = false
    }
    return (
      <View className='introdeuce'>
        <Banner />
        <Card title="商会介绍" subTitle="更多" href="introduce">
            {introduce.introduce}
        </Card>
        <Card title="商会主席团成员" subTitle="更多" href="/pages/connection/index">
          <Presidium hideTitle={true}/>
          {/*<Image className="partnerLogos" src="http://ty-storage.oss-cn-hangzhou.aliyuncs.com/c283499078f837d91a98f20690b8621e.png" />
             <View className="brands">
              {brandsData.map((item,index)=>{
                return <View className="brand" key={item.name}><Image src={item.picture} className="brandImg"/><Text className="subTitle">{item.title}</Text></View>
              })}
            </View>*/}
        </Card>
        <Card title="合作伙伴" subTitle="全部" href="partner">
          <Image style="height:280rpx;width:100%;" src="http://ty-storage.oss-cn-hangzhou.aliyuncs.com/b4aa50a03d38098aa217666e29eb1758.png" />
          {/*{parntersData.map((item,index)=>{
            return <Image key={item.title} src={item.logo}  className="logo"/>
          })}*/}
        </Card>
        <AtButton className={isJoined && !isJoined?"displayNone":"apply"} type='primary' onClick={this.goPage}>申请加入</AtButton>
      </View>
    )
  }
}

export default Index 