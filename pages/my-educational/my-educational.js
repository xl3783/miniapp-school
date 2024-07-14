var e = require("../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../@babel/runtime/helpers/regeneratorRuntime"), a = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../utils/http")), i = require("../../utils/util"), r = i.getDkTime, o = i.formatTime, s = getApp(), l = new n.default.Http();

Page({
    onHide: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onUnload: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    data: {
        timeStr: "",
        classifyType: 0,
        localInfo: {
            formatted_addresses: "",
            address: ""
        }
    },
    onLoad: function(e) {
        e.type ? (1 == Number.parseInt(e.type + "") ? wx.setNavigationBarTitle({
            title: "签到"
        }) : wx.setNavigationBarTitle({
            title: "打卡"
        }), this.setData({
            classifyType: Number.parseInt(e.type)
        })) : wx.setNavigationBarTitle({
            title: "打卡"
        }), this.loadTime(), this.initLocation();
    },
    initLocation: function() {
        var e, n = this;
        wx.showLoading({
            title: "定位中..."
        }), wx.getLocation({
            type: "gcj02",
            isHighAccuracy: !0,
            altitude: !0,
            success: (e = a(t().mark(function e(a) {
                var i, r, o;
                return t().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = a.latitude, r = a.longitude, console.log(i, r), e.next = 4, l.post(s.globalData.baseUrl + "/miniapp/region", {
                            latitude: i,
                            longitude: r
                        }, {
                            Authorization: s.globalData.token ? s.globalData.token : ""
                        });

                      case 4:
                        if (0 == (o = e.sent).errcode) {
                            e.next = 8;
                            break;
                        }
                        return wx.showToast({
                            title: o.errmsg,
                            icon: "none"
                        }), e.abrupt("return");

                      case 8:
                        n.setData({
                            localInfo: o
                        }), wx.hideLoading();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
            })), function(t) {
                return e.apply(this, arguments);
            }),
            fail: function() {
                wx.hideLoading(), wx.showModal({
                    title: "请授权定位",
                    success: function(e) {
                        e.confirm && wx.openSetting({
                            success: function() {
                                n.initLocation();
                            }
                        });
                    }
                });
            }
        });
    },
    loadTime: function() {
        var e = this;
        this.setData({
            timeStr: r()
        }), setInterval(function() {
            e.setData({
                timeStr: r()
            });
        }, 1e3);
    },
    upImg: function(e) {
        return new Promise(function(t, a) {
            wx.uploadFile({
                filePath: e,
                name: "image",
                header: {
                    Version: s.globalData.version,
                    schoolid: s.globalData.schoolid,
                    "App-Type": s.globalData.appType,
                    Authorization: s.globalData.token ? s.globalData.token : ""
                },
                url: s.globalData.baseUrl + "/miniapp/upload",
                success: function(e) {
                    var a = JSON.parse(e.data);
                    t(a);
                }
            });
        });
    },
    commit: function(e) {
        var n = this;
        return a(t().mark(function a() {
            var i, r, u;
            return t().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return i = {
                        address: n.data.localInfo.address,
                        place: n.data.localInfo.formatted_addresses,
                        sign_image_url: e,
                        sign_time: o(new Date(), "-")
                    }, r = 1 == n.data.classifyType ? "/channelsign" : "/usersign", t.next = 4, l.post(s.globalData.baseUrl + "/miniapp/" + r, i, {
                        Authorization: s.globalData.token ? s.globalData.token : ""
                    });

                  case 4:
                    if (0 == (u = t.sent).errcode) {
                        t.next = 8;
                        break;
                    }
                    return wx.showToast({
                        title: u.errmsg,
                        icon: "none"
                    }), t.abrupt("return", null);

                  case 8:
                    return t.abrupt("return", u);

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    palyImg: function() {
        var e, n = this;
        this.data.localInfo.address ? wx.chooseImage({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "camera" ],
            success: (e = a(t().mark(function e(a) {
                var i, r, o;
                return t().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = a.tempFilePaths[0], wx.showLoading({
                            title: "打卡中"
                        }), e.next = 4, n.upImg(i);

                      case 4:
                        if (0 == (r = e.sent).errcode) {
                            e.next = 8;
                            break;
                        }
                        return wx.showToast({
                            title: r.errmsg,
                            icon: "none"
                        }), e.abrupt("return");

                      case 8:
                        return e.next = 10, n.commit(r.url);

                      case 10:
                        (o = e.sent).sign_image_url_full = r.url_full, wx.hideLoading(), wx.navigateTo({
                            url: "/pages/my-educational-intro/my-educational-intro?id=" + o.id + "&type=1&classifyType=" + n.data.classifyType
                        });

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
            })), function(t) {
                return e.apply(this, arguments);
            })
        }) : wx.openSetting({
            success: function() {
                n.initLocation();
            }
        });
    },
    toList: function() {
        wx.navigateTo({
            url: "/pages/my-educational-list/my-educational-list"
        });
    }
});