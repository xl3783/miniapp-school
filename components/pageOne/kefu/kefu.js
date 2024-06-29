var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../../@babel/runtime/helpers/objectSpread2"), e = t(require("../../../utils/http")), o = getApp(), i = new e.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 1e3
        }
    },
    data: {
        account_id: Number(o.globalData.schoolid),
        userId: 0,
        list: [],
        activeIndex: -1,
        province: "",
        provinceid: "340000",
        name: "",
        mobile: "",
        graduate_school: "",
        showMask: !1,
        school: {}
    },
    lifetimes: {
        attached: function() {
            this.getSchool(), o.globalData.openid ? this.isReg() : this.login();
        }
    },
    methods: {
        handleContact: function(t) {
            console.log(t.currentTarget.dataset);
        },
        bindPickerChange: function(t) {
            var a = t.detail.value;
            this.setData({
                province: this.data.allProvinceList[a].province
            });
        },
        handleInput: function(t) {
            var a = t.currentTarget.dataset.type, e = t.detail.value;
            switch (a) {
              case "name":
                this.setData({
                    name: e
                });
                break;

              case "mobile":
                this.setData({
                    mobile: e
                });
                break;

              case "school":
                this.setData({
                    graduate_school: e
                });
            }
        },
        isReg: function() {
            var t = this;
            wx.request({
                url: "https://userkf-api.schoolpi.net/saas/isReg",
                data: {
                    open_id: o.globalData.openid
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    200 == a.data.code ? a.data.data.isReg ? (t.setData({
                        showMask: !1,
                        userId: a.data.data.userId
                    }), t.getList()) : (t.getAllProvince(), t.setData({
                        showMask: !0
                    })) : (t.getAllProvince(), wx.showToast({
                        title: a.data.msg,
                        icon: "none"
                    }), t.setData({
                        showMask: !0
                    }));
                }
            });
        },
        submit: function() {
            var t = this, a = t.data, e = a.name, i = a.mobile, n = a.province, s = a.graduate_school;
            wx.request({
                url: "https://userkf-api.schoolpi.net/saas/reg",
                method: "POST",
                data: {
                    account_id: Number(o.globalData.schoolid),
                    name: e,
                    mobile: i,
                    wechat_open_id: o.globalData.openid,
                    province: n,
                    graduate_school: s
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    200 == a.data.code ? (t.setData({
                        showMask: !1,
                        userId: a.data.data.userInfo.id
                    }), t.getList()) : wx.showToast({
                        title: a.data.msg,
                        icon: "none"
                    });
                }
            });
        },
        openItem: function(t) {
            var a = t.currentTarget.dataset.id;
            this.data.activeIndex == a ? this.setData({
                activeIndex: -1
            }) : this.setData({
                activeIndex: a
            });
        },
        getSchool: function() {
            var t = this;
            wx.request({
                url: "https://userkf-api.schoolpi.net/saas/account/info",
                data: {
                    account_id: Number(o.globalData.schoolid)
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    200 == a.data.code ? t.setData({
                        school: a.data.data
                    }) : wx.showToast({
                        title: a.data.msg,
                        icon: "none"
                    });
                }
            });
        },
        getList: function() {
            var t = this;
            wx.request({
                url: "https://userkf-api.schoolpi.net/saas/consult/list",
                data: {
                    account_id: Number(o.globalData.schoolid),
                    user_id: t.data.userId
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    if (200 == e.data.code) {
                        var o = e.data.data.list;
                        console.log(o);
                        var i = [];
                        o.forEach(function(t) {
                            var e = a({}, t), o = t.member;
                            o && 0 !== o.length && o.forEach(function(t) {
                                var a = t.position.split("/");
                                t.mArr = a;
                            }), i.push(e);
                        }), t.setData({
                            list: i
                        });
                    } else wx.showToast({
                        title: e.data.msg,
                        icon: "none"
                    });
                }
            });
        },
        login: function() {
            var t = this;
            wx.login({
                success: function(a) {
                    var e = a.code;
                    i.post(o.globalData.baseUrl + "/miniapp/wxlogin", {
                        appId: o.globalData.appId,
                        code: e
                    }).then(function(a) {
                        o.globalData.openid = a.openid, t.isReg();
                    });
                }
            });
        },
        getAllProvince: function() {
            var t = this;
            i.get(o.globalData.baseUrl + "/miniapp/enroll_plan/get_province").then(function(a) {
                t.setData({
                    allProvinceList: a.all_province
                }), t.reLocation();
            });
        },
        getProvinceByLocation: function(t) {
            var a = this;
            this.data.isFullScreen && wx.showLoading({
                title: "正在定位"
            }), i.post(o.globalData.baseUrl + "/miniapp/region", t).then(function(t) {
                a.data.isFullScreen && wx.hideLoading(), a.setData({
                    province: t.province,
                    provinceid: t.provinceid
                });
            }).catch(function(t) {
                wx.hideLoading();
            });
        },
        reLocation: function() {
            var t = this;
            wx.authorize({
                scope: "scope.userLocation",
                success: function() {
                    wx.getLocation({
                        success: function(a) {
                            t.getProvinceByLocation({
                                latitude: a.latitude,
                                longitude: a.longitude
                            });
                        }
                    });
                },
                fail: function() {
                    wx.showModal({
                        title: "是否授权地理位置信息",
                        content: "需要获取您的地理位置信息，请确认授权",
                        success: function(a) {
                            a.confirm && wx.openSetting({
                                success: function(a) {
                                    a.authSetting["scope.userLocation"] ? wx.getLocation({
                                        success: function(a) {
                                            t.getProvinceByLocation({
                                                latitude: a.latitude,
                                                longitude: a.longitude
                                            });
                                        },
                                        fail: function() {}
                                    }) : wx.showToast({
                                        title: "授权失败",
                                        icon: "none",
                                        duration: 2e3
                                    });
                                },
                                fail: function(t) {
                                    console.log("授权报错", t);
                                },
                                complete: function(t) {
                                    console.log("完成", t);
                                }
                            });
                        }
                    });
                }
            });
        }
    }
});