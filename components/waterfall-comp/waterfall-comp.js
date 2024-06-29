var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = require("../../utils/util"), a = getApp(), i = new t.default.Http();

Component({
    properties: {
        load_type: {
            type: Number,
            value: 1
        },
        props_data: {
            type: Object,
            value: {}
        },
        num: {
            type: Number,
            value: 10
        },
        list: {
            type: Array,
            value: [],
            observer: function(t) {
                var e = t[this.data.activeIndex], a = e.category_ids, i = e.type;
                this.setData({
                    category_ids: a,
                    type: i,
                    page: 0,
                    hasMore: !0,
                    dataList: []
                }), this.getListById();
            }
        }
    },
    data: {
        activeIndex: 0,
        globalColor: "#1487FF",
        page: 0,
        hasMore: !0,
        columnId: 0,
        dataList: [],
        category_ids: "",
        type: ""
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                globalColor: a.globalData.globalColor
            });
        }
    },
    methods: {
        chooseTab: function(t) {
            wx.vibrateShort({
                type: "medium"
            });
            var e = t.currentTarget.dataset.item, a = e.category_ids, i = e.type;
            this.setData({
                page: 0,
                total: 0,
                category_ids: a,
                type: i,
                hasMore: !0,
                dataList: [],
                activeIndex: t.currentTarget.dataset.index
            }), this.getListById();
        },
        getListById: function() {
            var t = this;
            if (this.data.hasMore) {
                var e = this.properties.num, r = this.data, o = r.page, s = r.dataList, p = r.category_ids, d = r.type, l = o + 1;
                i.get(a.globalData.baseUrl + "/miniapp/pbl", {
                    page: l,
                    page_size: e,
                    category_ids: p,
                    type: d
                }).then(function(a) {
                    t.setData({
                        page: l,
                        dataList: s.concat(a.data),
                        hasMore: l * e < a.total
                    });
                });
            }
        },
        goDetail: function(t) {
            (0, e.getPhoneLogin)().then(function() {
                var a = t.currentTarget.dataset, i = a.type, r = a.item;
                1 == i ? (0, e.jumpToNewsDetail)(t) : 2 == i ? wx.previewImage({
                    urls: [ r.image_url ],
                    current: r.image_url
                }) : 3 == i && wx.navigateTo({
                    url: "/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=" + r.id
                });
            });
        }
    }
});