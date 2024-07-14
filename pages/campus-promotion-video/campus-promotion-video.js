var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp();

new e.default.Http();

Page({
    onHide: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onUnload: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    data: {
        tabName: "",
        height: 570,
        categoryIds: "",
        currentType: 0
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var a = this;
        console.log("=============="), console.log("options", e);
        var o = decodeURIComponent(e.category_id) ? decodeURIComponent(e.category_id).split(",") : [];
        a.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "宣传视频",
            active: 1 == t.globalData.is_showall ? 0 : o.length > 0 ? o[0] : 0,
            categoryIds: e.category_id ? decodeURIComponent(e.category_id) : "",
            currentType: e.id ? e.id : ""
        });
        var r = wx.createSelectorQuery();
        r.select("#top-bar").boundingClientRect(), r.selectViewport().scrollOffset();
        var n = 0;
        r.exec(function(e) {
            for (var t = 0; t < e.length; t++) e[t] && e[t].height && (n += e[t].height);
            var o = wx.getSystemInfoSync().windowHeight - n;
            a.setData({
                height: o
            });
        });
    },
    chooseNav: function(e) {
        this.setData({
            currentType: e.detail
        });
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/campus-promotion-video/campus-promotion-video?name=".concat(this.data.tabName, "&id=").concat(this.data.currentType, "&category_id=").concat(this.data.categoryIds)
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "name=".concat(this.data.tabName, "&id=").concat(this.data.currentType, "&category_id=").concat(this.data.categoryIds),
            imageUrl: t.globalData.schoollogo
        };
    }
});