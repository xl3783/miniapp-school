var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/interopRequireWildcard").default;

require("../../../@babel/runtime/helpers/Objectvalues");

var a, r = require("../../../@babel/runtime/helpers/defineProperty"), i = e(require("../../../utils/http")), o = t(require("../../ec-canvas/echarts")), n = getApp(), l = new i.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        tabname: {
            type: String,
            value: "兴趣测试"
        }
    },
    data: (a = {
        radarColor: n.globalData.globalColor,
        openid: n.globalData.openid
    }, r(a, "radarColor", n.globalData.globalColor), r(a, "record_id", ""), r(a, "resultContent", ""), 
    r(a, "resultTitle", ""), r(a, "resultType", ""), r(a, "noShow", !1), r(a, "ec", {
        lazyLoad: !0
    }), r(a, "resTab", [ "结果解读", "职业推荐", "专业推荐" ]), r(a, "currentTab", 0), r(a, "basic", ""), 
    r(a, "common", ""), r(a, "personality", ""), r(a, "career", ""), r(a, "major", ""), 
    r(a, "typical", ""), r(a, "results", ""), r(a, "score", !1), r(a, "tabShow", !1), 
    r(a, "scoreMax", 10), r(a, "test_result", ""), r(a, "typical_major", []), r(a, "radar", {}), 
    a),
    lifetimes: {
        attached: function() {},
        ready: function() {}
    },
    methods: {
        load: function(e) {
            this.setData({
                type: e.type,
                record_id: e.testId
            }), this.getResList();
        },
        init_echarts: function() {
            var e = this;
            this.oneComponent.init(function(t, a, r, i) {
                var n = o.init(t, null, {
                    width: a,
                    height: r,
                    devicePixelRatio: i
                });
                return n.setOption(e.getOption()), e.chart = n, n;
            });
        },
        getOption: function() {
            var e = this.data, t = e.radarColor, a = e.radar, r = e.scoreMax;
            return {
                color: [ t ],
                radar: {
                    indicator: [ {
                        text: "(传统型)C",
                        max: r
                    }, {
                        text: "(企业型)E",
                        max: r
                    }, {
                        text: "S(社会型)",
                        max: r
                    }, {
                        text: "A(艺术型)",
                        max: r
                    }, {
                        text: "I(研究型)",
                        max: r
                    }, {
                        text: "(现实型)R",
                        max: r
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
                        value: Object.values(a),
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
            var e = this, t = this, a = this.data, r = (a.openid, a.type), i = a.record_id;
            l.get(n.globalData.baseUrl4 + "/miniapp/testResultByRecordId", {
                type: r,
                record_id: i,
                openid: n.globalData.openid
            }).then(function(a) {
                if (0 == a.errcode) {
                    if (!a.data) return void e.setData({
                        noShow: !0
                    });
                    var i = a.data, o = i.result_type, n = i.result_title, l = i.content, s = i.extra, c = i.radar, u = i.typical_major, d = (i.typical_occupation, 
                    i.radar_max);
                    6 == Object.values(c).length && e.setData({
                        score: !0
                    }), e.setData({
                        resultContent: l,
                        personality: l,
                        resultTitle: n,
                        resultType: o,
                        basic: s ? s.basic_characteristics : "",
                        career: s ? s.career_recommendation : "",
                        common: s ? s.common_characteristics : "",
                        major: s ? s.major_recommendation : "",
                        results: s ? s.result_description : "",
                        typical: u,
                        radar: c,
                        scoreMax: d,
                        test_result: n,
                        noShow: !0
                    }), "1" == r && (e.setData({
                        tabShow: !0
                    }), e.oneComponent = e.selectComponent("#mychart-voc-test"), t.init_echarts());
                }
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