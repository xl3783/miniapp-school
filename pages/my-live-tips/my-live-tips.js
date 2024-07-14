Page({
    onHide: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onUnload: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    data: {},
    onLoad: function() {},
    backPage: function() {
        wx.navigateBack();
    }
});