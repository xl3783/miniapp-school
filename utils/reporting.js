var e = require("../@babel/runtime/helpers/objectSpread2"), t = require("../@babel/runtime/helpers/classCallCheck"), i = require("../@babel/runtime/helpers/createClass"), n = function() {
    function n(i, o) {
        t(this, n), this.app = o, this.systemInfo = wx.getSystemInfoSync(), this.config = e(e({}, i), {}, {
            language: this.systemInfo.language,
            browser: "小程序",
            entry_time: 0,
            quit_time: 0,
            ua: this.systemInfo.model,
            os: this.systemInfo.system,
            screen: "".concat(this.systemInfo.screenWidth, " x ").concat(this.systemInfo.screenHeight)
        });
    }
    return i(n, [ {
        key: "page",
        value: function(e, t) {
            var i = this;
            this.app.globalData.home.then(function() {
                i.config.sn = i.app.globalData.openid, i.config.schoolid = i.app.globalData.schoolid, 
                "show" === e && ((t = t.map(function(e) {
                    return {
                        url: e.__route__,
                        options: JSON.stringify(e.options)
                    };
                })).length >= 2 && (i.config.referer = t[t.length - 2].url), 1 === t.length && (i.config.referer = ""), 
                i.config.scene = t[t.length - 1].options, i.config.page = t[t.length - 1].url, i.config.entry_time = new Date().getTime()), 
                "hide" === e && (i.config.quit_time = new Date().getTime(), i.commit("/api/bury-point/flow-statics", i.config));
            });
        }
    }, {
        key: "share",
        value: function(t, i) {
            var n = this, o = t.type, s = t.value;
            this.app.globalData.home.then(function() {
                n.config.sn = n.app.globalData.openid, n.config.schoolid = n.app.globalData.schoolid, 
                i = i.map(function(e) {
                    return {
                        url: e.__route__
                    };
                });
                n.config.page = i[i.length - 1].url, n.commit("/api/bury-point/share-statics", e(e({}, n.config), {}, {
                    share_type: "page",
                    share_group: o,
                    scene: s
                }));
            });
        }
    }, {
        key: "commit",
        value: function(t, i) {
            wx.request({
                url: "".concat("https://buried.xiaopaicloud.com").concat(t),
                data: e(e({}, i), {}, {
                    request_id: this.config.sn + "_" + this.config.request_id
                }),
                method: "POST"
            });
        }
    } ]), n;
}();

module.exports = {
    Subscriber: n
};