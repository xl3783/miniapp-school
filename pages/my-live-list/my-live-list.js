getApp();

Page({
    data: {
        tabName: "我的直播",
        height: 1e3,
        id: 0,
        name: "",
        cover_url: "",
        type: !1
    },
    changeShare: function(e) {
        var t = e.detail, a = t.id, n = t.type, i = t.cover_url, r = t.name;
        this.setData({
            id: a,
            name: r,
            cover_url: i,
            type: n
        });
    },
    onLoad: function(e) {
        var t = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage" ]
        }), t.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "直播"
        });
        var a = wx.createSelectorQuery();
        a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
        var n = 0;
        a.exec(function(e) {
            for (var a = 0; a < e.length; a++) e[a] && e[a].height && (n += e[a].height);
            var i = wx.getSystemInfoSync().windowHeight - n;
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
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
        var e;
        return e = "/pages/live-detail/live-detail?name=" + this.data.name + "&id=" + this.data.id, 
        {
            title: this.data.name,
            imageUrl: this.data.cover_url,
            path: e
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            imageUrl: this.data.cover_url,
            query: "name=" + this.data.name + "&id=" + this.data.id
        };
    }
});