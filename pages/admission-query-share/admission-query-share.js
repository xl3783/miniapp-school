var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = getApp(), a = new t.default.Http();

Page({
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
        popupShow: !1,
        value: "",
        identify: "",
        message_status: 0,
        userToken: "",
        isIPad: !1,
        resultTop: "100rpx"
    },
    onLoad: function(t) {
        this.setData({
            identify: t.identify ? t.identify : "",
            name: t.name ? t.name : "成绩查询结果",
            isIPad: -1 != wx.getSystemInfoSync().model.indexOf("iPad")
        }), "163" == e.globalData.schoolid && (-1 != wx.getSystemInfoSync().model.indexOf("iPad") ? this.setData({
            resultTop: "270px"
        }) : this.setData({
            resultTop: "530rpx"
        })), this.getListByIdentify();
    },
    getListByIdentify: function() {
        var t = this, n = this.data.identify;
        a.get(e.globalData.baseUrl + "/miniapp/getListByIdentify", {
            identify: n
        }).then(function(e) {
            0 == e.errcode && t.setData({
                intro: e.data,
                bgUrl: e.style_url,
                message_status: e.message_status
            });
        });
    },
    openPopup: function(t) {
        var a = t.currentTarget.dataset.status;
        this.setData({
            userToken: e.globalData.token
        }), e.globalData.token ? 0 == a && this.setData({
            popupShow: !0
        }) : wx.navigateTo({
            url: "/packageA/pages/avatar-nickname/avatar-nickname"
        });
    },
    toCancel: function() {
        this.setData({
            popupShow: !1,
            value: ""
        });
    },
    toSure: function() {
        this.setData({
            popupShow: !1
        }), this.toblessing();
    },
    getValue: function(t) {
        this.setData({
            message: t.detail.value
        });
    },
    toblessing: function() {
        var t = this, n = this.data, i = n.message, s = n.identify, o = n.userToken;
        a.post(e.globalData.baseUrl + "/miniapp/listMessage", {
            identify: s,
            message: i
        }, {
            Authorization: o
        }).then(function(e) {
            0 == e.errcode ? (wx.showToast({
                title: "祝福已送达",
                icon: "none"
            }), t.setData({
                message_status: 1
            })) : wx.showToast({
                title: e.errmsg,
                icon: "none"
            });
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
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            query: "identify=" + this.data.identify + "&name=" + this.data.name
        };
    },
    onShareAppMessage: function(t) {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            path: "/pages/admission-query-share/admission-query-share?identify=" + this.data.identify + "&name=" + this.data.name
        };
    }
});