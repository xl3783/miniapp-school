// var e = require("../../@babel/runtime/helpers/interopRequireDefault").default,
//   t = require("../../utils/util"),
//   a = new(e(require("../../utils/http")).default.Http)();

Component({
  properties: {
    name: {
      type: String,
      value: "图片栏目名称"
    },
    list: {
      type: Array,
      value: [{
        id: 1,
        image_url: "/images/campus.png",
        data_type: 1,
        title: "title1"
      }]
    },
    num: {
      type: Number,
      value: 1
    },
    componentid: {
      type: Number,
      value: 0
    }
  },
  data: {},
  methods: {
    lookImg: function (e) {
      var t = e.currentTarget.dataset,
        i = t.img,
        n = t.id;
      a.get(getApp().globalData.baseUrl + "/miniapp/scenery/" + n), wx.previewImage({
        urls: [i]
      });
    },
    goVideoDetail: function (e) {
      (0, t.getPhoneLogin)().then(function () {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: "/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=" + t
        });
      });
    },
    lookMore: function () {
      var e = this;
      (0, t.getPhoneLogin)().then(function () {
        wx.navigateTo({
          url: "/pages/pic-column-more/pic-column-more?name=" + e.data.name + "&id=" + e.data.componentid
        });
      });
    }
  }
});