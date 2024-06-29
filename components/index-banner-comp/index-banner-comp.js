var e = require("../../utils/util");

getApp();

Component({
  properties: {
    indicatorDots: {
      type: Boolean,
      value: !0
    },
    autoplay: {
      type: Boolean,
      value: !0
    },
    interval: {
      type: Number,
      value: 4100
    },
    duration: {
      type: Number,
      value: 500
    },
    circular: {
      type: Boolean,
      value: !0
    },
    bannerList: {
      type: Array,
      value: []
    },
    showLogo: {
      type: Number,
      value: 1
    },
    banner_style: {
      type: Number,
      value: 1
    },
    height_type: {
      type: Number,
      value: 1
    },
    marginTop: {
      type: String,
      value: "0rpx"
    },
    logo: {
      type: String,
      value: "/images/intro.png"
    },
    schoolName: {
      type: String,
      value: ""
    },
    align: {
      type: String,
      value: 1
    },
    bannerRadius: {
      type: String,
      value: "0rpx"
    },
    bannerWidth: {
      type: String,
      value: "100%"
    },
    titleType: {
      type: Number,
      value: 1
    },
    imgTitle: {
      type: String,
      value: ""
    },
    is_show_name: {
      type: Number,
      value: 1
    }
  },
  data: {
    active: 0
  },
  methods: {
    changeSwiper: function (e) {
      this.setData({
        active: e.detail.current
      });
    },
    jump: function (t) {
      (0, e.getPhoneLogin)().then(function () {
        (0, e.jumpToDetail)(t);
      });
    }
  }
});