// var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), t = require("../../utils/util");

// getApp(), new e.default.Http();
var util = require("../../utils/util");

Component({
  properties: {
    adList: {
      type: Array,
      value: []
    },
    adData: {
      type: Object,
      value: {}
    },
    borderRadius: {
      type: String,
      value: "20rpx"
    },
    count: {
      type: String,
      value: "one"
    },
    hasBorder: {
      type: Boolean,
      value: !1
    },
    wxIdForSystem: {
      type: String,
      value: "123445"
    }
  },
  data: {},
  methods: {
    jump: function (event) {
      // t.jumpToDetail(e);
      util.jumpToDetail(event);
      // (0, t.jumpToDetail)(e);
      // (0, t.getPhoneLogin)().then(function () {
      //   (0, t.jumpToDetail)(e);
      // });
    }
  }
});