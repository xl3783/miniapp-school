Page({
    data: {
        proData: {},
        tabName: "测算结果"
    },
    onLoad: function(e) {
        var t = e.str ? JSON.parse(e.str) : "";
        this.setData({
            proData: t
        });
        var n = this, o = wx.createSelectorQuery();
        o.select("#top-bar").boundingClientRect(), o.selectViewport().scrollOffset();
        var a = 0;
        o.exec(function(e) {
            for (var t = 0; t < e.length; t++) e[t] && e[t].height && (a += e[t].height);
            var o = wx.getSystemInfoSync().windowHeight - a;
            n.setData({
                height: o
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