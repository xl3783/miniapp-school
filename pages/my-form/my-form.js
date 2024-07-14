var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;

require("../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../utils/http")), a = getApp(), i = new t.default.Http();

Page({
    data: {
        list: [],
        page: 1,
        page_size: 20,
        total: 0,
        filelist: [],
        isBottom: !1,
        tabName: "",
        token: a.globalData.token,
        platform: a.globalData.platform,
        content: "",
        show: !1,
        identify: "",
        id: ""
    },
    close: function() {
        this.setData({
            content: "",
            show: !1,
            identify: "",
            id: ""
        });
    },
    toFromPage: function() {
        var e = this.data, t = e.identify, a = e.id;
        wx.navigateTo({
            url: "/pages/form-view/form-view?identify=" + t + "&id=" + a
        }), this.setData({
            content: "",
            show: !1,
            identify: "",
            id: ""
        });
    },
    handleSubmit: function(e) {},
    goFormDetail: function(e) {
        var t = e.currentTarget.dataset, a = t.id, i = t.identify, o = (t.isexamine, t.status), n = t.content, r = (t.refill, 
        t.endtime, t.filelist);
        2 == o ? this.setData({
            show: !0,
            content: n,
            identify: i,
            filelist: r,
            id: a
        }) : wx.navigateTo({
            url: "/pages/form-view/form-view?identify=" + i + "&id=" + a
        });
    },
    fileOpen: function(e) {
        var t = e.currentTarget.dataset.file;
        [ "image/png", "image/jpeg", "video/mp4" ].includes(t.type) ? "video/mp4" === t.type ? wx.previewMedia({
            sources: [ {
                url: t.path,
                type: "video"
            } ],
            showmenu: !0
        }) : wx.previewMedia({
            sources: [ {
                url: t.path,
                type: "image"
            } ],
            showmenu: !0
        }) : wx.downloadFile({
            url: t.path,
            success: function(e) {
                var t = e.tempFilePath;
                wx.openDocument({
                    filePath: t,
                    fail: function(e) {
                        wx.showToast({
                            title: "不支持打开此文件",
                            icon: "error"
                        });
                    }
                });
            }
        });
    },
    getList: function() {
        var e = this, t = this.data, o = t.page, n = t.page_size, r = t.list;
        i.get(a.globalData.baseUrl3 + "/miniapp/user_form", {
            page: o,
            page_size: n
        }, {
            Authorization: a.globalData.token ? a.globalData.token : ""
        }).then(function(t) {
            0 == t.errcode ? e.setData({
                list: r.concat(t.data),
                total: t.total
            }) : 2001 == t.errcode ? e.getRefreshToken() : 2e3 == t.errcode ? e.setData({
                token: ""
            }) : wx.showToast({
                title: t.errmsg,
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {
        var e = this;
        i.get(a.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: a.globalData.userInfo.token.refresh_token
        }).then(function(t) {
            0 == t.errcode && (a.globalData.token = t.token, e.setData({
                token: t.token
            }), e.getList());
        });
    },
    onLoad: function(e) {
        var t = this;
        a.globalData.home.then(function(i) {
            t.setData({
                token: a.globalData.token,
                tabName: e.name ? decodeURIComponent(e.name) : "我填写的表单"
            }), a.globalData.token && t.getList();
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
        var e = this.data, t = e.page, a = e.total;
        t * e.page_size < a ? (t += 1, this.setData({
            page: t,
            isBottom: !1
        }), this.getList()) : this.setData({
            isBottom: !0
        });
    }
});