var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Page({
    data: {
        tabName: "",
        column_id: "",
        page: 1,
        page_size: 20,
        total: 0,
        navList: [],
        list: [],
        toView: "",
        type: ""
    },
    onLoad: function(t) {
        this.setData({
            column_id: t.column_id ? t.column_id : "",
            type: t.type,
            tabName: t.name ? decodeURIComponent(t.name) : "",
            globalColor: e.globalData.globalColor,
            toView: "row_" + t.column_id
        }), this.getList();
    },
    chooseNav: function(t) {
        var e = t.currentTarget.dataset.id;
        this.setData({
            column_id: e,
            list: [],
            page: 1,
            total: 0
        }), this.getList();
    },
    goTeacherDetail: function(t) {
        var e = t.currentTarget.dataset, a = e.id, i = e.name, n = this.data.type;
        wx.navigateTo({
            url: "/pages/campus-famous-detail/campus-famous-detail?id=".concat(a, "&name=").concat(i, "&type=") + n
        });
    },
    getList: function() {
        var t = this, i = this.data, n = i.page, o = i.page_size, s = i.column_id, p = i.list;
        i.type;
        a.get(e.globalData.baseUrl + "/miniapp/character", {
            page: n,
            page_size: o,
            column_id: s
        }).then(function(e) {
            t.setData({
                navList: e.column,
                list: p.concat(e.data),
                total: e.total
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this.data, e = t.page;
        e * t.page_size < t.total && (e += 1, this.setData({
            page: e
        }), this.getList());
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/packageA/pages/person-cate/person-cate?name=" + this.data.tabName + "&column_id=" + this.data.column_id + "&type=" + this.data.type
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "name=" + this.data.tabName + "&column_id=" + this.data.column_id + "&type=" + this.data.type
        };
    }
});