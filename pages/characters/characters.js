var e = getApp();

Page({
    data: {
        tabName: "师资力量",
        height: 550,
        columnId: ""
    },
    onLoad: function(e) {
        console.log(e), console.log(e.column_id);
        var t = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : e.title ? decodeURIComponent(e.title) : "",
            columnId: e.column_id ? e.column_id : ""
        });
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
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/characters/characters?name=" + this.data.tabName
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