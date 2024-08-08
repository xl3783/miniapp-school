var e = getApp();

Page({
  data: {
    tabName: "新闻详情",
    id: "",
    height: 570,
    title: ""
  },
  onLoad: function (e) {
    console.log(e.name), console.log(e), wx.showShareMenu({
      withShareTicket: !0,
      menus: ["shareAppMessage", "shareTimeline"]
    });
    var t = this;
    this.setData({
      id: e.id,
      tabName: e.name ? e.name : e.title ? e.title : "新闻详情"
    });
    var a = wx.createSelectorQuery();
    a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
    var n = 0;
    a.exec(function (e) {
      for (var a = 0; a < e.length; a++) e[a] && e[a].height && (n += e[a].height);
      var i = wx.getSystemInfoSync().windowHeight - n;
      t.setData({
        height: i
      });
    });
  },
  changeName: function (e) {
    this.setData({
      title: e.detail ? e.detail : "新闻详情"
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    // return getApp().reporting.share({
    //   type: 1,
    //   value: ""
    // }, getCurrentPages()), {
    //   title: this.data.title,
    //   path: "/pages/campus-news-detail/campus-news-detail?name=".concat(this.data.tabName, "&id=").concat(this.data.id)
    // };
  },
  // onShareTimeline: function () {
  //   return getApp().reporting.share({
  //     type: 2,
  //     value: ""
  //   }, getCurrentPages()), {
  //     title: this.data.title,
  //     query: "name=".concat(this.data.tabName, "&id=").concat(this.data.id),
  //     imageUrl: e.globalData.schoollogo
  //   };
  // }
});