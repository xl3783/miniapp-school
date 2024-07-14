var t = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../@babel/runtime/helpers/objectSpread2"), e = t(require("../../utils/http")), o = getApp(), n = new e.default.Http();

Page({
    data: {
        account_id: Number(o.globalData.schoolid),
        userId: 0,
        list: [],
        activeIndex: -1,
        province: "",
        city: "",
        name: "",
        mobile: "",
        graduate_school: "",
        showMask: !1,
        school: {},
        userForm: {},
        multiIndex: [ 0, 0 ],
        multiArray: [],
        objectMultiArray: [],
        allProvinceList: []
    },
    handleContact: function(t) {},
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
    onLoad: function(t) {
        this.getSchool(), o.globalData.openid ? this.isReg() : this.login();
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
        var t = this, a = t.data, e = a.name, n = a.mobile, i = a.province, s = a.city, c = a.graduate_school, l = a.userForm;
        l.name.display && l.name.required && !e ? wx.showToast({
            title: "请填写姓名",
            icon: "none"
        }) : l.graduateSchool.display && l.graduateSchool.required && !c ? wx.showToast({
            title: "请填写毕业学校",
            icon: "none"
        }) : l.phone.display && l.phone.required && !n ? wx.showToast({
            title: "请填写手机号",
            icon: "none"
        }) : !n || /^(1[0-9][0-9])\d{8}$/.test(n) ? l.address.display && l.address.required && !i ? wx.showToast({
            title: "请选择地址",
            icon: "none"
        }) : wx.request({
            url: "https://userkf-api.schoolpi.net/saas/reg",
            method: "POST",
            data: {
                account_id: Number(o.globalData.schoolid),
                name: e,
                mobile: n,
                wechat_open_id: o.globalData.openid,
                province: i,
                city: s,
                graduate_school: c
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
        }) : wx.showToast({
            title: "请填写正确的手机号",
            icon: "none"
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
                    school: a.data.data,
                    userForm: a.data.data.userForm
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
                    var n = [];
                    o.forEach(function(t) {
                        var e = a({}, t), o = t.member;
                        o && 0 !== o.length && o.forEach(function(t) {
                            var a = t.position.split("/");
                            t.mArr = a;
                        }), n.push(e);
                    }), t.setData({
                        list: n
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
                n.post(o.globalData.baseUrl + "/miniapp/wxlogin", {
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
        wx.request({
            url: "https://userkf-api.schoolpi.net/saas/area",
            data: {
                account_id: Number(o.globalData.schoolid)
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                var e = a.data.data.list, o = e.map(function(t) {
                    return t.name;
                });
                t.setData({
                    allProvinceList: e,
                    multiArray: [ o, [ e[0].child[0].name ] ]
                }), t.reLocation();
            }
        });
    },
    bindMultiPickerChange: function(t) {
        this.setData({
            "multiIndex[0]": t.detail.value[0],
            "multiIndex[1]": t.detail.value[1]
        });
        var a = this.data, e = a.multiArray, o = a.multiIndex;
        this.setData({
            province: "".concat(e[0][o[0]]),
            city: "".concat(e[1][o[1]])
        });
    },
    bindMultiPickerColumnChange: function(t) {
        var a = t.detail, e = a.value, o = a.column, n = this.data.allProvinceList[e].child;
        switch (o) {
          case 0:
            var i = n.map(function(t) {
                return t.name;
            });
            this.setData({
                "multiArray[1]": i,
                "multiIndex[0]": t.detail.value,
                "multiIndex[1]": 0
            });
        }
    },
    getProvinceByLocation: function(t) {
        var a = this, e = this.data, i = (e.allProvinceList, e.multiArray);
        this.data.isFullScreen && wx.showLoading({
            title: "正在定位"
        }), n.post(o.globalData.baseUrl + "/miniapp/region", t).then(function(t) {
            a.data.isFullScreen && wx.hideLoading();
            var e = t.province, o = t.city, n = i[0].findIndex(function(t) {
                return t == e;
            });
            a.bindMultiPickerColumnChange({
                detail: {
                    column: 0,
                    value: n
                }
            });
            var s = i[1].findIndex(function(t) {
                return t == o;
            });
            a.setData({
                "multiIndex[0]": n,
                "multiIndex[1]": s,
                province: "".concat(i[0][n]),
                city: "".concat(i[1][s])
            });
        }).catch(function(t) {
            console.log("定位失败"), wx.hideLoading();
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