var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 650
        },
        type: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && (this.setData({
                    type: t
                }), this.getPlanScoreList());
            }
        }
    },
    data: {
        type: "",
        page: 1,
        page_size: 20,
        total: 0,
        column: []
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        getPlanScoreList: function(t) {
            var o = this, i = this.data, n = i.type, l = i.page, s = i.page_size, r = i.column;
            a.get(e.globalData.baseUrl + "/miniapp/enrollInfo/list", {
                type: n,
                page: l,
                page_size: s
            }).then(function(t) {
                var e = t.data, a = e.count, i = e.list, n = r.concat(i);
                0 == t.errcode && o.setData({
                    total: a,
                    column: n
                });
            });
        },
        lookColumnDetail: function(t) {
            var e = t.currentTarget.dataset.item, a = e.id, o = e.title;
            console.log(a), console.log(o), wx.navigateTo({
                url: "/packageA/pages/plan-score-new/plan-score-new?id=" + a + "&title" + o
            });
        },
        onReachBottom: function() {
            console.log("到底了");
            var t = this.data, e = t.total, a = t.page;
            a * t.page_size < e ? (a += 1, this.setData({
                page: a,
                isBottom: !1
            }), this.getPlanScoreList()) : this.setData({
                isBottom: !0
            });
        }
    }
});