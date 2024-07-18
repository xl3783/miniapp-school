const Http = require("../../utils/http");
const appInstance = getApp();
const httpInstance = new Http();

Page({
  data: {
    intro: "",
    tabName: "",
    id: "",
    showDetail: false
  },
  onLoad: function (options) {
    const {
      id
    } = options;
    this.setData({
      id: id
    });
    this.getIntro();
  },
  getIntro: function () {
    httpInstance.get(`${appInstance.globalData.baseUrl}/miniapp/faculty/specialty/${this.data.id}`).then(response => {
      if (response.errcode === 0 && response.data) {
        this.setData({
          tabName: response.data.name,
          showDetail: true,
          intro: response.data.intro_text
        });
      }
    });
  },
  linktap: function (event) {
    const url = event.detail.href;
    const fileType = url.substring(url.lastIndexOf(".") + 1);

    if (["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(fileType)) {
      wx.downloadFile({
        url: url,
        success: function (downloadResponse) {
          wx.openDocument({
            filePath: downloadResponse.tempFilePath
          });
        }
      });
    }
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
});