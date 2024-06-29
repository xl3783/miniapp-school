var e = require("../@babel/runtime/helpers/objectSpread2"), o = getApp(), t = {
    appType: o.globalData.appType,
    version: o.globalData.version,
    schoolid: o.globalData.schoolid
};

module.exports = {
    Http: function() {
        var n = this;
        this.get = function(i) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new Promise(function(l, s) {
                wx.request({
                    url: i,
                    method: "get",
                    data: a,
                    timeout: 1e4,
                    header: e({
                        "content-type": "application/json",
                        "App-Type": t.appType,
                        Version: t.version,
                        schoolid: t.schoolid,
                        "Open-Id": o.globalData.openid,
                        "Inviter-Phone": o.globalData.inviter_phone,
                        "Channel-Id": o.globalData.channel_id,
                        "Inviter-Id": o.globalData.inviter_id
                    }, r),
                    success: function(e) {
                        n.success(e, l, s);
                    },
                    fail: function(e) {
                        console.log(e), "request:fail timeout" == e.errMsg || "request:fail 请求超时" == e.errMsg ? n.error("网络异常，请重新进入") : n.error("请检查网络");
                    }
                });
            });
        }, this.post = function(i) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
            return new Promise(function(s, c) {
                wx.request({
                    url: i,
                    method: "post",
                    data: a,
                    timeout: 1e4,
                    header: e({
                        "content-type": "application/json",
                        "App-Type": t.appType,
                        Version: t.version,
                        schoolid: t.schoolid,
                        "Open-Id": o.globalData.openid,
                        "Channel-Id": o.globalData.channel_id,
                        "Inviter-Phone": o.globalData.inviter_phone,
                        "Inviter-Id": o.globalData.inviter_id
                    }, r),
                    success: function(e) {
                        n.success(e, s, c, l);
                    },
                    fail: function(e) {
                        "request:fail timeout" == e.errMsg || "request:fail 请求超时" == e.errMsg ? n.error("网络异常，请重新进入") : n.error("请检查网络");
                    }
                });
            });
        }, this.put = function(i) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new Promise(function(l, s) {
                wx.request({
                    url: i,
                    method: "put",
                    data: a,
                    timeout: 1e4,
                    header: e({
                        "content-type": "application/json",
                        "App-Type": t.appType,
                        Version: t.version,
                        schoolid: t.schoolid,
                        "Open-Id": o.globalData.openid,
                        "Inviter-Phone": o.globalData.inviter_phone,
                        "Channel-Id": o.globalData.channel_id,
                        "Inviter-Id": o.globalData.inviter_id
                    }, r),
                    success: function(e) {
                        n.success(e, l, s);
                    },
                    fail: function(e) {
                        "request:fail timeout" == e.errMsg || "request:fail 请求超时" == e.errMsg ? n.error("网络异常，请重新进入") : n.error("请检查网络");
                    }
                });
            });
        }, this.success = function(e, o, t, i) {
            200 == e.statusCode ? 1 == e.data.errcode ? (i || n.error(e.data.errmsg), o(e.data)) : 2001 == e.data.errcode ? o(e.data) : 5005 == e.data.errcode ? wx.showModal({
                content: "您还不是校友，请先完成校友认证再进行此操作",
                showCancel: !1,
                confirmText: "去认证",
                success: function(e) {
                    e.confirm ? (console.log("用户点击确定"), wx.navigateTo({
                        url: "/xpAlumni/xpalumni-certification/xpalumni-certification"
                    })) : e.cancel && console.log("用户点击取消");
                }
            }) : o(e.data) : (n.error("网络繁忙 ~"), t());
        }, this.error = function(e) {
            wx.hideLoading(), wx.showToast({
                title: e,
                icon: "none"
            });
        };
    }
};