// 导入依赖模块
import Http from '../../utils/http';
var sprintf = require("../../utils/sprintf");
var util = require("../../utils/util");
var app = getApp();
var httpInstance = new Http();

Component({
  properties: {
    fontSize: {
      type: Number,
      value: 28
    },
    width: {
      type: Number,
      value: 750
    },
    hasBorder: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 4
    },
    line: {
      type: Number,
      value: 2
    },
    navList: {
      type: Array,
      value: Array.from({
        length: 9
      }, function () {
        return {
          image_url: "/images/campus.png",
          name: "comp"
        };
      })
    },
    isSwiper: {
      type: Boolean,
      value: false
    },
    wxIdForSystem: {
      type: String,
      value: "123445"
    },
    isAlumni: {
      type: Boolean,
      value: false
    }
  },
  data: {
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 6600,
    duration: 500,
    active: 0,
    height: 100,
    verifyStatus: false
  },
  lifetimes: {
    attached: function () {
      var self = this;
      app.globalData.home.then(function () {
        self.getVerifyStatus();
      });
    }
  },
  methods: {
    changeSwiper: function (event) {
      this.setData({
        active: event.detail.current
      });
    },
    goNav: function (event) {
      var self = this;
      var item = event.currentTarget.dataset.item;
      var baseUrl = item.base_url;

      if (this.data.isAlumni) {
        if (baseUrl.includes("xpalumni-certification") && this.data.verifyStatus) {
          wx.navigateTo({
            url: "/xpAlumni/certification-details/certification-details?verifyStatus=true"
          });
        } else {
          util.getUserLogin().then(function () {
            self.getVerifyStatus(baseUrl, event);
          });
        }
      } else {
        util.getPhoneLogin().then(function () {
          util.jumpToDetail(event);
        });
      }
    },
    getVerifyStatus: function (baseUrl, event) {
      var self = this;
      var token = app.globalData.token ? app.globalData.token : "";

      httpInstance.get(app.globalData.baseUrl2 + "/miniapp/v1/user/verify-status", {}, {
        Authorization: token
      }).then(function (res) {
        if (res.errcode === 0) {
          self.setData({
            verifyStatus: res.data.verify_status
          });

          if (baseUrl && baseUrl.includes("xpalumni-certification") && self.data.verifyStatus) {
            wx.navigateTo({
              url: "/xpAlumni/certification-details/certification-details?verifyStatus=true"
            });
          } else if (event) {
            util.jumpToDetail(event);
          }
        }
      });
    }
  }
});