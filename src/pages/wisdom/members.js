import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { AtLoadMore } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './members.scss';

const Job = {
  honor_chairman: '名誉会长',
  chairman: '会长',
  shift_chairman: '轮值主席',
  expert: '专家委员会'
}

@inject('defaultStore')
@observer
class Memebers extends Component {

  constructor (props) {
    super (props);
    this.state = {
      status: 'more',
      toView:"honoraryPresident",
      scroll:true
    };
  }

  componentWillMount () {
    const {defaultStore} = this.props;
    defaultStore.getWisdomMembers();
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick () {
    // 开始加载
    this.setState({
      status: 'loading'
    })
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }

  goAnchor(name){
    this.setState({
      toView:name,
    });
  }

  goPage(id){
    Taro.navigateTo({
      url: `/pages/wisdomMemberDetail/index?id=${id}`
    })
  }

  render () {
    const { defaultStore} = this.props;
    const honoraryPresident = defaultStore['wisdom_honoraryPresident'].$mobx.values;
    const president = defaultStore['wisdom_president'].$mobx.values;
    const rotatingChairman = defaultStore['wisdom_rotatingChairman'].$mobx.values;
    const committeeExperts = defaultStore['wisdom_committeeExperts'].$mobx.values;

    return (
      <View className='wisdomMembersList'>
        <View className="anchor">
          <Text onClick={this.goAnchor.bind(this,"honoraryPresident")} className={this.state.toView == "honoraryPresident"?"active":""} data-opt="honoraryPresident">名誉会长</Text>
          <Text onClick={this.goAnchor.bind(this,"president")} className={this.state.toView == "president"?"active":""} data-opt="president">会长</Text>
          <Text onClick={this.goAnchor.bind(this,"rotatingChairman")} className={this.state.toView == "rotatingChairman"?"active":""} data-opt="rotatingChairman">轮值主席</Text>
          <Text onClick={this.goAnchor.bind(this,"committeeExperts")} className={this.state.toView == "committeeExperts"?"active":""} data-opt="committeeExperts">专家委员会</Text>
        </View>
        <scroll-view  scroll-into-view={this.state.toView}  scrollY={this.state.scroll}   scrollWithAnimation={this.state.scroll} className="scr">
          <View className="title" id="honoraryPresident">名誉会长</View>
          <View className="wisdomMembers">
            {honoraryPresident.map((item,index)=>{
              return <View key={index} className='member' onClick={()=>{this.goPage(item.id)}}>
                <View className="photo"><Image src={item.photo} /></View>
                <View className="position">{Job[item.commerce_job]}</View>
                <View className="name">{item.name}</View>
                <View className="descript">{item.company_name||''}<Text className="p10">{item.job_title||''}</Text></View>
              </View>
            })}
          </View>
          <View className="title" id="president">会长</View>
          <View className="wisdomMembers">
            {president.map((item,index)=>{
              return <View key={index} className='member' onClick={()=>this.goPage(item.id)}>
                <View className="photo"><Image src={item.photo} /></View><View className="position">{Job[item.commerce_job]}</View>
                <View className="name">{item.name}</View><View className="descript">{item.company_name||''}<Text className="p10">{item.job_title||''}</Text></View>
              </View>
            })}
          </View>
          <View className="title" id="rotatingChairman">轮值主席</View>
          <View className="wisdomMembers">
            {rotatingChairman.map((item,index)=>{
              return <View key={index} className='member' onClick={()=>this.goPage(item.id)}>
                <View className="photo"><Image src={item.photo} /></View><View className="position">{Job[item.commerce_job]}</View>
                <View className="name">{item.name}</View><View className="descript">{item.company_name||''}<Text className="p10">{item.job_title||''}</Text></View>
              </View>
            })}
          </View>
          <View className="title" id="committeeExperts">专家委员会</View>
          <View className="wisdomMembers">
            {committeeExperts.map((item,index)=>{
              return <View key={index} className='member' onClick={()=>this.goPage(item.id)}>
                <View className="photo"><Image src={item.photo} /></View><View className="position">{Job['expert']}</View>
                <View className="name">{item.name}</View><View className="descript">{item.company_name||''} <Text className="p10">{item.job_title||''}</Text></View>
              </View>
            })}
          </View>
        </scroll-view>
        {/*<AtLoadMore*/}
          {/*onClick={this.handleClick.bind(this)}*/}
          {/*status={this.state.status}*/}
        {/*/>*/}
      </View>
    )
  }
}

export default Memebers
