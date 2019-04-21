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
      <View style='height:65vh'>
        <AtIndexes
          list={activitysList}
          onClick={this.onClick.bind(this)}
        > 
        </AtIndexes>
        <AtFloatLayout key="0" isOpened={this.state.isOpened} title={this.state.currentItem.name} onClose={this.handleClose.bind(this)}>
          <View className="connectionMemberBase">
            <View className="photo">
              <Image src={this.state.currentItem.photo} />
            </View>
            <View className="info">
              <View className="name">{this.state.currentItem.name}</View>
              <View className="position">{this.state.currentItem.position}</View>
              <View className="company">公司名称：{this.state.currentItem.company}</View>
              <View className="phone">联系方式：{this.state.currentItem.phone}</View>
            </View>
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}

export default Index 
