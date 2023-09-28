/*! BUILD: 2019-04-19 */ ! function(a) {
    var b = function() {
        this.init()
    };
    b._cipherKey = "c1MTgzZjRh", b.prototype = {
        init: function(a) {
            this.target = a, this.targets = a ? a.find("*[lan]") : $("html *[lan]"), this.tips = a ? a.find("*[tipsLan]") : $("body *[tipsLan]")
        },
        changeLan: function(a) {
            this.init(), this.lan = a, this.iterate()
        },
        changeLanInContainer: function(a, b) {
            this.init(b), this.lan = a, this.iterate()
        },
        iterate: function() {
            var b = this;
            b.targets.each(function(a, c) {
                var d = $(c),
                    e = d.attr("lan"),
                    f = d.attr("replaceLan"),
                    g = d.attr("replaceStr"),
                    h = d.attr("replaceArr"),
                    i = b.getTextByKey(e, d) || "",
                    j = "";
                if ((j = g || b.getTextByKey(f, d)) && (i = i.replace("{0}", j)), h && $.each(h.split("|"), function(a, b) {
                        i = i.replace("{" + a + "}", b)
                    }), d.attr("tooltip")) d.attr("title", i.replace(/(^.*?)([\s.，,？?!。！]*$)/, "$1"));
                else switch (null != d.attr("p0") && (i = i.format(d.attr("p0"), d.attr("p1"), d.attr("p2"), d.attr("p3"), d.attr("p4"), d.attr("p5"))), c.tagName.toLowerCase()) {
                    case "input":
                    case "textarea":
                        d.val(i);
                        break;
                    case "img":
                        d.attr("title", i).attr("alt", i);
                        break;
                    default:
                        d.hasClass("sel") || d.html(i), null != d.attr("title") && i && d.attr("title", i)
                }
            }), b.tips.each(function(a, c) {
                var d = b.getRegionalText($(c).attr("tipsLan"));
                d && $(c).attr("tips", d[b.lan].replace(/(^.*?)([\s.，,？?!。！]*$)/, "$1"))
            }), (b.target ? b.target.find('*[lan="num"]') : $('body *[lan="num"]')).each(function(a, c) {
                var d = $(c);
                d.on("focus", function() {
                    "" == d.val() || $.browser.msie && d.attr("phLan") || d.val(d.val().replace(/\,/g, ""))
                }).on("blur", function() {
                    var a = $.trim(d.val());
                    /^[0-9]{1,15}(\.\d{1,6}){0,1}$/.test(a) && "false" != d.attr("pass") && d.val(b.getTextByKey("num", d))
                })
            }), (b.target ? b.target.find("*[phLan]") : $("body *[phLan]")).each(function(c, d) {
                var e = $(d),
                    f = e.attr("phLan"),
                    g = a.Regional[f][lan];
                if (e.attr("placeHolder", g), $.browser.msie && "password" !== e.attr("type")) {
                    var h = e.val(),
                        i = a.Regional[f][a.lan_prev] == h;
                    ("" == h || i) && e.val(g), e.on("focus", function() {
                        if (e.val() == a.Regional[e.attr("phLan")][lan]) {
                            e.val("");
                            var b = d.createTextRange();
                            b.collapse(!0), b.moveEnd("character", 0), b.moveStart("character", 0), b.select()
                        } else "num" == e.attr("lan") && "" != e.val() && e.val(e.val().replace(/\,/g, ""))
                    }).on("blur", function() {
                        "" == e.val() ? e.val(a.Regional[e.attr("phLan")][lan] || "") : "num" == e.attr("lan") && "" != e.val() && "true" == e.attr("pass") && e.val(b.getTextByKey("num", e))
                    })
                }
            }), (b.target ? b.target.find("*[titLan]") : $("body *[titLan]")).each(function(b, c) {
                var d = $(c);
                d.attr("titLan").length > 0 && a.Regional[d.attr("titLan")] && d.attr("title", a.Regional[d.attr("titLan")][lan])
            }), (b.target ? b.target.find("*[urlLan]") : $("body *[urlLan]")).each(function(a, b) {
                var c = $(b);
                c.attr("href").length > 0 && c.attr("href", CU.getUrl(c.attr("urlLan")))
            })
        },
        getTextByKey: function(a, b) {
            var c = "";
            switch (a) {
                case "date":
                case "date2":
                    var d = b.attr("lanData") || $.trim(b.val()) || $.trim(b.text());
                    if ("" == d || "false" == b.attr("pass")) return d;
                    var e = "",
                        f = d,
                        g = d.substr(0, 10).split(/[\-|\/]/);
                    d.length > 10 && (e = " " + d.substr(10)), f = g[0] + "/" + g[1] + "/" + g[2], c = f + e;
                    break;
                case "num":
                    if (isNaN($.trim(b.val() || b.text()).replace(/\,/g, ""))) {
                        c = "";
                        break
                    }
                    c = $.trim(b.val() || b.text()).formatNum(b.attr("currCode"), "true" == b.attr("rate"), !0);
                    break;
                case "fmt":
                    c = this.getRegionalText(b.attr("fmtLan"))[this.lan].format(b.attr("fmtVal").split("|"));
                    break;
                case "newfmt":
                    var h = [],
                        i = [];
                    i = b.attr("fmtVal").split("|"), $.each(i, function(a, b) {
                        h.push("@" === b.substring(0, 1) ? CU.getDictNameByKey(b.substring(1, b.length)) : b)
                    }), c = this.getRegionalText(b.attr("fmtLan"))[this.lan].format(h);
                    break;
                default:
                    try {
                        c = this.getRegionalText(a)[this.lan]
                    } catch (j) {
                        c = ""
                    }
            }
            return c
        },
        getRegionalText: function(a) {
            var b;
            return $(a.split(".")).each(function(a, c) {
                b = b ? b[c] : Regional[c]
            }), b
        },
        dispose: function() {
            delete this.targets, delete this.lan
        }
    }, a.Localize = b
}(this);