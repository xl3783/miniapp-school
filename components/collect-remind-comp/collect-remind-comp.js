Component({
    properties: {},
    data: {
        showCollect: !1
    },
    lifetimes: {
        attached: function() {
            var t = wx.getLaunchOptionsSync().scene;
            -1 != [ 1001, 1005, 1011, 1012, 1026, 1035, 1037, 1043, 1044, 1045, 1046, 1047, 1048, 1048, 1053, 1058, 1059, 1067, 1084, 1096 ].findIndex(function(e) {
                return t == e;
            }) && this.setData({
                showCollect: !0
            });
        }
    },
    methods: {
        closeCollect: function() {
            this.setData({
                showCollect: !1
            }), this.triggerEvent("closeCollect");
        }
    }
});