var e = getApp();

Page({
    data: {
        tabName: "",
        height: 570,
        top: 0
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var t = this;
        t.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "校园风采",
            categoryIds: e.category_id ? decodeURIComponent(e.category_id) : "",
            currentType: e.id ? e.id : 0
        });
        var a = wx.createSelectorQuery();
        a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
        var n = 0;
        a.exec(function(e) {
            for (var a = 0; a < e.length; a++) e[a] && e[a].height && (n += e[a].height);
            var o = wx.getSystemInfoSync().windowHeight - n;
            t.setData({
                height: o,
                top: n
            });
        });
    },
    onReady: function() {},
    onShow: function() {
    },
    onHide: function() {
    },
    onUnload: function() {
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
    },
    onShareTimeline: function() {
    }
});