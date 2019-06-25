//1."http://ty-storage.oss-cn-hangzhou.aliyuncs.com/eae5392a98bb1fca9f6f4a4338bc56b0.jpg"
//2."http://ty-storage.oss-cn-hangzhou.aliyuncs.com/6b48aa494fd2131b884b934e701feb93.jpg"

//3."http://ty-storage.oss-cn-hangzhou.aliyuncs.com/c127e1af48baddd27b5e44c1d39968cc.jpg"

//4."http://ty-storage.oss-cn-hangzhou.aliyuncs.com/375c4d6ed218c7de662dd91694faeea5.jpg"

//5."http://ty-storage.oss-cn-hangzhou.aliyuncs.com/80bab430c03e881821f6b7445d89a5fa.jpg"




import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Banner from "./banner.js";
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtActionSheet, AtActionSheetItem,AtRadio,AtButton  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './ruler.scss';
import login from "../../utils/authLogin";


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '入会标准',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      rulers:["http://ty-storage.oss-cn-hangzhou.aliyuncs.com/eae5392a98bb1fca9f6f4a4338bc56b0.jpg","http://ty-storage.oss-cn-hangzhou.aliyuncs.com/6b48aa494fd2131b884b934e701feb93.jpg","http://ty-storage.oss-cn-hangzhou.aliyuncs.com/c127e1af48baddd27b5e44c1d39968cc.jpg","http://ty-storage.oss-cn-hangzhou.aliyuncs.com/375c4d6ed218c7de662dd91694faeea5.jpg","http://ty-storage.oss-cn-hangzhou.aliyuncs.com/80bab430c03e881821f6b7445d89a5fa.jpg"]
    };
  }

  render () {

    return (
      <View className='rulers'>
        {this.state.rulers.map((item,index)=>{
            return <Image className="content" key={index} src={item} lazyLoad={true}/>
          })}
      </View>
    )
  }
}

export default Index
