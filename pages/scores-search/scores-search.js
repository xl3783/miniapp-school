Page({
    data: {
        inputText: "",
        recordList: [],
        province_id: "",
        divition_id: "",
        subejct_id: "",
        campus_id: "",
        year: "",
        search_cate: "",
        batch: "",
        enroll_type: ""
    },
    goResult: function(t) {
        var e = this.data, a = e.province_id, c = e.divition_id, i = e.subject_id, o = e.campus_id, r = e.year, n = e.batch, s = e.enroll_type, d = e.search_cate, l = t.detail.value;
        this.setData({
            inputText: l
        });
        var _ = this.data.recordList, u = _.findIndex(function(t, e) {
            return t == l;
        });
        if (-1 != u ? (_.splice(u, 1), _.unshift(l)) : _.unshift(l), "scores" == d) wx.setStorage({
            data: _,
            key: "scoreRecordList"
        }); else if ("enroll-plan" == d) {
            wx.setStorage({
                data: _,
                key: "enrollPlanRecordList"
            });
            wx.getStorageSync("enrollPlanRecordList");
        }
        wx.navigateTo({
            url: "/pages/scores-search-result/scores-search-result?text=".concat(l, "&province_id=").concat(a, "&divition_id=").concat(c, "&subject_id=").concat(i, "&campus_id=").concat(o, "&year=").concat(r, "&batch=").concat(n, "&enroll_type=").concat(s, "&search_cate=").concat(d)
        });
    },
    goResultPage: function(t) {
        var e = t.currentTarget.dataset.text, a = this.data, c = a.province_id, i = a.divition_id, o = a.campus_id, r = a.subject_id, n = a.year, s = a.batch, d = a.enroll_type, l = a.search_cate;
        wx.navigateTo({
            url: "/pages/scores-search-result/scores-search-result?text=".concat(e, "&province_id=").concat(c, "&divition_id=").concat(i, "&subject_id=").concat(r, "&campus_id=").concat(o, "&year=").concat(n, "&batch=").concat(s, "&enroll_type=").concat(d, "&search_cate=").concat(l)
        });
    },
    onLoad: function(t) {
        var e = t.province_id, a = t.divition_id, c = t.subject_id, i = t.campus_id, o = t.batch, r = t.year, n = t.enroll_type, s = t.search_cate;
        this.setData({
            province_id: e,
            divition_id: a,
            subject_id: c,
            campus_id: i,
            batch: o,
            year: r,
            enroll_type: n,
            search_cate: s
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
        var t = this.data.search_cate;
        if ("enroll-plan" == t) try {
            var e = wx.getStorageSync("enrollPlanRecordList");
            e && this.setData({
                recordList: e
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        } else if ("scores" == t) try {
            var a = wx.getStorageSync("scoreRecordList");
            a && this.setData({
                recordList: a
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        }
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