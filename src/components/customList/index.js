import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem  } from 'taro-ui';
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
    Taro.redirectTo({
      url: url
    });
  }
  emmitEvent(item){
    this.props.onClick(item);
  }

  render () {
    const { list } = this.props;
    return (
      <View className='enterpriseData'>
        <AtList className="customList">
          {list.map((item,index)=>{
            return (<AtListItem
              key={index}
              title={item.label}
              note={item.text || item.value + ""}
              arrow='right'
              onClick={this.emmitEvent.bind(this,item)}
            />)
          })}
        </AtList>
      </View>
    )
  }
}

export default Index 