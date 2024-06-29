var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default;

require("../../../@babel/runtime/helpers/Arrayincludes");

var e, a = require("../../../@babel/runtime/helpers/typeof"), n = require("../../../@babel/runtime/helpers/toConsumableArray"), i = require("../../../@babel/runtime/helpers/objectSpread2"), s = require("../../../@babel/runtime/helpers/regeneratorRuntime"), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../@babel/runtime/helpers/defineProperty"), c = t(require("../../../utils/http")), u = getApp(), l = new c.default.Http();

Component({
    properties: {
        data: {
            type: Object,
            value: {
                id: "",
                identify: ""
            },
            observer: function(t) {
                ((t = Object.assign({
                    id: "",
                    identify: ""
                }, t)).id || t.identify) && this.init(t);
            }
        },
        height: {
            type: Number,
            value: 0
        },
        isNav: {
            type: Boolean,
            value: !1
        }
    },
    ruleIds: [],
    data: (e = {
        id: "",
        adShow: !1,
        dataInfo: "",
        show: !1,
        address: [],
        majorData: [],
        major: [],
        majorIndex: 0,
        addressIndex: 0,
        prefixs: [],
        pullData: "",
        pupupChildList: [],
        pupupChildIndex: 0,
        prefixsList: []
    }, r(e, "majorData", ""), r(e, "major", [ [], [] ]), r(e, "userInfo", {
        access_token: void 0
    }), r(e, "identify", ""), r(e, "msgMap", {}), e),
    methods: {
        init: function(t) {
            var e = this, a = wx.getStorageSync("newuserinfo");
            a = Object.assign({
                access_token: void 0
            }, a.token), this.setData({
                id: t.id,
                identify: t.identify,
                userInfo: a
            }), u.globalData.home.then(function() {
                e.getData(), e.getCountry(), e.getMarjs();
            });
        },
        toPay: function(t) {
            var e = this;
            return o(s().mark(function a() {
                var n, i, o, r, c, d, p;
                return s().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return n = e.data.dataInfo, i = n.questions, o = t.target.dataset.id, r = i.findIndex(function(t) {
                            return t.id === o;
                        }), c = {
                            form_id: e.data.id,
                            question_id: o
                        }, e.data.identify && (c.identify = e.data.identify), a.next = 8, l.post(u.globalData.baseUrl3 + "/miniapp/form/pay", c, {
                            Authorization: e.data.userInfo.access_token
                        });

                      case 8:
                        d = a.sent, p = d.data, wx.requestPayment({
                            timeStamp: p.timeStamp,
                            nonceStr: p.nonceStr,
                            package: p.package,
                            signType: p.signType,
                            paySign: p.paySign,
                            success: function() {
                                i[r].is_pay = 1, e.setData({
                                    dataInfo: n
                                });
                            },
                            fail: function() {
                                l.post(u.globalData.baseUrl3 + "/miniapp/form/cancel", {
                                    order_no: p.order_no
                                }).then(function() {
                                    wx.showToast({
                                        title: "取消支付成功",
                                        icon: "none"
                                    });
                                });
                            }
                        });

                      case 11:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        adClose: function() {
            this.setData({
                adShow: !1
            });
        },
        isRule: function(t) {
            return t.is_show;
        },
        delUploadFile: function(t) {
            var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.fIndex, n = i({}, this.data.dataInfo), s = n.questions;
            s[e].select.splice(a, 1), n.questions = s, this.setData({
                dataInfo: n
            });
        },
        uploadFile: function(t) {
            var e = this, a = t.currentTarget.dataset.index, s = i({}, this.data.dataInfo), o = s.questions, r = {
                schoolid: u.globalData.schoolid,
                Version: u.globalData.version,
                "App-Type": u.globalData.appType,
                openid: u.globalData.openid,
                Authorization: u.globalData.userInfo.access_token
            }, c = [ "doc", "docx", "xls", "xlsx", "csv", "ppt", "pdf", "zip", "rar" ], l = 0 == o[a].file_type[0] ? c : o[a].file_type.map(function(t) {
                return c[t - 1];
            });
            wx.chooseMessageFile({
                count: 1,
                type: "file",
                success: function(t) {
                    var i = t.tempFiles[0], c = i.path.substring(i.path.lastIndexOf(".") + 1, i.path.length);
                    l.includes(c) ? (wx.showLoading({
                        title: "上传中"
                    }), wx.uploadFile({
                        url: u.globalData.baseUrl3 + "/miniapp/upload/file",
                        name: "file",
                        filePath: i.path,
                        header: r,
                        success: function(t) {
                            var r = JSON.parse(t.data);
                            wx.hideLoading(), o[a].select || (o[a].select = []), o[a].select = [].concat(n(o[a].select), [ {
                                name: i.name,
                                value: r.data.url,
                                icon: r.data.info.icon,
                                icon_full: r.data.info.icon_full,
                                size: r.data.info.size
                            } ]), s.questions = o, e.setData({
                                dataInfo: s
                            });
                        },
                        fail: function() {
                            wx.hideLoading();
                        }
                    })) : wx.showToast({
                        title: "此文件格式不支持",
                        icon: "none"
                    });
                }
            });
        },
        postData: function(t) {
            var e = this;
            return o(s().mark(function a() {
                var n, i, o, r, c;
                return s().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (t = t || e.data.userInfo.access_token, n = void 0, i = [], (o = e.data.dataInfo) && o.questions && 0 != o.questions.length ? o.questions.forEach(function(t, a) {
                            var s = {
                                question_id: t.id,
                                answer: "",
                                is_click: e.isRule(t)
                            };
                            if (1 == t.type) {
                                if (t.select = t.select ? t.select : [], 1 == t.is_require && null == t.select && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                if (1 == t.is_length_limit && t.select.length > 0 && t.select.length < t.min) return void (n = "第".concat(a + 1, "题至少填入").concat(t.min, "个字符"));
                                null != t.select && (s.answer = "string" == typeof t.select ? t.select : "");
                            }
                            if (2 == t.type) {
                                if (1 == t.is_require && null == t.select && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                null != t.select && "number" == typeof t.select && (s.answer = t.option[t.select].content);
                            }
                            if (3 == t.type) {
                                s.answer = [];
                                var o = null == t.select ? [] : t.select;
                                if (1 == t.is_require && 0 == o.length && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                if (0 != o.length) {
                                    if (1 == t.is_length_limit && o.length < t.min) return void (n = "第".concat(a + 1, "题最少选择").concat(t.min, "项"));
                                    s.answer = o;
                                }
                            }
                            if (4 != t.type || 1 != t.is_require || 1 === t.is_pay) {
                                if (5 == t.type) {
                                    s.answer = [];
                                    var r = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == r.length && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    if (0 != r.length) {
                                        if (1 == t.is_length_limit && r.length < t.min) return void (n = "第".concat(a + 1, "题至少上传").concat(t.min, "张图片"));
                                        s.answer = r.map(function(t) {
                                            return t.url;
                                        });
                                    }
                                }
                                if (6 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    null != t.select && (s.answer = t.select);
                                }
                                if (7 == t.type) {
                                    s.answer = [];
                                    var c = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == c.length && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    0 != c.length && (s.answer = c);
                                }
                                if (8 == t.type) {
                                    var u = null == t.ids ? [] : t.ids;
                                    if (1 == t.is_require && 0 == u.length && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    if (0 != u.length) {
                                        if (1 == t.is_length_limit && u.length < t.min) return void (n = "第".concat(a + 1, "题至少选择").concat(t.min, "项"));
                                        s.answer = u;
                                    }
                                }
                                if (9 == t.type) {
                                    s.answer = [];
                                    var l = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == l.length && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    0 != l.length && (2 != l.length && (n = "请完整上传身份证正反面"), s.answer = l.map(function(t) {
                                        return t.url;
                                    }));
                                }
                                if (10 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    null != t.select && (s.answer = t.select);
                                }
                                if (11 == t.type) {
                                    if (t.prefix = t.prefix ? t.prefix : "+86", 1 == t.is_require && 1 == s.is_click && (null == t.code || null == t.phone)) return void (n = "请完善第".concat(a + 1, "题"));
                                    s.answer = {
                                        code: t.code,
                                        phone: t.phone,
                                        prefix: t.prefix
                                    };
                                }
                                if (12 == t.type) {
                                    s.answer = [];
                                    var d = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == d.length && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    s.answer = d;
                                }
                                if (13 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    null != t.select && (s.answer = t.select);
                                }
                                if (14 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == s.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    t.select && (s.answer = t.select.map(function(t) {
                                        return {
                                            value: t.value,
                                            name: t.name,
                                            size: t.size,
                                            icon: t.icon
                                        };
                                    }));
                                }
                                0 == s.is_click && (s.answer = ""), i.push(s);
                            } else n = "请完成第".concat(a + 1, "题支付");
                        }) : n = "暂无表单数据无需提交", !n) {
                            a.next = 8;
                            break;
                        }
                        return wx.showToast({
                            title: n,
                            icon: "none"
                        }), a.abrupt("return");

                      case 8:
                        if (r = {
                            form_id: e.data.id,
                            answers: i
                        }, e.data.dataInfo.csrf_token && (r.csrf_token = e.data.dataInfo.csrf_token), e.data.identify && (r.identify = e.data.identify), 
                        !e.data.identify) {
                            a.next = 17;
                            break;
                        }
                        return a.next = 14, l.put(u.globalData.baseUrl3 + "/miniapp/form/" + e.data.id, r, {
                            Authorization: t
                        });

                      case 14:
                        c = a.sent, a.next = 20;
                        break;

                      case 17:
                        return a.next = 19, l.post(u.globalData.baseUrl3 + "/miniapp/form", r, {
                            Authorization: t
                        });

                      case 19:
                        c = a.sent;

                      case 20:
                        if (2e3 != c.errcode) {
                            a.next = 23;
                            break;
                        }
                        return wx.showToast({
                            title: "请登录",
                            icon: "none"
                        }), a.abrupt("return");

                      case 23:
                        if (1 != c.errcode) {
                            a.next = 26;
                            break;
                        }
                        return wx.showToast({
                            title: c.errmsg,
                            icon: "none"
                        }), a.abrupt("return");

                      case 26:
                        if (2 != c.errcode) {
                            a.next = 30;
                            break;
                        }
                        return wx.showToast({
                            title: "表单配置发生了变化，请重新填写",
                            icon: "none"
                        }), e.init(e.data.id), a.abrupt("return");

                      case 30:
                        wx.redirectTo({
                            url: "/pages/form-page-success/form-page-success?id=" + e.data.id + "&name=" + e.data.dataInfo.topic + "&is_post_more=1"
                        });

                      case 31:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        commit: function() {
            var t = this;
            console.log(this.data.dataInfo);
            var e = wx.getStorageSync("newuserinfo");
            1 != this.data.dataInfo.not_login_allowed || this.data.userInfo.access_token ? 1 == this.data.dataInfo.is_send ? wx.requestSubscribeMessage({
                tmplIds: u.globalData.formIds,
                fail: function(t) {
                    console.error("requestSubscribeMessage2 =>" + t.errMsg);
                },
                complete: function(a) {
                    t.postData(e.token.access_token);
                }
            }) : this.postData(e.token.access_token) : (1 == this.data.dataInfo.is_send && wx.requestSubscribeMessage({
                tmplIds: u.globalData.formIds,
                fail: function(t) {
                    console.error("requestSubscribeMessage1 =>" + t.errMsg);
                },
                complete: function(t) {
                    console.log("requestSubscribeMessage1");
                }
            }), this.postData(e.token.access_token));
        },
        getRuleAllIds: function(t, e, a) {
            var i = this, s = [], o = Object.keys(e).find(function(e) {
                return e.includes("_".concat(t));
            });
            return o && (s = [].concat(n(s), n(e[o]))), s.forEach(function(t) {
                var o = a.find(function(e) {
                    return e.id === t;
                });
                o.option && o.option.forEach(function(t) {
                    var o = i.getRuleAllIds(t.id, e, a);
                    o.length > 0 && (s = [].concat(n(s), n(o)));
                });
            }), s;
        },
        getData: function() {
            var t = this;
            return o(s().mark(function e() {
                var a, n, o;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!t.data.identify) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 3, l.get(u.globalData.baseUrl3 + "/miniapp/form/" + t.data.id + "?identify=" + t.data.identify, {}, {
                            Authorization: t.data.userInfo.access_token
                        });

                      case 3:
                        (a = e.sent).questions = a.questions.map(function(t) {
                            if (1 == t.type && (t.select = t.answer), 2 == t.type && t.option.forEach(function(e, a) {
                                e.content == t.answer && (t.select = a);
                            }), 3 == t.type && t.answer && (t.select = t.answer.split(",").map(function(t) {
                                return Number.parseInt(t);
                            }), t.option && t.option.forEach(function(e) {
                                t.select.includes(e.id) && (e.checkShow = !0);
                            })), 5 != t.type && 9 != t.type || t.uploadList && (t.select = t.uploadList.map(function(e, a) {
                                return {
                                    url_full: e,
                                    url: t.answer[a]
                                };
                            })), 6 == t.type && (t.select = t.answer), 7 == t.type && (t.select = t.answer.split(",")), 
                            8 == t.type) {
                                if (!t.answer) return t;
                                var e = t.answer.split(",").map(function(t) {
                                    return Number.parseInt(t);
                                });
                                t.ids = e;
                                var a = [];
                                t.option.forEach(function(t) {
                                    e.includes(t.id) && a.push(t.content), 0 != t.child.length && t.child.forEach(function(t) {
                                        e.includes(t.id) && a.push(t.content);
                                    });
                                }), t.idsName = a, t.selectStr = a.join(",");
                            }
                            return 10 == t.type && (t.select = t.answer), 11 == t.type && t.answer && (t.prefix = t.answer.prefix, 
                            t.phone = t.answer.phone), 12 == t.type && (t.select = t.answer.split(",")), 13 == t.type && (t.select = t.answer), 
                            14 == t.type && (t.select = t.answer), t;
                        }), e.next = 10;
                        break;

                      case 7:
                        return e.next = 9, l.get(u.globalData.baseUrl3 + "/miniapp/form/" + t.data.id);

                      case 9:
                        a = e.sent;

                      case 10:
                        a.questions && 0 !== a.questions.length && (n = a.questions, o = n.map(function(t) {
                            var e = [];
                            return t.extra && 0 != t.extra.length && (t.extra = t.extra.filter(function(t) {
                                return "img" != t.type || (e.push(t), !1);
                            })), i(i({}, t), {}, {
                                imgs: e,
                                isRule: 0 === t.is_show
                            });
                        }), a.questions = o), a && a.questions ? t.questionDefalutIds = a.questions.filter(function(t) {
                            return 1 === t.is_show;
                        }).map(function(t) {
                            return t.id;
                        }) : t.questionDefalutIds = [], t.setData({
                            dataInfo: t.restoration(a),
                            show: !0
                        }), wx.setNavigationBarTitle({
                            title: a.topic
                        }), 1 == a.is_popup && t.setData({
                            adShow: !0
                        });

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        getCountry: function() {
            var t = this;
            return o(s().mark(function e() {
                var a, n;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, l.get(u.globalData.baseUrl + "/miniapp/form/country/" + t.data.id);

                      case 2:
                        a = e.sent, n = a.list.map(function(t) {
                            return t.prefix;
                        }), t.setData({
                            prefixsList: n
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        getMarjs: function() {
            var t = this;
            return o(s().mark(function e() {
                var a, n, i, o, r;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, l.get(u.globalData.baseUrl + "/miniapp/major/dropdown");

                      case 2:
                        a = e.sent, n = a.data, i = [], [], r = [], o = n.map(function(t) {
                            return t.major_name;
                        }), n[0] && (0 != o.length && (i = n[0].department.map(function(t) {
                            return t.name;
                        })), 0 != i.length && n[0].department[0].college && (r = n[0].department[0].college.map(function(t) {
                            return t.name;
                        }))), t.setData({
                            majorData: n,
                            major: [ o, i, r ]
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        majorColumnchange: function(t) {
            var e = t.detail, a = e.column, n = e.value, i = this.data.majorData, s = [], o = [];
            0 == a && (this.data.majorIndex = n, i[n].department && 0 != i[n].department.length && (s = i[n].department.map(function(t) {
                return t.name;
            })), 0 != s.length && i[n].department[0].major && 0 != i[n].department[0].major.length && (o = i[n].department[0].major.map(function(t) {
                return t.name;
            })), this.setData({
                major: [ this.data.major[0], s, o ]
            })), 1 == a && (i[this.data.majorIndex].department && 0 != i[this.data.majorIndex].department[n].major.length && (o = i[this.data.majorIndex].department[n].major.map(function(t) {
                return t.name;
            })), this.setData({
                major: [ this.data.major[0], this.major[1], o ]
            }));
        },
        majorChange: function(t) {
            var e = t.currentTarget.dataset.qindex, a = i({}, this.data.dataInfo), n = a.questions, s = t.detail.value, o = [];
            1 == n[e].majors_type && (o = [ this.data.major[0][s[0]], this.data.major[1][s[1]], this.data.major[2][s[2]] ]), 
            2 == n[e].majors_type && (o = [ this.data.major[0][s[0]], this.data.major[1][s[1]] ]), 
            3 == n[e].majors_type && (o = [ this.data.major[0][s[0]] ]), n[e].ids = s, n[e].select = o, 
            a.questions = n, this.setData({
                dataInfo: a
            });
        },
        prefixChange: function(t) {
            var e = Number.parseInt(t.target.dataset.index + ""), a = Number.parseInt(t.detail.value), n = i({}, this.data.dataInfo);
            n.questions[e].prefix = this.data.prefixsList[a], this.setData({
                dataInfo: n
            });
        },
        inputPhoneChange: function(t) {
            var e = t.detail.value, a = Number.parseInt(t.target.dataset.index + ""), n = i({}, this.data.dataInfo);
            n.questions[a].phone = e, this.setData({
                dataInfo: n
            });
        },
        sendMsg: function(t) {
            var e = this;
            return o(s().mark(function a() {
                var n, o, r, c, d, p;
                return s().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (i({}, e.data.dataInfo), n = t.target.dataset.index, o = t.target.dataset.item, 
                        r = o.prefix ? o.prefix : "+86", o.phone && 11 == o.phone.length) {
                            a.next = 7;
                            break;
                        }
                        return uni.showToast({
                            title: "请输入手机号码",
                            icon: "none"
                        }), a.abrupt("return");

                      case 7:
                        return wx.showLoading({
                            title: "发送中"
                        }), a.next = 10, l.post(u.globalData.baseUrl3 + "/miniapp/form/msg/" + e.data.id, {
                            phone: o.phone,
                            prefix: r
                        });

                      case 10:
                        if (0 == (c = a.sent).errcode) {
                            a.next = 14;
                            break;
                        }
                        return wx.showToast({
                            title: c.errmsg,
                            icon: "none"
                        }), a.abrupt("return");

                      case 14:
                        wx.hideLoading(), (d = e.data.msgMap)[n] = {
                            miaoSize: 60,
                            miaoType: !0
                        }, e.setData({
                            msgMap: d
                        }), p = setInterval(function() {
                            if ((d = e.data.msgMap)[n].miaoSize <= 0) return clearInterval(p), d[n] = {
                                miaoSize: 60,
                                miaoType: !1
                            }, void e.setData({
                                msgMap: d
                            });
                            d[n].miaoSize = d[n].miaoSize - 1, e.setData({
                                msgMap: d
                            });
                        }, 1e3), wx.showToast({
                            title: "验证码发送成功",
                            icon: "none"
                        });

                      case 20:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        inputCodeChange: function(t) {
            var e = t.detail.value, a = Number.parseInt(t.target.dataset.index + ""), n = i({}, this.data.dataInfo);
            n.questions[a].code = e, this.setData({
                dataInfo: n
            });
        },
        idCardGenduo: function(t) {
            var e = this, a = t.currentTarget.dataset.type, n = t.currentTarget.dataset.index, s = i({}, this.data.dataInfo);
            wx.showActionSheet({
                itemList: [ "预览", "修改", "删除" ],
                success: function(t) {
                    var i = t.tapIndex;
                    0 == i && wx.previewImage({
                        urls: [ s.questions[n].select[a].url_full ]
                    }), 1 == i && e.idCardUpload({
                        currentTarget: {
                            dataset: {
                                type: a,
                                index: n
                            }
                        }
                    }), 2 == i && (s.questions[n].select[a] = void 0, e.setData({
                        dataInfo: s
                    }));
                }
            });
        },
        idCardUpload: function(t) {
            var e = this, a = t.currentTarget.dataset.type, s = t.currentTarget.dataset.index, o = i({}, this.data.dataInfo), r = n(o.questions), c = {
                schoolid: u.globalData.schoolid,
                Version: u.globalData.version,
                "App-Type": u.globalData.appType,
                openid: u.globalData.openid,
                Authorization: u.globalData.userInfo.token.access_token
            };
            wx.chooseImage({
                count: 1,
                success: function(t) {
                    var n = t.tempFilePaths[0];
                    wx.showLoading({
                        title: "上传中"
                    }), wx.uploadFile({
                        url: u.globalData.baseUrl + "/miniapp/upload",
                        name: "image",
                        filePath: n,
                        header: c,
                        success: function(t) {
                            var n = JSON.parse(t.data), i = {
                                url: n.url,
                                url_full: n.url_full
                            };
                            r[s].select || (r[s].select = []), r[s].select[a] = i, o.questions = r, e.setData({
                                dataInfo: o
                            });
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                }
            });
        },
        imageUpload: function(t) {
            var e = this, a = t.currentTarget.dataset.qindex, s = i({}, this.data.dataInfo), o = s.questions[a].select ? s.questions[a].select : [];
            if (1 == s.questions[a].is_length_limit && o.length >= s.questions[a].max) wx.showToast({
                title: "图片上传已经上限",
                icon: "none"
            }); else {
                var r = {
                    schoolid: u.globalData.schoolid,
                    Version: u.globalData.version,
                    "App-Type": u.globalData.appType,
                    openid: u.globalData.openid,
                    Authorization: u.globalData.userInfo.token.access_token
                };
                wx.chooseImage({
                    count: s.questions[a].max - o.length,
                    success: function(t) {
                        var i = t.tempFilePaths, c = [];
                        wx.showLoading({
                            title: "上传中"
                        }), i.forEach(function(t) {
                            var e = new Promise(function(e, a) {
                                wx.uploadFile({
                                    url: u.globalData.baseUrl + "/miniapp/upload",
                                    name: "image",
                                    filePath: t,
                                    header: r,
                                    success: function(t) {
                                        var a = JSON.parse(t.data);
                                        e({
                                            url: a.url,
                                            url_full: a.url_full
                                        });
                                    }
                                });
                            });
                            c.push(e);
                        }), Promise.all(c).then(function(t) {
                            s.questions[a].select = [].concat(n(o), n(t)), e.setData({
                                dataInfo: s
                            }), wx.hideLoading();
                        });
                    }
                });
            }
        },
        imgSheetUpadte: function(t) {
            var e = this, a = t.currentTarget.dataset.qindex, n = t.currentTarget.dataset.index, s = i({}, this.data.dataInfo);
            wx.showActionSheet({
                itemList: [ "预览", "删除" ],
                success: function(t) {
                    var i = t.tapIndex;
                    0 == i && wx.previewImage({
                        urls: [ s.questions[a].select[n].url_full ]
                    }), 1 == i && (s.questions[a].select[n] = void 0, s.questions[a].select = s.questions[a].select.filter(function(t) {
                        return t;
                    }), e.setData({
                        dataInfo: s
                    }));
                }
            });
        },
        tiankongInputChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value, n = i({}, this.data.dataInfo);
            n.questions[e].select = a, this.setData({
                dataInfo: n
            });
        },
        codeInputChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value, n = i({}, this.data.dataInfo);
            n.questions[e].select = a, this.setData({
                dataInfo: n
            });
        },
        dateTimeChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value, n = i({}, this.data.dataInfo);
            n.questions[e].select = a, this.setData({
                dataInfo: n
            });
        },
        addressChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value;
            console.log(a);
            var n = i({}, this.data.dataInfo);
            n.questions[e].select = a, this.setData({
                dataInfo: n
            });
        },
        selectRadio: function(t) {
            var e = t.currentTarget.dataset, a = i({}, this.data.dataInfo), n = a.questions[e.question];
            n.select = e.opt, a.questions[e.question] = n, a = this.setStatus(e.question), this.setData({
                dataInfo: a
            });
        },
        bindMultiOpen: function(t) {
            var e = t.currentTarget.dataset.item, a = t.currentTarget.dataset.index;
            this.setData({
                pupupChildList: e.option[0].child,
                pullData: {
                    data: e,
                    index: a
                }
            });
        },
        showImage: function(t) {
            wx.previewImage({
                urls: [ t.currentTarget.dataset.value ]
            });
        },
        infoEvent: function(t) {
            var e = t.currentTarget.dataset.item;
            "link" == e.type && wx.navigateTo({
                url: "/pages/web-view/web-view?url=" + encodeURIComponent(e.value)
            }), "file" == e.type && (wx.showLoading({
                title: "文件加载中..."
            }), wx.downloadFile({
                url: e.value_full,
                success: function(t) {
                    var e = t.tempFilePath;
                    wx.openDocument({
                        filePath: e,
                        success: function(t) {
                            console.log("打开文档成功");
                        }
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            }));
        },
        popupClose: function(t) {
            var e = i({}, this.data.dataInfo);
            if (t.currentTarget.dataset.type) {
                var a = this.data.pullData, n = [], s = [];
                if (a.data.option.forEach(function(t) {
                    t.check && (n.push(t.id), s.push(t.content)), 0 != t.child.length && t.child.forEach(function(t) {
                        t.check && (n.push(t.id), s.push(t.content));
                    });
                }), n.length > a.data.max && 1 == a.data.is_length_limit) return void wx.showToast({
                    title: "最多只能选择" + a.data.max + "项",
                    icon: "none"
                });
                e.questions[a.index].ids = n, e.questions[a.index].idsName = s, e.questions[a.index].selectStr = s.join(","), 
                this.setData({
                    dataInfo: e
                });
            }
            this.setData({
                dataInfo: e,
                pullData: "",
                pupupChildList: [],
                pupupChildIndex: 0
            });
        },
        pupupSelect: function(t) {
            var e = t.currentTarget.dataset.item, a = t.currentTarget.dataset.index, n = i({}, this.data.pullData);
            0 == e.child.length && (n.data.option[a].check = !n.data.option[a].check), this.setData({
                pupupChildList: e.child,
                pullData: n,
                pupupChildIndex: a
            });
        },
        pupupSelectTwo: function(t) {
            var e = t.currentTarget.dataset.index, a = n(this.data.pupupChildList), s = i({}, this.data.pullData);
            a[e].check = !a[e].check, s.data.option[this.data.pupupChildIndex].child = a, this.setData({
                pupupChildList: a,
                pullData: s
            });
        },
        selectMultiple: function(t) {
            var e = t.currentTarget.dataset, a = i({}, this.data.dataInfo), s = a.questions[e.question];
            if (null == s.select && (s.select = []), s.max <= s.select.length && 1 == s.is_length_limit) {
                if (!s.select.includes(e.id)) return void wx.showToast({
                    title: "最多只能选择" + s.max + "项 ~",
                    icon: "none"
                });
                var o = s.select.filter(function(t) {
                    return t != e.id;
                });
                s.select = o;
            } else if (s.select.includes(e.id)) {
                var r = s.select.filter(function(t) {
                    return t != e.id;
                });
                s.select = r;
            } else s.select = [].concat(n(s.select), [ e.id ]);
            null == s.option[e.index].checkShow ? s.option[e.index].checkShow = !0 : s.option[e.index].checkShow = !s.option[e.index].checkShow, 
            a.questions[e.question] = s, a = this.setStatus(e.question), this.setData({
                dataInfo: a
            });
        },
        restoration: function(t) {
            var e = t.new_rule, i = [];
            return t.questions.forEach(function(t) {
                if (t.option && "object" === a(t.option) && t.option.length > 0 && void 0 !== t.select) {
                    if (2 === t.type) {
                        var s = t.option[t.select];
                        if (s) {
                            var o = "".concat(t.id, "_").concat(s.id);
                            i = [].concat(n(i), n(e[o] || []));
                        }
                    }
                    if (3 === t.type) {
                        var r = t.select.sort(), c = "".concat(t.id, "_").concat(r.join(","));
                        i = [].concat(n(i), n(e[c] || []));
                    }
                }
            }), i = Array.from(new Set([].concat(n(i), n(this.questionDefalutIds)))), t.questions.forEach(function(t) {
                i.includes(t.id) ? t.is_show = 1 : t.is_show = 0;
            }), t;
        },
        setSelectNull: function(t, e, a, i) {
            var s = this, o = [], r = "";
            if (2 === i && e.forEach(function(e) {
                r = "".concat(a, "_").concat(e.id);
                var i = t.new_rule[r];
                i && (o = [].concat(n(o), n(i)));
            }), 3 === i) {
                var c = e.map(function(t) {
                    return t.id;
                });
                r = "".concat(a, "_").concat(c.join(","));
                var u = t.new_rule[r];
                u && (o = [].concat(n(o), n(u)));
            }
            return t.questions.forEach(function(e) {
                if (o.includes(e.id) && (2 === i && (e.select = void 0), 3 === i && (e.select = []), 
                e.option)) {
                    var a = [];
                    2 === i && (a = e.option.filter(function(t, a) {
                        return a !== e.select;
                    })), 3 === i && (a = e.option.filter(function(t) {
                        return e.select.includes(t.id);
                    })), t = s.setSelectNull(t, a, e.id, i);
                }
            }), t;
        },
        setStatus: function(t) {
            var e = this.data.dataInfo, a = e.questions[t], n = [];
            if (2 === a.type && (n = a.option.filter(function(t, e) {
                return e !== a.select;
            })), 3 === a.type) {
                var i = a.select.sort();
                n = a.option.filter(function(t) {
                    return i.includes(t.id);
                });
            }
            return e = this.setSelectNull(e, n, a.id, a.type), this.restoration(e);
        }
    }
});