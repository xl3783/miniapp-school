var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/toConsumableArray"), a = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = e(require("../../../utils/http")), s = getApp(), r = new i.default.Http();

Page({
    ctx: "",
    canvas: "",
    width: 750,
    height: 1448,
    data: {
        load: !0,
        userToken: "",
        value: "",
        message: "",
        identify: "",
        electric_token: "",
        benedictionShare: 0,
        message_count: 0,
        msgShow: !1,
        name: "",
        bgUrl: "",
        popupShow: !1,
        message_status: 0,
        config: [],
        extra: {
            show_electric: 0
        },
        share: 0,
        messageList: []
    },
    onLoad: function(e) {
        var t = e.bgUrl, a = e.name, n = e.identify, i = e.extra, s = e.benedictionShare, r = e.electric_token, o = e.share;
        if ("1" == o) this.setData({
            share: +o,
            identify: n,
            name: a || "成绩查询结果"
        }); else {
            var c = i ? JSON.parse(decodeURIComponent(i)) : {};
            this.setData({
                electric_token: r || "",
                identify: n || "",
                benedictionShare: s ? +s : 0,
                bgUrl: t,
                share: 0,
                name: a || "成绩查询结果",
                extra: c
            });
        }
        this.getListByIdentify();
    },
    getListByIdentify: function() {
        var e = this, t = this.data.identify;
        wx.showLoading({
            title: "加载中"
        }), r.get(s.globalData.baseUrl + "/miniapp/getListByIdentify", {
            identify: t,
            is_desensitization: 1 === this.data.share ? 1 : 0
        }, {
            Authorization: s.globalData.token
        }).then(function() {
            var t = n(a().mark(function t(n) {
                return a().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (0 != n.errcode) {
                            t.next = 5;
                            break;
                        }
                        return e.setData({
                            bgUrl: n.style_url,
                            benedictionShare: n.benediction_share,
                            message_status: n.message_status,
                            config: n.config || []
                        }), t.next = 4, e.showView();

                      case 4:
                        setTimeout(function() {
                            wx.hideLoading(), e.setData({
                                load: !1
                            });
                        }, 300);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }());
    },
    wrapText: function(e, t, a, n, i, s) {
        if ("string" == typeof t && "number" == typeof a && "number" == typeof n) {
            var r = e.canvas;
            void 0 === i && (i = r && r.width || 300), void 0 === s && (s = r && parseInt(window.getComputedStyle(r).lineHeight) || parseInt(window.getComputedStyle(document.body).lineHeight));
            for (var o = t.split(""), c = "", u = 0; u < o.length; u++) {
                var l = c + o[u];
                e.measureText(l).width > i && u > 0 ? (e.fillText(c, a, n), c = o[u], n += s) : c = l;
            }
            e.fillText(c, a, n);
        }
    },
    showView: function() {
        var e = this;
        return n(a().mark(function t() {
            var i;
            return a().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return i = new Promise(function(t) {
                        wx.createSelectorQuery().select("#design").fields({
                            node: !0,
                            size: !0
                        }).exec(function() {
                            var i = n(a().mark(function n(i) {
                                var s, r, o;
                                return a().wrap(function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                      case 0:
                                        return s = i[0].node, r = s.getContext("2d"), 2, s.width = 2 * e.width, s.height = 2 * e.height, 
                                        r.scale(2, 2), e.ctx = r, e.canvas = s, a.next = 10, e.createImg(e.data.bgUrl);

                                      case 10:
                                        o = a.sent, e.ctx.drawImage(o, 0, 0, e.width, e.height), (e.data.config || []).forEach(function(t) {
                                            var a = t.data, n = t.value;
                                            e.ctx.fillStyle = a.fillStyle, e.ctx.textAlign = a.textAlign, e.ctx.textBaseline = a.textBaseline, 
                                            e.ctx.font = a.font, e.wrapText(e.ctx, n, a.x, a.y, a.width || 300, a.lineHeight || 32);
                                        }), t();

                                      case 15:
                                      case "end":
                                        return a.stop();
                                    }
                                }, n);
                            }));
                            return function(e) {
                                return i.apply(this, arguments);
                            };
                        }());
                    }), t.next = 3, i;

                  case 3:
                    return t.abrupt("return", t.sent);

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    createImg: function(e) {
        var t = this;
        return new Promise(function(a) {
            var n = t.canvas.createImage();
            n.src = e, n.onload = function() {
                a(n);
            };
        });
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), this.getMessageCount();
    },
    msgClose: function() {
        this.setData({
            msgShow: !1
        });
    },
    acceptanceLetter: function() {
        var e = this.data, t = e.extra, a = e.electric_token, n = t.electric_url + "?token=" + a + "&apptype=" + s.globalData.appType + "&version=" + s.globalData.version + "&schoolid=" + s.globalData.schoolid;
        wx.navigateTo({
            url: "/pages/web-view/web-view?url=" + encodeURIComponent(n)
        });
    },
    openMsg: function() {
        this.setData({
            msgShow: !0
        }), this.getMessage();
    },
    getMessage: function() {
        var e = this, a = this.data.identify;
        r.get(s.globalData.baseUrl + "/miniapp/listMessage", {
            identify: a
        }).then(function(a) {
            0 == a.errcode && e.setData({
                messageList: t(a.data)
            });
        });
    },
    getMessageCount: function() {
        var e = this, t = this.data.identify;
        r.get(s.globalData.baseUrl + "/miniapp/listMessageCount", {
            identify: t
        }).then(function(t) {
            0 == t.errcode && e.setData({
                message_count: t.data.message_count
            }), wx.stopPullDownRefresh();
        });
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    toSure: function() {
        var e = this;
        return n(a().mark(function t() {
            return a().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.toblessing();

                  case 2:
                    e.setData({
                        popupShow: !1
                    });

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    getValue: function(e) {
        this.setData({
            message: e.detail.value
        });
    },
    toCancel: function() {
        this.setData({
            popupShow: !1,
            value: ""
        });
    },
    openPopup: function(e) {
        var t = this.data.message_status;
        this.setData({
            userToken: s.globalData.token
        }), s.globalData.token ? 0 == t && this.setData({
            popupShow: !0
        }) : wx.navigateTo({
            url: "/packageA/pages/avatar-nickname/avatar-nickname"
        });
    },
    toblessing: function() {
        var e = this, t = this.data, a = t.message, n = t.identify, i = t.userToken;
        return wx.showLoading({
            title: "祝福送出中,请稍等"
        }), r.post(s.globalData.baseUrl + "/miniapp/listMessage", {
            identify: n,
            message: a
        }, {
            Authorization: i
        }).then(function(t) {
            0 == t.errcode ? (wx.showToast({
                title: "祝福已送达",
                icon: "none"
            }), e.setData({
                message_status: 1
            })) : wx.showToast({
                title: t.errmsg,
                icon: "none"
            });
        });
    },
    onShareTimeline: function() {
        var e = this.data, t = e.identify, a = e.name;
        return {
            title: a,
            query: "identify=".concat(t, "&name=").concat(a, "&share=1")
        };
    },
    onShareAppMessage: function(e) {
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
        var t = this.data, a = t.identify, n = t.name;
        return {
            title: n,
            path: "/pages/v2/admission-query-suc/admission-query-suc?identify=".concat(a, "&name=").concat(n, "&share=1")
        };
    }
});