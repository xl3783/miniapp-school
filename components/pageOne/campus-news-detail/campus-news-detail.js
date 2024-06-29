var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), a = new t.default.Http();

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
        detailId: {
            type: Number,
            observer: function(t, e) {
                0 != t && this.getData();
            }
        }
    },
    data: {
        title: "",
        thumb_url: "",
        content: "",
        create_time: "",
        tabName: "新闻",
        dataInitLoad: !1
    },
    methods: {
        linktap: function(t) {
            console.log(t);
            var e = t.detail.href, a = e.substring(e.lastIndexOf(".") + 1, e.length);
            "pdf" == a || "doc" == a || "docx" == a || "xls" == a || "xlsx" == a || "ppt" == a || "pptx" == a ? wx.downloadFile({
                url: e,
                success: function(t) {
                    var e = t.tempFilePath;
                    wx.openDocument({
                        filePath: e
                    });
                }
            }) : wx.navigateTo({
                url: "/pages/web-view/web-view?url=" + encodeURIComponent(e)
            });
        },
        getData: function() {
            var t = this;
            wx.showLoading({
                title: "加载中"
            }), a.get(e.globalData.baseUrl + "/miniapp/article/" + this.data.detailId).then(function(e) {
                var a = e.title, i = e.content, n = e.thumb_url, l = e.create_time;
                wx.hideLoading(), t.setData({
                    title: a,
                    thumb_url: n,
                    content: i,
                    create_time: l,
                    dataInitLoad: !0
                }), t.triggerEvent("changeName", a);
            });
        }
    }
});