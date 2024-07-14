Page({
    data: {
        tabName: "",
        searchType: "",
        enrollType: "",
        height: 700
    },
    onLoad: function(e) {
        var t = this, n = e.searchType, o = e.enrollType;
        console.log(e), t.setData({
            searchType: n,
            enrollType: o,
            tabName: e.name ? decodeURIComponent(e.name) : 1 == n ? "招生计划" : "历年分数"
        });
        var a = wx.createSelectorQuery();
        a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
        var r = 0;
        a.exec(function(e) {
            for (var n = 0; n < e.length; n++) e[n] && e[n].height && (r += e[n].height);
            var o = wx.getSystemInfoSync().windowHeight - r;
            t.setData({
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