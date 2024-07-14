var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp();

new e.default.Http();

Page({
    data: {
        tabName: "",
        id: "",
        is_post_more: 0
    },
    handleAgain: function() {
        wx.navigateTo({
            url: "/pages/form-page/form-page?id=" + this.data.id
        });
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            id: e.id,
            tabName: e.name ? decodeURIComponent(e.name) : "表单"
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
            path: "/pages/form-view/form-view?id=" + this.data.id
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: t.globalData.schoolname,
            imageUrl: t.globalData.schoollogo
        };
    }
});