var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http"));

getApp(), new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        tabname: {
            type: String,
            value: "职业兴趣测试"
        }
    },
    data: {
        intrHeight: "auto",
        testShow: !1
    },
    lifetimes: {
        attached: function() {
            var t = this, e = this;
            setTimeout(function() {
                t.setData({
                    testShow: !0
                }), e.data.height < 700 && t.setData({
                    intrHeight: "175px"
                });
            }, 300);
        },
        ready: function() {}
    },
    methods: {
        startTest: function(t) {
            wx.navigateTo({
                url: "/packageA/pages/answer-sheet/answer-sheet?name=" + this.data.tabname
            });
        },
        getReport: function() {
            var t = wx.getStorageSync("testId") ? wx.getStorageSync("testId") : "";
            console.log(t), wx.navigateTo({
                url: "/packageA/pages/vocational-test-res/vocational-test-res?testId=" + t
            });
        }
    }
});