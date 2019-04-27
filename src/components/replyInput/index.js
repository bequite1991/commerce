import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtInput } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {};
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      url: url
    });
  }
  handleChange(){
    debugger
  }

  render () {
    const { value } = this.props;
    return (
      <AtInput
        className="replyInput"
        name='value'
        type='text'
        placeholder='说点什么呗~'
        value={value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default Index 