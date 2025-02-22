import Http from '../../../utils/http';
const app = getApp();
const httpClient = new Http();
import {getFaculties} from "../../../apis/index";

Component({
  properties: {
    height: {
      type: Number,
      value: 550
    },
    pageColor: {
      type: String,
      value: "#F6F7F8"
    },
    wxIdForSystem: {
      type: String,
      value: "123445"
    },
    fmType: {
      type: Number,
      value: "",
      observer: function (newType, oldType) {
        if (newType) {
          console.log("time->" + newType);
          this.getList(newType);
        }
      }
    }
  },
  data: {
    style: 1,
    list: [],
    colorList: [
      "../../../assets/image/z1.png",
      "../../../assets/image/z2.png",
      "../../../assets/image/z3.png",
      "../../../assets/image/z4.png",
      "../../../assets/image/z5.png",
      "../../../assets/image/z6.png",
      "../../../assets/image/z7.png",
      "../../../assets/image/z8.png"
    ],
    topNum: 0,
    department_alias: "系部",
    major_alias: "专业",
    show: false,
    total: 0,
    page: 1,
    page_size: 20,
    isBottom: false
  },
  lifetimes: {
    attached: function () {}
  },
  methods: {
    goDetail: function (event) {
      const item = event.currentTarget.dataset.item;
      if (item.intro_type == 1) {
        wx.navigateTo({
          url: "/pages/enroll-major-intro-new/enroll-major-intro-new?id=" + item.id + "&name=" + item.name
        });
      } else {
        wx.redirectTo({
          url: "/pages/web-view/web-view?url=" + encodeURIComponent(item.intro_url)
        });
      }
    },
    getList: async function (type) {
      const that = this;
      wx.showLoading({
        title: "加载中"
      });

      const {
        page,
        page_size,
        list,
        colorList
      } = this.data;
      const params = {
        page: page,
        page_size: page_size
      };
      if (type) {
        params.type = type;
      }
      let faculityes = await getFaculties(page, page_size);
      const newList = list.concat(faculityes.data);
      const colorListLength = colorList.length;
      const totalItems = newList.length;
      const repeatCount = Math.ceil(totalItems / colorListLength);
      let repeatedColors = [];

      for (let i = 0; i < repeatCount; i++) {
        repeatedColors = repeatedColors.concat(colorList);
      }

      const total = faculityes.meta.pagination.total;
      wx.hideLoading();
      that.setData({
        colorList: repeatedColors,
        list: newList,
        total: total,
        globalColor: app.globalData.globalColor,
        isBottom: !(newList.length < total),
        show: true
      });
    },
    getMore: function () {
      const {
        page,
        total,
        list,
        fmType
      } = this.data;
      if (list.length < total) {
        this.setData({
          page: page + 1,
          isBottom: false
        });
        this.getList(fmType);
      } else {
        this.setData({
          isBottom: true
        });
      }
    }
  }
});