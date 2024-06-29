var a = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), t = getApp(), e = new a.default.Http();

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
        }
    },
    data: {
        dataIsLoad: !1,
        style: 1,
        list: [],
        colorList: [ "../../../assets/image/z1.png", "../../../assets/image/z2.png", "../../../assets/image/z3.png", "../../../assets/image/z4.png", "../../../assets/image/z5.png", "../../../assets/image/z6.png", "../../../assets/image/z7.png", "../../../assets/image/z8.png" ],
        topNum: 0,
        department_alias: "系部",
        major_alias: "专业"
    },
    lifetimes: {
        attached: function() {
            this.getList();
        }
    },
    methods: {
        goDetail: function(a) {
            var t = a.currentTarget.dataset.item, e = this.data.style;
            1 == e ? wx.navigateTo({
                url: "/pages/enroll-depart-intro/enroll-depart-intro?id=" + t.id + "&name=" + t.name + "&style=1&department_alias=" + this.data.department_alias
            }) : 2 == e ? wx.navigateTo({
                url: "/pages/enroll-major-intro/enroll-major-intro?id=" + t.id + "&name=" + t.name + "&style=2&major_alias=" + this.data.major_alias
            }) : 3 == e ? 1 == t.type ? wx.navigateTo({
                url: "/pages/enroll-depart-intro/enroll-depart-intro?id=" + t.id + "&name=" + t.name + "&style=3&department_alias=" + this.data.department_alias
            }) : wx.navigateTo({
                url: "/pages/enroll-major-intro/enroll-major-intro?id=" + t.id + "&name=" + t.name + "&style=3&major_alias=" + this.data.major_alias
            }) : 4 == e && wx.navigateTo({
                url: "/pages/enroll-major-intro/enroll-major-intro?id=" + t.id + "&name=" + t.name + "&style=4&major_alias=" + this.data.major_alias
            });
        },
        getList: function() {
            var a = this, i = this;
            wx.showLoading({
                title: "加载中"
            }), e.get(t.globalData.baseUrl + "/miniapp/major").then(function(e) {
                for (var s = e.data.length, l = a.data.colorList.length, r = Math.ceil(s / l), o = a.data.colorList, n = [], m = 0; m < r; m++) n = n.concat(o);
                console.log(e), i.setData({
                    colorList: n,
                    style: e.style,
                    list: e.data,
                    department_alias: e.department_alias,
                    major_alias: e.major_alias,
                    globalColor: t.globalData.globalColor,
                    dataIsLoad: !0
                }), wx.hideLoading();
            });
        }
    }
});