Page({
    data: {
        tabName: "",
        height: 570,
        identify: "",
        id: 0
    },
    onLoad: function(e) {
        var t = this;
        this.setData({
            id: e.id,
            identify: e.identify,
            tabName: e.name ? decodeURIComponent(e.name) : "编辑表单"
        });
        var n = wx.createSelectorQuery();
        n.select("#top-bar").boundingClientRect(), n.selectViewport().scrollOffset();
        var i = 0;
        n.exec(function(e) {
            for (var n = 0; n < e.length; n++) e[n] && e[n].height && (i += e[n].height);
            var a = wx.getSystemInfoSync().windowHeight - i;
            t.setData({
                height: a
            });
        });
    },
    changeName: function(e) {
        this.setData({
            tabName: e.detail
        }), wx.setNavigationBarTitle({
            title: e.detail
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