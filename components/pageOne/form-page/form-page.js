var t = require("../../../@babel/runtime/helpers/interopRequireDefault").default;

require("../../../@babel/runtime/helpers/Arrayincludes");

var e, a = require("../../../@babel/runtime/helpers/toConsumableArray"), n = require("../../../@babel/runtime/helpers/objectSpread2"), i = require("../../../@babel/runtime/helpers/regeneratorRuntime"), s = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../@babel/runtime/helpers/defineProperty"), o = t(require("../../../utils/http")), c = getApp(), u = new o.default.Http();

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
        }
    },
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
    }), r(e, "identify", ""), e),
    methods: {
        init: function(t) {
            var e = this, a = wx.getStorageSync("userinfo");
            console.log(a), a = Object.assign({
                access_token: void 0
            }, a), this.setData({
                id: t.id,
                identify: t.identify,
                userInfo: a
            }), c.globalData.home.then(function() {
                e.getData(), e.getCountry(), e.getMarjs();
            });
        },
        toPay: function(t) {
            var e = this;
            return s(i().mark(function a() {
                var n, s, r, o, l, d, p;
                return i().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return n = e.data.dataInfo, s = n.questions, r = t.target.dataset.id, o = s.findIndex(function(t) {
                            return t.id === r;
                        }), l = {
                            form_id: e.data.id,
                            question_id: r
                        }, e.data.identify && (l.identify = e.data.identify), a.next = 8, u.post(c.globalData.baseUrl3 + "/miniapp/form/pay", l, {
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
                                s[o].is_pay = 1, e.setData({
                                    dataInfo: n
                                });
                            },
                            fail: function() {
                                u.post(c.globalData.baseUrl3 + "/miniapp/form/cancel", {
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
        postData: function(t) {
            var e = this;
            return s(i().mark(function a() {
                var n, s, r, o, l;
                return i().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (t = t || e.data.userInfo.access_token, n = void 0, s = [], (r = e.data.dataInfo) && r.questions && 0 != r.questions.length ? r.questions.forEach(function(t, a) {
                            var i = {
                                question_id: t.id,
                                answer: "",
                                is_click: e.isRule(t)
                            };
                            if (1 == t.type) {
                                if (1 == t.is_require && null == t.select && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                if (1 == t.is_length_limit && t.select.length < t.min) return void (n = "第".concat(a + 1, "题至少填入").concat(t.min, "个字符"));
                                null != t.select && (i.answer = t.select);
                            }
                            if (2 == t.type) {
                                if (1 == t.is_require && null == t.select && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                null != t.select && (i.answer = t.option[t.select].content);
                            }
                            if (3 == t.type) {
                                i.answer = [];
                                var r = null == t.select ? [] : t.select;
                                if (1 == t.is_require && 0 == r.length && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                if (0 != r.length) {
                                    if (1 == t.is_length_limit && r.length < t.min) return void (n = "第".concat(a + 1, "题最少选择").concat(t.min, "项"));
                                    i.answer = r;
                                }
                            }
                            if (4 != t.type || 1 != t.is_require || 1 === t.is_pay) {
                                if (5 == t.type) {
                                    i.answer = [];
                                    var o = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == o.length && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    if (0 != o.length) {
                                        if (1 == t.is_length_limit && o.length < t.min) return void (n = "第".concat(a + 1, "题至少上传").concat(t.min, "张图片"));
                                        i.answer = o.map(function(t) {
                                            return t.url;
                                        });
                                    }
                                }
                                if (6 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    null != t.select && (i.answer = t.select);
                                }
                                if (7 == t.type) {
                                    i.answer = [];
                                    var c = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == c.length && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    0 != c.length && (i.answer = c);
                                }
                                if (8 == t.type) {
                                    var u = null == t.ids ? [] : t.ids;
                                    if (1 == t.is_require && 0 == u.length && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    if (0 != u.length) {
                                        if (1 == t.is_length_limit && u.length < t.min) return void (n = "第".concat(a + 1, "题至少选择").concat(t.min, "项"));
                                        i.answer = u;
                                    }
                                }
                                if (9 == t.type) {
                                    i.answer = [];
                                    var l = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == l.length && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    0 != l.length && (2 != l.length && (n = "请完整上传身份证正反面"), i.answer = l.map(function(t) {
                                        return t.url;
                                    }));
                                }
                                if (10 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    null != t.select && (i.answer = t.select);
                                }
                                if (11 == t.type) {
                                    if (t.prefix = t.prefix ? t.prefix : "+86", 1 == t.is_require && 1 == i.is_click && (null == t.code || null == t.phone)) return void (n = "请完善第".concat(a + 1, "题"));
                                    i.answer = {
                                        code: t.code,
                                        phone: t.phone,
                                        prefix: t.prefix
                                    };
                                }
                                if (12 == t.type) {
                                    i.answer = [];
                                    var d = null == t.select ? [] : t.select;
                                    if (1 == t.is_require && 0 == d.length && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    i.answer = d;
                                }
                                if (13 == t.type) {
                                    if (1 == t.is_require && null == t.select && 1 == i.is_click) return void (n = "请完善第".concat(a + 1, "题"));
                                    null != t.select && (i.answer = t.select);
                                }
                                0 == i.is_click && (i.answer = ""), s.push(i);
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
                        if (o = {
                            form_id: e.data.id,
                            answers: s
                        }, e.data.dataInfo.csrf_token && (o.csrf_token = e.data.dataInfo.csrf_token), e.data.identify && (o.identify = e.data.identify), 
                        !e.data.identify) {
                            a.next = 17;
                            break;
                        }
                        return a.next = 14, u.put(c.globalData.baseUrl3 + "/miniapp/form/" + e.data.id, o, {
                            Authorization: t
                        });

                      case 14:
                        l = a.sent, a.next = 20;
                        break;

                      case 17:
                        return a.next = 19, u.post(c.globalData.baseUrl3 + "/miniapp/form", o, {
                            Authorization: t
                        });

                      case 19:
                        l = a.sent;

                      case 20:
                        if (2e3 != l.errcode) {
                            a.next = 23;
                            break;
                        }
                        return wx.showToast({
                            title: "请登录",
                            icon: "none"
                        }), a.abrupt("return");

                      case 23:
                        if (1 != l.errcode) {
                            a.next = 26;
                            break;
                        }
                        return wx.showToast({
                            title: l.errmsg,
                            icon: "none"
                        }), a.abrupt("return");

                      case 26:
                        if (2 != l.errcode) {
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
            1 != this.data.dataInfo.not_login_allowed || this.data.userInfo.access_token ? 1 == this.data.dataInfo.is_send ? wx.requestSubscribeMessage({
                tmplIds: c.globalData.formIds,
                fail: function(t) {
                    console.error("requestSubscribeMessage2 =>" + t.errMsg);
                },
                complete: function(e) {
                    t.postData(), console.log("requestSubscribeMessage2");
                }
            }) : this.postData() : (wx.getUserProfile({
                desc: "获取用户信息用于登录",
                success: function(e) {
                    var a = e;
                    t.data.nickName && "微信用户" != t.data.nickName || "getUserProfile:ok" == a.errMsg && wx.login({
                        success: function(e) {
                            var n = e.code;
                            u.post(c.globalData.baseUrl + "/miniapp/wxlogin", {
                                appId: c.globalData.appId,
                                code: n,
                                encryptedData: a.encryptedData,
                                iv: a.iv
                            }).then(function(e) {
                                0 == e.errcode ? (c.globalData.userInfo = e, c.globalData.token = e.access_token, 
                                wx.setStorage({
                                    key: "userinfo",
                                    data: e
                                }), t.postData(e.access_token)) : wx.showToast({
                                    title: e.errmsg,
                                    icon: "none"
                                });
                            });
                        },
                        fail: function() {
                            console.log("error");
                        }
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: t.errMsg,
                        icon: "none"
                    });
                }
            }), 1 == this.data.dataInfo.is_send && wx.requestSubscribeMessage({
                tmplIds: c.globalData.formIds,
                fail: function(t) {
                    console.error("requestSubscribeMessage1 =>" + t.errMsg);
                },
                complete: function(t) {
                    console.log("requestSubscribeMessage1");
                }
            }));
        },
        getData: function() {
            var t = this;
            return s(i().mark(function e() {
                var a;
                return i().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!t.data.identify) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 3, u.get(c.globalData.baseUrl3 + "/miniapp/form/" + t.data.id + "?identify=" + t.data.identify, {}, {
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
                            t;
                        }), e.next = 10;
                        break;

                      case 7:
                        return e.next = 9, u.get(c.globalData.baseUrl3 + "/miniapp/form/" + t.data.id);

                      case 9:
                        a = e.sent;

                      case 10:
                        t.setData({
                            dataInfo: a,
                            show: !0
                        }), wx.setNavigationBarTitle({
                            title: a.topic
                        }), 1 == a.is_popup && t.setData({
                            adShow: !0
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        getCountry: function() {
            var t = this;
            return s(i().mark(function e() {
                var a, n;
                return i().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, u.get(c.globalData.baseUrl + "/miniapp/form/country/" + t.data.id);

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
            return s(i().mark(function e() {
                var a, n, s, r, o;
                return i().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, u.get(c.globalData.baseUrl + "/miniapp/major/dropdown");

                      case 2:
                        a = e.sent, n = a.data, s = [], [], o = [], r = n.map(function(t) {
                            return t.major_name;
                        }), n[0] && (0 != r.length && (s = n[0].department.map(function(t) {
                            return t.name;
                        })), 0 != s.length && n[0].department[0].college && (o = n[0].department[0].college.map(function(t) {
                            return t.name;
                        }))), t.setData({
                            majorData: n,
                            major: [ r, s, o ]
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        majorColumnchange: function(t) {
            var e = t.detail, a = e.column, n = e.value, i = this.data.majorData, s = [], r = [];
            0 == a && (this.data.majorIndex = n, i[n].department && 0 != i[n].department.length && (s = i[n].department.map(function(t) {
                return t.name;
            })), 0 != s.length && i[n].department[0].major && 0 != i[n].department[0].major.length && (r = i[n].department[0].major.map(function(t) {
                return t.name;
            })), this.setData({
                major: [ this.data.major[0], s, r ]
            })), 1 == a && (i[this.data.majorIndex].department && 0 != i[this.data.majorIndex].department[n].major.length && (r = i[this.data.majorIndex].department[n].major.map(function(t) {
                return t.name;
            })), this.setData({
                major: [ this.data.major[0], this.major[1], r ]
            }));
        },
        majorChange: function(t) {
            var e = t.currentTarget.dataset.qindex, a = n({}, this.data.dataInfo), i = a.questions, s = t.detail.value, r = [];
            1 == i[e].majors_type && (r = [ this.data.major[0][s[0]], this.data.major[1][s[1]], this.data.major[2][s[2]] ]), 
            2 == i[e].majors_type && (r = [ this.data.major[0][s[0]], this.data.major[1][s[1]] ]), 
            3 == i[e].majors_type && (r = [ this.data.major[0][s[0]] ]), i[e].ids = s, i[e].select = r, 
            a.questions = i, this.setData({
                dataInfo: a
            });
        },
        prefixChange: function(t) {
            var e = Number.parseInt(t.target.dataset.index + ""), a = Number.parseInt(t.detail.value), i = n({}, this.data.dataInfo);
            i.questions[e].prefix = this.data.prefixsList[a], this.setData({
                dataInfo: i
            });
        },
        inputPhoneChange: function(t) {
            var e = t.detail.value, a = Number.parseInt(t.target.dataset.index + ""), i = n({}, this.data.dataInfo);
            i.questions[a].phone = e, this.setData({
                dataInfo: i
            });
        },
        sendMsg: function(t) {
            var e = this;
            return s(i().mark(function a() {
                var s, r, o, l, d, p;
                return i().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (s = n({}, e.data.dataInfo), r = t.target.dataset.index, o = t.target.dataset.item, 
                        l = o.prefix ? o.prefix : "+86", o.phone && 11 == o.phone.length) {
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
                        }), a.next = 10, u.post(c.globalData.baseUrl3 + "/miniapp/form/msg/" + e.data.id, {
                            phone: o.phone,
                            prefix: l
                        });

                      case 10:
                        if (0 == (d = a.sent).errcode) {
                            a.next = 14;
                            break;
                        }
                        return wx.showToast({
                            title: d.errmsg,
                            icon: "none"
                        }), a.abrupt("return");

                      case 14:
                        wx.hideLoading(), s.questions[r].miaoSize = 60, s.questions[r].miaoType = !0, p = setInterval(function() {
                            if (s.questions[r].miaoSize <= 0) return clearInterval(p), s.questions[r].miaoSize = 60, 
                            s.questions[r].miaoType = !1, void e.setData({
                                dataInfo: s
                            });
                            s.questions[r].miaoSize = s.questions[r].miaoSize - 1, e.setData({
                                dataInfo: s
                            });
                        }, 1e3), wx.showToast({
                            title: "验证码发送成功",
                            icon: "none"
                        });

                      case 19:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        inputCodeChange: function(t) {
            var e = t.detail.value, a = Number.parseInt(t.target.dataset.index + ""), i = n({}, this.data.dataInfo);
            i.questions[a].code = e, this.setData({
                dataInfo: i
            });
        },
        idCardGenduo: function(t) {
            var e = this, a = t.currentTarget.dataset.type, i = t.currentTarget.dataset.index, s = n({}, this.data.dataInfo);
            wx.showActionSheet({
                itemList: [ "预览", "修改", "删除" ],
                success: function(t) {
                    var n = t.tapIndex;
                    0 == n && wx.previewImage({
                        urls: [ s.questions[i].select[a].url_full ]
                    }), 1 == n && e.idCardUpload({
                        currentTarget: {
                            dataset: {
                                type: a,
                                index: i
                            }
                        }
                    }), 2 == n && (s.questions[i].select[a] = void 0, e.setData({
                        dataInfo: s
                    }));
                }
            });
        },
        idCardUpload: function(t) {
            var e = this, i = t.currentTarget.dataset.type, s = t.currentTarget.dataset.index, r = n({}, this.data.dataInfo), o = a(r.questions), u = {
                schoolid: c.globalData.schoolid,
                Version: c.globalData.version,
                "App-Type": c.globalData.appType,
                openid: c.globalData.openid,
                Authorization: c.globalData.userInfo.token.access_token
            };
            wx.chooseImage({
                count: 1,
                success: function(t) {
                    var a = t.tempFilePaths[0];
                    wx.showLoading({
                        title: "上传中"
                    }), wx.uploadFile({
                        url: c.globalData.baseUrl + "/miniapp/upload",
                        name: "image",
                        filePath: a,
                        header: u,
                        success: function(t) {
                            var a = JSON.parse(t.data), n = {
                                url: a.url,
                                url_full: a.url_full
                            };
                            o[s].select || (o[s].select = []), o[s].select[i] = n, r.questions = o, e.setData({
                                dataInfo: r
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
            var e = this, i = t.currentTarget.dataset.qindex, s = n({}, this.data.dataInfo), r = s.questions[i].select ? s.questions[i].select : [];
            if (1 == s.questions[i].is_length_limit && r.length >= s.questions[i].max) wx.showToast({
                title: "图片上传已经上限",
                icon: "none"
            }); else {
                var o = {
                    schoolid: c.globalData.schoolid,
                    Version: c.globalData.version,
                    "App-Type": c.globalData.appType,
                    openid: c.globalData.openid,
                    Authorization: c.globalData.userInfo.token.access_token
                };
                wx.chooseImage({
                    count: s.questions[i].max - r.length,
                    success: function(t) {
                        var n = t.tempFilePaths, u = [];
                        wx.showLoading({
                            title: "上传中"
                        }), n.forEach(function(t) {
                            var e = new Promise(function(e, a) {
                                wx.uploadFile({
                                    url: c.globalData.baseUrl + "/miniapp/upload",
                                    name: "image",
                                    filePath: t,
                                    header: o,
                                    success: function(t) {
                                        var a = JSON.parse(t.data);
                                        e({
                                            url: a.url,
                                            url_full: a.url_full
                                        });
                                    }
                                });
                            });
                            u.push(e);
                        }), Promise.all(u).then(function(t) {
                            s.questions[i].select = [].concat(a(r), a(t)), e.setData({
                                dataInfo: s
                            }), wx.hideLoading();
                        });
                    }
                });
            }
        },
        imgSheetUpadte: function(t) {
            var e = this, a = t.currentTarget.dataset.qindex, i = t.currentTarget.dataset.index, s = n({}, this.data.dataInfo);
            wx.showActionSheet({
                itemList: [ "预览", "删除" ],
                success: function(t) {
                    var n = t.tapIndex;
                    0 == n && wx.previewImage({
                        urls: [ s.questions[a].select[i].url_full ]
                    }), 1 == n && (s.questions[a].select[i] = void 0, s.questions[a].select = s.questions[a].select.filter(function(t) {
                        return t;
                    }), e.setData({
                        dataInfo: s
                    }));
                }
            });
        },
        tiankongInputChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value, i = n({}, this.data.dataInfo);
            i.questions[e].select = a, this.setData({
                dataInfo: i
            });
        },
        codeInputChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value, i = n({}, this.data.dataInfo);
            i.questions[e].select = a, this.setData({
                dataInfo: i
            });
        },
        dateTimeChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value, i = n({}, this.data.dataInfo);
            i.questions[e].select = a, this.setData({
                dataInfo: i
            });
        },
        addressChange: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.value;
            console.log(a);
            var i = n({}, this.data.dataInfo);
            i.questions[e].select = a, this.setData({
                dataInfo: i
            });
        },
        selectRadio: function(t) {
            var e = t.currentTarget.dataset, a = n({}, this.data.dataInfo), i = a.questions[e.question];
            i.select = e.opt, a.questions[e.question] = i, a = this.setStatus(), this.setData({
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
        popupClose: function(t) {
            var e = n({}, this.data.dataInfo);
            if (t.currentTarget.dataset.type) {
                var a = this.data.pullData, i = [], s = [];
                if (a.data.option.forEach(function(t) {
                    t.check && (i.push(t.id), s.push(t.content)), 0 != t.child.length && t.child.forEach(function(t) {
                        t.check && (i.push(t.id), s.push(t.content));
                    });
                }), i.length > a.data.max && 1 == a.data.is_length_limit) return void wx.showToast({
                    title: "最多只能选择" + a.data.max + "项",
                    icon: "none"
                });
                e.questions[a.index].ids = i, e.questions[a.index].idsName = s, e.questions[a.index].selectStr = s.join(","), 
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
            var e = t.currentTarget.dataset.item, a = t.currentTarget.dataset.index, i = n({}, this.data.pullData);
            0 == e.child.length && (i.data.option[a].check = !i.data.option[a].check), this.setData({
                pupupChildList: e.child,
                pullData: i,
                pupupChildIndex: a
            });
        },
        pupupSelectTwo: function(t) {
            var e = t.currentTarget.dataset.index, i = a(this.data.pupupChildList), s = n({}, this.data.pullData);
            i[e].check = !i[e].check, s.data.option[this.data.pupupChildIndex].child = i, this.setData({
                pupupChildList: i,
                pullData: s
            });
        },
        selectMultiple: function(t) {
            var e = t.currentTarget.dataset, i = n({}, this.data.dataInfo), s = i.questions[e.question];
            if (null == s.select && (s.select = []), s.max <= s.select.length && 1 == s.is_length_limit) {
                if (!s.select.includes(e.id)) return void wx.showToast({
                    title: "最多只能选择" + s.max + "项 ~",
                    icon: "none"
                });
                var r = s.select.filter(function(t) {
                    return t != e.id;
                });
                s.select = r;
            } else if (s.select.includes(e.id)) {
                var o = s.select.filter(function(t) {
                    return t != e.id;
                });
                s.select = o;
            } else s.select = [].concat(a(s.select), [ e.id ]);
            null == s.option[e.index].checkShow ? s.option[e.index].checkShow = !0 : s.option[e.index].checkShow = !s.option[e.index].checkShow, 
            i.questions[e.question] = s, i = this.setStatus(), this.setData({
                dataInfo: i
            });
        },
        arrIsEquality: function(t, e) {
            var a = !0;
            return t.forEach(function(t) {
                e.includes(t) || (a = !1);
            }), a;
        },
        setStatus: function() {
            var t = this, e = this.data.dataInfo;
            return e.rule.forEach(function(a) {
                e.questions.forEach(function(n) {
                    if (2 == n.type) {
                        var i = [];
                        null != n.select && n.option[n.select] && i.push(n.option[n.select].id), n.id == a.question_id && (t.arrIsEquality(a.option_id, i) ? e.questions.forEach(function(t) {
                            t.id == a.display_id && (t.is_show = 1);
                        }) : e.questions.forEach(function(t) {
                            t.id == a.display_id && (t.is_show = 0, t.select = []);
                        }));
                    }
                    3 == n.type && n.id == a.question_id && (t.arrIsEquality(a.option_id, n.select ? n.select : []) ? e.questions.forEach(function(t) {
                        t.id == a.display_id && (t.is_show = 1);
                    }) : e.questions.forEach(function(t) {
                        t.id == a.display_id && (t.is_show = 0, t.select = []);
                    }));
                });
            }), e;
        }
    }
});