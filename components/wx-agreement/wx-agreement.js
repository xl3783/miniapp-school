Component({
  data: {
    needAuthorization: !1,
    privacyContractName: "《隐私指引协议》"
  },
  methods: {
    check: function (t) {
      var e = this,
        i = t.show;
      t.info;
      try {
        if (!wx.getPrivacySetting) return void this.triggerEvent("ok");
        wx.getPrivacySetting({
          success: function (t) {
            var a = t.needAuthorization,
              n = t.privacyContractName;
            if (a) {
              var o = "校派";
              n && (o = n.substring(1, n.lastIndexOf("小程序"))), i ? e.setData({
                needAuthorization: a,
                privacyContractName: n,
                appName: o
              }) : e.setData({
                privacyContractName: n,
                appName: o
              }), wx.onNeedPrivacyAuthorization(function (t, i) {
                e.resolvePrivacyAuthorization = t, e.setData({
                  needAuthorization: !0
                });
              });
            } else e.triggerEvent("ok");
          }
        });
      } catch (t) {}
    },
    toPrivacyPage: function () {
      wx.openPrivacyContract();
    },
    onOk: function () {
      this.resolvePrivacyAuthorization && this.resolvePrivacyAuthorization({
        buttonId: "agree-btn",
        event: "agree"
      }), this.setData({
        needAuthorization: !1
      }), this.triggerEvent("ok");
    },
    onClose: function () {
      this.setData({
        needAuthorization: !1
      });
    }
  }
});