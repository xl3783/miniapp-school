var e = getApp().globalData, t = e.welcomeUrl, o = e.schoolid;

Page({
    onHide: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    onUnload: function() {
        getApp().reporting.page("hide", getCurrentPages());
    },
    data: {
        name: "",
        idCard: "",
        schoolInfo: ""
    },
    onLoad: function(e) {
        this.getSchoolInfo();
    },
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), console.log("v1.0.2"), this.setData({
            idCard: "",
            name: ""
        });
    },
    getSchoolInfo: function() {
        var e = this;
        wx.request({
            url: t.concat("/school"),
            method: "GET",
            header: {
                "School-Id": o
            },
            success: function(t) {
                if (200 === t.statusCode) {
                    var o = t.data, a = o.errcode, n = o.data, i = o.errmsg;
                    0 === a ? e.setData({
                        schoolInfo: n
                    }) : wx.showToast({
                        title: i,
                        icon: "none"
                    });
                } else wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        });
    },
    inputNameChange: function(e) {
        var t = e.detail.value;
        this.setData({
            name: t
        });
    },
    inputIdCardChange: function(e) {
        var t = e.detail.value;
        this.setData({
            idCard: t
        });
    },
    submit: function() {
        var e = this.data, a = e.name, n = e.idCard;
        a ? n ? wx.request({
            url: t.concat("/login"),
            method: "POST",
            header: {
                "School-Id": o,
                "content-type": "application/json"
            },
            data: {
                name: a,
                idCard: n
            },
            success: function(e) {
                if (200 === e.statusCode) {
                    console.log(e.data);
                    var t = e.data, o = t.errcode, a = t.data, n = t.errmsg;
                    0 === o ? (wx.setStorageSync("welcome-userInfo", a), wx.navigateTo({
                        url: "../main/main"
                    })) : wx.showToast({
                        title: n,
                        icon: "none"
                    });
                } else wx.showToast({
                    title: "网络错误",
                    icon: "none"
                });
            }
        }) : wx.showToast({
            title: "请输入身份证",
            icon: "none"
        }) : wx.showToast({
            title: "请输入姓名",
            icon: "none"
        });
    }
});