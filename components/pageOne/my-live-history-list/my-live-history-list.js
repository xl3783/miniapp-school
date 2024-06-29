var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = require("../../../utils/util"), a = getApp(), i = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 700
        }
    },
    data: {
        list: [],
        showShare: !1,
        page: 1,
        page_size: 10,
        total: 0
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                list: []
            }), this.getList();
        }
    },
    methods: {
        goLive: function(t) {
            var e = t.currentTarget.dataset, a = e.id;
            2 == e.type ? wx.navigateTo({
                url: "/pages/my-live-watch/my-live-watch?id=" + a
            }) : wx.navigateTo({
                url: "/pages/live/live?id=" + a
            });
        },
        getList: function() {
            var t = this, o = this.data, s = o.page, n = o.page_size, r = o.list;
            i.get(a.globalData.baseUrl + "/miniapp/live", {
                page: s,
                page_size: n,
                is_history: 1,
                from: 1
            }, {
                Authorization: a.globalData.token ? a.globalData.token : ""
            }).then(function(a) {
                if (2001 == a.errcode) console.log("签名错误"), t.getRefreshToken(); else if (2e3 == a.errcode) wx.showToast({
                    title: "请完善用户信息",
                    icon: "none"
                }); else if (0 == a.errcode) {
                    var i = [];
                    a.data && (i = a.data.map(function(t) {
                        return t.duration > 0 && (t.duration = (0, e.formatSeconds)(t.duration / 1e3)), 
                        t;
                    }));
                    var o = r.concat(i);
                    t.setData({
                        list: o,
                        total: a.total
                    });
                } else wx.showToast({
                    title: a.errmsg,
                    icon: "none"
                });
            });
        },
        getRefreshToken: function() {
            var t = this;
            i.get(a.globalData.baseUrl + "/miniapp/refresh_token", {
                refresh_token: a.globalData.userInfo.token.refresh_token
            }).then(function(e) {
                0 == e.errcode && (a.globalData.token = e.token, t.getList());
            });
        },
        onReachBottom: function() {
            var t = this.data, e = t.page, a = t.total;
            e * t.page_size < a ? (e += 1, this.setData({
                page: e,
                isBottom: !1
            }), this.getList()) : this.setData({
                isBottom: !0
            });
        },
        goHistory: function() {
            wx.navigateTo({
                url: "/pages/my-live-history-list/my-live-history-list"
            });
        },
        openMask: function() {
            this.setData({
                showShare: !0
            });
        },
        hideMask: function() {
            this.setData({
                showShare: !1
            });
        },
        share: function() {},
        copyLink: function() {}
    }
});