var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        name: {
            type: String,
            value: "录取查询"
        },
        height: {
            type: Number,
            value: 1e3,
            observer: function(t, e) {}
        }
    },
    data: {
        list: [],
        page: 1,
        page_size: 20,
        total: 0,
        load: !1,
        isBottom: !1,
        isIphoneX: e.globalData.isIphoneX
    },
    lifetimes: {
        attached: function() {
            this.setData({
                page: 1,
                list: []
            }), this.getList();
        }
    },
    methods: {
        goAdmission: function(t) {
            var e = t.currentTarget.dataset, a = e.id;
            1 == e.status && wx.navigateTo({
                url: "/pages/admission-query/admission-query?type=".concat(a, "&name=").concat(this.data.name)
            });
        },
        getList: function() {
            var t = this, i = this.data, s = i.page, o = i.page_size, n = i.list;
            a.get(e.globalData.baseUrl + "/miniapp/matriculate/type", {
                page: s,
                page_size: o
            }).then(function(e) {
                if (0 != e.errcode) wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                }); else {
                    var a = n.concat(e.data);
                    t.setData({
                        list: a,
                        load: !0,
                        total: e.total
                    });
                }
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
        }
    }
});