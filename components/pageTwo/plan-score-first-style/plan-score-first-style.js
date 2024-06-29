var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/objectSpread2");

require("../../../@babel/runtime/helpers/Arrayincludes");

var a = e(require("../../../utils/http")), i = getApp(), r = new a.default.Http();

Component({
    properties: {
        showSearch: {
            type: Boolean,
            value: !0
        },
        height: {
            type: Number,
            value: 700
        },
        searchType: {
            type: String,
            value: "",
            observer: function(e, t) {
                1 == e ? this.setData({
                    secConfigUrl: "/miniapp/enroll_plan/config",
                    secUrl: "/miniapp/enroll_plan"
                }) : 2 == e && this.setData({
                    secConfigUrl: "/miniapp/score/config",
                    secUrl: "/miniapp/score"
                }), this.getConfig(), this.getSearch();
            }
        },
        enrollType: {
            type: String,
            value: "1"
        }
    },
    data: {
        total_num: 0,
        major_num: 0,
        province_num: 0,
        province_id: "",
        province_name: "",
        year: 0,
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
        yzsubject: "",
        option: "",
        secConfigUrl: "",
        secUrl: "",
        admissionLineList: [],
        majorList: [],
        entrance_line_alias: "",
        allList: [],
        activeIds: [],
        plan_key: [],
        score_key: []
    },
    methods: {
        tapMajor: function(e) {
            var t = e.currentTarget.dataset.id, a = this.data.activeIds;
            if (a.includes(t)) {
                var i = a.indexOf(t);
                a.splice(i, 1);
            } else a.push(t);
            this.setData({
                activeIds: a
            });
        },
        goMajorSearch: function() {
            wx.navigateTo({
                url: "/packageA/pages/plan-score-histo-search/plan-score-histo-search?searchType=" + this.data.searchType
            });
        },
        goSearch: function() {
            wx.navigateBack({
                delta: 0
            });
        },
        getSearch: function() {
            var e = this;
            try {
                var a = wx.getStorageSync("searchModel");
                a && this.setData(t(t({}, this.data), a));
            } catch (e) {}
            var s = this.data, n = s.province_id, o = s.year, l = s.divition_id, c = s.subject_id, p = s.batch, u = s.campus, h = s.xz, d = s.cc, _ = s.zsdx, y = s.fzxx, m = s.bxd, v = s.major, g = s.pyd, b = s.yzqy, f = s.xxfs, x = s.tdxl, j = s.lx, z = s.yzsubject, D = {
                enroll_type: this.properties.enrollType,
                province_id: n,
                year: o,
                divition_id: l,
                subject_id: c,
                batch: p,
                campus: u,
                length: h,
                level: d,
                object: _,
                issuing_school: y,
                point: m,
                major: v,
                train_point: g,
                area: b,
                study_type: f,
                equivalence: x,
                type: j,
                subject: z
            };
            r.get(i.globalData.baseUrl + this.data.secUrl, D).then(function(t) {
                if (2 == e.properties.searchType) {
                    var a = t.score[1] ? t.score[1] : [], i = t.score[2] ? t.score[2] : [];
                    e.setData({
                        admissionLineList: a,
                        majorList: i,
                        score_key: t.score_key,
                        allList: a.concat(i),
                        entrance_line_alias: t.entrance_line_alias
                    });
                } else 1 == e.properties.searchType && e.setData({
                    allList: null == t ? void 0 : t.plan,
                    plan_key: null == t ? void 0 : t.plan_key,
                    total_num: t.total_num,
                    major_num: t.major_num
                });
            });
        },
        getConfig: function() {
            var e = this;
            r.get(i.globalData.baseUrl + this.data.secConfigUrl, {
                enroll_type: this.properties.enrollType
            }).then(function(t) {
                e.setData({
                    option: t.option
                });
            });
        }
    }
});