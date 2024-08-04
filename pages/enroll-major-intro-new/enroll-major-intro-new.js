const Http = require("../../utils/http");
const {getFaculty} = require("../../apis/index");
const appInstance = getApp();
const httpInstance = new Http();

Page({
  data: {
    navList: [],
    facultyList: [],
    majorList: [],
    active: 0,
    showDetail: false,
    globalColor: "",
    detailName: "",
    detailIntro: "",
    showIntro: false,
    showMajor: false,
    showAll: "",
    page: 1,
    pageSize: 20,
    total: 0,
    isBottom: false
  },
  close: function () {
    this.setData({
      showDetail: false,
      detailName: ""
    });
  },
  mediaError: function (event) {
    console.log(event);
  },
  chooseNav: function (event) {
    this.setData({
      active: event.currentTarget.dataset.index
    });
  },
  lookDetail: function (event) {
    const {
      item
    } = event.currentTarget.dataset;
    const {
      id,
      name,
      intro_type: introType,
      intro_url: introUrl,
      intro_text: introText
    } = item;
    this.setData({
      detailName: name
    });
    if (introType === 1) {
      if (introText) {
        wx.navigateTo({
          url: `/pages/enroll-major-intro-detail-new/enroll-major-intro-detail-new?id=${id}&intro=${encodeURIComponent(introText)}`
        });
      }
    }

    // if (introType === 1) {
    //   if (introText) {
        // wx.navigateTo({
        //   url: `/pages/enroll-major-intro-detail-new/enroll-major-intro-detail-new?id=${id}&intro=${introText}`
        // });
      //   if (appInstance.globalData.major_intro_style === 1) {
      //     // httpInstance.get(`${appInstance.globalData.baseUrl}/miniapp/faculty/specialty/${id}`).then(response => {
      //     //   if (response.errcode === 0 && response.data) {
      //     //     this.setData({
      //     //       detailName: response.data.name,
      //     //       showDetail: true,
      //     //       detailIntro: response.data.intro_text
      //     //     });
      //     //   }
      //     // });
      //     this.setData({
      //       showDetail: true,
      //       detailIntro: introText
      //     });
      //   } else {
      //     wx.navigateTo({
      //       url: `/pages/enroll-major-intro-detail-new/enroll-major-intro-detail-new?id=${id}`
      //     });
      //   }
      // }
    // } else {
    //   wx.navigateTo({
    //     url: `/pages/web-view/web-view?url=${encodeURIComponent(introUrl)}`
    //   });
    // }
  },
  onLoad: async function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"]
    });

    const {
      id,
      name,
      showAll
    } = options;
    this.setData({
      name: decodeURIComponent(name),
      id: id,
      showAll: showAll || "",
      navList: [{
        cate: "概况"
      }, {
        cate: "专业"
      }],
      globalColor: appInstance.globalData.globalColor
    });

    await this.getList();
  },
  linktap: function (event) {
    const url = event.detail.href;
    const fileType = url.substring(url.lastIndexOf(".") + 1);

    if (["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(fileType)) {
      wx.downloadFile({
        url: url,
        success: function (downloadResponse) {
          wx.openDocument({
            filePath: downloadResponse.tempFilePath
          });
        }
      });
    }
  },
  getList: async function () {
    const {
      page,
      pageSize,
      majorList,
      navList,
      showAll,
      id
    } = this.data;
    wx.showLoading({
      title: "加载中"
    });
    const faculty = await getFaculty({id: id});

    this.setData({
      majorList: faculty.data.faculty_majors,
      intro: faculty.data.intro_text,
      showIntro: true,
      showMajor: true
    });
    wx.hideLoading();

    // if (showAll !== "1") {
    //   this.setData({
    //     showIntro: false
    //   });
    //   return httpInstance.get(`${appInstance.globalData.baseUrl}/miniapp/specialty`, {
    //     page,
    //     page_size: pageSize
    //   }).then(response => {
    //     const {
    //       count,
    //       list
    //     } = response;
    //     const updatedNavList = navList.slice(1);

    //     if (list && list.length > 0) {
    //       this.setData({
    //         navList: updatedNavList,
    //         showMajor: true
    //       });
    //     }
    //     this.setData({
    //       majorList: majorList.concat(list),
    //       total: count
    //     });
    //     wx.hideLoading();
    //   });
    // }

    // return httpInstance.get(`${appInstance.globalData.baseUrl}/miniapp/faculty/${id}`).then(response => {
    //   const {
    //     intro_text,
    //     specialties
    //   } = response.data;
    //   const updatedNavList = navList.slice(1);
    //
    //   if (!intro_text && specialties.length > 0) {
    //     this.setData({
    //       navList: updatedNavList,
    //       showIntro: false,
    //       showMajor: true
    //     });
    //   } else if (intro_text && specialties.length === 0) {
    //     this.setData({
    //       navList: [{
    //         cate: "概况"
    //       }],
    //       showIntro: true,
    //       showMajor: false
    //     });
    //   } else if (intro_text && specialties.length > 0) {
    //     this.setData({
    //       navList,
    //       showIntro: true,
    //       showMajor: true
    //     });
    //   } else {
    //     this.setData({
    //       navList: [],
    //       showIntro: false,
    //       showMajor: false
    //     });
    //   }
    //
    //
    // });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {
    const {
      page,
      pageSize,
      total
    } = this.data;
    if (page * pageSize < total) {
      this.setData({
        page: page + 1,
        isBottom: false
      });
      this.getList();
    } else {
      this.setData({
        isBottom: true
      });
    }
  },
  // onShareAppMessage: function() {
  //     appInstance.reporting.share({ type: 1, value: "" }, getCurrentPages());
  //     return { title: this.data.name };
  // },
  // onShareTimeline: function() {
  //     appInstance.reporting.share({ type: 2, value: "" }, getCurrentPages());
  //     return { title: this.data.name, imageUrl: appInstance.globalData.schoollogo };
  // }
});