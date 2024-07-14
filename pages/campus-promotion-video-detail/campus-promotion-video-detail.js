var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = getApp(), a = new t.default.Http();

Page({
    data: {
        content: {},
        isPause: !0,
        title: "",
        intro: "",
        show: !1,
        customStyle: "color:#fff;background:#333333",
        cover_url: ""
    },
    openIntro: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.getData(t.id);
    },
    getData: function(t) {
        var n = this;
        a.get(e.globalData.baseUrl + "/miniapp/video/" + t).then(function(t) {
            console.log(t), n.setData({
                content: t.data,
                title: t.data.title,
                cover_url: t.data.cover_url
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
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.title,
            imageUrl: this.data.cover_url
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.title,
            imageUrl: e.globalData.schoollogo
        };
    }
});