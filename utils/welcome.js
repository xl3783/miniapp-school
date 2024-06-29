var e = require("../@babel/runtime/helpers/regeneratorRuntime"), t = require("../@babel/runtime/helpers/asyncToGenerator"), o = require("../@babel/runtime/helpers/objectSpread2"), n = "https://oe.schoolpi.net/miniapp", r = function(e) {
    wx.showToast({
        title: e,
        icon: "none"
    });
}, i = function() {
    var o = t(e().mark(function t(o, n, r) {
        return e().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                0 === o.data.errcode ? void 0 === o.data.data ? n(o.data) : n(o.data.data) : (console.error(o.data), 
                wx.showToast({
                    title: o.data.errmsg,
                    icon: "none"
                }), r(o.data.errmsg));

              case 1:
              case "end":
                return e.stop();
            }
        }, t);
    }));
    return function(e, t, n) {
        return o.apply(this, arguments);
    };
}();

module.exports = {
    get: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = wx.getStorageSync("WelcomeConfigData");
        if (e || o) {
            var a = {
                "App-Type": 1,
                Version: "v1"
            };
            o.schoolid && (a.schoolid = o.schoolid), o.token && (a["Face-Token"] = o.token);
            var c = new Promise(function(o, c) {
                wx.request({
                    url: "".concat(n).concat(e),
                    data: t,
                    method: "GET",
                    header: a,
                    success: function(e) {
                        i(e, o, c);
                    },
                    fail: function() {
                        r("网络异常 ~"), c(null);
                    }
                });
            });
            return c;
        }
        console.error("请求出错");
    },
    post: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = wx.getStorageSync("WelcomeConfigData");
        if (e || o) {
            var a = {
                "content-type": "application/json",
                "App-Type": 1,
                Version: "v1"
            };
            o.schoolid && (a.schoolid = o.schoolid), o.token && (a["Face-Token"] = o.token);
            var c = new Promise(function(o, c) {
                wx.request({
                    url: "".concat(n).concat(e),
                    data: t,
                    header: a,
                    method: "POST",
                    success: function(e) {
                        i(e, o, c);
                    },
                    fail: function() {
                        r("网络异常 ~"), c(null);
                    }
                });
            });
            return c;
        }
        console.error("请求出错");
    },
    log: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        1 == t && console.log("[welcome] => " + e), 2 == t && console.error("[welcome] => " + e);
    },
    getConfigData: function() {
        var e = wx.getStorageSync("WelcomeConfigData");
        return o(o({}, {
            token: null,
            schoolid: 1,
            configId: null
        }), e);
    },
    initWelcome: function(e) {
        if (e) {
            var t = wx.getStorageSync("WelcomeConfigData");
            t || (t = {
                token: null,
                schoolid: 1,
                configId: null
            }), wx.setStorageSync("WelcomeConfigData", o(o({}, t), e));
        } else console.error("initWelcome 失败");
    },
    getNextConfig: function(e) {
        if (1 == e) return {
            url: "/welcome/image/image",
            title: "自传人像照片",
            type: e
        };
        if (2 == e) return {
            url: "/welcome/identity/identity",
            title: "上传身份证照片",
            type: e
        };
        if (3 == e) return {
            url: "/welcome/living/index/index",
            title: "活体核验",
            type: e
        };
        if (4 == e) return {
            url: "/welcome/loading/loading",
            title: "人像核验",
            type: e
        };
        if (5 == e) return {
            url: "/welcome/signature/signature",
            title: "核验签名",
            type: e
        };
        if (9 == e) return {
            url: "/welcome/result/result?type=0",
            title: "核验结果",
            type: e
        };
        if (0 == e) throw new Error("type 为 0");
        throw new Error("错误类型");
    }
};