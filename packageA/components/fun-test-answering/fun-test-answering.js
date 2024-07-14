var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../../utils/http")), s = getApp(), o = new a.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        type: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && (this.setData({
                    type: t
                }), this.getQuestionList());
            }
        }
    },
    data: {
        baseUrl: "https://career.schoolpi.net",
        open_id: s.globalData.openid,
        school_name: s.globalData.schoolname,
        test_record_id: "",
        type: "",
        index: 0,
        progressNum: 0,
        percentNum: 0,
        total: 60,
        correctList: [],
        incorrectList: [],
        answers: {},
        tapTime: 0,
        isShow: !1,
        noShow: !1,
        analysisShow: !1,
        border: "#16B980",
        optionsList: [],
        listIndex: 0,
        isClick: !1,
        answersList: []
    },
    lifetimes: {
        attached: function() {},
        show: function() {}
    },
    methods: {
        getList: function() {
            var t = this, e = this.data, a = e.baseUrl, s = e.type, i = e.optionsList;
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
                        optionsList: i.concat(s),
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
                var i = t.currentTarget.dataset, n = i.id, r = i.type, c = this.data, l = c.listIndex, u = c.total, p = c.progressNum, h = (c.percentNum, 
                c.answers), d = {}, m = r;
                if (d[n.toString()] = m, this.setData({
                    answers: e(e({}, h), d),
                    listIndex: l < u ? l + 1 : u,
                    progressNum: p + 1,
                    percentNum: (p + 1) / u * 100
                }), 60 == n) if (this.setData({
                    analysisShow: !0
                }), s.globalData.userInfo && s.globalData.userInfo.length > 0) {
                    var f = s.globalData.userInfo, g = f.nickName, w = f.avatarUrl, b = f.phone;
                    this.toSubmit(g, w, b);
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
        },
        getQuestionList: function() {
            var t = this, e = this.data, a = e.type, i = e.optionsList;
            o.get(s.globalData.baseUrl4 + "/miniapp/questionList", {
                type: a
            }).then(function(e) {
                if (t.setData({
                    isShow: !0
                }), 0 != e.errcode) wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                }); else {
                    var a = e.data, s = a.list, o = a.total;
                    t.setData({
                        optionsList: i.concat(s),
                        total: o
                    });
                }
            });
        },
        chooseClick: function(t) {
            var e = this, a = new Date();
            if (!(a - this.data.tapTime < 700)) {
                this.setData({
                    tapTime: a
                });
                var o = this.data, i = o.listIndex, n = o.total, r = o.progressNum, c = (o.percentNum, 
                o.optionsList), l = o.isClick, u = o.answersList;
                if (!l) {
                    this.setData({
                        isClick: !0
                    });
                    var p = t.currentTarget.dataset, h = (p.item, p.score), d = p.idx;
                    c[i].options.forEach(function(t) {
                        t.checked = !1, t.score == h && (t.checked = !0);
                    }), console.log(h), u.push(h), this.setData({
                        answersList: u,
                        optionsList: c,
                        progressNum: r + 1,
                        percentNum: (r + 1) / n * 100
                    }), console.log(this.data.answersList);
                    var m = this, f = setTimeout(function() {
                        if (clearTimeout(f), d + 1 == n) if (e.setData({
                            analysisShow: !0
                        }), s.globalData.userInfo && s.globalData.userInfo.length > 0) {
                            var t = s.globalData.userInfo, a = t.nickName, o = t.avatarUrl, r = t.phone;
                            m.testSubmit(a, o, r);
                        } else wx.getStorage({
                            key: "userinfo",
                            success: function(t) {
                                var e = t.data, a = e.nickName, s = e.avatarUrl, o = e.phone;
                                m.testSubmit(a, s, o);
                            },
                            fail: function() {
                                m.testSubmit();
                            }
                        }); else m.setData({
                            listIndex: i < n ? i + 1 : n,
                            isClick: !1
                        });
                    }, 500);
                }
            }
        },
        testSubmit: function(t, e, a) {
            var i = this, n = this.data, r = n.answersList, c = (n.openid, n.school_name, n.type);
            o.post(s.globalData.baseUrl4 + "/miniapp/testResult", {
                answers: r,
                openid: s.globalData.openid,
                school_name: s.globalData.schoolname,
                source: "微信小程序",
                nickname: t,
                avatar: e,
                phone: a,
                type: c
            }).then(function(t) {
                if (0 != t.errcode) {
                    wx.showToast({
                        title: "答题失败，请重试！",
                        icon: "none"
                    }), i.setData({
                        analysisShow: !1,
                        optionsList: []
                    }), clearTimeout(e);
                    var e = setTimeout(function() {
                        wx.redirectTo({
                            url: "/packageA/pages/fun-test/fun-test"
                        });
                    }, 3e3);
                } else {
                    var a = t.data.record_id, s = wx.getStorageSync("testData");
                    if (s) {
                        var o = [];
                        s.forEach(function(t) {
                            o.push(t.type), t.type == c && (t.testId = a);
                        }), -1 == o.indexOf(c.toString()) && s.push({
                            type: c,
                            testId: a
                        }), wx.setStorageSync("testData", s);
                    } else {
                        var n = [];
                        n.push({
                            type: c,
                            testId: a
                        }), wx.setStorageSync("testData", n);
                    }
                    clearTimeout(r);
                    var r = setTimeout(function() {
                        wx.redirectTo({
                            url: "/packageA/pages/fun-test-res/fun-test-res?testId=".concat(a, "&type=").concat(c)
                        });
                    }, 3e3);
                }
            });
        }
    }
});