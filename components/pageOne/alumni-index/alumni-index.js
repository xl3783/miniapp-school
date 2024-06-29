var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/toConsumableArray"), a = require("../../../@babel/runtime/helpers/defineProperty"), n = t(require("../../../utils/http")), i = require("../../../utils/util"), u = getApp(), r = new n.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        }
    },
    data: a({
        pageColor: "#F8FAFD",
        width: 686,
        triggered: !1,
        autoplay: !0,
        interval: 5e3,
        duration: 500,
        bannerCurrent: 0,
        photoCurrent: 0,
        newsPath: "",
        alumniStylePath: "",
        alumniAlbumPath: "",
        bannerList: [],
        newsList: [],
        alumniStyleList: [],
        alumniAlbumList: [],
        navData: {},
        count: 3,
        line: 1
    }, "width", 654),
    lifetimes: {
        attached: function() {
            console.log("alumni~~~~"), this.getAlumniConfig();
        },
        ready: function() {}
    },
    methods: {
        bgChange: function(t) {
            var e = t.detail, a = (e.current, e.source);
            "autoplay" !== a && "touch" !== a || this.setData({
                bannerCurrent: t.detail.current
            });
        },
        photoChange: function(t) {
            var e = t.detail, a = (e.current, e.source);
            "autoplay" !== a && "touch" !== a || this.setData({
                photoCurrent: t.detail.current
            });
        },
        getAlumniConfig: function() {
            var t = this;
            console.log("alumni页面"), r.get(u.globalData.baseUrl + "/miniapp/alumni").then(function(a) {
                if (0 === a.errcode) {
                    var n = a.data, i = n.news_more, u = n.alumni_style_more, r = n.alumni_album_more, l = n.banner_images, o = n.news_data, s = n.alumni_style_data, m = n.alumni_album_data, c = n.image_nav;
                    t.setData({
                        newsPath: i,
                        alumniStylePath: u,
                        alumniAlbumPath: r,
                        bannerList: e(l),
                        newsList: e(o),
                        alumniStyleList: e(s),
                        alumniAlbumList: e(m),
                        navList: c.content ? e(c.content) : [],
                        count: c.line_num ? c.line_num : 3,
                        line: c.line_show_style ? c.line_show_style : 1,
                        fontSize: c.font_size
                    }), console.log(t.data.navList);
                }
            });
        },
        getVerifyStatus: function() {
            r.get(u.globalData.baseUrl2 + "/miniapp/v1/user/verify-status", {}, {
                Authorization: u.globalData.token ? u.globalData.token : ""
            }).then(function(t) {
                0 === t.errcode && (t.data.verify_status ? wx.navigateTo({
                    url: "/xpAlumni/certification-details/certification-details?verifyStatus=true"
                }) : wx.navigateTo({
                    url: "/xpAlumni/xpalumni-certification/xpalumni-certification"
                }));
            });
        },
        goNews: function() {
            wx.navigateTo({
                url: this.data.newsPath
            });
        },
        goCharacters: function() {
            wx.navigateTo({
                url: this.data.alumniStylePath
            });
        },
        goCampusScenery: function() {
            wx.navigateTo({
                url: this.data.alumniAlbumPath
            });
        },
        goNewsDetail: function(t) {
            (0, i.getPhoneLogin)().then(function() {
                t.currentTarget.dataset.item;
                (0, i.jumpToNewsDetail)(t);
            });
        },
        goCharacterDetail: function(t) {
            var e = t.currentTarget.dataset.item, a = e.name, n = e.id;
            wx.navigateTo({
                url: "/pages/campus-famous-detail/campus-famous-detail?id=".concat(n, "&name=").concat(a, "&type=") + "character"
            });
        },
        previewImg: function(t) {
            var e = t.currentTarget.dataset.img;
            wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        gobannerDetails: function(t) {
            (0, i.getPhoneLogin)().then(function() {
                (0, i.jumpToDetail)(t);
            });
        }
    }
});