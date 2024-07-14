var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = require("../../utils/util"), a = getApp(), i = new t.default.Http();

Page({
    data: {
        tabName: "",
        active: 0,
        allList: [],
        currentList: [],
        topList: [],
        globalColor: "",
        navList: [],
        page: 1,
        page_size: 20,
        total: 1,
        id: 0,
        isBottom: !1,
        position: 1,
        category_id: "",
        showCategory: 1,
        jump_type: 0
    },
    goDetail: function(t) {
        (0, e.jumpToNewsDetail)(t);
    },
    chooseNav: function(t) {
        var e = t.currentTarget.dataset, a = e.index, i = e.id;
        this.setData({
            active: a,
            allList: [],
            currentList: [],
            topList: [],
            page: 1,
            id: i
        }), this.changeColumn(i);
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            tabName: t.name ? decodeURIComponent(t.name) : "栏目来源",
            category_id: decodeURIComponent(t.category_id) ? decodeURIComponent(t.category_id) : "",
            showCategory: "0" == t.showCategory ? t.showCategory : 1,
            jump_type: t.jump_type ? t.jump_type : 0
        }), this.getData();
    },
    getData: function() {
        var t = this, e = this.data, o = e.page, n = e.page_size, r = e.category_id, s = e.active, p = e.jump_type;
        i.get(a.globalData.baseUrl + "/miniapp/article", {
            type: 1,
            page: o,
            page_size: n,
            jump_type: p,
            column_id: r
        }).then(function(e) {
            var a = e.data.filter(function(t) {
                return 0 == t.is_top;
            }), i = e.data.filter(function(t) {
                return 1 == t.is_top;
            });
            e.column.length > 0 && t.setData({
                active: s || e.column[0].id,
                id: e.column[0].id
            }), t.setData({
                allList: e.data,
                navList: e.column,
                currentList: a,
                topList: i,
                total: e.total,
                position: e.position
            });
        });
    },
    changeColumn: function(t) {
        var e = this, o = this.data, n = o.page, r = o.page_size, s = o.allList, p = o.jump_type;
        i.get(a.globalData.baseUrl + "/miniapp/article", {
            type: 1,
            column_id: t,
            page: n,
            page_size: r,
            jump_type: p
        }).then(function(t) {
            var a = s.concat(t.data), i = a.filter(function(t) {
                return 0 == t.is_top;
            }), o = a.filter(function(t) {
                return 1 == t.is_top;
            });
            e.setData({
                allList: a,
                currentList: i,
                topList: o,
                total: t.total,
                position: t.position
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), this.setData({
            globalColor: a.globalData.globalColor
        });
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data, e = t.page, a = t.page_size, i = t.total, o = t.category_id;
        e * a < i ? (e += 1, this.setData({
            page: e,
            isBottom: !1
        }), this.changeColumn(o)) : this.setData({
            isBottom: !0
        });
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/article-source/article-source?name=" + this.data.tabName + "&category_id=" + this.data.category_id + "&showCategory=" + this.data.showCategory + "&jump_type=" + this.data.jump_type
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "name=" + this.data.tabName + "&category_id=" + this.data.category_id + "&showCategory=" + this.data.showCategory + "&jump_type=" + this.data.jump_type,
            imageUrl: a.globalData.schoollogo
        };
    }
});