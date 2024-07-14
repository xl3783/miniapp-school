const app = getApp();

Component({
  properties: {
    initPath: {
      type: String,
      value: ""
    },
    initId: {
      type: Number,
      value: 1
    },
    wxIdForSystem: {
      type: String,
      value: "123445"
    }
  },
  data: {
    list: [],
    selectedColor: "",
    color: "",
    selected: 0,
    show: false,
    fontsize: 20
  },
  methods: {
    getBottom: function () {
      const self = this;
      const tabbar = app.globalData.tabbar;
      this.setData({
        fontsize: tabbar.font_size
      });

      const content = tabbar.content;
      const currentPages = getCurrentPages();
      const currentRoute = currentPages[currentPages.length - 1].route;

      if (this.data.initPath) {
        const index = content.findIndex(function (item) {
          return item.base_url == self.data.initPath && item.id == self.data.initId;
        });

        if (index > -1) {
          this.triggerEvent("chooseTab", Object.assign({}, content[index], {
            index: index,
            list: content
          }));
          this.setData({
            selected: index
          });
        } else {
          this.triggerEvent("chooseTab", Object.assign({}, content[0], {
            index: 0,
            list: content
          }));
          this.setData({
            selected: 0
          });
        }
      } else {
        this.triggerEvent("chooseTab", Object.assign({}, content[0], {
          index: 0,
          list: content
        }));
        this.setData({
          selected: 0
        });
      }

      if (currentRoute == "pages/index/index") {
        this.setData({
          list: tabbar.content,
          selectedColor: tabbar.choose_color,
          color: tabbar.unchoose_color,
          style: tabbar.style,
          show: true
        });
      }
    },
    switchTab: function (event) {
      wx.vibrateShort({
        type: "medium"
      });

      const dataset = event.currentTarget.dataset;
      const item = dataset.item;
      const index = dataset.index;

      if (item.jump_url === "../../pages/my/my") {
        wx.requestSubscribeMessage({
          tmplIds: [app.globalData.robotTempId]
        });
      }

      this.triggerEvent("chooseTab", Object.assign({}, item, {
        index: index,
        list: this.data.list
      }));

      if (this.data.selected !== index) {
        this.setData({
          selected: index
        });
      }
    }
  }
});