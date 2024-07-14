var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

Page({
    data: {
        name: "",
        phone: "",
        word: "",
        globalColor: "",
        token: ""
    },
    getName: function(e) {
        this.setData({
            name: e.detail.value
        });
    },
    getPhone: function(e) {
        var t = e.detail.value;
        this.setData({
            phone: t
        });
    },
    getWord: function(e) {
        this.setData({
            word: e.detail.value
        });
    },
    submit: function() {
        var e = this, o = this.data, n = o.word, r = o.phone, i = o.name;
        o.token;
        a.post(t.globalData.baseUrl + "/miniapp/message", {
            name: i,
            phone: r,
            content: n
        }, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(t) {
            0 == t.errcode ? (e.setData({
                word: "",
                phone: "",
                name: ""
            }), wx.redirectTo({
                url: "/pages/leaveWordSuc/leaveWordSuc"
            })) : 2001 == t.errcode ? (console.log("签名过期"), e.getRefreshToken()) : wx.showToast({
                title: t.errmsg,
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {
        var e = this;
        a.get(t.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: t.globalData.userInfo.token.refresh_token
        }).then(function(a) {
            0 == a.errcode && (t.globalData.token = a.token, e.setData({
                token: a.token
            }), e.submit());
        });
    },
    onLoad: function(e) {
        var a = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), wx.getStorage({
            key: "newuserinfo",
            success: function(e) {
                t.globalData.userInfo = e.data, t.globalData.token = e.data.token.access_token, 
                a.setData({
                    token: e.data.token.access_token
                });
            },
            fail: function() {
                a.setData({
                    token: ""
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), this.setData({
            globalColor: t.globalData.globalColor
        });
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
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: "在线留言"
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: "在线留言",
            imageUrl: t.globalData.schoollogo
        };
    }
});