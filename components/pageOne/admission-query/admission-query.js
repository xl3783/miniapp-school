var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), a = getApp(), e = new t.default.Http();

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
        type: {
            type: String,
            value: "",
            observer: function(t, a) {
                this.getTips();
            }
        }
    },
    data: {
        globalColor: "",
        showResult: !1,
        name: "",
        ksh: "",
        idcard: "",
        major: "",
        ems: "",
        score: "",
        custom: [],
        is_idcard: 0,
        is_ksh: 0,
        is_name: 0,
        tips: "",
        tipsTitle: "",
        isNoData: !0,
        topNum: 0,
        major_column: "",
        bgUrl: "",
        hitTitle: "请输入考生号",
        dataIsLoad: !1
    },
    lifetimes: {
        attached: function() {
            this.setData({
                hitTitle: 235 === a.globalData.schoolid ? "请输入准考证号" : "请输入考生号"
            }), this.getTips();
        }
    },
    methods: {
        copyLink: function() {
            wx.setClipboardData({
                data: this.data.ems,
                success: function(t) {
                    wx.showToast({
                        title: "已复制"
                    });
                }
            });
        },
        close: function() {
            this.setData({
                showResult: !1
            });
        },
        search: function() {
            var t = this.data, i = t.is_idcard, s = t.is_ksh, o = t.is_name, n = t.ksh, l = t.name, c = t.idcard, r = t.type, d = t.bgUrl;
            1 != i || c ? 1 != s || n ? 1 != o || l ? (wx.showLoading({
                title: "加载中"
            }), e.get(a.globalData.baseUrl + "/miniapp/matriculate", {
                ksh: n,
                name: l,
                idcard: c,
                type: r
            }).then(function(t) {
                0 === t.errcode && wx.navigateTo({
                    url: "/pages/admission-query-suc/admission-query-suc?ksh=".concat(n, "&name=").concat(l, "&idcard=").concat(c, "&type=").concat(r, "&bgUrl=").concat(d)
                });
            }), wx.hideLoading()) : wx.showToast({
                icon: "none",
                title: "请填写姓名"
            }) : wx.showToast({
                icon: "none",
                title: "请填写考生号"
            }) : wx.showToast({
                icon: "none",
                title: "请填写身份证号"
            });
        },
        getTips: function() {
            var t = this;
            wx.showLoading({
                title: "加载中"
            }), e.get(a.globalData.baseUrl + "/miniapp/matriculate/type/" + this.data.type).then(function(e) {
                t.setData({
                    tipsTitle: e.name,
                    tips: e.tips,
                    is_idcard: e.is_idcard,
                    is_ksh: e.is_ksh,
                    is_name: e.is_name,
                    globalColor: a.globalData.globalColor,
                    isNoData: !1,
                    bgUrl: e.url,
                    dataIsLoad: !0
                }), wx.hideLoading(), t.triggerEvent("changeName", e.name);
            }).catch(function(a) {
                t.setData({
                    isNoData: !0
                });
            });
        },
        linktap: function(t) {
            var a = t.detail.href, e = a.substring(a.lastIndexOf(".") + 1, a.length);
            "pdf" != e && "doc" != e && "docx" != e && "xls" != e && "xlsx" != e && "ppt" != e && "pptx" != e || wx.downloadFile({
                url: a,
                success: function(t) {
                    var a = t.tempFilePath;
                    wx.openDocument({
                        filePath: a
                    });
                }
            });
        },
        inputKsh: function(t) {
            this.setData({
                ksh: t.detail.value
            });
        },
        inputName: function(t) {
            this.setData({
                name: t.detail.value
            });
        },
        inputIdCard: function(t) {
            this.setData({
                idcard: t.detail.value
            });
        },
        scrollToTop: function() {
            this.setData({
                topNum: 0
            });
        }
    }
});