var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#F6F7F8"
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        },
        fmType: {
            type: Number,
            value: "",
            observer: function(t, e) {
                t && (console.log("time->" + t), this.getList(t));
            }
        }
    },
    data: {
        style: 1,
        list: [],
        colorList: [ "../../../assets/image/z1.png", "../../../assets/image/z2.png", "../../../assets/image/z3.png", "../../../assets/image/z4.png", "../../../assets/image/z5.png", "../../../assets/image/z6.png", "../../../assets/image/z7.png", "../../../assets/image/z8.png" ],
        topNum: 0,
        department_alias: "系部",
        major_alias: "专业",
        show: !1,
        total: 0,
        page: 1,
        page_size: 20,
        isBottom: !1
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        goDetail: function(t) {
            var e = t.currentTarget.dataset.item;
            1 == e.intro_type ? e.child && e.child.length > 0 ? wx.navigateTo({
                url: "/pages/enroll-depart-intro-new/enroll-depart-intro-new?id=" + e.id + "&name=" + e.name
            }) : wx.navigateTo({
                url: "/pages/enroll-major-intro-new/enroll-major-intro-new?id=" + e.id + "&name=" + e.name
            }) : wx.redirectTo({
                url: "/pages/web-view/web-view?url=" + encodeURIComponent(e.intro_url)
            });
        },
        getList: function(t) {
            var i = this;
            wx.showLoading({
                title: "加载中"
            });
            var o = this, s = o.data, n = s.page, l = s.page_size, r = (s.total, s.list), g = {
                page: n,
                page_size: l
            };
            t && (g.type = t), a.get(e.globalData.baseUrl + "/miniapp/faculty", g).then(function(t) {
                for (var a = r.concat(t.list), s = a.length, n = i.data.colorList.length, l = Math.ceil(s / n), g = i.data.colorList, p = [], m = 0; m < l; m++) p = p.concat(g);
                wx.hideLoading(), o.setData({
                    colorList: p,
                    list: a,
                    total: t.count,
                    globalColor: e.globalData.globalColor,
                    isBottom: !(a.length < t.count),
                    show: !0
                });
            });
        },
        getMore: function() {
            var t = this.data, e = t.page, a = t.total;
            t.list.length < a ? (e += 1, this.setData({
                page: e,
                isBottom: !1
            }), this.getList(this.data.fmType)) : this.setData({
                isBottom: !0
            });
        }
    }
});