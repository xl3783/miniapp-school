var t, e = require("../../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../../@babel/runtime/helpers/defineProperty"), i = e(require("../../../utils/http")), n = getApp(), o = new i.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 700
        },
        pageColor: {
            type: String,
            value: "#F3F5F8"
        },
        major_name: {
            type: String,
            value: ""
        },
        showSearch: {
            type: Boolean,
            value: !0
        },
        planType: {
            type: Number,
            value: 2
        },
        isFullScreen: {
            type: Boolean,
            value: !0
        }
    },
    data: (t = {
        total_num: 0,
        major_num: 0,
        province_num: 0,
        list: [],
        toggleAnimationData: {},
        activeIndex1: 0,
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
        globalColor: "",
        showIndex: 0,
        isClick: !1,
        showModel: !1
    }, a(t, "globalColor", n.globalData.globalColor), a(t, "enroll_plan_list", 1), a(t, "isIphoneX", n.globalData.isIphoneX), 
    a(t, "disabledYear", !0), a(t, "isInit", !0), t),
    pageLifetimes: {
        show: function() {
            this.handleInit();
        }
    },
    lifetimes: {
        attached: function() {
            this.handleInit();
        }
    },
    methods: {
        handleInit: function() {
            var t = this;
            wx.getStorage({
                key: "init-enroll-plan",
                success: function(e) {
                    var a = e.data, i = a.areaId, n = a.batch, o = a.enroll_type, s = a.subjectId, c = a.divitionId, l = a.yearId, r = a.yearText, d = a.areaText, u = a.subjectText, p = a.divitionText, h = a.campusText, v = a.campusId, I = a.enroll_plan_list;
                    t.setData({
                        showModel: !1,
                        batch: n,
                        enroll_type: o,
                        yearId: l,
                        yearText: r,
                        areaId: i,
                        areaText: d,
                        subjectId: s,
                        subjectText: u,
                        divitionId: c,
                        divitionText: p,
                        campusText: h,
                        campusId: v,
                        enroll_plan_list: I,
                        isInit: !1
                    }), t.getConfig(), t.getDataInfo();
                },
                fail: function(e) {
                    t.setData({
                        isInit: !0
                    }), t.getConfig(), t.reLocation(), 2 == t.data.enroll_plan_list && t.setData({
                        showModel: !0
                    });
                }
            });
        },
        tapItem: function(t) {
            var e, a = t.currentTarget.dataset.index, i = this.data.activeIndex1, n = wx.createAnimation({
                duration: 1e3,
                timingFunction: "ease-out"
            });
            a == i && -1 != i ? (e = -1, n.opacity(0).height("0rpx").step()) : (e = a, n.opacity(1).height("114rpx").step()), 
            this.setData({
                activeIndex1: e,
                toggleAnimationData: n.export()
            });
        },
        openPickerMask: function(t) {
            var e = t.currentTarget.dataset.type;
            this.getConfigByType(e), this.setData({
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
            var t, e, a, i, n, o, s, c = this.data, l = c.pickerType, r = c.yearList, d = c.yearVal, u = c.batchList, p = c.batchVal, h = c.campusList, v = c.campusVal;
            switch (l) {
              case "year":
                s = r[d[0]], this.setData({
                    yearId: null !== (t = s) && void 0 !== t ? t : "",
                    yearText: s > 0 ? s + "年" : "",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "campus":
                s = h[v[0]], this.setData({
                    campusId: null !== (e = null === (a = s) || void 0 === a ? void 0 : a.campus_id) && void 0 !== e ? e : -1,
                    campusText: null !== (i = null === (n = s) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "",
                    activeIndex: -1,
                    isClick: !0
                });
                break;

              case "batch":
                s = u[p[0]], this.setData({
                    batch: null !== (o = s) && void 0 !== o ? o : "",
                    activeIndex: -1,
                    isClick: !0
                });
            }
            this.setData({
                showPickerMask: !1
            }), this.getConfig();
        },
        getConfigByType: function(t) {
            var e = this, a = this.data, i = a.areaId, s = a.yearId, c = a.campusId, l = a.subjectId, r = a.batch, d = a.enroll_type, u = a.divitionId;
            o.get(n.globalData.baseUrl + "/miniapp/enroll_plan/config", {
                province_id: i > 0 ? i : "",
                year: "year" == t ? "" : s > 0 ? s : "",
                campus_id: "campus" == t ? "" : c > 0 ? c : "",
                batch: "batch" == t ? "" : r,
                enroll_type: "enroll_type" == t ? "" : d > 0 ? d : "",
                divition_id: "divition" == t ? "" : u > 0 ? u : "",
                subject_id: "subject" == t ? "" : l > 0 ? l : ""
            }).then(function(t) {
                var a = t.option.length > 0 ? t.option.split(",") : [], i = a.findIndex(function(t) {
                    return 1 == t;
                }) > -1, o = a.findIndex(function(t) {
                    return 2 == t;
                }) > -1, s = a.findIndex(function(t) {
                    return 3 == t;
                }) > -1, c = a.findIndex(function(t) {
                    return 4 == t;
                }) > -1, l = a.findIndex(function(t) {
                    return 5 == t;
                }) > -1, r = (a.findIndex(function(t) {
                    return 6 == t;
                }), a.findIndex(function(t) {
                    return 7 == t;
                }) > -1);
                c && t.campus.length > 0 && t.campus[0], s && t.years.length > 0 && t.years[t.years.length - 1], 
                r && t.divition && t.divition[0];
                e.setData({
                    showEnrollType: i,
                    showArea: o,
                    showYear: s,
                    showCampus: c,
                    showBatch: l,
                    showSubject: r,
                    enrollTypeList: i ? t.enroll_type : [],
                    batchList: l ? t.batch : [],
                    areaList: o ? t.provinces : [],
                    subjectList: r ? t.divition : [],
                    yearList: s ? t.years : [],
                    campusList: c ? t.campus : [],
                    allProvinceList: t.all_province,
                    globalColor: n.globalData.globalColor,
                    enroll_plan_list: t.enroll_plan_list,
                    yearVal: [ 0 ],
                    batchVal: [ 0 ],
                    campusVal: [ 0 ]
                });
            });
        },
        getProvinceByLocation: function(t) {
            var e = this;
            wx.showLoading({
                title: "正在定位"
            }), o.post(n.globalData.baseUrl + "/miniapp/region", t).then(function(t) {
                wx.hideLoading(), e.setData({
                    province_id: t.provinceid,
                    areaId: t.provinceid,
                    currentPro: t.province,
                    areaText: t.province,
                    activeIndex: -1,
                    isClick: !0
                }), e.getConfig(), e.getDataInfo(), wx.stopLocationUpdate(function() {});
            }).catch(function(t) {
                wx.hideLoading();
            });
        },
        reLocation: function() {
            var t = this;
            wx.authorize({
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
                }
            });
        },
        getConfig: function() {
            var t = this, e = this.data, a = e.areaId, i = e.yearId, s = e.campusId, c = e.batch, l = e.enroll_type, r = e.divitionId, d = e.subjectId;
            o.get(n.globalData.baseUrl + "/miniapp/enroll_plan/config", {
                province_id: a > 0 ? a : "",
                year: i > 0 ? i : "",
                campus_id: s > 0 ? s : "",
                batch: c,
                enroll_type: l > 0 ? l : "",
                divition_id: r > 0 ? r : "",
                subject_id: d > 0 ? d : ""
            }).then(function(e) {
                var a = e.option.length > 0 ? e.option.split(",") : [], i = a.findIndex(function(t) {
                    return 1 == t;
                }) > -1, o = a.findIndex(function(t) {
                    return 2 == t;
                }) > -1, s = a.findIndex(function(t) {
                    return 3 == t;
                }) > -1, c = a.findIndex(function(t) {
                    return 4 == t;
                }) > -1, l = a.findIndex(function(t) {
                    return 5 == t;
                }) > -1, r = a.findIndex(function(t) {
                    return 6 == t;
                }) > -1, d = a.findIndex(function(t) {
                    return 7 == t;
                }) > -1;
                t.setData({
                    showEnrollType: i,
                    showArea: o,
                    showYear: s,
                    showCampus: c,
                    showBatch: l,
                    showSubject: d,
                    showDivition: r,
                    enrollTypeList: i ? e.enroll_type : [],
                    batchList: l ? e.batch : [],
                    areaList: o ? e.provinces : [],
                    subjectList: d ? e.subject : [],
                    divitionList: r ? e.divition : [],
                    yearList: s ? e.years : [],
                    campusList: c ? e.campus : [],
                    allProvinceList: e.all_province,
                    globalColor: n.globalData.globalColor,
                    enroll_plan_list: e.enroll_plan_list
                }), 1 == t.data.enroll_plan_list && t.data.isInit && t.setData({
                    campusId: c && (null == e ? void 0 : e.campus.length) > 0 ? e.campus[0].campus_id : "",
                    campusText: c && (null == e ? void 0 : e.campus.length) > 0 ? e.campus[0].name : "",
                    yearId: s && (null == e ? void 0 : e.years.length) > 0 ? e.years[e.years.length - 1] : "",
                    yearText: s && (null == e ? void 0 : e.years.length) > 0 ? e.years[e.years.length - 1] + "年" : "",
                    divitionId: r && (null == e ? void 0 : e.divition.length) > 0 ? e.divition[0].divition_id : "",
                    divitionText: r && (null == e ? void 0 : e.divition.length) > 0 ? e.divition[0].name : "",
                    subjectId: -1,
                    subjectText: "学科",
                    enroll_type: i ? e.enroll_type.length > 0 ? e.enroll_type[0].id : -1 : "",
                    enrollTypeText: i ? e.enroll_type.length > 0 ? e.enroll_type[0].name : "类型" : "",
                    batch: l ? e.batch.length > 0 ? e.batch[0] : "批次" : ""
                });
            });
        },
        bindAreaChange: function(t) {
            var e, i = t.detail.value, n = this.data.areaList[i];
            this.setData((e = {
                areaId: n.provinceid,
                areaText: n.province,
                activeIndex: -1,
                isClick: !0,
                divitionText: "科类",
                subjectText: "学科",
                yearText: "年份",
                campusText: "校区"
            }, a(e, "activeIndex", -1), a(e, "divitionId", -1), a(e, "subjectId", -1), a(e, "yearId", -1), 
            a(e, "campusId", -1), a(e, "batch", ""), a(e, "enroll_type", 0), a(e, "enrollTypeText", "类型"), 
            a(e, "batchText", "批次"), e)), this.getConfig();
        },
        bindYearChange: function(t) {
            var e = t.detail.value;
            this.setData({
                yearVal: e
            });
        },
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
            var e, a, i, n, o = t.currentTarget.dataset.item;
            this.data.enroll_type == o.id && (o = {}), this.setData({
                enroll_type: null !== (e = null === (a = o) || void 0 === a ? void 0 : a.id) && void 0 !== e ? e : -1,
                enrollTypeText: null !== (i = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "类型",
                activeIndex: -1,
                isClick: !0
            }), this.getConfig();
        },
        handleDivition: function(t) {
            var e, a, i, n, o = t.currentTarget.dataset.item;
            this.data.divitionId == o.divition_id && (o = {}), this.setData({
                divitionId: null !== (e = null === (a = o) || void 0 === a ? void 0 : a.divition_id) && void 0 !== e ? e : -1,
                divitionText: null !== (i = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "科类",
                activeIndex: -1,
                isClick: !0
            }), "新高考" != o.name && this.setData({
                subjectId: -1,
                subjectText: "学科"
            }), this.getConfig();
        },
        handleSubject: function(t) {
            var e, a, i, n, o = t.currentTarget.dataset.item;
            this.data.subjectId == o.id && (o = {}), this.setData({
                subjectId: null !== (e = null === (a = o) || void 0 === a ? void 0 : a.id) && void 0 !== e ? e : -1,
                subjectText: null !== (i = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "学科",
                activeIndex: -1,
                isClick: !0
            }), this.getConfig();
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
            }), this.getConfig();
        },
        goPlanSearch: function() {
            if (1 == this.data.enroll_plan_list) {
                var t = this.data, e = t.areaId, a = t.areaText, i = t.subjectId, n = t.subjectText, o = t.divitionId, s = t.divitionText, c = t.campusId, l = t.campusText, r = t.yearId, d = t.enroll_type, u = t.batch;
                wx.navigateTo({
                    url: "/pages/enroll-plan-search/enroll-plan-search?subjectId=".concat(i, "&subjectText=").concat(n, "&divitionId=").concat(o, "&divitionText=").concat(s, "&yearId=").concat(r, "&campusId=").concat(c, "&campusText=").concat(l, "&areaId=").concat(e, "&areaText=").concat(a, "&enroll_type=").concat(d, "&batch=").concat(u)
                });
            } else this.setData({
                showModel: !0
            });
        },
        handleSure: function() {
            this.setData({
                showModel: !1,
                isClick: !1
            }), this.getDataInfo();
            var t = this.data, e = t.areaId, a = t.yearId, i = t.yearText, n = t.campusId, o = t.campusText, s = t.batch, c = t.enroll_type, l = t.subjectId, r = t.areaText, d = t.subjectText, u = {
                areaId: e,
                yearId: a,
                yearText: i,
                campusId: n,
                campusText: o,
                batch: s,
                enroll_type: c,
                subjectId: l,
                areaText: r,
                divitionId: t.divitionId,
                subjectText: d,
                divitionText: t.divitionText
            };
            wx.setStorage({
                key: "init-enroll-plan",
                data: u
            });
        },
        goMajorSearch: function() {
            var t = this.data, e = t.areaId, a = t.yearId, i = t.batch, n = t.enroll_type, o = t.campusId, s = t.subjectId, c = t.divitionId;
            wx.navigateTo({
                url: "/pages/scores-search/scores-search?province_id=".concat(e, "&divition_id=").concat(c, "&subject_id=").concat(s, "&campus_id=").concat(o, "&batch=").concat(i, "&year=").concat(a, "&enroll_type=").concat(n, "&search_cate=enroll-plan&planType=2")
            });
        },
        getDataInfo: function() {
            var t = this, e = t.data, a = e.areaId, i = e.yearId, s = e.campusId, c = e.divitionId, l = e.subjectId, r = e.batch, d = e.enroll_type, u = {
                province_id: a > 0 ? a : "",
                divition_id: c > 0 ? c : "",
                subject_id: l > 0 ? l : "",
                campus_id: s > 0 ? s : "",
                year: i > 0 ? i : "",
                enroll_type: d > 0 ? d : "",
                batch: -1 != r ? r : "",
                major_name: e.major_name
            };
            o.get(n.globalData.baseUrl + "/miniapp/enroll_plan", u).then(function(e) {
                var a = e.data, i = void 0 === a ? [] : a, n = e.total_num, o = void 0 === n ? 0 : n, s = e.major_num, c = void 0 === s ? 0 : s, l = e.province_num, r = void 0 === l ? 0 : l;
                t.setData({
                    list: i,
                    total_num: o,
                    major_num: c,
                    province_num: r
                });
            });
        },
        tapNav: function(t) {
            var e = t.currentTarget.dataset, a = e.index, i = e.type;
            this.getConfigByType(i), this.setData({
                activeIndex: a,
                isClick: !1
            });
        },
        chooseItem: function(t) {
            var e = t.currentTarget.dataset, a = e.index, i = e.type;
            if ("area" == i) {
                var n = this.data.areaList[a];
                this.setData({
                    areaId: n.provinceid,
                    areaText: n.province,
                    activeIndex: -1,
                    subjectId: -1,
                    yearId: -1,
                    yearText: "",
                    subjectText: "",
                    campusText: "",
                    campusId: -1,
                    isClick: !1
                }), this.getConfig();
            } else if ("divition" == i) {
                var o = this.data.divitionList[a];
                this.setData({
                    divitionId: o.divition_id,
                    divitionText: o.name,
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("subject" == i) {
                var s = this.data.subjectList[a];
                this.setData({
                    subjectId: s.id,
                    subjectText: s.name,
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("year" == i) {
                var c = this.data.yearList[a];
                this.setData({
                    yearId: c,
                    yearText: c + "年",
                    activeIndex: -1,
                    isClick: !0
                });
            } else if ("campus" == i) {
                var l = this.data.campusList[a];
                this.setData({
                    campusId: l.campus_id,
                    campusText: l.name,
                    activeIndex: -1,
                    isClick: !0
                });
            }
            this.getDataInfo();
        }
    }
});