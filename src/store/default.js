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
  getIntroduce(){
    const introduce = {
      banner:"https://taro-ui.aotu.io/img/logo-taro.png",
      introduce:"新沪商联合会成立于2008年，属非营利民间商会。新沪商联合会凝聚了长三角乃至全球在中国改革开放进程中最有活力最能创造商业价值的精英企业家，是知名民营企业家相互信任、学习互助的交流平台。 长期以来，我们以全心服务会员为基石，以激发会员企业创新活力、推动企业家社会责任为方向，以合力聚变、引领中国商业新趋势为核心价值，朝着成为全球最有影响力的中国商会的愿景不断迈进！",
      partner:[{name:"1",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{name:"2",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{name:"3",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{name:"4",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{name:"5",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{name:"6",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}],
      brands:[{title:"1新沪商跨年高球赛，开 杆！",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"2新沪商跨年高球赛，开 杆！",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"3新沪商跨年高球赛，开 杆！",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"4新沪商跨年高球赛，开 杆！",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"5新沪商跨年高球赛，开 杆！",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"6新沪商跨年高球赛，开 杆！",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}]
    };
    return introduce;
  }
})
export default defaultStore