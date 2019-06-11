import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './presidium.scss';

@inject ('defaultStore')
@observer
class Presidium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "0rpx"
    }
  }

  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {
    const {defaultStore,defaultStore:{home_presidiumList}} = this.props;
    defaultStore.getPresidiumList();
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/${url}/index`
    })
  }
  goWisdomMemberDetail(id){
    Taro.navigateTo({
      url: `/pages/wisdomMemberDetail/index?id=${id}`
    })
  }

  render () {
    const {defaultStore:{home_presidiumList}} = this.props;
    const list = home_presidiumList.$mobx.values;
    if(list.length*154 && this.state.width == "0rpx"){
      this.setState({
        width:list.length*137*2 + "rpx"
      })
    }
    return (
      <View className='presidium'>
        <View className='title' onClick={this.goPage.bind(this,'wisdom')}>主席团成员</View>
        <View className="presidiumContent">
          <View className="presidiumList clearfix" style={'width:' + this.state.width}>
            {list.map((item,index)=>{
              return <View key={index} className='presidiumItem' onClick={this.goWisdomMemberDetail.bind(this,item.user_id)}>
                    <View className="photo"><Image src={item.photo} lazyLoad={true}/></View>
                    <View className="name">{item.name || "暂无信息"}</View>
                    <View className="post">{item.post || "暂无信息"}</View>
                    <View className="company">{item.company||"暂无信息"}</View>
              </View>
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default Presidium;
