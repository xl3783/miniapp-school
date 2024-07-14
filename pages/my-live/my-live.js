var t, e, a = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), s = require("../../utils/util"), o = getApp(), i = new a.default.Http(), n = !1;

Page({
    data: {
        status: 0,
        toView: "row_0",
        commentList: [],
        pushUrl: "",
        id: 0,
        userId: "0",
        limit: 0,
        timeout: 1e4,
        handleClose: !1,
        wssdomain: "",
        tabName: "",
        livenum: 0,
        longtime: 0,
        name: "",
        showShare: !1,
        share_url: "",
        statusBarHeight: 0,
        customBar: 0,
        page: 1,
        page_size: 20,
        showFile: !1,
        pptId: 1,
        pptIndex: 0,
        prepptId: 1,
        prepptIndex: 0,
        isSharePPT: !1,
        pptList: [],
        fileList: [],
        filePage: 1,
        filePageSize: 20,
        fileTotal: 0,
        canChooseFile: !0,
        fileId: 0,
        preFileId: 0,
        showLoginMask: !1,
        enterObj: {},
        canGoTop: !1
    },
    onLoad: function(t) {
        var e = this;
        try {
            wx.showShareMenu({
                withShareTicket: !0,
                menus: [ "shareAppMessage", "shareTimeline" ]
            }), wx.setKeepScreenOn({
                keepScreenOn: !0
            });
        } catch (t) {}
        var a = wx.getMenuButtonBoundingClientRect(), s = a.top, i = a.height;
        wx.getSystemInfo({
            success: function(t) {
                var a = t.statusBarHeight;
                e.setData({
                    statusBarHeight: a,
                    customBar: i + 2 * (s - a)
                });
            }
        }), this.setData({
            id: t.id,
            userId: o.globalData.userInfo.id + ""
        }), this.pushContext = wx.createLivePusherContext(), this.pushContext.startPreview(), 
        this.setData({
            commentList: [ {
                msg: "欢迎来到".concat(o.globalData.schoolname, "直播间！直播期间禁止出现违法违规、色情低俗、诱导欺诈、抽烟酗酒等内容，敬请文明发言，规范个人行为，如发现违法违规行为请及时告知").concat(o.globalData.schoolname, "工作人员。")
            } ]
        }), this.getHistory(), this.getFileList(), this.getLiveDetail();
    },
    binderror: function(t) {
        console.error(t), wx.redirectTo({
            url: "/pages/my-live-tips/my-live-tips"
        });
    },
    handleLogin: function(t) {},
    getFileList: function() {
        var t = this, e = this.data, a = e.filePage, s = e.filePageSize, n = e.fileList;
        i.get(o.globalData.baseUrl + "/miniapp/sharefile", {
            page: a,
            pageSize: s
        }).then(function(e) {
            0 == e.errcode && t.setData({
                fileList: n.concat(e.data),
                fileTotal: e.total
            });
        });
    },
    loadMoreFile: function() {
        var t = this.data, e = t.filePage;
        e * t.filePageSize < t.fileTotal && (this.setData({
            page: e + 1
        }), this.getFileList());
    },
    getPPTList: function(t) {
        var e = this;
        i.get(o.globalData.baseUrl + "/miniapp/ppt/" + t).then(function(t) {
            if (0 == t.errcode) {
                e.setData({
                    pptList: t.data,
                    prepptId: t.data[0].id,
                    pptId: t.data[0].id,
                    pptIndex: 0,
                    isSharePPT: !0
                }), e.switchPPT(e.data.pptId);
                var a = {
                    seq: (0, s.sendId)(o.globalData.schoolid, e.data.id),
                    cmd: "cmd",
                    data: {
                        type: "ppt",
                        msg: e.data.pptId + ""
                    }
                };
                e.sendMessage(a);
            }
        });
    },
    getLoginPPTList: function(t) {
        var e = this;
        i.get(o.globalData.baseUrl + "/miniapp/ppt/" + t).then(function(t) {
            if (0 == t.errcode) {
                var a = t.data.findIndex(function(t) {
                    return t.id == e.data.pptId;
                });
                e.setData({
                    pptList: t.data,
                    pptIndex: a
                });
            }
        });
    },
    openFile: function() {
        this.setData({
            showFile: !0
        });
    },
    choosePPT: function(t) {
        var e = t.currentTarget.dataset, a = e.id, s = e.index;
        this.data.canChooseFile ? this.setData({
            preFileId: a
        }) : this.setData({
            prepptId: a,
            prepptIndex: s
        });
    },
    handleCancelPPT: function() {
        var t = this.data, e = t.canChooseFile, a = t.fileId, i = t.pptId;
        if (this.setData({
            isSharePPT: !1,
            showFile: !1,
            preFileId: a,
            prepptId: i
        }), e) {
            var n = {
                seq: (0, s.sendId)(o.globalData.schoolid, this.data.id),
                cmd: "cmd",
                data: {
                    type: "sharefile",
                    msg: "0"
                }
            };
            this.sendMessage(n);
        } else {
            this.setData({
                canChooseFile: !0
            }), this.switchPPT(0);
            var r = {
                seq: (0, s.sendId)(o.globalData.schoolid, this.data.id),
                cmd: "cmd",
                data: {
                    type: "ppt",
                    msg: "0"
                }
            };
            this.sendMessage(r);
        }
    },
    handleChoosePPT: function() {
        if (this.data.canChooseFile) {
            this.setData({
                canChooseFile: !1,
                fileId: this.data.preFileId,
                showFile: !1
            });
            var t = {
                seq: (0, s.sendId)(o.globalData.schoolid, this.data.id),
                cmd: "cmd",
                data: {
                    type: "sharefile",
                    msg: this.data.fileId + ""
                }
            };
            this.sendMessage(t), this.getPPTList(this.data.fileId);
        } else {
            this.setData({
                pptId: this.data.prepptId,
                pptIndex: this.data.prepptIndex,
                showFile: !1
            }), this.switchPPT(this.data.pptId);
            var e = {
                seq: (0, s.sendId)(o.globalData.schoolid, this.data.id),
                cmd: "cmd",
                data: {
                    type: "ppt",
                    msg: this.data.pptId + ""
                }
            };
            this.sendMessage(e);
        }
    },
    nextPPT: function(t) {
        var e = t.currentTarget.dataset.type, a = this.data, i = a.pptIndex, n = a.pptList, r = n.length;
        switch (e) {
          case "prev":
            i > 0 ? i -= 1 : wx.showToast({
                title: "已是第一页",
                icon: "none"
            });
            break;

          case "next":
            i < r - 1 ? i += 1 : wx.showToast({
                title: "已是最后一页",
                icon: "none"
            });
        }
        this.setData({
            pptIndex: i,
            prepptIndex: i,
            pptId: n[i].id,
            prepptId: n[i].id
        }), this.switchPPT(this.data.pptId);
        var d = {
            seq: (0, s.sendId)(o.globalData.schoolid, this.data.id),
            cmd: "cmd",
            data: {
                type: "ppt",
                msg: this.data.pptId + ""
            }
        };
        this.sendMessage(d);
    },
    switchPPT: function(t) {
        i.post(o.globalData.baseUrl + "/miniapp/live/switchppt", {
            room_id: this.data.id,
            image_id: t
        }, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(t) {});
    },
    getHistory: function() {
        var t = this, e = this.data, a = e.page, s = e.page_size, n = e.commentList;
        i.get("https://oe-im.schoolpi.net/api/history_msg", {
            page: a,
            page_size: s,
            room_id: o.globalData.schoolid + "-" + this.data.id
        }, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(e) {
            if (e.data.length > 0) {
                var s = e.data.map(function(t) {
                    return {
                        from: t.userId,
                        userName: t.userName,
                        type: t.message.type,
                        msg: t.message.content,
                        contentType: t.message.contentType
                    };
                }).reverse();
                t.setData({
                    commentList: s.concat(n),
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
    openShare: function() {
        this.setData({
            showShare: !0
        });
    },
    hideMask: function() {
        this.setData({
            showShare: !1
        });
    },
    handle: function() {
        this.setData({
            showShare: !1,
            showFile: !1
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
    getPusherUrl: function() {
        var t = this;
        wx.request({
            url: o.globalData.baseUrl + "/miniapp/live/start",
            method: "post",
            data: {
                room_id: this.data.id
            },
            header: {
                "content-type": "application/json",
                "App-Type": o.globalData.appType,
                Version: o.globalData.version,
                schoolid: o.globalData.schoolid,
                Authorization: o.globalData.token ? o.globalData.token : ""
            },
            success: function(e) {
                var a = e.data;
                0 == a.errcode ? t.setData({
                    pushUrl: a.rmtp_url,
                    status: 1
                }, function() {
                    t.pushContext.start(), t.data.handleClose || (console.log(o.globalData.userInfo), 
                    o.globalData.userInfo.token.access_token ? t.data.wssdomain && t.socketConnect() : wx.showToast({
                        title: "请去个人中心登陆",
                        icon: "none"
                    }));
                    var e = {
                        seq: (0, s.sendId)(o.globalData.schoolid, t.data.id),
                        cmd: "cmd",
                        data: {
                            type: "start",
                            msg: t.data.id + ""
                        }
                    };
                    t.sendMessage(e);
                }) : wx.showModal({
                    title: "提示",
                    content: a.errmsg,
                    cancelColor: "#576B95",
                    cancelText: "取消",
                    confirmColor: "#FF3F30",
                    confirmText: "退出",
                    success: function(t) {
                        (t.confirm || t.cancel) && wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            },
            err: function(t) {
                console.log(t);
            }
        });
    },
    pusherStateChange: function(t) {
        var e = t.detail.code;
        3001 == e ? this.errorTips("RTMP -DNS解析失败") : 3002 == e ? this.errorTips("RTMP服务器连接失败") : 3003 == e ? this.errorTips("RTMP服务器握手失败") : 3004 == e ? this.errorTips("RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期") : 3005 == e && this.errorTips("RTMP 读/写失败");
    },
    switchCamera: function() {
        this.pushContext.switchCamera();
    },
    startLive: function() {
        var t = this;
        this.getPusherUrl();
        var a = {
            seq: (0, s.sendId)(o.globalData.schoolid, this.data.id),
            cmd: "cmd",
            data: {
                type: "start",
                msg: this.data.id + ""
            }
        };
        this.sendMessage(a), wx.setStorage({
            data: new Date().getTime(),
            key: "live_start_" + this.data.id
        });
        var i = new Date().getTime();
        e = setInterval(function() {
            var e = new Date().getTime() - i;
            t.setData({
                longtime: (0, s.formatSeconds)(e / 1e3)
            });
        }, 1e3);
    },
    getLiveDetail: function() {
        var t = this;
        i.get(o.globalData.baseUrl + "/miniapp/live/" + this.data.id, {}, {
            Authorization: o.globalData.token ? o.globalData.token : ""
        }).then(function(a) {
            if (0 == a.errcode) {
                var o = a.name, i = a.cover_url, n = a.start_time, r = a.intro, d = a.status, l = a.is_subscribe, c = a.images, p = a.up_num, h = a.rmtp_url, g = a.wssdomain, u = a.share_url, m = a.view_num;
                if (t.setData({
                    tabName: o,
                    name: o,
                    cover_url: i,
                    start_time: n,
                    intro: r,
                    status: d,
                    is_subscribe: l,
                    images: c,
                    up_num: p,
                    playUrl: h,
                    wssdomain: g,
                    share_url: u,
                    livenum: m,
                    isplayback: 2 == d ? 1 : 0
                }), 1 == d) {
                    var f = wx.getStorageSync("live_start_" + t.data.id);
                    if (f) e = setInterval(function() {
                        var e = new Date().getTime() - f;
                        t.setData({
                            longtime: (0, s.formatSeconds)(e / 1e3)
                        });
                    }, 1e3); else {
                        wx.setStorage({
                            data: new Date().getTime(),
                            key: "live_start_" + t.data.id
                        });
                        var v = new Date().getTime();
                        e = setInterval(function() {
                            var e = new Date().getTime() - v;
                            t.setData({
                                longtime: (0, s.formatSeconds)(e / 1e3)
                            });
                        }, 1e3);
                    }
                    t.getPusherUrl();
                }
            } else 2001 == a.errcode ? t.getRefreshToken() : 2e3 == a.errcode ? wx.showToast({
                title: "请完善用户信息",
                icon: "none"
            }) : wx.showToast({
                title: a.errmsg,
                icon: "none"
            });
        });
    },
    getRefreshToken: function() {
        var t = this;
        i.get(o.globalData.baseUrl + "/miniapp/refresh_token", {
            refresh_token: o.globalData.userInfo.token.refresh_token
        }).then(function(e) {
            0 == e.errcode && (o.globalData.token = e.token, t.getLiveDetail());
        });
    },
    closeLive: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "结束后该直播将无法再次开播，确定结束直播？",
            cancelColor: "#576B95",
            cancelText: "取消",
            confirmColor: "#FF3F30",
            confirmText: "结束",
            success: function(e) {
                e.confirm ? i.post(o.globalData.baseUrl + "/miniapp/live/over", {
                    room_id: t.data.id
                }, {
                    Authorization: o.globalData.token ? o.globalData.token : ""
                }).then(function(e) {
                    if (wx.removeStorage({
                        key: "live_start_" + t.data.id
                    }), 0 == e.errcode) {
                        t.pushContext.stop();
                        var a = {
                            seq: (0, s.sendId)(o.globalData.schoolid, t.data.id),
                            cmd: "cmd",
                            data: {
                                type: "over",
                                msg: t.data.id + ""
                            }
                        };
                        t.sendMessage(a), wx.navigateTo({
                            url: "/pages/my-live-end/my-live-end?id=" + t.data.id + "&isTeacher=1"
                        });
                    } else t.errorTips(e.errmsg);
                }) : e.cancel && console.log("取消");
            }
        });
    },
    scrollToBottom: function() {
        this.setData({
            toView: "row_" + (this.data.commentList.length - 1)
        });
    },
    socketConnect: function() {
        var e = this, a = this;
        this.data.commentList;
        (t = wx.connectSocket({
            url: this.data.wssdomain,
            header: {
                "content-type": "application/json"
            },
            fail: function(t) {
                console.log(t);
            }
        })).onOpen(function(t) {
            console.log("监听websocket链接打开事件", t), n = !0;
            var e = {
                seq: (0, s.sendId)(o.globalData.schoolid, a.data.id),
                cmd: "ping",
                data: {}
            };
            a.sendMessage(e), a.reset(), a.start();
        }), t.onClose(function(t) {
            n = !1, console.log("socket关闭连接", t), a.reconnectSocket();
        }), t.onError(function(t) {
            n = !1, console.log("socket报错", t), wx.showToast({
                title: "socket正在重连，请稍后",
                icon: "none",
                duration: 2e3
            }), a.reconnectSocket();
        }), t.onMessage(function(t) {
            var i = JSON.parse(t.data), n = i.response;
            if (console.log("socket收到数据", i), "ping" === i.cmd) if (200 == n.code) {
                var r = wx.getStorageSync("newuserinfo"), d = {
                    seq: (0, s.sendId)(o.globalData.schoolid, a.data.id),
                    cmd: "login",
                    data: {
                        roomId: o.globalData.schoolid + "-" + a.data.id,
                        userType: 3,
                        token: o.globalData.token,
                        appType: o.globalData.appType,
                        userName: r.name,
                        avatarUrl: r.avatarUrl
                    }
                };
                a.sendMessage(d);
            } else a.errorTips(n.codeMsg); else if ("heartbeat" == i.cmd) a.reset(), a.start(); else if ("login" == i.cmd) 200 != n.code ? (a.errorTips(n.codeMsg), 
            1012 == n.code && a.getRefreshToken()) : "0" != n.data.pptId ? (console.log(n.data.shareFileId), 
            a.getLoginPPTList(n.data.shareFileId), a.setData({
                livenum: n.data.num,
                pptId: n.data.pptId,
                prepptId: n.data.pptId,
                isppt: !0,
                fileId: n.data.shareFileId,
                preFileId: n.data.shareFileId,
                isSharePPT: !0,
                canChooseFile: !1
            })) : a.setData({
                isppt: !1,
                isSharePPT: !1,
                livenum: n.data.num,
                showLiveVideo: 0 != n.data.video
            }); else if ("enter" == i.cmd) a.setData({
                livenum: n.data.num,
                enterObj: n.data
            }); else if ("msg" == i.cmd) {
                var l = a.data.commentList;
                if (200 == n.code) l.push(a.data.tempMsg), a.setData({
                    commentList: l
                }), a.scrollToBottom(); else if ([ 2001, 2002 ].indexOf(n.code) > -1) l.push(n.data), 
                a.setData({
                    commentList: l
                }), a.scrollToBottom(); else if (2003 == n.code) {
                    var c = e.data.recordList;
                    l.push(n.data);
                    var p = {
                        title: n.data.msg,
                        id: n.data.questionId,
                        from: n.data.from,
                        userName: n.data.userName,
                        avatarUrl: n.data.avatarUrl,
                        answer: ""
                    };
                    c.push(p), a.setData({
                        commentList: l,
                        recordList: c
                    }), a.scrollToBottom();
                } else if (2004 == n.code) {
                    var h = e.data.recordList;
                    l.push(n.data);
                    var g = n.data.question.id;
                    h.map(function(t) {
                        t.id == g && (t.answer = n.data.msg);
                    }), a.setData({
                        commentList: l,
                        recordList: h
                    }), a.scrollToBottom();
                } else if (2005 == n.code) {
                    var u = e.data.recordList;
                    l.push(n.data);
                    var m = {
                        title: n.data.question.title,
                        id: n.data.question.id,
                        from: n.data.from,
                        userName: n.data.userName,
                        avatarUrl: n.data.avatarUrl,
                        answer: n.data.msg
                    };
                    u.push(m), a.setData({
                        commentList: l,
                        recordList: u
                    }), a.scrollToBottom();
                } else a.errorTips(n.codeMsg);
            } else if ("cmd" == i.cmd) if (200 == n.code) {
                var f = n.data;
                "start" == f.type ? wx.showToast({
                    title: "直播已开始",
                    icon: "none",
                    duration: 5e3
                }) : "over" == f.type ? (wx.showToast({
                    title: "直播已结束",
                    icon: "none",
                    duration: 5e3
                }), e.playContext.stop()) : "ppt" == f.type ? a.setData({
                    pptImg: a.data.images[n.data.msg],
                    isppt: !0
                }) : "video" == f.type ? "0" == n.data.msg ? a.setData({
                    showLiveVideo: !1
                }) : "1" == n.data.msg && a.setData({
                    showLiveVideo: !0
                }) : "pptclose" == f.type && ("0" == n.data.msg ? a.setData({
                    isppt: !1
                }) : a.setData({
                    isppt: !0
                }));
            } else a.errorTips(n.codeMsg); else "questionlist" == i.cmd && (200 == n.code ? a.setData({
                recordList: n.data
            }) : a.errorTips(n.codeMsg));
        });
    },
    sendMessage: function(e) {
        n && t.send({
            data: JSON.stringify(e),
            success: function(t) {
                console.log("成功", t);
            },
            fail: function(t) {
                console.log("socket发送失败", t);
            }
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
        n && (e.timeoutObj = setTimeout(function() {
            var a = {
                seq: (0, s.sendId)(o.globalData.schoolid, e.data.id),
                cmd: "heartbeat"
            };
            e.sendMessage(a), e.serverTimeoutObj = setTimeout(function() {
                t.close();
            }, e.data.timeout);
        }, e.data.timeout));
    },
    errorTips: function(t) {
        wx.showToast({
            title: t,
            icon: "none"
        });
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages()), wx.getStorage({
            key: "newuserinfo",
            success: function(t) {
                o.globalData.userInfo = t.data, o.globalData.token = t.data.token.access_token, 
                console.log(o.globalData.userInfo);
            }
        }), this.data.handleClose && 1 == this.data.status && this.socketConnect();
    },
    onHide: function() {
        getApp().reporting.page("hide"), this.leavePage();
    },
    leavePage: function() {
        n && (t.close(), this.reset(), this.setData({
            limit: 0
        }), this.timeoutObj = null, this.serverTimeoutObj = null), this.setData({
            handleClose: !0
        }), clearInterval(e);
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