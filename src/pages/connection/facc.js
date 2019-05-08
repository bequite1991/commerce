import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIndexes,AtFloatLayout, AtLoadMore  } from 'taro-ui'

import CustomAtIndexes from "../../components/indexes/index.js";

import './facc.scss';


@inject('defaultStore')
@observer
class Index extends Component {

  constructor (props) {
    super (props);
    this.state = {
      isOpened1:false,
      currentItem:null
    };
  }

  componentWillMount () {
    const { defaultStore} = this.props;
    defaultStore.getConnectionFaccList(true, this.props.keywords || '');
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClose(){
    this.setState({
      isOpened1:false
    })
  }

  handleClick() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionFaccList(false, '');
  }

  refresh() {
    const { defaultStore} = this.props;
    defaultStore.getConnectionFaccList(true, this.props.keywords || '');
  }

  goPage(id){
    Taro.navigateTo({
      url: `/pages/wisdomMemberDetail/index?id=${id}`
    })
  }
  
  onClick(item){ 
    this.goPage(item.id);
  }

  render () {
    const { defaultStore} = this.props;
    const faccPage = defaultStore.faccPage.$mobx.values;
    const faccPageStatus = defaultStore.faccPageStatus;

    return (
      <View style='height:100vh'>
        <CustomAtIndexes
          list={faccPage}
          onClick={this.onClick.bind(this)}
        >
        </CustomAtIndexes>
      </View>
    )
  }
}

export default Index
