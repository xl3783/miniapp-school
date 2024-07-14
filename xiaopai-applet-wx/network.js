class Network {
  constructor(option) {
    this.option = option;

    this._request = async (method, url, data, skipToken) => {
      if (this.config.resourceCallback === undefined) {
        this.config.resourceCallback = this.option.resourceCallback || this._resourceCallback;
      }
      if (this.config.tokenKey === undefined) {
        this.config.tokenKey = this.option.tokenKey || "token";
      }
      this.config.header = {
        ...this.option.header,
        ...this.config.header
      };

      if (!skipToken && this.tokenPromise) {
        await this.tokenPromise;
      }

      if (this.getToken()) {
        this.config.header[this.config.tokenKey] = this.getToken();
      }

      const requestPromise = new Promise((resolve, reject) => {
        wx.request({
          method,
          data,
          header: this.config.header,
          url: this.config.url + url,
          success: async (response) => {
            try {
              const result = await this.config.resourceCallback({
                httpCode: response.statusCode,
                httpMsg: response.errMsg,
                jsonData: response.data,
              });
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
          fail: (error) => {
            console.log(error);
            reject("网络异常");
          },
        });
      });

      return requestPromise;
    };

    this._resourceCallback = async (response) => {
      if (response.httpCode === 200) {
        return response.jsonData;
      }
      return Promise.reject(response.httpMsg);
    };
  }

  getContext(key, skipToken) {
    if (this.option.configs.length === 0) {
      throw new Error("请配置网络相关配置");
    }
    key = key || this.option.configs[0].key;
    this.config = this.option.configs.find((config) => config.key === key);

    return {
      get: (url, data) => this._request("GET", url, data, skipToken),
      post: (url, data) => this._request("POST", url, data, skipToken),
    };
  }

  setBaseHeader(key, value) {
    this.option.header[key] = value;
  }

  setHeader(key, value) {
    this.config.header[key] = value;
  }

  setTokenPromise(tokenPromise) {
    this.tokenPromise = tokenPromise;
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  getConfig() {
    return this.config;
  }
}

export {
  Network
};