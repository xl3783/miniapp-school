var e = require("../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../@babel/runtime/helpers/defineProperty"), a = e(require("../../utils/http")), i = getApp(), n = new a.default.Http();

Page({
    data: {
        tabName: "",
        areaText: "请选择",
        subjectText: "学科",
        divitionText: "科类",
        yearText: "年份",
        campusText: "校区",
        activeIndex: -1,
        subjectId: -1,
        divitionId: -1,
        yearId: -1,
        campusId: -1,
        areaId: -1,
        batch: -1,
        enroll_type: -1,
        currentPro: "安徽省",
        globalColor: "#1487FF",
        showModel: !1,
        divitionList: [],
        areaList: [],
        yearList: [],
        campusList: [],
        batchList: [],
        enrollTypeList: [],
        isClick: !1,
        allProvinceList: [],
        height: 0,
        showBatch: !1,
        showSubject: !1,
        showDivition: !1,
        showCampus: !1,
        showArea: !1,
        showYear: !1,
        showEnrollType: !1,
        enroll_plan_list: 1
    },
    onLoad: function(e) {
        var t = e.areaId, a = e.divitionId, n = e.divitionText, o = e.subjectId, d = e.subjectText, l = e.campusId, r = e.yearId, s = e.areaText, c = e.campusText, u = e.enroll_type, p = e.batch;
        this.getConfig(), this.setData({
            areaId: t,
            divitionId: a,
            divitionText: n,
            subjectId: o,
            subjectText: d,
            campusId: l,
            campusText: c,
            yearId: r,
            yearText: r ? r + "年" : "",
            globalColor: i.globalData.globalColor,
            areaText: s,
            enroll_type: u,
            batch: p
        });
    },
    getConfig: function() {
        var e = this, t = this.data, a = t.areaId, o = t.yearId, d = t.campusId, l = t.batch, r = t.enroll_type, s = t.subjectId, c = t.divitionId;
        n.get(i.globalData.baseUrl + "/miniapp/enroll_plan/config", {
            province_id: -1 != a ? a : "",
            year: -1 != o ? o : "",
            campus_id: -1 != d ? d : "",
            batch: l,
            enroll_type: 0 != r ? r : "",
            divition_id: -1 != c ? c : "",
            subject_id: -1 != s ? s : ""
        }).then(function(t) {
            var a = t.option.length > 0 ? t.option.split(",") : [], n = a.findIndex(function(e) {
                return 1 == e;
            }) > -1, o = a.findIndex(function(e) {
                return 2 == e;
            }) > -1, d = a.findIndex(function(e) {
                return 3 == e;
            }) > -1, l = a.findIndex(function(e) {
                return 4 == e;
            }) > -1, r = a.findIndex(function(e) {
                return 5 == e;
            }) > -1, s = a.findIndex(function(e) {
                return 6 == e;
            }) > -1, c = a.findIndex(function(e) {
                return 7 == e;
            }) > -1;
            e.setData({
                showEnrollType: n,
                showArea: o,
                showYear: d,
                showCampus: l,
                showBatch: r,
                showSubject: c,
                showDivition: s,
                enrollTypeList: n ? t.enroll_type : [],
                batchList: r ? t.batch : [],
                areaList: o ? t.provinces : [],
                divitionList: s ? t.divition : [],
                subjectList: c ? t.subject : [],
                yearList: d ? t.years : [],
                campusList: l ? t.campus : [],
                allProvinceList: t.all_province,
                globalColor: i.globalData.globalColor,
                enroll_plan_list: t.enroll_plan_list
            });
        });
    },
    bindAreaChange: function(e) {
        var a, i = e.detail.value, n = this.data.areaList[i];
        this.setData((a = {
            areaId: n.provinceid,
            areaText: n.province,
            activeIndex: -1,
            isClick: !0,
            divitionText: "科类",
            subjectText: "学科",
            yearText: "年份",
            campusText: "校区"
        }, t(a, "activeIndex", -1), t(a, "divitionId", -1), t(a, "subjectId", -1), t(a, "yearId", -1), 
        t(a, "campusId", -1), t(a, "batch", -1), t(a, "enroll_type", -1), t(a, "enrollTypeText", "类型"), 
        t(a, "batchText", "批次"), a));
    },
    bindYearChange: function(e) {
        var t = e.detail.value, a = this.data.yearList[t];
        this.setData({
            yearId: a,
            yearText: a ? a + "年" : "不限",
            activeIndex: -1,
            isClick: !0
        });
    },
    bindCampusChange: function(e) {
        var t = e.detail.value, a = this.data.campusList[t];
        this.setData({
            campusId: a.campus_id,
            campusText: a.name,
            activeIndex: -1,
            isClick: !0
        });
    },
    bindBatchChange: function(e) {
        var t = e.detail.value, a = this.data.batchList[t];
        this.setData({
            batch: a,
            activeIndex: -1,
            isClick: !0
        });
    },
    handleEnroll: function(e) {
        var t, a, i, n, o = e.currentTarget.dataset.item;
        this.data.enroll_type === o.id && (o = {}), this.setData({
            enroll_type: null !== (t = null === (a = o) || void 0 === a ? void 0 : a.id) && void 0 !== t ? t : -1,
            enrollTypeText: null !== (i = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "类型",
            activeIndex: -1,
            isClick: !0
        });
    },
    handleSubject: function(e) {
        var t, a, i, n, o = e.currentTarget.dataset.item;
        this.data.subjectId === o.id && (o = {}), this.setData({
            subjectId: null !== (t = null === (a = o) || void 0 === a ? void 0 : a.id) && void 0 !== t ? t : -1,
            subjectText: null !== (i = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "学科",
            activeIndex: -1,
            isClick: !0
        });
    },
    handleDivition: function(e) {
        var t, a, i, n, o = e.currentTarget.dataset.item;
        this.data.divitionId === o.divition_id && (o = {}), this.setData({
            divitionId: null !== (t = null === (a = o) || void 0 === a ? void 0 : a.divition_id) && void 0 !== t ? t : -1,
            divitionText: null !== (i = null === (n = o) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "科类",
            activeIndex: -1,
            isClick: !0
        }), "新高考" != o.name && this.setData({
            subjectId: -1,
            subjectText: ""
        });
    },
    handleReset: function() {
        var e = this;
        wx.getStorage({
            key: "init-enroll-plan",
            success: function(t) {
                var a = t.data, i = a.campusId, n = a.campusText, o = a.subjectId, d = a.subjectText, l = a.divitionId, r = a.divitionText, s = a.yearId, c = a.yearText, u = a.areaId, p = a.areaText, v = a.enroll_type, h = a.batch, I = a.enroll_plan_list;
                e.setData({
                    campusId: i,
                    campusText: n,
                    subjectId: o,
                    subjectText: d,
                    divitionId: l,
                    divitionText: r,
                    yearId: s,
                    yearText: c,
                    areaId: u,
                    areaText: p,
                    enroll_type: v,
                    batch: h,
                    enroll_plan_list: I
                });
            }
        });
    },
    handleSure: function() {
        var e = this.data, t = e.campusId, a = e.campusText, i = e.subjectId, n = e.subjectText, o = e.divitionId, d = e.divitionText, l = e.yearId, r = e.yearText, s = e.areaId, c = e.areaText, u = e.enroll_type, p = e.batch, v = e.enroll_plan_list;
        wx.setStorage({
            data: {
                campusId: t,
                campusText: a,
                subjectId: i,
                subjectText: n,
                divitionId: o,
                divitionText: d,
                yearId: l,
                yearText: r,
                areaId: s,
                areaText: c,
                enroll_type: u,
                batch: p,
                enroll_plan_list: v
            },
            key: "init-enroll-plan"
        }), wx.navigateBack({
            delta: 1
        });
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
    onReachBottom: function() {},
    onShareAppMessage: function() {
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});