var e, t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, i = require("../../../@babel/runtime/helpers/defineProperty"), a = t(require("../../../utils/http")), n = getApp(), o = new a.default.Http();

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
        showSearch: {
            type: Boolean,
            value: !0
        },
        searchType: {
            type: Number,
            value: "1",
            observer: function(e, t) {
                1 == e ? (this.setData({
                    secConfigUrl: "/miniapp/enroll_plan/config",
                    secUrl: "/miniapp/enroll_plan"
                }), this.getConfig(), this.reLocation()) : 2 == e && (this.setData({
                    secConfigUrl: "/miniapp/score/config",
                    secUrl: "/miniapp/score"
                }), this.getConfig(), this.reLocation());
            }
        }
    },
    data: (e = {
        secConfigUrl: "/miniapp/enroll_plan/config",
        secUrl: "/miniapp/enroll_plan",
        score_list: 1,
        score_style: 1,
        enroll_plan_list: 1,
        enroll_plan_style: 1,
        entrance_line_alias: "投档线",
        activeIndex: -1,
        currentPro: "安徽省",
        areaText: "区域",
        areaId: -1,
        areaList: [],
        allProvinceList: [],
        subjectText: "",
        subjectId: -1,
        subjectList: [],
        yearText: "年份",
        yearId: -1,
        yearList: [],
        campusText: "校区",
        campusId: -1,
        campusList: [],
        divitionId: -1,
        divitionText: "",
        divitionList: [],
        batchList: [],
        batch: "",
        batchText: "批次",
        enroll_type: 0,
        enrollTypeText: "",
        enrollTypeList: [],
        yearVal: [ 0 ],
        batchVal: [ 0 ],
        campusVal: [ 0 ],
        divitionVal: [ 0 ],
        subjectVal: [ 0 ],
        enrollTypeVal: [ 0 ],
        showSubject: !1,
        showArea: !0,
        showBatch: !1,
        showCampus: !1,
        showDivition: !1,
        showEnrollType: !1,
        showYear: !1,
        globalColor: "",
        majorList: [],
        admissionLineList: [],
        allList: [],
        isClick: !1,
        topNum: 0
    }, i(e, "enroll_plan_list", 1), i(e, "isIphoneX", n.globalData.isIphoneX), i(e, "showPickerMask", !1), 
    i(e, "pickerType", ""), i(e, "topFixed", !1), i(e, "custom_key", []), i(e, "diyConfig", ""), 
    e),
    lifetimes: {
        ready: function() {
            var e = this;
            wx.getStorage({
                key: "globalCondig",
                success: function(t) {
                    e.setData({
                        diyConfig: t.data
                    });
                }
            });
        }
    },
    methods: {
        openPickerMask: function(e) {
            var t = this.data, i = t.score_list, a = t.enroll_plan_list, n = e.currentTarget.dataset.type;
            2 != i && 2 != a || this.getConfigByType(n), this.setData({
                pickerType: n,
                showPickerMask: !0
            });
        },
        handlePickerCancel: function() {
            this.setData({
                showPickerMask: !1
            });
        },
        handlePickerSure: function() {
            var e, t, i, a, n, o, s, l, c, r, d, u, h, p, v, y, f, _, b, g = this.data, x = g.pickerType, I = g.yearList, m = g.yearVal, T = g.batchList, L = g.batchVal, w = g.campusList, C = g.campusVal, D = g.divitionList, k = g.enrollTypeList, j = g.divitionVal, S = g.enrollTypeVal, V = g.subjectVal, P = g.subjectList;
            switch (x) {
              case "year":
                b = I[m[0]], this.setData({
                    yearId: null !== (e = b) && void 0 !== e ? e : "",
                    yearText: b ? b + "年" : "请选择",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "campus":
                b = w[C[0]], this.setData({
                    campusId: null !== (t = null === (i = b) || void 0 === i ? void 0 : i.campus_id) && void 0 !== t ? t : -1,
                    campusText: null !== (a = null === (n = b) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : "",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "batch":
                b = T[L[0]], this.setData({
                    batch: null !== (o = b) && void 0 !== o ? o : "",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "divition":
                b = D[j[0]], this.setData({
                    divitionId: null !== (s = null === (l = b) || void 0 === l ? void 0 : l.divition_id) && void 0 !== s ? s : -1,
                    divitionText: null !== (c = null === (r = b) || void 0 === r ? void 0 : r.name) && void 0 !== c ? c : "",
                    isClick: !0
                });
                break;

              case "subject":
                b = P[V[0]], this.setData({
                    subjectId: null !== (d = null === (u = b) || void 0 === u ? void 0 : u.id) && void 0 !== d ? d : -1,
                    subjectText: null !== (h = null === (p = b) || void 0 === p ? void 0 : p.name) && void 0 !== h ? h : "",
                    isClick: !0
                });
                break;

              case "enroll_type":
                b = k[S[0]], this.setData({
                    enroll_type: null !== (v = null === (y = b) || void 0 === y ? void 0 : y.id) && void 0 !== v ? v : -1,
                    enrollTypeText: null !== (f = null === (_ = b) || void 0 === _ ? void 0 : _.name) && void 0 !== f ? f : "",
                    isClick: !0
                });
            }
            this.setData({
                showPickerMask: !1
            }), 2 == this.data.score_type && this.getConfig(), this.getSearch();
        },
        getConfigByType: function(e) {
            var t = this;
            "divition" == e && this.setData({
                subjectId: -1
            });
            var i = this.data, a = i.areaId, s = i.yearId, l = i.campusId, c = i.batch, r = i.enroll_type, d = i.divitionId, u = i.subjectId;
            o.get(n.globalData.baseUrl + this.data.secConfigUrl, {
                province_id: a > 0 ? a : "",
                year: "year" == e ? "" : s > 0 ? s : "",
                campus_id: "campus" == e ? "" : l > 0 ? l : "",
                batch: "batch" == e ? "" : c,
                enroll_type: "enroll_type" == e ? "" : r > 0 ? r : "",
                divition_id: "divition" == e ? "" : d > 0 ? d : "",
                subject_id: "subject" == e ? "" : u > 0 ? u : ""
            }).then(function(e) {
                var i, a, o, s, l = e.option.length > 0 ? e.option.split(",") : [], c = l.findIndex(function(e) {
                    return 1 == e;
                }) > -1, r = l.findIndex(function(e) {
                    return 2 == e;
                }) > -1, d = l.findIndex(function(e) {
                    return 3 == e;
                }) > -1, u = l.findIndex(function(e) {
                    return 4 == e;
                }) > -1, h = l.findIndex(function(e) {
                    return 5 == e;
                }) > -1, p = l.findIndex(function(e) {
                    return 6 == e;
                }) > -1, v = l.findIndex(function(e) {
                    return 7 == e;
                }) > -1;
                t.setData({
                    showEnrollType: c,
                    showArea: r,
                    showYear: d,
                    showCampus: u,
                    showBatch: h,
                    showDivition: p,
                    showSubject: v,
                    enrollTypeList: c ? e.enroll_type : [],
                    batchList: h ? e.batch : [],
                    areaList: r ? e.provinces : [],
                    divitionList: p ? e.divition : [],
                    subjectList: v ? e.subject : [],
                    yearList: d ? e.years : [],
                    campusList: u ? e.campus : [],
                    allProvinceList: e.all_province,
                    globalColor: n.globalData.globalColor,
                    score_list: null !== (i = null == e ? void 0 : e.score_list) && void 0 !== i ? i : "",
                    score_style: null !== (a = null == e ? void 0 : e.score_style) && void 0 !== a ? a : "",
                    enroll_plan_style: null !== (o = null == e ? void 0 : e.enroll_plan_style) && void 0 !== o ? o : "",
                    enroll_plan_list: null !== (s = null == e ? void 0 : e.enroll_plan_list) && void 0 !== s ? s : "",
                    yearVal: [ 0 ],
                    batchVal: [ 0 ],
                    campusVal: [ 0 ],
                    divitionVal: [ 0 ],
                    enrollTypeVal: [ 0 ],
                    subjectVal: [ 0 ]
                });
            });
        },
        goSearch: function() {
            var e = this.data, t = e.showEnrollType, i = e.showArea, a = e.showYear, n = e.showCampus, o = e.showBatch, s = e.showDivition, l = e.showSubject, c = e.areaId, r = e.divitionId, d = e.subjectId, u = e.campusId, h = e.yearId, p = e.enroll_type, v = e.batch, y = {};
            y.enroll_type = t ? p : "", y.province_id = i ? c : "", y.year = a ? h : "", y.campus_id = n ? u : "", 
            y.batch = o ? v : "", y.divition_id = s ? r : "", y.subject_id = l ? d : "", y.search_cate = 1 == this.properties.searchType ? "enroll-plan" : "scores", 
            wx.navigateTo({
                url: "/pages/scores-search/scores-search?province_id=".concat(y.province_id, "&divition_id=").concat(y.divition_id, "&subject_id=").concat(y.subject_id, "&campus_id=").concat(y.campus_id, "&batch=").concat(y.batch, "&year=").concat(y.year, "&enroll_type=").concat(y.enroll_type, "&search_cate=").concat(y.search_cate)
            });
        },
        getProvinceByLocation: function(e) {
            var t = this;
            this.data.isFullScreen && wx.showLoading({
                title: "正在定位"
            }), o.post(n.globalData.baseUrl + "/miniapp/region", e).then(function(e) {
                t.data.isFullScreen && wx.hideLoading(), t.setData({
                    province_id: e.provinceid,
                    areaId: e.provinceid,
                    currentPro: e.province,
                    areaText: e.province,
                    activeIndex: -1,
                    isClick: !0
                }), t.getConfig(), t.getSearch(), wx.stopLocationUpdate(function() {});
            }).catch(function(e) {
                console.log("定位失败"), wx.hideLoading();
            });
        },
        reLocation: function() {
            var e = this;
            this.setData({
                divitionText: "科类",
                yearText: "年份",
                campusText: "校区",
                activeIndex: -1,
                divitionId: -1,
                yearId: -1,
                campusId: -1,
                batch: "",
                enroll_type: 0,
                enrollTypeText: "类型",
                batchText: "批次",
                courseText: "学科",
                courseId: -1
            }), wx.authorize({
                scope: "scope.userLocation",
                success: function() {
                    wx.getLocation({
                        success: function(t) {
                            e.getProvinceByLocation({
                                latitude: t.latitude,
                                longitude: t.longitude
                            });
                        },
                        fail: function() {}
                    });
                },
                fail: function(t) {
                    wx.showModal({
                        title: "是否授权地理位置信息",
                        content: "需要获取您的地理位置信息，请确认授权",
                        success: function(t) {
                            t.confirm && wx.openSetting({
                                success: function(t) {
                                    t.authSetting["scope.userLocation"] ? wx.getLocation({
                                        success: function(t) {
                                            e.getProvinceByLocation({
                                                latitude: t.latitude,
                                                longitude: t.longitude
                                            });
                                        },
                                        fail: function() {}
                                    }) : wx.showToast({
                                        title: "授权失败",
                                        icon: "none",
                                        duration: 2e3
                                    });
                                },
                                fail: function(e) {
                                    console.log("授权报错", e);
                                },
                                complete: function(e) {
                                    console.log("完成", e);
                                }
                            });
                        }
                    });
                },
                complete: function(e) {
                    console.log("complete", e);
                }
            });
        },
        chooseItem: function(e) {
            var t = e.currentTarget.dataset, a = t.index, n = t.type;
            if ("area" == n) {
                var o, s = this.data.areaList[a];
                this.setData((o = {
                    areaId: s.provinceid,
                    areaText: s.province,
                    activeIndex: -1,
                    isClick: !0,
                    divitionText: "科类",
                    yearText: "年份",
                    campusText: "校区"
                }, i(o, "activeIndex", -1), i(o, "divitionId", -1), i(o, "yearId", -1), i(o, "campusId", -1), 
                i(o, "batch", ""), i(o, "enroll_type", 0), i(o, "enrollTypeText", "类型"), i(o, "batchText", "批次"), 
                o)), this.getConfig(), this.getSearch();
            } else if ("divition" == n) {
                var l = this.data.divitionList[a];
                this.setData({
                    divitionId: l.divition_id,
                    divitionText: l.name,
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("year" == n) {
                var c = this.data.yearList[a];
                this.setData({
                    yearId: c,
                    yearText: c + "年",
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("campus" == n) {
                var r = this.data.campusList[a];
                this.setData({
                    campusId: r.campus_id,
                    campusText: r.name,
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("enroll_type" == n) {
                var d = this.data.enrollTypeList[a];
                this.setData({
                    enroll_type: d.id,
                    enrollTypeText: d.name,
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("batch" == n) {
                var u = this.data.batchList[a];
                this.setData({
                    batch: u,
                    activeIndex: -1,
                    isClick: !0
                });
            }
            this.getSearch();
        },
        tapNav: function(e) {
            var t = e.currentTarget.dataset, i = t.type, a = t.index;
            this.getConfigByType(i), this.setData({
                activeIndex: a,
                isClick: !1
            });
        },
        bindAreaChange: function(e) {
            var t, a = e.detail.value, n = this.data.areaList[a];
            this.setData((t = {
                areaId: n.provinceid,
                areaText: n.province,
                activeIndex: -1,
                isClick: !0,
                divitionText: "",
                yearText: "年份",
                campusText: "校区",
                subjectText: "学科"
            }, i(t, "activeIndex", -1), i(t, "divitionId", -1), i(t, "subjectId", -1), i(t, "yearId", -1), 
            i(t, "campusId", -1), i(t, "batch", ""), i(t, "enroll_type", 0), i(t, "enrollTypeText", ""), 
            i(t, "batchText", "批次"), t)), this.getConfig(), this.getSearch();
        },
        handleScroll: function(e) {
            e.detail.scrollTop > 350 ? this.setData({
                topFixed: !0
            }) : this.setData({
                topFixed: !1
            });
        },
        bindYearChange: function(e) {
            var t = e.detail.value;
            this.setData({
                yearVal: t
            });
        },
        ss: function() {},
        bindCampusChange: function(e) {
            var t = e.detail.value;
            this.setData({
                campusVal: t
            });
        },
        bindBatchChange: function(e) {
            var t = e.detail.value;
            this.setData({
                batchVal: t
            });
        },
        bindEnrollTypeChange: function(e) {
            var t = e.detail.value;
            this.setData({
                enrollTypeVal: t
            });
        },
        bindDivitionChange: function(e) {
            var t = e.detail.value;
            this.setData({
                divitionVal: t
            });
        },
        bindSubjectChange: function(e) {
            var t = e.detail.value;
            this.setData({
                subjectVal: t
            });
        },
        handleReset: function() {
            this.setData({
                yearId: -1,
                yearText: "年份",
                campusId: -1,
                campusText: "校区",
                batch: "",
                enroll_type: "类型",
                divitionId: "",
                subjectId: ""
            }), this.getConfig();
        },
        handleSure: function() {
            this.setData({
                showModel: !1
            }), this.getSearch();
        },
        getSearch: function() {
            var e = this, t = this.data, i = t.showEnrollType, a = t.showArea, s = t.showYear, l = t.showCampus, c = t.showBatch, r = t.showDivition, d = t.showSubject, u = t.areaId, h = t.divitionId, p = t.subjectId, v = t.campusId, y = t.yearId, f = t.enroll_type, _ = t.batch, b = {};
            i && (b.enroll_type = f > 0 ? f : ""), a && (b.province_id = u > 0 ? u : ""), s && (b.year = y > 0 ? y : ""), 
            l && (b.campus_id = v > 0 ? v : ""), c && (b.batch = _ || ""), r && (b.divition_id = h > 0 ? h : ""), 
            d && (b.subject_id = p > 0 ? p : ""), o.get(n.globalData.baseUrl + this.data.secUrl, b).then(function(t) {
                if (2 == e.properties.searchType) {
                    var i = t.data[1] ? t.data[1] : [], a = t.data[2] ? t.data[2] : [];
                    e.setData({
                        admissionLineList: i,
                        majorList: a,
                        custom_key: t.custom_key,
                        allList: i.concat(a),
                        entrance_line_alias: t.entrance_line_alias
                    });
                } else 1 == e.properties.searchType && e.setData({
                    allList: null == t ? void 0 : t.data,
                    custom_key: null == t ? void 0 : t.custom_key,
                    entrance_line_alias: null == t ? void 0 : t.entrance_line_alias
                });
            });
        },
        getConfig: function() {
            var e = this, t = this.data, i = t.areaId, a = t.yearId, s = t.campusId, l = t.batch, c = t.enroll_type, r = t.divitionId, d = t.subjectId;
            o.get(n.globalData.baseUrl + this.data.secConfigUrl, {
                province_id: i > 0 ? i : "",
                year: a > 0 ? a : "",
                campus_id: s > 0 ? s : "",
                batch: l,
                enroll_type: c > 0 ? c : "",
                divition_id: r > 0 ? r : "",
                subject_id: d > 0 ? d : ""
            }).then(function(t) {
                var i, a, o, s, l = t.option.length > 0 ? t.option.split(",") : [], c = l.findIndex(function(e) {
                    return 1 == e;
                }) > -1, r = l.findIndex(function(e) {
                    return 2 == e;
                }) > -1, d = l.findIndex(function(e) {
                    return 3 == e;
                }) > -1, u = l.findIndex(function(e) {
                    return 4 == e;
                }) > -1, h = l.findIndex(function(e) {
                    return 5 == e;
                }) > -1, p = l.findIndex(function(e) {
                    return 6 == e;
                }) > -1, v = l.findIndex(function(e) {
                    return 7 == e;
                }) > -1;
                e.setData({
                    showEnrollType: c,
                    showArea: r,
                    showYear: d,
                    showCampus: u,
                    showBatch: h,
                    showDivition: p,
                    showSubject: v,
                    enrollTypeList: c ? t.enroll_type : [],
                    batchList: h ? t.batch : [],
                    areaList: r ? t.provinces : [],
                    divitionList: p ? t.divition : [],
                    subjectList: v ? t.subject : [],
                    yearList: d ? t.years : [],
                    campusList: u ? t.campus : [],
                    allProvinceList: t.all_province,
                    globalColor: n.globalData.globalColor,
                    score_list: null !== (i = null == t ? void 0 : t.score_list) && void 0 !== i ? i : "",
                    score_style: null !== (a = null == t ? void 0 : t.score_style) && void 0 !== a ? a : "",
                    enroll_plan_style: null !== (o = null == t ? void 0 : t.enroll_plan_style) && void 0 !== o ? o : "",
                    enroll_plan_list: null !== (s = null == t ? void 0 : t.enroll_plan_list) && void 0 !== s ? s : ""
                });
            });
        }
    }
});