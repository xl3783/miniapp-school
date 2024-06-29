var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../utils/http")), a = getApp(), i = new r.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        content: "",
        topNum: 0,
        dataIsLoad: !1
    },
    lifetimes: {
        attached: function() {
            this.getData();
        }
    },
    methods: {
        getData: function() {
            var e = this;
            return n(t().mark(function n() {
                var r;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return r = e, wx.showLoading({
                            title: "加载中"
                        }), t.prev = 2, t.next = 5, i.get(a.globalData.baseUrl + "/miniapp/intro").then(function(e) {
                            r.setData({
                                content: e.content,
                                dataIsLoad: !0
                            });
                        });

                      case 5:
                        return t.prev = 5, wx.hideLoading(), t.finish(5);

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 2, , 5, 8 ] ]);
            }))();
        },
        linktap: function(e) {
            var t = e.detail.href, n = t.substring(t.lastIndexOf(".") + 1, t.length);
            "pdf" != n && "doc" != n && "docx" != n && "xls" != n && "xlsx" != n && "ppt" != n && "pptx" != n || wx.downloadFile({
                url: t,
                success: function(e) {
                    var t = e.tempFilePath;
                    wx.openDocument({
                        filePath: t
                    });
                }
            });
        }
    }
});