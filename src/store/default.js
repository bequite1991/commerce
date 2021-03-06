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
  activityDetail:{},
  //活动模块 活动详情 留言列表
  activity_messageList:[],
  //活动模块 活动详情 已报名
  activity_appliedList:[],
  //活动模块 活动详情 留言详情
  activity_messageDetail:{},
  //活动模块 活动详情 申请加入确认
  activity_appliedConfirm:{},

  activity_info_array:{},
  //我创建的活动
  activity_mine_create:[],

  activity_mine_create_status:"loading",
  activity_mine_create_page:1,
  activity_mine_create_PageSize:10,
  //我加入的活动
  activity_mine_join:[],
  //活动模块 非会员申请表单
  activity_applied_custom:{},
  //活动 编辑器配置
  activity_editor:{},
  //活动 编辑器内容
  activity_editor_form:{},
  //活动咨询 活动品牌
  activity_brands:[],
  //品牌活动
  activitys_by_brand:[],
  //活动品牌 活动分页
  activitys_by_brand_page:1,
  //品牌信息
  rand_info:{},
  //下拉状态
  activitys_by_brand_status:"loading",
  //当前查询的品牌id
  activitys_by_brand_id:null,




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
  //我模块 设置 用户信息数组版本
  mine_userinfo_array:[],
  //我模块 收到的回复
  mine_messageReply:[],
  //我模块 收到的留言
  mine_messageComment:[],
  //我模块 消息首页
  mine_messageInfo:[],
  //我模块 系统消息
  mine_messageSystem:[],
  //我模块 编辑信息
  mine_editor:{},
  //我模块 公司信息
  mine_enterpriseData:{},
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
  memberPagePageSize: 100000,
  // 人脉 专家委员会
  faccPage: [],
  faccPageStatus: "loading",
  faccPagePage: 1,
  faccPagePageSize: 100000,
  // 组织列表
  org_type_list: {},
  //组织信息详情（值）
  org_detail: {header:{}},
  //组织信息 包含的内容（label）
  org_info_array:[],
  //我的组织 我创建的组织
  org_mine_create:[],
  //我的组织 我加入的组织
  org_mine_join:[],
  //组织 申请加入组织
  org_applied:{},
  //组织 成员
  org_users:{},
  //组织 活动
  org_activitys:{},
  //组织 编辑器配置
  org_editor:{},
  //组织 编辑器内容
  org_editor_form:{},
  //组织成员
  org_members:[],
  org_members_page:0,
  org_members_status:"more",
  //政企直通车列表
  directTrain:[],
  directTrainPage:1,
  directTrainPageSize:10,
  directTrainStatus:"more",
  //政企直通车详情
  directTrainDetail:[],
  //商会介绍 活动品牌
  commerceIntroduceActivitysBrands:[],
  //秘书处 自组织审核列表
  secretary_organization_custom_audit:[],
  //秘书处 自组织活动审核列表
  secretary_organization_custom_activitys_audit:[],
  //秘书处 自组织详情
  secretary_organization_detail:{},
  //秘书处 自组织活动详情
  secretary_activitys_detail:{},
  //秘书处 自组织活动详情
  secretary_activitys_detail_array:{},
  //小红点 我 系统消息
  dot_mine_message_system:null,
  //小红点 我 系统回复
  dot_mine_message_reply:null,
  //小红点 我 系统留言
  dot_mine_message_comment:null,
  //小红点 我 活动
  dot_mine_activitys:null,
  //小红点 待办
  dot_mine_todo:null,
  //导航栏是否显示小红点
  dot_tabbar_show:false,
  //活动咨询




  //首页 banner
  getBannerList() {
    const bannerList = [{name:"banner0",url:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/457de538b81666d1e94e43d2e0d4d0cd.png"},{name:"banner1",url:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/4332309ca696289d725eab37f8751870.png"},{name:"banner2",url:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/1003e1fd3c24255ce652482f17eff562.png"}];
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
    }).then((res) => {
      const data = res.data.data.data_list;
      if(data.list.length){
        data.list.forEach((item,key)=>{
            item.commerce_job_name = Job[item.commerce_job]
            item.post = item.job_title;
            item.company = item.company_name || item.company_info;
            item.name = item.user_name;
            item.photo = item.photo;
            if(key == data.list.length -1){
              t.home_presidiumList = data.list;
            }
        });
      }
    });
  },
  //首页 申请加入商会
  submitJoinUs(formData) {
    const t = this;
    request("/config/commerce_join_aply",{
      method:"post",
      data: formData,
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "申请已提交！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
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
        page:t.home_activitysListPage,
        pageSize:t.home_activitysListPageSize
      },
    }).then((res) => {
      const data = res.data.data.data;
      if(t.home_activitysListPage == 1){
        t.home_activitysList = [];
      }
      if(data.currentRecords.length){
        data.currentRecords.forEach((item,key)=>{
            const timestamp = Date.parse(new Date());
            if(timestamp > item.start_time){
              item.tag = "已结束";
            }
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
  },//首页活动品牌列表
  getActivitysBrands (params){
    const t = this;
    t.home_activitysListStatus = "loading";
    request("/config/commerce_page_activity_group",{
      data: {
        page:1,
        pageSize:4
      },
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
  getActivityInformList (keywords){
    const t =  this;
    // let presidiumList = [{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    if(keywords){
      t.activity_activitysListPage = 1;
      t.activity_activityInformList = [];
    }
    t.activity_activitysListStatus = "loading";
    request("/config/commerce_hot_activitys",{
      data: {
        page:t.activity_activitysListPage,
        pageSize:t.activity_activitysListPageSize,
        keywords: (keywords || ''),
      },
    }).then((res) => {
      const data = res.data.data.data;
      if(data.currentRecords.length){
        data.currentRecords.forEach((item,key)=>{
            const timestamp = Date.parse(new Date());
            if(timestamp > item.start_time){
              item.tag = "已结束";
            }
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
  //活动模块  我创建的活动列表
  getActivitysMineCreate (keywords){
    const t =  this;
    // let presidiumList = [{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    if(keywords){
      t.activity_activitysListPage = 1;
      t.activity_mine_create = [];
    }
    t.activity_activitysListStatus = "loading";
    request("/config/commerce_hot_activitys",{
      data: {
        page:t.activity_mine_create_Page,
        pageSize:t.activity_mine_create_PageSize,
        keywords: (keywords || ''),
      },
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
              t.activity_mine_create = t.activity_mine_create.concat(data.currentRecords);
            }
        });
        t.activity_mine_create_Page ++ ;
        t.activity_mine_create_status = "more";
      }else{
        t.activity_mine_create_status = "noMore";
      }
    });
  },
  //活动模块  我参加的活动列表
  getActivitysMineJoin (){
    const t =  this;
    // let presidiumList = [{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护,贫困患儿",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",tags:"环境保护",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{descript:"让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症",status:"300人参与",name:"让孩子回归大自然",photo:"https://taro-ui.aotu.io/img/logo-taro.png",tags:"环境保护"}];
    request("/config/commerce_my_activity").then((res) => {
      const data = res.data.data.data_list;
      if(data.list.length){
        data.list.forEach((item,key)=>{
            item.descript = item.description;
            item.tags = item.tag;
            item.name = item.title;
            item.photo = item.picture;
            item.status = item.num + "人参与";
            if(key == data.list.length -1){
              t.activity_mine_join = t.activity_mine_join.concat(data.list);
            }
        });
      }
    });
  },
  //首页活动、活动模块 活动详情
  getActivityDetail(id,org_id){
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
    t.activityDetail.org_id = org_id;
    t.activity_info_array = [
        {key:"title",label:"活动名称",value:t.activityDetail.title || "请填写活动名称",url:""},
        
        {key:'description', label: '活动简介', value: t.activityDetail.description || "活动简介"},
        {key:"start_time",label:"时间",value:t.activityDetail.start_time || "请填写活动时间"},
        {key:"address",label:"地点",value:t.activityDetail.address || "请填写活动地点"},
        {key:"amount",label:"积分",value:t.activityDetail.amount || "请填写所需积分"},
        {key:"create_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S")},
        {key:"phone",label:"联系方式",value:t.activityDetail.phone || "请填写联系人电话"},
        {key:"content",label:"活动详情",value:t.activityDetail.content || "请填写活动详情",editorType:"rich"},
      ];
    if(id == undefined){
      t.activityDetail = {};
      return;
    }
    
    const pages = getCurrentPages();
    const options = pages[pages.length - 1].options;
    request("/config/commerce_activity_detail_app",{
      data: {
        id:id || pages[pages.length - 1].options.id
      },
    }).then((res) => {
      const data = res.data.data.data;
      const data_list = res.data.data.data_list.list;
      data.photo = data.picture;
      data.time = data.start_time;
      data.status = data_list.length + "人";
      data.rate = data.amount;
      data.origin = data.name;
      data.phone = data.telphone;
      data.org_id = data.org_id;

      data.data_list = data_list;
      t.activityDetail = data;
      const commentList = res.data.data.page_data.currentRecords;
      t.activity_info_array = [
        {key:"title",label:"活动名称",value:t.activityDetail.title || "请填写活动名称",url:""},
        
        {key:'description', label: '活动简介', value: t.activityDetail.description || "活动简介"},
        {key:"start_time",label:"时间",value:t.activityDetail.time || "请填写活动时间"},
        {key:"address",label:"地点",value:t.activityDetail.address || "请填写活动地点"},
        {key:"amount",label:"积分",value:t.activityDetail.amount || "请填写所需积分"},
        
        {key:"master_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S")},
        {key:"phone",label:"联系方式",value:t.activityDetail.phone || "请填写联系人电话"},
        {key:"content",label:"活动详情",value:t.activityDetail.content || "请填写活动详情",editorType:"rich"},
      ];

      commentList.forEach((ele,key)=>{
        ele.time = ele.create_time || "";
        ele.words = ele.content || "";
        ele.post = ele.job_title || "";
        ele.company = ele.company_name || "";
        ele.name = ele.user_name || "";
        if(key == (commentList.length - 1)){
          t.activity_messageList = commentList;

        }
      });

       // t.activity_appliedList = [{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];

      const appliedList = res.data.data.data_list.list;
      appliedList.forEach((ele,key)=>{
        ele.time = ele.create_time || "";
        ele.words = ele.content || "";
        ele.post = ele.job_title || "";
        ele.name = ele.user_name || "";
        ele.company = ele.company_name || "";
        if(key == (appliedList.length - 1)){
          t.activity_appliedList = appliedList;
        }
      })


    });
  },
  //首页活动、活动模块 活动详情
  refreshActivityDetail(){
    const t =  this;
    t.activity_info_array = [
        {key:"title",label:"活动名称",value:t.activityDetail.title || "请填写活动名称",url:""},
        {key:'description', label: '活动简介', value: t.activityDetail.description || "活动简介"},
        {key:"start_time",label:"时间",value:t.activityDetail.start_time || "请填写活动时间"},
        {key:"address",label:"地点",value:t.activityDetail.address || "请填写活动地点"},
        {key:"amount",label:"积分",value:t.activityDetail.amount || "请填写所需积分"},
        {key:"create_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S")},
        {key:"phone",label:"联系方式",value:t.activityDetail.phone || "请填写联系人电话"},
        {key:"content",label:"活动详情",value:t.activityDetail.content || "请填写活动详情",editorType:"rich"},
      ];
  },
  //回复评论
  submitComment(){
    const t = this;
    request("/config/commerce_add_comment",{
      method:"post",
      data: formData,
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "回复成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    });
  },
  //活动详情  留言
  getMessageList() {
    const t = this;
    // t.activity_messageList = [{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"},{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];
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
    //活动详情 申请加入 获取确认信息
  getAppliedConfirm() {
    const t = this;
    // t.activity_appliedConfirm = {
    //   photo:"https://taro-ui.aotu.io/img/logo-taro.png",
    //   name:"玩转地球天河汇123健康俱乐部",
    //   time:"2019-04-15 13:00",
    //   address:"北京市朝阳区高碑店乡高碑店村一区33号",
    //   rate:"1000积分",
    //   origin:"王铁柱",
    //   phone:"13888888888",
    //   status:"10人",
    //   comment:[],
    //   detailPhotos:"https://img.zcool.cn/community/01f49a5c9b403aa801208f8b35c9e4.jpg@1280w_1l_2o_100sh.jpg"
    // };
    const pages = getCurrentPages();
    const activityid = pages[pages.length - 1].options.id;
    request("/config/commerce_part_activity_confirm",{
      data: {
        id:activityid || 1
      },
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        return;
      }
      const data = res.data.data.data;
      const result = {
        name:data.title || "",
        time:data.start_time || "",
        address:data.address || "",
        rate:data.amount || "",
        origin:data.user_name || "",
        phone:data.telphone || "",
      };
      t.activity_appliedConfirm = result;
    });
  },
  //活动详情 申请加入 确认
  getConfirmJoin(){
    const t = this;
    const pages = getCurrentPages();
    const activityid = pages[pages.length - 1].options.id;
    request("/config/commerce_part_activity",{
      method:"get",
      data: {
        id:activityid || 1
      },
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          Taro.navigateTo({
            url: `/pages/activityInformationDetail/appliedFail?id=${activityid}`
          });
        },2000)
      }else{
        wx.showToast({
          title: "报名成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          Taro.navigateTo({
            url: `/pages/activityInformationDetail/appliedSuccess?id=${activityid}`
          });
        },2000)
      }
    });
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
    // this.directTrain = [{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"},{title:"上海市",src:"http://img2.imgtn.bdimg.com/it/u=1326920324,644760078&fm=200&gp=0.jpg",href:"www.baidu.com"}];
    t.directTrainStatus = "loading";
    request("/config/commerce_government",{
      data: {
        page:t.directTrainPage,
        pageSize:t.directTrainPageSize
      },
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        return;
      }
      const data = res.data.data.page_data;
      if(data.currentRecords.length){
        data.currentRecords.forEach((item,key)=>{
            item.title = item.province;
            item.src = item.photos;
            if(key == data.currentRecords.length -1){
              t.directTrain = data.currentRecords;
            }
        });
        t.directTrainPage++;
        t.directTrainStatus='more';
      }else{
        t.directTrainStatus = "noMore";
      }
    });
  },
  // 政企直通车 政府对接
  getDockingPortalData(){
    const datas = [{title:"优惠政策",src:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/8622f250ff316d4ea0ef7e336169fda3.jpeg",href:"www.baidu.com"},{title:"投资机遇",src:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/8622f250ff316d4ea0ef7e336169fda3.jpeg",href:"www.baidu.com"},{title:"差异化发展",src:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/8622f250ff316d4ea0ef7e336169fda3.jpeg",href:"www.baidu.com"},{title:"政策介绍",src:"http://ty-storage.oss-cn-hangzhou.aliyuncs.com/8622f250ff316d4ea0ef7e336169fda3.jpeg",href:"www.baidu.com"}];
    return datas;
  },
  //政企直通车 提交政府咨询
  submitGovernmentCounsele(params){
    const t = this;
    request("/config/commerce__commerce_api_tb_government_consult_add_45685",{
      method:"post",
      data: params,
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "提交成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    });
  },
  //政企直通车 公司注册
  submitRegisterCompany(params){
    const t = this;
    request("/config/commerce_gr_form_commit",{
      method:"post",
      data: params,
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "提交成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    });
  },
  //政企直通车 公司注册
  submitLargeProjects(params){
    const t = this;
    request("/config/commerce_ga_form_commit",{
      method:"post",
      data: params,
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "提交成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    });
  },
  //领馆列表
  getConsulateList(keywords){
    const t=this;
    const params = {
      type: 'consulate',
    }
    if(keywords != undefined && keywords != null){
      params.keywords = keywords;
    }
    request('/config/commerce_global_list', {
      data:params
    }).then((res) => {
      const list = res.data.data.data_list;
      t.internation_consulate = list.list;
    });
  },
  //商户列表
  getCommerceList(keywords){
    const t=this;
    const params = {
      type: 'global',
    }
    if(keywords != undefined && keywords != null){
      params.keywords = keywords;
    }
    request('/config/commerce_global_list', {
      data:params
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
      const { data, company, honor_list,company_id } = res.data.data;
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
          email: company.email || '',
          company_id:company_id
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
        // t.memberPage = t.memberPage.concat(data.currentRecords.map( item => {
        //   return {
        //     id: item.id || '',
        //     phone: item.telphone || '',
        //     position: Job[item.commerce_job] || '',
        //     company: `${item.company_name || item.company_info || ''}·${item.job_title}`,
        //     name: item.name || '',
        //     photo: item.photo || ''
        //   }
        // }));

        //创建锚点数组
        const words = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"#":26};
        const arr = [];
        Object.keys(words).map((key)=>{
          arr.push({
            title: key,
            key: key,
            items: []
          })
        })
        t.memberPage = [];
         data.currentRecords.map( (item,key2) => {
            if(item.commerce_job == "secretariat"){
              return;
            }
            item.phone = item.telphone || '';
            item.position = Job[item.commerce_job] || '';
            item.company = `${item.company_name || item.company_info || ''}·${item.job_title}`;
            item.name = item.name || '';
            item.photo = item.photo || '';
            const _index = words[item.sort] || 26;
            arr[_index].items.push(item);
            if(key2 == data.currentRecords.length - 1){
              arr.forEach((ar,key3)=>{
                if(ar.items.length){
                  t.memberPage.push(ar);
                }
              })
            }
        });
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
        // t.faccPage = t.faccPage.concat(data.currentRecords.map( item => {
        //   return {
        //     id: item.id || '',
        //     phone: item.telphone || '',
        //     position: Job[item.commerce_job] || '',
        //     tag: item.industry || '',
        //     company: `${item.company_name}·${item.job_title}`,
        //     name: item.name || '',
        //     photo: item.photo || ''
        //   }
        // }));
        //创建锚点数组
        const words = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"#":26};
        const arr = [];
        Object.keys(words).map((key)=>{
          arr.push({
            title: key,
            key: key,
            items: []
          })
        })
        t.faccPage = [];
         data.currentRecords.map( (item,key2) => {
            item.phone = item.telphone || '';
            item.position = Job[item.commerce_job] || '';
            item.company = `${item.company_name || item.company_info || ''}·${item.job_title}`;
            item.name = item.name || '';
            item.photo = item.photo || '';
            const _index = words[item.sort] || 26;
            arr[_index].items.push(item);
            if(key2 == data.currentRecords.length - 1){
              arr.forEach((ar,key3)=>{
                if(ar.items.length){
                  t.faccPage.push(ar);
                }
              })
            }
        });
        t.faccPageStatus = "more";
      }else{
        t.faccPageStatus = "noMore";
      }
      t.faccPagePage++;
    });

  },
  //组织列表
  getOrganizationList(type, keywords){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_org_list',{
      data: {
        type: type,
        keywords: (keywords || ''),
      }
    }).then(res => {
      const { data, activity_list } = res.data.data;
      const list = data.list;
      const activityList = activity_list.list;

      const result = list.map(item => {
        const tmp = {
          id: item.id,
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
            id: two.id,
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
  //组织列表-当前登录人创建
  getOrganizationMineCreate(type, keywords){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_org_list').then(res => {
      const { data, activity_list } = res.data.data;
      const list = data.list;
      const activityList = activity_list.list;

      const result = list.map(item => {
        const tmp = {
          id: item.id,
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
            id: two.id,
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
      // t.org_type_list = Object.assign({},tmpObj);
      t.org_mine_create = result

    });
  },
  //组织列表-当前登录人参加
  getOrganizationMineJoin(type, keywords){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_org_list').then(res => {
      const { data, activity_list } = res.data.data;
      const list = data.list;
      const activityList = activity_list.list;

      const result = list.map(item => {
        const tmp = {
          id: item.id,
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
            id: two.id,
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
      // t.org_type_list = Object.assign({},tmpObj);
      t.org_mine_join = result;

    });
  },
  //组织详情
  getOrganizationDetailMineCreate(id, user){
    const t=this;
    const currentInfo = wx.getStorageSync("_TY_CurrentInfo");
    t.org_detail = [];
    t.org_info_array = [
        {key:"name",label:"组织名称",value:t.org_detail.name || "请填写组织名称",url:""},
        {key:"apply_user_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S"),disabled:true},
        {key:'description', label: '愿景', value: t.org_detail.description || "请填写愿景"},
        {key:"constitution",label:"章程",value:t.org_detail.constitution || "请填写章程"},
        {key:"daily_detail",label:"日常活动内容",value:t.org_detail.daily_detail || "请填写日常内容"},
        {key:"vision",label:"组织架构",value:t.org_detail.vision || "请填写组织架构"},
        {key:"target_partner",label:"目标参与人",value:t.org_detail.target_partner || "请填写目标参与人"}
      ];
    if(id == undefined){
      return;
    }
    request('/config/commerce_xcx_org_detail',{
      data: {
        id
      }
    }).then(res => {
      const { data } = res.data.data;
      t.org_detail = data;
      t.org_info_array = [
        {key:"name",label:"组织名称",value:t.org_detail.name || "请填写组织名称",url:""},
        {key:"apply_user_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S"),disabled:true},
        {key:'description', label: '愿景', value: t.org_detail.description || "请填写愿景"},
        {key:"constitution",label:"章程",value:t.org_detail.constitution || "请填写章程"},
        {key:"daily_detail",label:"日常活动内容",value:t.org_detail.daily_detail || "请填写日常内容"},
        {key:"vision",label:"组织架构",value:t.org_detail.vision || "请填写组织架构"},
        {key:"target_partner",label:"目标参与人",value:t.org_detail.target_partner || "请填写目标参与人"}
      ];
    })
  },
  //组织详情
  getOrganizationDetail(id, user){
    const t=this;
    const currentInfo = wx.getStorageSync("_TY_CurrentInfo");

    t.org_info_array = [
        {key:"name",label:"组织名称",value:t.org_detail.header.name || "请填写组织名称",url:""},
        {key:"apply_user_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S")},
        {key:'description', label: '愿景', value: t.org_detail.header.description || "请填写愿景"},
        {key:"constitution",label:"章程",value:t.org_detail.header.constitution || "请填写章程"},
        {key:"daily_detail",label:"日常活动内容",value:t.org_detail.header.daily_detail || "请填写日常内容"},
        {key:"vision",label:"组织架构",value:t.org_detail.header.vision || "请填写组织架构"},
        {key:"target_partner",label:"目标参与人",value:t.org_detail.header.target_partner || "请填写目标参与人"}
      ];
    if(id == undefined){
      return;
    }
    request('/config/commerce_org_detail',{
      data: {
        id
      }
    }).then(res => {
      const { data, activity_list, partner_list } = res.data.data;
      //  org_detail
      const result = {
        header:{
          banner: data.cover_img || '',
          logo: data.logo || '',
          title: data.name || '',
          subtitle: data.description || '',
        },
        members: [{
          group: '组织负责人',
          list: []
        },{
          group: '组织成员',
          list: []
        }],
        activitys: []
      };
      if(activity_list && activity_list.list && activity_list.list.length){
        result.activitys = activity_list.list.map(item => {
          return {
            id: item.id,
            descript: item.description || '',
            tags: item.tag || '',
            status: `${item.num || 0}人参与`,
            name: item.title || '',
            photo: item.picture || '',
          }
        });
      }
      if(partner_list && partner_list.list && partner_list.list.length){
        const masters = [];
        const partners = [];
        partner_list.list.forEach( item => {
          if(item.job > 0){
            masters.push({
              id: item.id,
              photo: item.photo || '',
              name: item.user_name || '',
              subtitle: (item.company_name || item.company_info || ''),
              position: item.job_title,
            });
          }else{
            partners.push({
              id: item.id,
              photo: item.photo || '',
              name: item.user_name || '',
              subtitle: (item.company_name || item.company_info || ''),
              position: item.job_title,
            });
          }

        });
        result.members[0].list = masters;
        result.members[1].list = partners;

        // const user = wx.setStorageSync("_TY_U");
        console.log('user:', user);

        const my = partner_list.list.filter(item => {
          return item.user_id == user.id;
        });
        result.hasJoin = my && my.length > 0;
        result.job = my.job;
      }
      console.log('result:',result);

      t.org_detail = result;
      t.org_info_array = [
        {key:"name",label:"组织名称",value:t.org_detail.header.title,url:""},
        {key:"apply_user_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S")},
        {key:'description', label: '愿景', value: t.org_detail.header.description},
        {key:"constitution",label:"章程",value:t.org_detail.header.constitution},
        {key:"daily_detail",label:"日常活动内容",value:t.org_detail.header.daily_detail,url:""},
        {key:"vision",label:"组织架构",value:t.org_detail.header.vision,url:""},
        {key:"target_partner",label:"目标参与人",value:t.org_detail.header.target_partner,url:""}
      ];
    })
  },

  // 加入组织
  orgRegister(id, reason) {
    console.log(`id:${id},reason:${reason}`);
    return request('/config/commerce_join_org',{
      data: {
        org_id: id,
        reason
      },
      method: 'POST'
    });
  },

  //我  个人信息
  getMineDetail(){
    // const datas = {
    //   photo:"https://taro-ui.aotu.io/img/logo-taro.png",
    //   name:"杨辉",
    //   position:"常务副会长",
    //   company:"唯众传媒 vivid media",
    //   phone:"13888888888",
    //   abstract:"北师大艺术与传媒学院博士，资深媒体人， TV2.0新思维理念倡导者。 历任湖南卫视节目中心副主任、CNBC中国区项目经理。2006年创建唯众传媒,先后创办《开讲啦》、《波士堂》、《我是先生》《老妈驾到》、《你正常吗》、《暴走法条君》等50余档电视和网络节目，出品节目获得超过70项重大奖项。热心公益，现任雷励中国的理事长和上海公益事业发展基金会创始理事。",
    //   honor:[{title:"2015年度全国三八红旗手",color:"#5683C9"},{title:"影响中国传媒领军人物",color:"#5683C9"},{title:"2015中国商业最具创意人物100",color:"#5683C9"},{title:"两次入选“中国商界女性精英价值榜",color:"#5683C9"},{title:"2013-2014年度上海市三八红旗手标兵",color:"#5683C9"}],
    //   companyAbstract:"唯众传媒是中国领先的原创优质视频生产全媒体整合运营商。 成立于2006年的唯众传媒是一家致力于原创追求，以提供优质视频内容为核心竞争力的全媒体整合运营商，是中国传媒界原创节目数量最多，专注于优质视频产品策划与制作的民营传媒机构。公司拥有国内一流的策划力量、导演团队和运营班底，以视频节目创意、策划、制作、经营，大型活动策划、执行，新媒体业务为核心业务。坚持以提供原创、精品、输出正向价值观为核心理念，以打造大文化、大财经、大生活、大综艺四大产品矩阵为发展战略。 ",
    //   companyInfo:{
    //     website:"http://www.v2006.tv/",
    //     name:"上海唯众传媒股份有限公司",
    //     address:"上海市徐汇区中山西路1788弄58号（200235）",
    //     phone:"+86(0)21 5169 7588",
    //     email:"vividmedia@v2006.tv"
    //   }
    // };

    const t = this;
    t.mine_userinfo = {};
    request('/config/commerce_get_userinfo').then(res => {
      if(!res.data.data || !res.data.data.data){
        return ;
      }
      const { data, company, honor_list,company_id } = res.data.data;
      const result = {
        photo: data.photo || '',
        gender:data.gender?"男":"女",
        name: data.name || '',
        position: Job[data.commerce_job] || '',
        company: company.name || '',
        phone: data.telphone || '',
        abstract: data.introduce || '',
        companyAbstract: company.introduce || '',
        integral:data.integral,
        companyInfo:{
          website: company.website || '',
          name: company.name || '',
          address: company.address || '',
          phone: company.phone || '',
          email: company.email || '',
          company_id:company_id
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
      t.mine_userinfo = Object.assign({},result);
      t.mine_enterpriseData = [{key:"name",label:"公司名称",value:result.companyInfo.name},{key:"address",label:"公司地址",value:result.companyInfo.address},{key:"website",label:"公司网址",value:result.companyInfo.website},{key:"phone",label:"公司电话",value:result.companyInfo.phone},{key:"email",label:"公司邮箱",value:result.companyInfo.email},{key:"introduce",label:"公司介绍",value:result.companyAbstract}];
    });
  },
  //我 个人信息编辑
  getPersonalData(){
    const t = this;
    t.mine_userinfo ={};
    request('/config/commerce_get_userinfo').then(res => {
      if(!res.data.data.data){
        return ;
      }
      const { data, company, honor_list,company_id } = res.data.data;
      const result = {
        photo: data.photo || '',
        gender:data.gender,
        name: data.name || '',
        position: Job[data.commerce_job] || '',
        company: company.name || '',
        phone: data.telphone || '',
        abstract: data.introduce || '',
        companyAbstract: company.introduce || '',
        integral:data.integral,
        companyInfo:{
          website: company.website || '',
          name: company.name || '',
          address: company.address || '',
          phone: company.phone || '',
          email: company.email || '',
          company_id:company_id
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
      t.mine_userinfo = result;
      t.mine_enterpriseData = [{key:"name",label:"公司名称",value:result.companyInfo.name},{key:"address",label:"公司地址",value:result.companyInfo.address},{key:"website",label:"公司网址",value:result.companyInfo.website},{key:"phone",label:"公司电话",value:result.companyInfo.phone},{key:"email",label:"公司邮箱",value:result.companyInfo.email},{key:"companyAbstract",label:"公司介绍",value:result.companyAbstract}];
      t.mine_userinfo_array = [
        {key:"name",label:"姓名",value:t.mine_userinfo.name,url:""},
        {key:"gender",label:"性别",text:t.mine_userinfo.gender?"男":"女",value:t.mine_userinfo.gender + "",url:"",editorType:"radio",options:[{ label: '男', value: "true" },{ label: '女', value: "false" }]},
        {key:"telphone",label:"联系方式",value:t.mine_userinfo.phone,url:"",editorType:"telphone"},
        {key:"introduce",label:"个人简介",value:t.mine_userinfo.abstract,url:""},{key:"honor",label:"个人荣誉",value:t.mine_userinfo.honor,url:""},
        {key:"company",label:"公司信息",value:t.mine_userinfo.companyInfo.name,url:""}
        ];
      //获取个人隐私设置
      t.mine_settingPrivacy = {
        hide_phone:!data.hide_phone,
        hide_personal_introduce:!data.hide_personal_introduce,
        hide_honor:!data.hide_honor,
        hide_company_introduce:!data.hide_company_introduce,
        hide_company:!data.hide_company
     }
    });
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
    const t = this;
    request('/config/commerce_my_activity',{
      data: {},
    }).then((res) => {
        if(!res.data.data){
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          })
          setTimeout(()=>{
            wx.navigateBack()
          },2000)
        }else{
        }
    });
  },
  //我 我的积分
  getMyScore(){

    const t = this;
    request('/config/commerce_integral_log',{
      data: {},
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        t.mine_myScore = res.data.data.data_list.list;
          // list:res.data.data.data_list || [{name:"客服充值",time:"04-13 16:24",value:"+20000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"}]
      }
    });
  },
  //我 我的积分详情
  getMyScoreDetail(){
     this.mine_myScoreDetail = [{name:"客服充值",time:"04-13 16:24",value:"+20000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"},{name:"客服充值",time:"04-15 16:24",value:"-1000"}]
  },
  //我 设置 获取隐私设置
  getSettingPrivacy(){
     // this.mine_settingPrivacy = {
     //    hide_phone:true,
     //    hide_personal_introduce:true,
     //    hide_honor:false,
     //    hide_company_introduce:true,
     //    hide_company:false
     // }
  },
  //我 设置 设置隐私
  settingPrivacy(params){
    const t = this;
    request("/config/commerce_save_privacy",{
      method:"post",
      data: params,
    }).then((res) => {
      if(res.data.code != 200){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          //wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          //wx.navigateBack()
        },2000)
      }
    });
  },
  //我 设置 设置隐私
  getSettingPhone(){
     // this.mine_userInfo = {
     //    phone:13988888888
     // }
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
     // this.mine_messageSystem = [{
     //    photo:"https://taro-ui.aotu.io/img/logo-taro.png",
     //    title:"河姆渡CEO华建刚中国智能建筑节行业大会",
     //    subtitle:"为期2天的第三届（2018）中国智能建筑节在西安绿地笔克会 展中心圆满落幕。",
     //    time:"2019-04-09 14:30",
     // },{
     //    photo:"https://taro-ui.aotu.io/img/logo-taro.png",
     //    title:"河姆渡CEO华建刚中国智能建筑节行业大会",
     //    subtitle:"为期2天的第三届（2018）中国智能建筑节在西安绿地笔克会 展中心圆满落幕。",
     //    time:"2019-04-09 14:30"
     // }]

    const t = this;
    request('/config/commerce_mail_system').then(res => {
      if(res.data.code == 200){
        t.mine_messageSystem = res.data.data.data_list.list;
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
      }else{
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        });
      }
    });
  },
  //我 设置编辑器配置
  setMineEditor(params){
    const pages = getCurrentPages();
    const page = pages[pages.length - 1]
    this.mine_mineEditor = params;
    this.mine_mineEditor.formPage = page.route;
  },
  submitMineEditorValue(){
    const t = this;

    let param = {};
    if( t.mine_mineEditor.url == "/config/commerce_update_add_company"){
      if(t.mine_userinfo.companyInfo.company_id){
        param = {
          id:t.mine_userinfo.companyInfo.company_id,
          [t.mine_mineEditor.key]:t.mine_mineEditor.value
        }
      }else{
        param = {
          [t.mine_mineEditor.key]:t.mine_mineEditor.value
        }
      }
      
    }else{
      param = {
        [t.mine_mineEditor.key]:t.mine_mineEditor.value
      }
    }
    request(t.mine_mineEditor.url,{
      method:"post",
      data:param
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        // wx.showToast({
        //   title: "修改失败",
        //   icon: 'none'
        // })
        setTimeout(()=>{
          t.getPersonalData();
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          t.getPersonalData();
          wx.navigateBack()
        },1000)
      }
    });
  },
  //上传文件
  uploaderFile(path,name){
    const t = this;
    request('/config/commerce_oss_upload',{
      method:"post",
      data: {
        file:path
      },
    }).then((res) => {
      if(!res.data.ok){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    });
  },
  //商会获取验证码
  commerceSendVc(telphone){
    const t = this;
    request('/config/commerce_send_vc',{
      method:"post",
      data: {
        telphone:telphone
      },
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
      }else{
        wx.showToast({
          title: "发送成功！",
          icon: 'none'
        });
      }
    });
  },
  //我 设置 更改手机号码
  confirmCommerceSendVc(vc_code,telphone){
    const t = this;
    request('/config/commerce_update_telphone',{
      method:"post",
      data: {
        vc_code:vc_code,
        telphone:telphone
      },
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          Taro.navigateTo({
            // url: '/pages/joinUs/index'
            url: `/pages/mineShare/index`
          });
        },2000)
      }
    });
  },
  //我 设置 更改手机号码
  getUserCode(){
    const t = this;
    request('/config/commerce_integral_log',{
      method:"post",
      data: {
        vc_code:vc_code,
        telphone:telphone
      },
    }).then((res) => {
      if(!res.data.data){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }
    });
  },
  setOrgEditor(params){
    const pages = getCurrentPages();
    const page = pages[pages.length - 1]
    this.org_editor = params;
    this.org_editor.formPage = page.route;
    if(this.org_editor.type == "photo"){
      this.submitOrgEditorValue();
    }
  },
  submitOrgEditorValue(id){
    const t = this;
    let param = {};
    if(t.org_editor.id){
      param = {
        id:t.org_editor.id,
        [t.org_editor.key]:t.org_editor.value
      }
    }else{
      param = {
        [t.org_editor.key]:t.org_editor.value
      }
      t.org_detail = Object.assign(t.org_editor_form,param);
      if(t.org_editor.type != "photo"){
        setTimeout(()=>{
          t.getOrganizationDetailMineCreate();
          wx.navigateBack()
        },100);
      }
      return;
    }
    request("/config/commerce__commerce_api_tb_organization_update_47950",{
      method:"post",
      data:param
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        // wx.showToast({
        //   title: "修改失败",
        //   icon: 'none'
        // })
        setTimeout(()=>{
          t.getOrganizationDetailMineCreate();
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          t.getOrganizationDetailMineCreate();
          wx.navigateBack()
        },1000)
      }
    });
  },
  submitCreateOrg(){
    const t = this;
    request("/config/commerce_xcx_add_org",{
      method:"post",
      data:t.org_detail
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          t.getOrganizationDetailMineCreate();
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "创建成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          t.getOrganizationDetailMineCreate();
          wx.navigateBack()
        },1000)
      }
    });
  },
  setActivitysEditor(params){
    const pages = getCurrentPages();
    const page = pages[pages.length - 1]
    this.activity_editor = params;
    this.activity_editor.formPage = page.route;
    if(this.activity_editor.type == "photo"){
      this.submitActivitysEditorValue();
    }
  },
  submitActivitysEditorValue(id){
    const t = this;
    let param = {};
    if(id){
      param = {
        id:id,
        [t.activity_editor.key]:t.activity_editor.value
      }
    }else{
      param = {
        [t.activity_editor.key]:t.activity_editor.value
      }
      t.activityDetail = Object.assign(t.activityDetail,param);
      if(t.activity_editor.type != "photo"){
        setTimeout(()=>{
          t.refreshActivityDetail();
          wx.navigateBack()
        },100);
      }
      return;
    }
    request("/config/commerce__commerce_api_tb_organization_update_47950",{
      method:"post",
      data:param
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        // wx.showToast({
        //   title: "修改失败",
        //   icon: 'none'
        // })
        setTimeout(()=>{
          t.getActivityDetail(id);
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          t.getActivityDetail(id);
          wx.navigateBack()
        },1000)
      }
    });
  },
  submitCreateActivitys(org_id){
    const t = this;
    const data = Object.assign(t.activityDetail,{org_id:org_id});
    request("/config/commerce_add_activity_app",{
      method:"post",
      data:t.activityDetail
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          t.getActivityDetail();
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "创建成功！",
          icon: 'none'
        });

        setTimeout(()=>{
          const user = wx.getStorageSync("_TY_U");
          setTimeout(()=>{t.getOrganizationDetail(org_id,user);},5000);
          wx.navigateBack();
        },1000)
      }
    });
  },
  //秘书处 活动详情
  getSecretaryActivityDetail(id){
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
    t.secretary_activitys_detail_array = [
        {key:"title",label:"活动名称",value:t.secretary_activitys_detail.title || "请填写活动名称",url:""},
        
        {key:'type', label: '会员类型', value: t.secretary_activitys_detail.type || "活动简介",editorType:"radio",options:[{ label: '名誉会长', value: "名誉会长" },{ label: '会长', value: "会长" },{ label: '副会长', value: "副会长" },{ label: '理事', value: "理事" }]},
        {key:'description', label: '活动简介', value: t.secretary_activitys_detail.description || "活动简介"},
        {key:"start_time",label:"时间",value:t.secretary_activitys_detail.start_time || "请填写活动时间"},
        {key:"address",label:"地点",value:t.secretary_activitys_detail.address || "请填写活动地点"},
        {key:"amount",label:"积分",value:t.secretary_activitys_detail.amount || "请填写所需积分"},
        
        {key:"create_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S"),disabled:true},
        {key:"tag",label:"联系方式",value:t.secretary_activitys_detail.tag || "请填写联系人电话"},
        {key:"content",label:"活动详情",value:t.secretary_activitys_detail.content || "请填写活动详情",editorType:"rich"},
      ];
    if(id == undefined){
      return;
    }
    
    const pages = getCurrentPages();
    const options = pages[pages.length - 1].options;
    request("/config/commerce_activity_detail_app",{
      data: {
        id:id || pages[pages.length - 1].options.id
      },
    }).then((res) => {
      const data = res.data.data.data;
      // const data_list = res.data.data.data_list.list;
      // data.photo = data.picture;
      // data.time = data.start_time;
      // data.status = data_list.length + "人";
      // data.rate = data.amount;
      // data.origin = data.name;
      // data.phone = data.telphone;

      data.data_list = data_list;
      t.secretary_activitys_detail = data;
      const commentList = res.data.data.page_data.currentRecords;
      t.secretary_activitys_detail_array = [
        {key:"title",label:"活动名称",value:t.secretary_activitys_detail.title || "请填写活动名称",url:""},
        {key:'subtitle', label: '会员类型', value: t.secretary_activitys_detail.subtitle || "活动简介",editorType:"radio",options:[{ label: '名誉会长', value: "名誉会长" },{ label: '会长', value: "会长" },{ label: '副会长', value: "副会长" },{ label: '理事', value: "理事" }]},
        {key:'description', label: '活动简介', value: t.secretary_activitys_detail.description || "活动简介"},
        {key:"start_time",label:"时间",value:t.secretary_activitys_detail.start_time || "请填写活动时间"},
        {key:"address",label:"地点",value:t.secretary_activitys_detail.address || "请填写活动地点"},
        {key:"amount",label:"积分",value:t.secretary_activitys_detail.amount || "请填写所需积分"},
        
        {key:"create_id",label:"发起人",text:wx.getStorageSync("_TY_U").name,value:wx.getStorageSync("_TY_S"),disabled:true},
        {key:"tag",label:"联系方式",value:t.secretary_activitys_detail.tag || "请填写联系人电话"},
        {key:"content",label:"活动详情",value:t.secretary_activitys_detail.content || "请填写活动详情",editorType:"rich"},
      ];

      commentList.forEach((ele,key)=>{
        ele.time = ele.create_time || "";
        ele.words = ele.content || "";
        ele.post = ele.job_title || "";
        ele.company = ele.company_name || "";
        ele.name = ele.user_name || "";
        if(key == (commentList.length - 1)){
          t.activity_messageList = commentList;

        }
      });

       // t.activity_appliedList = [{time:"2019-04-12 18:47",words:"很期待这次活动能给我带来不一样的收获，感谢新沪商 能给我们聚在一起的机会！",post:"会长",company:"中国石油华化工集团",name:"郑永刚",photo:"https://taro-ui.aotu.io/img/logo-taro.png"}];

      const appliedList = res.data.data.data_list.list;
      appliedList.forEach((ele,key)=>{
        ele.time = ele.create_time || "";
        ele.words = ele.content || "";
        ele.post = ele.job_title || "";
        ele.name = ele.user_name || "";
        ele.company = ele.company_name || "";
        if(key == (appliedList.length - 1)){
          t.activity_appliedList = appliedList;
        }
      })


    });
  },
   setSecretaryActivitysEditor(params){
    const pages = getCurrentPages();
    const page = pages[pages.length - 1]
    this.secretary_activity_editor = params;
    this.secretary_activity_editor.formPage = page.route;
    if(this.secretary_activity_editor.type == "photo"){
      this.submitSecretaryActivitysEditorValue();
    }
  },
  submitSecretaryActivitysEditorValue(id){
    const t = this;
    let param = {};
    if(id){
      param = {
        id:id,
        [t.secretary_activity_editor.key]:t.secretary_activity_editor.value
      }
    }else{
      param = {
        [t.secretary_activity_editor.key]:t.secretary_activity_editor.value
      }
      t.secretary_activitys_detail = Object.assign(t.secretary_activitys_detail,param);
      if(t.secretary_activity_editor.type != "photo"){
        setTimeout(()=>{
          t.getSecretaryActivityDetail();
          wx.navigateBack()
        },100);
      }
      return;
    }
    request("/config/commerce__commerce_api_tb_organization_update_47950",{
      method:"post",
      data:param
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        // wx.showToast({
        //   title: "修改失败",
        //   icon: 'none'
        // })
        setTimeout(()=>{
          t.getSecretaryActivityDetail(id);
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "修改成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          t.getSecretaryActivityDetail(id);
          wx.navigateBack()
        },1000)
      }
    });
  },
  submitSecretaryCreateActivitys(){
    const t = this;
    request("/config/commerce_add_activity_app",{
      method:"post",
      data:t.activityDetail
      // header: {
      //   'content-type': 'application/json'
      // }
    }).then((res) => {
      if(!res.data.ok){
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        setTimeout(()=>{
          t.getSecretaryActivityDetail();
          wx.navigateBack();
        },1000)
      }else{
        wx.showToast({
          title: "创建成功！",
          icon: 'none'
        });
        setTimeout(()=>{
          t.getSecretaryActivityDetail();
          wx.navigateBack()
        },1000)
      }
    });
  },
  //秘书处 自组织审核列表
  getSecretaryOrganizationList(type, keywords){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_page_audit_org',{
      data: {
        page: 1,
        pageSize: 10000,
      }
    }).then(res => {
      const data = res.data.data.page_data;
      const orgs = data.currentRecords
      t.secretary_organization_custom_audit = orgs;

    });
  },
  //秘书处 自组织活动审核列表
  getSecretaryActivitysList(type, keywords){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_page_audit_activity',{
      data: {
        page: 1,
        pageSize: 10000,
      }
    }).then(res => {
      const data = res.data.data.page_data;
      const activityList = data.currentRecords

      t.secretary_organization_custom_activitys_audit = activityList;

    });
  },//秘书处 自组织详情
  getAuditDetail(id){
    //type 列表请求参数
    // const list = [{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒会俱乐部",subtitle:"一份静谧的高贵，一种脱俗的气质",members:"12",activitys:[{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"},{photo:"https://taro-ui.aotu.io/img/logo-taro.png",title:"红酒品鉴大会",time:"04-02",address:"某某酒店"}]}];
    // return list;
    const t = this;
    request('/config/commerce_xcx_org_detail',{
      data: {
        id:id
      }
    }).then(res => {
      const data = res.data.data.data;
      t.secretary_organization_detail = data

    });
  },
  //秘书处自组织审核结果提交
  submitOrgAudit(id,status,resource){
    const t = this;
    request('/config/commerce_audit_org',{
      method:"post",
      data: {
        id:id,
        status:status,
        resource:resource
      }
    }).then(res => {
      if(res.data.code == 200){
        wx.showToast({
          title: "提交成功！",
          icon: 'none'
        });
      }else{
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        });
      }
    });
  },
  //秘书处自组织活动审核结果提交
  submitActivityAudit(id,status,resource){
    const t = this;
    request('/config/commerce_audit_activity',{
      method:"post",
      data: {
        id:id,
        status:status,
        resource:resource
      }
    }).then(res => {
      if(res.data.code == 200){
        wx.showToast({
          title: "提交成功！",
          icon: 'none'
        });
      }else{
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        });
      }
    });
  },
  getMailCount(){
    const t = this;
    request('/config/commerce_mail_count').then(res => {
      if(res.data.code == 200){
        const data = res.data.data;
        //小红点 我 系统消息
        t.dot_mine_message_system=data.system_count;
        //小红点 我 系统回复
        t.dot_mine_message_reply=data.reply_count;
        //小红点 我 系统留言
        t.dot_mine_message_comment = data.comment_count;
        //小红点 我 活动
        t.dot_mine_activitys = data.activity_count;
        //小红点 待办
        t.dot_mine_todo = data.todo_org_partner_list;
        t.dot_tabbar_show = data.system_count ||  data.reply_count ||  data.comment_count || data.activity_count || data.todo_org_partner_list.length;
        if(t.dot_tabbar_show){
          Taro.showTabBarRedDot({index:3})
        }
      }else{

      }
    });
  },
  //获取品牌
  getActivityBrands(){
    const t = this;
    request('/config/commerce_page_activity_group').then(res => {
      if(res.data.code == 200){
        t.activity_brands = res.data.data.page_data.currentRecords;
      }else{

      }
    });
  },
  //获取品牌下的活动列表
  getActivitysByBrand(id){
    const t = this;
    if(t.activitys_by_brand_id != null && t.activitys_by_brand_id != id){
      t.activitys_by_brand_page = 1;
      t.activitys_by_brand = [];
    }


    request('/config/commerce_page_group_activiry',{
      method:"get",
      data:{
        id:id || 1,
        page:t.activitys_by_brand_page,
        pageSize:10
      }
    }).then(res => {
      if(res.data.code == 200){
        t.activitys_by_brand_id = id;
        t.brand_info = res.data.data.data;
        const records = res.data.data.page_data.currentRecords;

        if(t.activitys_by_brand_page == 1){
          t.activitys_by_brand = [];
        }
        if(records.length){
          records.forEach((item,key)=>{
            const timestamp = Date.parse(new Date());
            if(timestamp > item.start_time){
              item.tag = "已结束";
            }
            item.descript = item.description;
            item.tags = item.tag;
            item.name = item.title;
            item.photo = item.picture;
            item.status = item.num + "人参与";
            if(key == records.length -1){
              t.activitys_by_brand = t.activitys_by_brand.concat(records);
            }
          });

          if(res.data.data.page_data.totalPages > t.activitys_by_brand_page){
            t.activitys_by_brand_page ++ ;
            t.activitys_by_brand_status="more";
          }else{
            t.activitys_by_brand_status = "noMore";
          }
        }
      }else{

      }
    });
  },
  getOrgMembers(org_id){
    const t = this;
    request('/config/commerce_page_org_partners',{
      method:"get",
      data:{
        organization_id:org_id,
        page:t.org_members_page,
        pageSize:10,
        status:0
      }
    }).then(res => {
      if(res.data.code == 200){
        const records = res.data.data.page_data.currentRecords;

        if(t.org_members_page == 1){
          t.org_members = [];
        }
        if(records.length){
          t.org_members = t.org_members.concat(records);
          if(res.data.data.page_data.totalPages > t.org_members_page){
            t.org_members_page ++ ;
            t.org_members_status="more";
          }else{
            t.org_members_status = "noMore";
          }
        }
      }else{

      }
    });
  },
  //审核加入自组织申请
  auditApply(id,status){
    const t = this;
    request('/config/commerce_audit_org_partner',{
      method:"post",
      data:{
        id:id,
        status:status
      }
    }).then(res => {
      if(status == 0){
          wx.showToast({
            title: "您已拒绝改申请！",
            icon: 'none'
          });
        }else{
          wx.showToast({
            title: "您已同意改申请！",
            icon: 'none'
          });
        }
    });
  }

})
export default defaultStore
