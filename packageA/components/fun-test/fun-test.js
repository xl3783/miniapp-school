var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        tabname: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && (this.setData({
                    type: t
                }), this.getQuestionIntro());
            }
        }
    },
    data: {
        type: "",
        intrHeight: "auto",
        testShow: !1,
        title: "",
        intro: "",
        desc: ""
    },
    lifetimes: {
        attached: function() {
            var t = this, e = this;
            setTimeout(function() {
                t.setData({
                    testShow: !0
                });
                var a = e.data.height;
                console.log(a), a < 1e3 && a > 820 ? t.setData({
                    intrHeight: "270px"
                }) : a <= 820 && a >= 700 ? t.setData({
                    intrHeight: "220px"
                }) : a < 700 && t.setData({
                    intrHeight: "175px"
                });
            }, 300);
        },
        ready: function() {}
    },
    methods: {
        getQuestionIntro: function() {
            var t = this, n = this.data, i = n.type;
            n.title, n.intro, n.desc;
            a.get(e.globalData.baseUrl4 + "/miniapp/questionIntro", {
                type: i
            }).then(function(e) {
                if (console.log(e), 0 != e.errcode) wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                }); else {
                    var a = e.data, n = a.title, i = a.desc, s = a.intro;
                    t.setData({
                        title: n,
                        desc: i,
                        intro: s
                    });
                }
            });
        },
        startTest: function(t) {
            var e = this.data, a = e.type, n = e.tabname;
            wx.navigateTo({
                url: "/packageA/pages/fun-test-answering/fun-test-answering?name=".concat(n, "&type=") + a
            });
        },
        getReport: function() {
            var t = this.data.type, e = (wx.getStorageSync("testId") && wx.getStorageSync("testId"), 
            wx.getStorageSync("testData"));
            if (console.log(e), e && e.length > 0) {
                var a, n, i = null !== (a = null === (n = e.filter(function(e) {
                    return e.type == t;
                })[0]) || void 0 === n ? void 0 : n.testId) && void 0 !== a ? a : "";
                console.log(i), console.log(t), wx.navigateTo({
                    url: "/packageA/pages/fun-test-res/fun-test-res?testId=".concat(i, "&type=") + t
                });
            } else wx.navigateTo({
                url: "/packageA/pages/fun-test-res/fun-test-res?type=".concat(t, "&testId=") + ""
            });
        }
    }
});