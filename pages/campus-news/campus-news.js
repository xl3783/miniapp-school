var e = getApp();

Page({
    data: {
        tabName: "",
        all_column_id: "",
        column_id: "",
        jumpType: 0,
        height: 570
    },
    onLoad: function(e) {
        var t = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "校园新闻",
            all_column_id: e.category_id ? decodeURIComponent(e.category_id) : "",
            column_id: e.column_id ? e.column_id : "",
            jumpType: e.jump_type ? e.jump_type : 0
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
    chooseNav: function(e) {
        this.setData({
            column_id: e.detail
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
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/campus-news/campus-news?name=".concat(this.data.tabName, "&jump_type=").concat(this.data.jumpType, "&category_id=").concat(this.data.all_column_id, "&column_id=").concat(this.data.column_id),
            imageUrl: e.globalData.schoollogo
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "name=".concat(this.data.tabName, "&jump_type=").concat(this.data.jumpType, "&category_id=").concat(this.data.all_column_id, "&column_id=").concat(this.data.column_id),
            imageUrl: e.globalData.schoollogo
        };
    }
});