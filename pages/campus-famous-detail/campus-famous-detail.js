var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = getApp(), a = new t.default.Http();

Page({
    data: {
        id: "",
        name: "",
        intro: "",
        image_url: "",
        type: ""
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.setData({
            id: t.id,
            name: decodeURIComponent(t.name),
            type: t.type
        }), this.getData();
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
    getData: function() {
        var t = this, i = this.data.type;
        "character" == i ? (wx.showLoading({
            title: "加载中"
        }), a.get(e.globalData.baseUrl + "/miniapp/character/" + this.data.id).then(function(e) {
            console.log(e), t.setData({
                image_url: e.photo_url,
                intro: e.intro
            }), wx.hideLoading();
        })) : "mate" == i ? (wx.showLoading({
            title: "加载中"
        }), a.get(e.globalData.baseUrl + "/miniapp/mate/" + this.data.id).then(function(e) {
            t.setData({
                image_url: e.photo_url,
                intro: e.intro
            }), wx.hideLoading();
        })) : "teacher" == i ? (wx.showLoading({
            title: "加载中"
        }), a.get(e.globalData.baseUrl + "/miniapp/teacher/" + this.data.id).then(function(e) {
            t.setData({
                image_url: e.photo_url,
                intro: e.intro
            }), wx.hideLoading();
        })) : "student" == i && (wx.showLoading({
            title: "加载中"
        }), a.get(e.globalData.baseUrl + "/miniapp/student/" + this.data.id).then(function(e) {
            t.setData({
                image_url: e.photo_url,
                intro: e.intro
            }), wx.hideLoading();
        }));
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
            title: this.data.name,
            path: "/pages/campus-famous-detail/campus-famous-detail?id=" + this.data.id + "&type=" + this.data.type + "&name=" + this.data.name
        };
    },
    onShareTimeline: function(t) {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            query: "id=" + this.data.id + "&type=" + this.data.type + "&name=" + this.data.name,
            imageUrl: e.globalData.schoollogo
        };
    }
});