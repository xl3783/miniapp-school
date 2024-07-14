var e = require("../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../@babel/runtime/helpers/toConsumableArray"), a = e(require("../../utils/http")), o = getApp(), n = new a.default.Http();

Page({
    canvasContext: "",
    canvas: "",
    data: {
        name: "",
        ksh: "",
        idcard: "",
        major: "",
        ems: "",
        score: "",
        custom: [],
        bgUrl: "",
        intro: "",
        identify: "",
        electric_token: "",
        messageList: [],
        msgShow: !1,
        message_count: 0,
        benedictionShare: "0",
        extra: {},
        isIPad: !1,
        resultTop: "100rpx"
    },
    onLoad: function(e) {
        this.setData({
            intro: e.cnt ? JSON.parse(decodeURIComponent(e.cnt)) : "",
            type: e.type ? e.type : "",
            bgUrl: e.bgUrl ? e.bgUrl : "",
            identify: e.identify ? e.identify : "",
            benedictionShare: e.benedictionShare ? e.benedictionShare : "1",
            electric_token: e.electric_token ? e.electric_token : "",
            name: e.name ? e.name : "成绩查询结果",
            extra: e.extra ? JSON.parse(decodeURIComponent(e.extra)) : {},
            isIPad: -1 != wx.getSystemInfoSync().model.indexOf("iPad")
        }), "163" == o.globalData.schoolid && (-1 != wx.getSystemInfoSync().model.indexOf("iPad") ? this.setData({
            resultTop: "270px"
        }) : this.setData({
            resultTop: "530rpx"
        })), console.log(this.data.isIPad), console.log(o.globalData.schoolid), console.log(this.data.extra);
    },
    search: function() {
        var e = this, t = this.data, a = t.ksh, s = t.name, i = t.idcard, r = t.type;
        n.get(o.globalData.baseUrl + "/miniapp/matriculate", {
            ksh: a,
            name: s,
            idcard: i,
            type: r
        }).then(function(t) {
            0 == t.errcode && e.setData({
                showResult: !0,
                major: t.major,
                major_column: t.major_column,
                ems: t.ems,
                name: t.name,
                idcard: t.idcard,
                ksh: t.ksh,
                score: t.score,
                custom: t.custom
            });
        });
    },
    openMsg: function() {
        this.setData({
            msgShow: !0
        }), this.getMessage();
    },
    getMessage: function() {
        var e = this, a = this.data.identify;
        n.get(o.globalData.baseUrl + "/miniapp/listMessage", {
            identify: a
        }).then(function(a) {
            0 == a.errcode && e.setData({
                messageList: t(a.data)
            });
        });
    },
    getMessageCount: function() {
        var e = this, t = this.data.identify;
        n.get(o.globalData.baseUrl + "/miniapp/listMessageCount", {
            identify: t
        }).then(function(t) {
            0 == t.errcode && e.setData({
                message_count: t.data.message_count
            }), wx.stopPullDownRefresh();
        });
    },
    msgClose: function() {
        this.setData({
            msgShow: !1
        });
    },
    acceptanceLetter: function() {
        var e = this.data, t = e.extra, a = e.electric_token;
        console.log(o.globalData.appType), console.log(o.globalData.version), console.log(o.globalData.schoolid), 
        console.log(t.electric_url);
        var n = t.electric_url + "?token=" + a + "&apptype=" + o.globalData.appType + "&version=" + o.globalData.version + "&schoolid=" + o.globalData.schoolid;
        console.log(n), wx.navigateTo({
            url: "/pages/web-view/web-view?url=" + encodeURIComponent(n)
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), this.getMessageCount();
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {
        this.getMessageCount();
    },
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            path: "/pages/admission-query-share/admission-query-share?identify=" + this.data.identify + "&name=" + this.data.name
        };
    }
});