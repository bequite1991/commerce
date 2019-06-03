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
    const { defaultStore:{activity_editor} } = this.props;
    // const params = Object.assign(activity_editor,{value:e});
    if(e == "true" || e == "false"){
      activity_editor.value = e
      this.setState({
        value:e
      });
      activity_editor.value = e;
    }else{
      activity_editor.value = e.detail.value;
    }
  }
  submit(){
    const { defaultStore,defaultStore:{activity_editor} } = this.props;
    defaultStore.submitActivitysEditorValue(activity_editor.id);
  }

  render () {
    const { defaultStore:{activity_editor} } = this.props;
    const valueBase = activity_editor?activity_editor.value+"":"";

    if(activity_editor && activity_editor.editorType == "telphone"){
      Taro.navigateTo({
        // url: '/pages/joinUs/index'
        url: `/pages/mineShare/settingPhone`
      })
    }
    return (
      <View className="minEditor">
        <AtInput
          className={activity_editor.editorType=="input"?"":"displayNone"}
          name='valueBase'
          type='text'
          value={valueBase}
          onChange={this.handleChange.bind(this)}
        />
        <AtTextarea
          className={activity_editor.editorType=="textarea"?"":"displayNone"}
          value={valueBase}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
        />
        <AtRadio
          className={activity_editor.editorType=="radio"?"":"displayNone"}
          options={activity_editor.options}
          value={activity_editor.value}
          onClick={this.handleChange.bind(this)}
        />
        <AtButton className="apply" type='primary' onClick={this.submit.bind(this,'appliedSuccess')}>确定</AtButton>
      </View>
    )
  }
}

export default Index 