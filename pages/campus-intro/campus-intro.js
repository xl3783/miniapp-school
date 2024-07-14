var app = getApp();

Page({
  data: {
    height: 570,
    tabName: ""
  },
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"]
    });

    this.setData({
      tabName: options.name ? decodeURIComponent(options.name) : "学校简介"
    });

    this.calculatePageHeight();
  },
  onReady: function () {},
  onShow: function () {
    app.reporting.page("show", getCurrentPages());
  },
  onHide: function () {
    app.reporting.page("hide");
  },
  onUnload: function () {
    app.reporting.page("hide");
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    app.reporting.share({
      type: 1,
      value: ""
    }, getCurrentPages());
    return {
      title: this.data.tabName,
      path: "/pages/campus-intro/campus-intro?name=" + this.data.tabName
    };
  },
  onShareTimeline: function () {
    app.reporting.share({
      type: 2,
      value: ""
    }, getCurrentPages());
    return {
      title: this.data.tabName,
      imageUrl: app.globalData.schoollogo
    };
  },
  calculatePageHeight: function () {
    var self = this;
    var query = wx.createSelectorQuery();
    var totalHeight = 0;

    query.select("#top-bar").boundingClientRect();
    query.selectViewport().scrollOffset();

    query.exec(function (res) {
      res.forEach(function (item) {
        if (item && item.height) {
          totalHeight += item.height;
        }
      });

      var windowHeight = wx.getSystemInfoSync().windowHeight;
      self.setData({
        height: windowHeight - totalHeight
      });
    });
  }
});