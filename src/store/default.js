import { observable } from 'mobx'

const defaultStore = observable({
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
  getBannerList() {
    const bannerList = [{name:"banner0",url:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"},{name:"banner1",url:"https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"},{name:"banner2",url:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"},{name:"banner3",url:"https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"}];
    return bannerList
  },
  getPresidiumList() {
    const presidiumList = [{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];
    return presidiumList;
  },
  getActivitysList() {
    const presidiumList = [{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    return presidiumList;
  },
})
export default defaultStore