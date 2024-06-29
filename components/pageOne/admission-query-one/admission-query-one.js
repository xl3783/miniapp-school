var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default, e = require("../../../@babel/runtime/helpers/defineProperty"), a = require("../../../@babel/runtime/helpers/objectSpread2"), i = t(require("../../../utils/http")), n = getApp(), o = new i.default.Http();

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
            observer: function(t, e) {
                this.getTips();
            }
        }
    },
    data: {
        dataIsLoad: !1,
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
        hitTitle: "",
        id: 0,
        nameFilter: [],
        itemName: "",
        filter: [ {
            key_name: "",
            value_name: ""
        } ],
        isNmae: "",
        isRequest: !1,
        show_illustration: 0,
        illustration: "",
        extra: {}
    },
    lifetimes: {
        attached: function() {}
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
        formSubmit: function(t) {
            var e = this, a = this.data, i = a.filter, s = a.type;
            a.bgUrl;
            for (var r in t.detail.value) {
                if (!t.detail.value[r]) return void wx.showToast({
                    icon: "none",
                    title: "请填写".concat(r)
                });
                this.data.isRequest = !0;
            }
            this.data.isRequest && o.post(n.globalData.baseUrl + "/miniapp/list", {
                filter: i,
                type: s
            }).then(function(t) {
                if (0 === t.errcode) {
                    var a = JSON.stringify(t.data), i = t.style_url, n = t.identify, o = t.name, r = t.benediction_share, l = t.electric_token, c = encodeURIComponent(a), u = encodeURIComponent(JSON.stringify(e.data.extra));
                    t.editor_type ? wx.navigateTo({
                        url: "/pages/v2/admission-query-suc/admission-query-suc?cnt=".concat(c, "&type=").concat(s, "&bgUrl=").concat(i, "&identify=").concat(n, "&name=").concat(o, "&benedictionShare=").concat(r, "&extra=").concat(u, "&electric_token=").concat(l)
                    }) : wx.navigateTo({
                        url: "/pages/admission-query-suc/admission-query-suc?cnt=".concat(c, "&type=").concat(s, "&bgUrl=").concat(i, "&identify=").concat(n, "&name=").concat(o, "&benedictionShare=").concat(r, "&extra=").concat(u, "&electric_token=").concat(l)
                    });
                } else wx.showToast({
                    title: t.errmsg,
                    icon: "none"
                });
            });
        },
        getTips: function() {
            var t = this, e = this.data.type;
            wx.showLoading({
                title: "加载中"
            }), o.get(n.globalData.baseUrl + "/miniapp/list/config", {
                id: e
            }).then(function(e) {
                t.setData({
                    dataIsLoad: !0,
                    id: e.id,
                    tipsTitle: e.name,
                    tips: e.tips,
                    nameFilter: e.filter,
                    show_illustration: e.show_illustration,
                    illustration: e.illustration,
                    globalColor: n.globalData.globalColor,
                    isNoData: !1,
                    extra: a({}, e.extra)
                }), wx.hideLoading(), t.triggerEvent("changeName", e.name);
            }).catch(function(e) {
                t.setData({
                    dataIsLoad: !0,
                    isNoData: !0
                });
            });
        },
        linktap: function(t) {
            var e = t.detail.href, a = e.substring(e.lastIndexOf(".") + 1, e.length);
            "pdf" != a && "doc" != a && "docx" != a && "xls" != a && "xlsx" != a && "ppt" != a && "pptx" != a || wx.downloadFile({
                url: e,
                success: function(t) {
                    var e = t.tempFilePath;
                    wx.openDocument({
                        filePath: e
                    });
                }
            });
        },
        inputItem: function(t) {
            var a, i = t.target.dataset.index, n = "filter[".concat(i, "].key_name"), o = "filter[".concat(i, "].value_name");
            this.setData((e(a = {}, n, t.target.dataset.item), e(a, o, t.detail.value), a));
        },
        scrollToTop: function() {
            this.setData({
                topNum: 0
            });
        }
    }
});