var e = getApp();

Page({
    data: {
        tabName: "",
        height: 570,
        fmType: ""
    },
    onLoad: function(e) {
        console.log(e), wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var t = this;
        t.setData({
            fmType: e.fmType ? e.fmType : "",
            tabName: e.name ? decodeURIComponent(e.name) : "招生专业"
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
    onReachBottom: function() {
        console.log("触底事件");
    },
    onPullDownRefresh: function() {
        console.log("上拉");
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/enroll-major-new/enroll-major-new?name=" + this.data.tabName + "&fmType=" + this.data.fmType
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