var t = require("../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../utils/http")), i = getApp(), n = new a.default.Http();

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
        recordList: []
    },
    tapMajor: function(t) {
        var e = t.currentTarget.dataset.index, a = e == this.data.showIndex ? -1 : e;
        this.setData({
            showIndex: a
        });
    },
    handleInput: function(t) {
        this.setData({
            inputText: t.detail.value
        });
    },
    tapItem: function(t) {
        var e, a = t.currentTarget.dataset.index, i = this.data.activeIndex, n = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease-out"
        });
        a == i && -1 != i ? (e = -1, n.opacity(0).height("0rpx").step()) : (e = a, n.opacity(1).height("114rpx").step()), 
        this.setData({
            activeIndex: e,
            toggleAnimationData: n.export()
        });
    },
    onLoad: function(t) {
        var e = t.text, a = t.province_id, i = t.divition_id, n = t.campus_id, r = t.subject_id, o = t.batch, s = t.year, c = t.enroll_type, d = t.search_cate;
        if (this.setData({
            inputText: e,
            province_id: a,
            divition_id: i,
            subject_id: r,
            campus_id: n,
            batch: o,
            year: s,
            enroll_type: c,
            search_cate: d
        }), "enroll-plan" == d) try {
            var p = wx.getStorageSync("enrollPlanRecordList");
            p && this.setData({
                recordList: p
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        } else if ("scores" == d) try {
            var l = wx.getStorageSync("scoreRecordList");
            l && this.setData({
                recordList: l
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        }
        this.getList();
    },
    getList: function() {
        var t = this, a = this.data, r = a.recordList, o = a.search_cate, s = a.inputText, c = a.province_id, d = a.divition_id, p = a.campus_id, l = a.subject_id, h = a.batch, u = a.enroll_type, g = a.year, _ = r.findIndex(function(t, e) {
            return t == s;
        });
        -1 != _ ? (r.splice(_, 1), r.unshift(s)) : r.unshift(s);
        var f = {
            major: s,
            province_id: c,
            divition_id: d > 0 ? d : "",
            subject_id: l > 0 ? l : "",
            campus_id: p > 0 ? p : "",
            batch: h > 0 ? h : "",
            enroll_type: u > 0 ? u : "",
            year: g > 0 ? g : ""
        };
        "scores" == o ? (n.get(i.globalData.baseUrl + "/miniapp/score", e({}, f)).then(function(e) {
            t.setData({
                admissionLineList: e.data[1] ? e.data[1] : [],
                majorList: e.data[2] ? e.data[2] : [],
                length: e.data[2] ? e.data[2].length : 0
            });
        }), wx.setStorage({
            data: r,
            key: "scoreRecordList"
        })) : "enroll-plan" == o && (n.get(i.globalData.baseUrl + "/miniapp/enroll_plan", f).then(function(e) {
            t.setData({
                majorList: e.data ? e.data : [],
                length: e.data ? e.data.length : 0
            });
        }), wx.setStorage({
            data: r,
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