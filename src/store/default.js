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
  },
  //政企直通车
  getPortalData(){
    const datas = [{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}];
    return datas;
  },
  //政府对接
  getDockingPortalData(){
    const datas = [{title:"优惠政策",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"投资机遇",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"差异化发展",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"政策介绍",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}];
    return datas;
  },
  //领馆列表
  getConsulateList(){
    const datas = [{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];;
    return datas;
  },
  //商户列表
  getCommerceList(){
    const datas = [{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"上海市浙江商会原名浙江省驻沪企业协会，1986年3月5日经上海市民政局注册登记批准成为具有法人资格的社会团体组织，接受···",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    return datas;
  },
  //智慧商道 会员列表
  getWisdomMembers(){
    const datas = {
      honoraryPresident:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"}],
      president:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"}],
      rotatingChairman:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"}],
      committeeExperts:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"名誉会长",name:"马云",descript:"阿里巴巴集团董事局主席 阿里巴巴集团董事局主席"}]
    };
    return datas;
  },
  //智慧商道 会员信息
  getMemberDetail(){
    const datas = {
      photo:"https://taro-ui.aotu.io/img/logo-taro.png",
      name:"杨辉",
      position:"常务副会长",
      company:"唯众传媒 vivid media",
      phone:"13888888888",
      abstract:"北师大艺术与传媒学院博士，资深媒体人， TV2.0新思维理念倡导者。 历任湖南卫视节目中心副主任、CNBC中国区项目经理。2006年创建唯众传媒,先后创办《开讲啦》、《波士堂》、《我是先生》《老妈驾到》、《你正常吗》、《暴走法条君》等50余档电视和网络节目，出品节目获得超过70项重大奖项。热心公益，现任雷励中国的理事长和上海公益事业发展基金会创始理事。",
      honor:[{title:"2015年度全国三八红旗手",color:"#5683C9"},{title:"影响中国传媒领军人物",color:"#5683C9"},{title:"2015中国商业最具创意人物100",color:"#5683C9"},{title:"两次入选“中国商界女性精英价值榜",color:"#5683C9"},{title:"2013-2014年度上海市三八红旗手标兵",color:"#5683C9"}],
      companyAbstract:"唯众传媒是中国领先的原创优质视频生产全媒体整合运营商。 成立于2006年的唯众传媒是一家致力于原创追求，以提供优质视频内容为核心竞争力的全媒体整合运营商，是中国传媒界原创节目数量最多，专注于优质视频产品策划与制作的民营传媒机构。公司拥有国内一流的策划力量、导演团队和运营班底，以视频节目创意、策划、制作、经营，大型活动策划、执行，新媒体业务为核心业务。坚持以提供原创、精品、输出正向价值观为核心理念，以打造大文化、大财经、大生活、大综艺四大产品矩阵为发展战略。 ",
      companyInfo:{
        website:"http://www.v2006.tv/",
        name:"上海唯众传媒股份有限公司",
        address:"上海市徐汇区中山西路1788弄58号（200235）",
        phone:"+86(0)21 5169 7588",
        email:"vividmedia@v2006.tv"
      }
    };
    return datas;
  },
  //人脉 会员列表
  getConnectionMemberList(){
    const list  = [{
      title: 'A',
      key: 'A',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某1.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某2.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某3.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某4.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      },{
      title: 'B',
      key: 'B',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某5.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某6.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某7.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某8.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      },{
      title: 'C',
      key: 'C',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某9.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某10.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某11.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某12.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      },{
      title: 'D',
      key: 'D',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某13.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某14.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某15.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某16.副会长",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      }]
    return list;
  },
  //人脉 专家委员会列表
  getConnectionFaccList(){
    const list  = [{
      title: 'E',
      key: 'E',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某1.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某2.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某3.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某4.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      },{
      title: 'F',
      key: 'F',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某5.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某6.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某7.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某8.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      },{
      title: 'G',
      key: 'G',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某9.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某10.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某11.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某12.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      },{
      title: 'H',
      key: 'H',
      items: [{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某13.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长,贫困患儿",company:"上海某某某公司·董事长",name:"某某某14.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",position:"副会长",company:"上海某某某公司·董事长",name:"某某某15.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{phone:"13922221223",company:"上海某某某公司·董事长",name:"某某某16.副会长.医疗",photo:"https://taro-ui.aotu.io/img/logo-taro.png",position:"副会长"}]
      }]
    return list;
  },
  //活动详情
  getActivityDetail(){
    const datas = {
      photo:"https://taro-ui.aotu.io/img/logo-taro.png",
      name:"玩转地球天河汇123健康俱乐部",
      time:"2019-04-15 13:00",
      address:"北京市朝阳区高碑店乡高碑店村一区33号",
      rate:"1000积分",
      origin:"王铁柱",
      phone:"13888888888",
      status:"10人",
      comment:[],
      detailPhotos:"https://taro-ui.aotu.io/img/logo-taro.png"
    };
    return datas;
  }

})
export default defaultStore