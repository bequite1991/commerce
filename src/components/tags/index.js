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
    this.setState({
      active:index
    });
  }

  render () {
    const { tags } = this.props;
    return (
      <View className={this.props.type || "tags"}>
        {tags.map((item,index)=>{
          return <View className="tag" className={active == index?"tag active":"tag default"} key={index} onClick={this.onChange.bind(this,index)}><View className="words">{item}<View className="border"></View></View></View>
        })}
      </View>
    )
  }
}
export default Index 
