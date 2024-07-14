const baseUrl = "https://oe.schoolpi.net/miniapp";

const showError = (message) => {
  wx.showToast({
    title: message,
    icon: "none"
  });
};

const handleResponse = (response, resolve, reject) => {
  if (response.data.errcode === 0) {
    if (response.data.data === undefined) {
      resolve(response.data);
    } else {
      resolve(response.data.data);
    }
  } else {
    console.error(response.data);
    wx.showToast({
      title: response.data.errmsg,
      icon: "none"
    });
    reject(response.data.errmsg);
  }
};

const api = {
  get: function (url, data = {}) {
    const configData = wx.getStorageSync("WelcomeConfigData");
    if (url || configData) {
      const headers = {
        "App-Type": 1,
        Version: "v1"
      };
      if (configData.schoolid) headers.schoolid = configData.schoolid;
      if (configData.token) headers["Face-Token"] = configData.token;

      return new Promise((resolve, reject) => {
        wx.request({
          url: `${baseUrl}${url}`,
          data,
          method: "GET",
          header: headers,
          success: (response) => handleResponse(response, resolve, reject),
          fail: () => {
            showError("网络异常 ~");
            reject(null);
          }
        });
      });
    }
    console.error("请求出错");
  },
  post: function (url, data = {}) {
    const configData = wx.getStorageSync("WelcomeConfigData");
    if (url || configData) {
      const headers = {
        "content-type": "application/json",
        "App-Type": 1,
        Version: "v1"
      };
      if (configData.schoolid) headers.schoolid = configData.schoolid;
      if (configData.token) headers["Face-Token"] = configData.token;

      return new Promise((resolve, reject) => {
        wx.request({
          url: `${baseUrl}${url}`,
          data,
          header: headers,
          method: "POST",
          success: (response) => handleResponse(response, resolve, reject),
          fail: () => {
            showError("网络异常 ~");
            reject(null);
          }
        });
      });
    }
    console.error("请求出错");
  },
  log: function (message, level = 1) {
    if (level === 1) console.log(`[welcome] => ${message}`);
    if (level === 2) console.error(`[welcome] => ${message}`);
  },
  getConfigData: function () {
    const configData = wx.getStorageSync("WelcomeConfigData");
    return {
      token: null,
      schoolid: 1,
      configId: null,
      ...configData
    };
  },
  initWelcome: function (config) {
    if (config) {
      let configData = wx.getStorageSync("WelcomeConfigData");
      if (!configData) {
        configData = {
          token: null,
          schoolid: 1,
          configId: null
        };
      }
      wx.setStorageSync("WelcomeConfigData", {
        ...configData,
        ...config
      });
    } else {
      console.error("initWelcome 失败");
    }
  },
  getNextConfig: function (type) {
    switch (type) {
      case 1:
        return {
          url: "/welcome/image/image",
            title: "自传人像照片",
            type
        };
      case 2:
        return {
          url: "/welcome/identity/identity",
            title: "上传身份证照片",
            type
        };
      case 3:
        return {
          url: "/welcome/living/index/index",
            title: "活体核验",
            type
        };
      case 4:
        return {
          url: "/welcome/loading/loading",
            title: "人像核验",
            type
        };
      case 5:
        return {
          url: "/welcome/signature/signature",
            title: "核验签名",
            type
        };
      case 9:
        return {
          url: "/welcome/result/result?type=0",
            title: "核验结果",
            type
        };
      case 0:
        throw new Error("type 为 0");
      default:
        throw new Error("错误类型");
    }
  }
};

module.exports = api;