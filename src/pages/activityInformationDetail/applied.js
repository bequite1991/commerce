import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtButton } from 'taro-ui'

import './applied.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: "已报名",
    navigationBarTextStyle: "black",
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    const { defaultStore} = this.props;
    defaultStore.getAppliedList();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(id){
    Taro.navigateTo({
      url: `/pages/wisdomMemberDetail/index?id=${id}`
    })
  }

  render () {
    const { messages} = this.props;
    const { defaultStore:{activity_appliedList}} = this.props;
    const list = activity_appliedList.$mobx.values;
    return (
        <View className="appliedList">
          {list.map((item,index)=>{
            return (<View className="message" key={index} onClick={this.goPage.bind(this,item.user_id)}>
            <View className="userInfo">
              <View className="photo">
                <Image src={item.photo} />
              </View>
              <View className="info">
                <View className="name">{item.name}</View>
                <View className="post">{item.company} {" "} {item.post}</View>
              </View>
            </View>
          </View>)
          })}
        </View>
    )
  }
}

export default Index 