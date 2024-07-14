var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), n = new e.default.Http();

Page({
    data: {
        type: 0,
        questionList: [],
        dataIsLoad: !1
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            type: e.type
        }), this.getQuestionsList();
    },
    getQuestionsList: function() {
        var e = this;
        wx.showLoading({
            title: "加载中"
        });
        var a = this.data.type;
        n.get(t.globalData.baseUrl + "/miniapp/problem", {
            type: a
        }).then(function(t) {
            e.setData({
                dataIsLoad: !1,
                questionList: t.data
            });
        }).finally(function() {
            wx.hideLoading();
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
            title: "问题列表"
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: "问题列表",
            imageUrl: t.globalData.schoollogo
        };
    }
});