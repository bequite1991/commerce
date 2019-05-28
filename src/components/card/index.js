import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss';



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

  goPage(){
    const { href } = this.props;
    Taro.downloadFile({url:href}).then((res)=>{
      console.log('下载成功');
      Taro.saveFile({tempFilePath:res.tempFilePath}).then((resp2)=>{
        Taro.openDocument({filePath:resp2.savedFilePath,success: function (res) {
          console.log('打开文档成功')
        }})
      })
    });
  }

  render () {
    const { title,subTitle,href } = this.props;
    return (
      <View className='card'>
        <View className='cardHeader'>
          <View className='cardIcon'></View>
          <View className='title'>{title}</View>
          <View onClick={this.goPage} className='subTitle'>{subTitle || ""}</View>
        </View>
        <View className='cardContent'>{this.props.children}</View>
      </View>
    )
  }
}
export default Index 
