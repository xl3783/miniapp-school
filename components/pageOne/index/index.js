import Http from '../../../utils/http';
const appInstance = getApp();
const httpInstance = new Http();

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
    components: [],
    page_size: 20,
    page: 1,
    total: 1,
    schoolname: "",
    schoollogo: "",
    isBottom: false,
    showSkeleton: true,
    contactContent: {},
    triggered: false,
    topNum: 0,
    freshing: false,
    showOfficial: false,
    dataIsLoad: false
  },
  lifetimes: {
    attached: function () {
      this.setData({
        schoollogo: appInstance.globalData.schoollogo
      });
      this.getHomeData();
    }
  },
  methods: {
    loadOfficial: function (event) {
      console.log("公众号触发", event);
    },
    officialError: function (event) {
      console.log("公众号报错", event);
      this.setData({
        showOfficial: false
      });
    },
    onRefresh: function () {
      wx.showLoading({
        title: "加载中"
      });
      this.setData({
        page_size: 20,
        page: 1,
        components: [],
        isBottom: false
      });
      this.getHomeData();
      wx.hideLoading();
    },
    getHomeData: function () {
      const that = this;
      const launchOptions = wx.getLaunchOptionsSync();
      if ([1011, 1047, 1124, 1089, 1038].includes(launchOptions.scene)) {
        that.setData({
          showOfficial: true
        });
      } else {
        that.setData({
          showOfficial: false
        });
      }
      const {
        page_size,
        page,
        components
      } = that.data;
      httpInstance.get(appInstance.globalData.baseUrl + "/miniapp/home", {
        page,
        page_size
      }).then(function (res) {
        const newComponents = components.concat(res.components);
        that.setData({
          components: newComponents,
          total: res.total,
          schoolname: res.name
        });
        const eventDetail = {
          showCollect: res.is_collect,
          showContact: false,
          contactContent: {},
          globalColor: res.color
        };
        if (newComponents && newComponents.length > 0) {
          const firstComponent = newComponents[0];
          if (firstComponent.type === 6) {
            eventDetail.showContact = true;
            eventDetail.contactContent = firstComponent;
          }
        }
        that.triggerEvent("showContactEvent", eventDetail);
        that.setData({
          dataIsLoad: true
        });
      });
    },
    onReachBottom: function () {
      console.log("加载了");
      const {
        page_size,
        page,
        total,
        components
      } = this.data;
      const lastComponent = components[components.length - 1];
      if (lastComponent.load_type === 1) {
        this.selectComponent("#waterfall" + lastComponent.id).getListById();
      } else if (page * page_size < total) {
        this.setData({
          page: page + 1,
          isBottom: false
        });
        this.getHomeData();
      } else {
        this.setData({
          isBottom: true
        });
      }
    },
    openPhone: function (event) {
      wx.makePhoneCall({
        phoneNumber: event.currentTarget.dataset.phone
      });
    },
    copyWx: function (event) {
      wx.setClipboardData({
        data: event.currentTarget.dataset.wx,
        success: function () {
          wx.showToast({
            title: "内容已复制"
          });
          wx.getClipboardData({
            success: function () {
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
      const that = this;
      if (!this.data.freshing) {
        this.setData({
          freshing: true,
          triggered: true
        });
        this.onRefresh();
        setTimeout(() => {
          that.setData({
            triggered: false,
            freshing: false
          });
        }, 1000);
      }
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