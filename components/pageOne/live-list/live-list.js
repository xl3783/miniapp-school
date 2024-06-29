var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        type: {
            type: String,
            value: "all",
            observer: function(t, e) {}
        },
        typeId: {
            type: String,
            value: "0",
            observer: function(t, e) {}
        },
        height: {
            type: Number,
            value: 550
        }
    },
    data: {
        platform: e.globalData.platform,
        list: [],
        page: 1,
        page_size: 20,
        total: 0,
        isBottom: !1
    },
    lifetimes: {
        ready: function() {
            this.setData({
                page: 1,
                list: []
            }), this.getList();
        }
    },
    methods: {
        goLive: function(t) {
            var e = t.currentTarget.dataset, a = e.status, i = e.id, o = e.type;
            0 == a ? wx.navigateTo({
                url: "/pages/live-detail/live-detail?id=".concat(i)
            }) : 2 == o ? wx.navigateTo({
                url: "/pages/my-live-watch/my-live-watch?id=".concat(i)
            }) : wx.navigateTo({
                url: "/pages/live/live?id=".concat(i)
            });
        },
        getList: function() {
            var t = this, i = this.data, o = i.page, s = i.page_size, n = i.list, l = this.properties, r = l.type, g = l.typeId;
            "all" == r ? (wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/live", {
                page: o,
                page_size: s,
                from: 0,
                column_id: g
            }).then(function(e) {
                if (0 != e.errcode) wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                }); else {
                    var a = n.concat(e.data);
                    t.setData({
                        list: a,
                        total: e.total
                    });
                }
                wx.hideLoading();
            })) : "my" == r && (wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/subscribe", {
                page: o,
                page_size: s
            }, {
                Authorization: e.globalData.token ? e.globalData.token : ""
            }).then(function(e) {
                if (2001 == e.errcode) t.getRefreshToken(); else if (2e3 == e.errcode) wx.showToast({
                    title: "请完善用户信息",
                    icon: "none"
                }); else if (0 == e.errcode) {
                    var a = n.concat(e.data);
                    t.setData({
                        list: a,
                        total: e.total
                    });
                } else wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                });
                wx.hideLoading();
            }));
        },
        getRefreshToken: function() {
            var t = this;
            wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/refresh_token", {
                refresh_token: e.globalData.userInfo.token.refresh_token
            }).then(function(a) {
                0 == a.errcode && (e.globalData.token = a.token, t.setData({
                    page: 1,
                    list: []
                }), t.getList()), wx.hideLoading();
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
        }
    }
});