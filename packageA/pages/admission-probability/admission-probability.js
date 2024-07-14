Page({
    data: {
        tabName: ""
    },
    onLoad: function(e) {
        e.enrollType, e.searchType;
        this.setData({
            tabName: e.name ? decodeURIComponent(e.name) : e.title ? decodeURIComponent(e.title) : "录取概率"
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
            path: "/packageA/pages/admission-probability/admission-probability?name=" + this.data.tabName
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.tabName,
            imageUrl: app.globalData.schoollogo
        };
    }
});