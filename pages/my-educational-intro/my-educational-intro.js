var e = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../@babel/runtime/helpers/asyncToGenerator"), t = e(require("../../utils/http")), n = getApp(), i = new t.default.Http();

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
        id: "",
        info: "",
        nameValue: "",
        classifyType: 0,
        show: !1,
        signer: "",
        alert_content: "",
        alert_remark_image_url: [],
        alert_remark_image_url_full: [],
        remark_image_url: [],
        remark_image_url_full: [],
        content: ""
    },
    onLoad: function(e) {
        var a = e.id, r = e.type, t = e.classifyType;
        a && (1 == Number.parseInt(t + "") ? wx.setNavigationBarTitle({
            title: "签到"
        }) : wx.setNavigationBarTitle({
            title: "打卡"
        }), this.setData({
            id: a,
            classifyType: t
        }), this.getInfo(a)), r && this.setData({
            show: !0
        });
    },
    closeAlert: function() {
        this.setData({
            show: !1,
            alert_remark_image_url: [],
            alert_remark_image_url_full: [],
            alert_content: "",
            nameValue: ""
        });
    },
    delImg: function(e) {
        var a = e.currentTarget.dataset.index, r = this.data.alert_remark_image_url, t = this.data.alert_remark_image_url_full;
        r.splice(a, 1), t.splice(a, 1), this.setData({
            alert_remark_image_url: r,
            alert_remark_image_url_full: t
        });
    },
    inputChange: function(e) {
        var a = e.detail.value;
        this.setData({
            alert_content: a
        });
    },
    inputNameChange: function(e) {
        var a = e.detail.value;
        this.setData({
            nameValue: a
        });
    },
    addImg: function() {
        var e, t = this;
        this.data.alert_remark_image_url.length >= 4 || wx.chooseImage({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "camera" ],
            success: (e = r(a().mark(function e(r) {
                var n, i, l, u;
                return a().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中"
                        }), n = r.tempFilePaths[0], e.next = 4, t.upImg(n);

                      case 4:
                        if (0 == (i = e.sent).errcode) {
                            e.next = 8;
                            break;
                        }
                        return wx.showToast({
                            title: i.errmsg,
                            icon: "none"
                        }), e.abrupt("return");

                      case 8:
                        (l = t.data.alert_remark_image_url_full).push(i.url_full), (u = t.data.alert_remark_image_url).push(i.url), 
                        wx.hideLoading(), t.setData({
                            alert_remark_image_url: u,
                            alert_remark_image_url_full: l
                        });

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
            })), function(a) {
                return e.apply(this, arguments);
            })
        });
    },
    upImg: function(e) {
        return new Promise(function(a, r) {
            wx.uploadFile({
                filePath: e,
                name: "image",
                header: {
                    Version: n.globalData.version,
                    schoolid: n.globalData.schoolid,
                    "App-Type": n.globalData.appType,
                    Authorization: n.globalData.token ? n.globalData.token : ""
                },
                url: n.globalData.baseUrl + "/miniapp/upload",
                success: function(e) {
                    var r = JSON.parse(e.data);
                    a(r);
                }
            });
        });
    },
    commit: function() {
        var e = this;
        return r(a().mark(function r() {
            var t, l, u, s, o, _;
            return a().wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (t = e.data, l = t.alert_content, u = t.alert_remark_image_url, s = t.alert_remark_image_url_full, 
                    o = t.nameValue, 1 != e.data.classifyType) {
                        a.next = 12;
                        break;
                    }
                    return a.next = 4, i.put(n.globalData.baseUrl + "/miniapp/channelsign/" + e.data.id, {
                        remark: l,
                        remark_image_url: u,
                        signer: o
                    }, {
                        Authorization: n.globalData.token ? n.globalData.token : ""
                    });

                  case 4:
                    if (0 == (_ = a.sent).errcode) {
                        a.next = 8;
                        break;
                    }
                    return wx.showToast({
                        title: _.errmsg,
                        icon: "none"
                    }), a.abrupt("return");

                  case 8:
                    e.setData({
                        show: !1,
                        signer: o,
                        remark_image_url: u,
                        remark_image_url_full: s,
                        content: l
                    }), wx.showToast({
                        title: "备注成功",
                        icon: "none"
                    }), a.next = 16;
                    break;

                  case 12:
                    return a.next = 14, i.put(n.globalData.baseUrl + "/miniapp/usersign/" + e.data.id, {
                        remark: l,
                        remark_image_url: u
                    }, {
                        Authorization: n.globalData.token ? n.globalData.token : ""
                    });

                  case 14:
                    e.setData({
                        show: !1,
                        remark_image_url: u,
                        remark_image_url_full: s,
                        content: l
                    }), wx.showToast({
                        title: "备注成功",
                        icon: "none"
                    });

                  case 16:
                  case "end":
                    return a.stop();
                }
            }, r);
        }))();
    },
    findImg: function(e) {
        var a = e.currentTarget.dataset.url;
        wx.previewImage({
            urls: [ a ]
        });
    },
    getInfo: function(e) {
        var t = this;
        return r(a().mark(function r() {
            var l, u;
            return a().wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return l = 1 == t.data.classifyType ? "/channelsign/" : "/usersign/", a.next = 3, 
                    i.get(n.globalData.baseUrl + "/miniapp" + l + e, {}, {
                        Authorization: n.globalData.token ? n.globalData.token : ""
                    });

                  case 3:
                    if (0 == (u = a.sent).errcode) {
                        a.next = 7;
                        break;
                    }
                    return wx.showToast({
                        title: u.errmsg,
                        icon: "none"
                    }), a.abrupt("return");

                  case 7:
                    t.setData({
                        info: {
                            sign_time: u.sign_time,
                            sign_image_url: u.sign_image_url_full,
                            place: u.place,
                            address: u.address
                        },
                        signer: u.signer,
                        content: u.remark,
                        remark_image_url: u.remark_image_url ? u.remark_image_url : [],
                        remark_image_url_full: u.remark_image_url_full ? u.remark_image_url_full : []
                    });

                  case 8:
                  case "end":
                    return a.stop();
                }
            }, r);
        }))();
    },
    add: function() {
        var e = this.data, a = e.remark_image_url, r = e.remark_image_url_full, t = e.content, n = e.signer;
        this.setData({
            show: !0,
            alert_content: t,
            nameValue: n,
            alert_remark_image_url: a,
            alert_remark_image_url_full: r
        });
    }
});