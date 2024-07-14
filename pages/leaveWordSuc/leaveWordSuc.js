Page({
    data: {},
    onLoad: function(n) {},
    goIndex: function() {
        wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});