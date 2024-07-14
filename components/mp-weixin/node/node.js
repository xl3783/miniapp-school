// Utility function to define a property on an object
function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

Component({
  data: {
    ctrl: {}
  },
  properties: {
    childs: Array,
    opts: Array
  },
  attached: function () {
    this.triggerEvent("add", this, {
      bubbles: true,
      composed: true
    });
  },
  methods: {
    noop: function () {},

    // Get a specific node from the child structure
    getNode: function (nodePath) {
      const indices = nodePath.split("_");
      let node = this.data.childs[indices[0]];
      for (let i = 1; i < indices.length; i++) {
        node = node.children[indices[i]];
      }
      return node;
    },

    // Handle video play event
    play: function (event) {
      if (this.root.data.pauseVideo) {
        let isCurrentVideoPlaying = false;
        const videoId = event.target.id;
        for (let i = this.root._videos.length - 1; i >= 0; i--) {
          if (this.root._videos[i].id === videoId) {
            isCurrentVideoPlaying = true;
          } else {
            this.root._videos[i].pause();
          }
        }
        if (!isCurrentVideoPlaying) {
          const videoContext = wx.createVideoContext(videoId, this);
          videoContext.id = videoId;
          this.root._videos.push(videoContext);
        }
      }
    },

    // Handle image tap event
    imgTap: function (event) {
      const imgNode = this.getNode(event.target.dataset.i);
      if (imgNode.a) {
        return this.linkTap(imgNode.a);
      }
      if (!imgNode.attrs.ignore && this.root.data.previewImg) {
        const imgUrl = this.root.imgList[imgNode.i];
        wx.previewImage({
          current: imgUrl,
          urls: this.root.imgList
        });
      }
    },

    // Handle image load event
    imgLoad: function (event) {
      const imgIndex = event.target.dataset.i;
      const imgNode = this.getNode(imgIndex);
      const imgWidth = imgNode.w ? (this.data.opts[1] && !this.data.ctrl[imgIndex] || this.data.ctrl[imgIndex] === -1 ? 1 : undefined) : event.detail.width;

      if (imgWidth !== undefined) {
        this.setData(defineProperty({}, `ctrl.${imgIndex}`, imgWidth));
      }
    },

    // Handle link tap event
    linkTap: function (event) {
      const node = event.currentTarget ? this.getNode(event.currentTarget.dataset.i) : {};
      const attrs = node.attrs || event;
      const href = attrs.href;

      this.root.triggerEvent("linktap", Object.assign({
        innerText: this.root.getText(node.children || [])
      }, attrs));

      if (href) {
        if (href.startsWith("#")) {
          this.root.navigateTo(href.substring(1)).catch(() => {});
        } else if (href.includes("://")) {
          if (this.root.data.copyLink) {
            wx.setClipboardData({
              data: href,
              success: function () {
                wx.showToast({
                  title: "链接已复制"
                });
              }
            });
          }
        } else {
          wx.navigateTo({
            url: href,
            fail: function () {
              wx.switchTab({
                url: href,
                fail: function () {}
              });
            }
          });
        }
      }
    },

    // Handle media error event
    mediaError: function (event) {
      const nodeIndex = event.target.dataset.i;
      const node = this.getNode(nodeIndex);

      if (["video", "audio"].includes(node.name)) {
        let newSrcIndex = (this.data.ctrl[nodeIndex] || 0) + 1;
        if (newSrcIndex > node.src.length) newSrcIndex = 0;
        if (newSrcIndex < node.src.length) {
          this.setData(defineProperty({}, `ctrl.${nodeIndex}`, newSrcIndex));
        }
      } else if (node.name === "img" && this.data.opts[2]) {
        this.setData(defineProperty({}, `ctrl.${nodeIndex}`, -1));
      }

      if (this.root) {
        this.root.triggerEvent("error", {
          source: node.name,
          attrs: node.attrs,
          errMsg: event.detail.errMsg
        });
      }
    }
  }
});