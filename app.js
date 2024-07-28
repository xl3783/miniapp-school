import welcomeUtils from './utils/welcome';
import appService from './service/app.service';
import {
  checkNewVersion
} from './xiaopai-applet-wx/base';

App({
  globalData: {
    userInfo: {},
    openid: "",
    no_mourn: 1,
    inviter_phone: "",
    appId: "",
    welcomeUrl: "http://localhost:1337/api",
    welcomeUrl2: "http://localhost:1337/",
    baseUrl: "http://localhost:1337",
    baseUrl2: "http://localhost:1337",
    baseUrl3: "http://localhost:1337",
    baseUrl4: "http://localhost:1337",
    shareLiveH5: "http://localhost:1337/h5/#/",
    tempId: "8u2hSIe511GNoXfjiwHfm5HaRTlosiHZUTK6gp6QyNI",
    isIphoneX: wx.getSystemInfoSync().model.indexOf("iPhone") === 0 &&
      (wx.getSystemInfoSync().model.indexOf("X") >= 0 ||
        (wx.getSystemInfoSync().model.match(/\d+/g) &&
          wx.getSystemInfoSync().model.match(/\d+/g)[0] > 8)),
    platform: "",
    schoolid: 1,
    v: "1.0.0",
    schoolname: "",
    schoollogo: "",
    channel_id: "",
    inviter_id: "",
    is_showall: 0,
    score_list: 1,
    enroll_plan_list: 1,
    major_intro_style: 1,
    enroll_plan_style: 1,
    score_style: 1,
    is_get_phone: 0,
    live_list: 1,
    enroll_type: 0,
    token: "",
    globalColor: "#1487FF",
    appType: 1,
    version: "v1",
    bgColor: "#fff",
    fontColor: "#000",
    tabbar: {
      content: []
    },
    title_position: "",
    title_name: "",
    alumniId: ""
  },
  welcomeHttp: welcomeUtils,
  async onLaunch() {
    wx.showLoading({
      title: "加载中"
    });

    appService.initExtConfig(this);
    welcomeUtils.initWelcome({
      schoolid: this.globalData.schoolid
    });
    // appService.initReporting(this);
    appService.initNetwork(this);

    try {
      const data = await appService.initToken(this);
      const token = "Bearer " + data.token;
      this.network.setToken(token);
      this.network.setBaseHeader("Open-Id", data.openid);
      this.globalData.openid = data.openid;
      this.globalData.token = token;
      this.globalData.userInfo.id = data.id;
      this.globalData.userInfo.token = data.token;

      await this.initHomeData();

      setTimeout(() => {
        wx.hideLoading();
      }, 300);
    } catch (error) {
      console.error('Initialization error:', error);
      wx.hideLoading();
    }

    wx.onPageNotFound(() => {
      wx.reLaunch({
        url: "pages/index/index"
      });
    });
  },
  async initHomeData() {
    try {
      const homeData = await appService.initData(this);
      this.globalData.home = Promise.resolve(homeData);
    } catch (error) {
      console.error('Home data initialization error:', error);
    }
  },
  onShow() {
    checkNewVersion();
  }
});