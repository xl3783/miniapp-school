const app = getApp();
const globalData = app.globalData;

const defaultHeaders = {
  'content-type': 'application/json',
  'App-Type': globalData.appType,
  Version: globalData.version,
  schoolid: globalData.schoolid,
  'Open-Id': globalData.openid,
  'Inviter-Phone': globalData.inviter_phone,
  'Channel-Id': globalData.channel_id,
  'Inviter-Id': globalData.inviter_id
};

class Http {
  constructor() {}

  get(url, data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: 'GET',
        data,
        timeout: 10000,
        header: {
          ...defaultHeaders,
          ...headers
        },
        success: (res) => this.handleSuccess(res, resolve, reject),
        fail: (err) => this.handleError(err)
      });
    });
  }

  post(url, data = {}, headers = {}, customError) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: 'POST',
        data,
        timeout: 10000,
        header: {
          ...defaultHeaders,
          ...headers
        },
        success: (res) => this.handleSuccess(res, resolve, reject, customError),
        fail: (err) => this.handleError(err)
      });
    });
  }

  put(url, data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: 'PUT',
        data,
        timeout: 10000,
        header: {
          ...defaultHeaders,
          ...headers
        },
        success: (res) => this.handleSuccess(res, resolve, reject),
        fail: (err) => this.handleError(err)
      });
    });
  }

  handleSuccess(res, resolve, reject, customError) {
    if (res.statusCode === 200) {
      if (res.data.err) {
        reject(res.data.err)
      } else {
        resolve(res.data)
      }
      // if (res.data.errcode === 1) {
      //   if (customError) {
      //     this.showError(res.data.errmsg);
      //   }
      //   resolve(res.data);
      // } else if (res.data.errcode === 2001) {
      //   resolve(res.data);
      // } else if (res.data.errcode === 5005) {
      //   wx.showModal({
      //     content: "您还不是校友，请先完成校友认证再进行此操作",
      //     showCancel: false,
      //     confirmText: "去认证",
      //     success: (modalRes) => {
      //       if (modalRes.confirm) {
      //         wx.navigateTo({
      //           url: "/xpAlumni/xpalumni-certification/xpalumni-certification"
      //         });
      //       }
      //     }
      //   });
      // } else {
      //   resolve(res.data);
      // }
    } else {
      this.showError("网络繁忙 ~");
      reject();
    }
  }

  handleError(err) {
    console.error(err);
    const errorMessage = err.errMsg === "request:fail timeout" || err.errMsg === "request:fail 请求超时" ? "网络异常，请重新进入" : "请检查网络";
    this.showError(errorMessage);
  }

  showError(message) {
    wx.hideLoading();
    wx.showToast({
      title: message,
      icon: "none"
    });
  }
}

module.exports = Http;