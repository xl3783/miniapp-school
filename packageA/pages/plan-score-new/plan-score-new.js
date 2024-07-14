Page({
    data: {
        tabName: "",
        searchId: "",
        height: 700
    },
    onLoad: function(e) {
        console.log(e);
        var t = this, a = e.id;
        t.setData({
            searchId: a,
            tabName: e.name ? decodeURIComponent(e.name) : e.title ? decodeURIComponent(e.title) : ""
        });
        var n = wx.createSelectorQuery();
        n.select("#top-bar").boundingClientRect(), n.selectViewport().scrollOffset();
        var o = 0;
        n.exec(function(e) {
            for (var a = 0; a < e.length; a++) e[a] && e[a].height && (o += e[a].height);
            var n = wx.getSystemInfoSync().windowHeight - o;
            t.setData({
                height: n
            });
        });
    },
    changeName: function(e) {
        this.data.tabName || this.setData({
            tabName: e.detail
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
    onShareTimeline: function() {
        return {
            title: this.data.tabName,
            query: "name=" + this.data.tabName + "&id=" + this.data.searchId
        };
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "packageA/pages/plan-score-new/plan-score-new?name=" + this.data.tabName + "&id=" + this.data.searchId
        };
    }
});