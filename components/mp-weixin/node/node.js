function t(t, i, e) {
    return i in t ? Object.defineProperty(t, i, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = e, t;
}

require("../../../@babel/runtime/helpers/Arrayincludes"), Component({
    data: {
        ctrl: {}
    },
    properties: {
        childs: Array,
        opts: Array
    },
    attached: function() {
        this.triggerEvent("add", this, {
            bubbles: !0,
            composed: !0
        });
    },
    methods: {
        noop: function() {},
        getNode: function(t) {
            for (var i = t.split("_"), e = this.data.childs[i[0]], r = 1; r < i.length; r++) e = e.children[i[r]];
            return e;
        },
        play: function(t) {
            if (this.root.data.pauseVideo) {
                for (var i = !1, e = t.target.id, r = this.root._videos.length; r--; ) this.root._videos[r].id == e ? i = !0 : this.root._videos[r].pause();
                if (!i) {
                    var a = wx.createVideoContext(e, this);
                    a.id = e, this.root._videos.push(a);
                }
            }
        },
        imgTap: function(t) {
            var i = this.getNode(t.target.dataset.i);
            if (i.a) return this.linkTap(i.a);
            if (!i.attrs.ignore && (this.root.triggerEvent("imgtap", i.attrs), this.root.data.previewImg)) {
                var e = this.root.imgList[i.i];
                wx.previewImage({
                    current: e,
                    urls: this.root.imgList
                });
            }
        },
        imgLoad: function(i) {
            var e, r = i.target.dataset.i;
            this.getNode(r).w ? (this.data.opts[1] && !this.data.ctrl[r] || -1 == this.data.ctrl[r]) && (e = 1) : e = i.detail.width, 
            e && this.setData(t({}, "ctrl." + r, e));
        },
        linkTap: function(t) {
            var i = t.currentTarget ? this.getNode(t.currentTarget.dataset.i) : {}, e = i.attrs || t, r = e.href;
            this.root.triggerEvent("linktap", Object.assign({
                innerText: this.root.getText(i.children || [])
            }, e)), r && ("#" == r[0] ? this.root.navigateTo(r.substring(1)).catch(function() {}) : r.includes("://") ? this.root.data.copyLink && wx.setClipboardData({
                data: r,
                success: function() {
                    return wx.showToast({
                        title: "链接已复制"
                    });
                }
            }) : wx.navigateTo({
                url: r,
                fail: function() {
                    wx.switchTab({
                        url: r,
                        fail: function() {}
                    });
                }
            }));
        },
        mediaError: function(i) {
            var e = i.target.dataset.i, r = this.getNode(e);
            if ("video" == r.name || "audio" == r.name) {
                var a = (this.data.ctrl[e] || 0) + 1;
                if (a > r.src.length && (a = 0), a < r.src.length) return this.setData(t({}, "ctrl." + e, a));
            } else "img" == r.name && this.data.opts[2] && this.setData(t({}, "ctrl." + e, -1));
            this.root && this.root.triggerEvent("error", {
                source: r.name,
                attrs: r.attrs,
                errMsg: i.detail.errMsg
            });
        }
    }
});