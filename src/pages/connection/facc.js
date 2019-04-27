import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIndexes,AtFloatLayout, AtLoadMore  } from 'taro-ui'

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

  onClick (item) {
    console.log(item)
    this.setState({
      currentItem:item,
      isOpened1:true
    })
  }
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


  render () {
    const { defaultStore} = this.props;
    const faccPage = defaultStore.faccPage.$mobx.values;
    const faccPageStatus = defaultStore.faccPageStatus;

    return (
      <View>
        <scroll-view scrollY={true}   scrollWithAnimation={true}>
          {faccPage.map((item,index)=>{
            return (<View className="connectionMemberBase" key={index}>
              <View className="border"></View>
              <View className="photo">
                <Image src={item.photo} />
              </View>
              <View className="info">
                <View className="name">{item.name}</View>
                <View className="position">{item.position}</View>
                <View className="company">{item.company}</View>
                <View className="phone">联系电话：{item.phone}</View>
              </View>

              <View className="tagTriangle"></View>
              <View className="tagText">{item.tag}</View>

            </View>)
          })}
        </scroll-view>
        <AtLoadMore
          className="mb42"
          onClick={this.handleClick.bind(this)}
          status={faccPageStatus}
        />
      </View>
    )
  }
}

export default Index
