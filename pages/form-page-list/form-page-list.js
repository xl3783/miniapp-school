var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http"));

getApp(), new e.default.Http();

Page({
    data: {
        tabName: "表单",
        height: 600
    },
    onLoad: function(e) {
        var t = this;
        t.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "表单"
        });
        var n = wx.createSelectorQuery();
        n.select("#top-bar").boundingClientRect(), n.selectViewport().scrollOffset();
        var o = 0;
        n.exec(function(e) {
            for (var n = 0; n < e.length; n++) e[n] && e[n].height && (o += e[n].height);
            var a = wx.getSystemInfoSync().windowHeight - o;
            t.setData({
                height: a
            });
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
    onReachBottom: function() {},
    onShareAppMessage: function() {
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});