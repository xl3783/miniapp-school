var a = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/toConsumableArray"), e = require("../../../@babel/runtime/helpers/objectSpread2"), o = a(require("../../../utils/http")), n = getApp(), l = new o.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        bgColor: {
            type: String,
            value: "#fff"
        },
        nickName: {
            type: String,
            value: ""
        },
        avatarUrl: {
            type: String,
            value: ""
        }
    },
    data: {
        tabName: "",
        nickName: "",
        avatarUrl: "",
        v: "1.0.0",
        schoolname: n.globalData.schoolname,
        platform: n.globalData.platform,
        logo: n.globalData.schoollogo,
        alumniStatus: 0,
        alumniData: {},
        verifyStatus: !1,
        list: [],
        shareList: [],
        isTeacher: 0,
        dotShow: !1,
        alumniBg: "",
        paiType: !1
    },
    lifetimes: {
        attached: function() {
            var a = this, t = 1 === wx.getStorageSync("globalCondig").is_show_support;
            this.setData({
                paiType: t,
                schoolname: n.globalData.schoolname,
                logo: n.globalData.schoollogo,
                v: n.globalData.v
            }), wx.getStorage({
                key: "newuserinfo",
                success: function(t) {
                    n.globalData.userInfo = t.data, n.globalData.token = t.data.token.access_token, 
                    a.setData({
                        token: t.data.token.access_token,
                        nickName: t.data.name,
                        avatarUrl: t.data.avatarUrl
                    });
                },
                fail: function() {
                    a.setData({
                        token: ""
                    });
                }
            });
            var e = wx.getFileSystemManager().readFileSync("/assets/image/verify.png", "base64");
            this.setData({
                alumniBg: "data:image/jpg;base64," + e
            }), this.getVerifyStatus(), this.getPersonalCenter(), this.getInformation(), console.log("个人中心111");
        }
    },
    pageLifetimes: {
        show: function() {
            console.log("个人中心222"), this.getUserInfo(), this.getInformation();
        }
    },
    methods: {
        getUserInfo: function() {
            var a = this;
            l.get(n.globalData.baseUrl + "/miniapp/userInfo", {}, {
                Authorization: n.globalData.token ? n.globalData.token : ""
            }).then(function(t) {
                0 == t.errcode ? (console.log(t), n.globalData.userInfo = e(e({}, n.globalData.userInfo), t.data), 
                console.log(n.globalData.userInfo), a.setData({
                    nickName: t.data.name,
                    avatarUrl: t.data.avatarUrl,
                    phone: t.data.phone
                }), wx.setStorage({
                    key: "newuserinfo",
                    data: n.globalData.userInfo
                })) : wx.showToast({
                    title: t.errmsg,
                    icon: "none"
                });
            });
        },
        handleLogin: function(a) {
            var t = this.data;
            t.nickName, t.avatarUrl;
            wx.navigateTo({
                url: "/packageA/pages/avatar-nickname/avatar-nickname"
            });
        },
        goDetail: function(a) {
            var t = a.currentTarget.dataset.url;
            wx.navigateTo({
                url: t
            });
        },
        getPersonalCenter: function() {
            var a = this;
            console.log(n.globalData.schoollogo), l.get(n.globalData.baseUrl + "/miniapp/personalCenter").then(function(o) {
                if (0 === o.errcode) {
                    var n = o.data, l = n.list, i = n.share, r = n.alumni;
                    a.setData({
                        list: t(l),
                        shareList: t(i),
                        alumniStatus: o.alumni,
                        alumniData: e({}, r[0])
                    });
                }
            });
        },
        getInformation: function() {
            var a = this;
            l.get(n.globalData.baseUrl + "/miniapp/stationMessage/unreadNum").then(function(t) {
                0 === t.errcode && (t.data.unread_num > 0 ? a.setData({
                    dotShow: !0
                }) : a.setData({
                    dotShow: !1
                }));
            });
        },
        getVerifyStatus: function() {
            var a = this;
            l.get(n.globalData.baseUrl2 + "/miniapp/v1/user/verify-status", {}, {
                Authorization: n.globalData.token ? n.globalData.token : ""
            }).then(function(t) {
                0 === t.errcode && a.setData({
                    verifyStatus: t.data.verify_status
                });
            });
        },
        goVerify: function(a) {
            a.currentTarget.dataset.status || wx.navigateTo({
                url: "/xpAlumni/xpalumni-certification/xpalumni-certification"
            });
        },
        goInfoDetails: function() {
            wx.requestSubscribeMessage({
                tmplIds: [ n.globalData.robotTempId ],
                complete: function() {
                    wx.navigateTo({
                        url: "/pages/information/information"
                    });
                }
            });
        },
        handleSubscribe: function(a) {
            wx.requestSubscribeMessage({
                tmplIds: [ n.globalData.robotTempId ],
                success: function(a) {
                    "reject" != a[n.globalData.robotTempId] ? console.log("订阅成功") : console.log("订阅拒绝");
                },
                complete: function(t) {
                    console.log("订阅完成", t), "infoDetails" == a && wx.navigateTo({
                        url: "/pages/information/information"
                    });
                }
            });
        }
    }
});