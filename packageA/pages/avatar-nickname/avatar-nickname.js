var a = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/objectSpread2"), o = a(require("../../../utils/http")), t = getApp(), n = new o.default.Http();

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
        avatarUrl: "",
        nickName: "",
        phone: ""
    },
    onChooseAvatar: function(a) {
        var e = this, o = a.detail.avatarUrl;
        wx.uploadFile({
            filePath: o,
            name: "image",
            timeout: 5e3,
            header: {
                Version: t.globalData.version,
                schoolid: t.globalData.schoolid,
                "App-Type": t.globalData.appType,
                token: t.globalData.token
            },
            url: t.globalData.baseUrl + "/miniapp/upload",
            success: function(a) {
                var o = JSON.parse(a.data);
                console.log(o), e.setData({
                    avatarUrl: o.url_full
                });
            }
        });
    },
    nicknameInput: function(a) {
        console.log(a.detail), console.log(this.data.nickName), this.setData({
            nickName: a.detail.value
        });
    },
    phoneInput: function(a) {
        console.log(a.detail), console.log(this.data.nickName), this.setData({
            phone: a.detail.value
        });
    },
    getUserInfo: function() {
        var a = this;
        n.get(t.globalData.baseUrl + "/miniapp/userInfo", {}, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(o) {
            console.log(o), 0 == o.errcode ? (console.log(o.data), t.globalData.userInfo.name = o.data.name, 
            t.globalData.userInfo.avatarUrl = o.data.avatarUrl, t.globalData.userInfo.phone = o.data.phone, 
            a.setData({
                nickName: o.data.name,
                avatarUrl: o.data.avatarUrl,
                phone: o.data.phone
            }), console.log(t.globalData.userInfo), t.globalData.userInfo = e(e({}, t.globalData.userInfo), o.data), 
            console.log(t.globalData.userInfo), wx.setStorage({
                key: "newuserinfo",
                data: t.globalData.userInfo
            })) : wx.showToast({
                title: o.errmsg,
                icon: "none"
            });
        });
    },
    getPhone: function(a) {
        console.log(a);
        var e = this;
        if ("getPhoneNumber:ok" != a.detail.errMsg) return wx.showToast({
            title: "您取消了授权,获取手机号失败",
            icon: "none"
        }), !1;
        var o = a.detail.code;
        n.get(t.globalData.baseUrl + "/miniapp/userPhone", {
            code: o
        }, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(a) {
            0 == a.errcode ? e.setData({
                phone: a.phone
            }) : wx.showToast({
                title: a.errmsg,
                icon: "none"
            });
        });
    },
    preserveUserInfo: function(a) {
        var e = this, o = this.data, l = o.avatarUrl, r = o.nickName, i = o.phone;
        if (l) if (r) {
            if (!i || /^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(i)) {
                n.post(t.globalData.baseUrl + "/miniapp/userInfo", {
                    name: r,
                    avatarUrl: l,
                    phone: i
                }, {
                    Authorization: t.globalData.token ? t.globalData.token : ""
                }).then(function(a) {
                    console.log(a), 0 == a.errcode && (wx.showToast({
                        title: "保存成功",
                        icon: "none"
                    }), e.getUserInfo());
                });
                var s = setTimeout(function() {
                    clearTimeout(s), wx.navigateBack({
                        delta: 1
                    });
                }, 1500);
            } else wx.showToast({
                title: "手机号格式不正确",
                icon: "none"
            });
        } else wx.showToast({
            title: "请填写昵称",
            icon: "none"
        }); else wx.showToast({
            title: "请设置头像",
            icon: "none"
        });
    },
    onLoad: function(a) {
        this.getUserInfo();
    }
});