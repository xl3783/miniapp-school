var t = require("../../../@babel/runtime/helpers/interopRequireWildcard").default, e = (0, 
require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), i = t(require("../../ec-canvas/echarts")), a = getApp();

new e.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        proData: {
            type: Object,
            value: {},
            observer: function(t, e) {
                t && Object.keys(t).length > 0 ? this.setData({
                    calculationList: t.probability_entry,
                    majorList: t.probability_major,
                    ecData: "未知" == t.entry_proportion ? .001 : t.entry_proportion.replace("%", ""),
                    tips: t.entry_recommendations,
                    openShow: !0
                }) : this.setData({
                    ecData: .001,
                    tips: "填报建议：很抱歉，我们没能测算出结果，可能是因为数据不足"
                });
            }
        }
    },
    data: {
        calculationList: [],
        schoolName: a.globalData.schoolname,
        ecData: "",
        tips: "",
        openShow: !1,
        isOpen: !0,
        ec: {
            lazyLoad: !0
        }
    },
    lifetimes: {
        attached: function() {},
        ready: function() {
            this.setData({
                schoolName: a.globalData.schoolname
            }), this.oneComponent = this.selectComponent("#mychart-adm-calc"), this.init_echarts();
        }
    },
    methods: {
        open: function() {
            var t = this.data.isOpen;
            this.setData({
                isOpen: !t
            });
        },
        init_echarts: function() {
            var t = this;
            this.oneComponent.init(function(e, a, o, n) {
                var r = i.init(e, null, {
                    width: a,
                    height: o,
                    devicePixelRatio: n
                });
                return r.setOption(t.getOption()), t.chart = r, r;
            });
        },
        getOption: function() {
            return {
                series: [ {
                    type: "gauge",
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 100,
                    radius: "100%",
                    center: [ "50%", "55%" ],
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            colorStops: [ {
                                offset: 0,
                                color: "#59F0A6"
                            }, {
                                offset: 1,
                                color: "#37E3B4"
                            } ]
                        }
                    },
                    progress: {
                        show: !0,
                        roundCap: !0,
                        width: 10
                    },
                    pointer: {
                        show: !1
                    },
                    axisLine: {
                        roundCap: !0,
                        lineStyle: {
                            width: 10
                        }
                    },
                    axisTick: {
                        show: !1
                    },
                    splitLine: {
                        show: !1
                    },
                    axisLabel: {
                        show: !1
                    },
                    data: [ {
                        value: this.data.ecData,
                        name: "录取概率",
                        title: {
                            fontSize: 12,
                            color: "#C0C0C0",
                            offsetCenter: [ "0%", "12%" ]
                        },
                        detail: {
                            fontSize: 18,
                            fontWeight: 800,
                            color: "#303133",
                            valueAnimation: !0,
                            offsetCenter: [ "0%", "-25%" ],
                            formatter: function(t) {
                                return .001 == t ? "未知" : t + "%";
                            }
                        }
                    } ]
                } ]
            };
        }
    }
});