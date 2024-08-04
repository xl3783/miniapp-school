import Http from '../../../utils/http';
import {flattenApiData, flattenAttributes} from "../../../utils/customutil";
import {getArticles, getTags} from "../../../apis/index";

const appInstance = getApp();
const httpInstance = new Http();

const banner = {
    "id": 1377,
    "type": 1,
    "position": 1,
    "is_float": 0,
    "extend": null,
    "style_code": 1,
    "is_show_logo": 1,
    "title": "荆州职业技术学院2",
    "height_type": 3,
    "align": 2,
    "style": 2,
    "title_type": 1,
    "is_show_name": 1,
    "content": []
}

const notice = {
    "id": 1378,
    "type": 2,
    "position": 2,
    "is_float": 0,
    "extend": null,
    "style_code": 1,
    "style": 1,
    "num": 2,
    "icon_url_full": "",
    "icon_type": 0,
    "image_url_full": "",
    "icon_url": "",
    "content": []
}

const nav = {
    "id": 1379,
    "type": 3,
    "position": 3,
    "is_float": 0,
    "extend": null,
    "style_code": 1,
    "line_show_style": 1,
    "style": 1,
    "line_num": 4,
    "font_size": 26,
    "content": []
}

const vr = {
    "id": 1380,
    "type": 4,
    "position": 4,
    "is_float": 0,
    "extend": null,
    "style_code": 1,
    "line_num": 1,
    "line_show_style": 0,
    "style": 1,
    "title": "",
    "title_show": 2,
    "content": []
}

const vedios = {
    "id": 1381,
    "type": 4,
    "position": 5,
    "is_float": 0,
    "extend": null,
    "style_code": 1,
    "line_num": 2,
    "line_show_style": 0,
    "style": 1,
    "title": "",
    "title_show": 2,
    "content": []
}

const articles = {
    "id": 1382,
    "type": 9,
    "position": 6,
    "is_float": 0,
    "extend": null,
    "style_code": 1,
    "img_position": 2,
    "show_create_time": 1,
    "load_type": 2,
    "num": 10,
    "data": [{
        "name": "招生信息",
        "category_ids": "3",
        "type": 1,
        "content": [{
            "id": 460,
            "title": "被国家一流研究院录取，荆州一高职生实现人生逆袭！",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20240615\/VEOnQQvaCcBlY8oJKT9EGGyJu8hmm5HapMgPZSar.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "https:\/\/mp.weixin.qq.com\/s\/SKS3Ws10INURp06tIpAqIg",
            "is_top": 1,
            "create_time": "2024-06-15",
            "show_app": "[1, 8]",
            "column_id": "3"
        }, {
            "id": 459,
            "title": "荆州职业技术学院 2024年高职单招考试成绩查询",
            "type": 1,
            "thumb_url": "",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 1,
            "create_time": "2024-04-04",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 458,
            "title": "2024年单独考试招生:智能网联汽车技术专业职业技能测试大纲",
            "type": 1,
            "thumb_url": "",
            "is_jump": 2,
            "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/22b0298776a28b97022e19a515c9f188.docx",
            "is_top": 0,
            "create_time": "2024-03-18",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 457,
            "title": "2024年单独考试招生:应用化工技术专业职业技能测试大纲",
            "type": 1,
            "thumb_url": "",
            "is_jump": 2,
            "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/71a4f8f743a013b1fe6eb0cec70a9297.docx",
            "is_top": 0,
            "create_time": "2024-03-18",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 456,
            "title": "2024年单独考试招生:文化素质测试大纲",
            "type": 1,
            "thumb_url": "",
            "is_jump": 2,
            "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/ba71da8a3b46168c103c58ee1e5c3ea6.doc",
            "is_top": 0,
            "create_time": "2024-03-18",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 455,
            "title": "2024年单独考试招生:人力资源管理专业职业技能测试大纲",
            "type": 1,
            "thumb_url": "",
            "is_jump": 2,
            "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/8ea3377495cce10e3d5836b8b13fa698.doc",
            "is_top": 0,
            "create_time": "2024-03-18",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 454,
            "title": "2024年单独考试招生:酿酒技术专业职业技能测试大纲",
            "type": 1,
            "thumb_url": "",
            "is_jump": 2,
            "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/27468e875eb788b27559878429e15bb2.docx",
            "is_top": 0,
            "create_time": "2024-03-18",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 453,
            "title": "2024年单独考试招生:服装与服饰设计专业职业技能测试大纲",
            "type": 1,
            "thumb_url": "",
            "is_jump": 2,
            "jump_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/doc\/20240318\/65f23d2241b21f6aed93964f2c04f6fe.docx",
            "is_top": 0,
            "create_time": "2024-03-18",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "3"
        }, {
            "id": 452,
            "title": "荆州职业技术学院2024年单独考试招生简章",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20240314\/wpQo45zO2Jjd4tgqce05w55bL1hMmIX3FPywGhuy.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2024-03-14",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "11,3"
        }, {
            "id": 451,
            "title": "2023新生报到即问即答",
            "type": 1,
            "thumb_url": "",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-08-23",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "11,4,3"
        }]
    }, {
        "name": "就业信息",
        "category_ids": "4",
        "type": 1,
        "content": [{
            "id": 451,
            "title": "2023新生报到即问即答",
            "type": 1,
            "thumb_url": "",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-08-23",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "11,4,3"
        }, {
            "id": 429,
            "title": "我校与荆州经开区签署战略合作协议",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/FoXk38YizRmwnfXxhoCg2lrPSBESLr0XXOYigXma.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-04-19",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 430,
            "title": "荆州纺织服装职业教育联盟在荆州职业技术学院成立",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/YEK1eNQeSc4JTvT3riQGOR3JNn09MwCkZb1yGYvK.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-04-17",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 431,
            "title": "我校举办2023年医护类专场校园招聘会",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/etW7HG1cKi02GbY0aQLQ9NBYsqufvy70QwmkI47K.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-04-13",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 432,
            "title": "学校举行“湖北江瀚新材” 订单班开班仪式",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/Xkgf4CaJs4vQtSOSb7cWv5HM33DAAXU30kFeBx90.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-04-04",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 428,
            "title": "【“访企拓岗”进行时】校长周文率队前往荆州市​中医医院考察交流",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/k6ndSzrozoifMQdiy7wmFkW0FTwWnPKmvooIlByA.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-03-13",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 427,
            "title": "【“访企拓岗”进行时】党委书记杨冰赴美的荆州产业园考察调研",
            "type": 1,
            "thumb_url": "",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-03-09",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 426,
            "title": "【“访企拓岗”进行时】校长周文率队前往武汉开展访企拓岗行动",
            "type": 1,
            "thumb_url": "",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-03-03",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 425,
            "title": "【“访企拓岗”进行时】党委书记杨冰率队赴荆大（荆州）汽车配件有限公司走访调研",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/xLOblpYVvGt4Hd09nQpRjwQN5zPVoYr0yN4i2vJ7.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2022-12-05",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }, {
            "id": 424,
            "title": "【“访企拓岗”进行时】党委书记杨冰率队赴联仕（湖北）新材料有限公司走访调研",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230520\/c10xkNz8AFzxxcu0N2px30GYXOHTWFmgH8rpPjXk.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2022-11-14",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "4"
        }]
    }, {
        "name": "学校新闻",
        "category_ids": "1",
        "type": 1,
        "content": [{
            "id": 433,
            "title": "沸腾啦！！羽毛球世界冠军谌龙走进荆职校园",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230525\/Zy2EUsmLGmIzzShAYhV6G4Zz8qIhho0Cx3VLHqjA.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 1,
            "jump_url": "https:\/\/mp.weixin.qq.com\/s\/hatuq6RGGrUh8qej5i7j_w",
            "is_top": 1,
            "create_time": "2023-05-25",
            "show_app": "[1, 8]",
            "column_id": "1"
        }, {
            "id": 411,
            "title": "荆州本地政校企共同打造的首家专精特新产业学院揭牌",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230421\/mOUsYLR7lbYGzSQ2BmsEa4daVqHBIU9tKTuSrvjh.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 1,
            "create_time": "2023-04-20",
            "show_app": "[1, 2, 3, 4, 5, 8]",
            "column_id": "1"
        }, {
            "id": 408,
            "title": "速来围观！汽车文创园，你打卡了吗？",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230417\/0Zi3DPVyUNWu9xivzvST84x8iEYMZQl9i3rjwNHz.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 1,
            "jump_url": "https:\/\/mp.weixin.qq.com\/s\/XO3cGMOm-DirbBrDAq04xQ",
            "is_top": 1,
            "create_time": "2023-04-14",
            "show_app": "[1, 8]",
            "column_id": "1"
        }, {
            "id": 409,
            "title": "我们都是追“锋”少年",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230417\/oJIXjgPH79kM4EBQYYsEXBfac4m5fYuz3KcJRzKr.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 1,
            "jump_url": "https:\/\/mp.weixin.qq.com\/s\/yb2GyoW3u-gCoRATDtAFyQ",
            "is_top": 1,
            "create_time": "2023-04-10",
            "show_app": "[1, 8]",
            "column_id": "1"
        }, {
            "id": 449,
            "title": "【清廉荆职】学校“纪检委员讲廉洁微党课”决赛圆满结束",
            "type": 1,
            "thumb_url": "",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-06-30",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "1"
        }, {
            "id": 448,
            "title": "学校举行庆祝中国共产党成立102周年 暨“七一”表彰大会",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230703\/ZYfi8a3kkiba4mZKJbz4cjxXDjgbIGulZtlNRCJa.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-06-30",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "1"
        }, {
            "id": 447,
            "title": "学校参加龙舟公开赛(湖北·荆州站)暨荆州第六届运动会龙舟赛开幕式演出",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230703\/pXN17hvJSoXSqbQtP33NeXQPIVjNXq4JwNwkGUka.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-06-21",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "1"
        }, {
            "id": 446,
            "title": "荆州职业技术学院党委理论学习中心组2023年春季学期第六次集中学习",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230703\/vJ4UgTDT8iLcVkXn5iIEGgAWdCfgnJOxO9ySF0aZ.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-06-19",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "1"
        }, {
            "id": 444,
            "title": "【访企拓岗】杨冰带队开展访企拓岗促就业专项行动",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230617\/qJUsrfG6izuZb6SXf6Npqx9W8QrFc2xlcsQW5Obf.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-06-17",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "1"
        }, {
            "id": 443,
            "title": "【访企拓岗】潘莉带队开展访企拓岗促就业专项行动",
            "type": 1,
            "thumb_url": "https:\/\/cos.schoolpi.net\/uploads\/27\/20230617\/x1uk8bp7RUQXMslqBZpBfHa4LGD0WEqntPREgaw4.jpg?x-oss-process=image\/resize,h_600,w_600\/auto-orient,1\/quality,Q_80",
            "is_jump": 0,
            "jump_url": "",
            "is_top": 0,
            "create_time": "2023-06-14",
            "show_app": "[1, 2, 3, 4, 5, 8, 9]",
            "column_id": "1"
        }]
    }]
}

const homeRequestRes = {
    "errcode": 0,
    "errmsg": "ok",
    "components": [{
        "id": 1383,
        "type": 6,
        "position": 7,
        "is_float": 0,
        "extend": "null",
        "style_code": 1,
        "connectConfig": [{
            "name": "招生电话",
            "value": "0716-8022266",
            "type": 1
        }, {
            "name": "",
            "value": "",
            "type": 4
        }, {
            "name": "咨询QQ",
            "value": "https:\/\/webpage.qidian.qq.com\/2\/chat\/h5\/index.html?linkType=1&env=ol&kfuin=3009112113&fid=806&key=44fd2a4ca4e14d53989bcb1e1cebe225&cate=7&source=0&isLBS=0&isCustomEntry=0&type=10&ftype=1&_type=wpa&qidian=true&translateSwitch=0&isSsc=0&roleValue=1&roleData=13469",
            "type": 3
        }],
        "image_url_full": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20201116\/42ec1c2ffaabdcfe3dad9b1b8706bbca.png",
        "is_customer": 0,
        "is_msg": 0,
        "is_phone": 0,
        "is_phone2": 0,
        "is_phone3": 0,
        "is_vx": 0,
        "phone": "",
        "phone2": "",
        "phone3": "",
        "vx": "",
        "icon_url": "https:\/\/cos.schoolpi.net\/uploads\/icon\/20201116\/42ec1c2ffaabdcfe3dad9b1b8706bbca.png"
    }, banner, notice, nav, vr, vedios,
        articles],
    "total": 7,
    "score_list": 2,
    "score_style": 1,
    "is_get_phone": 0,
    "enroll_plan_style": 1,
    "enroll_plan_list": 2,
    "major_intro_style": 2,
    "is_showall": 0,
    "live_list": 1,
    "title_name": "智慧招生平台",
    "title_position": 2,
    "color": "#4a90e2",
    "logo": "https:\/\/cos.schoolpi.net\/uploads\/27\/20221208\/uNCQe1h54ZLsC7pgVvDciI5tyqnK71fLCgSYdwuR.jpg",
    "is_collect": 0,
    "no_mourn": 1,
    "name": "荆州职业技术学院",
    "alumni": 0
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
        wxIdForSystem: {
            type: String,
            value: "123445"
        }
    },
    data: {
        components: [],
        page_size: 20,
        page: 1,
        total: 1,
        schoolname: "",
        schoollogo: "",
        isBottom: false,
        showSkeleton: true,
        contactContent: {},
        triggered: false,
        topNum: 0,
        freshing: false,
        showOfficial: false,
        dataIsLoad: false
    },
    lifetimes: {
        attached: function () {
            this.setData({
                schoollogo: appInstance.globalData.schoollogo
            });
            this.getHomeData();
        }
    },
    methods: {
        loadOfficial: function (event) {
            console.log("公众号触发", event);
        },
        officialError: function (event) {
            console.log("公众号报错", event);
            this.setData({
                showOfficial: false
            });
        },
        onRefresh: async function () {
            wx.showLoading({
                title: "加载中"
            });
            this.setData({
                page_size: 20,
                page: 1,
                components: [],
                isBottom: false
            });
            await this.getHomeData();
            wx.hideLoading();
        },
        getHomeData: async function () {
            const that = this;
            const launchOptions = wx.getLaunchOptionsSync();
            if ([1011, 1047, 1124, 1089, 1038].includes(launchOptions.scene)) {
                that.setData({
                    showOfficial: true
                });
            } else {
                that.setData({
                    showOfficial: false
                });
            }
            const {
                page_size,
                page,
                components
            } = that.data;
            let tags = await getTags(true);
            articles.data = tags.data.map(item => {
                item.articles.forEach(article => {
                    if (article.cover) {
                        article.thumb_url = appInstance.globalData.baseUrl + article.cover.url;
                    }
                })
                return {
                    ...item,
                    content: item.articles
                }
            })
            // let articles = await getArticles();
            console.log(articles);
            console.log(tags);
            const componentsPath = "/api/ui-components"
            + "?populate[media_resources][populate]=*";
            httpInstance.get(appInstance.globalData.baseUrl + componentsPath)
                .then(res => {
                    res = flattenApiData(res);
                    res.forEach(component => {
                        component.media_resources.forEach(item => {
                            item.image_url = appInstance.globalData.baseUrl + item.image[0].url
                        })
                    })
                    console.log("res1", res)
                    const resVR = res.filter(item => item.type === 4 && item.position === 4)[0]
                    const resVedio = res.filter(item => item.type === 4 && item.position === 5)[0]
                    vr.content = resVR.media_resources;
                    vedios.content = resVedio.media_resources;

                })
            const homeUrlPath = "/api/home-page"
                + "?populate[banner][populate][banner_items][populate]=*"
                + "&populate[banner][populate][school_logo][populate]=*"
                + "&populate[notices][populate]=*"
                + "&populate[navs][populate]=*"
            httpInstance.get(appInstance.globalData.baseUrl + homeUrlPath)
                .then(res => {
                    res = flattenApiData(res);
                    console.log("res", res)
                    banner.title = res.banner.school_name;
                    banner.content = res.banner.banner_items.map(item => {
                        return {
                            "id": 3502,
                            "component_id": 1377,
                            "name": "",
                            "image_url": appInstance.globalData.baseUrl + item.image.url,
                            "source_type": 0,
                            "jump_url": "\/pages\/campus-intro\/campus-intro",
                            "jump_type": 1,
                            "type": 0,
                            "category_ids": "0",
                            "base_url": "\/pages\/campus-intro\/campus-intro"
                        }
                    });
                    notice.content = res.notices.map(item => {
                        return {
                            "id": item.id,
                            "title": item.title,
                            "column_id": "3",
                            "type": 1,
                            "is_jump": 0,
                            "jump_url": item.jump_url,
                            "is_top": 1,
                            "show_app": "[1, 8]",
                            "create_time": item.createdAt
                        }
                    })
                    nav.content = res.navs.map(item => {
                        return {
                            ...item,
                            image_url: appInstance.globalData.baseUrl + item.image.url
                        }
                    })
                    nav.content = nav.content.sort((a, b) => a.sort_index - b.sort_index);
                    this.setData({
                        schoolname: res.banner.school_name,
                        schoollogo: appInstance.globalData.baseUrl + res.banner.school_logo.url
                    })
                })
            // httpInstance.get(appInstance.globalData.baseUrl + "/miniapp/home", {
            //   page,
            //   page_size
            // })
            Promise.resolve(homeRequestRes)
                .then(function (res) {
                    const newComponents = components.concat(res.components);
                    that.setData({
                        components: newComponents,
                        total: res.total,
                        schoolname: res.name
                    });
                    const eventDetail = {
                        showCollect: res.is_collect,
                        showContact: false,
                        contactContent: {},
                        globalColor: res.color
                    };
                    if (newComponents && newComponents.length > 0) {
                        const firstComponent = newComponents[0];
                        if (firstComponent.type === 6) {
                            eventDetail.showContact = true;
                            eventDetail.contactContent = firstComponent;
                        }
                    }
                    that.triggerEvent("showContactEvent", eventDetail);
                    that.setData({
                        dataIsLoad: true
                    });
                });
        },
        onReachBottom: function () {
            console.log("加载了");
            const {
                page_size,
                page,
                total,
                components
            } = this.data;
            const lastComponent = components[components.length - 1];
            if (lastComponent.load_type === 1) {
                this.selectComponent("#waterfall" + lastComponent.id).getListById();
            } else if (page * page_size < total) {
                this.setData({
                    page: page + 1,
                    isBottom: false
                });
                this.getHomeData();
            } else {
                this.setData({
                    isBottom: true
                });
            }
        },
        openPhone: function (event) {
            wx.makePhoneCall({
                phoneNumber: event.currentTarget.dataset.phone
            });
        },
        copyWx: function (event) {
            wx.setClipboardData({
                data: event.currentTarget.dataset.wx,
                success: function () {
                    wx.showToast({
                        title: "内容已复制"
                    });
                    wx.getClipboardData({
                        success: function () {
                            wx.showToast({
                                title: "内容已复制"
                            });
                        }
                    });
                }
            });
        },
        leaveWord: function () {
            wx.navigateTo({
                url: "/pages/leaveWord/leaveWord"
            });
        },
        refresherpulling: function () {
        },
        refresherrefresh: function () {
            const that = this;
            if (!this.data.freshing) {
                this.setData({
                    freshing: true,
                    triggered: true
                });
                this.onRefresh();
                setTimeout(() => {
                    that.setData({
                        triggered: false,
                        freshing: false
                    });
                }, 1000);
            }
        },
        refresherrestore: function () {
            console.log("复位");
        },
        refresherabort: function () {
            console.log("被中止");
        },
        scrollToTop: function () {
            this.setData({
                topNum: 0
            });
        }
    }
});