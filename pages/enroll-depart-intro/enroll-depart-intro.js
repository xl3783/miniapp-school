var a = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), e = new a.default.Http();

Page({
    data: {
        navList: [ {
            cate: "概况"
        }, {
            cate: "系部"
        } ],
        xibuList: [],
        active: 0,
        showDetail: !1,
        globalColor: "",
        colorList: [ "../../assets/image/z1.png", "../../assets/image/z2.png", "../../assets/image/z3.png", "../../assets/image/z4.png", "../../assets/image/z5.png", "../../assets/image/z6.png", "../../assets/image/z7.png", "../../assets/image/z8.png" ],
        tabName: "",
        department_alias: "",
        id: 0,
        showIntro: !0,
        showMajor: !0,
        major_alias: ""
    },
    close: function() {
        this.setData({
            showDetail: !1
        });
    },
    chooseNav: function(a) {
        this.setData({
            active: a.currentTarget.dataset.index
        });
    },
    lookDetail: function() {
        this.setData({
            showDetail: !0
        });
    },
    onLoad: function(a) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var e = a.id, i = a.style, s = [ {
            cate: "概况"
        }, {
            cate: a.department_alias ? a.department_alias : "系部"
        } ];
        this.setData({
            id: e,
            style: i,
            globalColor: t.globalData.globalColor,
            navList: s,
            tabName: decodeURIComponent(a.name),
            department_alias: a.department_alias ? a.department_alias : "系部"
        }), this.getList();
    },
    getList: function() {
        var a = this;
        e.get(t.globalData.baseUrl + "/miniapp/major", {
            college_id: this.data.id
        }).then(function(t) {
            for (var e = t.data.length, i = a.data.colorList.length, s = Math.ceil(e / i), n = a.data.colorList, o = [], r = 0; r < s; r++) o = o.concat(n);
            var l = a.data.navList.slice(1);
            !t.intro && t.data.length > 0 ? a.setData({
                navList: l,
                showIntro: !1,
                showMajor: !0
            }) : t.intro && 0 == t.data.length ? a.setData({
                navList: [ {
                    cate: "概况"
                } ],
                showIntro: !0,
                showMajor: !1
            }) : t.intro && t.data.length > 0 ? a.setData({
                navList: a.data.navList,
                showIntro: !0,
                showMajor: !0
            }) : t.intro || 0 != t.data.length || a.setData({
                navList: [],
                showIntro: !1,
                showMajor: !1
            }), a.setData({
                colorList: o,
                xibuList: t.data,
                intro: t.intro,
                major_alias: t.major_alias
            });
        });
    },
    goMajor: function(a) {
        var t = a.currentTarget.dataset.item;
        wx.navigateTo({
            url: "/pages/enroll-major-intro/enroll-major-intro?id=" + t.id + "&name=" + t.name + "&style=2&major_alias=" + this.data.major_alias
        });
    },
    linktap: function(a) {
        var t = a.detail.href, e = t.substring(t.lastIndexOf(".") + 1, t.length);
        "pdf" != e && "doc" != e && "docx" != e && "xls" != e && "xlsx" != e && "ppt" != e && "pptx" != e || wx.downloadFile({
            url: t,
            success: function(a) {
                var t = a.tempFilePath;
                wx.openDocument({
                    filePath: t
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            path: "/pages/pages/enroll-depart-intro/enroll-depart-intro?id=" + this.data.id + "&name=" + this.data.tabName + "&style=3&department_alias=" + this.data.department_alias
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "id=" + this.data.id + "&name=" + this.data.tabName + "&style=3&department_alias=" + this.data.department_alias,
            imageUrl: t.globalData.schoollogo
        };
    }
});