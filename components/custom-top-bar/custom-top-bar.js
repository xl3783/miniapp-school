var t = getApp();

Component({
    properties: {
        position: {
            type: Number,
            value: 2
        },
        t_width: {
            type: Number,
            value: 200
        },
        bgColor1: {
            type: String,
            value: "#fff",
            observer: function(t, e) {
                this.setData({
                    bgColor: t
                });
            }
        },
        color1: {
            type: String,
            value: "#000",
            observer: function(t, e) {
                this.setData({
                    color: t
                });
            }
        },
        title: {
            type: String,
            value: "校派",
            observer: function(t, e) {
                this.setData({
                    titleName: t
                });
            }
        },
        hasBack: {
            type: Boolean,
            value: !0
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        deviceObj: {},
        customBar: 40,
        bgColor: "#fff",
        color: "#000",
        titleName: "",
        statusBarHeight: 44
    },
    pageLifetimes: {
        show: function() {
            var t = this;
            wx.getStorage({
                key: "global-config",
                success: function(e) {
                    var o = JSON.parse(e.data);
                    t.setData({
                        bgColor: o.bgColor,
                        color: o.fontColor
                    });
                },
                fail: function(t) {}
            });
        }
    },
    attached: function() {
        this.getDeviceInfo();
    },
    methods: {
        setColor: function() {
            this.setData({
                bgColor: t.globalData.bgColor,
                color: t.globalData.fontColor
            });
        },
        scrollToTop: function() {
            this.triggerEvent("scrollToTop"), wx.pageScrollTo({
                scrollTop: 0,
                duration: 300
            });
        },
        setTitle: function(t) {
            this.setData({
                titleName: t
            });
        },
        toBack: function() {
            wx.vibrateShort({
                type: "medium"
            }), 1 == getCurrentPages().length ? wx.reLaunch({
                url: "/pages/index/index"
            }) : wx.navigateBack({
                delta: 1
            });
        },
        getDeviceInfo: function() {
            var t = wx.getSystemInfoSync().statusBarHeight, e = wx.getMenuButtonBoundingClientRect(), o = e.top, a = e.height + 2 * (o - t), i = {
                customBar: a,
                statusBarHeight: t
            };
            this.setData({
                deviceObj: i,
                statusBarHeight: t,
                customBar: a
            });
        }
    }
});