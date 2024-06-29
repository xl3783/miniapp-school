var t = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), a = getApp(), e = new t.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        tabname: {
            type: String,
            value: "师资力量"
        },
        typeName: {
            type: String,
            observer: function(t) {
                console.log(t), "teacher" == t ? this.setData({
                    url: "/miniapp/teacher"
                }) : "student" == t ? this.setData({
                    url: "/miniapp/student"
                }) : "mate" == t && this.setData({
                    url: "/miniapp/mate"
                });
            }
        }
    },
    data: {
        url: "/miniapp/teacher",
        topNum: 0,
        showType: !0,
        pageColor: "#fff",
        types: [ {
            id: 1,
            name: "介绍"
        }, {
            id: 2,
            name: "人物"
        } ],
        active: 0,
        globalColor: "",
        page: 1,
        page_size: 20,
        total: 1,
        currentList: [],
        isBottom: !1,
        isShowIntro: !1,
        isShowList: !1,
        intro: "",
        column: [],
        dataIsLoad: !1
    },
    attached: function() {
        this.setData({
            globalColor: a.globalData.globalColor
        }), this.getDataInfo();
    },
    methods: {
        lookColumnDetail: function(t) {
            var a = t.currentTarget.dataset.item;
            wx.navigateTo({
                url: "/packageA/pages/person-cate/person-cate?column_id=" + a.id + "&name=" + this.data.tabname + "&type=" + this.properties.typeName
            });
        },
        chooseNav: function(t) {
            var a = t.currentTarget.dataset.index, e = this.data.column;
            0 == a ? this.setData({
                active: a,
                pageColor: "#fff",
                dataIsLoad: !0
            }) : this.setData({
                active: a,
                pageColor: e.length > 0 ? "#fff" : "#F6F7F8",
                dataIsLoad: !0
            });
        },
        goTeacherDetail: function(t) {
            var a = t.currentTarget.dataset, e = a.id, o = a.name;
            wx.navigateTo({
                url: "/pages/campus-famous-detail/campus-famous-detail?id=".concat(e, "&name=").concat(o, "&type=").concat(this.properties.typeName)
            });
        },
        getDataInfo: function() {
            var t = this;
            console.log(this.data.tabname);
            var o = this, i = o.data, n = i.page, s = i.page_size, l = i.currentList, r = i.column;
            wx.showLoading({
                title: "加载中"
            }), e.get(a.globalData.baseUrl + this.data.url, {
                page: n,
                page_size: s
            }).then(function(e) {
                console.log(e);
                var i = e.data ? l.concat(e.data) : l, n = e.column ? r.concat(e.column) : r;
                console.log(i), console.log(n), e.intro && i.length > 0 ? t.setData({
                    isShowIntro: !0,
                    isShowList: !0,
                    dataIsLoad: !0,
                    types: [ {
                        id: 1,
                        name: "介绍"
                    }, {
                        id: 2,
                        name: "人物"
                    } ]
                }) : e.intro && 0 == i.length ? (console.log("000"), t.setData({
                    isShowIntro: !0,
                    isShowList: !1,
                    dataIsLoad: !0,
                    types: [ {
                        id: 1,
                        name: "介绍"
                    } ]
                }), wx.hideLoading()) : !e.intro && i.length > 0 && t.setData({
                    isShowIntro: !1,
                    isShowList: !0,
                    active: 1,
                    types: [ {
                        id: 2,
                        name: "人物"
                    } ],
                    dataIsLoad: !0
                }), o.setData({
                    currentList: i,
                    globalColor: a.globalData.globalColor,
                    intro: e.intro,
                    total: e.total,
                    column: n,
                    dataIsLoad: !0
                }), wx.hideLoading();
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
        onReachBottom: function() {
            var t = this.data, a = t.page, e = t.total, o = t.page_size, i = t.active;
            a * o < e && 1 == i ? (a += 1, this.setData({
                page: a,
                isBottom: !1
            }), this.getDataInfo()) : this.setData({
                isBottom: !0
            });
        }
    }
});