import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import { AtList, AtListItem, AtBadge  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './jifenUp.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '消息',
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

  render () {
    const { defaultStore,defaultStore:{dot_mine_message_system,dot_mine_message_reply,dot_mine_message_comment} } = this.props;
    const messageData = defaultStore.getMessageData();
    return (
      <View className="messageCardList">

        <View className="messageCard jifenUp">
          <View className="time">2019年4月2日 09:06</View>
          <View className="card">
            <View className="head">
              <View className="title">积分收入</View>
              <View className="date">5月12日</View>
            </View>
            <View className="content">10000积分</View>
            <View className="footer">
                <View className="datetime"><View className="label">时间</View><View className="value">2019-05-12 20:12</View></View>
                <View className="desc"><View className="label">说明</View><View className="value">充值会费赠送</View></View>
            </View>
          </View>
        </View>

        <View className="messageCard jifenDown">
          <View className="time">2019年4月2日 09:06</View>
          <View className="card">
            <View className="head">
              <View className="title">积分支出</View>
              <View className="date">5月12日</View>
            </View>
            <View className="content">10000积分</View>
            <View className="footer">
                <View className="datetime"><View className="label">时间</View><View className="value">2019-05-12 20:12</View></View>
                <View className="desc"><View className="label">说明</View><View className="value">参加“走进河姆渡”扣取</View></View>
            </View>
          </View>
        </View>

        <View className="messageCard joinOrgFail">
          <View className="time">2019年4月2日 09:06</View>
          <View className="card">
            <View className="head2">
              <View className="logo"><Image lazyLoad={true} src="http://ty-storage.oss-cn-hangzhou.aliyuncs.com/00fd5d21b8a88b8e20de168396b27821.jpg" /></View>
              <View className="title">红酒会俱乐部</View>
            </View>
            <View className="content2">很抱歉管理员拒绝了您的申请</View>
            <View className="footer">
                <View className="datetime"><View className="label">拒绝理由：</View><View className="value">很抱歉，您暂时不符合我们组织的申 请要求，对您造成的不便我们深感遗 憾！</View></View>
            </View>
          </View>
        </View>

        <View className="messageCard joinOrgSuccess">
          <View className="time">2019年4月2日 09:06</View>
          <View className="card">
            <View className="head2">
              <View className="logo"><Image lazyLoad={true} src="http://ty-storage.oss-cn-hangzhou.aliyuncs.com/00fd5d21b8a88b8e20de168396b27821.jpg" /></View>
              <View className="title">红酒会俱乐部</View>
            </View>
            <View className="content2">欢迎您加入本组织</View>
          </View>
        </View>

        <View className="messageCard joinActivityFail">
          <View className="time">2019年4月2日 09:06</View>
          <View className="card">
            <View className="head">
              <View className="title">积分支出</View>
              <View className="date">5月12日</View>
            </View>
            <View className="content">10000积分</View>
            <View className="footer">
                <View className="datetime"><View className="label">时间</View><View className="value">2019-05-12 20:12</View></View>
                <View className="desc"><View className="label">说明</View><View className="value">参加“走进河姆渡”扣取</View></View>
            </View>
          </View>
        </View>

        <View className="messageCard joinActivitySuccess">
          <View className="time">2019年4月2日 09:06</View>
          <View className="card">
            <View className="head">
              <View className="title">积分支出</View>
              <View className="date">5月12日</View>
            </View>
            <View className="content">10000积分</View>
            <View className="footer">
                <View className="datetime"><View className="label">时间</View><View className="value">2019-05-12 20:12</View></View>
                <View className="desc"><View className="label">说明</View><View className="value">参加“走进河姆渡”扣取</View></View>
            </View>
          </View>
        </View>


      </View>
    )
  }
}

export default Index 