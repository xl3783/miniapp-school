Page({
    data: {
        testId: "",
        tabName: "结果分析",
        height: 650,
        type: ""
    },
    onLoad: function(e) {
        this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : e.title ? decodeURIComponent(e.title) : "结果分析",
            testId: e.testId ? e.testId : "",
            type: e.type ? e.type : ""
        }), this.selectComponent("#fun-test-res").load(e);
        var t = this, n = wx.createSelectorQuery();
        n.select("#top-bar").boundingClientRect(), n.selectViewport().scrollOffset();
        var o = 0;
        n.exec(function(e) {
            for (var n = 0; n < e.length; n++) e[n] && e[n].height && (o += e[n].height);
            var i = wx.getSystemInfoSync().windowHeight - o;
            t.setData({
                height: i
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
    onPullDownRefresh: function() {}
});