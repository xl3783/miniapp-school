var e = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), o = getApp(), t = new e.default.Http();

Page({
    data: {
        schoollogo: "",
        schoolname: ""
    },
    onLoad: function(e) {
        this.setData({
            schoollogo: o.globalData.schoollogo,
            schoolname: o.globalData.schoolname
        });
    },
    getPhone: function(e) {
        if ("getPhoneNumber:ok" != e.detail.errMsg) return wx.showToast({
            title: "您取消了授权,登录失败",
            icon: "none"
        }), !1;
        var n = e.detail.code;
        t.get(o.globalData.baseUrl + "/miniapp/userPhone", {
            code: n
        }, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(e) {
            0 == e.errcode ? (o.globalData.userInfo.phone = e.phone, wx.setStorageSync("phone", e.phone), 
            wx.navigateBack({
                delta: 0
            })) : wx.showToast({
                title: e.errmsg,
                icon: "none"
            });
        });
    },
    handleCancel: function() {
        wx.navigateBack({
            delta: 0
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
    onReachBottom: function() {}
});