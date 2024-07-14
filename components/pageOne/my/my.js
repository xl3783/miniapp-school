import Http from '../../../utils/http';
const app = getApp();

Component({
  properties: {
    height: {
      type: Number,
      value: 550
    },
    bgColor: {
      type: String,
      value: "#fff"
    },
    nickName: {
      type: String,
      value: ""
    },
    avatarUrl: {
      type: String,
      value: ""
    }
  },
  data: {
    tabName: "",
    nickName: "",
    avatarUrl: "",
    v: "1.0.0",
    schoolname: app.globalData.schoolname,
    platform: app.globalData.platform,
    logo: app.globalData.schoollogo,
    alumniStatus: 0,
    alumniData: {},
    verifyStatus: false,
    list: [],
    shareList: [],
    isTeacher: 0,
    dotShow: false,
    alumniBg: "",
    paiType: false
  },
  lifetimes: {
    attached: function () {
      const isShowSupport = wx.getStorageSync("globalCondig").is_show_support === 1;
      this.setData({
        paiType: isShowSupport,
        schoolname: app.globalData.schoolname,
        logo: app.globalData.schoollogo,
        v: app.globalData.v
      });

      wx.getStorage({
        key: "newuserinfo",
        success: (res) => {
          app.globalData.userInfo = res.data;
          app.globalData.token = res.data.token.access_token;
          this.setData({
            token: res.data.token.access_token,
            nickName: res.data.name,
            avatarUrl: res.data.avatarUrl
          });
        },
        fail: () => {
          this.setData({
            token: ""
          });
        }
      });

      const fileSystemManager = wx.getFileSystemManager();
      const verifyImageBase64 = fileSystemManager.readFileSync("/assets/image/verify.png", "base64");
      this.setData({
        alumniBg: "data:image/jpg;base64," + verifyImageBase64
      });

      // this.getVerifyStatus();
      // this.getPersonalCenter();
      // this.getInformation();
      console.log("个人中心111");
    }
  },
  pageLifetimes: {
    show: function () {
      console.log("个人中心222");
      this.getUserInfo();
      this.getInformation();
    }
  },
  methods: {
    getUserInfo: function () {
      const http = new Http();
      http.get(app.globalData.baseUrl + "/miniapp/userInfo", {}, {
        Authorization: app.globalData.token || ""
      }).then((res) => {

        if (res.errcode === 0) {
          console.log(res);
          app.globalData.userInfo = {
            ...app.globalData.userInfo,
            ...res.data
          };
          console.log(app.globalData.userInfo);
          this.setData({
            nickName: res.data.name,
            avatarUrl: res.data.avatarUrl,
            phone: res.data.phone
          });
          wx.setStorage({
            key: "newuserinfo",
            data: app.globalData.userInfo
          });
        } else {
          wx.showToast({
            title: res.errmsg,
            icon: "none"
          });
        }
      });
    },
    handleLogin: function () {
      wx.navigateTo({
        url: "/packageA/pages/avatar-nickname/avatar-nickname"
      });
    },
    goDetail: function (event) {
      const url = event.currentTarget.dataset.url;
      wx.navigateTo({
        url: url
      });
    },
    getPersonalCenter: function () {
      const http = new Http();
      console.log(app.globalData.schoollogo);
      http.get(app.globalData.baseUrl + "/miniapp/personalCenter").then((res) => {
        if (res.errcode === 0) {
          const {
            list,
            share,
            alumni
          } = res.data;
          this.setData({
            list: [...list],
            shareList: [...share],
            alumniStatus: res.alumni,
            alumniData: {
              ...alumni[0]
            }
          });
        }
      });
    },
    getInformation: function () {
      const http = new Http();
      http.get(app.globalData.baseUrl + "/miniapp/stationMessage/unreadNum").then((res) => {
        if (res.errcode === 0) {
          this.setData({
            dotShow: res.data.unread_num > 0
          });
        }
      });
    },
    getVerifyStatus: function () {
      const http = new Http();
      http.get(app.globalData.baseUrl2 + "/miniapp/v1/user/verify-status", {}, {
        Authorization: app.globalData.token || ""
      }).then((res) => {
        if (res.errcode === 0) {
          this.setData({
            verifyStatus: res.data.verify_status
          });
        }
      });
    },
    goVerify: function (event) {
      if (!event.currentTarget.dataset.status) {
        wx.navigateTo({
          url: "/xpAlumni/xpalumni-certification/xpalumni-certification"
        });
      }
    },
    goInfoDetails: function () {
      wx.requestSubscribeMessage({
        tmplIds: [app.globalData.robotTempId],
        complete: () => {
          wx.navigateTo({
            url: "/pages/information/information"
          });
        }
      });
    },
    handleSubscribe: function (event) {
      wx.requestSubscribeMessage({
        tmplIds: [app.globalData.robotTempId],
        success: (res) => {
          if (res[app.globalData.robotTempId] !== "reject") {
            console.log("订阅成功");
          } else {
            console.log("订阅拒绝");
          }
        },
        complete: (res) => {
          console.log("订阅完成", res);
          if (event === "infoDetails") {
            wx.navigateTo({
              url: "/pages/information/information"
            });
          }
        }
      });
    }
  }
});