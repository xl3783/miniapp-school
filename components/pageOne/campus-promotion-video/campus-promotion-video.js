var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

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
        toView: {
            type: String,
            value: ""
        },
        currentType: {
            type: String,
            value: "",
            observer: function(t, e) {
                this.setData({
                    toView: "row_" + t
                });
            }
        },
        categoryIds: {
            type: String,
            value: ""
        }
    },
    observers: {
        "categoryIds, currentType": function(t, e) {
            this.getCateList();
        }
    },
    data: {
        globalColor: e.globalData.globalColor,
        showType: !1,
        toView: "",
        style: 1,
        navList: [],
        types: [],
        active: 0,
        currentList: [],
        indexCurrent: -1,
        page: 1,
        page_size: 20,
        total: 1,
        type: 0,
        isBottom: !1,
        topNum: 0
    },
    lifetimes: {
        attached: function() {
            this.data.categoryIds && this.data.currentType >= 0 && this.getCateList();
        },
        ready: function() {}
    },
    methods: {
        goDetail: function(t) {
            var e = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=" + e
            });
        },
        chooseNav: function(t) {
            var e = t.currentTarget.dataset.id;
            this.setData({
                indexCurrent: -1,
                active: e,
                type: e,
                page: 1,
                currentList: []
            }), this.triggerEvent("chooseNav", e);
        },
        getCateList: function() {
            var t = this, i = this.data, s = i.page, r = i.page_size, o = i.currentList, n = i.categoryIds, p = i.currentType;
            a.get(e.globalData.baseUrl + "/miniapp/video", {
                type: p,
                page: s,
                page_size: r,
                category_ids: n
            }).then(function(e) {
                var a = o.concat(e.data);
                if (t.setData({
                    currentList: a,
                    style: e.style,
                    total: e.total
                }), e.types && e.types.length > 0) {
                    t.setData({
                        showType: !0,
                        types: e.types
                    });
                    var i = e.types.findIndex(function(t) {
                        return t.id == p;
                    });
                    i < 0 ? t.setData({
                        active: e.types[0].id
                    }) : t.setData({
                        active: e.types[i].id
                    });
                } else t.setData({
                    showType: !1
                });
            });
        },
        onReachBottom: function() {
            var t = this.data, e = t.page, a = t.total;
            e * t.page_size < a ? (e += 1, this.setData({
                page: e,
                isBottom: !1
            }), this.getCateList()) : this.setData({
                isBottom: !0
            });
        }
    }
});