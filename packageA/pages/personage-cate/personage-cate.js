var a = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), t = getApp(), e = new a.default.Http();

Page({
    data: {
        showType: !0,
        pageColor: "#fff",
        topNum: 0,
        tabName: "",
        column_id: "",
        child_id: "",
        page: 1,
        page_size: 20,
        total: 0,
        navList: [],
        list: [],
        toView: "",
        type: "",
        isBottom: !1,
        isShowIntro: !1,
        isShowList: !1,
        intro: "",
        column: [],
        characterClass: "character-box-one",
        isShowListInfo: !1,
        isShowListImg: !0,
        isColon: !1
    },
    onLoad: function(a) {
        this.setData({
            child_id: a.child_id ? a.child_id : "",
            column_id: a.column_id ? a.column_id : "",
            type: a.type,
            tabName: a.name ? decodeURIComponent(a.name) : "",
            globalColor: t.globalData.globalColor,
            toView: "row_" + a.column_id
        }), this.getList();
    },
    chooseNav: function(a) {
        var t = a.currentTarget.dataset.id;
        this.setData({
            child_id: t,
            list: [],
            page: 1,
            total: 0,
            isShowListInfo: !1
        }), this.getList();
    },
    goTeacherDetail: function(a) {
        var t = a.currentTarget.dataset, e = t.id, i = t.name, o = this.data.type;
        wx.navigateTo({
            url: "/pages/campus-famous-detail/campus-famous-detail?id=".concat(e, "&name=").concat(i, "&type=") + o
        });
    },
    getList: function() {
        var a = this, i = this, o = i.data, s = o.page, n = o.page_size, r = o.column_id, c = o.list, l = (o.type, 
        o.child_id), h = o.column;
        wx.showLoading({
            title: "加载中"
        }), e.get(t.globalData.baseUrl + "/miniapp/character", {
            page: s,
            page_size: n,
            column_id: r,
            child_id: l
        }).then(function(t) {
            var e = t.data ? c.concat(t.data) : c, o = (t.column ? h.concat(t.column) : h).filter(function(a) {
                return a.id == l;
            });
            switch (e.length >= 0 && i.setData({
                isShowList: !0
            }), o[0].style) {
              case 1:
                i.setData({
                    characterClass: "character-box-one",
                    pageColor: "#F9F9F9",
                    isShowListInfo: !0,
                    isColon: !0
                });
                break;

              case 2:
                i.setData({
                    characterClass: "character-box-two",
                    pageColor: "#FBFBFB",
                    isShowListInfo: !0,
                    isShowListImg: !1
                });
                break;

              case 4:
                i.setData({
                    characterClass: "character-box-three",
                    pageColor: "#FFFFFF"
                });
                break;

              case 3:
                i.setData({
                    characterClass: "character-box-four",
                    pageColor: "#FBFBFB",
                    isShowListInfo: !0
                });
                break;

              case 6:
                i.setData({
                    characterClass: "character-box-five",
                    pageColor: "#FBFBFB",
                    isShowListInfo: !0
                });
                break;

              case 5:
                i.setData({
                    characterClass: "character-box-six",
                    pageColor: "#FFFFFF"
                });
            }
            a.setData({
                navList: t.column,
                list: c.concat(t.data),
                intro: t.intro
            }), wx.hideLoading();
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
            path: "/packageA/pages/personage-cate/personage-cate?name=" + this.data.tabName + "&column_id=" + this.data.column_id + "&child_id=" + this.data.child_id + "&type=" + this.data.type
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            query: "name=" + this.data.tabName + "&column_id=" + this.data.column_id + "&child_id=" + this.data.child_id + "&type=" + this.data.type
        };
    }
});