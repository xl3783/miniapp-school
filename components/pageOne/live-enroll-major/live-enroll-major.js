var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        }
    },
    data: {
        colorList: [ "../../../assets/image/z1.png", "../../../assets/image/z2.png", "../../../assets/image/z3.png", "../../../assets/image/z4.png", "../../../assets/image/z5.png", "../../../assets/image/z6.png", "../../../assets/image/z7.png", "../../../assets/image/z8.png" ],
        list: [],
        activeIndex: 0
    },
    lifetimes: {
        attached: function() {
            this.getList();
        }
    },
    methods: {
        getList: function() {
            var t = this;
            a.get(e.globalData.baseUrl + "/miniapp/live/major").then(function(e) {
                for (var a = e.data.length, s = t.data.colorList.length, i = Math.ceil(a / s), n = t.data.colorList, r = [], g = 0; g < i; g++) r = r.concat(n);
                0 != e.errcode ? wx.showToast({
                    title: e.errmsg,
                    icon: "none"
                }) : t.setData({
                    list: e.data,
                    colorList: r
                });
            });
        },
        clickItem: function(t) {
            var e = t.currentTarget.dataset.id;
            this.data.activeIndex == e ? this.setData({
                activeIndex: -1
            }) : this.setData({
                activeIndex: e
            });
        }
    }
});