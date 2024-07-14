// var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http")), e = require("../../utils/util"), a = getApp(), i = new t.default.Http();

Component({
  properties: {
    load_type: {
      type: Number,
      value: 1
    },
    props_data: {
      type: Object,
      value: {}
    },
    num: {
      type: Number,
      value: 10
    },
    list: {
      type: Array,
      value: [],
      observer: function (t) {
        var e = t[this.data.activeIndex],
          a = e.category_ids,
          i = e.type;
        this.setData({
          category_ids: a,
          type: i,
          page: 0,
          hasMore: !0,
          dataList: []
        }), this.getListById();
      }
    }
  },
  data: {
    activeIndex: 0,
    globalColor: "#1487FF",
    page: 0,
    hasMore: !0,
    columnId: 0,
    dataList: [],
    category_ids: "",
    type: ""
  },
  pageLifetimes: {
    show: function () {
      // this.setData({
      //   globalColor: a.globalData.globalColor
      // });
    }
  },
  methods: {
    chooseTab: function (t) {
      wx.vibrateShort({
        type: "medium"
      });
      var e = t.currentTarget.dataset.item,
        a = e.category_ids,
        i = e.type;
      this.setData({
        page: 0,
        total: 0,
        category_ids: a,
        type: i,
        hasMore: !0,
        dataList: [],
        activeIndex: t.currentTarget.dataset.index
      }), this.getListById();
    },
    getListById: function () {
      let res = {
        "errcode": 0,
        "errmsg": "ok",
        "data": [{
          "id": 451,
          "title": "2023新生报到即问即答",
          "type": 1,
          "column_id": "11,4,3",
          "thumb_url": "",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-08-23",
          "show_app": "[1, 2, 3, 4, 5, 8, 9]"
        }, {
          "id": 429,
          "title": "我校与荆州经开区签署战略合作协议",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/FoXk38YizRmwnfXxhoCg2lrPSBESLr0XXOYigXma.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-04-19",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 430,
          "title": "荆州纺织服装职业教育联盟在荆州职业技术学院成立",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/YEK1eNQeSc4JTvT3riQGOR3JNn09MwCkZb1yGYvK.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-04-17",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 431,
          "title": "我校举办2023年医护类专场校园招聘会",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/etW7HG1cKi02GbY0aQLQ9NBYsqufvy70QwmkI47K.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-04-13",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 432,
          "title": "学校举行“湖北江瀚新材” 订单班开班仪式",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/Xkgf4CaJs4vQtSOSb7cWv5HM33DAAXU30kFeBx90.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-04-04",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 428,
          "title": "【“访企拓岗”进行时】校长周文率队前往荆州市​中医医院考察交流",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/k6ndSzrozoifMQdiy7wmFkW0FTwWnPKmvooIlByA.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-03-13",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 427,
          "title": "【“访企拓岗”进行时】党委书记杨冰赴美的荆州产业园考察调研",
          "type": 1,
          "column_id": "4",
          "thumb_url": "",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-03-09",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 426,
          "title": "【“访企拓岗”进行时】校长周文率队前往武汉开展访企拓岗行动",
          "type": 1,
          "column_id": "4",
          "thumb_url": "",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2023-03-03",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 425,
          "title": "【“访企拓岗”进行时】党委书记杨冰率队赴荆大（荆州）汽车配件有限公司走访调研",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/xLOblpYVvGt4Hd09nQpRjwQN5zPVoYr0yN4i2vJ7.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2022-12-05",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }, {
          "id": 424,
          "title": "【“访企拓岗”进行时】党委书记杨冰率队赴联仕（湖北）新材料有限公司走访调研",
          "type": 1,
          "column_id": "4",
          "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/c10xkNz8AFzxxcu0N2px30GYXOHTWFmgH8rpPjXk.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
          "is_jump": 0,
          "jump_url": "",
          "is_top": 0,
          "create_time": "2022-11-14",
          "show_app": "[1, 2, 3, 4, 5, 8]"
        }],
        "total": 21
      };
      this.setData({
        page: 1,
        dataList: res.data,
        hasMore: res.total
      });
      // var t = this;
      // if (this.data.hasMore) {
      //   var e = this.properties.num,
      //     r = this.data,
      //     o = r.page,
      //     s = r.dataList,
      //     p = r.category_ids,
      //     d = r.type,
      //     l = o + 1;
      //   i.get(a.globalData.baseUrl + "/miniapp/pbl", {
      //     page: l,
      //     page_size: e,
      //     category_ids: p,
      //     type: d
      //   }).then(function (a) {
      //     t.setData({
      //       page: l,
      //       dataList: s.concat(a.data),
      //       hasMore: l * e < a.total
      //     });
      //   });
      // }
    },
    goDetail: function (t) {
      (0, e.getPhoneLogin)().then(function () {
        var a = t.currentTarget.dataset,
          i = a.type,
          r = a.item;
        1 == i ? (0, e.jumpToNewsDetail)(t) : 2 == i ? wx.previewImage({
          urls: [r.image_url],
          current: r.image_url
        }) : 3 == i && wx.navigateTo({
          url: "/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=" + r.id
        });
      });
    }
  }
});