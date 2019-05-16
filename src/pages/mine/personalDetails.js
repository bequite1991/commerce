import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomList from "../../components/customList/index.js";
import { AtImagePicker } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './personalDetails.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '个人信息',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      userPhoto:""
    };
  }

  componentWillMount () {}

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const {defaultStore,defaultStore:{mine_userinfo}} = this.props;
    defaultStore.getPersonalData();
    this.setState({
      userPhoto:mine_userinfo.photo
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.redirectTo({
      url: url
    });
  }
  chooseImage(){
    const t = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
          console.log('本地图片的路径:', tempFilePaths );
        t.setState({
          userPhoto:tempFilePaths
        });
        t.upload(t, tempFilePaths)
      }
    });
  }
  eventClick(item){
    const t = this;
    const {defaultStore} = this.props;

    const param = {
      url:"/config/commerce_update_userinfo",
      key:item.key,
      value:item.value,
      editorType:item.editorType || "textarea",
      options:item.options
    };
    defaultStore.setMineEditor(param);
    setTimeout(()=>{
      t.goPage("/pages/mine/editor");
    },500);
  }
  upload(t, path){
    wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
    wx.uploadFile({
      url: 'https://mokelay.com/config/commerce_oss_upload',
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
              //上传成功返回数据
        console.log('上传成功返回的数据',JSON.parse(res.data).data);
        const {defaultStore} = t.props;
        const param = {
          url:"/config/commerce_update_userinfo",
          key:"photo",
          value:JSON.parse(res.data).data.file_url,
          editorType:"textarea",
          options:{}
        };
        defaultStore.setMineEditor(param);
        defaultStore.submitMineEditorValue();
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast(); //隐藏Toast
      }
    })
  }

  render () {
    const {defaultStore,defaultStore:{mine_userinfo,mine_userinfo_array}} = this.props;
    // const userPhoto = [{url:""}];
    // const userPhoto = [{url:mine_userinfo.photo}];
    const enterpriseData = mine_userinfo_array.$mobx.values;
    return (
      <View className='personalData'>
        <View className="photo">
          <View className="label">头像</View>
          <View className="value" onClick={this.chooseImage.bind(this)}>
            <Image src={this.state.userPhoto} />
          </View>
        </View>
        <CustomList list={enterpriseData} onClick={this.eventClick.bind(this)} />
      </View>
    )
  }
}

export default Index 