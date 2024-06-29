var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default;

require("../../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"), a = require("../../../@babel/runtime/helpers/toConsumableArray"), i = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../@babel/runtime/helpers/objectSpread2"), r = e(require("../../../utils/http")), o = getApp(), c = new r.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 650
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        searchId: {
            type: Number,
            value: 1,
            observer: function(e, t) {
                e && (this.setData({
                    infoId: e
                }), this.getAllConfig());
            }
        }
    },
    data: {
        diyConfig: "",
        province_id: "",
        province_name: "",
        allList: [],
        allDataList: [],
        all_key: [],
        all_DataKey: [],
        topNum: 0,
        isIphoneX: o.globalData.isIphoneX,
        showPickerMask: !1,
        pickerType: "",
        topFixed: !1,
        isChange: !1,
        infoId: "",
        configList: [],
        selectList: [],
        filterData: [],
        defaultArea: "",
        openPosition: "",
        referenceColumn: "",
        pickerList: [],
        pickerVal: [ 0 ],
        searchType: 1,
        radioData: [],
        active: 0,
        isChoose: !1,
        style: 1,
        hit_title: "",
        chooseList: {},
        bgColor: o.globalData.globalColor,
        requestNum: 0,
        reference: 0,
        reference_key: "",
        reference_value: "",
        remark: "",
        btnFlag: !1,
        dataIsLoad: !1,
        countColorType: !1
    },
    lifetimes: {
        ready: function() {
            var e = this;
            wx.getStorage({
                key: "globalCondig",
                success: function(t) {
                    e.setData({
                        diyConfig: t.data
                    }), console.log(e.data.diyConfig);
                }
            });
        }
    },
    methods: {
        getAllConfig: function() {
            var e = this;
            c.get(o.globalData.baseUrl + "/miniapp/enrollInfo/config/" + this.data.infoId).then(function(t) {
                var a = t.data, i = a.title, r = a.filter_column, o = (a.all_column, a.open_position), c = (a.show_actively_column, 
                a.type), s = a.style_type, l = a.remark, h = a.reference_key, u = a.reference_value;
                if (0 == t.errcode) {
                    var f = {}, d = "";
                    h && u && (f[h] = u, r.forEach(function(e, t) {
                        e == h && (d = e);
                    }), r.unshift(d));
                    var p = Array.from(new Set(r));
                    e.setData({
                        reference_key: h,
                        reference_value: u,
                        radioData: p,
                        searchType: c,
                        style: s,
                        remark: l,
                        chooseList: n(n({}, e.data.chooseList), f),
                        isChoose: !0,
                        requestNum: 1
                    }), 1 == o && e.reLocation(), e.triggerEvent("changeName", i), h && u ? e.getSearch("radio") : e.getSearch("null");
                }
            });
        },
        openPicker: function(e) {
            var t = e.currentTarget.dataset.type, a = this.data.selectList, i = [];
            a.hasOwnProperty(t) && (i = a[t]), this.setData({
                pickerType: t,
                pickerList: i,
                showPickerMask: !0
            });
        },
        bindSearchChange: function(e) {
            var t = this.data, a = (t.pickerType, t.filterData, t.pickerList, t.pickerVal, "");
            a = 0 == e ? [ 0 ] : e.detail.value, this.setData({
                pickerVal: a
            });
        },
        bindSearchStart: function(e) {
            this.setData({
                isChange: !0
            });
        },
        bindSearchEnd: function() {
            this.setData({
                isChange: !1
            });
        },
        handlePickerSure: function() {
            var e = this.data, t = e.isChange, a = e.pickerType, i = e.pickerList, n = e.filterData, r = e.pickerVal;
            if (!t) {
                var o = 0;
                n.forEach(function(e, t) {
                    e.name == a && (o = t, e.val = i[r], n.forEach(function(e, t) {
                        t > o && (e.val = "");
                    }));
                }), this.setData({
                    filterData: n,
                    showPickerMask: !1
                }), this.bindSearchChange(!1), this.getSearch("select");
            }
        },
        handlePickerCancel: function() {
            this.setData({
                showPickerMask: !1
            });
        },
        chooseRadio: function(e) {
            var t = this;
            if (!this.data.btnFlag) {
                var a = this.data, i = a.selectList, r = a.reference_key, o = (a.reference_value, 
                a.radioData);
                this.setData({
                    reference: 0,
                    btnFlag: !0
                });
                var c = e.currentTarget.dataset, s = c.idx, l = c.index, h = c.item, u = c.title, f = i, d = {}, p = o.indexOf(u);
                f[l].children.forEach(function(e) {
                    e.check = !1;
                }), f[l].children[s].check = !0, d[u] = h.name, u == r ? Object.keys(this.data.chooseList).map(function(e, a) {
                    t.data.chooseList[e] = "";
                }) : Object.keys(this.data.chooseList).map(function(e, a) {
                    a > p && (t.data.chooseList[e] = "");
                }), this.setData({
                    selectList: f,
                    chooseList: n(n({}, this.data.chooseList), d)
                }), this.getSearch("radio"), 0 == Object.keys(this.data.chooseList).length && wx.showToast({
                    title: "请选择查询条件",
                    icon: "none"
                });
            }
        },
        getSearch: function(e) {
            var r = this;
            return i(t().mark(function i() {
                var s, l, h, u, f, d, p, m;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中"
                        }), s = r.data, l = s.chooseList, h = s.filterData, u = s.infoId, s.requestNum, 
                        s.reference, f = s.reference_key, d = s.radioData, p = {}, "radio" == e ? p = l : "select" == e ? (m = {}, 
                        h.forEach(function(e) {
                            m[e.name] = e.val;
                        }), p = m) : p = {}, t.next = 6, c.get(o.globalData.baseUrl + "/miniapp/enrollInfo/search/" + u, p).then(function(e) {
                            if (0 == e.errcode) {
                                var t, i = e.all, o = e.list, c = e.select_column, s = e.all_column, l = e.hit_title, h = {}, u = {};
                                Object.keys(c).map(function(e, t) {
                                    d.includes(e) && (u[e] = c[e]);
                                });
                                var m = [];
                                t = Object.keys(u).map(function(e, t) {
                                    m.push(e);
                                    var a = {}, i = u[e].map(function(t, a) {
                                        var i = {};
                                        return p[e] ? p[e] == t ? (i = {
                                            name: t,
                                            check: !0
                                        }, h[e] = t) : i = {
                                            name: t,
                                            check: !1
                                        } : 0 == a ? (i = {
                                            name: t,
                                            check: !0
                                        }, h[e] = t) : i = {
                                            name: t,
                                            check: !1
                                        }, u[e].includes(p[e]) || (0 == a ? (i = {
                                            name: t,
                                            check: !0
                                        }, h[e] = t) : i = {
                                            name: t,
                                            check: !1
                                        }), i;
                                    });
                                    return a.name = e, a.children = i, a;
                                }), Object.keys(p).map(function(e, t) {
                                    m.includes(e) || delete r.data.chooseList[e];
                                });
                                var v = [];
                                Object.keys(u).map(function(e, t) {
                                    var a = {};
                                    return p[e] && u[e].includes(p[e]) ? (a.name = e, a.val = p[e]) : (a.name = e, a.val = u[e][0]), 
                                    v.push(a);
                                });
                                var g = [];
                                v.forEach(function(e, t) {
                                    e.val && g.push(e);
                                }), g.forEach(function(e, t) {
                                    e.name == f && (g.splice(t, 1), g.unshift(e));
                                });
                                var k = a(s), y = k.indexOf("专业");
                                k.splice(y, 1);
                                var b = !1;
                                o.forEach(function(e) {
                                    Object.keys(e).forEach(function(t) {
                                        "合计" === e[t] && (b = !0);
                                    });
                                }), r.setData({
                                    allDataList: i,
                                    allList: o,
                                    countColorType: b,
                                    selectList: 1 == r.data.style ? u : t,
                                    chooseList: n(n({}, r.data.chooseList), h),
                                    requestNum: 2,
                                    all_key: s,
                                    all_DataKey: k,
                                    filterData: g,
                                    hit_title: l,
                                    btnFlag: !1
                                });
                            }
                        });

                      case 6:
                        r.setData({
                            dataIsLoad: !0
                        }), wx.hideLoading();

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, i);
            }))();
        },
        reLocation: function() {},
        getProvinceByLocation: function(e) {
            var t = this, a = this.data, i = a.isFullScreen, r = a.filterData, s = a.radioData, l = a.selectList;
            i && wx.showLoading({
                title: "正在定位"
            }), c.post(o.globalData.baseUrl + "/miniapp/region", e).then(function(e) {
                i && wx.hideLoading(), t.setData({
                    province_id: e.provinceid,
                    province_name: e.province
                }), r.forEach(function(t) {
                    "地区" != t.name && "省份" != t.name && "区域" != t.name || (t.val = e.province);
                }), t.setData({
                    filterData: r
                }), (s.includes("地区") || s.includes("省份") || s.includes("区域")) && l.forEach(function(t) {
                    "地区" != t.name && "省份" != t.name && "区域" != t.name || t.children.forEach(function(t) {
                        t.name == e.province && (t.check = !0);
                    });
                });
                var a = {};
                t.data.chooseList["地区"] ? a["地区"] = e.province : t.data.chooseList["省份"] ? a["省份"] = e.province : t.data.chooseList["区域"] && (a["区域"] = e.province), 
                t.setData({
                    reference: 1,
                    selectList: l,
                    chooseList: n({}, a)
                }), t.getSearch("radio");
            }).catch(function(e) {
                wx.hideLoading();
            });
        },
        handleScroll: function(e) {
            e.detail.scrollTop > 350 ? this.setData({
                topFixed: !0
            }) : this.setData({
                topFixed: !1
            });
        }
    }
});