var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/defineProperty"), i = t(require("../../../utils/http")), a = getApp(), n = new i.default.Http();

Component({
    properties: {
        scoreHeight: {
            type: Number,
            value: 500
        },
        isFullScreen: {
            type: Boolean,
            value: !0
        },
        showModel: {
            type: Boolean,
            value: !0
        },
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        showSearch: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        score_list: 1,
        entrance_line_alias: "投档线",
        areaText: "区域",
        areaId: -1,
        areaList: [],
        allProvinceList: [],
        currentPro: "安徽省",
        divitionText: "科类",
        divitionId: -1,
        divitionList: [],
        yearText: "年份",
        yearId: -1,
        yearList: [],
        campusText: "校区",
        campusId: -1,
        campusList: [],
        subjectList: [],
        subjectId: -1,
        subjectText: "学科",
        batchList: [],
        batch: "",
        batchText: "批次",
        enroll_type: 0,
        enrollTypeText: "类型",
        enrollTypeList: [],
        showSubject: !1,
        showArea: !0,
        showBatch: !1,
        showCampus: !1,
        showDivition: !1,
        showEnrollType: !1,
        showYear: !1,
        globalColor: "",
        activeIndex: -1,
        majorList: [],
        admissionLineList: [],
        showIndex: 0,
        isClick: !1,
        topNum: 0,
        isIphoneX: a.globalData.isIphoneX,
        disabledYear: !0,
        showPickerMask: !1,
        pickerType: "",
        yearVal: [ 0 ],
        batchVal: [ 0 ],
        campusVal: [ 0 ],
        subjectVal: [ 0 ]
    },
    lifetimes: {
        created: function() {
            this.setData({
                showModel: !0
            }), this.getConfig(), this.reLocation();
        }
    },
    methods: {
        openPickerMask: function(t) {
            var e = t.currentTarget.dataset.type;
            2 == this.data.score_list && this.getConfigByType(e), this.setData({
                pickerType: e,
                showPickerMask: !0
            });
        },
        handlePickerCancel: function() {
            this.setData({
                showPickerMask: !1
            });
        },
        handlePickerSure: function() {
            var t, e, i, a, n, o, s, c = this.data, l = c.pickerType, d = c.yearList, r = c.yearVal, u = c.batchList, h = c.batchVal, v = c.campusList, p = c.campusVal;
            switch (l) {
              case "year":
                s = d[r[0]], this.setData({
                    yearId: null !== (t = s) && void 0 !== t ? t : "",
                    yearText: s ? s + "年" : "请选择",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "campus":
                s = v[p[0]], this.setData({
                    campusId: null !== (e = null === (i = s) || void 0 === i ? void 0 : i.campus_id) && void 0 !== e ? e : -1,
                    campusText: null !== (a = null === (n = s) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : "校区",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "batch":
                s = u[h[0]], this.setData({
                    batch: null !== (o = s) && void 0 !== o ? o : "",
                    activeIndex: -1,
                    isClick: !0
                });
            }
            this.setData({
                showPickerMask: !1
            }), 2 == this.data.score_list && this.getConfig();
        },
        getConfigByType: function(t) {
            var e = this, i = this.data, o = i.areaId, s = i.yearId, c = i.campusId, l = i.subjectId, d = i.batch, r = i.enroll_type, u = i.divitionId;
            n.get(a.globalData.baseUrl + "/miniapp/score/config", {
                province_id: o > 0 ? o : "",
                year: "year" == t ? "" : s > 0 ? s : "",
                campus_id: "campus" == t ? "" : c > 0 ? c : "",
                batch: "batch" == t ? "" : d,
                enroll_type: "enroll_type" == t ? "" : r > 0 ? r : "",
                divition_id: "divition" == t ? "" : u > 0 ? u : "",
                subject_id: "subject" == t ? "" : l > 0 ? l : ""
            }).then(function(t) {
                var i = t.option.length > 0 ? t.option.split(",") : [], n = i.findIndex(function(t) {
                    return 1 == t;
                }) > -1, o = i.findIndex(function(t) {
                    return 2 == t;
                }) > -1, s = i.findIndex(function(t) {
                    return 3 == t;
                }) > -1, c = i.findIndex(function(t) {
                    return 4 == t;
                }) > -1, l = i.findIndex(function(t) {
                    return 5 == t;
                }) > -1, d = i.findIndex(function(t) {
                    return 6 == t;
                }) > -1, r = i.findIndex(function(t) {
                    return 7 == t;
                }) > -1;
                e.setData({
                    showEnrollType: n,
                    showArea: o,
                    showYear: s,
                    showCampus: c,
                    showBatch: l,
                    showDivition: d,
                    showSubject: r,
                    enrollTypeList: n ? t.enroll_type : [],
                    batchList: l ? t.batch : [],
                    areaList: o ? t.provinces : [],
                    divitionList: d ? t.divition : [],
                    subjectList: r ? t.subject : [],
                    yearList: s ? t.years : [],
                    campusList: c ? t.campus : [],
                    allProvinceList: t.all_province,
                    globalColor: a.globalData.globalColor,
                    score_list: t.score_list,
                    yearVal: [ 0 ],
                    batchVal: [ 0 ],
                    campusVal: [ 0 ]
                });
            });
        },
        openSearch: function() {
            this.setData({
                showModel: !0
            });
        },
        closeSearch: function() {
            this.setData({
                activeIndex: -1
            });
        },
        goSearch: function() {
            var t = this.data, e = t.showEnrollType, i = t.showArea, a = t.showYear, n = t.showCampus, o = t.showBatch, s = t.showDivition, c = t.areaId, l = t.divitionId, d = t.campusId, r = t.yearId, u = t.enroll_type, h = t.batch, v = t.subjectId, p = t.showSubject, b = {};
            b.enroll_type = e ? u : "", b.province_id = i ? c : "", b.year = a ? r : "", b.campus_id = n ? d : "", 
            b.batch = o ? h : "", b.divition_id = s ? l : "", b.subject_id = p ? v : "", wx.navigateTo({
                url: "/pages/scores-search/scores-search?province_id=".concat(b.province_id, "&divition_id=").concat(b.divition_id, "&subject_id=").concat(b.subject_id, "&campus_id=").concat(b.campus_id, "&batch=").concat(b.batch, "&year=").concat(b.year, "&enroll_type=").concat(b.enroll_type, "&search_cate=scores")
            });
        },
        tapMajor: function(t) {
            var e = t.currentTarget.dataset.index, i = e == this.data.showIndex ? -1 : e;
            this.setData({
                showIndex: i
            });
        },
        getProvinceByLocation: function(t) {
            var e = this;
            this.data.isFullScreen && wx.showLoading({
                title: "正在定位"
            }), n.post(a.globalData.baseUrl + "/miniapp/region", t).then(function(t) {
                e.data.isFullScreen && wx.hideLoading(), e.setData({
                    province_id: t.provinceid,
                    areaId: t.provinceid,
                    currentPro: t.province,
                    areaText: t.province,
                    activeIndex: -1,
                    isClick: !0
                }), e.getConfig(), e.getSearch(), wx.stopLocationUpdate(function() {
                    console.log("结束");
                });
            }).catch(function(t) {
                console.log("定位失败"), wx.hideLoading();
            });
        },
        reLocation: function() {
            var t = this;
            this.setData({
                divitionText: "科类",
                yearText: "年份",
                campusText: "校区",
                subjectText: "学科",
                activeIndex: -1,
                divitionId: -1,
                yearId: -1,
                campusId: -1,
                subjectId: -1,
                batch: "",
                enroll_type: -1,
                enrollTypeText: "类型",
                batchText: "批次"
            }), wx.authorize({
                scope: "scope.userLocation",
                success: function() {
                    wx.getLocation({
                        success: function(e) {
                            t.getProvinceByLocation({
                                latitude: e.latitude,
                                longitude: e.longitude
                            });
                        },
                        fail: function() {}
                    });
                },
                fail: function(e) {
                    wx.showModal({
                        title: "是否授权地理位置信息",
                        content: "需要获取您的地理位置信息，请确认授权",
                        success: function(e) {
                            e.confirm && wx.openSetting({
                                success: function(e) {
                                    e.authSetting["scope.userLocation"] ? wx.getLocation({
                                        success: function(e) {
                                            t.getProvinceByLocation({
                                                latitude: e.latitude,
                                                longitude: e.longitude
                                            });
                                        },
                                        fail: function() {}
                                    }) : wx.showToast({
                                        title: "授权失败",
                                        icon: "none",
                                        duration: 2e3
                                    });
                                },
                                fail: function(t) {
                                    console.log("授权报错", t);
                                },
                                complete: function(t) {
                                    console.log("完成", t);
                                }
                            });
                        }
                    });
                },
                complete: function(t) {
                    console.log("complete", t);
                }
            });
        },
        chooseItem: function(t) {
            var i = t.currentTarget.dataset, a = i.index, n = i.type, o = this.data, s = o.yearId, c = o.subjectId, l = o.divitionId, d = o.enroll_type, r = (o.areaId, 
            o.batch), u = o.campusId;
            if ("area" == n) {
                var h, v = this.data.areaList[a];
                this.setData((h = {
                    areaId: v.provinceid,
                    areaText: v.province,
                    activeIndex: -1,
                    isClick: !0,
                    divitionText: "科类",
                    subjectText: "学科",
                    yearText: "年份",
                    campusText: "校区"
                }, e(h, "activeIndex", -1), e(h, "divitionId", -1), e(h, "subjectId", -1), e(h, "yearId", -1), 
                e(h, "campusId", -1), e(h, "batch", ""), e(h, "enroll_type", -1), e(h, "enrollTypeText", "类型"), 
                e(h, "batchText", "批次"), h)), 2 == this.data.score_list && this.getConfig(), this.getSearch();
            } else if ("divition" == n) {
                var p, b, y, I, f = this.data.divitionList[a];
                l === f.divition_id && (f = {}), this.setData({
                    divitionId: null !== (p = null === (b = f) || void 0 === b ? void 0 : b.divition_id) && void 0 !== p ? p : -1,
                    divitionText: null !== (y = null === (I = f) || void 0 === I ? void 0 : I.name) && void 0 !== y ? y : "科类",
                    activeIndex: -1,
                    isClick: !0
                }), "新高考" != f.name && this.setData({
                    subjectId: -1,
                    subjectText: "学科"
                });
            } else if ("subject" == n) {
                var x, g, m, _, T = this.data.subjectList[a];
                c === T.id && (T = {}), this.setData({
                    subjectId: null !== (x = null === (g = T) || void 0 === g ? void 0 : g.id) && void 0 !== x ? x : -1,
                    subjectText: null !== (m = null === (_ = T) || void 0 === _ ? void 0 : _.name) && void 0 !== m ? m : "学科",
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("year" == n) {
                var w, L = this.data.yearList[a];
                L === s && (L = ""), this.setData({
                    yearId: null !== (w = L) && void 0 !== w ? w : "",
                    yearText: L ? L + "年" : "年份",
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("campus" == n) {
                var j, D, C, k, S = this.data.campusList[a];
                u === S.campus_id && (S = {}), this.setData({
                    campusId: null !== (j = null === (D = S) || void 0 === D ? void 0 : D.campus_id) && void 0 !== j ? j : -1,
                    campusText: null !== (C = null === (k = S) || void 0 === k ? void 0 : k.name) && void 0 !== C ? C : "校区",
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("enroll_type" == n) {
                var P, B, V, M, A = this.data.enrollTypeList[a];
                d === A.id && (A = {}), this.setData({
                    enroll_type: null !== (P = null === (B = A) || void 0 === B ? void 0 : B.id) && void 0 !== P ? P : -1,
                    enrollTypeText: null !== (V = null === (M = A) || void 0 === M ? void 0 : M.name) && void 0 !== V ? V : "类型",
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("batch" == n) {
                var Y, E = this.data.batchList[a];
                r === E && (E = ""), this.setData({
                    batch: null !== (Y = E) && void 0 !== Y ? Y : "",
                    activeIndex: -1,
                    isClick: !0
                });
            }
            this.getSearch();
        },
        tapNav: function(t) {
            var e = t.currentTarget.dataset, i = e.type, a = e.index;
            2 == this.data.score_list && this.getConfigByType(i), this.setData({
                activeIndex: a,
                isClick: !1
            });
        },
        bindAreaChange: function(t) {
            var i, a = t.detail.value, n = this.data.areaList[a];
            this.setData((i = {
                areaId: n.provinceid,
                areaText: n.province,
                activeIndex: -1,
                isClick: !0,
                divitionText: "科类",
                subjectText: "学科",
                yearText: "年份",
                campusText: "校区"
            }, e(i, "activeIndex", -1), e(i, "divitionId", -1), e(i, "subjectId", -1), e(i, "yearId", -1), 
            e(i, "campusId", -1), e(i, "batch", ""), e(i, "enroll_type", -1), e(i, "enrollTypeText", "类型"), 
            e(i, "batchText", "批次"), i)), 2 == this.data.score_list && this.getConfig();
        },
        bindYearChange: function(t) {
            var e = t.detail.value;
            this.setData({
                yearVal: e
            });
        },
        ss: function() {},
        bindCampusChange: function(t) {
            var e = t.detail.value;
            this.setData({
                campusVal: e
            });
        },
        bindBatchChange: function(t) {
            var e = t.detail.value;
            this.setData({
                batchVal: e
            });
        },
        handleEnroll: function(t) {
            var e, i, a, n, o = t.currentTarget.dataset.item;
            this.data.enroll_type === o.id && (o = {}), this.setData({
                enroll_type: null !== (e = null === (i = o) || void 0 === i ? void 0 : i.id) && void 0 !== e ? e : -1,
                enrollTypeText: null !== (a = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : "类型",
                activeIndex: -1,
                isClick: !0
            }), 2 == this.data.score_list && this.getConfig();
        },
        handleDivition: function(t) {
            var e, i, a, n, o = t.currentTarget.dataset.item;
            this.data.divitionId === o.divition_id && (o = {}), this.setData({
                divitionId: null !== (e = null === (i = o) || void 0 === i ? void 0 : i.divition_id) && void 0 !== e ? e : -1,
                divitionText: null !== (a = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : "科类",
                activeIndex: -1,
                isClick: !0
            }), "新高考" != o.name && this.setData({
                subjectId: -1,
                subjectText: "学科"
            }), 2 == this.data.score_list && this.getConfig();
        },
        handleSubject: function(t) {
            var e, i, a, n, o = t.currentTarget.dataset.item;
            this.data.subjectId === o.id && (o = {}), this.setData({
                subjectId: null !== (e = null === (i = o) || void 0 === i ? void 0 : i.id) && void 0 !== e ? e : -1,
                subjectText: null !== (a = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : "学科",
                activeIndex: -1,
                isClick: !0
            }), 2 == this.data.score_list && this.getConfig();
        },
        handleReset: function() {
            this.setData({
                yearId: -1,
                yearText: "年份",
                campusId: -1,
                campusText: "校区",
                batch: "",
                enroll_type: "",
                divitionId: -1,
                subjectId: -1,
                subjectText: "学科",
                divitionText: "科类"
            }), 2 == this.data.score_list && this.getConfig();
        },
        handleSure: function() {
            this.setData({
                showModel: !1
            }), this.getSearch();
        },
        getSearch: function() {
            var t = this, e = this.data, i = e.showEnrollType, o = e.showArea, s = e.showYear, c = e.showCampus, l = e.showBatch, d = e.showDivition, r = e.areaId, u = e.divitionId, h = e.campusId, v = e.yearId, p = e.enroll_type, b = e.batch, y = e.showSubject, I = e.subjectId, f = {};
            i && (f.enroll_type = p > 0 ? p : ""), o && (f.province_id = r > 0 ? r : ""), s && (f.year = v > 0 ? v : ""), 
            c && (f.campus_id = h > 0 ? h : ""), l && (f.batch = b || ""), d && (f.divition_id = u > 0 ? u : ""), 
            y && (f.subject_id = I > 0 ? I : ""), n.get(a.globalData.baseUrl + "/miniapp/score", f).then(function(e) {
                t.setData({
                    admissionLineList: e.data[1] ? e.data[1] : [],
                    majorList: e.data[2] ? e.data[2] : [],
                    entrance_line_alias: e.entrance_line_alias
                });
            });
        },
        getConfig: function() {
            var t = this, e = this.data, i = e.areaId, o = e.yearId, s = e.campusId, c = e.batch, l = e.enroll_type, d = e.divitionId, r = e.subjectId;
            n.get(a.globalData.baseUrl + "/miniapp/score/config", {
                province_id: i > 0 ? i : "",
                year: o > 0 ? o : "",
                campus_id: s > 0 ? s : "",
                batch: c,
                enroll_type: l > 0 ? l : "",
                divition_id: d > 0 ? d : "",
                subject_id: r > 0 ? r : ""
            }).then(function(e) {
                var i = e.option.length > 0 ? e.option.split(",") : [], n = i.findIndex(function(t) {
                    return 1 == t;
                }) > -1, o = i.findIndex(function(t) {
                    return 2 == t;
                }) > -1, s = i.findIndex(function(t) {
                    return 3 == t;
                }) > -1, c = i.findIndex(function(t) {
                    return 4 == t;
                }) > -1, l = i.findIndex(function(t) {
                    return 5 == t;
                }) > -1, d = i.findIndex(function(t) {
                    return 6 == t;
                }) > -1, r = i.findIndex(function(t) {
                    return 7 == t;
                }) > -1;
                t.setData({
                    showEnrollType: n,
                    showArea: o,
                    showYear: s,
                    showCampus: c,
                    showBatch: l,
                    showDivition: d,
                    showSubject: r,
                    enrollTypeList: n ? e.enroll_type : [],
                    batchList: l ? e.batch : [],
                    areaList: o ? e.provinces : [],
                    divitionList: d ? e.divition : [],
                    subjectList: r ? e.subject : [],
                    yearList: s ? e.years : [],
                    campusList: c ? e.campus : [],
                    allProvinceList: e.all_province,
                    globalColor: a.globalData.globalColor,
                    score_list: e.score_list
                }), 1 == t.data.score_list && t.setData({
                    campusId: c && (null == e ? void 0 : e.campus.length) > 0 ? e.campus[0].campus_id : "",
                    campusText: c && (null == e ? void 0 : e.campus.length) > 0 ? e.campus[0].name : "",
                    yearId: s && (null == e ? void 0 : e.years.length) > 0 ? e.years[e.years.length - 1] : "",
                    yearText: s && (null == e ? void 0 : e.years.length) > 0 ? e.years[e.years.length - 1] + "年" : "",
                    divitionId: d && (null == e ? void 0 : e.divition.length) > 0 ? e.divition[0].divition_id : "",
                    divitionText: d && (null == e ? void 0 : e.divition.length) > 0 ? e.divition[0].name : "",
                    subjectId: -1,
                    subjectText: "学科",
                    enroll_type: n ? e.enroll_type.length > 0 ? e.enroll_type[0].id : -1 : "",
                    enrollTypeText: n ? e.enroll_type.length > 0 ? e.enroll_type[0].name : "类型" : "",
                    batch: l ? e.batch.length > 0 ? e.batch[0] : "批次" : ""
                });
            });
        }
    }
});