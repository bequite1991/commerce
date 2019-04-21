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
    navigationBarTitleText: '活动详情',
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
    const activityDetail = defaultStore.getActivityDetail();

    const datas = {
      photo:"https://taro-ui.aotu.io/img/logo-taro.png",
      name:"玩转地球天河汇123健康俱乐部",
      time:"2019-04-15 13:00",
      address:"北京市朝阳区高碑店乡高碑店村一区33号",
      rate:"1000积分",
      origin:"王铁柱",
      phone:"13888888888",
      status:"10人",
      comment:[],
      detailPhotos:"https://taro-ui.aotu.io/img/logo-taro.png"
    };



    return (
      <View className='introdeuce'>
        <Banner />
        <View className="title">{activityDetail.name}</View>
        <Card title="商会介绍" subTitle="更多" href="pages/joinUs/index">
            
        </Card>
        <Card title="合作伙伴" subTitle="全部" href="pages/joinUs/index">

        </Card>
        
        <AtButton className="apply" type='primary' onClick={this.goPage}>申请</AtButton>
      </View>
    )
  }
}

export default Index 