import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx';
import { AtLoadMore } from 'taro-ui'


import './activitys.scss';

@inject ('defaultStore')
@observer
class Activitys extends Component {

  constructor (props) {
    super (props);
    this.state = {
      page:1,
      pageSize:10,
      status:"more"
    };
  }

  componentWillMount () {}

  componentWillReact () {
    console.log ('componentWillReact');
  }

  componentDidMount () {
    const {defaultStore} = this.props;
    defaultStore.getActivitysList({page:this.state.page,pageSize:this.state.pageSize});
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
  //加载更多
  handleClick () {
    const {page,pageSize} = this.state;
    const {defaultStore,defaultStore:{activitysListStatus}} = this.props;
    
    // 开始加载
    defaultStore.getActivitysList({page:page + 1,pageSize:pageSize});
    // 设置最新page
    this.state.page = page + 1;
  }

  render () {
    const { defaultStore: { activitysList,activitysListStatus} } = this.props;
    const list = activitysList.$mobx.values;
    return (
      <View className='activitys'>
        <View className='title' onClick={this.goPage.bind(this,'activityInformation')}>全部活动</View>
        <View className="activitysList">
          {list.map((item,index)=>{
            return <View key={index} className='activitysItem' onClick={this.goPage.bind(this,'activityInformationDetail')}><View className='itemLeft'><View className="name">{item.name}</View><View className="descript">{item.descript}</View><View className="status">{item.status}</View><View className="tags">{item.tags}</View></View><View className="itemRight"><Image src={item.photo} /></View></View>
          })}
        </View>
        <AtLoadMore
          onClick={this.handleClick.bind(this)}
          status={activitysListStatus}
        />
      </View>
    );
  }
}

export default Activitys;
