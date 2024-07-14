Page({
    data: {
        searchType: "",
        tabName: ""
    },
    onLoad: function(e) {
        this.setData({
            searchType: e.searchType,
            tabName: e.name ? decodeURIComponent(e.name) : "招生类型"
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
        this.selectComponent("#planScoreTypeComp").getTypeList();
    },
    onShareAppMessage: function() {
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});