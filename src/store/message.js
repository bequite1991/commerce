import { observable } from 'mobx';
import Taro from '@tarojs/taro'
const API_HOST = "http://118.25.103.49:8000";



const message = {
  //活动列表 活动详情 留言列表
  activity_messageList:[],
  //首页 banner
  getBannerList() {
    const bannerList = [{name:"banner0",url:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"},{name:"banner1",url:"https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"},{name:"banner2",url:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"},{name:"banner3",url:"https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"}];
    return bannerList
  },
  //首页 主席团成员
  getMessageList() {
    const t = this;
    t.activity_messageList = [{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];
    // const presidiumList = 

    // Taro.request({
    //   url: `${API_HOST}/config/commerce_presidium`,
    //   data: {
    //     commerce_job:""
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   }
    // }).then((res) => {
    //   const data = res.data.data.data_list;
    //   if(data.list.length){
    //     data.list.forEach((item,key)=>{
    //         item.post = item.job_title;
    //         item.company = item.company_name;
    //         item.name = item.user_name;
    //         item.photo = item.picture;
    //         if(key == data.list.length -1){
    //           t.home_presidiumList = data.list;
    //         }
    //     });
    //   }
    // });
  },
}
export default message