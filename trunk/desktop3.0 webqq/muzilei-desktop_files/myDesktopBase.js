var myDesktop = {
    getType: function (a) {
        return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
    },
    isTypeOf: function (a, b) {
        return this.getType(a) == b
    },
    textLength: function (a) {
        var b, c = 0;
        for (b = 0; b < a.length; b++) c += a.charCodeAt(b) < 0 || a.charCodeAt(b) > 255 ? 2 : 1;
        return c
    },
    getImgWh: function (a, b) {
        var c, d, e, f, g, h = new Image,
            i = document.body;
        return h.src = a,
        h.complete ? b(h.width, h.height) : (i && (g = document.createElement("div"), g.style.cssText = "visibility:hidden;position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden", g.appendChild(h), i.appendChild(g), c = h.offsetWidth, d = h.offsetHeight, f = function () {
                (h.offsetWidth !== c || h.offsetHeight !== d) && (clearInterval(e), b(h.offsetWidth, h.clientHeight), h.onload = null, g.innerHTML = "", g.parentNode.removeChild(g))
            }, e = setInterval(f, 150)), h.onload = function () {
                b(h.width, h.height),
                h.onload = h.onerror = null,
                clearInterval(e),
                i && h.parentNode.removeChild(h)
            }, void 0)
    },
    disableSelect: function () {
        function a() {
            return !1
        }
        function b() {
            return !0
        }
        document.onselectstart = new Function("return false"),
        window.sidebar && (document.onmousedown = a, document.onclick = b)
    },
    fullscreen: function () {
        var a = document.documentElement;
        a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullScreen && a.webkitRequestFullScreen()
    },
    exitFullscreen: function () {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    },
    fullscreenIE: function () {
        if ($.browser.msie) {
            var a = new ActiveXObject("WScript.Shell");
            a.sendKeys("{F11}")
        }
    },
    mouseXY: function () {
        var a = [];
        return $(document).bind("mousemove", function (b) {
            a[0] = b.pageX,
            a[1] = b.pageY
        }),
        a
    },
    contextMenu: function (a, b, c, d) {
        var e = this,
            f = e.mouseXY();
        a.smartMenu(b, {
                name: c,
                textLimit: d,
                afterShow: function () {
                    var a = $("#smartMenu_" + c),
                        b = {
                            w: $(window).width(),
                            h: $(window).height()
                        },
                        d = a.offset(),
                        e = a.height(),
                        g = a.width();
                    d.top > b.h - e && a.css("top", f[1] - e - 2),
                    d.left > b.w - g && a.css("left", f[0] - g - 2)
                }
            }),
        $(document.body).click(function (a) {
                a.preventDefault(),
                $.smartMenu.hide()
            })
    },
    progressBar: function () {
        $("<div id='loadingCover'></div><div id='loadimg'><span>正在加载,请稍等...</span></div>").appendTo("body");
        var a = $(window).width(),
            b = $(window).height();
        $("#loadingCover").css({
                width: "100%",
                height: b,
                position: "absolute",
                background: "#fff url(theme/default/images/wallpaper.jpg) no-repeat center center",
                "z-index": 999999,
                left: 0,
                top: 0
            }).fadeTo("slow", 1),
        $("#loadimg").css({
                position: "absolute",
                background: "url(\"images/loading.gif\") no-repeat center center",
                "z-index": 1e6,
                width: "110px",
                height: "64px",
                left: (a - 110) / 2,
                top: (b - 64) / 2 - 50
            }).find("span").css({
                position: "absolute",
                left: 0,
                bottom: "-40px",
                width: 110,
                display: "block",
                height: 40,
                "text-align": "center"
            })
    },
    stopProgress: function () {
        $("#loadingCover").remove(),
        $("#loadimg").remove()
    },
    includFile: function (a, b) {
        var c, d, e, f, g, h, i, j, k = "string" == typeof b ? [b] : b;
        for (c = 0; c < k.length; c++) d = k[c].replace(/^\s|\s$/g, ""),
        e = d.split("."),
        f = e[e.length - 1].toLowerCase(),
        g = "css" == f,
        h = g ? "link" : "script",
        i = g ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' ",
        j = (g ? "href" : "src") + "='" + a + d + "'",
        0 == $(h + "[" + j + "]").length && document.write("<" + h + i + j + "></" + h + ">")
    }
};
$(function () {
    myDesktop.progressBar()
}),
myDesktop.includFile("lib/css/", ["reset-min.css"]),
myDesktop.includFile("theme/default/css/", ["myWindow.css", "desktop.css", "desktopBar.css", "slideBar.css", "widget.css", "loginBox.css", "appManager.css"]),
myDesktop.includFile("lib/js/jquery/", ["themes/jquery-ui.min.css", "jquery-ui-1.9.0.custom.min.js", "jquery.winResize.js", "jquery.easing.1.3.min.js", "jquery.mousewheel.min.js", "jquery.nicescroll.min.js", "jquery.ui.touch-punch.min.js"]),
myDesktop.includFile("lib/js/jquery/jquery-smartMenu/", ["jquery-smartMenu.js", "smartMenu.css"]),
myDesktop.includFile("lib/js/mydesktop/", ["myDesktop.3.0.min.js"]);