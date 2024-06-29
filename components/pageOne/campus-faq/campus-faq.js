var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        style: 2,
        cateList: [],
        secQuestionList: [],
        questionList: [],
        activeIndex: -1,
        colorList: [ "#1487FF", "#21B9A2", "#FF8660" ],
        topNum: 0,
        dataIsLoad: !1
    },
    lifetimes: {
        attached: function() {
            this.getQuestionCate();
        }
    },
    methods: {
        openQuestion: function(t) {
            var e = t.currentTarget.dataset.index, a = -1;
            a = e == this.data.activeIndex ? -1 : e, this.setData({
                activeIndex: a,
                secQuestionList: this.data.cateList[e].content
            });
        },
        getQuestionCate: function() {
            var t = this;
            wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/problem").then(function(a) {
                for (var i = a.data.length, o = t.data.colorList.length, s = Math.ceil(i / o), n = t.data.colorList, l = [], r = 0; r < s; r++) l = l.concat(n);
                t.setData({
                    colorList: l,
                    cateList: a.data,
                    style: a.style,
                    dataIsLoad: !0,
                    globalColor: e.globalData.globalColor
                });
            }).finally(function() {
                wx.hideLoading();
            });
        },
        scrollToTop: function() {
            this.setData({
                topNum: 0
            });
        }
    }
});