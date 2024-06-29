// const WXAPI = require('apifm-wxapi')
// const AUTH = require('../../utils/auth')
// import Dialog from '@vant/weapp/dialog/dialog'

Page({
  data: {
    components: [{
      align: 2,
      content: [{
        image_url: "/images/header.png"
      }, {
        image_url: "/images/header.png"
      }],
      style: 2,
      logo: "/images/intro.png",
      schoolName: "荆州职业技术学院"
    }],
    dataLoad: !1,
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
    scoreModel: !0,
    live_list: 1,
    score_list: 1,
    enroll_plan_list: 1,
    enroll_plan_style: 1,
    score_style: 1,
    colorList: [{
      path: "/pages/index/index",
      bgColor: "#fff"
    }, {
      path: "/pages/campus/campus",
      bgColor: "#F3F5F8"
    }, {
      path: "/pages/enroll-major/enroll-major",
      bgColor: "#fff"
    }, {
      path: "/pages/enroll-major-new/enroll-major-new",
      bgColor: "#fff"
    }, {
      path: "/pages/scores/scores",
      bgColor: "#fff"
    }],
    topNum: 0,
    tabbarList: [],
    isNoData: !1,
    triggered: !1,
    showContactMask: !1,
    globalColor: "",
    contactContent: {},
    showContact: !1,
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
  onLoad: function (e) {
    console.log(this.data.website_0)
    // 读取分享链接中的邀请人编号
    // if (e && e.inviter_id) {
    //   wx.setStorageSync('referrer', e.inviter_id)
    // }
    // 读取小程序码中的邀请人编号
    // if (e && e.scene) {
    //   const scene = decodeURIComponent(e.scene)
    //   if (scene) {
    //     wx.setStorageSync('referrer', scene.substring(11))
    //   }
    // }
    // this.initBanners()
    // this.getNotice()
    // this.siteStatistics()
    // this.about()
    // this.fetchShops()
    // this.usersDynamic()
    // 读取系统参数
    // this.readConfigVal()
    // getApp().configLoadOK = () => {
    //   this.readConfigVal()
    // }
    // // 启动定时器
    // setTimeout(() => {
    //   this.updateUserInfoAndMobile()
    // }, 3000)
  },
  onShow: function (e) {},
  readConfigVal() {
    const mallName = wx.getStorageSync('mallName')
    if (!mallName) {
      return
    }
    wx.setNavigationBarTitle({
      title: mallName,
    })
    this.setData({
      comName: wx.getStorageSync('comName'),
      website_0: wx.getStorageSync('website_0'),
      website_1: wx.getStorageSync('website_1'),
      kefu_url: wx.getStorageSync('kefu_url'),
      kefu_corpId: wx.getStorageSync('kefu_corpId'),
      url: wx.getStorageSync('url'),
      qiyeweixin_open: wx.getStorageSync('qiyeweixin_open'),
    })
  },
  async updateUserInfoAndMobile() {
    const userBaseInfo = getApp().globalData.userBaseInfo
    if (!userBaseInfo) {
      setTimeout(() => {
        this.updateUserInfoAndMobile()
      }, 1000)
      return
    }
    if (!userBaseInfo.mobile) {
      Dialog.confirm({
        message: '感谢您的莅临\n\n可以与您交换名片么～',
        theme: 'round-button',
        confirmButtonText: '赐名片',
        cancelButtonText: '残忍拒绝～',
        confirmButtonOpenType: 'getPhoneNumber'
      }).then(() => {
        console.log(222)
      }).catch(() => {})
      return
    }
  },
  async about() {
    const res = await WXAPI.cmsPage('about')
    if (res.code == 0) {
      this.setData({
        aboutData: res.data
      })
    }
  },
  async siteStatistics() {
    const res = await WXAPI.siteStatistics()
    if (res.code == 0) {
      this.setData({
        siteStatisticsData: res.data
      })
    }
  },
  async initBanners() {
    this.setData({
      banners: [1, 2, 3]
    })
    // const res = await WXAPI.banners()
    // if (res.code == 0) {
    //   this.setData({
    //     banners: res.data
    //   })
    // }
  },
  async fetchShops() {
    const res = await WXAPI.fetchShops()
    if (res.code == 0) {
      this.setData({
        shops: res.data
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '"' + wx.getStorageSync('comName') + '" ' + wx.getStorageSync('share_profile'),
      path: '/pages/index/index?inviter_id=' + wx.getStorageSync('uid')
    }
  },
  async getNotice() {
    const res = await WXAPI.noticeList({
      pageSize: 5
    })
    if (res.code == 0) {
      this.setData({
        noticeList: res.data
      })
    }
  },
  goNotice(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/notice/show?id=' + id,
    })
  },
  copy(e) {
    const v = e.currentTarget.dataset.v
    wx.setClipboardData({
      data: v,
    })
  },
  webview(e) {
    const v = e.currentTarget.dataset.v
    wx.navigateTo({
      url: '/pages/webview/website?url=' + v,
    })
  },
  async gomap(e) {
    const idx = e.currentTarget.dataset.idx
    const shop = this.data.shops[idx]
    console.log(shop)
    let res = await wx.openLocation({
      name: shop.name,
      address: shop.address,
      latitude: shop.latitude,
      longitude: shop.longitude,
      scale: 18
    });
    console.log(res)
  },
  callMobile(e) {
    const idx = e.currentTarget.dataset.idx
    const shop = this.data.shops[idx]
    wx.makePhoneCall({
      phoneNumber: shop.linkPhone,
    })
  },
  async getPhoneNumber(e) {
    console.log(e);
    if (!e.detail.errMsg || e.detail.errMsg != "getPhoneNumber:ok") {
      wx.showToast({
        title: e.detail.errMsg,
        icon: 'none'
      })
      // this.updateUserInfoAndMobile()
      return;
    }
    let res
    const extConfigSync = wx.getExtConfigSync()
    if (extConfigSync.subDomain) {
      // 服务商模式
      res = await WXAPI.wxappServiceBindMobileV2({
        token: wx.getStorageSync('token'),
        code: e.detail.code
      })
    } else {
      res = await WXAPI.bindMobileWxappV2(wx.getStorageSync('token'), e.detail.code)
    }
    if (res.code == 0) {
      wx.showToast({
        title: '非常感谢～',
        icon: 'success'
      })
    } else {
      wx.showToast({
        title: res.msg,
        icon: 'none'
      })
    }
  },
  async usersDynamic() {
    // const res = await WXAPI.usersDynamic(1)
    const res = {
      code: 0,
      data: [{
          nick: "xx"
        },
        {
          nick: "yy"
        }
      ]
    }
    if (res.code == 0) {
      this.setData({
        usersDynamicList: res.data
      })
    }
  },
  kefu() {
    wx.openCustomerServiceChat({
      extInfo: {
        url: wx.getStorageSync('kefu_url')
      },
      corpId: wx.getStorageSync('kefu_corpId'),
      success(res) {}
    })
  },
})