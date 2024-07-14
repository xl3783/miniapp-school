Page({
    data: {
        tabName: "职业兴趣测试",
        height: 650,
        type: ""
    },
    onLoad: function(e) {
        this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : e.title ? decodeURIComponent(e.title) : "",
            type: e.type ? e.type : ""
        });
        var t = this, n = wx.createSelectorQuery();
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