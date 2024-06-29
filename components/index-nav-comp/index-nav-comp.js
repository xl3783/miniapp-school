var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = (require("../../utils/sprintf"), 
require("../../utils/util")), i = getApp(), a = new t.default.Http();

Component({
    properties: {
        fontSize: {
            type: Number,
            value: 28
        },
        width: {
            type: Number,
            value: 750
        },
        hasBorder: {
            type: Boolean,
            value: !1
        },
        count: {
            type: Number,
            value: 4
        },
        line: {
            type: Number,
            value: 2
        },
        navList: {
            type: Array,
            value: []
        },
        isSwiper: {
            type: Boolean,
            value: !1
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        },
        isAlumni: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        indicatorDots: !1,
        vertical: !1,
        autoplay: !0,
        interval: 6600,
        duration: 500,
        active: 0,
        height: 100,
        verifyStatus: !1
    },
    lifetimes: {
        attached: function() {
            var t = this;
            i.globalData.home.then(function(e) {
                t.getVerifyStatus();
            });
        }
    },
    methods: {
        changeSwiper: function(t) {
            this.setData({
                active: t.detail.current
            });
        },
        goNav: function(t) {
            var i = this, a = t.currentTarget.dataset.item.base_url;
            this.data.isAlumni ? -1 !== a.indexOf("xpalumni-certification") && this.data.verifyStatus ? wx.navigateTo({
                url: "/xpAlumni/certification-details/certification-details?verifyStatus=true"
            }) : (0, e.getUserLogin)().then(function() {
                i.getVerifyStatus(a, t);
            }) : (0, e.getPhoneLogin)().then(function() {
                (0, e.jumpToDetail)(t);
            });
        },
        getVerifyStatus: function(t, r) {
            var u = this;
            a.get(i.globalData.baseUrl2 + "/miniapp/v1/user/verify-status", {}, {
                Authorization: i.globalData.token ? i.globalData.token : ""
            }).then(function(i) {
                0 === i.errcode && (u.setData({
                    verifyStatus: i.data.verify_status
                }), t && -1 !== t.indexOf("xpalumni-certification") && u.data.verifyStatus ? wx.navigateTo({
                    url: "/xpAlumni/certification-details/certification-details?verifyStatus=true"
                }) : r && (0, e.jumpToDetail)(r));
            });
        }
    }
});