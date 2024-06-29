var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), a = getApp(), e = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        list: [],
        page_size: 20,
        page: 1,
        total: 1,
        isBottom: !1,
        topNum: 0
    },
    lifetimes: {
        attached: function() {
            this.getData();
        }
    },
    methods: {
        goMap: function(t) {
            var i = t.currentTarget.dataset.address;
            e.post(a.globalData.baseUrl + "/miniapp/location", {
                address: i
            }).then(function(t) {
                wx.openLocation({
                    latitude: t.location.lat,
                    longitude: t.location.lng,
                    name: i,
                    scale: 28
                });
            });
        },
        getData: function() {
            var t = this, i = this.data, o = i.page, s = i.page_size, n = i.list;
            wx.showLoading({
                title: "加载中"
            }), e.get(a.globalData.baseUrl + "/miniapp/area", {
                page: o,
                page_size: s
            }).then(function(a) {
                var e = n.concat(a.data);
                t.setData({
                    list: e,
                    total: a.total
                }), wx.hideLoading();
            });
        },
        onReachBottom: function() {
            var t = this.data, a = t.page;
            a * t.page_size < t.total ? (a += 1, this.setData({
                page: a,
                isBottom: !1
            }), this.getData()) : this.setData({
                isBottom: !0
            });
        },
        scrollToTop: function() {
            this.setData({
                topNum: 0
            });
        }
    }
});