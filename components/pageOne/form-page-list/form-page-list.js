var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        }
    },
    data: {
        topNum: 0,
        page: 1,
        page_size: 20,
        total: 0,
        list: [],
        isBottom: !1
    },
    lifetimes: {
        attached: function() {
            this.getList();
        }
    },
    methods: {
        goDetail: function(t) {
            var e = t.currentTarget.dataset.item;
            console.log(e), 1 == e.status && wx.navigateTo({
                url: "/pages/form-view/form-view?id=" + e.id + "&name=" + e.topic
            });
        },
        getList: function() {
            var t = this, i = this.data, s = i.page, o = i.page_size, p = i.list;
            a.get(e.globalData.baseUrl3 + "/miniapp/form", {
                page: s,
                page_size: o
            }).then(function(e) {
                t.setData({
                    list: p.concat(e.data),
                    total: e.total
                });
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