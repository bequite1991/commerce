import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtLoadMore } from 'taro-ui';

import Logo from '../../public/images/logo@3x.png';

import './mineActivitysManage.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  componentWillMount () {
    const { defaultStore} = this.props;
    defaultStore.getActivitysMineCreate();
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url, id){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/activityInformation/${url}?id=${id}`
    })
  }
  handleClick(){
    const { defaultStore } = this.props;
    defaultStore.getActivitysMineCreate();
  }

  render () {
    const { defaultStore:{activity_mine_create,activity_mine_create_status}} = this.props;
    const list = activity_mine_create.$mobx.values || [];
    console.log("list:",list);
    return (
      <View className='commerce'>
        <View className="activitysList">
          {list.map((item,index)=>{
            return <View onClick={() => this.goPage('createOrEdit', item.id)} key={index} className='activitysItem'>
              <View className="itemLeft"><Image src={item.photo} /></View>
              <View className='itemRight'>
                <View className="name">{item.title}</View>
                <View className="descript">{item.subtitle}</View>
              </View>
            </View>
          })}
        </View>
        <AtLoadMore
          onClick={this.handleClick.bind(this)}
          status={activity_mine_create_status}
        />
      </View>
    )
  }
}

export default Index
