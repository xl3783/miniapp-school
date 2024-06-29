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
        top: {
            type: Number,
            value: 0
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        },
        categoryIds: {
            type: String,
            value: "",
            observer: function(t, e) {
                console.log("---------", t), this.getCateList(0);
            }
        }
    },
    data: {
        globalColor: "",
        showType: !1,
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
        topNum: 0,
        dataIsLoad: !1
    },
    lifetimes: {
        ready: function() {
            console.log("====", this.properties.categoryIds), this.properties.categoryIds || this.getData();
        }
    },
    methods: {
        chooseNav: function(t) {
            var e = t.currentTarget.dataset, a = e.index, o = e.id;
            this.setData({
                indexCurrent: -1,
                active: a,
                type: o,
                page: 1,
                currentList: []
            }), this.getCateList(o);
        },
        previewImg: function(t) {
            var e = t.currentTarget.dataset.img;
            wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        getData: function() {
            var t = this, o = this.data, s = o.page, i = o.page_size, r = o.currentList;
            wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/scenery", {
                page: s,
                page_size: i
            }).then(function(a) {
                var o = r.concat(a.data);
                a.types && a.types.length > 0 ? (t.setData({
                    showType: !0,
                    style: a.style,
                    types: a.types,
                    currentList: o,
                    total: a.total,
                    globalColor: e.globalData.globalColor,
                    dataIsLoad: !0
                }), wx.hideLoading()) : (t.setData({
                    showType: !1,
                    style: a.style,
                    currentList: o,
                    total: a.total,
                    globalColor: e.globalData.globalColor,
                    dataIsLoad: !0
                }), wx.hideLoading());
            });
        },
        getCateList: function(t) {
            var o = this, s = o.data, i = s.page, r = s.page_size, l = s.currentList, p = this.properties.categoryIds;
            wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/scenery", {
                page: i,
                page_size: r,
                type: t,
                category_ids: p
            }).then(function(a) {
                var s = l.concat(a.data);
                o.setData({
                    dataIsLoad: !0,
                    currentList: s,
                    style: a.style,
                    total: a.total,
                    types: a.types,
                    type: t,
                    showType: !!t,
                    globalColor: e.globalData.globalColor
                }), wx.hideLoading();
            });
        },
        onReachBottom: function() {
            var t = this.data, e = t.page, a = t.total, o = t.page_size, s = t.type;
            t.showType;
            e * o < a ? (e += 1, this.setData({
                page: e,
                isBottom: !1
            }), this.getCateList(s)) : this.setData({
                isBottom: !0
            });
        }
    }
});