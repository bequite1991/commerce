import { observable } from 'mobx';
import Taro from '@tarojs/taro';
import request from "../utils/request.js";

const Job = {
  honor_chairman: '名誉会长',
  chairman: '会长',
  shift_chairman: '轮值主席',
  standing_vice_chairman: '常务副会长',
  vice_chairman: '副会长',
  director: '理事',
  member: '会员',
  secretariat: '秘书处',
  user: '注册用户',
  expert: '专家委员会'
}

const defaultStore = observable({
  //首页主席团
  home_presidiumList:[],
  //首页 活动列表
  home_activitysList:[],
  home_activitysListStatus:"loading",
  home_activitysListPage:1,
  home_activitysListPageSize:10,
  //活动模块 活动列表
  activity_activityInformList:[],
  activity_activitysListStatus:"loading",
  activity_activitysListPage:1,
  activity_activitysListPageSize:10,
  //活动模块 活动详情
  activityDetail:[],
  //活动模块 活动详情 留言列表
  activity_messageList:[],
  //活动模块 活动详情 已报名
  activity_appliedList:[],
  //活动模块 活动详情 留言详情
  activity_messageDetail:{},
  //活动模块 活动详情 申请加入确认
  activity_appliedConfirm:{},
  //我模块 近期活动
  mine_recentActivitys:{},
  //我模块 我的积分
  mine_myScore:{},
  //我模块 我的积分详情
  mine_myScoreDetail:{},
  //我模块 设置 隐私设置
  mine_settingPrivacy:{},
  //我模块 设置 用户信息
  mine_userInfo:{},
  //我模块 收到的回复
  mine_messageReply:[],
  //我模块 收到的留言
  mine_messageComment:[],
  //我模块 系统消息
  mine_messageSystem:[],
  //领事馆列表数据
  internation_consulate:[],
  // 国际商会列表数据
  internation_commerce:[],
  //主席团成员
  wisdom_honoraryPresident: [],
  wisdom_president: [],
  wisdom_rotatingChairman: [],
  wisdom_committeeExperts: [],
  // 个人信息
  userinfo: {},
  // 人脉会员列表
  memberPage: [],
  memberPageStatus: "loading",
  memberPagePage: 1,
  memberPagePageSize: 10,
  // 人脉 专家委员会
  faccPage: [],
  faccPageStatus: "loading",
  faccPagePage: 1,
  faccPagePageSize: 10,
  // 组织列表
  org_type_list: {},
  //政企直通车列表
  directTrain:[],
  directTrainPage:1,
  directTrainPageSize:10,
  directTrainStatus:"more",
  //政企直通车详情
  directTrainDetail:[],

  //首页 banner
  getBannerList() {
    const bannerList = [{name:"banner0",url:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"},{name:"banner1",url:"https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"},{name:"banner2",url:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"},{name:"banner3",url:"https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"}];
    return bannerList
  },
  //首页 主席团成员
  getPresidiumList() {
    const t = this;
    // const presidiumList = [{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];

    request("/config/commerce_presidium",{
      data: {
        commerce_job:""
      },
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      const data = res.data.data.data_list;
      if(data.list.length){
        data.list.forEach((item,key)=>{
            item.post = item.job_title;
            item.company = item.company_name;
            item.name = item.user_name;
            item.photo = item.picture;
            if(key == data.list.length -1){
              t.home_presidiumList = data.list;
            }
        });
      }
    });
  },
  //首页活动列表
  getActivitysList (params){
    const t = this;
    // this.activitysList = [{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    t.home_activitysListStatus = "loading";
    request("/config/commerce_hot_activitys",{
      data: {
        page:1,
        pageSize:4
      },
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      const data = res.data.data.data;
      if(data.currentRecords.length){
        data.currentRecords.forEach((item,key)=>{
            item.descript = item.description;
            item.tags = item.tag;
            item.name = item.title;
            item.photo = item.picture;
            item.status = item.num + "人参与";
            if(key == data.currentRecords.length -1){
              t.home_activitysList = t.home_activitysList.concat(data.currentRecords);
            }
        });
        t.home_activitysListStatus = "more";
      }else{
        t.home_activitysListStatus = "noMore";
      }
      t.home_activitysListPage++;
    });
    // return t.activitysList;
  },
  //活动模块  活动列表
  getActivityInformList (){
    const t =  this;
    // let presidiumList = [{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    t.activity_activitysListStatus = "loading";
    request("/config/commerce_hot_activitys",{
      data: {
        page:t.activity_activitysListPage,
        pageSize:t.activity_activitysListPageSize
      },
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      const data = res.data.data.data;
      if(data.currentRecords.length){
        data.currentRecords.forEach((item,key)=>{
            item.descript = item.description;
            item.tags = item.tag;
            item.name = item.title;
            item.photo = item.picture;
            item.status = item.num + "人参与";
            if(key == data.currentRecords.length -1){
              t.activity_activityInformList = t.activity_activityInformList.concat(data.currentRecords);
            }
        });
        t.activity_activitysListPage ++ ;
        t.activity_activitysListStatus = "more";
      }else{
        t.activity_activitysListStatus = "noMore";
      }
    });
  },
  //首页活动、活动模块 活动详情
  getActivityDetail(){
    // this.activityDetail = {
    //   photo:"https://taro-ui.aotu.io/img/logo-taro.png",
    //   title:"玩转地球天河汇123健康俱乐部",
    //   time:"2019-04-15 13:00",
    //   address:"北京市朝阳区高碑店乡高碑店村一区33号",
    //   rate:"1000积分",
    //   origin:"王铁柱",
    //   phone:"13888888888",
    //   status:"10人",
    //   comment:[],
    //   detailPhotos:"https://img.zcool.cn/community/01f49a5c9b403aa801208f8b35c9e4.jpg@1280w_1l_2o_100sh.jpg"
    // };
    const t =  this;
    const pages = getCurrentPages();
    request("/config/commerce_activity_detail_app",{
      data: {
        id:pages[pages.length - 1].options.id
      },
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      const data = res.data.data.data;
      data.photo = data.picture;
      data.time = data.start_time;
      data.status = data.amount + "人";
      data.detailPhotos = data.content;
      t.activityDetail = data;
    });

  },
  //活动详情  留言
  getMessageList() {
    const t = this;
    t.activity_messageList = [{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];
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
  //活动详情  已经报名
  getAppliedList() {
    const t = this;
    t.activity_appliedList = [{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];
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
  //活动详情  留言列表 留言详情
  getMessageDetail() {
    const t = this;
    t.activity_messageDetail = {
      time:"2019-04-12 18:47",
      words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",
      post:"会长",
      company:"中国石油华化工集团",
      name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png",
      replys:[{to:"王思聪",time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{to:"王思聪",time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{to:"王思聪",time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{to:"王思聪",time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}]
    };
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
    //活动详情 申请加入 确认
  getAppliedConfirm() {
    const t = this;
    t.activity_appliedConfirm = {
      photo:"https://taro-ui.aotu.io/img/logo-taro.png",
      name:"玩转地球天河汇123健康俱乐部",
      time:"2019-04-15 13:00",
      address:"北京市朝阳区高碑店乡高碑店村一区33号",
      rate:"1000积分",
      origin:"王铁柱",
      phone:"13888888888",
      status:"10人",
      comment:[],
      detailPhotos:"https://img.zcool.cn/community/01f49a5c9b403aa801208f8b35c9e4.jpg@1280w_1l_2o_100sh.jpg"
    };
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
  //商会介绍
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
    const t = this;
    this.directTrain = [{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}];
    t.directTrainStatus = "loading";
    request("/config/ccommerce_government",{
      data: {
        page:t.directTrainPage,
        pageSize:t.directTrainPageSize
      },
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      const data = res.data.data.data_list;
      if(data.list.length){
        data.list.forEach((item,key)=>{
            item.post = item.job_title;
            item.company = item.company_name;
            item.name = item.user_name;
            item.photo = item.picture;
            if(key == data.list.length -1){
              t.directTrain = data.list;
            }
        });
        t.directTrainPage++;
        t.directTrainStatus='more';
      }else{
        t.directTrainStatus = "noMore";
      }
    });
  },
  //政府对接
  getDockingPortalData(){
    const datas = [{title:"优惠政策",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"投资机遇",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"差异化发展",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"政策介绍",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}];
    return datas;
  },
  //领馆列表
  getConsulateList(){
    const t=this;
    request('/config/commerce_global_list', {
      data:{
        type: 'consulate',// global
      }
    }).then((res) => {
      const list = res.data.data.data_list;
      t.internation_consulate = list.list;
    });
  },
  //商户列表
  getCommerceList(){
    const t=this;
    request('/config/commerce_global_list', {
      data:{
        type: 'global',// global
      }
    }).then((res) => {
      const list = res.data.data.data_list;
      t.internation_commerce = list.list;
    });
  },
  //智慧商道 会员列表
  getWisdomMembers(){
    const t=this;
    request('/config/commerce_master_list',{
      data:{
        commerce_job: 'honor_chairman,chairman,shift_chairman'
      }
    }).then(res => {
      const list = res.data.data.data_list;
      const expertList = res.data.data.expert_list;
      const honoraryPresident =[],
        president =[],
        rotatingChairman = [];
      if(list && list.list.length>0){
        list.list.forEach(item => {
          if(item.commerce_job === 'honor_chairman'){
            honoraryPresident.push(item);
          }else if(item.commerce_job === 'chairman'){
            president.push(item);
          }else if(item.commerce_job === 'shift_chairman'){
            rotatingChairman.push(item);
          }
        });
      }
      t.wisdom_honoraryPresident = honoraryPresident;
      t.wisdom_president = president;
      t.wisdom_rotatingChairman = rotatingChairman;
      t.wisdom_committeeExperts = expertList ? expertList.list : [];
    });
  },
  //智慧商道 会员信息
  getMemberDetail(id){
    const t = this;
    t.userinfo ={};
    request('/config/commerce_get_userinfo_by_id',{
      data: {
        id: id
      }
    }).then(res => {
      const { data, company, honor_list } = res.data.data;
      const result = {
        photo: data.photo || '',
        name: data.name || '',
        position: Job[data.commerce_job] || '',
        company: company.name || '',
        phone: data.telphone || '',
        abstract: data.introduce || '',
        companyAbstract: company.introduce || '',
        companyInfo:{
          website: company.website || '',
          name: company.name || '',
          address: company.address || '',
          phone: company.phone || '',
          email: company.email || ''
        },
        honor:[]
      };
      if(honor_list && honor_list.list && honor_list.list.length>0){
        result.honor = honor_list.list.map(item => {
          return {
            title: item.title || '',
            color:"#5683C9"
          }
        });
      }
      console.log('result:',result);
      t.userinfo = result;
    });
  },
  //人脉 会员列表
  getConnectionMemberList(init, keywords){
    const t=this;
    t.memberPageStatus = 'loading';
    if(init){
      t.memberPage = [];
    }
    // memberPage
    request('/config/commerce_member_page',{
      data:{
        page: (init ? 1 : t.memberPagePage),
        pageSize: t.memberPagePageSize,
        keywords: keywords
      }
    }).then(res => {
      const data = res.data.data.data;
      if(data.currentRecords.length){
        t.memberPage = t.memberPage.concat(data.currentRecords.map( item => {
          return {
            id: item.id || '',
            phone: item.telphone || '',
            position: Job[item.commerce_job] || '',
            company: `${item.company_name}·${item.job_title}`,
            name: item.name || '',
            photo: item.photo || ''
          }
        }));
        t.memberPageStatus = "more";
      }else{
        t.memberPageStatus = "noMore";
      }
      t.memberPagePage++;
    });
  },
  //人脉 专家委员会列表
  getConnectionFaccList(init, keywords){
    const t=this;
    t.faccPageStatus = 'loading';
    if(init){
      t.faccPage = [];
    }
    request('/config/commerce_expert_page',{
      data:{
        page: (init ? 1 : t.faccPagePage),
        pageSize: t.faccPagePageSize,
        keywords: keywords
      }
    }).then(res => {
      const data = res.data.data.data;
      if(data.currentRecords.length){
        t.faccPage = t.faccPage.concat(data.currentRecords.map( item => {
          return {
            id: item.id || '',
            phone: item.telphone || '',
            position: Job[item.commerce_job] || '',
            tag: item.industry || '',
            company: `${item.company_name}·${item.job_title}`,
            name: item.name || '',
            photo: item.photo || ''
          }
        }));
        t.faccPageStatus = "more";
      }else{
        t.faccPageStatus = "noMore";
      }
      t.faccPagePage++;
    });

  },
  //组织列表
  getOrganizationList(type){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_org_list',{
      data: {
        type: type
      }
    }).then(res => {
      const { data, activity_list } = res.data.data;
      const list = data.list;
      const activityList = activity_list.list;

      const result = list.map(item => {
        const tmp = {
          photo: item.logo || '',
          title: item.name || '',
          subtitle: item.description || '',
          members: item.num || 0,
          activitys: []
        }
        const tmpA = activityList.filter(one => {
          return one.org_id === item.id;
        });
        tmp.activitys = tmpA.map( two => {
          return {
            photo: two.picture || '',
            title: two.title || '',
            time: two.start_time || '',
            address: two.address || ''
          }
        });
        return tmp;
      });

      const tmpObj = t.org_type_list;
      tmpObj[type] = result;
      t.org_type_list = Object.assign({},tmpObj);

    });
  },
  //组织详情
  getOrganizationDetail(){
    const datas = {
      header:{
        banner:"https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180",
        logo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"红酒会俱乐部",
        subtitle:"一份静谧的高贵，一种脱俗的气质，轻问浅嗅，典雅高贵心醉。"
      },
      members:[{group:"组织负责人",list:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",name:"王铁柱",subtitle:"上海复星高科技（集团）有限公司 董事长",position:"组长"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",name:"王铁柱",subtitle:"上海复星高科技（集团）有限公司 董事长",position:"秘书长"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",name:"王铁柱",subtitle:"上海复星高科技（集团）有限公司 董事长",position:"秘书长"}]},{group:"组织成员",list:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",name:"王铁柱",subtitle:"上海复星高科技（集团）有限公司 董事长",position:"成员"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",name:"王铁柱",subtitle:"上海复星高科技（集团）有限公司 董事长",position:"成员"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",name:"王铁柱",subtitle:"上海复星高科技（集团）有限公司 董事长",position:"成员"}]}],
      activitys:[{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}]
    };
    return datas;
  },
  //我  个人信息
  getMineDetail(){
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
  //我 企业信息编辑
  getEnterpriseData(){
    const datas = [{label:"公司名称",value:"上海唯众传媒股份有限公司",url:""},{label:"公司地址",value:"上海市徐汇区中山西路1788弄58号",url:""},{label:"公司网址",value:"http://www.v2006.tv/",url:""},{label:"公司电话",value:"+86(0)21 5169 7588",url:""},{label:"公司邮箱",value:"vividmedia@v2006.tv",url:""},{label:"公司介绍",value:"唯众传媒是中国领先的原创优质视频",url:""}];
    return datas;
  },
  //我 个人信息编辑
  getPersonalData(){
    const datas = [{label:"姓名",value:"王铁柱",url:""},{label:"性别",value:"男",url:""},{label:"联系方式",value:"13888888888",url:""},{label:"个人简介",value:"北师大艺术与传媒学院博士，资深",url:""},{label:"个人荣誉",value:"1.2013-2014年度上海市三八红旗",url:""},{label:"公司信息",value:"唯众传媒",url:""}];
    return datas;
  },
  //我 助理信息编辑
  getAssistantData(){
    const datas = [{label:"姓名",value:"王铁柱",url:""},{label:"性别",value:"男",url:""},{label:"联系方式",value:"13888888888",url:""},{label:"主要职责",value:"北师大艺术与传媒学院博士，资深",url:""}];
    return datas;
  },
  //我 消息管理界面
  getMessageData(){
     const presidiumList = [{subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",time:"20:12",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",time:"20:12",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",time:"20:12",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",time:"20:12",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    return presidiumList;
  },
  //我 近期活动列表
  getMyRecentActivitys(){
     this.mine_recentActivitys = [{status:"待进行",subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",organization:"环境保护",time:"2019-04-01",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{status:"已进行",subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",organization:"环境保护",time:"2019-04-02",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{status:"待进行",subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",organization:"环境保护",time:"2019-04-04",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{status:"已进行",subtitle:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",time:"2019-04-09",title:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",organization:"环境保护"}];
  },
  //我 我的积分
  getMyScore(){
     this.mine_myScore = {
      score:2000,
      list:[{name:"客服充值",time:"04-13 16:24",value:"+20000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"}]
     }
  },
  //我 我的积分详情
  getMyScoreDetail(){
     this.mine_myScoreDetail = [{name:"客服充值",time:"04-13 16:24",value:"+20000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"}]
  }, 
  //我 设置 设置隐私
  getSettingPrivacy(){
     this.mine_settingPrivacy = {
        phone:true,
        abstract:true,
        honor:false,
        companyAbstract:true,
        companyInfo:false
     }
  },
  //我 设置 设置隐私
  getSettingPhone(){
     this.mine_userInfo = {
        phone:13988888888
     }
  },
  //我 收到的回复列表
  getMessageReply(){
     this.mine_messageReply = [{
        photo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"某某某 回复了你的评论",
        time:"2019-04-09 14:30",
        content:"怎样怎样怎样",
        history:"我的评论：什么什么什么什么"
     },{
        photo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"某某某 回复了你的评论",
        time:"2019-04-09 14:30",
        content:"怎样怎样怎样",
        history:"我的评论：什么什么什么什么"
     }]
  },
  //我 收到的留言
  getMessageComment(){
     this.mine_messageComment = [{
        photo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"某某某 回复了你的评论",
        time:"2019-04-09 14:30",
        content:"怎样怎样怎样",
        history:"我的评论：什么什么什么什么",
        projectPhoto:"https://taro-ui.aotu.io/img/logo-taro.png",
        projectTitle:"某某某项目"
     },{
        photo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"某某某 回复了你的评论",
        time:"2019-04-09 14:30",
        content:"怎样怎样怎样",
        history:"我的评论：什么什么什么什么",
        projectPhoto:"https://taro-ui.aotu.io/img/logo-taro.png",
        projectTitle:"某某某项目"
     }]
  },
  //我 系统消息
  getMessageSystem(){
     this.mine_messageSystem = [{
        photo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"河姆渡CEO华建刚中国智能建筑节行业大会",
        subtitle:"为期2天的第三届（2018）中国智能建筑节在西安绿地笔克会 展中心圆满落幕。",
        time:"2019-04-09 14:30",
     },{
        photo:"https://taro-ui.aotu.io/img/logo-taro.png",
        title:"河姆渡CEO华建刚中国智能建筑节行业大会",
        subtitle:"为期2天的第三届（2018）中国智能建筑节在西安绿地笔克会 展中心圆满落幕。",
        time:"2019-04-09 14:30"
     }]
  },

})
export default defaultStore
