var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/toConsumableArray"), a = require("../../../@babel/runtime/helpers/objectSpread2"), i = t(require("../../../utils/http")), r = require("../../../utils/util"), n = getApp(), o = new i.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 520
        },
        top: {
            type: Number,
            value: 70
        },
        data: {
            type: Object,
            value: "all",
            observer: function(t, e) {
                t && (this.setData({
                    options: t,
                    currentList: [],
                    page: 1
                }), this.getData({
                    page: 1,
                    page_size: 20
                }));
            }
        }
    },
    data: {
        page: 1,
        page_size: 20,
        tabName: "",
        topNum: 0,
        pageColor: "",
        active: 1,
        activeIndex: 0,
        globalColor: "",
        position: 1,
        currentType: 3,
        sceneryStyle: 2,
        videoStyle: 2,
        options: "",
        navList: [],
        isBottom: !1,
        currentList: [],
        dataIsLoad: !1
    },
    methods: {
        load: function(t) {
            this.setData({
                options: t
            }), this.getData({
                page: 1,
                page_size: 20
            });
        },
        getData: function(t) {
            var i = this;
            wx.showLoading({
                title: "加载中"
            }), o.get(n.globalData.baseUrl + "/miniapp/content", a(a({}, this.data.options), t), {
                schoolid: n.globalData.schoolid
            }).then(function(t) {
                var a = t.column, r = t.data, n = t.sceneryStyle, o = t.videoStyle, s = t.position;
                0 === i.data.navList.length && i.setData({
                    active: a[0].id,
                    activeIndex: 0,
                    currentType: a[0].type,
                    sceneryStyle: Number.parseInt(n),
                    videoStyle: Number.parseInt(o),
                    position: Number.parseInt(s)
                }), 0 !== r.length || 0 === i.data.currentList.length ? i.setData({
                    navList: a,
                    dataIsLoad: !0,
                    currentList: [].concat(e(i.data.currentList), e(r)),
                    page: i.data.page + 1
                }) : i.setData({
                    dataIsLoad: !0,
                    isBottom: !0
                });
            }).finally(function() {
                wx.hideLoading();
            });
        },
        chooseNav: function(t) {
            wx.vibrateShort({
                type: "medium"
            });
            var e = t.currentTarget.dataset.item, a = t.currentTarget.dataset.index;
            a !== this.data.activeIndex && (this.setData({
                active: e.id,
                activeIndex: a,
                currentType: e.type,
                currentList: [],
                dataIsLoad: !1,
                isBottom: !1,
                page: 1
            }), this.getData({
                id: e.id,
                type: e.type,
                page: 1,
                page_size: 20
            }));
        },
        previewImg: function(t) {
            var e = t.currentTarget.dataset.img, a = t.currentTarget.dataset.id;
            o.get(n.globalData.baseUrl + "/miniapp/scenery/" + a), wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        goDetail1: function(t) {
            var e = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=" + e
            });
        },
        goDetail: function(t) {
            (0, r.jumpToNewsDetail)(t);
        },
        onReachBottom: function() {
            var t = this.data, e = t.currentType, a = t.active, i = t.page;
            0 != t.currentList.length && this.getData({
                type: e,
                id: a,
                page_size: 20,
                page: i
            });
        }
    }
});