var e = getApp().globalData, t = e.welcomeUrl, o = e.schoolid;

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
        userInfo: "",
        bizToken: "",
        imgUrl: "",
        showImg: ""
    },
    onLoad: function() {
        var e = wx.getStorageSync("welcome-userInfo");
        this.setData({
            userInfo: e
        }), console.log(e);
    },
    toPage: function() {
        var e = this;
        this.data.imgUrl ? wx.getFileSystemManager().readFile({
            filePath: this.data.imgUrl,
            encoding: "base64",
            success: function(t) {
                2 == e.data.userInfo.verifyType && e.getVerifyInfo(t.data, function(e) {
                    wx.redirectTo({
                        url: "../verify/verify?type=2&bizToken=" + e
                    });
                }), 3 == e.data.userInfo.verifyType && e.verifyImg(t.data, function(e) {
                    console.log(e), wx.redirectTo({
                        url: "../verify/verify?type=3&res=" + JSON.stringify(e)
                    });
                });
            }
        }) : wx.showToast({
            title: "请上传正脸照片",
            icon: "none"
        });
    },
    verifyImg: function(e, n) {
        e ? wx.request({
            url: t.concat("/facebase"),
            method: "POST",
            header: {
                "School-Id": o,
                "content-type": "application/json",
                token: this.data.userInfo.access_token
            },
            data: {
                image: e
            },
            success: function(e) {
                if (200 === e.statusCode) {
                    var t = e.data, o = t.errcode, a = t.errmsg;
                    n(0 === o ? {
                        type: 2,
                        msg: "验证成功"
                    } : {
                        type: 3,
                        msg: a
                    });
                } else wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        }) : wx.showToast({
            title: "请选择照片",
            icon: "none"
        });
    },
    verifyServe: function(e, n) {
        wx.request({
            url: t.concat("/face"),
            method: "GET",
            header: {
                "School-Id": o,
                token: this.data.userInfo.access_token
            },
            data: {
                bizToken: e
            },
            success: function(e) {
                if (200 === e.statusCode) {
                    var t = e.data, o = t.errcode, a = t.errmsg;
                    wx.hideLoading(), 0 === o ? n() : wx.showToast({
                        title: a,
                        icon: "none"
                    });
                } else wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        });
    },
    getVerifyInfo: function(e, n) {
        var a = this, s = {
            returnUrl: "what ?"
        };
        e && (s.image = e), wx.request({
            url: t.concat("/face"),
            method: "POST",
            header: {
                "School-Id": o,
                "content-type": "application/json",
                token: this.data.userInfo.access_token
            },
            data: s,
            success: function(e) {
                if (200 === e.statusCode) {
                    var t = e.data, o = t.errcode, s = t.data, i = t.errmsg;
                    0 === o ? (console.log(s), a.setData({
                        bizToken: s.bizToken
                    }), n(s.bizToken)) : wx.showToast({
                        title: i,
                        icon: "none"
                    });
                } else wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        });
    },
    upimg: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(t) {
                console.log(t);
                var o = t.tempFilePaths[0];
                e.setData({
                    imgUrl: o,
                    showImg: o
                });
            }
        });
    }
});