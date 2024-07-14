var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default;

require("../../../@babel/runtime/helpers/Arrayincludes");

var e = t(require("../../../utils/http")), i = getApp(), a = new e.default.Http();

Component({
    properties: {},
    data: {
        provinces: [],
        pickerType: "province",
        provinceVal: [ 0 ],
        showPickerMask: !1,
        province_id: "",
        province_name: "",
        batch_name: "",
        batchList: [],
        divition: "",
        divitionList: [],
        isdvtShow: !1,
        subStr: "",
        sectionsStr: "",
        sectiontList: [],
        isSubShow: !1,
        listType: "",
        ranking_id: "ranking",
        rankingValue: "",
        fractionValue: "",
        isRanking: !0,
        rankingShow: !1,
        rankingtList: [ {
            id: "ranking",
            name: "位次（推荐）"
        }, {
            id: "fraction",
            name: "分数"
        } ],
        secCheckList: [],
        checkList: [],
        values: [],
        sectionsDvt: "",
        region_id: "",
        batch: "",
        sections: [],
        rank: "",
        score: "",
        nickname: "",
        avatar: "",
        phone: "",
        analysisShow: !1,
        divition1: "",
        batch_name1: "",
        chooseList: []
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                analysisShow: !1
            });
        }
    },
    methods: {
        openPicker: function(t) {
            var e = t.currentTarget.dataset.type;
            if ("province" === e) this.setData({
                pickerType: e,
                checkList: [],
                batch_name: "",
                divition: "",
                sectionsDvt: "",
                sectionsStr: "",
                rankingValue: "",
                fractionValue: "",
                divition1: "",
                batch_name1: "",
                chooseList: [],
                region_id: "",
                batch: "",
                sections: [],
                rank: "",
                score: ""
            }), this.getProvinceByLocation(); else if ("batch" === e) {
                if (!this.data.province_id) return void wx.showToast({
                    title: "请选择考区",
                    icon: "none"
                });
                this.setData({
                    pickerType: e
                });
            } else "ranking" === e && this.setData({
                pickerType: e,
                rank: "",
                score: "",
                rankingValue: "",
                fractionValue: "",
                ranking_id: "ranking",
                isRanking: !0
            });
            this.setData({
                showPickerMask: !0
            });
        },
        bindProvinceChange: function(t) {
            var e = t.detail.value;
            this.setData({
                provinceVal: e
            });
        },
        getBatch: function() {
            var t = this, e = this.data.province_id;
            a.get(i.globalData.baseUrl4 + "/miniapp/AdmissionProbabilityConfig", {
                region_id: e,
                schoolid: i.globalData.schoolid
            }).then(function(e) {
                var i = e.data, a = i.batchs, n = i.section;
                if (0 == e.errcode) if ("4" == n.type) t.setData({
                    batchList: a,
                    divitionList: n.sections,
                    listType: n.type,
                    secCheckList: [],
                    sectiontList: [],
                    isdvtShow: !0,
                    isSubShow: !1
                }); else {
                    var s = n.sections.map(function(t, e) {
                        var i = {};
                        return i.name = t, i.index = e, i;
                    });
                    t.setData({
                        batchList: a,
                        sectiontList: n.sections,
                        listType: n.type,
                        secCheckList: s,
                        isSubShow: !0,
                        isdvtShow: !1,
                        divitionList: []
                    });
                }
            });
        },
        handleReset: function(t) {
            var e = t.currentTarget.dataset.type, i = this.data.secCheckList.map(function(t) {
                return t.checked = !1, t;
            });
            "batch" === e ? this.setData({
                batch: "",
                batch_name: "",
                batch_name1: "",
                divition: "",
                divition1: "",
                sectionsStr: "",
                sectionsDvt: "",
                secCheckList: i,
                checkList: [],
                chooseList: []
            }) : this.setData({
                rankingValue: "",
                fractionValue: ""
            });
        },
        handlePickerCancel: function(t) {
            this.setData({
                showPickerMask: !1
            });
        },
        handleCancel: function(t) {
            var e = this.data, i = e.secCheckList, a = e.chooseList, n = (e.batch_name, e.batch_name1), s = e.divition1, o = (e.divition, 
            i.map(function(t) {
                return t.checked = !1, t;
            }));
            this.setData({
                secCheckList: JSON.parse(JSON.stringify(a)).length > 0 ? JSON.parse(JSON.stringify(a)) : o,
                divition: s,
                batch_name: n,
                showPickerMask: !1
            });
        },
        handleCalculate: function() {
            if (i.globalData.userInfo) {
                var t = i.globalData.userInfo, e = t.nickName, n = t.avatarUrl, s = t.phone;
                this.setData({
                    nickname: e || "",
                    avatar: n || "",
                    phone: s || ""
                });
            } else {
                var o = this;
                wx.getStorage({
                    key: "userinfo",
                    success: function(t) {
                        var e = t.data, i = e.avatarUrl, a = e.nickName, n = e.phone;
                        o.setData({
                            nickname: a || "",
                            avatar: i || "",
                            phone: n || ""
                        });
                    }
                });
            }
            var c = this.data, r = c.region_id, h = c.batch, l = c.sections, d = c.rank, k = c.score, u = c.nickname, v = c.avatar, g = c.phone;
            r ? h ? l ? d || k ? (this.setData({
                analysisShow: !0
            }), a.post(i.globalData.baseUrl4 + "/miniapp/AdmissionProbabilityMeasurement", {
                region_id: r,
                batch: h,
                sections: l,
                rank: d,
                score: k,
                source: "微信小程序",
                nickname: u || "",
                avatar: v || "",
                phone: g || "",
                open_id: i.globalData.openid
            }).then(function(t) {
                if (0 == t.errcode) {
                    var e = JSON.stringify(t.data);
                    clearTimeout(i);
                    var i = setTimeout(function() {
                        wx.navigateTo({
                            url: "/packageA/pages/admission-calc-results/admission-calc-results?str=" + e
                        });
                    }, 3e3);
                } else if (1 == t.errcode) {
                    clearTimeout(a);
                    var a = setTimeout(function() {
                        wx.navigateTo({
                            url: "/packageA/pages/admission-calc-results/admission-calc-results?str="
                        });
                    }, 3e3);
                }
            })) : wx.showToast({
                title: "请输入位次或分数",
                icon: "none"
            }) : wx.showToast({
                title: "请选择科类或科目",
                icon: "none"
            }) : wx.showToast({
                title: "请选择批次",
                icon: "none"
            }) : wx.showToast({
                title: "请选择考区",
                icon: "none"
            });
        },
        handlePickerSure: function() {
            var t = this.data, e = t.provinces[t.provinceVal[0]];
            this.setData({
                province_id: e.id ? e.id : "",
                region_id: e.id ? e.id : "",
                province_name: e.name ? e.name : "",
                showPickerMask: !1
            }), this.getBatch();
        },
        checkboxChange: function(t) {
            for (var e = t.detail.value, i = this.data.secCheckList, a = 0, n = i.length; a < n; ++a) {
                i[a].checked = !1;
                for (var s = 0, o = e.length; s < o; ++s) if (i[a].name === e[s]) {
                    i[a].checked = !0;
                    break;
                }
            }
            var c = e.map(function(t) {
                var e = t.slice(0, 1);
                return "历史" == t ? e = t.slice(1, 2) : "思想政治" == t && (e = t.slice(2, 3)), e;
            });
            this.setData({
                secCheckList: i,
                checkList: e,
                subStr: c.join("/")
            });
        },
        bindInput: function(t) {
            switch (t.currentTarget.dataset.type) {
              case "ranking":
                this.setData({
                    rankingValue: t.detail.value,
                    rankingShow: !1
                });
                break;

              case "fraction":
                this.setData({
                    fractionValue: t.detail.value,
                    rankingShow: !0
                });
            }
        },
        handleSure: function(t) {
            var e = t.currentTarget.dataset.type, i = this.data, a = i.batch_name, n = i.divition, s = i.checkList, o = i.listType, c = i.subStr, r = i.rankingValue, h = i.fractionValue, l = i.sections, d = i.secCheckList;
            switch (e) {
              case "batch":
                if (a) if (s && 3 == s.length || n) if ("1" == o || "2" == o) 3 === s.length ? this.setData({
                    batch: a,
                    batch_name1: a,
                    chooseList: JSON.parse(JSON.stringify(d)),
                    sections: s,
                    sectionsStr: c,
                    showPickerMask: !1
                }) : wx.showToast({
                    title: "请选择三个科目",
                    icon: "none"
                }); else if ("3" == o) {
                    var k = s.includes("物理"), u = s.includes("历史");
                    3 === s.length && (!k && u || k && !u) ? this.setData({
                        batch: a,
                        batch_name1: a,
                        sections: s,
                        chooseList: JSON.parse(JSON.stringify(d)),
                        sectionsStr: c,
                        showPickerMask: !1
                    }) : k && u ? wx.showToast({
                        title: "物理和历史只能选择一个",
                        icon: "none"
                    }) : wx.showToast({
                        title: "物理和历史须选择一个",
                        icon: "none"
                    });
                } else this.setData({
                    batch: a,
                    batch_name1: a,
                    sections: l.concat(n),
                    divition1: n,
                    sectionsDvt: n,
                    showPickerMask: !1
                }); else "4" == o ? wx.showToast({
                    title: "请至少选择一个科类",
                    icon: "none"
                }) : wx.showToast({
                    title: "请选择三个科目",
                    icon: "none"
                }); else wx.showToast({
                    title: "请选择批次",
                    icon: "none"
                });
                break;

              case "ranking":
                r || h ? r ? this.setData({
                    rank: r,
                    showPickerMask: !1
                }) : this.setData({
                    score: h,
                    showPickerMask: !1
                }) : wx.showToast({
                    title: "请输入位次或分数",
                    icon: "none"
                });
            }
        },
        chooseRadio: function(t) {
            var e = t.currentTarget.dataset, i = e.type, a = e.item, n = (e.idx, this.data), s = n.divition, o = n.batch_name;
            switch (i) {
              case "batch":
                this.setData({
                    batch_name: o == a ? "" : a
                });
                break;

              case "divition":
                this.setData({
                    divition: s == a ? "" : a
                });
                break;

              case "ranking":
                this.setData({
                    ranking_id: a.id ? a.id : "",
                    fractionValue: "",
                    isRanking: !0
                });
                break;

              case "fraction":
                this.setData({
                    ranking_id: a.id ? a.id : "",
                    rankingValue: "",
                    isRanking: !1
                });
            }
        },
        getProvinceByLocation: function() {
            var t = this;
            a.get(i.globalData.baseUrl4 + "/miniapp/AdmissionGetProvince").then(function(e) {
                0 == e.errcode ? t.setData({
                    provinces: e.data
                }) : wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                });
            });
        }
    }
});