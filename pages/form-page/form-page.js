var e = getApp();

Page({
    onHide: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
    },
    onUnload: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    data: {
        name: "",
        height: 0,
        info: {
            id: "",
            identify: ""
        }
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: e.name ? e.name : "表单"
        }), this.setData({
            name: e.name ? e.name : "表单",
            info: {
                id: e.id,
                identify: e.identify
            }
        });
    },
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: e.globalData.schoolname,
            path: "/pages/form-view/form-view?id=" + this.data.info.id + "&name=" + this.data.name
        };
    },
    onShareTimeline: function(t) {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: e.globalData.schoolname,
            query: "id=" + this.data.info.id + "&name=" + this.data.name
        };
    }
});