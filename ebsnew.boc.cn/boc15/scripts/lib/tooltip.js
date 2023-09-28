/*! BUILD: 2017-07-18 */
var Tooltip = function() {
    this.init()
};
Tooltip._cipherKey = "ZTIzOD", Tooltip.prototype = {
    init: function() {
        $("#info-ps").length || $('<div class="hide" style="position:absolute;z-index:3940" id="info-ps"><div class="info-tip"><p class="arrow"></p><div id="info-con" class="text"></div></div></div>').appendTo(document.body), this.element = $("#info-ps"), this.msgCon = $("#info-con")
    },
    show: function(a) {
        var b = $(a),
            c = b.closest("div.sel,div.boc-select");
        if (c && c.length) {
            if (!(b.is("span.title") || b.is("label.txt") || b.is("div.sel"))) return;
            b = c || b
        }
        if ((b.is("iframe,object,embed") || b.parent().hasClass("SecEditCtrl") && (b.is("input[type=password]") || b.is("input[type=text]"))) && (b = b.parent()), "tipsrequired" != (b.attr("tips") || "").trim() && b.is(":visible")) {
            this.setPosition(b);
            for (var c, d, e, f, g = b.attr("tips").split(" "), h = [], i = null, j = null, k = 0; k < g.length; k++) g[k] && "tipsrequired" != g[k] && ("tipsmax|tipsmin".indexOf(g[k]) > -1 ? (f = new RegExp(("tipsmax" == g[k] ? "maxLength" : "minLength") + ":([0-9]+)").exec(b.attr("validateGroup")), f && f.length > 1 && ("tipsmax" == g[k] ? (i = (Regional[g[k]][lan] || "").replace("{0}", f[1]), d = f[1]) : (j = (Regional[g[k]][lan] || "").replace("{0}", f[1]), e = f[1]))) : h.push(Regional[g[k]][lan] || ""));
            d && e && d == e ? h.push(Regional.l15229[lan].replace("{0}", d)) : (j && h.push(j), i && h.push(i)), this.msgCon.text(h.join(Regional.l115188[lan])), this.element.show()
        }
    },
    hide: function() {
        this.element.hide()
    },
    setPosition: function(a) {
        var b = 0,
            c = 0;
        if ($.browser.msie && $.browser.version < 8 && a.hasClass("ie67tips") && (b = document.documentElement.scrollTop), a.attr("inPopup")) {
            var d = $("#" + a.attr("inPopup"));
            d.get(0).scrollTop > a.closest("div.bu-pop").css("top") && (c = d.get(0).scrollTop - a.closest("div.bu-pop").css("top")), $.browser.msie && $.browser.version <= 7 && d.get(0).scrollTop > 73 && (c -= d.get(0).scrollTop - 73)
        }
        this.element.css({
            left: a.offset2().left + a.width() + 10 + "px",
            top: Math.max(a.offset2().top + b, a.offset().top) - 4 - c + "px"
        })
    },
    dispose: function() {
        this.element.remove(), this.element = null
    }
};