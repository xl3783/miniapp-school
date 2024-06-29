var e = (0, require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../utils/http")), t = getApp(), a = new e.default.Http();

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        detailId: {
            type: Number,
            observer: function(e, t) {
                this.getData();
            }
        }
    },
    data: {
        content: {},
        isPause: !0
    },
    methods: {
        getData: function() {
            var e = this;
            a.get(t.globalData.baseUrl + "/miniapp/video/" + this.data.detailId).then(function(t) {
                console.log(t), e.setData({
                    content: t.data
                });
            });
        }
    }
});