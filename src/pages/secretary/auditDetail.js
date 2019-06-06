import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtCalendar, AtButton, AtModal, AtModalHeader, AtModalContent, AtModalAction ,AtTextarea } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './auditDetail.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '组织审核',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      isOpened:false,
      rejectSource:""
    };
  }

  componentWillMount () {
    const { defaultStore } = this.props;
    let {formData,sexOpen,positionsArr} = this.state;
    const introduce = defaultStore.getAuditDetail(this.$router.params.id);
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
      url: `/pages/mine/${url}`
    });
  }
  taggleReject(value){
    this.setState({
      isOpened:value
    });
  }
  rejectChange(e){
    this.state.rejectSource = e.detail.value;
  }
  submitAuditReject(){
    const { defaultStore } = this.props;
    defaultStore.submitOrgAudit(this.$router.params.id,0,this.state.rejectSource);
  }
  submitAuditPass(){
    const { defaultStore } = this.props;
    defaultStore.submitOrgAudit(this.$router.params.id,1);
  }

  render () {
    const { defaultStore:{secretary_organization_detail} } = this.props;
    const detail = secretary_organization_detail;

    return (
      <View className='auditDetail'>
        <View className='org'>
          <View className="itemLeft"><Image src={detail.logo} /></View>
          <View className='itemRight'><View className="title">{detail.name}</View><View className="apply">申请人：{detail.userName}</View>
          </View>
        </View>
        <View className="info">
          <View className="item">
            <View className="label">申请时间</View>
            <View className="value">{detail.audit_time}</View>
          </View>
          <View className="item">
            <View className="label">愿景</View>
            <View className="value">{detail.company_info}</View>
          </View>
          <View className="item">
            <View className="label">章程</View>
            <View className="value">{detail.constitution}</View>
          </View>
          <View className="item">
            <View className="label">日常活动内容</View>
            <View className="value">{detail.description}</View>
          </View>
          <View className="item">
            <View className="label">组织架构</View>
            <View className="value">{detail.vision}</View>
          </View>
          <View className="item">
            <View className="label">目标参与人</View>
            <View className="value">{detail.target_partner}</View>
          </View>
        </View>
        <View className="button-group">
          <AtButton type='secondary' size='small' onClick={this.taggleReject.bind(this,true)}>拒绝</AtButton>
          <AtButton type='primary' size='small' onClick={this.submitAuditPass.bind(this)}>同意</AtButton>
        </View>
        <AtModal isOpened={this.state.isOpened}>
            <AtModalHeader>拒绝理由</AtModalHeader>
              <AtModalContent>
                <AtTextarea
                  onChange={this.rejectChange.bind(this)}
                  maxLength={200}
                  placeholder='请填写拒绝理由'
                />
              </AtModalContent>
            <AtModalAction> <Button onClick={this.taggleReject.bind(this,false)}>取消</Button> <Button onClick={this.submitAuditReject.bind(this,1)}>确定</Button> </AtModalAction>
          </AtModal>
      </View>
    )
  }
}

export default Index 