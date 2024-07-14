Page({
    data: {
        url: ""
    },
    onLoad: function(t) {
        var o = t.id, a = getApp(), c = wx.getStorageSync("newuserinfo");
        c ? this.setData({
            url: "https://oe.schoolpi.net/tjb/zkz?formId=".concat(o, "&schoolId=").concat(a.globalData.schoolid, "&xpUserId=").concat(c.id)
        }) : wx.showToast({
            title: "请先完成登录"
        });
    }
});