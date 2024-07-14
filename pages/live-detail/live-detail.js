var e, t = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../@babel/runtime/helpers/defineProperty"), i = t(require("../../utils/http")), n = (require("../../utils/util"), 
getApp()), r = new i.default.Http();

Page((a(e = {
    data: {
        tabName: "直播详情",
        is_subscribe: null,
        id: 0,
        name: "",
        cover_url: "",
        start_time: "",
        intro: "",
        status: "",
        link: "",
        intervaltime: "",
        share_url: "",
        type: 1
    },
    handleSubscribe: function() {
        if (1 !== this.data.is_subscribe) {
            var e = this;
            wx.requestSubscribeMessage({
                tmplIds: [ n.globalData.tempId ],
                success: function(t) {
                    "reject" != t[n.globalData.tempId] && r.post(n.globalData.baseUrl + "/miniapp/subscribe", {
                        id: e.data.id
                    }, {
                        Authorization: n.globalData.token ? n.globalData.token : ""
                    }).then(function(t) {
                        0 == t.errcode ? (e.setData({
                            is_subscribe: 1
                        }), wx.showToast({
                            title: "订阅成功",
                            icon: "none"
                        })) : wx.showToast({
                            title: t.errmsg,
                            icon: "none"
                        });
                    });
                },
                complete: function(e) {
                    console.log("订阅1", e);
                }
            });
        }
    },
    getRefreshToken: function() {
        var e = this;
        r.get(n.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: n.globalData.userInfo.token.refresh_token
        }).then(function(t) {
            0 == t.errcode && (n.globalData.token = t.token, e.handleSubscribe());
        });
    },
    countDown: function() {
        var e, t, a, i, n = this.data.start_time, r = new Date(n.replace(/-/g, "/")).getTime() - new Date().getTime();
        r > 0 ? (e = Math.floor(r / 1e3 / 60 / 60 / 24), t = (t = Math.floor(r / 1e3 / 60 / 60 % 24)) > 9 ? t : "0" + t, 
        a = (a = Math.floor(r / 1e3 / 60 % 60)) > 9 ? a : "0" + a, i = (i = Math.floor(r / 1e3 % 60)) > 9 ? i : "0" + i, 
        e > 0 ? this.setData({
            intervaltime: e + "天" + t + "时" + a + "分" + i + "秒"
        }) : this.setData({
            intervaltime: t + "时" + a + "分" + i + "秒"
        }), setTimeout(this.countDown, 1e3)) : this.setData({
            intervaltime: ""
        });
    },
    goLive: function() {
        var e = this.data.type;
        1 == e || 3 == e || 4 == e || 5 == e ? wx.navigateTo({
            url: "/pages/live/live?id=".concat(this.data.id, "&isplayback=false")
        }) : 2 == e && wx.navigateTo({
            url: "/pages/my-live-watch/my-live-watch?id=".concat(this.data.id)
        });
    },
    onLoad: function(e) {
        this.setData({
            id: e.id
        }), this.getDetail();
    },
    getDetail: function() {
        var e = this;
        r.get(n.globalData.baseUrl + "/miniapp/live/" + this.data.id, {}, {
            Authorization: n.globalData.token ? n.globalData.token : ""
        }).then(function(t) {
            if (0 == t.errcode) {
                var a = t.name, i = t.cover_url, n = t.start_time, r = t.intro, o = t.status, s = t.is_subscribe, l = t.share_url, u = t.type;
                e.setData({
                    name: a,
                    cover_url: i,
                    start_time: n,
                    intro: r,
                    status: o,
                    is_subscribe: s,
                    tabName: a,
                    share_url: l,
                    type: u
                }), 0 == o ? e.countDown() : 1 == o ? 2 != u ? wx.navigateTo({
                    url: "/pages/live/live?id=" + e.data.id
                }) : wx.navigateTo({
                    url: "/pages/my-live-watch/my-live-watch?id=" + e.data.id
                }) : 2 == o && (2 != u ? wx.navigateTo({
                    url: "/pages/live/live?id=" + e.data.id + "&isplayback=false"
                }) : wx.navigateTo({
                    url: "/pages/my-live-watch/my-live-watch?id=" + e.data.id + "&isplayback=false"
                }));
            } else 2001 == t.errcode && e.getRefreshToken();
        });
    }
}, "getRefreshToken", function() {
    var e = this;
    r.get(n.globalData.baseUrl + "/miniapp/refresh_token", {
        refresh_token: n.globalData.userInfo.token.refresh_token
    }).then(function(t) {
        0 == t.errcode && (n.globalData.token = t.token, e.getDetail());
    });
}), a(e, "linktap", function(e) {
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
}), a(e, "onReady", function() {}), a(e, "onShow", function() {
    getApp().reporting.page("show", getCurrentPages());
}), a(e, "onHide", function() {
    getApp().reporting.page("hide");
}), a(e, "onUnload", function() {
    getApp().reporting.page("hide");
}), a(e, "onPullDownRefresh", function() {}), a(e, "onReachBottom", function() {}), 
a(e, "onShareAppMessage", function() {
    return getApp().reporting.share({
        type: 1,
        value: ""
    }, getCurrentPages()), {
        title: this.data.name,
        imageUrl: this.data.cover_url,
        path: "/pages/live-detail/live-detail?name=" + this.data.name + "&id=" + this.data.id
    };
}), a(e, "onShareTimeline", function() {
    return getApp().reporting.share({
        type: 2,
        value: ""
    }, getCurrentPages()), {
        title: this.data.name,
        imageUrl: this.data.cover_url,
        query: "name=" + this.data.name + "&id=" + this.data.id
    };
}), e));