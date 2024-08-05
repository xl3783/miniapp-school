const {getCollegeIntroduction} = require("../../../apis/index");

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
    content: "",
    topNum: 0,
    dataIsLoad: false
  },
  lifetimes: {
    attached: function () {
      this.fetchData();
    }
  },
  methods: {
    fetchData: async function () {
      wx.showLoading({
        title: "加载中"
      });
      const temp = "\u003Cp\u003E荆州职业技术学院是经湖北省人民政府批准、国家教育部备案，于2001年组建的全日制普通高等职业学校，最早办学历史可追溯到1952年。\u003C/p\u003E\u003Cp\u003E学校是湖北省文明单位、湖北省优质专科高职院校、省教育厅和荆州市共建改革试点高职院校、湖北省“双高校”立项建设单位；是湖北省高技能人才培养示范基地、职业院校教师素质提高计划“优质省级职教师资培养培训基地”、省级大学生创业教育示范基地、全国职工教育示范基地；是全国首批“1+X”证书制度试点学校、首批现代学徒制试点城市项目牵头单位、全国高校样板党支部建设单位、荆州职教集团理事长单位和发起单位、荆州市域产教联合体牵头单位、全国健康学校建设单位、首届世界职业院校技能大赛获奖单位、中德先进职业教育合作项目首批试点院校、工信部专精特新产业学院首批立项建设单位。学校先后荣获“高职院校满意度全国20强”、全国五四红旗团委、全省高校征兵工作先进单位、湖北省平安校园、荆州市“开局先锋”先进集体等荣誉称号，多次获得省级教学成果奖、省级科技进步奖。\u003C/p\u003E\u003Cp\u003E学校位于中国首批历史文化名城——荆州，地处荆州大学城，东接武汉、西望三峡、北依古城、南掬长江。校园占地1996亩，学术报告厅、大学生活动中心、体育馆等场馆省内一流。在校学生1.8万人。学校拥有122个校内实训室（其中有“校中厂”式实训基地15个，校外实习实训基地256个，“厂中校”式实习实训基地18个）；电子商务、汽车检测与维修技术2个国家级校企共建生产性实训基地，数控技术、电工电子、计算机应用与软件技术3个中央财政支持的国家级实训基地，机电应用技术国家级协同创新中心，以及会计电算化、服装设计2个省级实训基地。学校馆藏图书73万余册，电子资源逾95TB，教学科研仪器设备值1.4亿元。校园一卡通系统、综合安防系统、标准化考场系统等信息化基础设施完备；学生食堂、学生公寓等生活设施完善。\u003C/p\u003E\u003Cp\u003E\u003Cimg src=\"http://localhost:1337/uploads/5ql_J_Rc_Cc_Q3_R6_HX_Re_W3_ILO_Wq3r1_Kabp_IWUR_Ox8_O3_E_d0a6ac1235.jpg\" alt=\"5qlJRcCcQ3R6HXReW3ILOWq3r1KabpIWUROx8O3E.jpg\" width=\"2133\" height=\"1200\"\u003E\u003C/p\u003E\u003Cp\u003E学校秉承“厚德、强能、感恩、恒学”校训精神，落实立德树人根本任务，以服务发展为宗旨，以促进就业为导向，在长期办学实践中，坚持高质量发展，将“努力实现‘全省一流、全国知名’作为发展目标，走出了独具品牌特色的发展之路。\u003C/p\u003E\u003Cp\u003E学校主动对接区域支柱产业、新兴产业发展，设立机电工程学院、护理学院、经济管理学院、新能源汽车学院、信息与通信工程学院、医药学院、纺织服装与艺术设计学院、生物化工学院、学前教育学院、马克思主义学院等10个二级学院及一个中专部，开设专业49个。学校建有华为网络学院、海尔智能化学院、红叶服装学院等产业学院。拥有汽车检测与维修技术、机电一体化技术、护理、服装与服饰设计、畜牧兽医、环境艺术设计等6个国家骨干专业；汽车检测与维修技术、会计等2个中央财政支持的“专业服务产业”重点建设专业；汽车检测与维修技术、环境艺术设计、电子商务等3个全国现代学徒制试点专业；会计等1个省级品牌专业；汽车检测与维修技术、服装与服饰设计、旅游管理、护理、畜牧兽医、环境艺术设计等6个省级特色专业。软件技术获批湖北省战略性新兴产业专业，数字化纺织服装专业群、汽车关键零部件智能制造与技术服务专业群被列为省级高水平专业群。\u003C/p\u003E\u003Cp\u003E学校实施“人才强校”战略，现有教职工1189人，其中全国行指委委员1人、专指委委员2人、教授22人、副教授219人，博士硕士228人，“楚天技能名师”18人。学校教师参加职业院校信息化教学大赛和教学能力大赛，荣获全国一等奖2项、三等奖2项，省一等奖3项、二等奖5项、三等奖11项；建有计算机、会计2个省级教学团队和电子商务省级技能名师工作室；获批国家级双师型教师培养培训基地和省级优质师资培训基地各1个；参加全省高校辅导员能力大赛，连续4次获得优异成绩，位居全省高职院校前列；学生参加全国职业院校技能大赛等国家级赛项，近百人次获奖。\u003C/p\u003E\u003Cp\u003E\u003Cimg src=\"http://localhost:1337/uploads/I_Ddl_Xj_Wqu2pz_Zeu_T_Wf_YP_9_J3_Gqr_CL_8_Sykksi_KA_7_M8_f1f062ba85.jpg\" alt=\"IDdlXjWqu2pzZeuTWfYP9J3GqrCL8SykksiKA7M8.jpg\" width=\"2133\" height=\"1200\"\u003E\u003C/p\u003E\u003Cp\u003E学校努力营造“人人皆可成才、人人尽展其才”的良好环境，学生可通过国内外多条渠道实现专升本，毕业生就业率长期稳定在98%以上，学校多次荣获湖北省高校就业免检单位。\u003C/p\u003E"
      const intro = await getCollegeIntroduction()
      this.setData({
        content: intro.data.content,
        dataIsLoad: true
      });
      wx.hideLoading();
      // httpInstance.get(`${app.globalData.baseUrl}/miniapp/intro`)
      //   .then(response => {
      //     this.setData({
      //       content: response.content,
      //       dataIsLoad: true
      //     });
      //   })
      //   .catch(error => {
      //     console.error("Error fetching data:", error);
      //   })
      //   .finally(() => {
      //     wx.hideLoading();
      //   });
    },
    linktap: function (event) {
      const url = event.detail.href;
      const fileType = url.substring(url.lastIndexOf(".") + 1);

      const supportedFileTypes = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"];
      if (supportedFileTypes.includes(fileType)) {
        wx.downloadFile({
          url: url,
          success: function (downloadRes) {
            const tempFilePath = downloadRes.tempFilePath;
            wx.openDocument({
              filePath: tempFilePath
            });
          },
          fail: function (error) {
            console.error("Failed to download file:", error);
          }
        });
      }
    }
  }
});