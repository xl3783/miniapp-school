Page({
    data: {
        inputText: "",
        recordList: [],
        searchType: ""
    },
    goResult: function(t) {
        var e = this.data.searchType, a = t.detail.value;
        this.setData({
            inputText: a
        });
        var r = this.data.recordList, s = r.findIndex(function(t, e) {
            return t == a;
        });
        if (-1 != s ? (r.splice(s, 1), r.unshift(a)) : r.unshift(a), 2 == e) wx.setStorage({
            data: r,
            key: "scoreRecordList"
        }); else if (1 == e) {
            wx.setStorage({
                data: r,
                key: "enrollPlanRecordList"
            });
            wx.getStorageSync("enrollPlanRecordList");
        }
        wx.navigateTo({
            url: "/packageA/pages/plan-score-search-result/plan-score-search-result?text=".concat(a, "&searchType=").concat(e)
        });
    },
    goResultPage: function(t) {
        var e = t.currentTarget.dataset.text, a = this.data.searchType;
        wx.navigateTo({
            url: "/packageA/pages/plan-score-search-result/plan-score-search-result?text=".concat(e, "&searchType=").concat(a)
        });
    },
    onLoad: function(t) {
        var e = t.searchType;
        if (this.setData({
            searchType: e
        }), console.log("历史记录里面的", e), "1" == e) try {
            var a = wx.getStorageSync("enrollPlanRecordList");
            a && this.setData({
                recordList: a
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        } else if ("2" == e) try {
            var r = wx.getStorageSync("scoreRecordList");
            r && this.setData({
                recordList: r
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        }
    },
    onReady: function() {},
    onShow: function() {
        getApp().reporting.page("show", getCurrentPages());
        var t = this.data.searchType;
        if ("1" == t) try {
            var e = wx.getStorageSync("enrollPlanRecordList");
            e && this.setData({
                recordList: e
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        } else if ("2" == t) try {
            var a = wx.getStorageSync("scoreRecordList");
            a && this.setData({
                recordList: a
            });
        } catch (t) {
            this.setData({
                recordList: []
            });
        }
    },
    onHide: function() {
        getApp().reporting.page("hide");
    },
    onUnload: function() {
        getApp().reporting.page("hide");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});