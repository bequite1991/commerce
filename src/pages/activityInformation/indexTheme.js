import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Entrance from "./entrance.js";
import Activitys from "./activitys.js";
import BottomBar from "../../components/bottomBar/index.js";

import { AtFab,AtSearchBar } from 'taro-ui';

import zdsy from '../../public/images/zdsy.png';
import kcbl from '../../public/images/kcbl.png';
import yxh from '../../public/images/yxh.png';
import zj from '../../public/images/zj.png';
import dsxy from '../../public/images/dsxy.png';
import xhs from '../../public/images/xhs.png';

import './indexTheme.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '品牌活动',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      searchKey:"",
      themes:{
        zdsy:{
          descript:"主席及外库智囊分享各领域最新 动态趋势，举办高端思想碰撞的 盛宴。",
          img:zdsy
        },
        kcbl:{
          descript:"科创部落，一个搜罗 全 球“高、 精、尖”创业项目、提 供创 意与 资本对接的创业平台孵化器，扶 持项目成长和扩张，在企业成长 的每一个阶段，提供指导与帮助。",
          img:kcbl
        },
        yxh:{
          descript:"分享商业大能的“高、深、远”， 他们的商业智慧、新沪商联合会 会员内部的优秀项目，以及专业 领域的行家分析，在“新常态”的 时代背景下，完成你我的转型、 升级，迎来事业与人生的新格局！。",
          img:yxh
        },
        dsxy:{
          descript:"主席及外库智囊分享各领域最新 动态趋势，举办高端思想碰撞的 盛宴。",
          img:dsxy
        },
        xhs:{
          descript:"“高尔夫“俱乐部：一个健康，沟 通，互动的运动社交平台。在这 里，与新沪商会的大能们在轻松 愉悦的状态中，交流思想，提高 商业格局，寻找合作契机。",
          img:xhs
        },
        zj:{
          descript:"走进会员企业，带您从内部了解 企业家成功的内因，为您的发展 提供借鉴与帮助！",
          img:zj
        }
      }
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    wx.showShareMenu();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  search(keys){
    const { defaultStore:{org_type_list}} = this.props;
    defaultStore.getActivityInformList(this.state.searchKey);
  }


  render () {
    const { defaultStore:{org_type_list}} = this.props;

    const type = this.$router.params.type || "zdsy";
    const data = org_type_list[this.$router.params.type || 1];
    const activitys = data.activitys.$mobx.values;
    debugger
    return (
      <View className='activitysInformation'>
        <View className="header">
          <Image src={data.photo} />
          <View className="descript">{data.subtitle}</View>
        </View>
        <View className='activitys'>
          <View className='title'>全部活动</View>
          <View className="activitysList">
            {activitys.map((item,index)=>{
              return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,item.id)}><View className='itemLeft'><View className="name">{item.name}</View><View className="descript">{item.descript}</View><View className="status">{item.status}</View><View className="tags">{item.tags}</View></View><View className="itemRight"><Image src={item.photo} /></View></View>
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index
