var e = require("../../../@babel/runtime/helpers/interopRequireWildcard").default, t = (0, 
require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), a = e(require("../../ec-canvas/echarts")), r = getApp(), o = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        tabname: {
            type: String,
            value: "职业兴趣测试"
        },
        testId: {
            type: String,
            value: "",
            observer: function(e, t) {
                e && (this.setData({
                    test_record_id: Number(e)
                }), this.getResList());
            }
        }
    },
    data: {
        baseUrl: "https://career.schoolpi.net",
        radarColor: r.globalData.globalColor,
        open_id: r.globalData.openid,
        saas_school_id: r.globalData.schoolid,
        test_record_id: "",
        ec: {
            lazyLoad: !0
        },
        resTab: [ "结果解读", "职业推荐", "专业推荐" ],
        currentTab: 0,
        isShow: !1,
        noShow: !1,
        basic: "",
        common: "",
        personality: "",
        career: "",
        major: "",
        typical: "",
        results: "",
        score_a: "",
        score_c: "",
        score_e: "",
        score_i: "",
        score_r: "",
        score_s: "",
        score: !1,
        tabShow: !1,
        scoreMax: 10,
        test_result: "",
        typical_major: [],
        titleList: [ "基本特征", "共同特性", "人格倾向", "职业推荐", "专业推荐" ]
    },
    lifetimes: {
        attached: function() {
            this.getResList();
        },
        ready: function() {}
    },
    methods: {
        init_echarts: function() {
            var e = this;
            this.oneComponent.init(function(t, r, o) {
                var s = a.init(t, null, {
                    width: r,
                    height: o
                });
                return s.setOption(e.getOption()), e.chart = s, s;
            });
        },
        getOption: function() {
            var e = this.data, t = e.radarColor, a = e.score_a, r = e.score_c, o = e.score_e, s = e.score_i, i = e.score_r, c = e.score_s, n = e.scoreMax;
            return {
                color: [ t ],
                radar: {
                    indicator: [ {
                        text: "(传统型)C",
                        max: n
                    }, {
                        text: "(企业型)E",
                        max: n
                    }, {
                        text: "S(社会型)",
                        max: n
                    }, {
                        text: "A(艺术型)",
                        max: n
                    }, {
                        text: "I(研究型)",
                        max: n
                    }, {
                        text: "(现实型)R",
                        max: n
                    } ],
                    center: [ "50%", "40%" ],
                    radius: 90,
                    shape: "circle",
                    startAngle: 180,
                    splitNumber: 5,
                    axisName: {
                        color: "#909399"
                    },
                    splitArea: {
                        areaStyle: {
                            color: [ "#ffffff" ]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#E1E5E4"
                        }
                    },
                    splitLine: {
                        lineStyle: {}
                    }
                },
                series: [ {
                    name: "Budget vs spending",
                    type: "radar",
                    data: [ {
                        value: [ r, o, c, a, s, i ],
                        symbol: "none",
                        areaStyle: {
                            color: t
                        }
                    } ]
                } ]
            };
        },
        currentTab: function(e) {
            this.data.currentTab != e.currentTarget.dataset.idx && this.setData({
                currentTab: e.currentTarget.dataset.idx
            });
        },
        getResList: function() {
            var e = this, t = this, a = this.data, s = a.baseUrl, i = (a.saas_school_id, a.open_id, 
            a.test_record_id);
            o.get(s + "/interest/test_analysis", {
                test_record_id: i,
                saas_school_id: r.globalData.schoolid,
                open_id: r.globalData.openid
            }).then(function(a) {
                if (0 == a.errcode) {
                    0 == Object.keys(a.data).length && e.setData({
                        noShow: !0
                    }), e.setData({
                        isShow: !0
                    });
                    var r = a.data, o = r.basic_characteristics, s = r.career_recommendation, i = r.common_characteristics, c = r.major_recommendation, n = r.personality_tendency, l = r.result_description, d = r.score_a, _ = r.score_c, u = r.score_e, h = r.score_i, m = r.score_r, p = r.score_s, b = r.test_result, g = r.typical_major;
                    d && _ && u && h && m && p && e.setData({
                        score: !0
                    }), (o || s || i || c || n || l) && e.setData({
                        tabShow: !0
                    });
                    var f = Math.max(d, _, u, h, m, p);
                    e.setData({
                        basic: o,
                        career: s,
                        common: i,
                        major: c,
                        personality: n,
                        typical: g,
                        results: l,
                        score_a: d,
                        score_c: _,
                        score_e: u,
                        score_i: h,
                        score_r: m,
                        score_s: p,
                        test_result: b,
                        scoreMax: f
                    }), e.oneComponent = e.selectComponent("#mychart-voc-test"), t.init_echarts();
                } else 6 == a.errcode || wx.showToast({
                    title: a.msg,
                    icon: "none"
                }), e.setData({
                    noShow: !0
                });
            });
        },
        jumpToEnroll: function(e) {
            var t = e.currentTarget.dataset, a = t.id, r = t.name;
            wx.navigateTo({
                url: "/pages/enroll-major-intro-detail-new/enroll-major-intro-detail-new?id=" + a + "&name=" + r
            });
        }
    }
});