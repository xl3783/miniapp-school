const Parser = require('./parser');
const plugins = [];

Component({
  data: {
    nodes: []
  },
  properties: {
    containerStyle: String,
    content: {
      type: String,
      value: "",
      observer: function (newContent) {
        this.setContent(newContent);
      }
    },
    copyLink: {
      type: Boolean,
      value: true
    },
    domain: String,
    errorImg: String,
    lazyLoad: Boolean,
    loadingImg: String,
    pauseVideo: {
      type: Boolean,
      value: true
    },
    previewImg: {
      type: Boolean,
      value: true
    },
    scrollTable: Boolean,
    selectable: null,
    setTitle: {
      type: Boolean,
      value: true
    },
    showImgMenu: {
      type: Boolean,
      value: true
    },
    tagStyle: Object,
    useAnchor: null
  },
  created: function () {
    this.plugins = [];
    for (let i = plugins.length - 1; i >= 0; i--) {
      this.plugins.push(new plugins[i](this));
    }
  },
  detached: function () {
    clearInterval(this._timer);
    this._hook('onDetached');
  },
  methods: {
    init: function (page, selector, scrollTop) {
      if (page && selector && scrollTop) {
        this._in = {
          page,
          selector,
          scrollTop
        };
      }
    },
    navigateTo: function (id, offset) {
      const component = this;
      return new Promise((resolve, reject) => {
        if (!component.data.useAnchor) {
          return reject("Anchor is disabled");
        }
        const query = wx.createSelectorQuery().in(component._in ? component._in.page : component)
          .select((component._in ? component._in.selector : "._root") + (id ? `>>>#${id}` : ""))
          .boundingClientRect();

        if (component._in) {
          query.select(component._in.selector).scrollOffset()
            .select(component._in.selector).boundingClientRect();
        } else {
          query.selectViewport().scrollOffset();
        }

        query.exec(function (res) {
          if (!res[0]) {
            return reject("Label not found");
          }
          const scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + (offset || parseInt(component.data.useAnchor) || 0);
          if (component._in) {
            component._in.page.setData({
              [component._in.scrollTop]: scrollTop
            });
          } else {
            wx.pageScrollTo({
              scrollTop: scrollTop,
              duration: 300
            });
          }
          resolve();
        });
      });
    },
    getText: function (nodes) {
      let text = "";

      function extractText(nodeList) {
        nodeList.forEach(node => {
          if (node.type === "text") {
            text += node.text.replace(/&amp;/g, "&");
          } else if (node.name === "br") {
            text += "\n";
          } else {
            const blockElements = ["p", "div", "tr", "li"].includes(node.name) || (node.name.startsWith("h") && node.name[1] > "0" && node.name[1] < "7");
            if (blockElements && text && text[text.length - 1] !== "\n") {
              text += "\n";
            }
            if (node.children) {
              extractText(node.children);
            }
            if (blockElements && text[text.length - 1] !== "\n") {
              text += "\n";
            } else if (["td", "th"].includes(node.name)) {
              text += "\t";
            }
          }
        });
      }
      extractText(nodes || this.data.nodes);
      return text;
    },
    getRect: function () {
      const component = this;
      return new Promise((resolve, reject) => {
        wx.createSelectorQuery().in(component).select("._root").boundingClientRect().exec(res => {
          return res[0] ? resolve(res[0]) : reject("Root label not found");
        });
      });
    },
    setContent: function (content, append) {
      const component = this;
      if (!component.imgList || !append) {
        component.imgList = [];
      }
      component._videos = [];
      const parsedContent = new Parser(component).parse(content);
      const newData = {};

      if (append) {
        const currentNodesLength = component.data.nodes.length;
        for (let i = parsedContent.length - 1; i >= 0; i--) {
          newData[`nodes[${currentNodesLength + i}]`] = parsedContent[i];
        }
      } else {
        newData.nodes = parsedContent;
      }

      component.setData(newData, () => {
        component._hook("onLoad");
        component.triggerEvent("load");
      });

      clearInterval(component._timer);
      component._timer = setInterval(() => {
        component.getRect().then(rect => {
          if (rect.height === component._previousHeight) {
            component.triggerEvent("ready", rect);
            clearInterval(component._timer);
          }
          component._previousHeight = rect.height;
        }).catch(() => {});
      }, 350);
    },
    _hook: function (hookName) {
      for (let i = plugins.length - 1; i >= 0; i--) {
        if (this.plugins[i][hookName]) {
          this.plugins[i][hookName]();
        }
      }
    },
    _add: function (event) {
      event.detail.root = this;
    }
  }
});