var e = getApp();

Page({
    data: {
        tabName: "直播",
        type: "",
        height: 1e3,
        typeId: 0
    },
    onLoad: function(e) {
        var t = this;
        t.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "直播",
            type: e.type ? e.type : "all",
            typeId: e.typeId
        }), console.log("options", e);
        var a = wx.createSelectorQuery();
        a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
        var n = 0;
        a.exec(function(e) {
            for (var a = 0; a < e.length; a++) e[a] && e[a].height && (n += e[a].height);
            var o = wx.getSystemInfoSync().windowHeight - n;
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
    onReachBottom: function() {
        this.selectComponent("#liveList-comp").onReachBottom();
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/live-list/live-list?name=" + this.data.tabName + "&type=" + this.data.type
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            imageUrl: e.globalData.schoollogo
        };
    }
});