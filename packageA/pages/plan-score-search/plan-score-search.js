Page({
    data: {
        enrollType: "",
        searchType: "",
        tabName: ""
    },
    onLoad: function(e) {
        console.log(e);
        var n = e.enrollType, o = e.searchType;
        this.setData({
            enrollType: n,
            searchType: o,
            tabName: 1 == o ? "招生计划" : "历年分数"
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
        getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages());
    }
});