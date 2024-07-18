const sprintf = require("./sprintf");
const Http = require("./http");

const httpInstance = new Http();
const app = getApp();

const padTime = (time) => {
  return time.toString().padStart(2, '0');
};

const getQueryParam = (url, param) => {
  const regex = new RegExp(`(^|&)${param}=([^&]*)(&|$)`, "i");
  const match = url.split("?")[1]?.match(regex);
  return match ? unescape(match[2]) : null;
};

const utils = {
  getDkTime: () => {
    const date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map(padTime).join(":");
  },
  formatTime: (date, separator = "/") => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${[year, month, day].map(padTime).join(separator)} ${[hours, minutes, seconds].map(padTime).join(":")}`;
  },
  sendId: (prefix, suffix) => {
    return `${Date.now()}-${prefix}-${suffix}`;
  },
  formatSeconds: (seconds) => {
    const sec = parseInt(seconds);
    const hours = Math.floor(sec / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const secs = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  },
  format: (string) => {
    return string.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
  },
  getQueryString: getQueryParam,
  getParamsArr: (url) => {
    if (url.includes("?")) {
      return url.split("?")[1].split("&").map(param => {
        const [key, value] = param.split("=");
        return {
          key,
          value
        };
      });
    }
    return false;
  },
  getPhoneLogin: () => {
    return new Promise((resolve, reject) => {
      if (app.globalData.is_get_phone !== 1 || (wx.getStorageSync("phone") && app.globalData.token)) {
        resolve();
      } else {
        wx.navigateTo({
          url: "/packageA/pages/phone-login/phone-login"
        });
        reject();
      }
    });
  },
  getUserLogin: () => {
    return new Promise((resolve, reject) => {
      if (app.globalData.token) {
        resolve();
      } else {
        wx.navigateTo({
          url: "/packageA/pages/avatar-nickname/avatar-nickname"
        });
        reject();
      }
    });
  },

  jumpToDetail: (event) => {
    const item = event.currentTarget.dataset.item;
    const {
      jump_url: jumpUrl,
      name,
      jump_name: jumpName,
      jump_type: jumpType,
      base_url: baseUrl,
      is_jump: isJump
    } = item;

    console.log(item);

    const handleVideoJump = (videoNumberId, videoId) => {
      if (videoId) {
        wx.openChannelsActivity({
          finderUserName: videoNumberId,
          feedId: videoId,
          fail: console.log
        });
      } else {
        wx.openChannelsUserProfile({
          finderUserName: videoNumberId,
          success: () => console.log(videoNumberId),
          fail: console.log
        });
      }
    };

    const handleInternalJump = (jumpUrl, name) => {
      // url: `${jumpUrl}${jumpUrl.includes("?") ? "&" : "?"}title=${name}`

      wx.navigateTo({
        url: `${jumpUrl}${jumpUrl.includes("?") ? "&" : "?"}title=${name}`
      });
    };

    const handleMiniProgramJump = (baseUrl) => {
      const miniProgramConfig = {
        fail: console.log
      };
      if (baseUrl.startsWith("#小程序")) {
        [miniProgramConfig.shortLink] = baseUrl.split("?appid=");
      } else {
        const [path, appId] = baseUrl.split("?appid=");
        miniProgramConfig.appId = appId;
        miniProgramConfig.path = path;
      }
      wx.navigateToMiniProgram(miniProgramConfig);
    };

    const handleHttpsJump = (baseUrl) => {
      wx.navigateTo({
        url: `/pages/web-view/web-view?url=${encodeURIComponent(baseUrl)}`
      });
    };

    const handleXpUserIdJump = (baseUrl) => {
      if (app.globalData.userInfo.id) {
        const url = sprintf.init(baseUrl, app.globalData.userInfo.id);
        wx.navigateTo({
          url: `/pages/web-view/web-view?url=${encodeURIComponent(url)}`
        });
      } else {
        wx.login({
          success: (res) => {
            const {
              code
            } = res;
            httpInstance.post(`${app.globalData.baseUrl}/miniapp/wxLogin/silent`, {
              appId: app.globalData.appId,
              code
            }).then((response) => {
              if (response.errcode === 0) {
                const {
                  id,
                  openid,
                  token
                } = response.data;
                app.globalData.openid = openid;
                app.globalData.token = token.access_token;
                app.globalData.userInfo.id = id;
                wx.setStorageSync("openid", openid);
                wx.setStorageSync("token", token.access_token);
                wx.navigateTo({
                  url: "/packageA/pages/avatar-nickname/avatar-nickname"
                });
              } else {
                wx.showToast({
                  title: response.errmsg,
                  icon: "none"
                });
              }
            });
          },
          fail: () => console.log("初始化登陆失败")
        });
      }
    };

    const handleFileDownload = (jumpUrl) => {
      wx.showLoading({
        title: "正在打开文件"
      });
      wx.downloadFile({
        url: jumpUrl,
        timeout: 30000,
        success: (res) => {
          wx.hideLoading();
          const {
            tempFilePath
          } = res;
          wx.openDocument({
            filePath: tempFilePath,
            success: console.log,
            fail: console.log
          });
        },
        fail: (error) => {
          wx.hideLoading();
          wx.showToast({
            icon: "none",
            title: error.errMsg
          });
        },
        complete: console.log
      });
    };

    const displayName = name?.length ? name : jumpName?.length ? jumpName : "";
    const isHttps = baseUrl.startsWith("https");

    switch (jumpType) {
      case 10:
        const {
          videoNumberId, videoId
        } = JSON.parse(jumpUrl);
        handleVideoJump(videoNumberId, videoId);
        break;
      case 5:
        if (jumpUrl.startsWith("/")) {
          handleInternalJump(jumpUrl, name);
        }
        break;
      case 6:
        handleMiniProgramJump(baseUrl);
        break;
      default:
        if (baseUrl) {
          if (isHttps) {
            handleHttpsJump(baseUrl);
          } else if (getQueryParam(baseUrl, "xpUserId")) {
            handleXpUserIdJump(baseUrl);
          } else if (isJump === 2) {
            handleFileDownload(jumpUrl);
          } else {
            handleInternalJump(jumpUrl, name);
          }
        }
        break;
    }
  },
  jumpToNewsDetail: (event) => {
    const {
      id,
      is_jump: isJump,
      jump_url: jumpUrl,
      title
    } = event.currentTarget.dataset.item;
    if (isJump === 0) {
      wx.navigateTo({
        url: `/pages/campus-news-detail/campus-news-detail?id=${id}&name=${title}`
      });
    } else if (isJump === 1) {
      wx.navigateTo({
        url: `/pages/web-view/web-view?url=${encodeURIComponent(jumpUrl)}`
      });
    } else if (isJump === 2) {
      wx.showLoading({
        title: "正在打开文件"
      });
      wx.downloadFile({
        url: jumpUrl,
        timeout: 30000,
        success: (res) => {
          wx.hideLoading();
          const {
            tempFilePath
          } = res;
          wx.openDocument({
            filePath: tempFilePath,
            success: console.log,
            fail: console.log
          });
        },
        fail: (error) => {
          wx.hideLoading();
          wx.showToast({
            icon: "none",
            title: error.errMsg
          });
        },
        complete: console.log
      });
    }
  }
};

module.exports = utils;