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
      url: `/pages/mine/${url}`
    });
  }
  handleChange(e){
    const { defaultStore:{mine_mineEditor} } = this.props;
    // const params = Object.assign(mine_mineEditor,{value:e});
    if(e == "true" || e == "false"){
      mine_mineEditor.value = e
      this.setState({
        value:e
      });
      mine_mineEditor.value = e;
    }else{
      mine_mineEditor.value = e.detail.value;
    }
  }
  submit(){
    const { defaultStore } = this.props;
    defaultStore.submitMineEditorValue();
  }

  render () {
    const { defaultStore:{mine_mineEditor} } = this.props;
    const valueBase = mine_mineEditor?mine_mineEditor.value+"":"";

    if(mine_mineEditor && mine_mineEditor.editorType == "telphone"){
      Taro.navigateTo({
        // url: '/pages/joinUs/index'
        url: `/pages/mineShare/settingPhone`
      })
    }


    return (
      <View className="minEditor">
        <AtInput
          className={mine_mineEditor.editorType=="input"?"":"displayNone"}
          name='valueBase'
          type='text'
          value={valueBase}
          onChange={this.handleChange.bind(this)}
        />
        <AtTextarea
          className={mine_mineEditor.editorType=="textarea"?"":"displayNone"}
          value={valueBase}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
        />
        <AtRadio
          className={mine_mineEditor.editorType=="radio"?"":"displayNone"}
          options={mine_mineEditor.options}
          value={mine_mineEditor.value}
          onClick={this.handleChange.bind(this)}
        />
        <AtButton className="apply" type='primary' onClick={this.submit.bind(this,'appliedSuccess')}>确定</AtButton>
      </View>
    )
  }
}

export default Index 