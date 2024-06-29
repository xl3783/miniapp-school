var e = require("../@babel/runtime/helpers/interopRequireDefault").default, a = (require("../@babel/runtime/helpers/classCallCheck"), 
require("../@babel/runtime/helpers/createClass"), require("./sprintf")), n = new (e(require("./http")).default.Http)(), o = getApp(), t = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}, l = function(e, a) {
    var n = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), o = ("?" + e.split("?")[1]).substr(1).match(n);
    return null != o ? unescape(o[2]) : null;
};

module.exports = {
    getDkTime: function() {
        var e = new Date();
        return [ e.getHours(), e.getMinutes(), e.getSeconds() ].map(t).join(":");
    },
    formatTime: function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/", n = e.getFullYear(), o = e.getMonth() + 1, l = e.getDate(), i = e.getHours(), r = e.getMinutes(), s = e.getSeconds();
        return [ n, o, l ].map(t).join(a) + " " + [ i, r, s ].map(t).join(":");
    },
    sendId: function(e, a) {
        return new Date().valueOf() + "-" + e + "-" + a;
    },
    formatSeconds: function(e) {
        var a = parseInt(e), n = Math.floor(a / 3600) < 10 ? "0" + Math.floor(a / 3600) : Math.floor(a / 3600), o = Math.floor(a / 60 % 60) < 10 ? "0" + Math.floor(a / 60 % 60) : Math.floor(a / 60 % 60), t = Math.floor(a % 60) < 10 ? "0" + Math.floor(a % 60) : Math.floor(a % 60), l = "";
        return l += "".concat(n, ":"), l += "".concat(o, ":"), l += "".concat(t);
    },
    format: function(e) {
        return e.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
    },
    getQueryString: l,
    getParamsArr: function(e) {
        if (e.indexOf("?") > -1) {
            for (var a = [], n = e.split("?")[1].split("&"), o = 0; o < n.length; o++) {
                var t = n[o].split("=")[0], l = n[o].split("=")[1];
                a.push({
                    key: t,
                    value: l
                });
            }
            return a;
        }
        return !1;
    },
    getPhoneLogin: function() {
        return new Promise(function(e, a) {
            1 != o.globalData.is_get_phone || wx.getStorageSync("phone") && o.globalData.token ? e() : (wx.navigateTo({
                url: "/packageA/pages/phone-login/phone-login"
            }), a());
        });
    },
    getUserLogin: function() {
        return new Promise(function(e, a) {
            o.globalData.token ? e() : (wx.navigateTo({
                url: "/packageA/pages/avatar-nickname/avatar-nickname"
            }), a());
        });
    },
    jumpToDetail: function(e) {
        var t = e.currentTarget.dataset.item, i = t.jump_url, r = t.name, s = t.jump_name, c = t.jump_type, p = t.base_url, u = t.is_jump;
        if (console.log(e.currentTarget.dataset.item), 10 == c) {
            var g = JSON.parse(i), f = g.videoNumberId, m = g.videoId;
            return console.log(f, m), m ? void wx.openChannelsActivity({
                finderUserName: f,
                feedId: m,
                fail: function(e) {
                    console.log(e);
                }
            }) : void wx.openChannelsUserProfile({
                finderUserName: f,
                success: function() {
                    console.log(f);
                },
                fail: function(e) {
                    console.log(e);
                }
            });
        }
        if (i.startsWith("/") && 5 === c) wx.navigateTo({
            url: i + (-1 == i.indexOf("?") ? "?" : "&") + "title=" + r
        }); else {
            var d = (null == r ? void 0 : r.length) > 0 ? r : (null == s ? void 0 : s.length) > 0 ? s : "", w = p.indexOf("https");
            if (console.log(w), 6 == c) {
                var v = {
                    fail: function(e) {
                        console.log(JSON.stringify(e));
                    }
                };
                if ("#小程序" === p.substring(0, 4)) {
                    var h = p.split("?appid=");
                    v.shortLink = h[0];
                } else {
                    var x = p.split("?appid=");
                    v.appId = x[1], v.path = x[0];
                }
                wx.navigateToMiniProgram(v);
            } else if (p) if (-1 === w) p.split("?").length > 1 ? (console.log("自带参数", p), console.log("跳转", r, s), 
            wx.navigateTo({
                url: p + "&name=" + d + "&jump_type=" + c
            })) : "/pages/scores/scores" == p ? 0 === o.globalData.enroll_type ? wx.navigateTo({
                url: "/packageA/pages/plan-score-type/plan-score-type?searchType=2&name=".concat(d)
            }) : wx.navigateTo({
                url: "/packageA/pages/plan-score-search/plan-score-search?searchType=2&enrollType=".concat(o.globalData.enroll_type, "&name=").concat(d)
            }) : "/pages/enroll-plan/enroll-plan" == p ? 0 === o.globalData.enroll_type ? wx.navigateTo({
                url: "/packageA/pages/plan-score-type/plan-score-type?searchType=1&name=".concat(d)
            }) : wx.navigateTo({
                url: "/packageA/pages/plan-score-search/plan-score-search?searchType=1&enrollType=".concat(o.globalData.enroll_type, "&name=").concat(d)
            }) : "/pages/live-list/live-list" == p ? 1 == o.globalData.live_list ? wx.navigateTo({
                url: p + "?name=" + d + "&jump_type=" + c
            }) : wx.navigateTo({
                url: "/packageA/pages/live-column/live-column?name=" + d
            }) : wx.navigateTo({
                url: p + "?name=" + d + "&jump_type=" + c
            }); else if (l(p, "xpUserId")) if (o.globalData.userInfo.id) {
                var b = a.sprintf.init(p, o.globalData.userInfo.id);
                wx.navigateTo({
                    url: "/pages/web-view/web-view?url=" + encodeURIComponent(b)
                });
            } else wx.login({
                success: function(e) {
                    var a = e.code;
                    n.post(o.globalData.baseUrl + "/miniapp/wxLogin/silent", {
                        appId: o.globalData.appId,
                        code: a
                    }).then(function(e) {
                        if (0 == e.errcode) {
                            var a = e.data, n = a.id, t = a.openid, l = a.token;
                            o.globalData.openid = t, o.globalData.token = l.access_token, o.globalData.userInfo.id = n, 
                            wx.setStorageSync("openid", t), wx.setStorageSync("token", l.access_token), wx.navigateTo({
                                url: "/packageA/pages/avatar-nickname/avatar-nickname"
                            });
                        } else wx.showToast({
                            title: e.errmsg,
                            icon: "none"
                        });
                    });
                },
                fail: function(e) {
                    console.log("初始化登陆失败");
                }
            }); else 2 == u ? (wx.showLoading({
                title: "正在打开文件"
            }), console.log(i), wx.downloadFile({
                url: i,
                timeout: 3e4,
                success: function(e) {
                    wx.hideLoading(), console.log(e);
                    var a = e.tempFilePath;
                    wx.openDocument({
                        filePath: a,
                        success: function(e) {
                            console.log("打开文档成功", e);
                        },
                        fail: function(e) {
                            console.log("打开文档失败", e);
                        }
                    });
                },
                fail: function(e) {
                    wx.hideLoading(), wx.showToast({
                        icon: "none",
                        title: e.errMsg
                    });
                },
                complete: function(e) {
                    console.log("下载", e);
                }
            })) : wx.navigateTo({
                url: "/pages/web-view/web-view?url=" + encodeURIComponent(p)
            });
        }
    },
    jumpToNewsDetail: function(e) {
        var a = e.currentTarget.dataset.item, n = a.id, o = a.is_jump, t = a.jump_url, l = a.title;
        0 === o ? wx.navigateTo({
            url: "/pages/campus-news-detail/campus-news-detail?id=" + n + "&name=" + l
        }) : 1 === o ? wx.navigateTo({
            url: "/pages/web-view/web-view?url=" + encodeURIComponent(t)
        }) : 2 == o && (wx.showLoading({
            title: "正在打开文件"
        }), console.log(t), wx.downloadFile({
            url: t,
            timeout: 3e4,
            success: function(e) {
                wx.hideLoading(), console.log(e);
                var a = e.tempFilePath;
                wx.openDocument({
                    filePath: a,
                    success: function(e) {
                        console.log("打开文档成功", e);
                    },
                    fail: function(e) {
                        console.log("打开文档失败", e);
                    }
                });
            },
            fail: function(e) {
                wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: e.errMsg
                });
            },
            complete: function(e) {
                console.log("下载", e);
            }
        }));
    }
};