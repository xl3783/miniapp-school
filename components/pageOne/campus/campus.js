var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), e = getApp(), o = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#F3F5F8"
        },
        topNum: {
            type: Number,
            value: 0
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        name: "",
        tags: [],
        style: 1,
        position: 3,
        logo: "",
        showLogo: 1,
        content: [],
        triggered: !1,
        freshing: !1,
        paiType: !1
    },
    lifetimes: {
        attached: function() {
            this.getData();
            var t = 1 === wx.getStorageSync("globalCondig").is_show_support;
            this.setData({
                paiType: t
            });
        }
    },
    methods: {
        getData: function() {
            var t = this;
            o.get(e.globalData.baseUrl + "/miniapp/schoolyard").then(function(o) {
                t.setData({
                    name: o.name,
                    style: o.style,
                    tags: o.tags,
                    position: o.position,
                    showLogo: o.show_logo,
                    content: o.content,
                    logo: e.globalData.schoollogo
                });
            });
        },
        refresherpulling: function() {},
        refresherrefresh: function() {
            var t = this;
            this.data.freshing || (this.data.freshing = !0, this.data.triggered || this.setData({
                triggered: !0
            }), this.getData(), setTimeout(function() {
                t.setData({
                    triggered: !1,
                    freshing: !1
                });
            }, 1e3));
        },
        refresherrestore: function() {},
        refresherabort: function() {},
        scrollToTop: function() {
            this.setData({
                topNum: 0
            });
        }
    }
});