var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

Page({
    data: {
        id: 0,
        questionData: {},
        answer: "",
        tabName: "",
        dataIsLoad: !1
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            id: e.id
        }), this.getQuestionDetail();
    },
    getQuestionDetail: function() {
        var e = this;
        wx.showLoading({
            title: "加载中"
        });
        var i = this.data.id;
        a.get(t.globalData.baseUrl + "/miniapp/problem/" + i).then(function(t) {
            e.setData({
                questionData: t,
                dataIsLoad: !0,
                answer: t.answer,
                tabName: t.title
            });
        }).finally(function() {
            wx.hideLoading();
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
            path: "/pages/campus-faq-cate-detail/campus-faq-cate-detail?id=" + this.data.id
        };
    },
    onShareTimeline: function(e) {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/campus-faq-cate-detail/campus-faq-cate-detail?id=" + this.data.id,
            imageUrl: t.globalData.schoollogo
        };
    }
});