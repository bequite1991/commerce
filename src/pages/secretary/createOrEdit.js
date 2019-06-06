import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomList from "../../components/customList/index.js";
import { AtImagePicker,AtButton } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './createOrEdit.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '创建编辑活动',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      userPhoto:""
    };
  }

  componentWillMount () {
    console.log("id:",this.$router.params)
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const {defaultStore,defaultStore:{secretary_activitys_detail}} = this.props;
    const id = this.$router.params.id;
    const user = wx.getStorageSync("_TY_U");
    defaultStore.getSecretaryActivityDetail(id);
    wx.showShareMenu();
    this.setState({
      userPhoto:secretary_activitys_detail.logo
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
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
      id:t.$router.params.id,
      url:"/config/commerce_update_userinfo",
      key:item.key,
      value:item.value,
      editorType:item.editorType || "textarea",
      options:item.options
    };
    defaultStore.setSecretaryActivitysEditor(param);
    setTimeout(()=>{
      t.goPage("/pages/secretary/editor");
    },500);
  }
  upload(t, path){
    wx.showToast({
      icon: "loading",
      title: "正在上传",
      duration: 5000
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
          type:"photo",
          url:"/config/commerce_update_userinfo",
          key:"picture",
          value:JSON.parse(res.data).data.file_url,
          editorType:"textarea",
          options:{}
        };
        defaultStore.setSecretaryActivitysEditor(param,false);
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
  //新建组织提交表单
  submit(){
    const t = this;
    const {defaultStore} = this.props;
    defaultStore.submitSecretaryCreateActivitys();
  }


  render () {
    const {defaultStore,defaultStore:{secretary_activitys_detail,secretary_activitys_detail_array}} = this.props;
    // const userPhoto = [{url:""}];
    // const userPhoto = [{url:mine_userinfo.photo}];
    const orgData = secretary_activitys_detail_array.$mobx.values;
    return (
      <View className='create'>
        <View className="photo">
          <View className="label">活动主图</View>
          <View className="value" onClick={this.chooseImage.bind(this)}>
            <Image src={this.state.userPhoto} />
          </View>
        </View>
        <CustomList list={orgData} onClick={this.eventClick.bind(this)} />
         <View className={this.$router.params.id == undefined?"submitButton":"displayNone"}><AtButton onClick={this.submit.bind(this)} className="button" type='primary'>确认提交</AtButton></View>
      </View>
    )
  }
}

export default Index 