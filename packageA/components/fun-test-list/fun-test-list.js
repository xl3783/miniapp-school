var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/toConsumableArray"), a = t(require("../../../utils/http")), o = getApp(), s = new a.default.Http();

Component({
    properties: {},
    data: {
        testList: []
    },
    lifetimes: {
        attached: function() {
            this.getTestList();
        },
        ready: function() {}
    },
    methods: {
        getTestList: function() {
            var t = this;
            this.data.baseUrl1;
            console.log(o.globalData.baseUrl4), s.get(o.globalData.baseUrl4 + "/miniapp/questionIntro").then(function(a) {
                console.log(a), 0 != a.errcode ? wx.showToast({
                    title: a.errmsg,
                    icon: "none"
                }) : t.setData({
                    testList: e(a.data)
                });
            });
        },
        lookColumnDetail: function(t) {
            var e = t.currentTarget.dataset.item, a = e.type, o = e.title;
            console.log(a), console.log(o), wx.navigateTo({
                url: "/packageA/pages/fun-test/fun-test?type=" + a + "&title=" + o
            });
        }
    }
});