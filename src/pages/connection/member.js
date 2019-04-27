import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIndexes,AtFloatLayout, AtLoadMore  } from 'taro-ui'

import './member.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      isOpened:false,
      currentItem:null,
    };
  }

  componentWillMount () {
    console.log('init...');
    const { defaultStore} = this.props;
    defaultStore.getConnectionMemberList(true, '');
  }

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

  refresh() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionMemberList(true, this.props.keywords || '');
  }

  handleClick() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionMemberList(false, this.props.keywords || '');
  }

  render () {
    const { defaultStore} = this.props;
    const memberPage = defaultStore.memberPage.$mobx.values;
    const memberPageStatus = defaultStore.memberPageStatus;

    return (
      <View>
        <scroll-view scrollY={true}   scrollWithAnimation={true}>
          {memberPage.map((item,index)=>{
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
        </scroll-view>
        <AtLoadMore
          className="mb42"
          onClick={this.handleClick.bind(this)}
          status={memberPageStatus}
        />
      </View>
    )
  }
}

export default Index
