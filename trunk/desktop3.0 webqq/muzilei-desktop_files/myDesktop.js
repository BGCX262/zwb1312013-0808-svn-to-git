//http://www.muzilei.com/
myDesktop.myWindow = {
    init: function (a) {
        var e, f, g, h, j, l, m, n, o, p, q, r, s, u, v, b = {
            w: $(window).width(),
            h: $(window).height()
        },
            c = $("div.myWindow").size(),
            d = {
                windowTitle: null,
                windowsId: null,
                iconSrc: null,
                windowPositionTop: "center",
                windowPositionLeft: "center",
                windowWidth: Math.round(0.6 * b.w),
                windowHeight: Math.round(0.8 * b.h),
                windowMinWidth: 250,
                windowMinHeight: 250,
                iframSrc: null,
                windowResizable: !0,
                windowMaximize: !0,
                windowMinimize: !0,
                windowClosable: !0,
                windowDraggable: !0,
                windowStatus: "regular",
                windowAnimationSpeed: 500,
                windowAnimation: !1,
                parentPanel: "body"
            };
        return a = $.extend(d, a),
        e = $("#win_" + a.windowsId),
        f = function (a) {
                var b = "<div class='myWindow' id='win_" + a.windowsId + "' >";
                return b += "<div class='winTitle'>",
                b += "<span class='winTitleName'>" + a.windowTitle + "</span>",
                b += "<span class='winControlBtn'><a href='#' class='winMinBtn' title='最小化'></a><a href='#' class='winMaxBtn' title='最大化'></a><a href='#' class='winRestore' title='还原'></a><a href='#' class='winCloseBtn' title='关闭'></a></span></div>",
                b += "<div class='winContent'>",
                b += "<div class='loading'>正在加载中</div>",
                b += "<iframe scrolling='auto' frameborder='no' class='iframeApp' name='iframeApp_" + a.windowsId + "' id='iframeApp_" + a.windowsId + "' src=''></iframe>",
                b += "<div class='iframeFix' id='iframeFix_" + a.windowsId + "'></div>",
                b += "</div>",
                b += "</div>"
            },
        g = this,
        e.size() ? (e.hasClass("hideWin") && $("#taskTab_" + a.windowsId).trigger("click"), void 0) : ($(f(a)).appendTo(a.parentPanel), e = $("#win_" + a.windowsId), h = $("div.myWindow"), e.find("iframe"), j = e.find("div.loading"), e.find("div.winContent"), l = e.find("div.winTitle"), m = e.find("a.winMaxBtn"), n = e.find("a.winMinBtn"), o = e.find("a.winCloseBtn"), p = e.find("a.winRestore"), q = $("div.topWin"), r = Math.floor(200 * Math.random()) + (b.h - a.windowHeight) / 2, s = c ? parseInt(q.css("z-index")) + 1 : c + 100, q.width(), u = myDesktop.isTypeOf(a.windowPositionLeft, "Number") ? a.windowPositionLeft + r : r, v = myDesktop.isTypeOf(a.windowPositionTop, "Number") ? a.windowPositionTop + r / 2 : r / 2, h.removeClass("topWin").find("div.iframeFix").show(), e.addClass("topWin").css({
                width: a.windowWidth,
                height: a.windowHeight,
                left: u,
                top: v,
                "z-index": s
            }).find("div.winContent").css({
                width: a.windowWidth,
                height: a.windowHeight - l.height()
            }).find("iframe").attr("src", a.iframSrc).load(function () {
                j.hide(),
                $(this).css("left", 0)
            }).end().find("div.iframeFix").hide(), e.data("winLocation", {
                w: a.windowWidth,
                h: a.windowHeight,
                left: u,
                top: v
            }), a.windowMaximize || m.hide(), a.windowMinimize || n.hide(), a.windowClosable || o.hide(), h.mousedown(function (a) {
                var b, c, d;
                a.stopPropagation(),
                b = $("div.topWin"),
                c = this.id,
                b.is($(this)) || (d = b.removeClass("topWin").find("div.iframeFix").show().end().css("z-index"), $(this).css("z-index", parseInt(d) + 1).find("div.iframeFix").hide().end().addClass("topWin"), myDesktop.taskBar.upTaskTab(c))
            }), a.windowDraggable && g.winDrag(e), a.windowResizable && g.winResize(e, [a.windowMinWidth, a.windowMinHeight, b.w - u, b.h - v]), o.click(function () {
                g.winClose(e)
            }), m.click(function () {
                g.winMaximize(e)
            }), n.click(function () {
                g.winMinize(e)
            }), p.click(function () {
                g.winHyimize(e)
            }), l.dblclick(function () {
                var a = $(this).find(m);
                a.is(":hidden") ? p.trigger("click") : m.trigger("click")
            }), "maximized" == a.windowStatus && m.trigger("click"), "minimized" == a.windowStatus && n.trigger("click"), $(window).wresize(function () {
                "maximized" == e.data("windowStatus") && g.winMaximize(e),
                g.winResize(e, [a.windowMinWidth, a.windowMinHeight, $(window).width(), $(window).height()])
            }), e)
    },
    winDrag: function (a) {
        var b = {
            w: $(window).width(),
            h: $(window).height()
        };
        a.draggable({
            handle: "div.winTitle",
            scroll: !1
        }).bind("drag", function () {
            $(this).find("div.iframeFix").show()
        }).bind("dragstop", function (c) {
            $(this).find("div.iframeFix").hide(),
            c.pageY > b.h - 80 ? $(this).css("top", b.h - 80) : c.pageY < 0 && $(this).css("top", 0),
            a.data("winLocation", {
                w: $(this).width(),
                h: $(this).height(),
                left: $(this).css("left"),
                top: $(this).css("top")
            })
        })
    },
    winResize: function (a, b) {
        var d = a.find(".winTitle").height();
        a.resizable({
            minWidth: b[0],
            minHeight: b[1],
            containment: "document",
            maxWidth: b[2],
            maxHeight: b[3],
            autoHide: !0,
            handles: "n, e, s, w, ne, se, sw, nw, all"
        }).css("position", "absolute").bind("resize", function () {
            var c = $(this).innerHeight(),
                e = $(this).innerWidth();
            $(this).find("div.winContent").css({
                    width: e,
                    height: c - d
                }).find("div.iframeFix").show(),
            $("div.myWidget").find("div.iframeFix").show()
        }).bind("resizestop", function (b, c) {
            $("div.myWidget").find("div.iframeFix").hide(),
            $(this).find("div.iframeFix").hide();
            var d = c.size,
                e = c.position;
            a.data("winLocation", {
                    w: d.width,
                    h: d.height,
                    left: e.left,
                    top: e.top
                })
        })
    },
    findTopWin: function (a) {
        var b = null,
            c = $("div.myWindow");
        return $("div.taskTab"),
        c.each(function () {
                return $(this).css("z-index") == a ? (b = $(this), !1) : void 0
            }),
        b
    },
    winClose: function (a) {
        var b = $("div.topWin"),
            c = this.findTopWin(parseInt(b.css("z-index")) - 1);
        void 0 == c ? "" : c.addClass("topWin"),
        a.remove(),
        myDesktop.taskBar.removeTaskTab(a.attr("id")),
        null !== c && myDesktop.taskBar.upTaskTab(c.attr("id")),
        $("#desktopsContainer").css("z-index", 50)
    },
    winMaximize: function (a) {
        var b = {
            w: $(window).width(),
            h: $(window).height()
        },
            c = a.find("a.winRestore"),
            d = a.find("a.winMaxBtn"),
            e = $("#navBar"),
            f = $("#leftBar"),
            h = ($("#rightBar"), $("#topBar")),
            i = 0,
            j = 0,
            k = h.is(":hidden") ? f.width() : 0,
            l = h.is(":hidden") ? e.height() : h.height();
        f.is(":hidden") ? (i = 0, j = -1 * l) : (i = -1 * k, j = -1 * l),
        a.data("windowStatus", "maximized").draggable("disable").resizable("disable").removeClass("ui-state-disabled").addClass("maxWin").css({
                width: b.w - 2,
                height: b.h,
                left: i,
                top: j
            }).find("div.winContent").css({
                width: b.w - 2,
                height: b.h - 30
            }),
        d.hide(),
        c.css("display", "inline-block"),
        $("#desktopsContainer").css("z-index", 800)
    },
    winHyimize: function (a) {
        var b = a.data("winLocation"),
            c = a.find("a.winRestore"),
            d = a.find("a.winMaxBtn");
        a.data("windowStatus", "regular").draggable("enable").resizable("enable").removeClass("maxWin").css({
                width: b.w,
                height: b.h,
                left: b.left,
                top: b.top
            }).find("div.winContent").css({
                width: b.w,
                height: b.h - 30
            }),
        c.hide(),
        d.show(),
        $("#desktopsContainer").css("z-index", 50)
    },
    winMinize: function (a) {
        var c, b = $("div.desktop").index(a.parent());
        a.data({
            oldLeft: a.css("left"),
            index: b
        }).css("left", -99999).addClass("hideWin"),
        c = this.findTopWin(parseInt(a.css("z-index")) - 1),
        null !== c ? (a.removeClass("topWin"), c.addClass("topWin"), myDesktop.taskBar.upTaskTab(c.attr("id"))) : myDesktop.taskBar.upTaskTab(a.attr("id")),
        $("#desktopsContainer").css("z-index", 50)
    }
},
myDesktop.wallpaper = {
    init: function (a, b) {
        var c = this;
        $("body").data("wallpaperType", b),
        3 != b ? myDesktop.getImgWh(a, function (d, e) {
            $("#wallpaper").html("<img src='" + a + "' />"),
            c.setWallpaper(d, e, b),
            $(window).wresize(function () {
                c.setWallpaper(d, e, b)
            })
        }) : $("#wallpaper").css({
            background: "url(" + a + ") repeat 0 0",
            height: $(window).height()
        })
    },
    setWallpaper: function (a, b, c) {
        var d = $(window).width(),
            e = $(window).height();
        1 == c && $("#wallpaper").find("img").css({
                width: d,
                height: e
            }),
        2 == c && (a > d ? $("#wallpaper").find("img").css({
                width: a,
                height: b,
                "margin-left": (a - d) / 2 + "px",
                "margin-top": (b - e) / 2 + "px"
            }) : $("#wallpaper").find("img").css({
                width: a,
                height: b,
                "margin-left": -(a - d) / 2 + "px",
                "margin-top": -(b - e) / 2 + "px"
            }))
    },
    updateWallpaper: function (a) {
        var b = $("body").data("wallpaperType");
        this.init(a, b),
        $.ajax({})
    }
},
myDesktop.desktopBar = {
    init: function (a, b) {
        var h, i, c = $("#navBar"),
            d = "",
            g = ($("div.desktop"), $("#bottomBarBgTask"), this);
        for (h = 0; a > h; h++) {
                d += h == b ? "<a href='#' class='currTab' title='桌面" + (h + 1) + "'>" + (h + 1) + "</a>" : "<a href='#' title='桌面" + (h + 1) + "'>" + (h + 1) + "</a>"
            }
        c.find("span").html(d).end().css("margin-left", -1 * (c.width() + 20) / 2).draggable({
                scroll: !1,
                containment: "body"
            }),
        i = c.find("span > a"),
        i.on("click", function () {
                g.moveDesktop(i.index($(this)))
            }).droppable({
                scope: "a",
                over: function () {
                    g.moveDesktop(i.index($(this)))
                }
            }),
        $("#navbarHeaderImg").click(function () {
                myDesktop.login.init("login.html")
            }),
        $("a.indicator_manage").click(function () {
                myDesktop.appManagerPanel.init(),
                $("#appManagerPanel").css("top", 0),
                $("#desktopWrapper").hide()
            })
    },
    moveDesktop: function (a) {
        var f, b = $("#navBar"),
            c = b.find("span > a"),
            d = $("div.desktop"),
            e = $("div.innerDesktop");
        for (e.hide(), d.eq(a).animate({
                left: 0
            }, 500, "easeInOutQuint"), e.eq(a).show(), c.removeClass("currTab").eq(a).addClass("currTab"), d.removeClass("currDesktop").eq(a).addClass("currDesktop"), f = 0; f < d.size(); f++) {
                d.eq(f).css("left", f > a ? "2000px" : "-2000px")
            }
    }
},
myDesktop.desktop = {
    init: function (a, b) {
        var d, e, f, g, h, i, j, c = {
            arrangeType: 1,
            iconMarginLeft: 30,
            iconMarginTop: 20,
            defaultDesktop: 0
        };
        b = $.extend(c, b),
        $("body").data("desktopCofig", b),
        d = this,
        d.desktopIconInit(a),
        e = $("div.desktop"),
        f = e.size(),
        g = $("div.innerDesktop"),
        e.eq(b.defaultDesktop).addClass("currDesktop").css("left", 0).find("div.innerDesktop").fadeIn(3000),
        f > 1 && (myDesktop.desktopBar.init(f, b.defaultDesktop), j = $("#navBar").find("span > a"), e.draggable({
            axis: "x",
            scroll: !1,
            start: function (a) {
                $(this).css("cursor", "move"),
                h = a.pageX
            },
            stop: function (a) {
                $(this).css("cursor", "inherit"),
                i = a.pageX;
                var c = i - h,
                    d = e.index($(this)); - 150 > c && f - 1 > d ? j.eq(d + 1).trigger("click") : c > 150 && d > 0 ? j.eq(d - 1).trigger("click") : $(this).animate({
                        left: 0
                    }, 500, "easeInOutQuint")
            }
        })),
        d.arrangeIcons(e, b),
        $(window).wresize(function () {
            d.arrangeIcons(e, b)
        }),
        g.droppable({
            scope: "a",
            drop: function (a, c) {
                c.draggable.addClass("desktopIcon").insertBefore($(this).find(".addIcon")),
                d.arrangeIcons(e, b)
            }
        }),
        d.clickInit(),
        e.find("div.addIcon").click(function () {
            $("#win_appShop").remove(),
            $("#taskTab_appShop").parent().remove();
            var a = $(this).parents("div.desktop");
            myDesktop.myWindow.init({
                iconSrc: "icon/icon11.png",
                windowsId: "appShop",
                windowTitle: "添加应用",
                iframSrc: "appShop.html",
                windowWidth: 600,
                windowHeight: 600,
                parentPanel: a
            }),
            $("#taskTab_appShop").size() || myDesktop.taskBar.addTask("appShop", "添加应用", "icon/icon11.png")
        }),
        $(window).scroll(function () {
            $(document).scrollTop(0),
            $(document).scrollLeft(0)
        })
    },
    clickInit: function () {
        var f, g, h, i, a = $("div.desktop"),
            b = a.find("div.desktopIcon"),
            c = $("body").data("desktopCofig"),
            d = $("div.currDesktop"),
            e = this;
        for (b.on({
                mouseenter: function (a) {
                    a.stopPropagation(),
                    $(this).addClass("desktopIconOver")
                },
                mouseleave: function (a) {
                    a.stopPropagation(),
                    $(this).removeClass("desktopIconOver")
                }
            }).not(".addIcon").on("click", function (a) {
                var b, c;
                a.stopPropagation(),
                b = $(this).data("winAttrData"),
                b.isWidget ? myDesktop.widget.init({
                    id: b.windowsId,
                    width: b.windowWidth,
                    height: b.windowHeight,
                    title: b.windowTitle,
                    isDrag: !0,
                    iframeSrc: b.iframSrc,
                    top: b.top,
                    left: b.left,
                    right: b.right,
                    parentTo: ".desktop:first"
                }) : (c = $(this).parents("div.desktop"), b.parentPanel = c, myDesktop.myWindow.init(b), $("#taskTab_" + b.windowsId).size() || myDesktop.taskBar.addTask(b.windowsId, b.windowTitle, b.iconSrc))
            }).draggable({
                helper: "clone",
                scroll: !1,
                scope: "a",
                appendTo: "body",
                zIndex: 91,
                start: function (a, b) {
                    b.helper.removeClass("desktopIconOver").css({
                        "float": "none"
                    }),
                    $("body").data("curDrag", $(this).next())
                },
                stop: function () {
                    var a = $(this).parent().find(".desktopIcon"),
                        b = {};
                    a.each(function (a) {
                            b[this.id] = a
                        })
                }
            }).droppable({
                scope: "a",
                drop: function (b, d) {
                    var f = $("body").data("curDrag");
                    $(this).is(f) ? d.draggable.addClass("desktopIcon").insertAfter($(this)) : d.draggable.addClass("desktopIcon").insertBefore($(this)),
                    e.arrangeIcons(a, c)
                }
            }), f = a.size(), g = [
                []
            ], h = 1; f + 1 > h; h++) {
                g[0][h - 1] = {
                    text: "桌面" + h,
                    func: function (a) {
                        a += 1;
                        var b = $("#desktop" + a).find(".addIcon"),
                            d = $(".currDesktop ,#desktop" + a);
                        $(this).insertBefore(b),
                        e.arrangeIcons(d, c)
                    }
                }
            }
        i = [
                [{
                    text: "打开应用",
                    func: function () {
                        $(this).trigger("click")
                    }
                }],
                [{
                    text: "移动应用到",
                    data: g
                },
                {
                    text: "卸载应用",
                    func: function () {
                        $(this).remove(),
                        e.arrangeIcons(d, c)
                    }
                }]
        ],
        myDesktop.contextMenu(b.not(".addIcon"), i, "icons", 10)
    },
    arrangeIcons: function (a, b) {
        var c = $("#desktopsContainer"),
            d = $("#desktopContainer"),
            e = $("#bottomBarBgTask"),
            f = $("#navBar"),
            g = $("#topBar"),
            h = $("#leftBar"),
            i = $("#rightBar"),
            k = ($("div.innerDesktop"), $("div.outerDesktop")),
            m = (a.size(), $(window).width()),
            n = $(window).height(),
            o = g.is(":hidden") ? 0 : g.height(),
            p = h.is(":hidden") && i.is(":hidden") ? 0 : h.width(),
            q = g.is(":hidden") ? f.height() : g.height(),
            r = m - p,
            s = n - o - e.height() - 62;
        c.css({
                width: r,
                height: 0,
                left: p,
                top: q
            }),
        i.is(":hidden") || c.css({
                width: r,
                height: 0,
                left: 0,
                top: q
            }),
        d.css({
                width: r,
                height: s
            }),
        a.css({
                width: r,
                height: s
            }),
        k.css({
                width: r,
                height: s
            }).eq(0).width(r - 390),
        a.each(function (a) {
                var d, e, f, g, h, c = "#desktop" + (a + 1);
                $(c).find(".outerDesktop").niceScroll(c + " .innerDesktop", {
                    touchbehavior: !1,
                    cursorcolor: "#666",
                    horizrailenabled: !0,
                    cursoropacitymax: 0.8,
                    cursorborder: "1px solid #ccc",
                    horizrailenabled: !1,
                    zindex: 0
                }),
                $(window).wresize(function () {
                    $(c).find(".outerDesktop").getNiceScroll().resize()
                }),
                d = $(this),
                e = d.find("div.desktopIcon"),
                f = e.width(),
                g = e.height(),
                h = e.size(),
                gH = g + b.iconMarginTop,
                gW = f + b.iconMarginLeft,
                maxCols = Math.floor(k.width() / gW),
                maxRows = Math.floor(k.height() / gH),
                rows = Math.floor(k.height() / gH),
                cols = Math.ceil(h / rows),
                curcol = 0,
                currow = 0,
                cols > maxCols && (rows = Math.ceil(h / maxCols), d.find(".innerDesktop").css({
                    height: rows * gH
                })),
                d.data("deskIconNum", h),
                1 == b.arrangeType && e.css({
                    position: "absolute",
                    margin: 0,
                    left: function (a) {
                        var c = curcol * gW + 30;
                        return 0 == (a + 1) % rows && (curcol += 1),
                        c
                    },
                    top: function (a) {
                        var c = (a - rows * currow) * gH + 20;
                        return 0 == (a + 1) % rows && (currow += 1),
                        c
                    }
                }),
                2 == b.arrangeType && e.css({
                    "float": "left",
                    "margin-left": b.iconMarginLeft,
                    "margin-top": b.iconMarginTop
                })
            })
    },
    creatIcon: function (a) {
        var b = "";
        return b += "<div class='desktopIcon' id='" + a.windowsId + "'><span class='icon'>",
        a.txNum && (b += "<div class='txInfo'>" + a.txNum + "</div>"),
        b += "<img src='" + a.iconSrc + "' title='" + a.windowTitle + "'/></span><div class='text'><span>" + a.windowTitle + "</span><s></s></div></div>"
    },
    desktopIconInit: function (a) {
        var d, e, f, b = "",
            c = this;
        for (d in a) {
                for (b += "<div class='desktop' id='" + d + "'><div class='outerDesktop'><div class='innerDesktop'>", e = a[d], f = 0; f < e.length; f++) {
                    b += c.creatIcon(e[f])
                }
                b += "<div class='desktopIcon addIcon'><span class='icon'><img src='images/add_icon.png'/></span><div class='text'><span>添加</span><s></s></div></div></div></div></div>"
            }
        $("#desktopContainer").html(b);
        for (d in a) {
                for (e = a[d], f = 0; f < e.length; f++) {
                    $("#" + e[f].windowsId).data("winAttrData", e[f])
                }
            }
    },
    addApp: function (a) {
        var b, c, d, e, f;
        $("#" + a.windowsId).size() || (b = $("div.currDesktop"), c = this, d = c.creatIcon(a), b.find("div.addIcon").before(d), e = $("#" + a.windowsId), f = $("body").data("desktopCofig"), e.data("winAttrData", a), c.arrangeIcons(b, f), c.clickInit())
    }
},
myDesktop.taskBar = {
    init: function () {
        function i(a) {
            e.animate({
                "margin-right": "+=" + a
            }, 1000)
        }
        this.taskData();
        var a = $("body").data("taskBar"),
            b = a.taskNextBox,
            c = a.taskPreBox,
            d = a.ww,
            e = a.taskInnnerBlock,
            f = a.taskOuterBlock;
        d - 2 * b.outerWidth(!0),
        $(window).wresize(function () {
                var a = $(window).width() - 2 * b.outerWidth(!0),
                    c = 0;
                c = f.width() <= a ? f.width() : a,
                f.width(c)
            }),
        b.on("click", function () {
                var a = e.css("margin-right"),
                    a = parseInt(a),
                    b = $("body").data("tabWidth");
                Math.abs(a) > b ? i(b) : i(Math.abs(a))
            }),
        c.on("click", function () {
                var a = e.position(),
                    a = Math.abs(a.left),
                    b = $("body").data("tabWidth");
                a > b ? i(-1 * b) : i(-1 * a)
            })
    },
    taskData: function () {
        $("body").data("taskBar", {
            taskBlock: $("#taskBlock"),
            taskInnnerBlock: $("#taskInnnerBlock"),
            taskOuterBlock: $("#taskOuterBlock"),
            taskNextBox: $("#taskNextBox"),
            taskPreBox: $("#taskPreBox"),
            ww: $(window).width(),
            wh: $(window).height()
        })
    },
    upTaskTab: function (a) {
        var b = a.split("_").slice(1);
        $("div.taskTab").removeClass("taskCurrent"),
        $("#taskTab_" + b).parent().addClass("taskCurrent")
    },
    removeTaskTab: function (a) {
        var e, f, b = a.split("_").slice(1),
            c = $("body").data("taskBar"),
            d = $("body").data("tabWidth");
        $("#taskTab_" + b).parent().remove(),
        e = $("div.taskTab").size(),
        f = $("body").data("maxTabNum"),
        c.taskInnnerBlock.width(e * d),
        f >= e && (c.taskNextBox.hide(), c.taskPreBox.hide(), c.taskOuterBlock.width(e * d))
    },
    addTask: function (a, b, c) {
        var l, m, n, o, p, d = $("body").data("taskBar"),
            e = d.taskNextBox,
            f = d.taskPreBox,
            g = d.ww,
            h = d.taskInnnerBlock,
            i = d.taskOuterBlock,
            j = g - 2 * e.outerWidth(!0);
        $("div.taskTab").removeClass("taskCurrent"),
        l = "<div class='taskTab taskCurrent'><a href='#'  title='" + b + "' class='taskItem' id='taskTab_" + a + "'><div class='tabIcon'><img src='" + c + "'/></div><div class='tabTxt'><span>" + b + "</span></div></a></div>",
        $(l).prependTo(h),
        m = $("div.taskTab"),
        n = m.size(),
        o = m.width(),
        maxTabNum = Math.floor((g - 2 * e.outerWidth()) / o),
        win = $("#win_" + a),
        $("body").data({
                tabWidth: o,
                maxTabNum: maxTabNum
            }),
        j >= n * o ? i.width(n * o) : i.width(j),
        h.width(n * o),
        $("#taskTab_" + a).on("click", function () {
                var a = $("#win_" + this.id.split("_")[1]),
                    b = a.data("oldLeft"),
                    c = $("div.desktop").index(a.parent()),
                    d = $("div.desktop").index($("div.currDesktop"));
                a.hasClass("hideWin") && a.css("left", b).removeClass("hideWin"),
                a.trigger("mousedown"),
                "maximized" == a.data("windowStatus") && $("#desktopsContainer").css("z-index", 800),
                c != d && myDesktop.desktopBar.moveDesktop(c)
            }),
        n > maxTabNum && (e.show(), f.show()),
        p = [
                [{
                    text: "最大化",
                    func: function () {
                        win.find("a.winMaxBtn").trigger("click")
                    }
                },
                {
                    text: "最小化",
                    func: function () {
                        win.find("a.winMinBtn").trigger("click")
                    }
                }],
                [{
                    text: "关闭",
                    func: function () {
                        $("#smartMenu_taskTab_" + a).remove(),
                        win.find("a.winCloseBtn").trigger("click")
                    }
                }]
        ],
        myDesktop.contextMenu($("#taskTab_" + a), p, "taskTab_" + a, 10)
    }
},
myDesktop.sildeBar = {
    init: function (a, b) {
        function v() {
            t = !1,
            u = !1,
            j.hide(),
            n.hide()
        }

        function w(a) {
            "leftBar" == a && (j.removeClass("dock_drap_effect_current"), k.addClass("dock_drap_effect_current")),
            "rightBar" == a && (j.removeClass("dock_drap_effect_current"), l.addClass("dock_drap_effect_current")),
            "topBar" == a && (j.removeClass("dock_drap_effect_current"), m.addClass("dock_drap_effect_current"))
        }
        var r, s, t, u, g = ($("#desktopContainer"), $("#leftBar"), $("#rightBar"), $("#topBar"), $("#dockContainer")),
            h = $("#default_app"),
            i = "",
            j = $(".dock_drap_effect"),
            k = $(".dock_drap_effect_left"),
            l = $(".dock_drap_effect_right"),
            m = $(".dock_drap_effect_top"),
            n = $(".dock_drap_mask");
        for ($(".dock_drop_region_top"), $(".dock_drop_region_left"), $(".dock_drop_region_right"), _self = this, r = 0; r < a.length; r++) {
                i += myDesktop.desktop.creatIcon(a[r])
            }
        for (h.html(i).droppable({
                scope: "b",
                drop: function (a, b) {
                    a.stopPropagation(),
                    b.draggable.appendTo($(this))
                }
            }), r = 0; r < a.length; r++) {
                $("#" + a[r].windowsId).data("winAttrData", a[r])
            }
        s = h.find(".desktopIcon"),
        s.hover(function () {
                $(this).addClass("btnOver")
            }, function () {
                $(this).removeClass("btnOver")
            }).on("click", function (a) {
                a.stopPropagation();
                var b = $(this).data("winAttrData"),
                    c = $("div.currDesktop");
                b.parentPanel = c,
                myDesktop.myWindow.init(b),
                $("#taskTab_" + b.windowsId).size() || myDesktop.taskBar.addTask(b.windowsId, b.windowTitle, b.iconSrc)
            }).draggable({
                helper: "clone",
                scroll: !1,
                opacity: 0.7,
                scope: "b",
                containment: "parent",
                start: function (a, b) {
                    b.helper.removeClass("btnOver")
                }
            }).droppable({
                scope: "b",
                drop: function (a, b) {
                    a.stopPropagation(),
                    b.draggable.insertBefore($(this))
                }
            }).on("mousedown", function (a) {
                a.stopPropagation()
            }),
        "left" == b && _self.moveLeft(),
        "right" == b && _self.moveRight(),
        "top" == b && _self.moveTop(),
        t = !1,
        u = !1,
        g.mousedown(function () {
                t = !0,
                $(this).mousemove(function () {
                    u = !0,
                    t && (j.show(), n.show(), w($(this).parent().attr("id")))
                }),
                $("body").mouseup(function () {
                    v()
                }),
                $(".dock_drap_effect_top,.dock_drop_region_top").mouseover(function () {
                    w("topBar")
                }).mouseup(function () {
                    v(),
                    _self.moveTop()
                }),
                $(".dock_drap_effect_left,.dock_drop_region_left").mouseover(function () {
                    w("leftBar")
                }).mouseup(function () {
                    v(),
                    _self.moveLeft()
                }),
                $(".dock_drap_effect_right,.dock_drop_region_right").mouseover(function () {
                    w("rightBar")
                }).mouseup(function () {
                    v(),
                    _self.moveRight()
                })
            }).mouseup(function () {
                $(this).removeClass("dock_drap_effect_current")
            }),
        $("#showZm_btn").toggle(function (a) {
                a.preventDefault(),
                a.stopPropagation(),
                myDesktop.fullscreenIE(),
                myDesktop.fullscreen()
            }, function () {
                myDesktop.fullscreenIE(),
                myDesktop.exitFullscreen()
            }),
        $("#shizhong_btn").click(function (a) {
                a.preventDefault(),
                a.stopPropagation(),
                myDesktop.widget.init({
                    id: "shizhong",
                    width: 140,
                    height: 230,
                    title: "时钟",
                    isDrag: !0,
                    iframeSrc: "app_tools/shizhong/index.html",
                    top: 20,
                    left: "auto",
                    right: 50,
                    parentTo: $("div.currDesktop")
                })
            }),
        $("#weather_btn").click(function (a) {
                a.preventDefault(),
                a.stopPropagation(),
                myDesktop.widget.init({
                    id: "weather",
                    width: 200,
                    height: 320,
                    title: "天气预报",
                    isDrag: !0,
                    iframeSrc: "app_tools/weather/index.html",
                    top: 260,
                    left: "auto",
                    right: 20,
                    parentTo: $("div.currDesktop")
                })
            }),
        $("#shizhong_btn,#weather_btn").trigger("click"),
        $("#them_btn").click(function (a) {
                a.preventDefault(),
                a.stopPropagation(),
                myDesktop.myWindow.init({
                    iconSrc: "theme/default/images/skin.png",
                    windowsId: "skins",
                    windowTitle: "主题设置",
                    iframSrc: "app_tools/skins/index.html",
                    windowWidth: 500,
                    windowHeight: 380,
                    parentPanel: ".currDesktop"
                }),
                $("#taskTab_skins").size() || myDesktop.taskBar.addTask("skins", "主题设置", "theme/default/images/skin.png")
            }),
        $("div.default_tools > a").mousemove(function (a) {
                a.preventDefault(),
                a.stopPropagation()
            }).mousedown(function (a) {
                a.preventDefault(),
                a.stopPropagation()
            })
    },
    moveLeft: function () {
        var a = $("#leftBar"),
            b = $("#dockContainer");
        $("#rightBar,#topBar").hide(),
        a.show().append(b),
        b.removeClass("dock_pos_right").addClass("dock_pos_left").addClass("dock_container"),
        myDesktop.desktop.arrangeIcons($(".desktop"), $("body").data("desktopCofig"))
    },
    moveRight: function () {
        var a = $("#rightBar"),
            b = $("#dockContainer");
        $("#leftBar,#topBar").hide(),
        b.removeClass("dock_pos_left").addClass("dock_pos_right").addClass("dock_container"),
        a.show().append(b),
        myDesktop.desktop.arrangeIcons($(".desktop"), $("body").data("desktopCofig"))
    },
    moveTop: function () {
        var a = $("#topBar"),
            b = $("#dockContainer");
        $("#rightBar,#leftBar").hide(),
        a.show().append(b),
        b.removeClass("dock_container").removeClass("dock_pos_right").removeClass("dock_pos_left"),
        myDesktop.desktop.arrangeIcons($(".desktop"), $("body").data("desktopCofig"))
    }
},
myDesktop.widget = {
    init: function (a) {
        var e, b = {
            id: "",
            width: 210,
            height: 210,
            title: "小工具",
            isDrag: !0,
            iframeSrc: "",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto",
            parentTo: "body"
        },
            c = this,
            d = $.extend(b, a);
        $("#myWidget_" + d.id).size() || ($(d.parentTo).append(c.widgetHtml(d)), e = $("#myWidget_" + d.id), widgetTitle = e.find("div.widgetTitle"), widgetClose = e.find("a.widgetClose"), widgetCon = e.find("div.widgetCon"), e.css({
                width: d.width,
                height: d.height,
                left: d.left,
                right: d.right,
                top: d.top,
                bottom: d.bottom
            }).hover(function () {
                $(this).find(".innerWidgetTitle").show()
            }, function () {
                $(this).find(".innerWidgetTitle").hide()
            }).find("iframe").attr("src", d.iframeSrc).load(function () {
                e.find("div.loading").hide()
            }), widgetCon.height(d.height - widgetTitle.height()), d.isDrag && e.draggable({
                scroll: !1,
                drag: function () {
                    $(this).find(".iframeFix").show()
                },
                stop: function () {
                    var a = parseInt($(this).css("left")),
                        b = $(this).width();
                    $(this).find(".iframeFix").hide(),
                    $(this).css({
                            left: "auto",
                            right: $(window).width() - a - b - 73
                        })
                }
            }), widgetClose.click(function () {
                e.remove()
            }))
    },
    widgetHtml: function (a) {
        return "<div class='myWidget' id='myWidget_" + a.id + "'><div class='widgetTitle'><div class='innerWidgetTitle'><b>" + a.title + "</b><span class='widgetBtn'><a href='#' class='widgetClose'></a></span></div></div><div class='widgetCon'><iframe src='#' allowtransparency='true' frameborder='0' scrolling='no' width='100%' height='100%'></iframe><div class='loading'>正在加载中...</div><div class='iframeFix' id='iframeFix_" + a.id + "'></div></div></div>"
    }
},
myDesktop.startBtn = {
    init: function (a) {
        function g(a, b) {
            var d, e, f, c = "";
            for (c += b ? "<ul class='item childItem'>" : "<ul class='item'>", d = 0; d < a.length; d++) {
                for (f = a[d], 0 != d && (c += "<div class='line'></div>"), e = 0; e < f.length; e++) {
                    void 0 == f[e]["childItem"] ? c += "<li id=" + f[e]["id"] + "><span><img src='" + f[e]["icon"] + "'/>" + f[e]["text"] + "</span></li>" : (c += "<li id=" + f[e]["id"] + "><span><img src='" + f[e]["icon"] + "'/>" + f[e]["text"] + "</span><b></b>", c += g(f[e]["childItem"], 1), c += "</li>", $("#" + f[e]["id"]).live("mouseover", function () {
                        $(this).children(".childItem").show()
                    }).live("mouseout", function () {
                        $(this).children(".childItem").hide()
                    })),
                    $("#" + f[e]["id"]).live("click", f[e]["func"])
                }
            }
            return c += "</ul >"
        }
        var b = $("#start_btn"),
            c = $("#start_block"),
            d = $("#start_item"),
            e = $("#topBar,#leftBar,#rightBar");
        d.append(g(a, 0)),
        b.click(function (a) {
                a.preventDefault(),
                a.stopPropagation(),
                d.is(":hidden") ? (e.css("z-index", 800), d.show()) : (e.css("z-index", 45), d.hide())
            }).on("mousemove", function (a) {
                a.stopPropagation()
            }),
        c.mousemove(function (a) {
                a.preventDefault()
            }),
        $("body").click(function (a) {
                a.preventDefault(),
                e.css("z-index", 45),
                d.hide(),
                $(".childItem").hide()
            })
    }
},
myDesktop.login = {
    init: function (a) {
        var d, e, b = "<div class='login_box'><div id='ui_boxyClose' class='ui_boxyClose'></div><div class='login_logo'></div><iframe src='#' frameborder='0' width='380' height='258' scrolling='no'></iframe></div>",
            c = "<div class='ui_maskLayer'></div>";
        $("body").append($(c)),
        $("body").append($(b)),
        d = $("div.login_box"),
        e = $("#ui_boxyClose"),
        d.draggable({
                scroll: !1,
                containment: "parent",
                handle: ".login_logo"
            }).find("iframe").attr("src", a),
        e.click(function () {
                $("div.login_box,div.ui_maskLayer").remove()
            })
    }
},
myDesktop.appManagerPanel = {
    init: function () {
        function m() {
            a.css("top", "-9999px"),
            $("#desktopWrapper").show(),
            e.css("margin-left", 0),
            myDesktop.desktop.arrangeIcons($("div.desktop"), $("body").data("desktopCofig"))
        }

        function u(a) {
            e.animate({
                "margin-left": "+=" + a
            }, 100, "easeInOutCirc")
        }
        var n, o, p, r, s, t, a = $("#appManagerPanel"),
            b = $(".aMg_close"),
            c = $(".aMg_dock_container"),
            d = $(".aMg_folder_container"),
            e = $(".aMg_folder_innercontainer"),
            f = $("#aMg_prev"),
            g = $("#aMg_next"),
            h = $(window).height(),
            i = $(window).width(),
            j = $("div.desktop").size(),
            k = "";
        for (d.height(h - c.height()), c.append($("#default_app").clone(!0)), b.click(function () {
                m()
            }), n = 0; j > n; n++) {
                k += "<div class='folderItem folderItem_turn' id='folder_" + n + "'><div class='folder_bg'>" + (n + 1) + "</div><div class='folderOuter'><div class='folderInner' style='overflow: hidden;'></div></div><div class='aMg_line_y'></div></div>"
            }
        for (e.html(k), o = $("div.folderItem"), p = parseInt(i / 5), $(".folderOuter"), o.css("width", p), n = 0; j > n; n++) {
                $("#folder_" + n).find(".folderInner").append($("div.innerDesktop").eq(n).find(".desktopIcon:not(.addIcon)").clone()),
                $("#folder_" + n).find(".folderOuter").niceScroll("#folder_" + n + " .folderInner", {
                    touchbehavior: !1,
                    cursorcolor: "#666",
                    horizrailenabled: !0,
                    cursoropacitymax: 0.8,
                    cursorborder: "1px solid #ccc"
                }),
                $(window).wresize(function () {
                    $("#folder_" + n).find(".folderOuter").getNiceScroll().resize()
                })
            }
        r = o.find(".desktopIcon"),
        r.on("mouseover", function () {
                $(this).addClass("hover")
            }).on("mouseout", function () {
                $(this).removeClass("hover")
            }).attr("style", ""),
        $(".aMg_dock_container,.folderItem").find(".desktopIcon").on("click", function (a) {
                var b, c, d;
                return m(),
                b = $(this).parent().parent().parent().attr("id").split("_")[1],
                c = $("#navBar"),
                $("#" + this.id).trigger("click"),
                c.find("span > a").eq(parseInt(b)).trigger("click"),
                d = a || event,
                d.stopPropagation(),
                !1
            }),
        e.width(j * p).height(h - c.height()),
        $(window).wresize(function () {
                var a = $(window).height() - c.height(),
                    b = $(window).width() / 5;
                d.height(a),
                e.height(a).width(j * b),
                o.css("width", b),
                p = parseInt(b)
            }),
        j > 5 && d.mousemove(function (a) {
                a.pageX < 50 ? f.show() : f.hide(),
                a.pageX > $(window).width() - 50 ? g.show() : g.hide()
            }),
        s = 0,
        t = j - 5,
        f.click(function () {
                s = parseInt(e.css("margin-left")),
                0 > s && u(p)
            }),
        g.click(function () {
                s = parseInt(e.css("margin-left")),
                s > -1 * t * p && u(-1 * p)
            })
    }
};