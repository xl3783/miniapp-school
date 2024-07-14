var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp();

new e.default.Http();

Page({
    data: {
        tabName: "",
        height: 650,
        type: ""
    },
    onLoad: function(e) {
        console.log("打印type"), console.log(e);
        var t = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : e.title ? decodeURIComponent(e.title) : "录取查询",
            type: e.type ? e.type : ""
        }), wx.setNavigationBarTitle({
            title: this.data.tabName
        });
        var a = wx.createSelectorQuery();
        a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
        var n = 0;
        a.exec(function(e) {
            for (var a = 0; a < e.length; a++) e[a] && e[a].height && (n += e[a].height);
            var i = wx.getSystemInfoSync().windowHeight - n;
            t.setData({
                height: i
            });
        });
    },
    changeName: function(e) {
        console.log(e), this.setData({
            tabName: e.detail
        }), wx.setNavigationBarTitle({
            title: e.detail
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
            title: this.data.tabName,
            path: "/pages/admission-query/admission-query?name=" + this.data.tabName + "&type=" + this.data.type
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            imageUrl: t.globalData.schoollogo,
            query: "name=" + this.data.tabName + "&type=" + this.data.type
        };
    }
});