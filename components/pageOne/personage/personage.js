var a = require("../../../@babel/runtime/helpers/interopRequireDefault").default, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"), e = require("../../../@babel/runtime/helpers/asyncToGenerator"), o = a(require("../../../utils/http")), r = getApp(), s = new o.default.Http();

Component({
    options: {
        addGlobalClass: !0
    },
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
            observer: function(a) {
                console.log(a), "characters" == a && this.setData({
                    url: "/miniapp/character"
                });
            }
        },
        columnid: {
            type: String,
            value: "0",
            observer: function(a) {
                console.log(a), this.setData({
                    column_id: a || ""
                }), this.data.column_id && this.getDataInfo();
            }
        }
    },
    data: {
        url: "/miniapp/character",
        topNum: 0,
        showType: !0,
        pageColor: "#F9F9F9",
        types: [],
        active: 0,
        globalColor: "",
        page: 1,
        page_size: 20,
        total: 1,
        column_id: "",
        currentList: [],
        isBottom: !1,
        isShowIntro: !1,
        isShowList: !1,
        intro: "",
        column: [],
        characterClass: "character-box-one",
        isShowListInfo: !1,
        isShowListImg: !0,
        isColon: !1,
        dataIsLoad: !1
    },
    attached: function() {
        this.setData({
            globalColor: r.globalData.globalColor
        });
    },
    methods: {
        lookColumnDetail: function(a) {
            var t = a.currentTarget.dataset.item;
            wx.navigateTo({
                url: "/packageA/pages/personage-cate/personage-cate?child_id=" + t.id + "&column_id=" + this.data.column_id + "&name=" + this.data.tabname + "&type=" + this.properties.typeName
            });
        },
        chooseNav: function(a) {
            var t = a.currentTarget.dataset.index, e = this.data.column;
            0 == t ? this.setData({
                active: t,
                pageColor: "#F9F9F9"
            }) : this.setData({
                active: t,
                pageColor: e.length > 0 ? "#F9F9F9" : "#F6F7F8"
            });
        },
        goTeacherDetail: function(a) {
            var t = a.currentTarget.dataset, e = t.id, o = t.name;
            wx.navigateTo({
                url: "/pages/campus-famous-detail/campus-famous-detail?id=".concat(e, "&name=").concat(o, "&type=").concat(this.properties.typeName)
            });
        },
        getDataInfo: function() {
            var a = this;
            return e(t().mark(function e() {
                var o, i, n, c, l, h, u;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中"
                        }), i = (o = a).data, n = i.page, c = i.page_size, l = i.currentList, h = i.column_id, 
                        u = i.column, t.next = 5, s.get(r.globalData.baseUrl + a.data.url, {
                            page: n,
                            page_size: c,
                            column_id: h
                        }).then(function(t) {
                            var e = t.data ? l.concat(t.data) : l, s = t.column ? u.concat(t.column) : u;
                            if (0 == s.length) switch (t.style) {
                              case 1:
                                o.setData({
                                    characterClass: "character-box-one",
                                    pageColor: "#F9F9F9",
                                    isShowListInfo: !0,
                                    isColon: !0
                                });
                                break;

                              case 2:
                                o.setData({
                                    characterClass: "character-box-two",
                                    pageColor: "#FBFBFB",
                                    isShowListInfo: !0,
                                    isShowListImg: !1
                                });
                                break;

                              case 4:
                                o.setData({
                                    characterClass: "character-box-three",
                                    pageColor: "#FFFFFF"
                                });
                                break;

                              case 3:
                                o.setData({
                                    characterClass: "character-box-four",
                                    pageColor: "#FBFBFB",
                                    isShowListInfo: !0
                                });
                                break;

                              case 6:
                                o.setData({
                                    characterClass: "character-box-five",
                                    pageColor: "#FBFBFB",
                                    isShowListInfo: !0
                                });
                                break;

                              case 5:
                                o.setData({
                                    characterClass: "character-box-six",
                                    pageColor: "#FFFFFF"
                                });
                            }
                            t.intro && e.length > 0 ? a.setData({
                                isShowIntro: !0,
                                isShowList: !0,
                                types: [ {
                                    id: 1,
                                    name: "介绍"
                                }, {
                                    id: 2,
                                    name: "人物"
                                } ]
                            }) : t.intro && 0 == e.length ? a.setData({
                                isShowIntro: !0,
                                isShowList: !1,
                                dataIsLoad: !0,
                                types: [ {
                                    id: 1,
                                    name: "介绍"
                                } ]
                            }) : !t.intro && e.length > 0 ? a.setData({
                                isShowIntro: !1,
                                isShowList: !0,
                                dataIsLoad: !0,
                                active: 1,
                                types: [ {
                                    id: 2,
                                    name: "人物"
                                } ]
                            }) : t.intro || 0 != s.length || a.setData({
                                isShowIntro: !1,
                                isShowList: !0,
                                active: 1,
                                dataIsLoad: !0
                            }), o.setData({
                                currentList: e,
                                globalColor: r.globalData.globalColor,
                                intro: t.intro,
                                total: t.total,
                                column: s,
                                dataIsLoad: !0
                            });
                        });

                      case 5:
                        wx.hideLoading();

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, e);
            }))();
        },
        linktap: function(a) {
            var t = a.detail.href, e = t.substring(t.lastIndexOf(".") + 1, t.length);
            "pdf" != e && "doc" != e && "docx" != e && "xls" != e && "xlsx" != e && "ppt" != e && "pptx" != e || wx.downloadFile({
                url: t,
                success: function(a) {
                    var t = a.tempFilePath;
                    wx.openDocument({
                        filePath: t
                    });
                }
            });
        },
        onReachBottom: function() {}
    }
});