var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
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
            var e = t.currentTarget.dataset, a = e.id, i = e.name;
            wx.navigateTo({
                url: "/pages/live-list/live-list?typeId=" + a + "&name=" + i
            });
        },
        getList: function() {
            var t = this, i = this.data, s = i.page, o = i.page_size, l = i.list;
            a.get(e.globalData.baseUrl + "/miniapp/live/column", {
                page: s,
                page_size: o
            }).then(function(e) {
                if (0 != e.errcode) wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                }); else {
                    var a = l.concat(e.data);
                    t.setData({
                        list: a,
                        total: e.total
                    });
                }
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