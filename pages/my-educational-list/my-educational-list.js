var e = require("../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../utils/http")), n = getApp(), i = new a.default.Http();

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
        list: []
    },
    onLoad: function(e) {
        this.getList();
    },
    getList: function() {
        var e = this;
        return r(t().mark(function r() {
            var a, o;
            return t().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, i.get(n.globalData.baseUrl + "/miniapp/usersign", {}, {
                        Authorization: n.globalData.token ? n.globalData.token : ""
                    });

                  case 2:
                    a = t.sent, o = [], Object.keys(a.data).forEach(function(e) {
                        var t = a.data[e];
                        o.push({
                            title: e,
                            children: t
                        });
                    }), e.setData({
                        list: o
                    });

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, r);
        }))();
    },
    toIntro: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/my-educational-intro/my-educational-intro?id=" + t
        });
    }
});