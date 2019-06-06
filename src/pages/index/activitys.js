import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx';
import { AtLoadMore } from 'taro-ui'


import './activitys.scss';

@inject ('defaultStore')
@observer
class Activitys extends Component {

  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {
    const {defaultStore} = this.props;
    defaultStore.getActivitysList();
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: url
    })
  }
  //加载更多
  handleClick () {
    const {page,pageSize} = this.state;
    const {defaultStore,defaultStore:{home_activitysListStatus}} = this.props;
    
    // 开始加载
    defaultStore.getActivitysList();
  }
  // <AtLoadMore
  //   onClick={this.handleClick.bind(this)}
  //   status={activitysListStatus}
  // />

  render () {
    const { defaultStore: { home_activitysList,home_activitysListStatus} } = this.props;
    const list = home_activitysList.$mobx.values;
    return (
      <View className='activitys'>
        <View className='titleTop' onClick={this.goPage.bind(this,`/pages/activityInformation/index`)}>全部活动</View>
        <View className="activitysList">
          {list.map((item,index)=>{
            return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,`/pages/activityInformationDetail/index?id=${item.id}`,item.id)}><View className='itemLeft'><View className="name">{item.name}</View><View className="descript">{item.descript}</View><View className="status">{item.status}</View><View className="tags">{item.tags}</View></View><View className="itemRight"><Image src={item.photo} lazyLoad={true}/></View></View>
          })}
        </View>
      </View>
    );
  }
}

export default Activitys;
