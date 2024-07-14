var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = getApp(), a = new e.default.Http();

Page({
    data: {
        tabName: "我的留言",
        page: 1,
        page_size: 20,
        total: 0,
        height: 700,
        list: [],
        currentWord: {},
        showMask: !1
    },
    ss: function() {
        this.setData({
            showMask: !0
        });
    },
    closeMask: function() {
        this.setData({
            showMask: !1
        });
    },
    lookDetail: function(e) {
        var t = e.currentTarget.dataset.item;
        this.setData({
            currentWord: t,
            showMask: !0
        });
    },
    onLoad: function(e) {
        var t = this, a = wx.createSelectorQuery();
        a.select("#top-bar").boundingClientRect(), a.selectViewport().scrollOffset();
        var o = 0;
        a.exec(function(e) {
            for (var a = 0; a < e.length; a++) e[a] && e[a].height && (o += e[a].height);
            var n = wx.getSystemInfoSync().windowHeight - o;
            t.setData({
                height: n
            });
        }), this.getList();
    },
    getList: function() {
        var e = this, o = this.data, n = o.page, i = o.page_size, s = o.list;
        a.get(t.globalData.baseUrl + "/miniapp/user_message", {
            page: n,
            page_size: i
        }, {
            Authorization: t.globalData.token ? t.globalData.token : ""
        }).then(function(t) {
            if (0 == t.errcode) {
                var a = s.concat(t.data);
                e.setData({
                    list: a,
                    total: t.total
                });
            } else 2001 == t.errcode ? e.getRefreshToken() : wx.showToast({
                title: t.errmsg,
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {
        var e = this;
        a.get(t.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: t.globalData.userInfo.token.refresh_token
        }).then(function(a) {
            0 == a.errcode && (t.globalData.token = a.token, e.setData({
                token: a.token
            }), e.getList());
        });
    },
    onBottom: function() {
        var e = this.data, t = e.page;
        t * e.page_size < e.total && (t += 1, this.setData({
            page: t
        }), this.getList());
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
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});