import * as util from '../../utils/util';
import {getBottoms} from "../../apis/index";
const app = getApp();

Page({
  onHide() {
    // app.reporting.page("hide", getCurrentPages());
  },
  onShow() {
    // app.reporting.page("show", getCurrentPages());
  },
  onUnload() {
    // app.reporting.page("hide", getCurrentPages());
  },
  data: {
    dataLoad: true,
    mourn: 1,
    top: 0,
    enroll_type: 0,
    fontColor: "",
    bgColor: "",
    name: "",
    path: "/pages/index/index",
    initId: 1,
    pageColor: "#fff",
    height: 600,
    scoreModel: true,
    live_list: 1,
    score_list: 1,
    enroll_plan_list: 1,
    enroll_plan_style: 1,
    score_style: 1,
    colorList: [{
        path: "/pages/index/index",
        bgColor: "#fff"
      },
      {
        path: "/pages/campus/campus",
        bgColor: "#F3F5F8"
      },
      {
        path: "/pages/enroll-major/enroll-major",
        bgColor: "#fff"
      },
      {
        path: "/pages/enroll-major-new/enroll-major-new",
        bgColor: "#fff"
      },
      {
        path: "/pages/scores/scores",
        bgColor: "#fff"
      }
    ],
    topNum: 0,
    tabbarList: [],
    isNoData: false,
    triggered: false,
    showContactMask: false,
    globalColor: "",
    contactContent: {},
    showContact: false,
    showCollect: 0,
    campus_id: 0,
    campus_name: "",
    divition_id: 0,
    divition_name: "",
    province_id: 0,
    province_name: "",
    year: 0,
    nickName: "",
    avatarUrl: "",
    subjectList: [],
    areaList: [],
    yearList: [],
    campusList: [],
    detailId: 0,
    formId: 0,
    videoId: 0,
    category_ids: "",
    columnId: "",
    jump_type: 0,
    typeId: "",
    currentVideoType: 0,
    currentCampuesNewsColumnId: "",
    mixtureData: "",
    title_position: 2,
    t_left: 10,
    t_w: 200,
    fmType: "",
    searchId: ""
  },
  chooseVideoNav(e) {
    this.setData({
      currentVideoType: e.detail
    });
  },
  chooseCampusNewsNav(e) {
    this.setData({
      currentCampuesNewsColumnId: e.detail
    });
  },
  scrollToTop() {
    this.selectComponent("#indexComp").scrollToTop();
  },
  async chooseTab(e) {
    const {
      id,
      base_url,
      name,
      detail_id,
      category_ids,
      jump_type,
      jump_url,
      list
    } = e.detail;
    if (jump_url.includes("http")) {
      wx.navigateTo({
        url: `/pages/web-view/web-view?url=${encodeURIComponent(jump_url)}`
      });
    } else {
      const colorListEntry = this.data.colorList.find(item => item.path === base_url);
      const bgColor = colorListEntry ? colorListEntry.bgColor : "#fff";

      if (base_url === "/pages/index/index") {
        this.setData({
          path: base_url,
          name: app.globalData.title_name || "首页",
          title_position: app.globalData.title_position || "首页",
          pageColor: bgColor,
          tabbarList: list,
          category_ids
        });
        wx.setStorage({
          key: "currentPath",
          data: {
            id,
            path: base_url,
            category_ids,
            jump_type
          }
        });
      } else {
        await util.getPhoneLogin();
        let path = base_url;
        let mixtureData = "";
        if (base_url.startsWith("/prepare/mixture/mixture")) {
          const aid = this.getQueryNameValue(base_url.slice(25), "aid");
          const vid = this.getQueryNameValue(base_url.slice(25), "vid");
          const sid = this.getQueryNameValue(base_url.slice(25), "sid");
          mixtureData = {
            aid: aid || "",
            vid: vid || "",
            sid: sid || ""
          };
          path = "/prepare/mixture/mixture";
        }
        let fmType = null;
        if (base_url === "/pages/enroll-major-new/enroll-major-new") {
          let searchParam = jump_url.split('?')[1];
          fmType = searchParam.split('=')[1];
        }
        this.setData({
          path,
          mixtureData,
          name,
          pageColor: bgColor,
          detailId: base_url === "/pages/campus-news-detail/campus-news-detail" ? detail_id : 0,
          typeId: base_url === "/pages/admission-query/admission-query" ? detail_id : "",
          formId: (base_url === "/pages/form-page/form-page" || base_url === "/pages/form-view/form-view") ? detail_id : 0,
          videoId: base_url === "/pages/campus-promotion-video-detail/campus-promotion-video-detail" ? detail_id : 0,
          columnId: base_url === "/pages/characters/characters" ? detail_id : "",
          fmType: fmType,
          searchId: base_url === "/packageA/pages/plan-score-new/plan-score-new" ? detail_id : "",
          topNum: 0,
          category_ids,
          jump_type,
          tabbarList: list
        });
        wx.setStorage({
          key: "currentPath",
          data: {
            id,
            path,
            category_ids,
            jump_type
          }
        });
      }
    }
  },
  changeScoreModel(e) {
    this.setData({
      scoreModel: e.detail
    });
  },
  openContact() {
    this.setData({
      showContactMask: true
    });
  },
  hideContact() {
    this.setData({
      showContactMask: false
    });
  },
  showContactEvent(e) {
    const {
      contactContent,
      globalColor,
      showContact,
      showCollect
    } = e.detail;
    this.setData({
      contactContent,
      globalColor,
      showContact,
      showCollect
    });
  },
  goKefu() {
    wx.navigateTo({
      url: "/pages/kefu/kefu"
    });
  },
  openPhone(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone.toString()
    });
  },
  copyWx(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.wx.toString(),
      success() {
        wx.showToast({
          title: "内容已复制"
        });
        wx.getClipboardData({
          success() {
            wx.showToast({
              title: "内容已复制"
            });
          }
        });
      }
    });
  },
  leaveWord() {
    wx.navigateTo({
      url: "/pages/leaveWord/leaveWord"
    });
    this.setData({
      showContactMask: false
    });
  },
  goWebView(e) {
    wx.navigateTo({
      url: `/pages/web-view/web-view?url=${encodeURIComponent(e.currentTarget.dataset.url)}`
    });
  },
  closeCollect() {
    this.setData({
      showCollect: false
    });
  },
  async getBottom() {
    console.log("getBottom")
    // Promise.resolve(tabbarRes).then(t => {
    //   console.log("getBottom then")
    const t = await getBottoms();
    if (t.errcode === 1) {
      wx.showToast({
        title: t.errmsg,
        icon: "none"
      });
    } else {
      app.globalData.tabbar = t;
      this.setData({
        tabbarList: t.content
      });
      try {
        let currentPath = wx.getStorageSync("currentPath");
        if (currentPath.includes("../../")) {
          currentPath = currentPath.substring(5);
        }
        if (currentPath) {
          const index = t.content.findIndex(item => item.base_url === currentPath.path && item.id === currentPath.id);
          this.setData({
            initId: index > -1 ? currentPath.id : t.content[0].id,
            path: index > -1 ? currentPath.path : "/pages/index/index",
            category_ids: currentPath.category_ids || "",
            jump_type: currentPath.jump_type || ""
          });
        }
      } catch (e) {
        console.error("Error setting initial tab:", e);
      }
    }
  },
  onLoad(e) {
    console.log("onload")
    // todo agreement
    // this.selectComponent("#wx-agreement").check({
    //   show: true
    // });

    console.log(e);
    console.log(app.globalData);
    this.setData({
      dataLoad: true
    })

    // app.globalData.home.finally(() => {
    //   this.setData({
    //     dataLoad: true
    //   });
    // });

    // wx.showShareMenu({
    //   withShareTicket: true,
    //   menus: ["shareAppMessage", "shareTimeline"]
    // });

    const scene = e.scene ? decodeURIComponent(e.scene) : "";
    // if (scene) {
    //   app.globalData.channel_id = this.getQueryNameValue(scene, "channel_id");
    //   app.globalData.inviter_id = this.getQueryNameValue(scene, "user_id");
    //   app.globalData.inviter_phone = this.getQueryNameValue(scene, "phone");

    //   app.globalData.home.then(() => {
    //     app.network.setHeader("Inviter-Id", app.globalData.inviter_id);
    //     app.network.setHeader("Channel-Id", app.globalData.channel_id);
    //     app.network.setHeader("Inviter-Phone", app.globalData.inviter_phone);
    //     app.network.getContext("OE", true).get("/wxLogin/invite");
    //   });
    // }
    console.log("path:", this.data.path)
    this.setData({
      path: e.path || "/pages/index/index"
    });
    console.log("e.path:", e.path)
    console.log("path:", this.data.path)
    const menuButtonLeft = wx.getMenuButtonBoundingClientRect().left;
    const query = wx.createSelectorQuery();
    query.select("#top-bar").boundingClientRect();
    query.select("#bottom-bar").boundingClientRect();
    query.selectViewport().scrollOffset();

    let height = 0;
    console.log(height)
    query.exec((res) => {
      res.forEach(item => {
        if (item && item.height) {
          height += item.height;
        }
      });
      const {
        windowHeight,
        screenHeight,
        safeArea
      } = wx.getSystemInfoSync();
      const contentHeight = windowHeight - height - 50;
      this.setData({
        height: contentHeight,
        top: screenHeight - safeArea.height,
        t_w: menuButtonLeft - 20
      });
    });
    console.log("height:", height)
    this.handleShow();
  },
  getQueryNameValue(url, name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
    const match = url.match(reg);
    return match ? unescape(match[2]) : null;
  },
  async handleShow() {
    console.log("handleShow")
    app.globalData.home.then(() => {
      console.log("app.globalData.home")
      console.log(app.globalData)
      const {
        enroll_plan_list,
        score_list,
        live_list,
        score_style,
        enroll_plan_style,
        bgColor,
        fontColor,
        is_collect,
        enroll_type,
        no_mourn
      } = app.globalData;
      this.setData({
        mourn: !(no_mourn !== undefined && !no_mourn),
        enroll_plan_list,
        score_list,
        live_list,
        score_style,
        enroll_plan_style,
        bgColor,
        fontColor,
        showCollect: is_collect,
        enroll_type
      });

      const indexComp = this.selectComponent("#indexComp");
      const bottomBar = this.selectComponent("#bottom-bar");
      if (indexComp) {
        indexComp.data.components = [];
        indexComp.getHomeData();
      }
      if (bottomBar) {
        bottomBar.getBottom();
        try {
          const currentPath = wx.getStorageSync("currentPath");
          if (currentPath) {
            const index = this.data.tabbarList.findIndex(item => item.base_url === currentPath.path && item.id === currentPath.id);
            this.setData({
              initId: index > -1 ? currentPath.id : 0,
              path: index > -1 ? currentPath.path : "/pages/index/index",
              category_ids: index > -1 ? currentPath.category_ids : "",
              jump_type: index > -1 ? currentPath.jump_type : ""
            });
          }
        } catch (e) {
          console.error("Error initializing tab:", e);
        }
      }
    });
  },
  onShareAppMessage(e) {
    app.reporting.share({
      type: 1,
      value: ""
    }, getCurrentPages());
    const {
      path,
      name,
      formId,
      videoId,
      currentVideoType,
      category_ids,
      currentCampuesNewsColumnId,
      detailId,
      typeId
    } = this.data;

    if (path === "/pages/form-page/form-page") {
      return {
        title: name,
        path: `${path}?name=${name}&id=${formId}`
      };
    } else if (path === "/pages/campus-promotion-video-detail/campus-promotion-video-detail") {
      return {
        title: name,
        path: `${path}?name=${name}&id=${videoId}`
      };
    } else if (path === "/pages/campus-promotion-video/campus-promotion-video") {
      return {
        title: name,
        path: `${path}?name=${name}&id=${currentVideoType}&category_id=${category_ids}`
      };
    } else if (path === "/pages/campus-news/campus-news") {
      return {
        title: name,
        path: `${path}?name=${name}&column_id=${currentCampuesNewsColumnId}&category_id=${category_ids}`
      };
    } else if (path === "/pages/campus-news-detail/campus-news-detail") {
      return {
        title: name,
        path: `${path}?name=${name}&id=${detailId}`
      };
    } else if (path === "/pages/characters/characters") {
      return {
        title: name,
        path: `${path}?name=${name}&column_id=${detailId}`
      };
    } else if (path === "/pages/admission-query/admission-query") {
      return {
        title: name,
        path: `${path}?name=${name}&type=${typeId}`
      };
    } else {
      return {
        title: name,
        path: `/pages/index/index?name=${name}&path=${path}`
      };
    }
  },
  onShareTimeline() {
    app.reporting.share({
      type: 2,
      value: ""
    }, getCurrentPages());

    return {
      title: this.data.name,
      imageUrl: app.globalData.schoollogo
    };
  }
});