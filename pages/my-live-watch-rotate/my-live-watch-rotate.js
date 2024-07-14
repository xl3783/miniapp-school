var t, e, a = require("../../@babel/runtime/helpers/interopRequireDefault").default, o = require("../../@babel/runtime/helpers/defineProperty"), s = a(require("../../utils/http")), i = require("../../utils/util"), n = getApp(), r = new s.default.Http(), l = !1;

Page({
    data: (t = {
        status: 0,
        toView: "",
        videoUrl: "",
        commentList: [],
        tabList: [ {
            image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/plan.png",
            jump_url: "/pages/enroll-plan/enroll-plan",
            name: "招生计划",
            show: 1
        }, {
            image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/major.png",
            jump_url: "/pages/enroll-major-new/enroll-major-new",
            name: "招生专业",
            show: 1
        }, {
            image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/score.png",
            jump_url: "/pages/scores/scores",
            name: "历年分数",
            show: 1
        }, {
            image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/intro.png",
            jump_url: "/pages/campus-intro/campus-intro",
            name: "学校简介",
            show: 1
        }, {
            image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/form.png",
            jump_url: "/pages/form-page/form-page?id=4",
            name: "在线报名",
            show: 1
        } ],
        tabName: "直播",
        funcName: "",
        funcPath: "/pages/enroll-major-new/enroll-major-new",
        height: 350,
        showNav: !1,
        showShare: !1,
        showNavDetail: !1,
        formId: 0,
        wssdomain: "",
        tab_list: {
            form: 1,
            form_id: 4,
            major: 1,
            school_intro: 1,
            score: 1,
            taap: 1
        },
        showForm: !1,
        inputVal: "",
        id: 0,
        livenum: 0,
        share_url: "",
        cover_url: "",
        limit: 0,
        timeout: 1e4,
        handleClose: !1,
        inputValue: "",
        boardHeight: 18,
        isIphoneX: n.globalData.isIphoneX,
        statusBarHeight: 0,
        customBar: 0,
        scrollHeight: 250,
        page: 1,
        page_size: 20,
        showLoginMask: !1,
        platform: n.globalData.platform,
        isppt: !1,
        pptImg: "../../assets/image/ppt_def.png",
        pptBackList: [],
        pause: !0,
        lefttime: "0:00",
        righttime: 0,
        durationtime: 0,
        currentTime: 0
    }, o(t, "pause", !0), o(t, "updateState", !0), o(t, "enterObj", {}), o(t, "canGoTop", !1), 
    t),
    handleRotate: function() {
        wx.navigateTo({
            url: "/pages/my-live-watch/my-live-watch?id=" + this.data.id + "&time=" + this.data.currenttime
        });
    },
    onLoad: function(t) {
        var e = this, a = this;
        wx.setKeepScreenOn({
            keepScreenOn: !0
        });
        var o = wx.getMenuButtonBoundingClientRect(), s = o.top, i = o.height;
        wx.getSystemInfo({
            success: function(t) {
                var e = t.statusBarHeight;
                a.setData({
                    statusBarHeight: e,
                    customBar: i + 2 * (s - e)
                });
            }
        }), this.setData({
            id: 589,
            isIphoneX: n.globalData.isIphoneX,
            boardHeight: n.globalData.isIphoneX ? 58 : 18,
            currenttime: t.time ? t.time : 0,
            commentList: [ {
                msg: "欢迎来到".concat(n.globalData.schoolname, "直播间！直播期间禁止出现违法违规、色情低俗、诱导欺诈、抽烟酗酒等内容，敬请文明发言，规范个人行为，如发现违法违规行为请及时告知").concat(n.globalData.schoolname, "工作人员。")
            } ]
        }), n.globalData.home.then(function() {
            a.setData({
                userId: n.globalData.userInfo.id + ""
            }), e.getLiveDetail();
        });
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
        this.videoContext.seek(t.detail.value / 1e3), this.videoUpdate({
            detail: {
                currentTime: t.detail.value / 1e3
            }
        }), this.setData({
            lefttime: this.formateTime(e),
            updateState: !0
        });
    },
    sliderChanging: function(t) {
        this.setData({
            updateState: !1
        });
    },
    videoPlay: function(t) {
        this.setData({
            pause: !1
        });
    },
    videoPause: function(t) {
        this.setData({
            pause: !0
        });
    },
    videoEnd: function(t) {
        this.setData({
            pause: !0,
            lefttime: "00:00",
            currenttime: 0,
            updateState: !0,
            isppt: !1,
            pptImg: ""
        }), this.videoContext.seek(0);
    },
    videoUpdate: function(t) {
        var e = t.detail.currentTime, a = this.data, o = a.pptBackList, s = a.images, i = 1e3 * e;
        if (this.data.updateState) {
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
        }
    },
    formateTime: function(t) {
        var e, a, o;
        return Math.floor(t / 1e3 / 60 / 60 / 24), e = Math.floor(t / 1e3 / 60 / 60 % 24), 
        a = (a = Math.floor(t / 1e3 / 60 % 60)) > 9 ? a : "0" + a, o = (o = Math.floor(t / 1e3 % 60)) > 9 ? o : "0" + o, 
        "00" == (e = e > 9 ? e : "0" + e) ? a + ":" + o : e + ":" + a + ":" + o;
    },
    handleLogin: function(t) {},
    getHistory: function() {
        var t = this, e = this.data, a = e.page, o = e.page_size, s = e.commentList;
        r.get("https://oe-im.schoolpi.net/api/history_msg", {
            page: a,
            page_size: o,
            room_id: n.globalData.schoolid + "-" + this.data.id
        }, {
            Authorization: n.globalData.token ? n.globalData.token : ""
        }).then(function(e) {
            if (e.data.length > 0) {
                var o = e.data.map(function(t) {
                    return {
                        from: t.userId,
                        userName: t.userName,
                        type: t.message.type,
                        msg: t.message.content,
                        contentType: t.message.contentType
                    };
                }).reverse();
                t.setData({
                    commentList: o.concat(s),
                    page: a + 1,
                    canGoTop: !0
                }), 1 == a && t.scrollToBottom();
            } else t.setData({
                canGoTop: !1
            });
        });
    },
    scrollTop: function() {
        this.data.canGoTop && this.getHistory();
    },
    goBack: function() {
        1 == getCurrentPages().length ? wx.reLaunch({
            url: "/pages/index/index"
        }) : wx.navigateBack({
            delta: 1
        });
    },
    copyLink: function() {
        var t = this.data.share_url;
        wx.setClipboardData({
            data: t,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        console.log(t.data);
                    }
                });
            }
        });
    },
    stateChange: function(t) {
        -2301 == t.detail.code && this.playContext.play();
    },
    getLiveDetail: function() {
        var t = this;
        r.get(n.globalData.baseUrl + "/miniapp/live/" + this.data.id, {}, {
            Authorization: n.globalData.token ? n.globalData.token : ""
        }).then(function(e) {
            if (0 == e.errcode) {
                if (1 == e.type) return void wx.navigateTo({
                    url: "/pages/live/live?id=" + t.data.id
                });
                t.getHistory();
                var a = e.name, o = e.cover_url, s = e.start_time, i = e.status, r = e.is_subscribe, l = e.rmtp_url, c = e.playback_url, p = e.duration, u = e.wssdomain, d = e.share_url, h = e.tab_list, m = e.view_num, g = e.images, f = e.ppt_playback, v = [ {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/plan.png",
                    jump_url: "/pages/enroll-plan/enroll-plan",
                    name: "招生计划",
                    show: h.taap
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/major.png",
                    jump_url: "/pages/enroll-major-new/enroll-major-new",
                    name: "招生专业",
                    show: h.major
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/score.png",
                    jump_url: "/pages/scores/scores",
                    name: "历年分数",
                    show: h.score
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/intro.png",
                    jump_url: "/pages/campus-intro/campus-intro",
                    name: "学校简介",
                    show: h.school_intro
                }, {
                    image_url: "https://xiaopai-saas.oss-cn-hangzhou.aliyuncs.com/public/form.png",
                    jump_url: "/pages/form-page/form-page?id=" + h.form_id,
                    name: "在线报名",
                    show: h.form
                } ];
                t.setData({
                    tabName: a,
                    name: a,
                    cover_url: o,
                    start_time: s,
                    status: i,
                    is_subscribe: r,
                    playUrl: l,
                    playback_url: c,
                    durationtime: p,
                    wssdomain: u,
                    share_url: d,
                    tabList: v,
                    tab_list: h,
                    livenum: m,
                    images: g,
                    pptBackList: f,
                    righttime: t.formateTime(p),
                    isplayback: 2 == i ? 1 : 0
                }), 1 == i && (t.playContext = wx.createLivePlayerContext("player", t), t.playContext.play()), 
                2 != i && (console.log(n.globalData.userInfo), n.globalData.userInfo.token.access_token ? u && t.socketConnect() : wx.showToast({
                    title: "请去个人中心登陆",
                    icon: "none"
                })), 2 == i && (t.videoContext = wx.createVideoContext("myVideo"), t.videoContext.seek(t.data.currenttime / 1e3), 
                t.setData({
                    lefttime: t.formateTime(t.data.currenttime),
                    updateState: !0
                }), t.videoUpdate({
                    detail: {
                        currentTime: t.data.currenttime / 1e3
                    }
                }), t.videoContext.play());
            } else 2001 == e.errcode ? t.getRefreshToken() : 2e3 == e.errcode ? wx.showToast({
                title: "请完善用户信息",
                icon: "none"
            }) : wx.showToast({
                title: e.errmsg,
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {
        var t = this;
        r.get(n.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: n.globalData.userInfo.token.refresh_token
        }).then(function(e) {
            0 == e.errcode && (n.globalData.token = e.token, t.getLiveDetail());
        });
    },
    scrollToBottom: function() {
        this.setData({
            toView: "row_" + (this.data.commentList.length - 1)
        });
    },
    sendMsg: function(t) {
        var e = t.detail.value;
        if (e) {
            var a = {
                seq: (0, i.sendId)(n.globalData.schoolid, this.data.id),
                cmd: "msg",
                data: {
                    type: "text",
                    content: e,
                    contentType: 1
                }
            };
            n.globalData.userInfo.token.access_token ? (this.sendMessage(a), this.setData({
                inputValue: "",
                tempMsg: {
                    from: this.data.userId,
                    userName: "我",
                    type: "text",
                    msg: e,
                    contentType: 1
                },
                boardHeight: this.data.isIphoneX ? 58 : 18
            })) : wx.showToast({
                title: "请去个人中心登录",
                icon: "none"
            });
        } else this.errorTips("消息不能为空");
    },
    changeboardheight: function() {
        this.setData({
            boardHeight: this.data.isIphoneX ? 58 : 18
        });
    },
    keyboardheightchange: function(t) {
        var e = t.detail, a = this.data.isIphoneX;
        this.setData({
            boardHeight: e.height + 10,
            scrollHeight: e.height > 0 ? a ? e.height - 30 : e.height : this.data.scrollHeight
        });
    },
    hideMask: function() {
        this.setData({
            showNav: !1,
            showShare: !1,
            showNavDetail: !1,
            showForm: !1
        });
    },
    openNav: function() {
        this.setData({
            showNav: !0,
            showShare: !1,
            showNavDetail: !1
        });
    },
    openShare: function() {
        this.setData({
            showNav: !1,
            showShare: !0,
            showNavDetail: !1
        });
    },
    goNav: function(t) {
        var e = t.currentTarget.dataset.item, a = e.jump_url, o = e.name;
        this.setData({
            showForm: !1
        });
        var s = a.split("?");
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
            showNav: !1,
            showShare: !1,
            showNavDetail: !0
        });
    },
    closeLive: function() {
        wx.showModal({
            title: "提示",
            content: "结束后该直播将无法再次开播，确定结束直播？",
            cancelColor: "#576B95",
            cancelText: "取消",
            confirmColor: "#FF3F30",
            confirmText: "结束",
            success: function(t) {
                t.confirm ? console.log("结束") : t.cancel && console.log("取消");
            }
        });
    },
    socketConnect: function() {
        var t = this, a = this;
        this.data.commentList;
        (e = wx.connectSocket({
            url: this.data.wssdomain,
            header: {
                "content-type": "application/json"
            },
            fail: function(t) {
                console.log(t);
            }
        })).onOpen(function(t) {
            console.log("监听websocket链接打开事件", t), l = !0;
            var e = {
                seq: (0, i.sendId)(n.globalData.schoolid, a.data.id),
                cmd: "ping",
                data: {}
            };
            a.sendMessage(e), a.reset(), a.start();
        }), e.onClose(function(t) {
            l = !1, console.log("socket关闭连接", t), a.reconnectSocket();
        }), e.onError(function(t) {
            l = !1, console.log("socket报错", t), a.reconnectSocket();
        }), e.onMessage(function(e) {
            var o = JSON.parse(e.data), s = o.response;
            if (console.log("socket收到数据", o), "ping" === o.cmd) if (200 == s.code) {
                var r = {
                    seq: (0, i.sendId)(n.globalData.schoolid, a.data.id),
                    cmd: "login",
                    data: {
                        roomId: n.globalData.schoolid + "-" + a.data.id,
                        userType: 1,
                        token: n.globalData.token,
                        appType: n.globalData.appType
                    }
                };
                a.sendMessage(r);
            } else a.errorTips(s.codeMsg); else if ("heartbeat" == o.cmd) a.reset(), a.start(); else if ("login" == o.cmd) 200 != s.code ? (a.errorTips(s.codeMsg), 
            1012 == s.code && a.getRefreshToken()) : "0" != s.data.pptId && "" != s.data.pptId ? a.setData({
                pptImg: a.data.images[s.data.pptId],
                isppt: !0,
                livenum: s.data.num,
                showLiveVideo: 0 != s.data.video
            }) : a.setData({
                isppt: !1,
                livenum: s.data.num,
                showLiveVideo: 0 != s.data.video
            }); else if ("enter" == o.cmd) console.log("enter===", s.data), a.setData({
                livenum: s.data.num,
                enterObj: s.data
            }); else if ("msg" == o.cmd) {
                var l = a.data.commentList;
                if (200 == s.code) l.push(a.data.tempMsg), a.setData({
                    commentList: l
                }), a.scrollToBottom(); else if ([ 2001, 2002 ].indexOf(s.code) > -1) l.push(s.data), 
                a.setData({
                    commentList: l
                }), a.scrollToBottom(); else if (2003 == s.code) {
                    var c = t.data.recordList;
                    l.push(s.data);
                    var p = {
                        title: s.data.msg,
                        id: s.data.questionId,
                        from: s.data.from,
                        userName: s.data.userName,
                        avatarUrl: s.data.avatarUrl,
                        answer: ""
                    };
                    c.push(p), a.setData({
                        commentList: l,
                        recordList: c
                    }), a.scrollToBottom();
                } else if (2004 == s.code) {
                    var u = t.data.recordList;
                    l.push(s.data);
                    var d = s.data.question.id;
                    u.map(function(t) {
                        t.id == d && (t.answer = s.data.msg);
                    }), a.setData({
                        commentList: l,
                        recordList: u
                    }), a.scrollToBottom();
                } else if (2005 == s.code) {
                    var h = t.data.recordList;
                    l.push(s.data);
                    var m = {
                        title: s.data.question.title,
                        id: s.data.question.id,
                        from: s.data.from,
                        userName: s.data.userName,
                        avatarUrl: s.data.avatarUrl,
                        answer: s.data.msg
                    };
                    h.push(m), a.setData({
                        commentList: l,
                        recordList: h
                    }), a.scrollToBottom();
                } else a.errorTips(s.codeMsg);
            } else if ("cmd" == o.cmd) if (200 == s.code) {
                var g = s.data;
                "start" == g.type ? (wx.showToast({
                    title: "直播已开始",
                    icon: "none",
                    duration: 5e3
                }), t.playContext || (t.playContext = wx.createLivePlayerContext("player", t)), 
                t.playContext.play()) : "over" == g.type ? (wx.showToast({
                    title: "直播已结束",
                    icon: "none",
                    duration: 5e3
                }), t.playContext.stop(), wx.navigateTo({
                    url: "/pages/my-live-end/my-live-end?id=" + a.data.id + "&isTeacher=0"
                })) : "ppt" == g.type ? 0 == s.data.msg ? a.setData({
                    isppt: !1
                }) : a.setData({
                    pptImg: a.data.images[s.data.msg],
                    isppt: !0
                }) : "video" == g.type && ("0" == s.data.msg ? a.setData({
                    showLiveVideo: !1
                }) : "1" == s.data.msg && a.setData({
                    showLiveVideo: !0
                }));
            } else a.errorTips(s.codeMsg); else "questionlist" == o.cmd && (200 == s.code ? a.setData({
                recordList: s.data
            }) : a.errorTips(s.codeMsg));
        });
    },
    sendMessage: function(t) {
        l && e.send({
            data: JSON.stringify(t)
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
        var t = this;
        l && (t.timeoutObj = setTimeout(function() {
            var a = {
                seq: (0, i.sendId)(n.globalData.schoolid, t.data.id),
                cmd: "heartbeat"
            };
            t.sendMessage(a), t.serverTimeoutObj = setTimeout(function() {
                e.close();
            }, t.data.timeout);
        }, t.data.timeout));
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), this.data.handleClose && 1 == this.data.status && this.socketConnect();
    },
    onHide: function() {
        getApp().reporting.page("hide"), this.leavePage();
    },
    leavePage: function() {
        l && (e.close(), this.reset(), this.setData({
            limit: 0
        }), this.timeoutObj = null, this.serverTimeoutObj = null), this.setData({
            handleClose: !0
        }), this.playContext && this.playContext.stop();
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
            path: "/pages/my-live-watch/my-live-watch?name=" + this.data.name + "&id=" + this.data.id
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