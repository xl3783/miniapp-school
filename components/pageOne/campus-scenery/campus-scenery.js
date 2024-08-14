// const Http = require("../../../utils/http");
import {getSceneries, baseUrl} from "../../../apis/index";
var util = require("../../../utils/util");

const app = getApp();
// const httpRequest = new Http.Http();

const data = {
    "errcode": 0,
    "errmsg": "ok",
    "style": "2",
    "data": [{
        "id": 1,
        "title": "学校大门",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20210112\/bcefglmopruvwxBCEGHKLMPQTVWZ3478.jpg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2021-01-07 15:22:07",
        "update_time": "2021-01-07 15:22:07",
        "views_num": 0,
        "intro": null
    }, {
        "id": 46,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abdefgikmnpqrtuwAHILNPTUVWXY2347.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:29:48",
        "update_time": "2022-04-07 23:29:48",
        "views_num": 0,
        "intro": null
    }, {
        "id": 47,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abcfkmopqstvxzBDEFGHIJKQSVYZ2467.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:31:07",
        "update_time": "2022-04-07 23:31:07",
        "views_num": 0,
        "intro": null
    }, {
        "id": 48,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/aefikmnpqswyzABCEFGHLPTVWXY35679.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:41:14",
        "update_time": "2022-04-07 23:41:14",
        "views_num": 0,
        "intro": null
    }, {
        "id": 49,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/adefhikloptuwyzABCDEGINOUWX13569.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:42:32",
        "update_time": "2022-04-07 23:42:32",
        "views_num": 0,
        "intro": null
    }, {
        "id": 50,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/adefghjkmnoqrsuxBEFMNPQRSUVW3469.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:44:02",
        "update_time": "2022-04-07 23:44:02",
        "views_num": 0,
        "intro": null
    }, {
        "id": 51,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/acfhiqrswyzBCEGHMOPRSVWXYZ034579.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:45:22",
        "update_time": "2022-04-07 23:45:22",
        "views_num": 0,
        "intro": null
    }, {
        "id": 52,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/cdijnoqryzCDFGHIJNPQRVWXYZ013478.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:46:47",
        "update_time": "2022-04-07 23:46:47",
        "views_num": 0,
        "intro": null
    }, {
        "id": 53,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abhjmpqrsuvxyzACFGJPQSUXYZ123479.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:47:53",
        "update_time": "2022-04-07 23:47:53",
        "views_num": 0,
        "intro": null
    }, {
        "id": 54,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abefgilnopqvwyzABHIJLNPWXY135689.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:48:42",
        "update_time": "2022-04-07 23:48:42",
        "views_num": 0,
        "intro": null
    }, {
        "id": 55,
        "title": "大学生活动中心",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/cdfghimnsuvwxABCEHJKOPRUVXY01789.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:49:08",
        "update_time": "2022-04-07 23:49:08",
        "views_num": 0,
        "intro": null
    }, {
        "id": 62,
        "title": "学校食堂",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/ceghjkmrtuyzACDEGHIKLSTWXY012678.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:50:58",
        "update_time": "2022-04-07 23:50:58",
        "views_num": 0,
        "intro": null
    }, {
        "id": 63,
        "title": "综合楼",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abcdefiklnoqwxzABCHJKMOPQTWYZ256.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:51:45",
        "update_time": "2022-04-07 23:51:45",
        "views_num": 0,
        "intro": null
    }, {
        "id": 64,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abdfhkmpqruvxyzBFGIKMNPQRVYZ2379.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:54:00",
        "update_time": "2022-04-07 23:54:00",
        "views_num": 0,
        "intro": null
    }, {
        "id": 65,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/abefijklnpqrvwxyzBFHMOQTVWY24579.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:54:16",
        "update_time": "2022-04-07 23:54:16",
        "views_num": 0,
        "intro": null
    }, {
        "id": 66,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/bcdefjknopsvwyCDEFHJKMRTUWXY0567.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:54:30",
        "update_time": "2022-04-07 23:54:30",
        "views_num": 0,
        "intro": null
    }, {
        "id": 67,
        "title": "校园一隅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20220407\/chjkmopqtuvwxEFJKLMPQRSUVWY12479.jpeg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 1,
        "is_del": 0,
        "create_time": "2022-04-07 23:54:55",
        "update_time": "2022-04-07 23:54:55",
        "views_num": 0,
        "intro": null
    }, {
        "id": 24,
        "title": "教学楼群",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20210327\/acghjmnopqstuvwyABCDEFKLSWY02479.jpg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 49,
        "is_del": 0,
        "create_time": "2021-03-27 15:46:21",
        "update_time": "2021-03-27 15:46:21",
        "views_num": 0,
        "intro": null
    }, {
        "id": 25,
        "title": "学术报告厅",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20210327\/bcfghioqrwxzABCGHJKLMPQRUVWZ0159.jpg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 49,
        "is_del": 0,
        "create_time": "2021-03-27 15:48:06",
        "update_time": "2021-03-27 15:48:06",
        "views_num": 0,
        "intro": null
    }, {
        "id": 3,
        "title": "鸟瞰图",
        "type": 1,
        "image_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/image\/20210112\/bfghlmortuvxyABCDJLNPQRUVWXY1268.jpg?x-oss-process=image\/resize,h_1200,w_2400\/auto-orient,1\/quality,Q_80",
        "sort": 50,
        "is_del": 0,
        "create_time": "2021-01-07 15:22:18",
        "update_time": "2021-01-07 15:22:18",
        "views_num": 0,
        "intro": null
    }],
    "page": "1",
    "page_size": "20",
    "total": 66
}

Component({
    properties: {
        height: {
            type: Number,
            value: 550
        },
        pageColor: {
            type: String,
            value: "#fff"
        },
        top: {
            type: Number,
            value: 0
        },
        wxIdForSystem: {
            type: String,
            value: "123445"
        },
        categoryIds: {
            type: String,
            value: "",
            observer: function(newVal, oldVal) {
                console.log("Category IDs updated:", newVal);
                // this.getCategoryList(0);
            }
        }
    },
    data: {
        globalColor: "",
        showType: false,
        style: 1,
        navList: [],
        types: [],
        active: 0,
        currentList: [],
        indexCurrent: -1,
        page: 1,
        pageSize: 20,
        total: 1,
        type: 0,
        isBottom: false,
        topNum: 0,
        dataIsLoaded: false
    },
    lifetimes: {
        ready: function() {
            console.log("Category IDs:", this.properties.categoryIds);
            if (!this.properties.categoryIds) {
                this.fetchData();
            }
        }
    },
    methods: {
        chooseNav: function(event) {
            const { index, id } = event.currentTarget.dataset;
            this.setData({
                indexCurrent: -1,
                active: index,
                type: id,
                page: 1,
                currentList: []
            });
            this.getCategoryList(id);
        },
        previewImage: function(event) {
            const imageUrl = event.currentTarget.dataset.img;
            wx.previewImage({
                current: imageUrl,
                urls: [imageUrl]
            });
        },
        fetchData: async function() {
            const self = this;
            const { page, pageSize, currentList } = this.data;

            wx.showLoading({
                title: "加载中"
            });

            const response = await getSceneries({page, pageSize});
            response.data.forEach(item => {
                item.image_url = baseUrl + item.image.url;
            })
            const updatedList = currentList.concat(response.data);
            const total = util.getResTotal(response);
            const newState = {
                showType: !!response.types && response.types.length > 0,
                style: "2",
                types: response.types || [],
                currentList: updatedList,
                total: total,
                globalColor: app.globalData.globalColor,
                dataIsLoaded: true
            };
            self.setData(newState);
            if (page * pageSize >= total) {
                this.setData({
                    isBottom: true
                });
            }
            wx.hideLoading();

            // httpRequest.get(app.globalData.baseUrl + "/miniapp/scenery", {
            //     page: page,
            //     page_size: pageSize
            // }).then(function(response) {
            //     const updatedList = currentList.concat(data.data);
            //     const newState = {
            //         showType: !!response.types && response.types.length > 0,
            //         style: response.style,
            //         types: response.types || [],
            //         currentList: updatedList,
            //         total: response.total,
            //         globalColor: app.globalData.globalColor,
            //         dataIsLoaded: true
            //     };
            //     self.setData(newState);
            //     wx.hideLoading();
            // });
        },
        getCategoryList: function(categoryType) {
            // const self = this;
            // const { page, pageSize, currentList } = this.data;
            // const categoryIds = this.properties.categoryIds;
            //
            // wx.showLoading({
            //     title: "加载中"
            // });
            //
            // httpRequest.get(app.globalData.baseUrl + "/miniapp/scenery", {
            //     page: page,
            //     page_size: pageSize,
            //     type: categoryType,
            //     category_ids: categoryIds
            // }).then(function(response) {
            //     const updatedList = currentList.concat(response.data);
            //     self.setData({
            //         dataIsLoaded: true,
            //         currentList: updatedList,
            //         style: response.style,
            //         total: response.total,
            //         types: response.types || [],
            //         type: categoryType,
            //         showType: !!categoryType,
            //         globalColor: app.globalData.globalColor
            //     });
            //     wx.hideLoading();
            // });
        },
        onReachBottom: function() {
            const { page, total, pageSize, type } = this.data;

            if (page * pageSize < total) {
                this.setData({
                    page: page + 1,
                    isBottom: false
                });
                this.fetchData();
                // this.getCategoryList(type);
            } else {
                this.setData({
                    isBottom: true
                });
            }
        }
    }
});
