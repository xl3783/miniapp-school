var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../../utils/http")), s = getApp(), o = new a.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        }
    },
    data: {
        baseUrl: "https://career.schoolpi.net",
        open_id: s.globalData.openid,
        school_name: s.globalData.schoolname,
        test_record_id: "",
        type: 1,
        index: 0,
        progressNum: 0,
        percentNum: 0,
        total: 60,
        problemList: [],
        correctList: [],
        incorrectList: [],
        answers: {},
        tapTime: !1,
        isShow: !1,
        noShow: !1,
        analysisShow: !1
    },
    lifetimes: {
        attached: function() {
            this.getList();
        },
        show: function() {}
    },
    methods: {
        getList: function() {
            var t = this, e = this.data, a = e.baseUrl, s = e.type, i = e.problemList;
            o.get(a + "/interest/test_item_bank", {
                type: s
            }).then(function(e) {
                if (t.setData({
                    isShow: !0
                }), 0 == e.data.banks.length && t.setData({
                    noShow: !0
                }), 0 != e.errcode) wx.showToast({
                    title: e.msg,
                    icon: "none"
                }); else {
                    var a = e.data, s = a.banks, o = a.total;
                    t.setData({
                        problemList: i.concat(s),
                        total: o
                    });
                }
            });
        },
        toSubmit: function(t, e, a) {
            var i = this.data, n = i.baseUrl, r = i.answers;
            i.open_id, i.school_name;
            o.post(n + "/interest/test_analysis", {
                answers: r,
                open_id: s.globalData.openid,
                school_name: s.globalData.schoolname,
                source: "微信小程序",
                nickname: t,
                avatar: e,
                phone: a
            }).then(function(t) {
                if (0 != t.errcode) {
                    wx.showToast({
                        title: t.msg,
                        icon: "none"
                    }), clearTimeout(e);
                    var e = setTimeout(function() {
                        wx.redirectTo({
                            url: "/packageA/pages/vocational-interest-test/vocational-interest-test"
                        });
                    }, 3e3);
                } else {
                    var a = t.data.test_record_id;
                    wx.setStorageSync("testId", a), clearTimeout(s);
                    var s = setTimeout(function() {
                        wx.redirectTo({
                            url: "/packageA/pages/vocational-test-res/vocational-test-res?testId=" + a
                        });
                    }, 3e3);
                }
            });
        },
        toChoose: function(t) {
            var a = this, o = new Date();
            if (!(o - this.data.tapTime < 400)) {
                this.setData({
                    tapTime: o
                });
                var i = t.currentTarget.dataset, n = i.id, r = i.type, l = this.data, c = l.index, u = l.total, p = l.progressNum, h = (l.percentNum, 
                l.answers), m = {}, d = r;
                if (m[n.toString()] = d, this.setData({
                    answers: e(e({}, h), m),
                    index: c < u ? c + 1 : u,
                    progressNum: p + 1,
                    percentNum: (p + 1) / u * 100
                }), 60 == n) if (this.setData({
                    analysisShow: !0
                }), s.globalData.userInfo && s.globalData.userInfo.length > 0) {
                    var g = s.globalData.userInfo, b = g.nickName, f = g.avatarUrl, w = g.phone;
                    this.toSubmit(b, f, w);
                } else wx.getStorage({
                    key: "userinfo",
                    success: function(t) {
                        var e = t.data, s = e.nickName, o = e.avatarUrl, i = e.phone;
                        a.toSubmit(s, o, i);
                    },
                    fail: function() {
                        a.toSubmit();
                    }
                });
            }
        }
    }
});