import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtIcon } from 'taro-ui'
import zdsy from '../../public/images/zdsy.png';
import kcbl from '../../public/images/kcbl.png';
import yxh from '../../public/images/yxh.png';
import zj from '../../public/images/zj.png';
import dsxy from '../../public/images/dsxy.png';
import xhs from '../../public/images/xhs.png';


import Logo from '../../public/images/logo@3x.png';

import './entrance.scss';



@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '新沪商联合会',
    navigationBarTextStyle: "black",
  }

  componentWillMount () {
    const { defaultStore} = this.props;
    defaultStore.getOrganizationList(null,null);
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: url
    })
  }

  render () {
    const { defaultStore:{org_type_list} } = this.props;
    org_type_list.length = 6;
    const list = org_type_list;

    // <View className='entrance' onClick={this.goPage.bind(this,'indexTheme?type=zdsy')} key="商道智慧">
    //       <View className='tips'></View>
    //       <View><Image className="png" src={zdsy}/></View>
    //     </View>
    //     <View className='entrance' onClick={this.goPage.bind(this,'indexTheme?type=kcbl')}>
    //       <View className='tips'></View>
    //       <View><Image className="png" src={kcbl} /></View>
    //     </View>
    //     <View className='entrance' onClick={this.goPage.bind(this,'indexTheme?type=yxh')}>
    //       <View className='tips'></View>
    //       <View><Image className="png" src={yxh} /></View>
    //     </View>
    //     <View className='entrance' onClick={this.goPage.bind(this,'indexTheme?type=dsxy')}>
    //       <View className='tips'></View>
    //       <View><Image className="png" src={dsxy} /></View>
    //     </View>
    //     <View className='entrance' onClick={this.goPage.bind(this,'indexTheme?type=xhs')}>
    //       <View className='tips'></View>
    //       <View><Image className="png" src={xhs} /></View>
    //     </View>
    //     <View className='entrance' onClick={this.goPage.bind(this,'indexTheme?type=zj')}>
    //       <View className='tips'></View>
    //       <View><Image className="png" src={zj} /></View>
    //     </View>
    return (
      <View className="entranceList">
        {list.map((item,index)=>{
            return <View className='entrance' onClick={this.goPage.bind(this,`indexTheme?type=${item.id}`)} key={item.title}>
              <View className='tips'></View>
              <View><Image className="png" src={item.photo}/></View>
            </View>
          })}
      </View>
    )
  }
}

export default Index 
