var e = getApp().globalData;

e.welcomeUrl, e.schoolid;

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
        userInfo: ""
    },
    onLoad: function() {
        var e = wx.getStorageSync("welcome-userInfo");
        console.log(e), this.setData({
            userInfo: e
        });
    },
    submitVerify: function() {
        try {
            if (!this.data.userInfo.enrollImg) return void wx.showToast({
                title: "录取照片为空无法验证",
                icon: "none"
            });
            console.log(this.data.userInfo), 2 == this.data.userInfo.verifyType || 3 == this.data.userInfo.verifyType ? 0 == this.data.userInfo.verify_status || 2 == this.data.userInfo.verify_status ? (console.log("autobiography"), 
            wx.navigateTo({
                url: "../autobiography/autobiography"
            })) : (console.log("verify2"), wx.navigateTo({
                url: "../verify/verify?type=2"
            })) : (console.log("verify1"), wx.navigateTo({
                url: "../verify/verify?type=1"
            }));
        } catch (e) {
            console.log(e);
        }
    }
});