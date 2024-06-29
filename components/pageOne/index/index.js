var e = require("../../../@babel/runtime/helpers/interopRequireDefault").default,
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  a = e(require("../../../utils/http")),
  n = getApp(),
  s = new a.default.Http();

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
    wxIdForSystem: {
      type: String,
      value: "123445"
    }
  },
  data: {
    components: [{
      align: "center",
      content: [{
        image_url: "/images/header.png"
      }],
      style: 1,
      logo: "/images/intro.png",
      schoolName: "荆州职业技术学院"
    }],
    page_size: 20,
    page: 1,
    total: 1,
    schoolname: "",
    schoollogo: "",
    isBottom: !1,
    showSkeleton: !0,
    contactContent: {},
    triggered: !1,
    topNum: 0,
    freshing: !1,
    showOfficial: !1,
    dataIsLoad: !1
  },
  lifetimes: {
    attached: function () {
      this.setData({
        schoollogo: n.globalData.schoollogo
      }), this.getHomeData();
    }
  },
  methods: {
    loadOfficial: function (e) {
      console.log("公众号触发", e);
    },
    officialError: function (e) {
      console.log("公众号报错", e), this.setData({
        showOfficial: !1
      });
    },
    onRefresh: function () {
      wx.showLoading({
        title: "加载中"
      }), this.setData({
        page_size: 20,
        page: 1,
        components: [],
        isBottom: !1
      }), this.getHomeData(), wx.hideLoading();
    },
    getHomeData: function () {
      var e = this;
      return o(t().mark(function o() {
        var a, i, r, c, l, h;
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return a = e, 1011 == (i = wx.getLaunchOptionsSync()).scene || 1047 == i.scene || 1124 == i.scene || 1089 == i.scene || 1038 == i.scene ? e.setData({
                showOfficial: !0
              }) : e.setData({
                showOfficial: !1
              }), r = a.data, c = r.page_size, l = r.page, h = r.components, t.next = 6, s.get(n.globalData.baseUrl + "/miniapp/home", {
                page: l,
                page_size: c
              }).then(function (e) {
                var t = h.concat(e.components);
                a.setData({
                  components: t,
                  total: e.total,
                  schoolname: e.name
                });
                var o = {
                  showCollect: e.is_collect,
                  showContact: !1,
                  contactContent: {},
                  globalColor: e.color
                };
                if (t && t.length > 0) {
                  var n = t[0];
                  6 == n.type && (o.showContact = !0, o.contactContent = n);
                }
                a.triggerEvent("showContactEvent", o);
              });

            case 6:
              e.setData({
                dataIsLoad: !0
              });

            case 7:
            case "end":
              return t.stop();
          }
        }, o);
      }))();
    },
    onReachBottom: function () {
      console.log("加载了");
      var e = this.data,
        t = e.page_size,
        o = e.page,
        a = e.total,
        n = e.components,
        s = n[n.length - 1];
      1 === s.load_type ? this.selectComponent("#waterfall" + s.id).getListById() : o * t < a ? (o += 1,
        this.setData({
          page: o,
          isBottom: !1
        }), this.getHomeData()) : this.setData({
        isBottom: !0
      });
    },
    openPhone: function (e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.phone
      });
    },
    copyWx: function (e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.wx,
        success: function (e) {
          wx.showToast({
            title: "内容已复制"
          }), wx.getClipboardData({
            success: function (e) {
              wx.showToast({
                title: "内容已复制"
              });
            }
          });
        }
      });
    },
    leaveWord: function () {
      wx.navigateTo({
        url: "/pages/leaveWord/leaveWord"
      });
    },
    refresherpulling: function () {},
    refresherrefresh: function () {
      var e = this;
      this.data.freshing || (this.data.freshing = !0, this.data.triggered || this.setData({
        triggered: !0
      }), this.onRefresh(), setTimeout(function () {
        e.setData({
          triggered: !1,
          freshing: !1
        });
      }, 1e3));
    },
    refresherrestore: function () {
      console.log("复位");
    },
    refresherabort: function () {
      console.log("被中止");
    },
    scrollToTop: function () {
      this.setData({
        topNum: 0
      });
    }
  }
});