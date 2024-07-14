var t, e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), a = require("../../utils/util"), o = getApp(), s = new e.default.Http(), i = !1;

Page({
    data: {
        type: 1,
        play_url: "",
        livenum: 0,
        id: 0,
        scoreModel: !1,
        tabName: "直播",
        funcIndex: 0,
        tab_list1: [],
        commentList: [],
        toView: "row_0",
        height: 350,
        funcName: "",
        funcPath: "/pages/enroll-major-new/enroll-major-new",
        showMask: !1,
        showShare: !1,
        formId: 0,
        wssdomain: "",
        name: "",
        cover_url: "",
        start_time: "",
        intro: "",
        status: "",
        is_subscribe: 0,
        up_num: 0,
        images: {},
        scrollH: 400,
        recordList: [],
        globalColor: "#1487FF",
        isQuestion: !1,
        pptImg: "",
        pptid: "",
        playUrl: "",
        link: "",
        isppt: !1,
        showMax: !0,
        isLandscape: !1,
        isZan: !1,
        isplayback: !1,
        playback_url: "",
        pptBackList: [],
        pause: !0,
        lefttime: "0:00",
        righttime: 0,
        durationtime: 0,
        currentTime: 0,
        jinduShow: !0,
        allFullType: !1,
        limit: 0,
        timeout: 1e4,
        handleClose: !1,
        inputValue: "",
        tempMsg: {},
        playContext: {},
        showLiveVideo: !0,
        share_url: "",
        adjustPosition: !1,
        isPlayerReverse: !1,
        cursorSpace: 16,
        liveClass: "",
        orientation: "vertical",
        isIphoneX: o.globalData.isIphoneX,
        showForm: !1,
        page: 1,
        page_size: 20,
        isScreenOpen: !1,
        showLoginMask: !1,
        platform: o.globalData.platform,
        score_list: 1,
        enroll_plan_list: 1,
        score_style: 1,
        enroll_plan_style: 1
    },
    handleShowMax: function() {
        var t = this;
        this.setData({
            showMax: !0
        }), setTimeout(function() {
            t.setData({
                showMax: !1
            });
        }, 3e3);
    },
    keyboardheightchange: function(t) {
        var e = t.detail.height;
        console.log("cursorSpace", e + 16), this.setData({
            cursorSpace: e
        });
    },
    inputFocus: function() {
        var t = this;
        o.globalData.home.then(function() {
            t.setData({
                userId: o.globalData.userInfo.id ? o.globalData.userInfo.id : 1
            }), o.globalData.userInfo.name ? t.setData({
                showLoginMask: !1
            }) : (t.setData({
                showLoginMask: !0
            }), t.setData({
                cursorSpace: 0
            }), wx.hideKeyboard());
        });
    },
    inputBlur: function() {
        this.setData({
            cursorSpace: 0
        });
    },
    reverse: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.platform;
                console.log(e), "windows" == a || "mac" == a ? t.playContext.requestFullScreen({
                    direction: 0
                }) : t.data.isppt ? t.setData({
                    isLandscape: !t.data.isLandscape
                }) : t.setData({
                    isPlayerReverse: !t.data.isPlayerReverse,
                    liveClass: "live_max",
                    orientation: "horizontal"
                });
            }
        });
    },
    reverseScreen: function() {
        this.setData({
            isPlayerReverse: !this.data.isPlayerReverse,
            liveClass: "",
            orientation: "vertical"
        });
    },
    handleUp: function() {
        var t = this, e = this.data.up_num + 1;
        s.post(o.globalData.baseUrl + "/miniapp/thumbup", {
            id: this.data.id
        }, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(a) {
            t.setData({
                up_num: e,
                isZan: !0
            });
        });
    },
    handleShare: function() {
        this.setData({
            showMask: !0,
            showShare: !0
        });
    },
    handleSubscribe: function() {
        var t = this;
        wx.requestSubscribeMessage({
            tmplIds: [ o.globalData.tempId ],
            success: function(e) {
                "reject" != e[o.globalData.tempId] && s.post(o.globalData.baseUrl + "/miniapp/subscribe", {
                    id: t.data.id
                }, {
                    Authorization: o.globalData.token ? o.globalData.token : ""
                }).then(function(e) {
                    0 == e.errcode ? (t.setData({
                        is_subscribe: 1
                    }), wx.showToast({
                        title: "订阅成功",
                        icon: "none"
                    })) : wx.showToast({
                        title: e.errmsg,
                        icon: "none"
                    });
                });
            },
            complete: function(t) {
                console.log("订阅1", t);
            }
        });
    },
    handle: function() {},
    chooseFunc: function(t) {
        var e = t.currentTarget.dataset.index;
        if (this.setData({
            funcIndex: e,
            recordList: []
        }), 3 == e) {
            var s = {
                seq: (0, a.sendId)(o.globalData.schoolid, this.data.id),
                cmd: "questionlist",
                data: {
                    roomId: this.data.id
                }
            };
            this.sendMessage(s);
        }
    },
    hideMask: function() {
        this.setData({
            showMask: !1,
            showForm: !1
        });
    },
    chooseIsQuestion: function() {
        this.setData({
            isQuestion: !this.data.isQuestion
        });
    },
    submitMsg: function(t) {
        var e = t.detail.value, s = this.data.isQuestion;
        if (e) {
            console.log("msg", e, s);
            var i = {
                seq: (0, a.sendId)(o.globalData.schoolid, this.data.id),
                cmd: "msg",
                data: {
                    type: "text",
                    content: e,
                    contentType: s ? 2 : 1
                }
            };
            o.globalData.userInfo.token.access_token ? (this.sendMessage(i), this.setData({
                inputValue: "",
                tempMsg: {
                    from: this.data.userId,
                    userName: "我",
                    type: "text",
                    msg: e,
                    contentType: s ? 2 : 1
                }
            })) : wx.showToast({
                title: "请去个人中心登录",
                icon: "none"
            });
        } else this.errorTips("消息不能为空");
    },
    goNav: function(t) {
        var e = t.currentTarget.dataset.item, a = e.jump_url, o = e.name, s = a.split("?");
        if ("/pages/form-page/form-page" == s[0]) {
            var i = s[1].split("=")[1];
            this.setData({
                formId: i,
                showForm: !0
            });
        }
        this.setData({
            funcName: o,
            funcPath: a,
            showMask: !0,
            showShare: !1
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
    getLiveDetail: function() {
        var t = this;
        s.get(o.globalData.baseUrl + "/miniapp/live/" + this.data.id, {}, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(e) {
            if (0 == e.errcode) {
                if (2 == e.type) return void wx.navigateTo({
                    url: "/pages/my-live-watch/my-live-watch?id=" + t.data.id
                });
                t.getHistory();
                var a = e.name, s = e.cover_url, i = e.start_time, n = e.intro, r = e.status, l = e.is_subscribe, c = e.tab_list, u = e.images, d = e.up_num, p = e.rmtp_url, m = e.playback_url, h = e.ppt_playback, g = e.duration, f = e.wssdomain, v = e.share_url, w = e.view_num, D = e.type, b = e.play_url, y = [ {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/plan.png",
                    jump_url: "/pages/enroll-plan/enroll-plan",
                    name: "招生计划",
                    show: c.taap
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/major.png",
                    jump_url: "/pages/enroll-major-new/enroll-major-new",
                    name: "招生专业",
                    show: c.major
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/score.png",
                    jump_url: "/pages/scores/scores",
                    name: "历年分数",
                    show: c.score
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/intro.png",
                    jump_url: "/pages/campus-intro/campus-intro",
                    name: "学校简介",
                    show: c.school_intro
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/form.png",
                    jump_url: "/pages/form-page/form-page?id=4",
                    name: "在线报名",
                    show: c.form
                } ];
                t.setData({
                    tabName: a,
                    name: a,
                    cover_url: s,
                    start_time: i,
                    intro: n,
                    status: r,
                    is_subscribe: l,
                    tab_list: c,
                    tab_list1: y,
                    images: u,
                    up_num: d,
                    playback_url: m,
                    durationtime: g,
                    righttime: t.formateTime(g),
                    pptBackList: h,
                    wssdomain: f,
                    share_url: v,
                    livenum: w,
                    isplayback: 2 == r ? 1 : 0,
                    playUrl: p,
                    type: D,
                    play_url: b
                }), console.log("播放地址", t.data.playUrl), t.createContext(), 2 == r && (t.setData({
                    isppt: h.length > 0 && h[0].image_id > 0,
                    pptImg: h.length > 0 && h[0].image_id > 0 ? u[h[0].image_id] : ""
                }), t.videoContext = wx.createVideoContext("myVideo")), 1 != r && 0 != r || (o.globalData.userInfo.token.access_token ? f && t.socketConnect() : wx.showToast({
                    title: "请去个人中心登陆",
                    icon: "none"
                }));
            } else 2001 == e.errcode ? t.getRefreshToken() : 2e3 == e.errcode ? wx.showToast({
                title: "请完善用户信息",
                icon: "none"
            }) : wx.showToast({
                title: e.errmsg,
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {},
    videoPlay: function(t) {
        this.setData({
            pause: !1
        });
    },
    videoUpdate: function(t) {
        var e = t.detail.currentTime, a = this.data, o = a.pptBackList, s = a.images, i = 1e3 * e;
        this.setData({
            lefttime: this.formateTime(i),
            currenttime: i
        });
        for (var n = 0; n < o.length - 1; n++) if (o[n].timer <= Math.floor(i) && o[n + 1].timer > Math.floor(i)) {
            var r = o[n].image_id;
            if (0 == r) return void this.setData({
                isppt: !1
            });
            r != this.data.pptid && this.setData({
                isppt: !0,
                pptImg: s[r] ? s[r] : "",
                pptid: r
            });
        }
    },
    videoPause: function(t) {
        console.log("视频暂停", t);
    },
    videoEnd: function(t) {
        console.log("视频 结束播放", t);
    },
    startPlay: function() {
        this.setData({
            pause: !1
        }), this.videoContext.play();
    },
    pausePlay: function() {
        this.setData({
            pause: !0
        }), this.videoContext.pause();
    },
    changeSlider: function(t) {
        var e = t.detail.value;
        this.setData({
            lefttime: this.formateTime(e)
        }), this.videoContext.seek(t.detail.value / 1e3), this.videoUpdate({
            detail: {
                currentTime: t.detail.value / 1e3
            }
        });
    },
    formateTime: function(t) {
        var e, a, o;
        return Math.floor(t / 1e3 / 60 / 60 / 24), e = Math.floor(t / 1e3 / 60 / 60 % 24), 
        a = (a = Math.floor(t / 1e3 / 60 % 60)) > 9 ? a : "0" + a, o = (o = Math.floor(t / 1e3 % 60)) > 9 ? o : "0" + o, 
        "00" == (e = e > 9 ? e : "0" + e) ? a + ":" + o : e + ":" + a + ":" + o;
    },
    onLoad: function(t) {
        var e = this;
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), o.globalData.home.then(function() {
            e.setData({
                id: t.id,
                score_list: o.globalData.score_list,
                enroll_plan_list: o.globalData.enroll_plan_list,
                score_style: o.globalData.score_style,
                enroll_plan_style: o.globalData.enroll_plan_style
            });
            var a = wx.getSystemInfoSync().windowHeight, s = a - 210 - 100 - 50;
            e.setData({
                scrollH: s,
                pptHeight: a
            });
        });
    },
    handleLogin: function(t) {
        wx.navigateTo({
            url: "/packageA/pages/avatar-nickname/avatar-nickname"
        });
    },
    getHistory: function() {
        var t = this, e = this.data, a = e.page, i = e.page_size, n = e.commentList;
        s.get("https://oe-im.schoolpi.net/api/history_msg", {
            page: a,
            page_size: i,
            room_id: o.globalData.schoolid + "-" + this.data.id
        }, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(e) {
            if (e.data.length > 0) {
                var o = e.data.map(function(t) {
                    return {
                        from: t.userId,
                        userName: t.userName,
                        type: t.message.type,
                        msg: t.message.content,
                        contentType: t.message.contentType,
                        question: t.question
                    };
                });
                t.setData({
                    page: a + 1,
                    commentList: o.reverse().concat(n)
                }), 1 == a && t.scrollToBottom();
            }
        });
    },
    scrollTop: function() {
        this.getHistory();
    },
    createContext: function() {
        this.playContext = wx.createLivePlayerContext("livePlayer");
    },
    scrollToBottom: function() {
        this.setData({
            toView: "row_" + (this.data.commentList.length - 1)
        });
    },
    errorTips: function(t) {
        wx.showToast({
            title: t,
            icon: "none"
        });
    },
    socketConnect: function() {
        var e = this, s = this;
        (t = wx.connectSocket({
            url: this.data.wssdomain,
            header: {
                "content-type": "application/json"
            },
            fail: function(t) {
                console.log(t);
            }
        })).onOpen(function(t) {
            console.log("监听websocket链接打开事件", t), i = !0;
            var e = {
                seq: (0, a.sendId)(o.globalData.schoolid, s.data.id),
                cmd: "ping",
                data: {}
            };
            s.sendMessage(e), s.reset(), s.start();
        }), t.onClose(function(t) {
            i = !1, console.log("socket关闭连接", t), s.reconnectSocket();
        }), t.onError(function(t) {
            i = !1, s.reconnectSocket();
        }), t.onMessage(function(t) {
            var i = JSON.parse(t.data), n = i.response;
            if (console.log(n), "ping" === i.cmd) if (200 == n.code) {
                var r = wx.getStorageSync("newuserinfo");
                if (!r) throw new Error("用户信息不存在");
                var l = {
                    seq: (0, a.sendId)(o.globalData.schoolid, s.data.id),
                    cmd: "login",
                    data: {
                        userId: o.globalData.userInfo.id + "",
                        roomId: o.globalData.schoolid + "-" + s.data.id,
                        userType: 1,
                        token: o.globalData.token,
                        appType: o.globalData.appType,
                        userName: r.name,
                        avatarUrl: r.avatarUrl
                    }
                };
                console.log(l), s.sendMessage(l);
            } else s.errorTips(n.codeMsg); else if ("heartbeat" == i.cmd) s.reset(), s.start(); else if ("login" == i.cmd) 200 != n.code ? (s.errorTips(n.codeMsg), 
            1012 == n.code && s.getRefreshToken()) : "0" != n.data.pptId && "" != n.data.pptId ? s.setData({
                pptImg: s.data.images[n.data.pptId],
                isppt: !0,
                livenum: n.data.num,
                showLiveVideo: 0 != n.data.video
            }) : s.setData({
                isppt: !1,
                livenum: n.data.num,
                showLiveVideo: 0 != n.data.video
            }); else if ("enter" == i.cmd) s.setData({
                livenum: n.data.num
            }); else if ("msg" == i.cmd) {
                var c = s.data.commentList;
                if (200 == n.code) c.push(s.data.tempMsg), s.setData({
                    commentList: c
                }), s.scrollToBottom(); else if ([ 2001, 2002 ].indexOf(n.code) > -1) c.push(n.data), 
                s.setData({
                    commentList: c
                }), s.scrollToBottom(); else if (2003 == n.code) {
                    var u = e.data.recordList;
                    c.push(n.data);
                    var d = {
                        title: n.data.msg,
                        id: n.data.questionId,
                        from: n.data.from,
                        userName: n.data.userName,
                        avatarUrl: n.data.avatarUrl,
                        answer: ""
                    };
                    u.push(d), s.setData({
                        commentList: c,
                        recordList: u
                    }), s.scrollToBottom();
                } else if (2004 == n.code) {
                    var p = e.data.recordList;
                    c.push(n.data);
                    var m = n.data.question.id;
                    p.map(function(t) {
                        t.id == m && (t.answer = n.data.msg);
                    }), s.setData({
                        commentList: c,
                        recordList: p
                    }), s.scrollToBottom();
                } else if (2005 == n.code) {
                    var h = e.data.recordList;
                    c.push(n.data);
                    var g = {
                        title: n.data.question.title,
                        id: n.data.question.id,
                        from: n.data.from,
                        userName: n.data.userName,
                        avatarUrl: n.data.avatarUrl,
                        answer: n.data.msg
                    };
                    h.push(g), s.setData({
                        commentList: c,
                        recordList: h
                    }), s.scrollToBottom();
                } else s.errorTips(n.codeMsg);
            } else if ("cmd" == i.cmd) if (200 == n.code) {
                var f = n.data;
                "start" == f.type ? (wx.showToast({
                    title: "直播已开始",
                    icon: "none",
                    duration: 5e3
                }), e.playContext || (e.playContext = wx.createLivePlayerContext("player", e)), 
                e.playContext.play()) : "over" == f.type ? (wx.showToast({
                    title: "直播已结束",
                    icon: "none",
                    duration: 5e3
                }), e.playContext.stop(), setTimeout(function() {
                    wx.navigateTo({
                        url: "/pages/my-live-end/my-live-end?id=" + s.data.id + "&isTeacher=0"
                    });
                }, 3e3)) : "ppt" == f.type ? 0 == n.data.msg ? s.setData({
                    isppt: !1
                }) : s.setData({
                    pptImg: s.data.images[n.data.msg],
                    isppt: !0
                }) : "video" == f.type && ("0" == n.data.msg ? s.setData({
                    showLiveVideo: !1
                }) : "1" == n.data.msg && s.setData({
                    showLiveVideo: !0
                }));
            } else s.errorTips(n.codeMsg); else "questionlist" == i.cmd && (200 == n.code ? s.setData({
                recordList: n.data
            }) : s.errorTips(n.codeMsg));
        });
    },
    sendMessage: function(e) {
        i && t.send({
            data: JSON.stringify(e)
        });
    },
    reconnectSocket: function() {
        var t = this;
        t.data.handleClose || t.lockReconnect || (t.lockReconnect = !0, clearTimeout(t.timer), 
        t.data.limit < 20 && (t.timer = setTimeout(function() {
            t.socketConnect(), t.lockReconnect = !1, console.log("重连次数：", t.data.limit);
        }, 5e3), t.setData({
            limit: t.data.limit + 1
        })));
    },
    reset: function() {
        clearTimeout(this.timeoutObj), clearTimeout(this.serverTimeoutObj);
    },
    start: function() {
        var e = this;
        i && (e.timeoutObj = setTimeout(function() {
            var s = {
                seq: (0, a.sendId)(o.globalData.schoolid, e.data.id),
                cmd: "heartbeat"
            };
            e.sendMessage(s), e.serverTimeoutObj = setTimeout(function() {
                t.close();
            }, e.data.timeout);
        }, e.data.timeout));
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        getApp().reporting.page("show", getCurrentPages()), o.globalData.home.then(function() {
            t.data.handleClose && 1 == t.data.status && t.socketConnect(), o.globalData.token && t.getLiveDetail(), 
            o.globalData.userInfo.name && t.setData({
                showLoginMask: !1
            });
        });
    },
    leavePage: function() {
        console.log("离开本页", i), i && (t.close(), this.reset(), this.setData({
            limit: 0,
            commentList: []
        }), this.timeoutObj = null, this.serverTimeoutObj = null), this.setData({
            handleClose: !0
        });
    },
    onHide: function() {
        getApp().reporting.page("hide"), this.leavePage();
    },
    onUnload: function() {
        getApp().reporting.page("hide"), this.leavePage();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return getApp().reporting.share({
            type: 1,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            imageUrl: this.data.cover_url,
            path: "/pages/live/live?name=" + this.data.name + "&id=" + this.data.id
        };
    },
    onShareTimeline: function() {
        return getApp().reporting.share({
            type: 2,
            value: ""
        }, getCurrentPages()), {
            title: this.data.name,
            imageUrl: this.data.cover_url,
            query: "name=" + this.data.name + "&id=" + this.data.id
        };
    }
});