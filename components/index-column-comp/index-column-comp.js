var e = require("../../utils/util");

Component({
    properties: {
        position: {
            type: Number,
            value: 1
        },
        name: {
            type: String,
            value: "栏目名称"
        },
        columnId: {
            type: String,
            value: ""
        },
        columnList: {
            type: Array,
            value: []
        },
        jumpType: {
            type: String,
            value: "0"
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
        },
        lookMore: function(e) {
            var t = e.currentTarget.dataset.jumptype;
            0 == t ? wx.navigateTo({
                url: "/pages/article-source/article-source?category_id=" + this.data.columnId + "&showCategory=0&name=" + this.data.name + "&jump_type=" + t
            }) : 1 == t && wx.navigateTo({
                url: "/pages/campus-news/campus-news?category_id=" + this.data.columnId + "&showCategory=1&name=" + this.data.name + "&jump_type=" + t
            });
        }
    }
});