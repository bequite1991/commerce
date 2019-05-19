import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtCalendar  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './myActivitys.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '我的活动',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentWillMount () {
    const { defaultStore } = this.props;
    let {formData,sexOpen,positionsArr} = this.state;
    const introduce = defaultStore.getMyRecentActivitys();
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mineShare/${url}`
    });
  }

  render () {
    const { defaultStore:{mine_recentActivitys} } = this.props;
    const list = mine_recentActivitys.$mobx.values;

    return (
      <View className='myActivitys'>
        <View className="calendar">
          <AtCalendar marks={ [ { value: '2019/4/29' } ] } />
        </View>
        <View className="activitys">
          <View className="titleTop">近期活动</View>
          <View className="activitysList">
            {list.map((item,index)=>{
              return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,'activityInformationDetail')}><View className="itemLeft"><Image src={item.photo} /></View><View className='itemRight'><View className="title">{item.title}</View><View className="subtitle">{item.subtitle}</View><View className="organization">{item.organization}</View><View className="time">时间：{item.time}</View></View><View className={item.status == "待进行"?"status1":"status2"}><View className="tagTriangle"></View><View className="tagText">{item.status}</View></View></View>
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index 