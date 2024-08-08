const Http = require("../../utils/http");
const util = require("../../utils/util");
const {getArticles} = require("../../apis/index");
const app = getApp();
const appInstance = getApp();
const http = new Http();

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
            observer: function (newList) {
                const activeItem = newList[this.data.activeIndex];
                const categoryIds = activeItem.category_ids;
                const itemType = activeItem.type;
                this.setData({
                    category_ids: categoryIds,
                    type: itemType,
                    page: 0,
                    hasMore: true,
                    dataList: activeItem.content ? activeItem.content : []
                });
                this.getListById(activeItem);
            }
        }
    },
    data: {
        activeIndex: 0,
        globalColor: "#1487FF",
        page: 0,
        hasMore: true,
        columnId: 0,
        dataList: [],
        category_ids: "",
        type: ""
    },
    pageLifetimes: {
        show: function () {
            this.setData({
                globalColor: appInstance.globalData.globalColor
            });
        }
    },
    methods: {
        chooseTab: function (event) {
            wx.vibrateShort({
                type: "medium"
            });
            const selectedItem = event.currentTarget.dataset.item;
            const categoryIds = selectedItem.category_ids;
            const itemType = selectedItem.type;
            this.setData({
                page: 0,
                total: 0,
                category_ids: categoryIds,
                type: itemType,
                hasMore: true,
                dataList: selectedItem.content ? selectedItem.content : [],
                activeIndex: event.currentTarget.dataset.index
            });
            this.getListById(selectedItem);
        },
        getListById: async function (activeItem) {
            let tagId = activeItem.id;
            if (this.data.hasMore) {
                const pageSize = this.properties.num;
                const currentPage = this.data.page;
                const dataList = this.data.dataList;
                // const categoryIds = this.data.category_ids;
                // const itemType = this.data.type;
                const nextPage = currentPage + 1;
                const articles = await getArticles({tagId, nextPage, pageSize});
                articles.data.forEach(article => {
                    if (article.cover) {
                        article.thumb_url = appInstance.globalData.baseUrl + article.cover.url;
                    }
                })
                this.setData({
                    page: nextPage,
                    dataList: dataList.concat(articles.data),
                    hasMore: nextPage * pageSize < articles.meta.pagination.total
                });

                // http.get(app.globalData.baseUrl + "/miniapp/pbl", {
                //   page: nextPage,
                //   page_size: pageSize,
                //   category_ids: categoryIds,
                //   type: itemType
                // }).then((response) => {
                //   this.setData({
                //     page: nextPage,
                //     dataList: dataList.concat(response.data),
                //     hasMore: nextPage * pageSize < response.total
                //   });
                // });
            }
        },
        goDetail: function (event) {
            const dataset = event.currentTarget.dataset;
            const itemType = dataset.type;
            const itemData = dataset.item;
            if (itemType === "1") {
                util.jumpToNewsDetail(event);
            } else if (itemType === "2") {
                wx.previewImage({
                    urls: [itemData.image_url],
                    current: itemData.image_url
                });
            } else if (itemType === "3") {
                wx.navigateTo({
                    url: `/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=${itemData.id}`
                });
            }
            // util.getPhoneLogin().then(() => {
            //   const dataset = event.currentTarget.dataset;
            //   const itemType = dataset.type;
            //   const itemData = dataset.item;
            //   if (itemType === "1") {
            //     util.jumpToNewsDetail(event);
            //   } else if (itemType === "2") {
            //     wx.previewImage({
            //       urls: [itemData.image_url],
            //       current: itemData.image_url
            //     });
            //   } else if (itemType === "3") {
            //     wx.navigateTo({
            //       url: `/pages/campus-promotion-video-detail/campus-promotion-video-detail?id=${itemData.id}`
            //     });
            //   }
            // });
        }
    }
});