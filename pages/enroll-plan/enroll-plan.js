var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http"));

getApp(), new e.default.Http();

Page({
    data: {
        tabName: "招生计划",
        height: 550,
        campus_id: 0,
        campus_name: "",
        divition_id: 0,
        divition_name: "",
        province_id: 0,
        province_name: "",
        year: 0,
        subjectList: [],
        areaList: [],
        yearList: [],
        campusList: [],
        planType: 1
    },
    onLoad: function(e) {
        var t = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), t.setData({
            tabName: e.name ? decodeURIComponent(e.name) : "招生计划"
        });
        var n = wx.createSelectorQuery();
        n.select("#top-bar").boundingClientRect(), n.selectViewport().scrollOffset();
        var a = 0;
        n.exec(function(e) {
            for (var n = 0; n < e.length; n++) e[n] && e[n].height && (a += e[n].height);
            var i = wx.getSystemInfoSync().windowHeight - a;
            t.setData({
                height: i
            });
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