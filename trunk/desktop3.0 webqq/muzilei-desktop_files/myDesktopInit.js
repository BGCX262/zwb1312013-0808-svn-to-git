$(window).load(function () {
    var a, b, c;
    myDesktop.stopProgress(),
    a = {
        desktop1: [{
            iconSrc: "icon/icon8.png",
            windowsId: "kuwoMusic",
            windowTitle: "酷我音乐盒",
            iframSrc: "http://mbox.kuwo.cn/",
            windowWidth: 500,
            windowHeight: 500,
            windowStatus: "maximized",
            txNum: 8
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudong",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            windowStatus: "minimized",
            txNum: 0
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubianFim",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 0
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pixlr",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidian",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "app_tools/bianqian/memo.png",
            windowsId: "memo",
            windowTitle: "便签",
            iframSrc: "app_tools/bianqian/index.html",
            windowWidth: 162,
            windowHeight: 200,
            top: 20,
            left: "auto",
            right: 260,
            isWidget: !0
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudong1",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubianFim1",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 0
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pixlr1",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidian1",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudong2",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubianFim2",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 9
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pixlr2",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidian2",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudong3",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 2
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubianFim3",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 0
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pixlr3",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidian3",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudon4g",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 3
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubianFi4m",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 0
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pixlr4",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidian4",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudo5ng",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 9
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubian5Fim",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 0
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pix5lr",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 7
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidia5n",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "icon/icon10.png",
            windowsId: "hudo6ng",
            windowTitle: "百科互动",
            iframSrc: "http://lab.hudong.com/webqq/index.html",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon7.png",
            windowsId: "dubia6nFim",
            windowTitle: "豆瓣FIM",
            iframSrc: "http://douban.fm/partner/qq_plus",
            windowWidth: 400,
            windowHeight: 400,
            txNum: 0
        },
        {
            iconSrc: "icon/icon6.png",
            windowsId: "Pixl6r",
            windowTitle: "Pixlr",
            iframSrc: "http://pixlr.com/editor/?loc=zh-cn",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon9.png",
            windowsId: "qidi6an",
            windowTitle: "起点中文",
            iframSrc: "http://webqq.qidian.com",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        }],
        desktop2: [{
            iconSrc: "icon/icon4.png",
            windowsId: "leshiwang",
            windowTitle: "乐视网",
            iframSrc: "http://www.letv.com/cooperation/qq.html",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        },
        {
            iconSrc: "icon/icon5.png",
            windowsId: "qianqianMusic",
            windowTitle: "千千音乐",
            iframSrc: "http://www.qianqian.com/paihang.html",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 23
        },
        {
            iconSrc: "icon/icon13.png",
            windowsId: "zfmeishi",
            windowTitle: "主妇美食",
            iframSrc: "http://www.zhms.cn/",
            windowWidth: 600,
            windowHeight: 500,
            txNum: 0
        },
        {
            iconSrc: "icon/icon12.png",
            windowsId: "mglv",
            windowTitle: "芒果旅游",
            iframSrc: "http://www.mangocity.com/webqq/bookFlight.html",
            windowWidth: 800,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon14.png",
            windowsId: "taobao",
            windowTitle: "淘宝网",
            iframSrc: "http://marketing.taobao.com/home/webqq/index.htm",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        }],
        desktop3: [{
            iconSrc: "icon/icon15.png",
            windowsId: "qingshu",
            windowTitle: "情书",
            iframSrc: "http://www.qingshu8.net/",
            windowWidth: 700,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon16.png",
            windowsId: "fenghuang",
            windowTitle: "凤凰网",
            iframSrc: "http://www.ifeng.com/",
            windowWidth: 800,
            windowHeight: 750,
            txNum: 0
        },
        {
            iconSrc: "icon/icon17.png",
            windowsId: "zgcun",
            windowTitle: "中关村在线",
            iframSrc: "http://www.zol.com.cn/",
            windowWidth: 800,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon18.png",
            windowsId: "suhuqc",
            windowTitle: "搜狐汽车",
            iframSrc: "http://auto.sohu.com/",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        },
        {
            iconSrc: "icon/icon19.png",
            windowsId: "buddy",
            windowTitle: "布丁电影票",
            iframSrc: "http://piao.buding.cn/",
            windowWidth: 600,
            windowHeight: 600,
            txNum: 0
        }],
        desktop4: [{
            iconSrc: "icon/icon8.png",
            windowsId: "jiaoxue",
            windowTitle: "中国数学资源网",
            iframSrc: "http://www.mathrs.net/",
            windowWidth: 800,
            windowHeight: 600,
            txNum: 5
        },
        {
            iconSrc: "icon/icon20.png",
            windowsId: "huoying",
            windowTitle: "火影忍者漫画动画",
            iframSrc: "http://www.manmankan.com/",
            windowWidth: 600,
            windowHeight: 450,
            txNum: 0
        }],
        desktop5: [{
            iconSrc: "icon/icon21.png",
            windowsId: "xxshuyuan",
            windowTitle: "潇湘书院",
            iframSrc: "http://www.xxsy.net/",
            windowWidth: 700,
            windowHeight: 500,
            txNum: 0
        }],
        desktop6: [],
        desktop7: [],
        desktop8: []
    },
    
    

    b = [{
        iconSrc: "icon/icon1.png",
        windowsId: "myblog",
        windowTitle: "我的博客",
        iframSrc: "http://www.muzilei.com/",
        windowWidth: 600,
        windowHeight: 600,
        txNum: 0
    },
    {
        iconSrc: "icon/icon2.png",
        windowsId: "abus",
        windowTitle: "关于我",
        iframSrc: "http://www.muzilei.com/sample-page",
        windowWidth: 600,
        windowHeight: 750,
        txNum: 0
    },
    {
        iconSrc: "icon/icon3.png",
        windowsId: "works",
        windowTitle: "作品",
        iframSrc: "http://www.muzilei.com/archives/category/works",
        windowWidth: 600,
        windowHeight: 750,
        txNum: 0
    },
    {
        iconSrc: "icon/icon11.png",
        windowsId: "ziyuan",
        windowTitle: "资源分享",
        iframSrc: "ziyuan.html",
        windowWidth: 600,
        windowHeight: 600,
        txNum: 25
    }],




    myDesktop.disableSelect(),
    myDesktop.wallpaper.init("theme/default/images/wallpaper.jpg", 1),
    myDesktop.desktop.init(a, {
        arrangeType: 1,
        iconMarginLeft: 45,
        iconMarginTop: 25,
        defaultDesktop: 3
    }),
    myDesktop.taskBar.init(),
    myDesktop.sildeBar.init(b, "left"),
    myDesktop.startBtn.init([
        [{
            id: "item0",
            text: "系统设置",
            icon: "icon/item0.png",
            func: function () {}
        }],
        [{
            id: "item1",
            text: "使用指南",
            icon: "icon/item1.png",
            func: function () {},
            childItem: [
                [{
                    id: "item1_0",
                    text: "系统设置",
                    icon: "icon/item0.png",
                    func: function () {}
                }],
                [{
                    id: "item1_1",
                    text: "退出系统",
                    icon: "icon/item3.png",
                    func: function () {},
                    childItem: [
                        [{
                            id: "item1_1_0",
                            text: "关于我们",
                            icon: "icon/item3.png",
                            func: function () {}
                        }]
                    ]
                }]
            ]
        },
        {
            id: "item1",
            text: "主题设置",
            icon: "icon/item2.png",
            func: function () {}
        }],
        [{
            id: "item3",
            text: "退出系统",
            icon: "icon/item3.png",
            func: function () {},
            childItem: [
                [{
                    id: "item1_3_0",
                    text: "关于我们",
                    icon: "icon/item3.png",
                    func: function () {}
                }]
            ]
        }],
        [{
            id: "item4",
            text: "关于我们",
            icon: "icon/item3.png",
            func: function () {}
        }]
    ]),
    c = [
        [{
            text: "显示桌面",
            func: function () {
                $("div.myWindow").not(".hideWin").each(function () {
                    $(this).find(".winMinBtn").trigger("click")
                })
            }
        }],
        [{
            text: "系统设置",
            func: function () {}
        },
        {
            text: "主题设置",
            func: function () {}
        }],
        [{
            text: "退出系统",
            func: function () {}
        }],
        [{
            text: "关于muzilei",
            func: function () {
                location.href = "http://www.muzilei.com/"
            }
        }]
    ],
    myDesktop.contextMenu($(document.body), c, "body", 10)
});