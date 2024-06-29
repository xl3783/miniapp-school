var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

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
        total: 0,
        liveid: 0,
        shareUrl: ""
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                list: []
            }), this.getList();
        }
    },
    methods: {
        goMyLive: function(t) {
            var e = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/my-live/my-live?id=" + e
            });
        },
        getCurDay: function() {
            var t = new Date().getFullYear(), e = new Date().getMonth() + 1, a = e > 10 ? e : "0" + e, i = new Date().getDate();
            return t + "-" + a + "-" + (i > 10 ? i : "0" + i);
        },
        getTomorrow: function() {
            var t = new Date();
            t.setDate(t.getDate() + 1);
            var e = t.getFullYear(), a = t.getMonth() + 1, i = a > 10 ? a : "0" + a, o = t.getDate();
            return e + "-" + i + "-" + (o > 10 ? o : "0" + o);
        },
        getList: function() {
            var t = this, i = this.data, o = i.page, r = i.page_size, s = i.list;
            a.get(e.globalData.baseUrl + "/miniapp/live", {
                page: o,
                page_size: r,
                from: 1
            }, {
                Authorization: e.globalData.token ? e.globalData.token : ""
            }).then(function(e) {
                if (2001 == e.errcode) t.getRefreshToken(); else if (2e3 == e.errcode) wx.showToast({
                    title: "请完善用户信息",
                    icon: "none"
                }); else if (0 == e.errcode) {
                    var a = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ], i = t.getCurDay(), o = t.getTomorrow(), r = [];
                    e.data && (r = e.data.map(function(t) {
                        var e, r = t.start_time.split(" ")[0], s = t.start_time.split(" ")[1].split(":"), n = new Date(Date.parse(r)), l = a[n.getDay()];
                        if (r == i) e = "今天"; else if (r == o) e = "明天"; else {
                            var g = r.split("-");
                            e = g[1] + "." + g[2];
                        }
                        return t.today = e, t.week = l, t.time = s[0] + ":" + s[1], t;
                    }));
                    var n = s.concat(r);
                    t.setData({
                        list: n,
                        total: e.total
                    });
                } else wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                });
            });
        },
        getRefreshToken: function() {
            var t = this;
            a.get(e.globalData.baseUrl + "/miniapp/refresh_token", {
                refresh_token: e.globalData.userInfo.token.refresh_token
            }).then(function(a) {
                0 == a.errcode && (e.globalData.token = a.token, t.getList());
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
        openMask: function(t) {
            var a = t.currentTarget.dataset, i = a.id, o = a.type, r = a.name, s = a.coverurl;
            this.setData({
                showShare: !0,
                liveid: i,
                shareUrl: e.globalData.shareLiveH5 + "?id=" + i + "_" + e.globalData.schoolid
            }), this.triggerEvent("changeShare", {
                id: i,
                type: o,
                name: r,
                cover_url: s
            });
        },
        hideMask: function() {
            this.setData({
                showShare: !1
            });
        },
        copyLink: function() {
            var t = this.data.shareUrl;
            wx.setClipboardData({
                data: t,
                success: function(t) {
                    wx.getClipboardData({
                        success: function(t) {
                            console.log(t.data);
                        }
                    });
                }
            });
        }
    }
});