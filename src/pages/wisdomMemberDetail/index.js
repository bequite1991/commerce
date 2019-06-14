import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtInput, AtForm,AtActionSheet, AtActionSheetItem,AtRadio,AtTimeline  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './index.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '会员信息',
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

  componentWillMount () {
    const id = this.$router.params.id;
    const { defaultStore } = this.props;
    defaultStore.getMemberDetail(id);
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    wx.showShareMenu();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: '/pages/joinUs/index'
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
  showPhoto(url){
    Taro.previewImage({urls:[url]})
  }

  render () {
    const { defaultStore } = this.props;
    // let {formData,sexOpen,positionsArr} = this.state;
    const introduce = defaultStore.userinfo;
    console.log('introduce:',introduce);

    return (
      <View className='memberDetail'>
        <View className="memberBase">
          <View className="photo">
            <Image src={introduce.photo} onClick={this.showPhoto.bind(this,introduce.photo)}/>
          </View>
          <View className="info">
            <View className="name">{introduce.name}</View>
            <View className="position">{introduce.position}</View>
            <View className="company">公司名称：{introduce.company}</View>
            <View className="phone">联系方式：{introduce.phone}</View>
          </View>
        </View>

        <Card title="个人简介">
            {introduce.abstract}
        </Card>
        <Card title="社会职务与荣誉">
            <AtTimeline
              items={introduce.honor}
            >
            </AtTimeline>
        </Card>
        <Card title="公司介绍">
            {introduce.companyAbstract}
        </Card>
        <Card title="公司信息">
          <View className="companyInfo">
            <View>公司网址：{introduce.companyInfo.website}</View>
            <View>公司名称：{introduce.companyInfo.name}</View>
            <View>公司地址：{introduce.companyInfo.address}</View>
            <View>公司电话：{introduce.companyInfo.phone}</View>
            <View>公司邮箱：{introduce.companyInfo.email}</View>
          </View>
        </Card>
      </View>
    )
  }
}

export default Index
