const {
  networkList
} = require("../config/index");
const {
  Network
} = require("../xiaopai-applet-wx/network");
const {
  Subscriber
} = require("../utils/reporting");
const {
  flattenApiData
} = require("../utils/customutil");
const qs = require("qs");

const initExtConfig = (app) => {
  const extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
  console.log(extConfig);
  app.globalData.schoolid = extConfig.schoolid ?? 1;
  app.globalData.appId = extConfig.appId;
  app.globalData.v = extConfig.lastMiniAppVersion;
  app.globalData.platform = wx.getSystemInfoSync().platform;
  app.globalData.baseUrl = extConfig.apiHost || "http://localhost:1337";
  console.log("app.globalData.baseUrl:", app.globalData.baseUrl)
};

const initReporting = (app) => {
  if (!app.reporting) {
    app.reporting = new Subscriber({
      source: "wechat",
      request_id: `${new Date().getTime()}`
    }, app);
  }
};

const initNetwork = async (app) => {
  const configs = networkList.map((item) => {
    if (item.key === "OE") {
      return {
        ...item,
        url: `${app.globalData.baseUrl}`
      };
    }
    return item;
  });
  console.log("configs", configs)

  app.network = new Network({
    configs,
    header: {
      "App-Type": 1,
      Version: "v1",
      schoolid: app.globalData.schoolid,
      "Inviter-Phone": app.globalData.inviter_phone,
      "Channel-Id": app.globalData.channel_id,
      "Inviter-Id": app.globalData.inviter_id
    },
    tokenKey: "Authorization",
    resourceCallback: async (response) => {
      const {
        httpCode,
        httpMsg,
        jsonData
      } = response;
      if (httpCode === 200) {
        return Promise.resolve(jsonData.data ?? jsonData);

        // if (jsonData.errcode === 0) {
        //   return Promise.resolve(jsonData.data ?? jsonData);
        // }
        // if (jsonData.errmsg.includes("签名")) {
        //   wx.showToast({
        //     title: jsonData.errmsg,
        //     icon: "none"
        //   });
        // }
        // return Promise.reject(jsonData.errmsg);
      }
      return Promise.reject(httpMsg);
    }
  });
};

const initToken = async (app) => {
  let token = wx.getStorageSync("user-token");
  // if (!token) {
  //   try {
  //     token = await refreshToken(app);
  //   } catch (error) {
  //     token = await obtainToken(app);
  //   }
  // }
  token = await obtainToken(app);
  if (!token) {
    token = await obtainToken(app);
  }
  wx.setStorageSync("user-token", token);
  return token;
};

const obtainToken = (app) => {
  debugger
  const networkContext = app.network.getContext("OE", true);
  return new Promise((resolve, reject) => {
    wx.login({
      success: async (res) => {
        // 发送res.code到后台换取openId,sessionKey,unionId
        debugger
        console.log(" resuccesss: ", res)
        try {
          debugger
          const response = await networkContext.post("/strapi-wechat-miniprogram-auth/login", {
            code: res.code
          });
          console.log("response", response)
          if (response.error) {
            reject(error)
          }
          const {
            user,
            token
          } = response;
          resolve({
            id: user.id,
            openid: user.openid,
            token
          });
        } catch (error) {
          reject(error);
        }
      },
      fail: res => {
        console.log("fail res: ", res)
      }
    })

    // if (wx.getEnterOptionsSync().scene === 1154) {
    //   resolve({
    //     id: 1,
    //     openid: 1,
    //     token: 1
    //   });
    // } else {
    //   wx.login({
    //     success: async (res) => {
    //       const {
    //         code
    //       } = res;
    //       try {
    //         const response = await networkContext.post("/wxLogin/silent", {
    //           appId: app.globalData.appId,
    //           code
    //         });
    //         const {
    //           id,
    //           openid,
    //           token
    //         } = response;
    //         resolve({
    //           id,
    //           openid,
    //           token
    //         });
    //       } catch (error) {
    //         reject(error);
    //       }
    //     }
    //   });
    // }
  });
};

const refreshToken = async (app) => {
  const networkContext = app.network.getContext("OE", true);
  const tokenData = wx.getStorageSync("user-token");
  if (tokenData) {
    const {
      token
    } = tokenData;
    const response = await networkContext.get("/refresh_token", {
      access_token: token.access_token,
      refresh_token: token.refresh_token
    });
    const {
      refresh_token,
      access_token
    } = response;
    tokenData.token = {
      refresh_token,
      access_token
    };
  }
  return tokenData;
};

const initTemplates = async (app) => {
  const networkContext = app.network.getContext("OE");
  const templates = await networkContext.get("/subscribe/templates");
  if (templates[1]) {
    app.globalData.tempId = templates[1];
  }
  app.globalData.formIds = [templates[2], templates[3]].filter(Boolean);
  if (templates[4]) {
    app.globalData.robotTempId = templates[4];
  }
  if (templates[5]) {
    app.globalData.alumniId = templates[5];
  }
};

const initData = async (app) => {
  try {
    console.log("initData---")
    const networkContext = app.network.getContext("OE");
    console.log(networkContext)
    const [userInfo, tabbar, config] =
    await Promise.all([getUserInfo(networkContext), getBottom(networkContext), getHomeConfig(networkContext)]);
    console.log("111111111")
    console.log("userInfo:", userInfo);
    console.log("tabbar:", tabbar);
    console.log("config:", config);
    app.globalData.userInfo = {
      ...app.globalData.userInfo,
      ...userInfo
    };
    wx.setStorage({
      key: "newuserinfo",
      data: {
        ...userInfo,
        token: {
          access_token: app.globalData.token
        }
      }
    });
    app.globalData.tabbar = flattenApiData(tabbar);

    // config
    //
    // const {
    //     configAttributes,
    //     logo
    // } = config;

    const {
      color,
      logo,
      name,
      live_list,
      is_showall,
      score_list,
      enroll_plan_list,
      major_intro_style,
      enroll_plan_style,
      score_style,
      is_get_phone,
      is_show_support,
      bgColor = "#ffffff",
      fontColor: fontColorType,
      enroll_type,
      title_position,
      title_name,
      no_mourn
    } = config.attributes;

    const globalConfig = {
      color,
      schoollogo: logo.data.attributes.url,
      schoolname: name,
      live_list,
      is_showall,
      score_list,
      enroll_plan_list,
      major_intro_style,
      enroll_plan_style,
      score_style,
      is_get_phone,
      enroll_type,
      bgColor,
      fontColor: fontColorType === 2 ? "#ffffff" : "#000000",
      title_position,
      title_name,
      is_show_support,
      no_mourn
    };

    wx.setStorageSync("globalConfig", globalConfig);
    Object.assign(app.globalData, globalConfig);
    wx.setNavigationBarColor({
      backgroundColor: globalConfig.bgColor,
      frontColor: globalConfig.fontColor
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserInfo = (networkContext) => {
  console.log("wx.getEnterOptionsSync().scene:", wx.getEnterOptionsSync().scene)
  return wx.getEnterOptionsSync().scene === 1154 ? Promise.resolve() : networkContext.get("/api/users/me");
};

const getBottom = (networkContext) => {
  const query = qs.stringify({
    populate: {
      bottom_items: {
        populate: {
          icon_url: {
            fields: ["url"],
          }
        },
        sort: ['sort:asc'],
      }
    },

  }, {
    encodeValuesOnly: true, // prettify URL
  });
  return networkContext.get(`/api/bottom?${query}`);
};

const getHomeConfig = (networkContext) => {
  return networkContext.get("/api/home-config?populate=*");
};

module.exports = {
  initExtConfig,
  initReporting,
  initNetwork,
  initToken,
  initTemplates,
  initData,
  getUserInfo
};