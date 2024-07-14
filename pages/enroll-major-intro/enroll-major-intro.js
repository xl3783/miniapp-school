var a = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), e = new a.default.Http();

Page({
    data: {
        navList: [],
        xibuList: [],
        majorList: [],
        active: 0,
        showDetail: !1,
        globalColor: "",
        name1: "",
        intro: "",
        intro1: "",
        showIntro: !1,
        showMajor: !1,
        detailName: "",
        dataIsLoad: !1
    },
    close: function() {
        this.setData({
            showDetail: !1,
            name1: ""
        });
    },
    mediaError: function(a) {
        console.log(a);
    },
    chooseNav: function(a) {
        this.setData({
            active: a.currentTarget.dataset.index
        });
    },
    lookDetail: function(a) {
        var o = this, i = a.currentTarget.dataset.item, n = i.id, s = i.name;
        this.setData({
            detailName: s
        }), 1 == t.globalData.major_intro_style ? (wx.showLoading({
            title: "加载中"
        }), e.get(t.globalData.baseUrl + "/miniapp/major/" + n).then(function(a) {
            o.setData({
                name1: a.name,
                showDetail: !0,
                intro1: a.intro,
                dataIsLoad: !0
            }), wx.hideLoading();
        })) : (wx.navigateTo({
            url: "/pages/enroll-major-intro-detail/enroll-major-intro-detail?id=" + n
        }), wx.hideLoading());
    },
    onLoad: function(a) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var e = a.id, o = a.style, i = [ {
            cate: "概况"
        }, {
            cate: a.major_alias ? a.major_alias : "专业"
        } ];
        this.setData({
            name: decodeURIComponent(a.name),
            id: e,
            navList: i,
            style: o,
            globalColor: t.globalData.globalColor,
            dataIsLoad: !0
        }), this.getList();
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
    getList: function() {
        var a = this, o = this.data.style, i = [];
        2 == o || 3 == o ? (wx.showLoading({
            title: "加载中"
        }), i = this.data.navList, e.get(t.globalData.baseUrl + "/miniapp/major", {
            department_id: this.data.id
        }).then(function(t) {
            var e = i.slice(1);
            !t.intro && t.data.length > 0 && (a.setData({
                navList: e,
                showIntro: !1,
                showMajor: !0,
                dataIsLoad: !0
            }), wx.hideLoading()), t.intro && 0 == t.data.length ? (a.setData({
                navList: [ {
                    cate: "概况"
                } ],
                showIntro: !0,
                showMajor: !1,
                dataIsLoad: !0
            }), wx.hideLoading()) : t.intro && t.data.length > 0 ? (a.setData({
                navList: i,
                showIntro: !0,
                showMajor: !0,
                dataIsLoad: !0
            }), wx.hideLoading()) : t.intro || 0 != t.data.length || (a.setData({
                navList: [],
                showIntro: !1,
                showMajor: !1,
                dataIsLoad: !0
            }), wx.hideLoading()), a.setData({
                majorList: t.data,
                intro: t.intro,
                dataIsLoad: !0
            }), wx.hideLoading();
        })) : 4 == o && (i = [ {
            cate: "概况"
        }, {
            cate: "关联专业"
        } ], wx.showLoading({
            title: "加载中"
        }), e.get(t.globalData.baseUrl + "/miniapp/major", {
            admission_id: this.data.id
        }).then(function(t) {
            var e = i.slice(1);
            !t.intro && t.data.length > 0 && a.setData({
                navList: e,
                showIntro: !1,
                showMajor: !0,
                dataIsLoad: !0
            }), t.intro && 0 == t.data.length ? (a.setData({
                navList: [ {
                    cate: "概况"
                } ],
                showIntro: !0,
                showMajor: !1,
                dataIsLoad: !0
            }), wx.hideLoading()) : (a.setData({
                navList: i,
                showIntro: !0,
                showMajor: !0,
                dataIsLoad: !0
            }), wx.hideLoading()), a.setData({
                majorList: t.data,
                intro: t.intro,
                dataIsLoad: !0
            }), wx.hideLoading();
        }), wx.hideLoading());
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
            title: this.data.name
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            imageUrl: t.globalData.schoollogo
        };
    }
});