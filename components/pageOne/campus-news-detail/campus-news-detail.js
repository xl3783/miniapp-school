const {getArticle} = require("../../../apis/index");

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
    detailId: {
      type: Number,
      observer: function (newVal) {
        if (newVal != 0) {
          this.fetchData();
        }
      }
    }
  },
  data: {
    title: "",
    thumb_url: "",
    content: "",
    create_time: "",
    tabName: "新闻",
    dataInitLoad: false
  },
  methods: {
    handleLinkTap: function (event) {
      console.log(event);
      const url = event.detail.href;
      const fileExtension = url.substring(url.lastIndexOf(".") + 1);

      if (["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(fileExtension)) {
        wx.downloadFile({
          url: url,
          success: function (res) {
            const tempFilePath = res.tempFilePath;
            wx.openDocument({
              filePath: tempFilePath
            });
          }
        });
      } else {
        wx.navigateTo({
          url: "/pages/web-view/web-view?url=" + encodeURIComponent(url)
        });
      }
    },
    fetchData: async function () {
      const component = this;
      wx.showLoading({
        title: "加载中"
      });
      const res = await getArticle(this.data.detailId);
      let title = res.data.title;
      component.setData({
        title: title,
        thumb_url: res.data.thumb_url,
        content: res.data.content,
        create_time: res.data.updatedAt,
        dataInitLoad: true
      });
      component.triggerEvent("changeName", title);
      wx.hideLoading();
      // http.get(app.globalData.baseUrl + "/miniapp/article/" + this.data.detailId)
      //   .then(function (response) {
      //     const {
      //       title,
      //       content,
      //       thumb_url,
      //       create_time
      //     } = response;
      //     wx.hideLoading();
      //     component.setData({
      //       title: title,
      //       thumb_url: thumb_url,
      //       content: content,
      //       create_time: create_time,
      //       dataInitLoad: true
      //     });
      //     component.triggerEvent("changeName", title);
      //   });
    }
  }
});