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
      url: `/pages/organization/${url}`
    });
  }
  handleChange(e){
    const { defaultStore:{org_editor} } = this.props;
    // const params = Object.assign(org_editor,{value:e});
    if(e == "true" || e == "false"){
      org_editor.value = e
      this.setState({
        value:e
      });
      org_editor.value = e;
    }else{
      org_editor.value = e.detail.value;
    }
  }
  submit(){
    const { defaultStore,defaultStore:{org_editor} } = this.props;
    defaultStore.submitOrgEditorValue(org_editor.id);
  }

  render () {
    const { defaultStore:{org_editor} } = this.props;
    const valueBase = org_editor?org_editor.value+"":"";

    if(org_editor && org_editor.editorType == "telphone"){
      Taro.navigateTo({
        // url: '/pages/joinUs/index'
        url: `/pages/mineShare/settingPhone`
      })
    }


    return (
      <View className="minEditor">
        <AtInput
          className={org_editor.editorType=="input"?"":"displayNone"}
          name='valueBase'
          type='text'
          value={valueBase}
          onChange={this.handleChange.bind(this)}
        />
        <AtTextarea
          className={org_editor.editorType=="textarea"?"":"displayNone"}
          value={valueBase}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
        />
        <AtRadio
          className={org_editor.editorType=="radio"?"":"displayNone"}
          options={org_editor.options}
          value={org_editor.value}
          onClick={this.handleChange.bind(this)}
        />
        <AtButton className="apply" type='primary' onClick={this.submit.bind(this,'appliedSuccess')}>确定</AtButton>
      </View>
    )
  }
}

export default Index 