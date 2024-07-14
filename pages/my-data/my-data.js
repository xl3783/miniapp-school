var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

Page({
    data: {
        avatar_url: "",
        name: "",
        phone: "",
        iv: "",
        encryptedData: ""
    },
    uploadAvatar: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var a = t.tempFilePaths[0];
                e.setData({
                    avatar_url: a
                }), e.submitData();
            }
        });
    },
    changeName: function(e) {
        var t = e.detail.value;
        this.setData({
            name: t
        }), wx.setNavigationBarTitle({
            title: t
        }), this.submitData();
    },
    changePhone: function(e) {
        var t = e.detail.value;
        /^1[34578]\d{9}$/.test(t) ? (this.setData({
            phone: t
        }), this.submitData()) : wx.showToast({
            title: "请输入正确的手机号",
            icon: "none"
        });
    },
    getPhoneNumber: function(e) {
        var o = this;
        if ("getPhoneNumber:ok" == e.detail.errMsg) {
            var n = e.detail.code;
            a.get(t.globalData.baseUrl + "/miniapp/userPhone", {
                code: n
            }, {
                Authorization: t.globalData.token ? t.globalData.token : ""
            }).then(function(e) {
                0 == e.errcode ? (o.setData({
                    phone: e.phone
                }), o.submitData()) : wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                });
            });
        } else wx.showToast({
            title: "您取消了授权,获取手机号失败",
            icon: "none"
        });
    },
    submitData: function() {
        var e = this.data, o = e.avatar_url, n = e.name, r = e.phone;
        a.post(t.globalData.baseUrl + "/miniapp/userInfo", {
            name: n,
            avatarUrl: o,
            phone: r
        }, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(e) {
            console.log(e), 0 == e.errcode && wx.showToast({
                title: "保存成功！",
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {
        var e = this;
        a.get(t.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: t.globalData.userInfo.token.refresh_token
        }).then(function(a) {
            0 == a.errcode && (t.globalData.token = a.token, e.getDetail());
        });
    },
    getDetail: function() {
        var e = this;
        console.log("获取用户信息*****1"), a.get(t.globalData.baseUrl + "/miniapp/userInfo", {}, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(t) {
            console.log("获取用户信息*****2"), console.log(t), console.log(t.errcode), 0 == t.errcode ? (e.setData({
                name: t.data.name,
                avatar_url: t.data.avatarUrl,
                phone: t.data.phone
            }), console.log(t), console.log(t.data.avatarUrl)) : 2001 == t.errcode ? e.getRefreshToken() : wx.showToast({
                title: t.errmsg,
                icon: "none"
            });
        });
    },
    onLoad: function(e) {
        this.getDetail(), console.log("获取用户信息*****");
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