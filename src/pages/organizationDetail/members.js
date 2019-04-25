import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import Logo from '../../public/images/logo@3x.png';

import './banner.scss';



@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { members } = this.props;
    return (
      <View className="members">
        {members.map((item,index)=>{
            return (
              <View key={index} className="group">
                <View className="groupName">{item.group}</View>
                <View className="memberList">{item.list.map((member,key)=>{
                  return (
                    <View key={key} className="member">
                      <View className="memberPhoto"><Image src={member.photo} /></View>
                      <View className="memberInfo">
                        <View className="memberName">{member.name}</View>
                        <View className="memberSubtitle">{member.subtitle}</View>
                      </View>
                      <View className="memberPosition">{member.position}</View>
                    </View>)
                  })}
                </View>
              </View>)
          })}
      </View>
    )
  }
}

export default Index 
