var t, a = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/objectSpread2"), s = require("../../../@babel/runtime/helpers/defineProperty"), i = a(require("../../../utils/http")), c = getApp(), l = new i.default.Http();

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
        showSearch: {
            type: Boolean,
            value: !0
        },
        searchType: {
            type: Number,
            value: "",
            observer: function(t, a) {
                1 == t ? (this.setData({
                    secConfigUrl: "/miniapp/enroll_plan/config",
                    secUrl: "/miniapp/enroll_plan"
                }), this.getConfig(!0)) : 2 == t && (this.setData({
                    secConfigUrl: "/miniapp/score/config",
                    secUrl: "/miniapp/score"
                }), this.getConfig(!0));
            }
        },
        enrollType: {
            type: String,
            value: "1"
        }
    },
    data: (t = {
        enroll_type: "",
        province_id: "",
        province_name: "",
        provinces: [],
        year: 0,
        yearList: [],
        divition_id: "",
        divition_name: "",
        divitionList: [],
        subject_id: "",
        subject_name: "",
        subjectList: [],
        batch: "",
        batchList: [],
        campus: "",
        campusList: [],
        xz: "",
        xzList: [],
        cc: "",
        ccList: [],
        zsdx: "",
        zsdxList: [],
        fzxx: "",
        fzxxList: [],
        bxd: "",
        bxdList: [],
        major: "",
        majorList: [],
        pyd: "",
        pydList: [],
        yzqy: "",
        yzqyList: [],
        xxfs: "",
        xxfsList: [],
        tdxl: "",
        tdxlList: [],
        lx: "",
        lxList: [],
        yzsubject: "",
        yzsubjectList: [],
        provinceVal: [ 0 ],
        yearVal: [ 0 ],
        batchVal: [ 0 ],
        campusVal: [ 0 ],
        divitionVal: [ 0 ],
        subjectVal: [ 0 ],
        bxdVal: [ 0 ],
        majorVal: [ 0 ],
        xzVal: [ 0 ],
        ccVal: [ 0 ],
        zsdxVal: [ 0 ],
        fzxxVal: [ 0 ],
        pydVal: [ 0 ],
        lxVal: [ 0 ],
        xxfsVal: [ 0 ],
        tdxlVal: [ 0 ],
        yzsubjectVal: [ 0 ],
        yzqyVal: [ 0 ],
        searchList: [],
        searchVal: [ 0 ],
        option: "",
        secConfigUrl: "/miniapp/enroll_plan/config",
        secUrl: "/miniapp/enroll_plan",
        score_list: 1,
        enroll_plan_list: 1,
        entrance_line_alias: "投档线"
    }, s(t, "majorList", []), s(t, "admissionLineList", []), s(t, "allList", []), s(t, "topNum", 0), 
    s(t, "isIphoneX", c.globalData.isIphoneX), s(t, "showPickerMask", !1), s(t, "pickerType", ""), 
    s(t, "topFixed", !1), s(t, "score_key", []), s(t, "plan_key", []), s(t, "diyConfig", ""), 
    s(t, "isChange", !1), t),
    lifetimes: {
        ready: function() {
            var t = this;
            wx.getStorage({
                key: "globalCondig",
                success: function(a) {
                    t.setData({
                        diyConfig: a.data
                    });
                }
            });
        }
    },
    methods: {
        openPickerMask: function(t) {
            var a = this.data, e = a.score_list, s = a.enroll_plan_list, i = t.currentTarget.dataset.type;
            2 == e || 2 == s ? this.getConfigByType(i) : this.handleListByType(i), this.setData({
                pickerType: i,
                showPickerMask: !0
            }), console.log("年粉", this.data.yearList);
        },
        handlePickerCancel: function() {
            this.setData({
                showPickerMask: !1
            });
        },
        handlePickerSure: function() {
            var t, a = this.data, e = a.pickerType, s = a.provinces, i = a.yearList, c = a.campusList, l = a.batchList, n = a.divitionList, r = a.subjectList, o = a.bxdList, d = a.xzList, h = a.majorList, p = a.ccList, x = a.zsdxList, y = a.yzqyList, u = a.fzxxList, b = a.pydList, _ = a.lxList, L = a.xxfsList, v = a.tdxlList, f = a.provinceVal, m = a.yearVal, z = a.batchVal, V = a.campusVal, j = a.divitionVal, g = a.subjectVal, D = a.bxdVal, k = a.xzVal, q = a.majorVal, T = a.ccVal, w = a.zsdxVal, S = a.fzxxVal, C = a.pydVal, U = a.lxVal, P = a.xxfsVal, B = a.tdxlVal, M = a.yzqyVal, F = a.yzsubjectVal;
            if (!a.isChange) {
                switch (e) {
                  case "province":
                    t = s[f[0]], this.setData({
                        province_id: t ? t.id : "",
                        province_name: t ? t.name : ""
                    });
                    break;

                  case "year":
                    t = i[m[0]], this.setData({
                        year: t || ""
                    });
                    break;

                  case "campus":
                    t = c[V[0]], this.setData({
                        campus: t || ""
                    });
                    break;

                  case "batch":
                    t = l[z[0]], this.setData({
                        batch: t || ""
                    });
                    break;

                  case "divition":
                    t = n[j[0]], this.setData({
                        divition_id: t ? t.divition_id : "",
                        divition_name: t ? t.name : ""
                    });
                    break;

                  case "subject":
                    t = r[g[0]], this.setData({
                        subject_id: t ? t.id : "",
                        subject_name: t ? t.name : ""
                    });
                    break;

                  case "bxd":
                    t = o[D[0]], this.setData({
                        bxd: t || ""
                    });
                    break;

                  case "xz":
                    t = d[k[0]], this.setData({
                        xz: t || ""
                    });
                    break;

                  case "major":
                    t = h[q[0]], this.setData({
                        major: t || ""
                    });
                    break;

                  case "cc":
                    t = p[T[0]], this.setData({
                        cc: t || ""
                    });
                    break;

                  case "zsdx":
                    t = x[w[0]], this.setData({
                        zsdx: t || ""
                    });
                    break;

                  case "fzxx":
                    t = u[S[0]], this.setData({
                        fzxx: t || ""
                    });
                    break;

                  case "pyd":
                    t = b[C[0]], this.setData({
                        pyd: t || ""
                    });
                    break;

                  case "lx":
                    t = _[U[0]], this.setData({
                        lx: t || ""
                    });
                    break;

                  case "xxfs":
                    t = L[P[0]], this.setData({
                        xxfs: t || ""
                    });
                    break;

                  case "tdxl":
                    t = v[B[0]], this.setData({
                        tdxl: t || ""
                    });
                    break;

                  case "yzsubject":
                    t = yzsubjectList[F[0]], this.setData({
                        yzsubject: t || ""
                    });
                    break;

                  case "yzqy":
                    t = y[M[0]], this.setData({
                        yzqy: t || ""
                    });
                }
                this.setData({
                    showPickerMask: !1
                }), this.getSearch();
            }
        },
        getConfigByType: function(t) {
            var a = this, s = this.data, i = s.province_id, n = s.year, r = s.divition_id, o = s.subject_id, d = s.batch, h = s.campus, p = s.xz, x = s.cc, y = s.zsdx, u = s.fzxx, b = s.bxd, _ = s.major, L = s.pyd, v = s.yzqy, f = s.xxfs, m = s.tdxl, z = s.lx, V = s.yzsubject, j = s.score_list, g = s.enroll_plan_list, D = (s.provinceVal, 
            s.yearVal, s.batchVal, s.campusVal, s.divitionVal, s.subjectVal, s.bxdVal, s.xzVal, 
            s.majorVal, s.ccVal, s.zsdxVal, s.fzxxVal, s.pydVal, s.lxVal, s.xxfsVal, s.tdxlVal, 
            s.yzqyVal, s.yzsubjectVal, this.properties.enrollType), k = {
                province_id: i,
                year: n,
                divition_id: r,
                subject_id: o,
                batch: d,
                campus: h,
                length: p,
                level: x,
                object: y,
                issuing_school: u,
                point: b,
                major: _,
                train_point: L,
                area: v,
                study_type: f,
                equivalence: m,
                type: z,
                subject: V
            };
            2 != j && 2 != g || (k = e(e({}, k), {}, {
                year: "year" == t ? "" : n,
                campus: "campus" == t ? "" : h,
                batch: "batch" == t ? "" : d,
                divition_id: "divition" == t ? "" : r,
                subject_id: "subject" == t ? "" : o,
                point: "bxd" == t ? "" : b,
                length: "xz" == t ? "" : p,
                major: "major" == t ? "" : _,
                level: "cc" == t ? "" : x,
                object: "zsdx" == t ? "" : y,
                issuing_school: "fzxx" == t ? "" : u,
                train_point: "pyd" == t ? "" : L,
                type: "lx" == t ? "" : z,
                study_type: "xxfs" == t ? "" : f,
                equivalence: "tdxl" == t ? "" : m,
                subject: "yzsubject" == t ? "" : V,
                area: "yzqy" == t ? "" : v
            })), l.get(c.globalData.baseUrl + this.data.secConfigUrl, e({
                enroll_type: D
            }, k)).then(function(e) {
                var s = e.option, i = e.provinces, c = e.years, l = e.campus_name, n = e.batch, r = e.divition, o = e.subject, d = e.point, h = e.length, p = e.major, x = e.level, y = e.object, u = e.issuing_school, b = e.train_point, _ = e.type, L = e.study_type, v = e.equivalence, f = e.area, m = e.yzsubject;
                s.indexOf(2) > -1 && !a.data.province_id && a.reLocation(), a.setData({
                    option: s,
                    provinces: i || [],
                    yearList: c || [],
                    campusList: l || [],
                    batchList: n || [],
                    divitionList: r || [],
                    subjectList: o || [],
                    bxdList: d || [],
                    xzList: h || [],
                    majorList: p || [],
                    ccList: x || [],
                    zsdxList: y || [],
                    fzxxList: u || [],
                    pydList: b || [],
                    lxList: _ || [],
                    xxfsList: L || [],
                    tdxlList: v || [],
                    yzqyList: f || [],
                    yzsubjectList: m || [],
                    score_list: e.score_list ? e.score_list : "",
                    enroll_plan_list: e.enroll_plan_list ? e.enroll_plan_list : "",
                    enroll_plan_style: e.enroll_plan_style ? e.enroll_plan_style : "",
                    score_style: e.score_style ? e.score_style : ""
                }), a.handleListByType(t);
            });
        },
        handleListByType: function(t) {
            var a = this.data, e = (a.score_list, a.enroll_plan_list, a.provinces), s = a.yearList, i = a.campusList, c = a.batchList, l = a.divitionList, n = a.subjectList, r = a.bxdList, o = a.xzList, d = a.majorList, h = a.ccList, p = a.zsdxList, x = a.fzxxList, y = a.pydList, u = a.lxList, b = a.xxfsList, _ = a.tdxlList, L = a.yzqyList, v = a.yzsubjectList, f = a.provinceVal, m = a.yearVal, z = a.batchVal, V = a.campusVal, j = a.divitionVal, g = a.subjectVal, D = a.bxdVal, k = a.xzVal, q = a.majorVal, T = a.ccVal, w = a.zsdxVal, S = a.fzxxVal, C = a.pydVal, U = a.lxVal, P = a.xxfsVal, B = a.tdxlVal, M = a.yzqyVal, F = a.yzsubjectVal;
            switch (t) {
              case "province":
                this.setData({
                    searchList: e.map(function(t) {
                        return {
                            name: t.name,
                            id: t.provinceid
                        };
                    }),
                    searchVal: f
                });
                break;

              case "year":
                this.setData({
                    searchList: s || [],
                    searchVal: m
                });
                break;

              case "campus":
                this.setData({
                    searchList: i,
                    searchVal: V
                });
                break;

              case "batch":
                this.setData({
                    searchList: c,
                    searchVal: z
                });
                break;

              case "divition":
                this.setData({
                    searchList: l.map(function(t) {
                        return {
                            name: t.name,
                            id: t.divition_id
                        };
                    }),
                    searchVal: j
                });
                break;

              case "subject":
                this.setData({
                    searchList: n,
                    searchVal: g
                });
                break;

              case "major":
                this.setData({
                    searchList: d,
                    searchVal: q
                });
                break;

              case "bxd":
                this.setData({
                    searchList: r,
                    searchVal: D
                });
                break;

              case "xz":
                this.setData({
                    searchList: o,
                    searchVal: k
                });
                break;

              case "major":
                this.setData({
                    searchList: d,
                    searchVal: q
                });
                break;

              case "cc":
                this.setData({
                    searchList: h,
                    searchVal: T
                });
                break;

              case "zsdx":
                this.setData({
                    searchList: p,
                    searchVal: w
                });
                break;

              case "fzxx":
                this.setData({
                    searchList: x,
                    searchVal: S
                });
                break;

              case "pyd":
                this.setData({
                    searchList: y,
                    searchVal: C
                });
                break;

              case "lx":
                this.setData({
                    searchList: u,
                    searchVal: U
                });
                break;

              case "xxfs":
                this.setData({
                    searchList: b,
                    searchVal: P
                });
                break;

              case "tdxl":
                this.setData({
                    searchList: _,
                    searchVal: B
                });
                break;

              case "yzqy":
                this.setData({
                    searchList: L,
                    searchVal: M
                });
                break;

              case "yzsubject":
                this.setData({
                    searchList: v,
                    searchVal: F
                });
            }
        },
        goSearch: function() {
            var t = this.data, a = t.province_id, e = t.province_name, s = t.year, i = t.divition_id, c = t.divition_name, l = t.subject_id, n = t.subject_name, r = t.batch, o = t.campus, d = t.xz, h = t.cc, p = t.zsdx, x = t.fzxx, y = t.bxd, u = t.major, b = t.pyd, _ = t.xxfs, L = t.tdxl, v = t.lx, f = t.yzqy, m = t.yzsubject, z = (t.enroll_plan_list, 
            t.enroll_plan_style, t.score_list, t.score_style, this.properties), V = z.enrollType, j = (z.searchType, 
            {
                enroll_type: V,
                province_id: a,
                province_name: e,
                year: s,
                divition_id: i,
                divition_name: c,
                subject_id: l,
                subject_name: n,
                batch: r,
                campus: o,
                xz: d,
                cc: h,
                zsdx: p,
                fzxx: x,
                bxd: y,
                major: u,
                pyd: b,
                yzqy: f,
                xxfs: _,
                tdxl: L,
                lx: v,
                yzsubject: m
            });
            try {
                wx.setStorageSync("searchModel", j);
            } catch (t) {}
            wx.navigateTo({
                url: "/packageA/pages/plan-score-histo-search/plan-score-histo-search?&searchType=".concat(this.properties.searchType)
            });
        },
        getProvinceByLocation: function(t) {
            var a = this;
            this.data.isFullScreen && wx.showLoading({
                title: "正在定位"
            }), l.post(c.globalData.baseUrl + "/miniapp/region", t).then(function(t) {
                a.data.isFullScreen && wx.hideLoading(), a.setData({
                    province_id: t.provinceid,
                    province_name: t.province
                }), a.getConfig(), a.getSearch(), wx.stopLocationUpdate(function() {});
            }).catch(function(t) {
                console.log("定位失败"), wx.hideLoading();
            });
        },
        reLocation: function() {
            var t = this;
            this.setData({
                divition_name: "科类",
                yearText: "年份",
                campus_name: "校区",
                activeIndex: -1,
                divition_id: -1,
                year: -1,
                campus_id: -1,
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
                        success: function(a) {
                            t.getProvinceByLocation({
                                latitude: a.latitude,
                                longitude: a.longitude
                            });
                        },
                        fail: function() {}
                    });
                },
                fail: function(a) {
                    wx.showModal({
                        title: "是否授权地理位置信息",
                        content: "需要获取您的地理位置信息，请确认授权",
                        success: function(a) {
                            a.confirm && wx.openSetting({
                                success: function(a) {
                                    a.authSetting["scope.userLocation"] ? wx.getLocation({
                                        success: function(a) {
                                            t.getProvinceByLocation({
                                                latitude: a.latitude,
                                                longitude: a.longitude
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
        bindAreaChange: function(t) {
            var a = t.detail.value, e = this.data.provinces[a];
            this.setData({
                province_id: e.provinceid,
                province_name: e.province
            }), 2 != this.data.score_list && 2 != this.data.enroll_plan_list || this.setData({
                year: "",
                divition_id: "",
                divition_name: "",
                subject_id: "",
                subject_name: "",
                batch: "",
                campus: "",
                xz: "",
                cc: "",
                zsdx: "",
                fzxx: "",
                bxd: "",
                major: "",
                pyd: "",
                yzqy: "",
                xxfs: "",
                tdxl: "",
                lx: "",
                yzsubject: ""
            }), this.getConfig(), this.getSearch();
        },
        handleScroll: function(t) {
            t.detail.scrollTop > 350 ? this.setData({
                topFixed: !0
            }) : this.setData({
                topFixed: !1
            });
        },
        ss: function() {},
        bindSearchStart: function() {
            this.setData({
                isChange: !0
            });
        },
        bindSearchChange: function(t) {
            var a = this.data.pickerType, e = t.detail.value;
            switch (a) {
              case "province":
                this.setData({
                    provinceVal: e
                });
                break;

              case "year":
                this.setData({
                    yearVal: e
                });
                break;

              case "campus":
                this.setData({
                    campusVal: e
                });
                break;

              case "batch":
                this.setData({
                    batchVal: e
                });
                break;

              case "divition":
                this.setData({
                    divitionVal: e
                });
                break;

              case "subject":
                this.setData({
                    subjectVal: e
                });
                break;

              case "bxd":
                this.setData({
                    bxdVal: e
                });
                break;

              case "xz":
                this.setData({
                    xzVal: e
                });
                break;

              case "major":
                this.setData({
                    majorVal: e
                });
                break;

              case "cc":
                this.setData({
                    ccVal: e
                });
                break;

              case "zsdx":
                this.setData({
                    zsdxVal: e
                });
                break;

              case "fzxx":
                this.setData({
                    fzxxVal: e
                });
                break;

              case "pyd":
                this.setData({
                    pydVal: e
                });
                break;

              case "lx":
                this.setData({
                    lxVal: e
                });
                break;

              case "xxfs":
                this.setData({
                    xxfsVal: e
                });
                break;

              case "tdxl":
                this.setData({
                    tdxlVal: e
                });
                break;

              case "yzqy":
                this.setData({
                    yzqyVal: e
                });
                break;

              case "yzsubject":
                this.setData({
                    yzsubjectVal: e
                });
            }
        },
        bindSearchEnd: function() {
            this.setData({
                isChange: !1
            });
        },
        handleReset: function() {
            this.setData({
                year: -1,
                yearText: "年份",
                campus_id: -1,
                campus_name: "校区",
                batch: "",
                enroll_type: "类型",
                divition_id: "",
                subject_id: ""
            }), this.getConfig();
        },
        handleSure: function() {
            this.setData({
                showModel: !1
            }), this.getSearch();
        },
        getSearch: function() {
            var t = this, a = this.data, e = a.province_id, s = a.year, i = a.divition_id, n = a.subject_id, r = a.batch, o = a.campus, d = a.xz, h = a.cc, p = a.zsdx, x = a.fzxx, y = a.bxd, u = a.major, b = a.pyd, _ = a.yzqy, L = a.xxfs, v = a.tdxl, f = a.lx, m = a.yzsubject, z = {
                enroll_type: this.properties.enrollType,
                province_id: e,
                year: s,
                divition_id: i,
                subject_id: n,
                batch: r,
                campus: o,
                length: d,
                level: h,
                object: p,
                issuing_school: x,
                point: y,
                major: u,
                train_point: b,
                area: _,
                study_type: L,
                equivalence: v,
                type: f,
                subject: m
            };
            l.get(c.globalData.baseUrl + this.data.secUrl, z).then(function(a) {
                if (2 == t.properties.searchType) {
                    var e = a.score[1] ? a.score[1] : [], s = a.score[2] ? a.score[2] : [];
                    t.setData({
                        admissionLineList: e,
                        majorList: s,
                        score_key: a.score_key,
                        allList: e.concat(s),
                        entrance_line_alias: a.entrance_line_alias ? a.entrance_line_alias : ""
                    }), console.log("777", t.data.majorList);
                } else 1 == t.properties.searchType && t.setData({
                    allList: null == a ? void 0 : a.plan,
                    plan_key: null == a ? void 0 : a.plan_key,
                    entrance_line_alias: null == a ? void 0 : a.entrance_line_alias
                });
            });
        },
        getConfig: function(t) {
            var a = this;
            if (t) try {
                var s = wx.getStorageSync("searchModel");
                s && this.setData(e(e({}, this.data), s));
            } catch (t) {}
            var i = this.data, n = {
                enroll_type: i.enroll_type,
                province_id: i.province_id,
                year: i.year,
                divition_id: i.divition_id,
                subject_id: i.subject_id,
                batch: i.batch,
                campus: i.campus,
                length: i.xz,
                level: i.cc,
                object: i.zsdx,
                issuing_school: i.fzxx,
                point: i.bxd,
                major: i.major,
                train_point: i.pyd,
                area: i.yzqy,
                study_type: i.xxfs,
                equivalence: i.tdxl,
                type: i.lx,
                subject: i.yzsubject
            };
            l.get(c.globalData.baseUrl + this.data.secConfigUrl, n).then(function(t) {
                var e = t.option, s = t.provinces, i = t.years, c = t.campus_name, l = t.batch, n = t.divition, r = t.subject, o = t.point, d = t.length, h = t.major, p = t.level, x = t.object, y = t.issuing_school, u = t.train_point, b = t.type, _ = t.study_type, L = t.equivalence, v = t.area, f = t.yzsubject;
                e.indexOf(2) > -1 && !a.data.province_id && a.reLocation(), a.setData({
                    option: e,
                    provinces: s || [],
                    yearList: i || [],
                    campusList: c || [],
                    batchList: l || [],
                    divitionList: n || [],
                    subjectList: r || [],
                    bxdList: o || [],
                    xzList: d || [],
                    majorList: h || [],
                    ccList: p || [],
                    zsdxList: x || [],
                    fzxxList: y || [],
                    pydList: u || [],
                    lxList: b || [],
                    xxfsList: _ || [],
                    tdxlList: L || [],
                    yzqyList: v || [],
                    yzsubjectList: f || [],
                    score_list: t.score_list ? t.score_list : "",
                    enroll_plan_list: t.enroll_plan_list ? t.enroll_plan_list : "",
                    enroll_plan_style: t.enroll_plan_style ? t.enroll_plan_style : "",
                    score_style: t.score_style ? t.score_style : ""
                }), a.getSearch();
            });
        }
    }
});