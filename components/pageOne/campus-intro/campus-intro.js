const Http = require("../../../utils/http");
const app = getApp();
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
    content: "",
    topNum: 0,
    dataIsLoad: false
  },
  lifetimes: {
    attached: function () {
      this.fetchData();
    }
  },
  methods: {
    fetchData: function () {
      wx.showLoading({
        title: "加载中"
      });

      httpInstance.get(`${app.globalData.baseUrl}/miniapp/intro`)
        .then(response => {
          this.setData({
            content: response.content,
            dataIsLoad: true
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          wx.hideLoading();
        });
    },
    linktap: function (event) {
      const url = event.detail.href;
      const fileType = url.substring(url.lastIndexOf(".") + 1);

      const supportedFileTypes = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"];
      if (supportedFileTypes.includes(fileType)) {
        wx.downloadFile({
          url: url,
          success: function (downloadRes) {
            const tempFilePath = downloadRes.tempFilePath;
            wx.openDocument({
              filePath: tempFilePath
            });
          },
          fail: function (error) {
            console.error("Failed to download file:", error);
          }
        });
      }
    }
  }
});