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

  config = {
    navigationBarTitleText: '我',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      formData: {
        birthday:"1950-01-01"
      },
      sexOpen:false,
      selectorChecked:"男性",
      isChange:0,
      position:"会员",
      positionsArr:["名誉会长","会长","轮值主席","常务副会长","副会长","理事","会员"]
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

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mine/${url}`
    });
  }
  showSexAction(){
    this.setState({
      sexOpen:true
    })
  }
  selectSex(sex){
    let {formData} = this.state;
    formData.sex = sex;
    this.setState({
      sexOpen:false
    })
  }
  onDateChange(date){
    let {formData,isChange} = this.state;
    formData.birthday = date.detail.value;
    this.setState({
      isChange:isChange + 1
    });
  }

  render () {
    const { defaultStore } = this.props;
    let {formData,sexOpen,positionsArr} = this.state;
    const introduce = defaultStore.getMineDetail();

    return (
      <View className='memberDetail'>
        <View className="memberBase">
          <View className="photo">
            <Image src={introduce.photo} />
          </View>
          <View className="info">
            <View className="name">{introduce.name}</View>
            <View className="position">{introduce.position}</View>
            <View className="company">公司名称：{introduce.company}</View>
            <View className="phone">联系方式：{introduce.phone}</View>
          </View>
        </View>
        <AtList className="list">
          <AtListItem
            title='企业资料'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={this.goPage.bind(this,"enterpriseData")}

          />
          <AtListItem
            title='我的助理'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='我的消息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='我的积分'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='我的活动'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='联系我们'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='设置'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>
      </View>
    )
  }
}

export default Index 