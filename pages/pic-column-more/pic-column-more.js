var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

Page({
    data: {
        tabName: "图片栏目",
        page: 1,
        page_size: 5,
        total: 1,
        isBottom: !1,
        list: [],
        component_id: 0,
        style: 1
    },
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            component_id: e.id ? e.id : "",
            tabName: e.name ? decodeURIComponent(e.name) : "图片栏目"
        }), e.id && this.getPicList();
    },
    getPicList: function() {
        var e = this;
        wx.showLoading({
            title: "加载中"
        });
        var i = this.data, n = i.page, o = i.page_size, r = i.list, s = i.component_id;
        a.get(t.globalData.baseUrl + "/miniapp/more_pic", {
            page: n,
            page_size: o,
            component_id: s
        }).then(function(t) {
            var a = t.style, i = t.data, n = r.concat(i);
            e.setData({
                style: a,
                list: n,
                dataIsLoad: !0
            });
        }).finally(function() {
            wx.hideLoading();
        });
    },
    goDetail: function(e) {
        var i = e.currentTarget.dataset.item, n = i.data_type, o = i.id;
        if (1 == n) {
            var r = e.currentTarget.dataset.item.image_url;
            a.get(t.globalData.baseUrl + "/miniapp/scenery/" + o), wx.previewImage({
                urls: [ r ],
                current: r
            });
        } else wx.navigateTo({
            url: "/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=" + o
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
    onReachBottom: function() {
        var e = this.data, t = e.page;
        t * e.page_size < e.total ? (t += 1, this.setData({
            page: t,
            isBottom: !1
        }), this.getPicList()) : this.setData({
            isBottom: !0
        });
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            imageUrl: t.globalData.schoollogo
        };
    }
});