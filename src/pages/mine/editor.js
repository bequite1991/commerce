import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem,Picker} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Card from "../../components/card/index.js";
import {  AtInput,AtTextarea,AtButton  } from 'taro-ui';
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
  handleChange(e){
    const { defaultStore:{mine_mineEditor} } = this.props;
    debugger
    // const params = Object.assign(mine_mineEditor,{value:e});
    mine_mineEditor.value = e.detail.value;
    // defaultStore.setMineEditor({value:e});
  }
  submit(){
    const { defaultStore } = this.props;
    defaultStore.submitMineEditorValue();
  }

  render () {
    const { defaultStore:{mine_mineEditor} } = this.props;
    return (
      <View className="minEditor">
        <AtInput
          className={mine_mineEditor.editorType!="textarea"?"":"displayNone"}
          name='value'
          title='标准五个字'
          type='text'
          value={mine_mineEditor.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtTextarea
          className={mine_mineEditor.editorType=="textarea"?"":"displayNone"}
          value={mine_mineEditor.value}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
        />
        <AtButton className="apply" type='primary' onClick={this.submit.bind(this,'appliedSuccess')}>确定</AtButton>
      </View>
    )
  }
}

export default Index 