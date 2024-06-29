var e, t = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../@babel/runtime/helpers/regeneratorRuntime"), o = require("../../@babel/runtime/helpers/asyncToGenerator"), n = t(require("../../utils/http")), r = require("../../utils/util"), s = getApp(), p = new n.default.Http();

Component({
    properties: {},
    data: {
        open_ad: {},
        popup_ad: {},
        showPopup: !1,
        showOpen: !1,
        count: 5,
        schoollogo: "",
        schoolname: "",
        color: "",
        is_countdown: 0
    },
    lifetimes: {
        attached: function() {
            var e = this;
            s.globalData.home.then(function(t) {
                e.setData({
                    schoollogo: s.globalData.schoollogo,
                    schoolname: s.globalData.schoolname
                }), e.getConfigInfo();
            });
        }
    },
    methods: {
        skip: function() {
            clearInterval(e), this.setData({
                showOpen: !1
            });
        },
        closePopup: function() {
            this.setData({
                showPopup: !1
            });
        },
        initPhone: function(e) {
            var t = this;
            if ("getPhoneNumber:ok" == e.detail.errMsg) {
                var a = e.detail.code;
                p.get(s.globalData.baseUrl + "/miniapp/userPhone", {
                    code: a
                }, {
                    Authorization: s.globalData.token ? s.globalData.token : ""
                }).then(function(e) {
                    if (0 == e.errcode) {
                        s.globalData.userInfo.phone = e.phone, wx.setStorageSync("phone", e.phone);
                        var a = {
                            currentTarget: {
                                dataset: {
                                    item: t.data.open_ad
                                }
                            }
                        };
                        (0, r.jumpToDetail)(a), setTimeout(function() {
                            t.setData({
                                showOpen: !1,
                                showPopup: !1
                            });
                        }, 1e3);
                    } else wx.showToast({
                        title: e.errmsg,
                        icon: "none"
                    });
                });
            } else wx.showToast({
                title: "请允许绑定手机号码",
                icon: "none"
            });
        },
        goDetail: function(t) {
            var n = this;
            return o(a().mark(function o() {
                var s, p, i;
                return a().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (s = t.currentTarget.dataset.type, p = t.currentTarget.dataset.item, 1 !== n.data.is_countdown) {
                            a.next = 10;
                            break;
                        }
                        if (i = wx.getStorageSync("globalCondig"), wx.getStorageSync("newuserinfo").phone || 1 != i.is_get_phone) {
                            a.next = 7;
                            break;
                        }
                        return a.abrupt("return");

                      case 7:
                        if (5 != p.jump_type || "/" != p.jump_url) {
                            a.next = 10;
                            break;
                        }
                        return n.setData({
                            showOpen: !1
                        }), a.abrupt("return");

                      case 10:
                        clearInterval(e), (0, r.jumpToDetail)(t), setTimeout(function() {
                            "open" == s ? n.setData({
                                showOpen: !1
                            }) : "popup" == s && n.setData({
                                showPopup: !1
                            });
                        }, 1e3);

                      case 13:
                      case "end":
                        return a.stop();
                    }
                }, o);
            }))();
        },
        getConfigInfo: function() {
            var t = this, a = this;
            p.get(s.globalData.baseUrl + "/miniapp/ad").then(function(o) {
                t.setData({
                    popup_ad: o.popup_ad,
                    open_ad: o.open_ad
                });
                var n = wx.getStorageSync("globalCondig"), r = wx.getStorageSync("newuserinfo");
                if (1 == o.open_ad.is_open) {
                    var s = o.open_ad, p = s.start_time, i = s.end_time, u = o.open_ad.is_countdown, l = new Date(p.replace(/-/g, "/")).getTime(), c = new Date(i.replace(/-/g, "/")).getTime(), h = new Date().getTime();
                    h < c && h > l && (1 == u && 1 == o.open_ad.is_open ? t.setData({
                        showOpen: !0,
                        is_countdown: u,
                        is_get_phone: r.phone || 1 != n.is_get_phone ? 0 : 1
                    }) : h < c && h > l ? (t.setData({
                        showOpen: !0
                    }), e = setInterval(function() {
                        var t = a.data.count, o = t - 1;
                        t > 0 ? a.setData({
                            count: o
                        }) : (clearInterval(e), a.setData({
                            count: 0,
                            showOpen: !1
                        }));
                    }, 1e3)) : t.setData({
                        showOpen: !1
                    }));
                } else t.setData({
                    showOpen: !1
                });
                if (1 == o.popup_ad.is_open) {
                    var g = o.popup_ad, w = g.start_time, d = g.end_time, D = new Date(w.replace(/-/g, "/")).getTime(), m = new Date(d.replace(/-/g, "/")).getTime(), f = new Date().getTime();
                    f < m && f > D ? t.setData({
                        showPopup: !0
                    }) : t.setData({
                        showPopup: !1
                    });
                } else t.setData({
                    showPopup: !1
                });
            });
        }
    }
});