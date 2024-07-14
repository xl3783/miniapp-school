var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

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
        no: "",
        token: "",
        openId: "",
        url: "",
        api: ""
    },
    onLoad: function(e) {
        this.setData({
            no: e.no,
            token: e.token,
            url: e.url,
            api: e.api
        });
        var n = this;
        wx.login({
            success: function(e) {
                var o = e.code;
                a.post(t.globalData.baseUrl + "/miniapp/get_openid", {
                    code: o
                }, {
                    schoolid: t.globalData.schoolid
                }).then(function(e) {
                    n.play(e.openid);
                });
            }
        });
    },
    play: function(e) {
        var t = this;
        wx.request({
            url: t.data.api + "/api/order/wechat/miniapp",
            method: "get",
            data: {
                openid: e,
                no: this.data.no
            },
            header: {
                Authorization: this.data.token
            },
            success: function(e) {
                wx.requestPayment({
                    timeStamp: e.data.data.timeStamp,
                    nonceStr: e.data.data.nonceStr,
                    package: e.data.data.package,
                    signType: "MD5",
                    paySign: e.data.data.paySign,
                    fail: function(e) {
                        console.log("微信SDK_ERROR =>", e);
                    },
                    success: function() {
                        wx.reLaunch({
                            url: "../web-view/web-view?url=" + t.data.url
                        });
                    }
                });
            },
            fail: function(e) {
                console.log("获取支付配置出错 =>", e);
            }
        });
    }
});