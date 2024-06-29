var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/regeneratorRuntime"), a = require("../../../@babel/runtime/helpers/objectSpread2"), i = require("../../../@babel/runtime/helpers/asyncToGenerator"), o = t(require("../../../utils/http")), r = require("../../../utils/util"), n = getApp(), s = new o.default.Http();

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
        category_id: {
            type: String,
            value: "",
            observer: function(t, e) {
                console.log("所有文章分类", t), this.getData();
            }
        },
        currentId: {
            type: String,
            value: "",
            observer: function(t, e) {
                this.setData({
                    toView: "row_" + t,
                    active: t
                }), console.log("currentId变化"), this.changeColumn(t);
            }
        },
        jump_type: {
            type: Number,
            value: 2
        }
    },
    data: {
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
        topNum: 0,
        toView: "",
        dataIsLoad: !1
    },
    methods: {
        chooseNav: function(t) {
            var e = t.currentTarget.dataset.id;
            this.setData({
                active: e,
                page: 1,
                id: e,
                currentList: [],
                topList: [],
                allList: [],
                isBottom: !1
            }), this.triggerEvent("chooseNav", e);
        },
        goDetail: function(t) {
            (0, r.jumpToNewsDetail)(t);
        },
        getData: function() {
            var t = this;
            return i(e().mark(function i() {
                var o, r, l, p, u;
                return e().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = t.data, r = o.page, o.active, l = o.page_size, p = o.jump_type, u = {}, 
                        t.data.category_id ? u.column_id = t.data.category_id : u.type = 1, wx.showLoading({
                            title: "加载中"
                        }), e.next = 6, s.get(n.globalData.baseUrl + "/miniapp/article", a({
                            page: r,
                            page_size: l,
                            jump_type: p,
                            type_id: t.properties.currentId
                        }, u)).then(function(e) {
                            var a = e.data.filter(function(t) {
                                return 0 == t.is_top;
                            }), i = e.data.filter(function(t) {
                                return 1 == t.is_top;
                            });
                            e.column.length > 0 && t.setData({
                                active: e.column[0].id,
                                id: e.column[0].id
                            }), t.setData({
                                allList: e.data,
                                navList: e.column,
                                currentList: a,
                                topList: i,
                                total: e.total,
                                globalColor: n.globalData.globalColor,
                                position: e.position
                            });
                        });

                      case 6:
                        t.setData({
                            dataIsLoad: !0
                        }), wx.hideLoading();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, i);
            }))();
        },
        changeColumn: function(t) {
            var e = this, a = this.data, i = a.page, o = a.page_size, r = a.allList, l = a.jump_type;
            wx.showLoading({
                title: "加载中"
            }), s.get(n.globalData.baseUrl + "/miniapp/article", {
                type: 1,
                type_id: t,
                column_id: this.properties.category_id,
                page: i,
                page_size: o,
                jump_type: l
            }).then(function(a) {
                var i = r.concat(a.data), o = i.filter(function(t) {
                    return 0 == t.is_top;
                }), s = i.filter(function(t) {
                    return 1 == t.is_top;
                });
                e.setData({
                    allList: i,
                    currentList: o,
                    topList: s,
                    total: a.total,
                    position: a.position,
                    active: t,
                    globalColor: n.globalData.globalColor
                }), wx.hideLoading();
            });
        },
        onReachBottom: function() {
            var t = this.data, e = t.page, a = t.page_size, i = t.total, o = t.id;
            e * a < i ? (e += 1, this.setData({
                page: e,
                isBottom: !1
            }), this.changeColumn(o)) : this.setData({
                isBottom: !0
            });
        }
    }
});