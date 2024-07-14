var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

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
        height: 570
    },
    openQuestion: function(e) {
        var t = e.currentTarget.dataset, a = t.index, n = (t.type, -1);
        n = a == this.data.activeIndex ? -1 : a, this.setData({
            activeIndex: n,
            secQuestionList: this.data.cateList[a].content
        });
    },
    getQuestionCate: function() {
        var e = this;
        a.get(t.globalData.baseUrl + "/miniapp/problem").then(function(t) {
            for (var a = t.data.length, n = e.data.colorList.length, i = Math.ceil(a / n), o = e.data.colorList, r = [], s = 0; s < i; s++) r = r.concat(o);
            e.setData({
                colorList: r,
                cateList: t.data,
                style: t.style
            });
        });
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var t = this;
        t.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "常见问题"
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
    linktap: function(e) {
        var t = e.detail.href, a = t.substring(t.lastIndexOf(".") + 1, t.length);
        "pdf" != a && "doc" != a && "docx" != a && "xls" != a && "xlsx" != a && "ppt" != a && "pptx" != a || wx.downloadFile({
            url: t,
            success: function(e) {
                var t = e.tempFilePath;
                wx.openDocument({
                    filePath: t
                });
            }
        });
    },
    onReady: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/campus-faq/campus-faq?name=" + this.data.tabName
        };
    },
    onShareTimeline: function(e) {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            imageUrl: t.globalData.schoollogo
        };
    }
});