var t = require("../../@babel/runtime/helpers/objectSpread2"), e = getApp();

Component({
    properties: {
        initPath: {
            type: String,
            value: ""
        },
        initId: {
            type: Number,
            value: 1
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        list: [],
        selectedColor: "",
        color: "",
        selected: 0,
        show: !1,
        fontsize: 20
    },
    methods: {
        getBottom: function() {
            var s = this, i = e.globalData.tabbar;
            this.setData({
                fontsize: i.font_size
            });
            var a = i.content, o = getCurrentPages(), r = o[o.length - 1].route;
            if (this.data.initPath) {
                var n = a.findIndex(function(t) {
                    return t.base_url == s.data.initPath && t.id == s.data.initId;
                });
                n > -1 ? (this.triggerEvent("chooseTab", t(t({}, a[n]), {}, {
                    index: n,
                    list: a
                })), this.setData({
                    selected: n
                })) : (this.triggerEvent("chooseTab", t(t({}, a[0]), {}, {
                    index: 0,
                    list: a
                })), this.setData({
                    selected: 0
                }));
            } else this.triggerEvent("chooseTab", t(t({}, a[0]), {}, {
                index: 0,
                list: a
            })), this.setData({
                selected: 0
            });
            "pages/index/index" == r && this.setData({
                list: i.content,
                selectedColor: i.choose_color,
                color: i.unchoose_color,
                style: i.style,
                show: !0
            });
        },
        switchTab: function(s) {
            wx.vibrateShort({
                type: "medium"
            });
            var i = s.currentTarget.dataset, a = i.item, o = i.index;
            "../../pages/my/my" === a.jump_url && wx.requestSubscribeMessage({
                tmplIds: [ e.globalData.robotTempId ]
            }), this.triggerEvent("chooseTab", t(t({}, a), {}, {
                index: o,
                list: this.data.list
            })), this.data.selected !== o && this.setData({
                selected: o
            });
        }
    }
});