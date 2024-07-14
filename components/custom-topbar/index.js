var app = getApp();

Component({
  properties: {
    position: {
      type: Number,
      value: 2
    },
    t_width: {
      type: Number,
      value: 200
    },
    bgColor1: {
      type: String,
      value: "#fff",
      observer: function (newVal, oldVal) {
        this.setData({
          bgColor: newVal
        });
      }
    },
    color1: {
      type: String,
      value: "#000",
      observer: function (newVal, oldVal) {
        this.setData({
          color: newVal
        });
      }
    },
    title: {
      type: String,
      value: "customtop",
      observer: function (newVal, oldVal) {
        this.setData({
          titleName: newVal
        });
      }
    },
    hasBack: {
      type: Boolean,
      value: true
    },
    wxIdForSystem: {
      type: String,
      value: "123445"
    }
  },
  data: {
    deviceInfo: {},
    customBar: 40,
    bgColor: "#fff",
    color: "#000",
    titleName: "",
    statusBarHeight: 44
  },
  pageLifetimes: {
    show: function () {
      var that = this;
      wx.getStorage({
        key: "global-config",
        success: function (res) {
          var config = JSON.parse(res.data);
          that.setData({
            bgColor: config.bgColor,
            color: config.fontColor
          });
        },
        fail: function (err) {}
      });
    }
  },
  attached: function () {
    this.getDeviceInfo();
  },
  methods: {
    setColor: function () {
      this.setData({
        bgColor: app.globalData.bgColor,
        color: app.globalData.fontColor
      });
    },
    scrollToTop: function () {
      this.triggerEvent("scrollToTop");
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    setTitle: function (title) {
      this.setData({
        titleName: title
      });
    },
    toBack: function () {
      wx.vibrateShort({
        type: "medium"
      });
      if (getCurrentPages().length === 1) {
        wx.reLaunch({
          url: "/pages/index/index"
        });
      } else {
        wx.navigateBack({
          delta: 1
        });
      }
    },
    getDeviceInfo: function () {
      var statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
      var menuButtonInfo = wx.getMenuButtonBoundingClientRect();
      var top = menuButtonInfo.top;
      var customBarHeight = menuButtonInfo.height + 2 * (top - statusBarHeight);
      var deviceInfo = {
        customBar: customBarHeight,
        statusBarHeight: statusBarHeight
      };
      this.setData({
        deviceInfo: deviceInfo,
        statusBarHeight: statusBarHeight,
        customBar: customBarHeight
      });
    }
  }
});