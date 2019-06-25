import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtImagePicker,AtButton ,AtLoadMore} from 'taro-ui';

import './messageAuditJoinOrg.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '审核申请',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentWillMount () {
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const {defaultStore} = this.props;
    const org_id = this.$router.params.org_id;
    defaultStore.getOrgMembers(org_id);
    wx.showShareMenu();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      url: url
    });
  }

  handleClick(){
    const { defaultStore } = this.props;
    const org_id = this.$router.params.org_id;
    defaultStore.getOrgMembers(org_id);
  }
  audit(item,status){
    const { defaultStore } = this.props;
    const id = item.id;
    Taro.showModal({
      title: '提示',
      content: '确认执行该操作？',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          defaultStore.auditApply(id,status);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  }

  render () {
    const {defaultStore,defaultStore:{org_members,org_members_page,org_members_status}} = this.props;
    // const userPhoto = [{url:""}];
    // const userPhoto = [{url:mine_userinfo.photo}];
    const orgData = org_members.$mobx.values;
    return (
      <View className='auditJoinOrg'>
        <View className="applys">
          {orgData.map((item,index)=>{
            return <View key={index} className='applyItem'>
                <View className="header">
                  <View className="connectionMemberBase" key={index} onClick={this.handleClick.bind(this, item)}>
                    <View className="border"></View>
                    <View className="photo">
                      <Image src={item.photo} lazyLoad={true} onClick={this.showPhoto.bind(this,item.photo)}/>
                    </View>
                    <View className="info" >
                      <View className="name">{item.user_name}</View>
                      <View className="position">{item.job_title}</View>
                      <View className="company">{item.company_name}</View>
                    </View>
                  </View>
                </View>
                <View className="content">
                  <View className="item">
                    <View className="label">时间</View>
                    <View className="value">{item.time}</View>
                  </View>
                  <View className="item">
                    <View className="label">职务</View>
                    <View className="value">{item.job}</View>
                  </View>
                  <View className="item">
                    <View className="label">理由</View>
                    <View className="value">{item.reason}</View>
                  </View>
                </View>
                <View className="footer">
                  <AtButton className="button" type='secondary' onClick={this.audit.bind(this,item,0)}>拒绝</AtButton>
                  <AtButton className="button" type='primary' onClick={this.audit.bind(this,item,1)}>同意</AtButton>
                </View>
            </View>
          })}
        </View>
        <AtButton className="button" type='primary' onClick={this.audit.bind(this,item,1)}>同意</AtButton>
        <AtLoadMore
          onClick={this.handleClick.bind(this)}
          status={org_members_status}
        />
      </View>
    )
  }
}

export default Index 