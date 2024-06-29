var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/objectSpread2"), i = t(require("../../../utils/http")), s = getApp(), a = new i.default.Http();

Component({
    properties: {
        searchType: {
            type: String,
            value: "",
            observer: function(t, e) {
                1 == t ? (this.setData({
                    secConfigUrl: "/miniapp/enroll_plan/config",
                    secUrl: "/miniapp/enroll_plan"
                }), this.getConfig()) : 2 == t && (this.setData({
                    secConfigUrl: "/miniapp/score/config",
                    secUrl: "/miniapp/score"
                }), this.getConfig());
            }
        },
        enrollType: {
            type: String,
            value: "1"
        }
    },
    data: {
        isFirst: !0,
        secConfigUrl: "",
        secUrl: "",
        score_list: 1,
        enroll_plan_list: 1,
        enroll_plan_style: 1,
        score_style: 1,
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
        option: "",
        pickerType: "",
        showPickerMask: !1,
        provinceVal: [ 0 ],
        yearVal: [ 0 ],
        yzqyVal: [ 0 ]
    },
    methods: {
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
                },
                complete: function(t) {
                    console.log("complete", t);
                }
            });
        },
        getProvinceByLocation: function(t) {
            var e = this;
            this.data.isFullScreen && wx.showLoading({
                title: "正在定位"
            }), a.post(s.globalData.baseUrl + "/miniapp/region", t).then(function(t) {
                e.data.isFullScreen && wx.hideLoading(), e.setData({
                    province_id: t.provinceid,
                    province_name: t.province
                }), e.getConfig(), wx.stopLocationUpdate(function() {});
            }).catch(function(t) {
                console.log("定位失败"), wx.hideLoading();
            });
        },
        getConfig: function(t) {
            var i = this, n = this.data, c = n.isFirst, o = n.province_id, l = n.year, r = n.divition_id, d = n.subject_id, p = n.batch, u = n.campus, y = n.xz, x = n.cc, _ = n.zsdx, h = n.fzxx, b = n.bxd, v = n.major, f = n.pyd, g = n.yzqy, m = n.xxfs, z = n.tdxl, L = n.lx, j = n.yzsubject, D = n.score_list, k = n.enroll_plan_list, w = this.properties.enrollType, q = {
                province_id: o,
                year: l,
                divition_id: r,
                subject_id: d,
                batch: p,
                campus: u,
                length: y,
                level: x,
                object: _,
                issuing_school: h,
                point: b,
                major: v,
                train_point: f,
                area: g,
                study_type: m,
                equivalence: z,
                type: L,
                subject: j
            };
            2 != D && 2 != k || (q = e(e({}, q), {}, {
                province_id: "province" == t ? "" : o,
                year: "year" == t ? "" : l
            })), a.get(s.globalData.baseUrl + this.data.secConfigUrl, e({
                enroll_type: w
            }, q)).then(function(t) {
                var e = t.option, s = t.provinces, a = t.years, n = t.campus_name, o = t.batch, l = t.divition, r = t.subject, d = t.point, p = t.length, u = t.major, y = t.level, x = t.object, _ = t.issuing_school, h = t.train_point, b = t.type, v = t.study_type, f = t.equivalence, g = t.area, m = t.yzsubject;
                console.log(e), e.indexOf(2) > -1 && !i.data.province_id && (console.log("定位"), 
                i.reLocation()), i.setData({
                    option: e,
                    provinces: s || [],
                    yearList: a || [],
                    campusList: n || [],
                    batchList: o || [],
                    divitionList: l || [],
                    subjectList: r || [],
                    bxdList: d || [],
                    xzList: p || [],
                    majorList: u || [],
                    ccList: y || [],
                    zsdxList: x || [],
                    fzxxList: _ || [],
                    pydList: h || [],
                    lxList: b || [],
                    xxfsList: v || [],
                    tdxlList: f || [],
                    yzqyList: g || [],
                    yzsubjectList: m || [],
                    score_list: t.score_list ? t.score_list : "",
                    enroll_plan_list: t.enroll_plan_list ? t.enroll_plan_list : "",
                    enroll_plan_style: t.enroll_plan_style ? t.enroll_plan_style : "",
                    score_style: t.score_style ? t.score_style : ""
                });
                var z = i.data, L = z.score_list, j = z.enroll_plan_list;
                !c || 1 != L && 1 != j || i.setData({
                    year: c && a ? a[0] : "",
                    campus: c && n ? n[0] : "",
                    batch: c && o ? o[0] : "",
                    divition_name: c && l ? l[0].name : "",
                    divition_id: c && l ? l[0].divition_id : "",
                    subject_name: c && r ? r[0].name : "",
                    subject_id: c && r ? r[0].id : "",
                    bxd: c && d ? d[0] : "",
                    xz: c && p ? p[0] : "",
                    major: c && u ? u[0] : "",
                    cc: c && y ? y[0] : "",
                    zsdx: c && x ? x[0] : "",
                    fzxx: c && _ ? _[0] : "",
                    pyd: c && h ? h[0] : "",
                    lx: c && b ? b[0] : "",
                    xxfs: c && v ? v[0] : "",
                    tdxl: c && f ? f[0] : "",
                    yzqy: c && g ? g[0] : "",
                    yzsubject: c && m ? m[0] : "",
                    isFirst: !1
                });
            });
        },
        handleSure: function() {
            var t = this.data, e = t.province_id, i = t.province_name, s = t.year, a = t.divition_id, n = t.divition_name, c = t.subject_id, o = t.subject_name, l = t.batch, r = t.campus, d = t.xz, p = t.cc, u = t.zsdx, y = t.fzxx, x = t.bxd, _ = t.major, h = t.pyd, b = t.xxfs, v = t.tdxl, f = t.lx, g = t.yzqy, m = t.yzsubject, z = (t.enroll_plan_list, 
            t.enroll_plan_style), L = (t.score_list, t.score_style), j = this.properties, D = j.enrollType, k = j.searchType, w = {
                enroll_type: D,
                province_id: e,
                province_name: i,
                year: s,
                divition_id: a,
                divition_name: n,
                subject_id: c,
                subject_name: o,
                batch: l,
                campus: r,
                xz: d,
                cc: p,
                zsdx: u,
                fzxx: y,
                bxd: x,
                major: _,
                pyd: h,
                yzqy: g,
                xxfs: b,
                tdxl: v,
                lx: f,
                yzsubject: m
            };
            try {
                wx.setStorageSync("searchModel", w);
            } catch (t) {}
            1 == k && 1 == z || 2 == k && 1 == L ? wx.navigateTo({
                url: "/packageA/pages/plan-score-first-style/plan-score-first-style?searchType=".concat(k, "&enrollType=").concat(D)
            }) : (1 == k && 2 == z || 2 == k && 2 == L) && wx.navigateTo({
                url: "/packageA/pages/plan-score-sec-style/plan-score-sec-style?searchType=".concat(k, "&enrollType=").concat(D)
            });
        },
        openPicker: function(t) {
            var e = t.currentTarget.dataset.type, i = this.data, s = i.searchType, a = i.enroll_plan_list, n = i.score_list;
            this.setData({
                pickerType: e,
                showPickerMask: !0
            }), (1 == s && 2 == a || 2 == s && 2 == n) && ("province" == e ? this.getConfig() : this.getConfig(e));
        },
        bindProvinceChange: function(t) {
            var e = t.detail.value;
            this.setData({
                provinceVal: e
            });
        },
        bindYearChange: function(t) {
            var e = t.detail.value;
            this.setData({
                yearVal: e
            });
        },
        bindYzqyChange: function(t) {
            var e = t.detail.value;
            this.setData({
                yzqyVal: e
            });
        },
        handlePickerCancel: function() {
            this.setData({
                showPickerMask: !1
            });
        },
        handlePickerSure: function() {
            var t, e = this.data, i = e.pickerType, s = e.yearList, a = e.yearVal, n = e.yzqyList, c = e.yzqyVal, o = e.provinceVal, l = e.provinces;
            switch (2 != this.data.score_list && 2 != this.data.enroll_plan_list || this.setData({
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
                xxfs: "",
                tdxl: "",
                lx: "",
                yzsubject: ""
            }), i) {
              case "yzqy":
                t = n[c[0]], this.setData({
                    yzqy: t || ""
                }), 2 != this.data.score_list && 2 != this.data.enroll_plan_list || (this.setData({
                    year: ""
                }), this.getConfig());
                break;

              case "year":
                t = s[a[0]], this.setData({
                    year: t || ""
                }), 2 != this.data.score_list && 2 != this.data.enroll_plan_list || (this.setData({
                    yzqy: ""
                }), this.getConfig());
                break;

              case "province":
                t = l[o[0]], this.setData({
                    province_id: t ? t.provinceid : "",
                    province_name: t ? t.province : ""
                }), 2 != this.data.score_list && 2 != this.data.enroll_plan_list || (this.setData({
                    year: "",
                    yzqy: ""
                }), this.getConfig());
            }
            this.setData({
                showPickerMask: !1
            });
        },
        chooseRadio: function(t) {
            var e = t.currentTarget.dataset, i = e.type, s = e.item, a = this.data, n = a.searchType, c = a.score_list, o = a.enroll_plan_list, l = a.divition_id, r = a.subject_id, d = a.batch, p = a.campus, u = a.xz, y = a.cc, x = a.zsdx, _ = a.fzxx, h = a.bxd, b = a.major, v = a.pyd, f = a.xxfs, g = a.tdxl, m = a.lx, z = a.yzsubject;
            switch (i) {
              case "campus":
                this.setData({
                    campus: p == s ? "" : s
                });
                break;

              case "batch":
                this.setData({
                    batch: d == s ? "" : s
                });
                break;

              case "divition":
                this.setData({
                    divition_id: l == s.divition_id ? "" : s.divition_id,
                    divition_name: l == s.divition_id ? "" : s.name
                });
                break;

              case "subject":
                this.setData({
                    subject_id: r == s.id ? "" : s.id,
                    subject_name: r == s.id ? "" : s.name
                });
                break;

              case "bxd":
                this.setData({
                    bxd: h == s ? "" : s
                });
                break;

              case "xz":
                this.setData({
                    xz: u == s ? "" : s
                });
                break;

              case "major":
                this.setData({
                    major: b == s ? "" : s
                });
                break;

              case "cc":
                this.setData({
                    cc: y == s ? "" : s
                });
                break;

              case "zsdx":
                this.setData({
                    zsdx: x == s ? "" : s
                });
                break;

              case "fzxx":
                this.setData({
                    fzxx: _ == s ? "" : s
                });
                break;

              case "pyd":
                this.setData({
                    pyd: v == s ? "" : s
                });
                break;

              case "lx":
                this.setData({
                    lx: m == s ? "" : s
                });
                break;

              case "xxfs":
                this.setData({
                    xxfs: f == s ? "" : s
                });
                break;

              case "tdxl":
                this.setData({
                    tdxl: g == s ? "" : s
                });
                break;

              case "yzsubject":
                this.setData({
                    yzsubject: z == s ? "" : s
                });
            }
            (1 == n && 2 == o || 2 == n && 2 == c) && this.getConfig(i);
        }
    }
});