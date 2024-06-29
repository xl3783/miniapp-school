var e = require("../../utils/util");

Component({
    properties: {
        noticeList: {
            type: Array,
            value: []
        },
        noticeH: {
            type: Number,
            value: 80
        },
        noticeRadius: {
            type: String,
            value: "0rpx"
        },
        noticeW: {
            type: String,
            value: "686rpx"
        },
        iconUrl: {
            type: String,
            value: ""
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {},
    methods: {
        goDetail: function(t) {
            (0, e.getPhoneLogin)().then(function() {
                (0, e.jumpToNewsDetail)(t);
            });
        }
    }
});