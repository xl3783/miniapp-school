var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

Page({
    data: {
        tabName: "直播已结束",
        hasBack: !1,
        logo: "",
        isTeacher: 1,
        view_num: 0,
        duration: 0,
        msg_num: 0,
        durationText: "0",
        name: ""
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: []
        }), this.setData({
            logo: t.globalData.schoollogo,
            id: e.id,
            isTeacher: e.isTeacher
        }), this.getLiveDetail();
    },
    goBack: function() {
        1 == this.data.isTeacher ? wx.reLaunch({
            url: "/pages/my-live-list/my-live-list"
        }) : wx.reLaunch({
            url: "/pages/live-list/live-list"
        });
    },
    formatSeconds: function(e) {
        var t = parseInt(e), a = Math.floor(t / 3600) < 10 ? "0" + Math.floor(t / 3600) : Math.floor(t / 3600), o = Math.floor(t / 60 % 60) < 10 ? "0" + Math.floor(t / 60 % 60) : Math.floor(t / 60 % 60), n = Math.floor(t % 60) < 10 ? "0" + Math.floor(t % 60) : Math.floor(t % 60), i = "";
        return i += "".concat(a, ":"), i += "".concat(o, ":"), i += "".concat(n);
    },
    getLiveDetail: function() {
        var e = this;
        a.get(t.globalData.baseUrl + "/miniapp/live/" + this.data.id, {}, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(t) {
            if (console.log(t), 0 == t.errcode) {
                t.duration;
                var a = t.name, o = t.view_num, n = t.msg_num, i = t.time - t.true_start_time, r = e.formatSeconds(i);
                e.setData({
                    durationText: r,
                    view_num: o,
                    msg_num: n,
                    name: a
                });
            } else wx.showToast({
                title: t.errmsg,
                icon: "none"
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
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});