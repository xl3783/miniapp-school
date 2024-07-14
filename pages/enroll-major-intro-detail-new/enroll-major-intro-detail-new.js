var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = getApp(), a = new t.default.Http();

Page({
    data: {
        intro: "",
        tabName: ""
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.getIntro();
    },
    getIntro: function() {
        var t = this;
        a.get(e.globalData.baseUrl + "/miniapp/faculty/specialty/" + this.data.id).then(function(e) {
            0 == e.errcode && e.data && t.setData({
                tabName: e.data.name,
                showDetail: !0,
                intro: e.data.intro_text
            });
        });
    },
    linktap: function(t) {
        var e = t.detail.href, a = e.substring(e.lastIndexOf(".") + 1, e.length);
        "pdf" != a && "doc" != a && "docx" != a && "xls" != a && "xlsx" != a && "ppt" != a && "pptx" != a || wx.downloadFile({
            url: e,
            success: function(t) {
                var e = t.tempFilePath;
                wx.openDocument({
                    filePath: e
                });
            }
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
            path: "/pages/enroll-major-intro-detail-new/enroll-major-intro-detail-new?id=" + this.data.id
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "id=" + this.data.id,
            imageUrl: e.globalData.schoollogo
        };
    }
});