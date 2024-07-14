var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/objectSpread2");

require("../../../@babel/runtime/helpers/Arrayincludes");

var a = e(require("../../../utils/http")), i = getApp(), r = new a.default.Http();

Page({
    data: {
        majorList: [],
        admissionLineList: [],
        showIndex: 0,
        inputText: "",
        length: 0,
        search_cate: "",
        activeIndex: 0,
        batch: "",
        enroll_type: "",
        recordList: [],
        searchType: "",
        activeIds: []
    },
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
    handleInput: function(e) {
        this.setData({
            inputText: e.detail.value
        });
    },
    tapItem: function(e) {
        var t, a = e.currentTarget.dataset.index, i = this.data.activeIndex, r = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease-out"
        });
        a == i && -1 != i ? (t = -1, r.opacity(0).height("0rpx").step()) : (t = a, r.opacity(1).height("114rpx").step()), 
        this.setData({
            activeIndex: t,
            toggleAnimationData: r.export()
        });
    },
    onLoad: function(e) {
        var t = e.searchType, a = e.text;
        if (this.setData({
            searchType: t,
            inputText: a
        }), 1 == t) try {
            var i = wx.getStorageSync("enrollPlanRecordList");
            i && this.setData({
                recordList: i
            });
        } catch (e) {
            this.setData({
                recordList: []
            });
        } else if (2 == t) try {
            var r = wx.getStorageSync("scoreRecordList");
            r && this.setData({
                recordList: r
            });
        } catch (e) {
            this.setData({
                recordList: []
            });
        }
        this.getList();
    },
    getList: function() {
        var e, a = this, n = this.data, s = n.recordList, o = n.searchType, c = n.inputText;
        try {
            var p = wx.getStorageSync("searchModel");
            e = {
                enroll_type: p.enroll_type,
                province_id: p.province_id,
                year: p.year,
                divition_id: p.divition_id,
                subject_id: p.subject_id,
                batch: p.batch,
                campus: p.campus,
                length: p.xz,
                level: p.cc,
                object: p.zsdx,
                issuing_school: p.fzxx,
                point: p.bxd,
                major: p.major,
                train_point: p.pyd,
                area: p.yzqy,
                study_type: p.xxfs,
                equivalence: p.tdxl,
                type: p.lx,
                subject: p.yzsubject
            };
        } catch (e) {
            console.error(e);
        }
        var l = s.findIndex(function(e, t) {
            return e == c;
        });
        -1 != l ? (s.splice(l, 1), s.unshift(c)) : s.unshift(c), 2 == o ? (r.get(i.globalData.baseUrl + "/miniapp/score", t(t({}, e), {}, {
            major: c
        })).then(function(e) {
            a.setData({
                admissionLineList: e.score[1] ? e.score[1] : [],
                majorList: e.score[2] ? e.score[2] : [],
                length: e.score[2] ? e.score[2].length : 0
            });
        }), wx.setStorage({
            data: s,
            key: "scoreRecordList"
        })) : 1 == o && (r.get(i.globalData.baseUrl + "/miniapp/enroll_plan", t(t({}, e), {}, {
            major: c
        })).then(function(e) {
            a.setData({
                majorList: e.plan ? e.plan : [],
                length: e.plan ? e.plan.length : 0
            });
        }), wx.setStorage({
            data: s,
            key: "enrollPlanRecordList"
        }));
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});