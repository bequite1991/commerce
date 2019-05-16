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
    const { defaultStore:{mine_mineEditor} } = this.props;
    if(mine_mineEditor.editorType == "telphone"){
      Taro.redirectTo({
        // url: '/pages/joinUs/index'
        url: `/pages/mine/settingPhone`
      })
    }
    this.setState({
      value:mine_mineEditor.value
    })
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
    Taro.redirectTo({
      // url: '/pages/joinUs/index'
      url: `/pages/mine/${url}`
    });
  }
  handleChange(e){
    const { defaultStore:{mine_mineEditor} } = this.props;
    // const params = Object.assign(mine_mineEditor,{value:e});
    if(typeof e == "boolean"){
      mine_mineEditor.value = e
      this.setState({
        value:e
      });
      mine_mineEditor.value = e;
    }else{
      mine_mineEditor.value = e.detail.value;
    }
    
    // defaultStore.setMineEditor({value:e});
  }
  submit(){
    const { defaultStore } = this.props;
    defaultStore.submitMineEditorValue();
  }

  render () {
    const { defaultStore:{mine_mineEditor} } = this.props;
    const value = mine_mineEditor?mine_mineEditor.value+"":"";
    return (
      <View className="minEditor">
        <AtInput
          className={mine_mineEditor.editorType=="input"?"":"displayNone"}
          name='value'
          type='text'
          value={value}
          onChange={this.handleChange.bind(this)}
        />
        <AtTextarea
          className={mine_mineEditor.editorType=="textarea"?"":"displayNone"}
          value={value}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
        />
        <AtRadio
          className={mine_mineEditor.editorType=="radio"?"":"displayNone"}
          options={mine_mineEditor.options}
          value={this.state.value}
          onClick={this.handleChange.bind(this)}
        />
        <AtButton className="apply" type='primary' onClick={this.submit.bind(this,'appliedSuccess')}>确定</AtButton>
      </View>
    )
  }
}

export default Index 