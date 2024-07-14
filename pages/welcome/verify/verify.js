var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../@babel/runtime/helpers/objectSpread2"), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = getApp().globalData, n = r.welcomeUrl, a = r.schoolid;

Page({
    onHide: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    onUnload: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    data: {
        msg: "",
        type: 1,
        bizToken: "",
        pageType: "",
        isFlv: !0
    },
    onLoad: function(r) {
        var n = this, a = r.type, s = r.bizToken, i = r.res, c = Number.parseInt(a), u = wx.getStorageSync("welcome-userInfo");
        wx.showLoading({
            title: "加载中..."
        }), setTimeout(o(e().mark(function o() {
            var r;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n.setData({
                        userInfo: u,
                        pageType: c
                    }), 0 != u.verify_status && !i) {
                        e.next = 6;
                        break;
                    }
                    return 1 === c && (console.log("人像活动核验"), n.getVerifyInfo(!0)), 2 === c && (console.log("人像活动核验 + 自传照片"), 
                    n.setData({
                        bizToken: s,
                        isFlv: !0
                    }), n.verify()), 3 === c && (console.log("录取照片 + 自传照片"), r = JSON.parse(i), n.setData(t(t({}, r), {}, {
                        isFlv: !0
                    })), wx.hideLoading()), e.abrupt("return");

                  case 6:
                    1 == u.verify_status && (n.setData({
                        type: 2,
                        msg: u.reason
                    }), wx.hideLoading()), 2 == u.verify_status && (3 != u.verifyType ? (1 === c && (console.log("重新人像活动核验"), 
                    n.getVerifyInfo(!0)), 2 === c && (console.log("重新人像活动核验 + 自传照片"), n.setData({
                        bizToken: s,
                        isFlv: !0
                    }), n.verify())) : (wx.hideLoading(), n.setData({
                        type: 3,
                        msg: u.reason
                    })));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, o);
        })), 1e3);
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), 1 == this.data.pageType && 1 == this.data.type && (console.log("返回 ---------------"), 
        wx.navigateBack());
    },
    outLogin: function() {
        wx.setStorageSync("welcome-userInfo", ""), wx.navigateBack({
            delta: 2
        });
    },
    getVerifyInfo: function() {
        var e = this, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], o = arguments.length > 1 ? arguments[1] : void 0;
        console.log("getVerifyInfo");
        var r = {
            returnUrl: "what ?"
        };
        wx.request({
            url: n.concat("/face"),
            method: "POST",
            header: {
                "School-Id": a,
                "content-type": "application/json",
                token: this.data.userInfo.access_token
            },
            data: r,
            success: function(r) {
                if (200 === r.statusCode) {
                    var n = r.data, a = n.errcode, s = n.data, i = n.errmsg;
                    console.log("getVerifyInfo-errcode", a), console.log("getVerifyInfo-errmsg", i), 
                    console.log("getVerifyInfo-data", s), 0 === a ? (e.setData({
                        bizToken: s.bizToken
                    }), t ? 1 == e.data.pageType ? e.verify() : e.verifyServe() : o(s.bizToken)) : (wx.showToast({
                        title: i,
                        icon: "none",
                        duration: 2e3
                    }), setTimeout(function() {
                        wx.navigateBack();
                    }, 2500));
                } else wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        });
    },
    verifyServe: function(e) {
        var t = this;
        console.log("verifyServe"), wx.request({
            url: n.concat("/face"),
            method: "GET",
            header: {
                "School-Id": a,
                token: this.data.userInfo.access_token
            },
            data: {
                bizToken: e
            },
            success: function(e) {
                if (200 === e.statusCode) {
                    console.log("verifyServe-success");
                    var o = e.data, r = o.errcode, n = o.errmsg;
                    0 === r ? t.setData({
                        msg: n,
                        type: 2
                    }) : t.setData({
                        msg: n,
                        type: 3
                    });
                } else console.log("verifyServe-errcode"), wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        });
    },
    verify: function() {
        var t = this;
        return o(e().mark(function r() {
            var n;
            return e().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (console.log("verify-进入"), 3 != t.data.userInfo.verifyType && (2 != t.data.userInfo.verifyType || t.data.isFlv)) {
                        r.next = 4;
                        break;
                    }
                    return wx.redirectTo({
                        url: "../autobiography/autobiography"
                    }), r.abrupt("return");

                  case 4:
                    if (t.setData({
                        isFlv: !1
                    }), n = t.data.bizToken) {
                        r.next = 9;
                        break;
                    }
                    return wx.showToast({
                        title: "bizToken is null",
                        icon: "none"
                    }), r.abrupt("return");

                  case 9:
                    console.log("verify-startVerify"), wx.startVerify({
                        data: {
                            token: n
                        },
                        success: function() {
                            var r = o(e().mark(function o(r) {
                                var n;
                                return e().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return n = r.BizToken, console.log("verify-success-showLoading-loading"), t.setData({
                                            type: 0
                                        }), e.next = 5, setTimeout(function() {
                                            t.verifyServe(n);
                                        }, 500);

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, o);
                            }));
                            return function(e) {
                                return r.apply(this, arguments);
                            };
                        }(),
                        fail: function() {
                            var r = o(e().mark(function o(r) {
                                var n;
                                return e().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return n = r.BizToken, console.log("verify-fail-showLoading-loading"), t.setData({
                                            type: 0
                                        }), e.next = 5, setTimeout(function() {
                                            t.verifyServe(n);
                                        }, 500);

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, o);
                            }));
                            return function(e) {
                                return r.apply(this, arguments);
                            };
                        }()
                    });

                  case 11:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    }
});