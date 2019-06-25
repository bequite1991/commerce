import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss';



@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      active:0
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

  goPage(){
    const { href } = this.props;
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: href
    });
  }
  onChange(index){
    const { tags } = this.props;
    this.setState({
      active:index
    });
    this.props.defaultActive = index
    this.props.onChange(tags[index])
  }

  render () {
    const { tags } = this.props;
    // const active = this.props.defaultActive || this.state.
    return (
      <View className={this.props.type || "tags"}>
        {tags.map((item,index)=>{
          return <View className="tag" className={this.props.defaultActive == index?"tag active":"tag default"} key={index} onClick={this.onChange.bind(this,index)}><View className="words">{item}<View className="border"></View></View></View>
        })}
      </View>
    )
  }
}
export default Index 
