/*! VERSION: 307_20131112, DATE: 2013-11-12 */ ! function() {
    "use strict";
    var a, b, c, d, e, f, g;
    if (dojo.locale = "zh", window.lan = "C", window.top.location.href.indexOf("?") > -1)
        for (a = decodeURIComponent(window.top.location.href).substr(window.top.location.href.indexOf("?") + 1), b = a.split(/&/), d = b.length, c = 0; d > c; c++) switch (e = b[c].split(/\=/), f = e[0], g = e[1], "locale" === f && (0 === g.lastIndexOf("en", 0) ? (g = "en", window.lan = "E") : (g = "zh", window.lan = "C")), f) {
            case "locale":
                dojo.locale = g;
                break;
            case "dir":
                document.getElementsByTagName("html")[0].dir = g
        }
    $("#a_55_79452").on("click", function() {
        lan = "E", CU.changeLan(), $(this).hide(), $("#a_56_79453").show()
    }), $("#a_56_79453").on("click", function() {
        lan = "C", CU.changeLan(), $(this).hide(), $("#a_55_79452").show()
    })
}();