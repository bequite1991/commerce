import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import {  AtInput,AtTextarea,AtButton,AtRadio  } from 'taro-ui';
import Tags from "../../components/tags/index.js";

import './editor.scss';


@inject('defaultStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '编辑信息',
    navigationBarTextStyle: "black",
  }

  constructor (props) {
    super (props);
    this.state = {
      value:""
    };
  }

  componentWillMount () {
    
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goPage(url){
    Taro.navigateTo({
      // url: '/pages/joinUs/index'
      url: `/pages/activityInformation/${url}`
    });
  }
  handleChange(e){
    const { defaultStore:{secretary_activity_editor} } = this.props;
    // const params = Object.assign(secretary_activity_editor,{value:e});
    if(e == "true" || e == "false" || secretary_activity_editor.editorType == "radio"){
      secretary_activity_editor.value = e
      this.setState({
        value:e
      });
    }else {
      secretary_activity_editor.value = e.detail.value;
    }
  }
  submit(){
    const { defaultStore,defaultStore:{secretary_activity_editor} } = this.props;
    defaultStore.submitSecretaryActivitysEditorValue(secretary_activity_editor.id);
  }
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  }
  onEditorReady(valueBase) {
    const that = this
    wx.createSelectorQuery().select('#editor').context(valueBase).exec()
  }
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)
  }

  render () {
    const { defaultStore:{secretary_activity_editor} } = this.props;
    const valueBase = secretary_activity_editor?secretary_activity_editor.value+"":"";

    if(secretary_activity_editor && secretary_activity_editor.editorType == "telphone"){
      Taro.navigateTo({
        // url: '/pages/joinUs/index'
        url: `/pages/mineShare/settingPhone`
      })
    }
    return (
      <View className="minEditor">
        <AtInput
          className={secretary_activity_editor.editorType=="input"?"":"displayNone"}
          name='valueBase'
          type='text'
          value={valueBase}
          onChange={this.handleChange.bind(this)}
        />
        <editor
          id="editor"
          class={secretary_activity_editor.editorType=="rich"?"ql-container":"displayNone"}
          placeholder="富文本编辑器"
          showImgSize
          showImgToolbar
          showImgResize
          bindstatuschange="onStatusChange"
          bindready="onEditorReady(valueBase)">
        </editor>
        <AtTextarea
          className={secretary_activity_editor.editorType=="textarea"?"":"displayNone"}
          value={valueBase}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
        />
        <AtRadio
          className={secretary_activity_editor.editorType=="radio"?"":"displayNone"}
          options={secretary_activity_editor.options}
          value={secretary_activity_editor.value}
          onClick={this.handleChange.bind(this)}
        />
        <AtButton className="apply" type='primary' onClick={this.submit.bind(this,'appliedSuccess')}>确定</AtButton>
      </View>
    )
  }
}

export default Index 