var t = require("../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../@babel/runtime/helpers/regeneratorRuntime"), a = require("../../@babel/runtime/helpers/asyncToGenerator"), o = t(require("../../utils/http")), n = getApp(), i = new o.default.Http();

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
        showAll: "",
        page: 1,
        page_size: 20,
        total: 0,
        isBottom: !1
    },
    close: function() {
        this.setData({
            showDetail: !1,
            name1: ""
        });
    },
    mediaError: function(t) {
        console.log(t);
    },
    chooseNav: function(t) {
        this.setData({
            active: t.currentTarget.dataset.index
        });
    },
    lookDetail: function(t) {
        var e = this, a = t.currentTarget.dataset.item, o = a.id, r = a.name, s = a.intro_type, l = a.intro_url, h = a.intro_text;
        this.setData({
            detailName: r
        }), 1 == s ? h && (1 == n.globalData.major_intro_style ? i.get(n.globalData.baseUrl + "/miniapp/faculty/specialty/" + o).then(function(t) {
            0 == t.errcode && t.data && e.setData({
                name1: t.data.name,
                showDetail: !0,
                intro1: t.data.intro_text
            });
        }) : wx.navigateTo({
            url: "/pages/enroll-major-intro-detail-new/enroll-major-intro-detail-new?id=" + o
        })) : wx.navigateTo({
            url: "/pages/web-view/web-view?url=" + encodeURIComponent(l)
        });
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
        var e = t.id;
        this.setData({
            name: decodeURIComponent(t.name),
            id: e,
            showAll: t.showAll ? t.showAll : "",
            navList: [ {
                cate: "概况"
            }, {
                cate: "专业"
            } ],
            globalColor: n.globalData.globalColor
        }), this.getList();
    },
    linktap: function(t) {
        var e = t.detail.href, a = e.substring(e.lastIndexOf(".") + 1, e.length);
        "pdf" != a && "doc" != a && "docx" != a && "xls" != a && "xlsx" != a && "ppt" != a && "pptx" != a || wx.downloadFile({
            url: e,
            success: function(t) {
                var e = t.tempFilePath;
                wx.openDocument({
                    filePath: e
                });
            }
        });
    },
    getList: function() {
        var t = this;
        return a(e().mark(function a() {
            var o, r, s, l, h;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o = t.data, r = o.page, s = o.page_size, l = o.majorList, h = [], h = t.data.navList, 
                    wx.showLoading({
                        title: "加载中"
                    }), 1 != t.data.showAll) {
                        e.next = 10;
                        break;
                    }
                    return t.setData({
                        showIntro: !1
                    }), e.next = 8, i.get(n.globalData.baseUrl + "/miniapp/specialty", {
                        page: r,
                        page_size: s
                    }).then(function(e) {
                        console.log(e);
                        var a = e.count, o = e.list, n = h.slice(1);
                        o && o.length > 0 && t.setData({
                            navList: n,
                            showMajor: !0
                        }), t.setData({
                            majorList: l.concat(o),
                            total: a
                        });
                    });

                  case 8:
                    e.next = 12;
                    break;

                  case 10:
                    return e.next = 12, i.get(n.globalData.baseUrl + "/miniapp/faculty/" + t.data.id).then(function(e) {
                        var a = e.data, o = a.intro_text, n = a.specialties, i = h.slice(1);
                        !o && n.length > 0 && t.setData({
                            navList: i,
                            showIntro: !1,
                            showMajor: !0
                        }), o && 0 == n.length ? t.setData({
                            navList: [ {
                                cate: "概况"
                            } ],
                            showIntro: !0,
                            showMajor: !1
                        }) : o && n.length > 0 ? t.setData({
                            navList: h,
                            showIntro: !0,
                            showMajor: !0
                        }) : o || 0 != n.length || t.setData({
                            navList: [],
                            showIntro: !1,
                            showMajor: !1
                        }), t.setData({
                            majorList: n,
                            intro: o
                        });
                    });

                  case 12:
                    wx.hideLoading();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, a);
        }))();
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
    onReachBottom: function() {
        console.log("上拉上拉上拉上拉上拉上拉");
        var t = this.data, e = t.page;
        e * t.page_size < t.total ? (e += 1, this.setData({
            page: e,
            isBottom: !1
        }), this.getList()) : this.setData({
            isBottom: !0
        });
    },
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
            imageUrl: n.globalData.schoollogo
        };
    }
});