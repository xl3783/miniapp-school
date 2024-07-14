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
        url: "",
        opt: ""
    },
    onLoad: function(e) {
        if (e) {
            var t = e.url + "?roleType=" + e.roleType + "&schoolId=" + e.schoolId + "&studentId=" + e.studentId + "&teacherId=" + e.teacherId + "&channelCode=" + e.channelCode + "&sign=" + e.sign;
            this.setData({
                url: t,
                opt: e
            });
        } else wx.showToast({
            title: "请检查传递参数",
            icon: "none"
        });
    },
    communication: function() {
        var t = this;
        e.globalData.robotTempId ? wx.requestSubscribeMessage({
            tmplIds: [ e.globalData.robotTempId ],
            complete: function() {
                wx.redirectTo({
                    url: "/pages/web-view/web-view?url=" + encodeURIComponent(t.data.url)
                });
            }
        }) : wx.showToast({
            title: "不存在消息模版ID",
            icon: "none"
        });
    }
});