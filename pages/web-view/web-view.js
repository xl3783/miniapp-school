const app = getApp();

Page({
  data: {
    url: "",
    imageUrl: "",
    errorShow: false,
  },

  onHide() {
    app.reporting.page("hide", getCurrentPages());
  },

  onShow() {
    app.reporting.page("show", getCurrentPages());
  },

  onUnload() {
    app.reporting.page("hide", getCurrentPages());
  },

  handleerror(event) {
    console.log(event);
    console.log(event.detail.src);
  },

  getQueryNameValue(url, name) {
    const regex = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
    const match = url.match(regex);
    return match ? unescape(match[2]) : null;
  },

  fetchChannelDetails(channelId) {
    return app.network.getContext("OE").get("/channel/detail", {
      channel_id: channelId
    });
  },

  constructUrl(baseUrl, channelData, userInfo) {
    const params = [
      `channel_id=${channelData.id}`,
      `channel_name=${channelData.name}`,
      `channel_user_name=${channelData.manager}`,
      `channel_phone=${channelData.phone}`,
      `user_name=${userInfo.name}`,
      `user_phone=${userInfo.phone}`,
      `user_id=${userInfo.id}`
    ];
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}${params.join('&')}`;
  },

  onLoad(options) {
    const {
      scene,
      url,
      imageUrl
    } = options;

    if (scene) {
      const decodedScene = decodeURIComponent(scene);
      console.log(decodedScene);
      const channelId = this.getQueryNameValue(decodedScene, "channel_id");

      if (channelId) {
        this.fetchChannelDetails(channelId).then(channelData => {
          const userInfo = wx.getStorageSync("newuserinfo");
          const finalUrl = this.constructUrl(channelData.url, channelData, userInfo);
          this.setData({
            url: finalUrl
          });
        });
      }
    }

    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"]
    });

    const titleMatch = decodeURIComponent(url).match(/title=([^&]+)/);
    const title = titleMatch ? titleMatch[1] : "";
    this.setData({
      title: decodeURIComponent(title),
      url: decodeURIComponent(url),
      imageUrl: decodeURIComponent(imageUrl)
    });

    console.log(this.data.url);
  },

  viewMsg(event) {
    const messages = event.detail.data;
    console.log("页面消息列表", messages);
    if (messages.length) {
      messages.forEach(msg => {
        if (msg.type === "navigateToMiniProgram") {
          wx.navigateToMiniProgram({
            appId: msg.appId,
            path: msg.path,
            extraData: msg.extraData || {},
            shortLink: msg.shortLink || "",
            envVersion: msg.envVersion || "release",
            fail: err => console.log("小程序打开失败", err)
          });
        }
      });
    }
  },

  viewError() {
    this.setData({
      errorShow: true
    });
  },

  onShareAppMessage() {
    app.reporting.share({
      type: 1,
      value: ""
    }, getCurrentPages());
    return {
      title: this.data.title || app.globalData.schoolname,
      path: `/pages/web-view/web-view?url=${encodeURIComponent(this.data.url)}`
    };
  },

  onShareTimeline() {
    app.reporting.share({
      type: 2,
      value: ""
    }, getCurrentPages());
    return {
      title: this.data.title || app.globalData.schoolname,
      query: `url=${encodeURIComponent(this.data.url)}`
    };
  }
});