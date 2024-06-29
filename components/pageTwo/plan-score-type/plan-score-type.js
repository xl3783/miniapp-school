var e = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), a = getApp(), t = new e.default.Http();

Component({
    properties: {
        searchType: {
            type: String,
            value: 0,
            observer: function(e) {
                this.setData({
                    is_score: 1 == e ? 1 : 0
                }), (1 == e || 2 == e) && this.getTypeList();
            }
        }
    },
    data: {
        page: 0,
        page_size: 20,
        list: [],
        hasMore: !0,
        is_score: 0,
        dataIsLoad: !1
    },
    lifetimes: {
        attached: function() {},
        detached: function() {}
    },
    methods: {
        getTypeList: function() {
            var e = this, s = this.data, i = s.page, r = s.page_size, o = s.list, p = s.hasMore, n = s.is_score, c = i + 1;
            p && (wx.showLoading({
                title: "加载中"
            }), t.get(a.globalData.baseUrl + "/miniapp/enrolltype", {
                page: c,
                page_size: r,
                is_score: n
            }).then(function(a) {
                e.setData({
                    dataIsLoad: !0,
                    page: c,
                    list: o.concat(a.data),
                    hasMore: c * r < a.total
                }), wx.hideLoading();
            }));
        },
        goTypeSearch: function(e) {
            var a = this.properties.searchType, t = e.currentTarget.dataset, s = t.id, i = t.name;
            console.log("===点击进入筛选==", a), wx.navigateTo({
                url: "/packageA/pages/plan-score-search/plan-score-search?enrollType=" + s + "&searchType=" + a + "&name=" + i
            });
        }
    }
});