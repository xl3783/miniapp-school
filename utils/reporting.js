const objectSpread2 = (target, ...sources) => {
  sources.forEach(source => {
    if (source) {
      Object.keys(source).forEach(key => {
        target[key] = source[key];
      });
    }
  });
  return target;
};

class Subscriber {
  constructor(config, app) {
    this.app = app;
    this.systemInfo = wx.getSystemInfoSync();
    this.config = objectSpread2({}, config, {
      language: this.systemInfo.language,
      browser: "小程序",
      entry_time: 0,
      quit_time: 0,
      ua: this.systemInfo.model,
      os: this.systemInfo.system,
      screen: `${this.systemInfo.screenWidth} x ${this.systemInfo.screenHeight}`
    });
  }

  page(event, pages) {
    this.app.globalData.home.then(() => {
      this.config.sn = this.app.globalData.openid;
      this.config.schoolid = this.app.globalData.schoolid;

      if (event === "show") {
        pages = pages.map(page => ({
          url: page.__route__,
          options: JSON.stringify(page.options)
        }));

        if (pages.length >= 2) {
          this.config.referer = pages[pages.length - 2].url;
        } else if (pages.length === 1) {
          this.config.referer = "";
        }

        this.config.scene = pages[pages.length - 1].options;
        this.config.page = pages[pages.length - 1].url;
        this.config.entry_time = new Date().getTime();
      }

      if (event === "hide") {
        this.config.quit_time = new Date().getTime();
        this.commit("/api/bury-point/flow-statics", this.config);
      }
    });
  }

  share(event, pages) {
    const {
      type,
      value
    } = event;
    this.app.globalData.home.then(() => {
      this.config.sn = this.app.globalData.openid;
      this.config.schoolid = this.app.globalData.schoolid;

      pages = pages.map(page => ({
        url: page.__route__
      }));

      this.config.page = pages[pages.length - 1].url;
      this.commit("/api/bury-point/share-statics", objectSpread2({}, this.config, {
        share_type: "page",
        share_group: type,
        scene: value
      }));
    });
  }

  // todo ??
  commit(endpoint, data) {
    wx.request({
      url: `https://buried.xiaopaicloud.com${endpoint}`,
      data: objectSpread2({}, data, {
        request_id: `${this.config.sn}_${this.config.request_id}`
      }),
      method: "POST"
    });
  }
}

module.exports = {
  Subscriber
};