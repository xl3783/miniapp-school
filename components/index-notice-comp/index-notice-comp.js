Component({
  properties: {
    noticeList: {
      type: Array,
      value: [{
        title: "title1"
      }, {
        title: "title2"
      }]
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
      value: "/images/nav/cart-off.png"
    },
    wxIdForSystem: {
      type: String,
      value: "123445"
    }
  },
  data: {},
  methods: {
    goDetail: function (t) {

    }
  }
});