var e = require("../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../@babel/runtime/helpers/toConsumableArray"), n = e(require("../../utils/http")), a = getApp(), o = new n.default.Http();

Page({
    data: {
        tabName: "",
        infoList: []
    },
    onLoad: function(e) {
        this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "消息"
        }), this.getInfoList();
    },
    getInfoList: function() {
        var e = this;
        o.get(a.globalData.baseUrl + "/miniapp/stationMessage").then(function(n) {
            0 === n.errcode && e.setData({
                infoList: t(n.data)
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
    onShareAppMessage: function() {
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});