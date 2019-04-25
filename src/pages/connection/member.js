import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIndexes,AtFloatLayout  } from 'taro-ui'

import './member.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      isOpened:false,
      currentItem:null
    };
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick (item) {
    console.log(item)
    this.setState({
      currentItem:item,
      isOpened:true
    })
  }
  handleClose(){
    this.setState({
      isOpened:false
    })
  }

  render () {
    const { defaultStore} = this.props;
    const activitysList = defaultStore.getConnectionMemberList();
    return (
      <View>
        {activitysList.map((item,index)=>{
          return (<View className="connectionMemberBase" key={index}>
            <View className="border"></View>
            <View className="photo">
              <Image src={item.photo} />
            </View>
            <View className="info">
              <View className="name">{item.name}</View>
              <View className="position">{item.position}</View>
              <View className="company">{item.company}</View>
              <View className="phone">联系电话：{item.phone}</View>
            </View>
          </View>)
        })}
      </View>
    )
  }
}

export default Index 
