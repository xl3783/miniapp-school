var t = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../@babel/runtime/helpers/toConsumableArray"), e = t(require("../../utils/http")), o = getApp(), i = new e.default.Http();

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
    chooseNav: function(t) {
        this.setData({
            active: t.currentTarget.dataset.index
        });
    },
    lookDetail: function() {
        this.setData({
            showDetail: !0
        });
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var a = t.id, e = t.style;
        console.log(t), this.setData({
            id: a,
            style: e,
            globalColor: o.globalData.globalColor,
            navList: [ {
                tagName: "概况"
            }, {
                tagName: "下设"
            } ],
            tabName: decodeURIComponent(t.name)
        }), this.getList();
    },
    getList: function() {
        var t = this;
        i.get(o.globalData.baseUrl + "/miniapp/faculty/" + this.data.id).then(function(e) {
            "undefined" !== t.data.tabName && "" !== t.data.tabName && null !== t.data.tabName || t.setData({
                tabName: e.data.name
            });
            for (var o = e.data.child.length, i = t.data.colorList.length, n = Math.ceil(o / i), s = t.data.colorList, r = [], l = 0; l < n; l++) r = r.concat(s);
            var g = e.data.intro_text, u = e.data.tags;
            t.data.navList.slice(1);
            if (!g && o > 0) t.setData({
                navList: a(u),
                showIntro: !1,
                showMajor: !0,
                xibuList: a(u)
            }); else if (g && 0 == o) t.setData({
                navList: [ {
                    tagName: "概况"
                } ],
                showIntro: !0,
                showMajor: !1,
                xibuList: a(u)
            }); else if (g && o > 0) {
                var p = [ {
                    tagName: "概况"
                } ].concat(a(u));
                t.setData({
                    navList: a(p),
                    showIntro: !0,
                    showMajor: !0,
                    xibuList: a(p)
                });
            } else g || 0 != o || t.setData({
                navList: [],
                showIntro: !1,
                showMajor: !1,
                xibuList: []
            });
            t.setData({
                colorList: r,
                intro: g
            }), console.log(t.data.xibuList);
        });
    },
    goMajor: function(t) {
        var a = t.currentTarget.dataset.item;
        console.log(a), 1 == a.intro_type ? wx.navigateTo({
            url: "/pages/enroll-major-intro-new/enroll-major-intro-new?id=" + a.id + "&name=" + a.name
        }) : wx.redirectTo({
            url: "/pages/web-view/web-view?url=" + encodeURIComponent(a.intro_url)
        });
    },
    linktap: function(t) {
        var a = t.detail.href, e = a.substring(a.lastIndexOf(".") + 1, a.length);
        "pdf" != e && "doc" != e && "docx" != e && "xls" != e && "xlsx" != e && "ppt" != e && "pptx" != e || wx.downloadFile({
            url: a,
            success: function(t) {
                var a = t.tempFilePath;
                wx.openDocument({
                    filePath: a
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
            path: "/pages/enroll-depart-intro-new/enroll-depart-intro-new?id=" + this.data.id + "&name=" + this.data.tabName
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "id=" + this.data.id + "&name=" + this.data.tabName,
            imageUrl: o.globalData.schoollogo
        };
    }
});